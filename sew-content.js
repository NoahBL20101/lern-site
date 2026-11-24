// SEW 3. Jahrgang – Struktur wie sew.htl-villach.at: Kapitel 1, 2, 4, Aufgaben, Probetest, Test
window.SEW_LESSONS = [
 {
  "id": "py-start",
  "group": "Kapitel 1 · Einführung in Python",
  "num": "1.1",
  "title": "Warum Python, Werkzeuge & REPL",
  "short": "Werkzeuge & REPL",
  "source": "sew.htl-villach.at · Jahr 3 · 1. Einführung in Python (Warum Python, Werkzeuge, REPL)",
  "theory": "\n<h3>Warum Python?</h3>\n<p>Python ist die Sprache des 3. Jahrgangs. Drei Gründe aus dem Skriptum:</p>\n<ul>\n  <li><b>Knappe, lesbare Syntax</b> – wenig Sonderzeichen, liest sich fast wie Englisch.</li>\n  <li><b>Läuft direkt am Rechner</b> – ein Programm ist <i>eine</i> Textdatei, die im Terminal gestartet wird.</li>\n  <li><b>Riesiges Ökosystem</b> – Bibliotheken für Bilder, Daten, Automatisierung, ML; Skriptsprache in Blender, GIMP, Krita.</li>\n</ul>\n<p class=\"callout\">Programmierkonzepte sind <b>sprachunabhängig</b>: Verzweigung, Schleife, Funktion funktionieren überall gleich – nur die Schreibweise ändert sich. Trenne beim Lernen das <i>Konzept</i> von der <i>Python-Syntax</i>.</p>\n\n<h3>Werkzeuge</h3>\n<ol>\n  <li>Python 3 von python.org installieren – unter Windows Häkchen bei <b>„Add python.exe to PATH“</b>!</li>\n  <li>Prüfen im Terminal: <code>python --version</code> (soll 3.12 oder neuer sein; manchmal heißt der Befehl <code>python3</code>).</li>\n  <li>VS Code + Erweiterung <b>Python</b> von Microsoft.</li>\n  <li>Skript <code>hello.py</code> anlegen und mit <code>python hello.py</code> starten.</li>\n</ol>\n<div class=\"example\" data-lang=\"py\" data-stdin=\"Ada\">name = input(\"What is your name? \")\nprint(f\"Hello, {name}!\")</div>\n<p><code>input()</code> liest eine Zeile von der Tastatur, <code>print()</code> schreibt ins Terminal. Damit ist Ein- und Ausgabe für Konsolenprogramme schon komplett.</p>\n<p class=\"tip\">💡 Hier auf der Seite gibt es keine echte Tastatur-Eingabe: Bei Übungen mit <code>input()</code> trägst du die Eingaben in das Feld „Eingaben“ ein (eine pro Zeile).</p>\n\n<h3>Shebang (Linux / WSL)</h3>\n<p>Mit <code>#!/usr/bin/env python3</code> als <b>allererster Zeile</b> und <code>chmod +x hello.py</code> startet man das Skript direkt mit <code>./hello.py</code>. <code>env</code> sucht den Interpreter über die PATH-Variable. Für Python selbst ist die Zeile nur ein Kommentar, unter Windows wird sie ignoriert.</p>\n\n<h3>Die REPL</h3>\n<p><code>python</code> ohne Dateiname startet die <b>REPL</b> (<b>R</b>ead-<b>E</b>val-<b>P</b>rint-<b>L</b>oop): Ausdruck eintippen → sofort Ergebnis. Ideal, um Sprachdetails schnell auszuprobieren. Beenden mit <code>exit()</code>. <code>&gt;&gt;&gt;</code> markiert Eingaben, Zeilen ohne Prompt sind Ausgaben.</p>\n<pre class=\"syntax\">&gt;&gt;&gt; 2 ** 10\n1024\n&gt;&gt;&gt; \"ab\" * 3\n'ababab'\n&gt;&gt;&gt; len(\"media\")\n5\n&gt;&gt;&gt; 7 / 2\n3.5\n&gt;&gt;&gt; 7 // 2\n3</pre>\n<p class=\"muted\">IPython (<code>pip install ipython</code>) ist eine komfortablere REPL mit Farben, Tab-Vervollständigung und <code>%timeit</code> – dieselbe Technik steckt in Jupyter-Notebooks.</p>\n",
  "exercises": [
   {
    "id": "p1",
    "type": "output",
    "code": "print(2 ** 10)\nprint(7 / 2)\nprint(7 // 2)\nprint(\"ab\" * 3)",
    "lines": 4,
    "explain": "<code>**</code> ist die Potenz, <code>/</code> liefert immer float (3.5), <code>//</code> ist Ganzzahldivision (3), String * Zahl wiederholt den Text."
   },
   {
    "id": "p3",
    "type": "quiz",
    "task": "Was ist die <b>REPL</b>?",
    "options": [
     "Ein Editor für Python-Dateien",
     "Eine interaktive Umgebung: Ausdruck eingeben, Python wertet sofort aus und zeigt das Ergebnis",
     "Ein Paketmanager wie pip",
     "Die Fehlermeldung bei Endlosschleifen"
    ],
    "correct": 1,
    "explain": "Read-Eval-Print-Loop: lesen, auswerten, ausgeben, wiederholen. Start mit <code>python</code> ohne Dateinamen."
   },
   {
    "id": "p4",
    "type": "quiz",
    "task": "Was muss für eine Shebang-Zeile gelten?",
    "options": [
     "Sie muss die letzte Zeile sein",
     "Sie muss exakt die erste Zeile sein – nicht einmal eine Leerzeile davor",
     "Sie muss in jeder Funktion stehen",
     "Sie funktioniert nur unter Windows"
    ],
    "correct": 1,
    "explain": "<code>#!/usr/bin/env python3</code> muss Zeile 1 sein. Für Python ist sie nur ein Kommentar."
   },
   {
    "id": "n11a",
    "type": "output",
    "code": "print(len(\"media\"))\nprint(\"ab\" * 3)\nprint(2 ** 3 ** 2)",
    "lines": 3,
    "explain": "<code>**</code> wird von rechts ausgewertet: 3 ** 2 = 9, dann 2 ** 9 = 512."
   }
  ]
 },
 {
  "id": "py-typen",
  "group": "Kapitel 1 · Einführung in Python",
  "num": "1.2",
  "title": "Variablen, Datentypen & Operatoren",
  "short": "Typen & Operatoren",
  "source": "sew.htl-villach.at · Jahr 3 · 1. Einführung in Python (Variablen und Datentypen, Namenskonventionen, Operatoren)",
  "theory": "\n<h3>Variablen</h3>\n<p>Eine Variable entsteht durch die <b>erste Zuweisung</b> – ohne Schlüsselwort, ohne Typangabe.</p>\n<div class=\"example\" data-lang=\"py\">age = 16\nprice = 19.90\nname = \"Ada\"\nis_valid = True\nresult = None\nprint(type(age), type(price), type(name), type(is_valid), type(result))</div>\n<p>Der Typ hängt am <b>Wert</b>, nicht an der Variablen → <b>dynamische Typisierung</b>.</p>\n<table class=\"ops\">\n<tr><td><code>int</code></td><td>Ganzzahl – beliebig groß! (<code>2 ** 1000</code> ist exakt)</td><td><code>42</code>, <code>-3</code></td></tr>\n<tr><td><code>float</code></td><td>Kommazahl</td><td><code>3.14</code></td></tr>\n<tr><td><code>str</code></td><td>Zeichenkette</td><td><code>\"Hello\"</code>, <code>'a'</code></td></tr>\n<tr><td><code>bool</code></td><td>Wahrheitswert – <b>groß</b> geschrieben</td><td><code>True</code>, <code>False</code></td></tr>\n<tr><td><code>NoneType</code></td><td>„kein Wert“</td><td><code>None</code></td></tr>\n</table>\n<p>Typ ermitteln mit <code>type()</code>, umwandeln mit <code>int()</code>, <code>float()</code>, <code>str()</code>:</p>\n<div class=\"example\" data-lang=\"py\">print(type(7 / 2))\nprint(int(\"42\") + 1)\nprint(float(\"3.5\") * 2)\nprint(str(7) + \"7\")</div>\n<p><b>Konstanten</b> gibt es nicht wirklich – per Konvention in GROSSBUCHSTABEN: <code>VAT_RATE = 0.20</code>. Niemand prüft das, es ist Disziplin.</p>\n\n<h3>Namenskonventionen (PEP 8)</h3>\n<table class=\"ops\">\n<tr><td>Variablen & Funktionen</td><td><code>snake_case</code></td><td><code>frame_count</code>, <code>calculate_area</code></td></tr>\n<tr><td>Konstanten</td><td><code>UPPER_CASE</code></td><td><code>MAX_SIZE</code></td></tr>\n<tr><td>Klassen</td><td><code>PascalCase</code></td><td><code>MediaFile</code></td></tr>\n</table>\n<p class=\"callout\">Im Unterricht gilt außerdem: <b>Bezeichner und Kommentare auf Englisch.</b> Die Konventionen zählen bei der Beurteilung!</p>\n\n<h3>Operatoren</h3>\n<table class=\"ops\">\n<tr><td><code>/</code></td><td>Division – <b>immer float</b></td><td><code>7 / 2</code> → <code>3.5</code></td></tr>\n<tr><td><code>//</code></td><td>Ganzzahldivision</td><td><code>7 // 2</code> → <code>3</code></td></tr>\n<tr><td><code>%</code></td><td>Rest (Modulo)</td><td><code>7 % 2</code> → <code>1</code></td></tr>\n<tr><td><code>**</code></td><td>Potenz</td><td><code>2 ** 8</code> → <code>256</code></td></tr>\n<tr><td><code>==</code> <code>!=</code></td><td>gleich / ungleich – <b>ohne</b> Typumwandlung</td><td><code>1 == \"1\"</code> → <code>False</code></td></tr>\n<tr><td><code>&lt; &lt;= &gt; &gt;=</code></td><td>Vergleiche</td><td><code>3 &lt;= 3</code> → <code>True</code></td></tr>\n<tr><td><code>and or not</code></td><td>logisch (ausgeschriebene Wörter)</td><td><code>not False</code> → <code>True</code></td></tr>\n</table>\n<p class=\"tip\">⚠️ Es gibt <b>kein</b> <code>++</code>. Zähler erhöht man mit <code>count += 1</code>.</p>\n<div class=\"example\" data-lang=\"py\">age = 15\nis_member = False\nif age >= 14 and not is_member:\n    print(\"Regular ticket required.\")</div>\n",
  "exercises": [
   {
    "id": "t1",
    "type": "output",
    "code": "print(type(7 / 2))\nprint(10 // 4)\nprint(10 % 4)\nprint(1 == \"1\")",
    "lines": 4,
    "explain": "7/2 ist float, 10//4 = 2, 10%4 = 2 (Rest), und 1 == \"1\" ist False, weil int und str verschiedene Typen sind."
   },
   {
    "id": "t2",
    "type": "quiz",
    "task": "Welcher Name entspricht der Python-Konvention für eine <b>Funktion</b>?",
    "options": [
     "CalculateArea",
     "calculateArea",
     "calculate_area",
     "CALCULATE_AREA"
    ],
    "correct": 2,
    "explain": "Funktionen und Variablen: snake_case. PascalCase ist für Klassen, UPPER_CASE für Konstanten."
   },
   {
    "id": "t4",
    "type": "py",
    "task": "Lies mit <code>input()</code> eine Zahl ein und gib das <b>Doppelte</b> als Zahl aus (bei Eingabe <code>7</code> → <code>14</code>).",
    "stdin": "7",
    "hint": "Umwandeln mit int(…), sonst wird der Text verdoppelt.",
    "solution": "number = int(input(\"Number: \"))\nprint(number * 2)",
    "tests": "assert \"14\" in _out() and \"77\" not in _out(), \"Bei Eingabe 7 muss 14 ausgegeben werden (nicht 77 – int() vergessen?).\""
   },
   {
    "id": "t5",
    "type": "py",
    "task": "Schreib eine Funktion <code>is_teenager(age)</code>, die <code>True</code> liefert, wenn das Alter von 13 bis 19 (inklusive) ist, sonst <code>False</code>.",
    "starter": "def is_teenager(age):\n    ",
    "hint": "return age >= 13 and age <= 19   (Python erlaubt sogar 13 <= age <= 19)",
    "solution": "def is_teenager(age):\n    return 13 <= age <= 19",
    "tests": "for a, exp in [(12, False), (13, True), (16, True), (19, True), (20, False)]:\n    assert is_teenager(a) == exp, f\"is_teenager({a}) sollte {exp} liefern, liefert {is_teenager(a)}.\"\nassert isinstance(is_teenager(15), bool), \"Die Funktion soll True/False zurückgeben (return), nicht ausgeben.\""
   },
   {
    "id": "t6",
    "type": "output",
    "code": "x = 2 ** 100\nprint(type(x))\nprint(True and not False)\nprint(int(\"5\") + int(2.9))",
    "lines": 3,
    "explain": "int ist beliebig groß. <code>int(2.9)</code> schneidet ab (→ 2), es rundet nicht."
   }
  ]
 },
 {
  "id": "py-kontroll",
  "group": "Kapitel 1 · Einführung in Python",
  "num": "1.3",
  "title": "Einrückung, Verzweigungen & Schleifen",
  "short": "Verzweigungen & Schleifen",
  "source": "sew.htl-villach.at · Jahr 3 · 1. Einführung in Python (Einrückung ist Syntax, Verzweigungen, Schleifen) · Aufgabe 02 Teil A/B",
  "theory": "\n<h3>Einrückung ist Syntax</h3>\n<p>Python gruppiert Blöcke nicht mit Klammern, sondern mit <b>Einrückung</b>: Ein <b>Doppelpunkt</b> öffnet einen Block, alle gleich weit eingerückten Zeilen gehören dazu, die erste wieder ausgerückte Zeile beendet ihn. Üblich: <b>4 Leerzeichen</b>.</p>\n<div class=\"example\" data-lang=\"py\">age = 18\nif age >= 18:\n    print(\"adult\")\n    print(\"allowed to vote\")\nprint(\"this line always runs\")</div>\n<p>Tabs und Leerzeichen mischen → <code>IndentationError</code> / <code>TabError</code>. Vorteil: Sichtbare und tatsächliche Struktur stimmen immer überein.</p>\n\n<h3>Verzweigungen</h3>\n<div class=\"example\" data-lang=\"py\">grade = 3\nif grade == 1:\n    print(\"Sehr gut\")\nelif grade == 2:\n    print(\"Gut\")\nelif grade in (3, 4):\n    print(\"Bestanden\")\nelse:\n    print(\"Nicht genügend\")</div>\n<ul><li><code>elif</code> für Mehrfachverzweigung, Bedingung <b>ohne</b> Klammern.</li><li><code>in</code> prüft, ob ein Wert in einer Aufzählung vorkommt – ersetzt <code>or</code>-Ketten.</li></ul>\n\n<h3>Schleifen</h3>\n<p><b>while</b> – solange die Bedingung gilt:</p>\n<div class=\"example\" data-lang=\"py\">attempts = 0\nwhile attempts < 3:\n    print(f\"attempt {attempts + 1}\")\n    attempts += 1</div>\n<p><b>for</b> – über eine Sequenz. <code>range()</code> liefert Zahlenfolgen, die <b>Obergrenze ist nicht enthalten</b>:</p>\n<table class=\"ops\">\n<tr><td><code>range(5)</code></td><td>0, 1, 2, 3, 4</td></tr>\n<tr><td><code>range(1, 11)</code></td><td>1 bis 10</td></tr>\n<tr><td><code>range(10, 0, -1)</code></td><td>10 rückwärts bis 1</td></tr>\n</table>\n<div class=\"example\" data-lang=\"py\">colors = [\"red\", \"green\", \"blue\"]\nfor color in colors:\n    print(color)\nfor i, color in enumerate(colors):\n    print(f\"{i}: {color}\")</div>\n<p><code>enumerate()</code> liefert Index <b>und</b> Wert. <code>break</code> verlässt die Schleife, <code>continue</code> springt zum nächsten Durchlauf – beide sparsam einsetzen.</p>\n",
  "exercises": [
   {
    "id": "k1",
    "type": "output",
    "code": "for i in range(10, 0, -3):\n    print(i)",
    "lines": 4,
    "explain": "Start 10, Schritt -3: 10, 7, 4, 1 – die 0 (Obergrenze) ist nicht dabei."
   },
   {
    "id": "k6",
    "type": "py",
    "task": "<code>count_vowels(text)</code>: zählt, wie viele Vokale (a, e, i, o, u – groß oder klein) im Text vorkommen.",
    "starter": "def count_vowels(text):\n    ",
    "hint": "for ch in text.lower(): if ch in \"aeiou\": count += 1",
    "solution": "def count_vowels(text):\n    count = 0\n    for ch in text.lower():\n        if ch in \"aeiou\":\n            count += 1\n    return count",
    "tests": "for t, e in [(\"Hello\", 2), (\"PYTHON\", 1), (\"\", 0), (\"Aeiou xyz\", 5)]:\n    assert count_vowels(t) == e, f\"count_vowels({t!r}) sollte {e} sein, ist {count_vowels(t)}.\""
   },
   {
    "id": "n13a",
    "type": "output",
    "code": "attempts = 0\nwhile attempts < 3:\n    attempts += 1\n    if attempts == 2:\n        continue\n    print(f\"attempt {attempts}\")",
    "lines": 2,
    "explain": "continue überspringt den Rest des Durchlaufs bei attempts == 2."
   },
   {
    "id": "n13b",
    "type": "py",
    "task": "<code>grade_text(grade)</code>: liefert für die Noten 1 → <code>\"Sehr gut\"</code>, 2 → <code>\"Gut\"</code>, 3 oder 4 → <code>\"Bestanden\"</code>, sonst <code>\"Nicht genügend\"</code>. Verwende <code>elif</code> und <code>in</code>.",
    "starter": "def grade_text(grade):\n    ",
    "hint": "if grade == 1: … elif grade == 2: … elif grade in (3, 4): … else: …",
    "solution": "def grade_text(grade):\n    if grade == 1:\n        return \"Sehr gut\"\n    elif grade == 2:\n        return \"Gut\"\n    elif grade in (3, 4):\n        return \"Bestanden\"\n    else:\n        return \"Nicht genügend\"",
    "tests": "for g, e in [(1, \"Sehr gut\"), (2, \"Gut\"), (3, \"Bestanden\"), (4, \"Bestanden\"), (5, \"Nicht genügend\")]:\n    assert grade_text(g) == e, f\"grade_text({g}) sollte {e!r} liefern, liefert {grade_text(g)!r}.\""
   }
  ]
 },
 {
  "id": "py-funktionen",
  "group": "Kapitel 1 · Einführung in Python",
  "num": "1.4",
  "title": "Funktionen (inkl. Type Hints)",
  "short": "Funktionen",
  "source": "sew.htl-villach.at · Jahr 3 · 1. Einführung in Python (Funktionen, Type Hints) · Aufgabe 02",
  "theory": "\n<h3>Funktionen definieren</h3>\n<p>Funktionen bündeln Anweisungen unter einem Namen, nehmen <b>Parameter</b> entgegen und liefern mit <code>return</code> ein Ergebnis.</p>\n<div class=\"example\" data-lang=\"py\">def rectangle_area(width, height):\n    \"\"\"Return the area of a rectangle.\"\"\"\n    return width * height\n\ndef greet(name=\"guest\"):\n    return f\"Hello, {name}!\"\n\nprint(rectangle_area(4, 3))\nprint(greet())\nprint(greet(\"Ada\"))</div>\n<ul>\n  <li>Der String direkt unter <code>def</code> ist der <b>Docstring</b> (Kurzbeschreibung, wird von <code>help()</code> und VS Code angezeigt). Regel: Jede nicht triviale Funktion bekommt einen.</li>\n  <li><b>Standardwerte</b>: <code>name=\"guest\"</code> – Parameter darf beim Aufruf fehlen.</li>\n  <li><b>Benannte Argumente</b> machen Aufrufe lesbarer: <code>scale(1920, 1080, factor=0.5)</code></li>\n</ul>\n\n<h3>Funktionen ohne return → None</h3>\n<p>Manche Funktionen <i>tun</i> nur etwas (ausgeben, Datei schreiben) – andere Sprachen nennen das Prozedur. Ohne <code>return</code> liefert eine Funktion automatisch <code>None</code> – ein beliebter versteckter Fehler:</p>\n<div class=\"example\" data-lang=\"py\">def print_header(title):\n    \"\"\"Print a section header to the terminal.\"\"\"\n    print(\"=\" * 20)\n    print(title)\n    print(\"=\" * 20)\n\nresult = print_header(\"Report\")\nprint(result)</div>\n<p>Ein nacktes <code>return</code> beendet die Funktion vorzeitig (z.&nbsp;B. für Sonderfälle).</p>\n\n<h3>Mehrere Rückgabewerte</h3>\n<p>Einfach mit Komma zurückgeben – technisch ein Tupel – und beim Aufruf <b>entpacken</b>:</p>\n<div class=\"example\" data-lang=\"py\">def split_timecode(total_seconds):\n    return total_seconds // 60, total_seconds % 60\n\nminutes, seconds = split_timecode(355)\nprint(minutes, seconds)</div>\n\n<h3>Weiterführend: Type Hints</h3>\n<pre class=\"syntax\">def frames_to_seconds(frame_count: int, fps: int = 25) -> float:\n    return frame_count / fps</pre>\n<ul>\n  <li>Python <b>erzwingt</b> die Hints <b>nicht</b> – zunächst nur Dokumentation.</li>\n  <li>Werkzeuge nutzen sie: VS Code (Autovervollständigung, Warnungen), <code>mypy</code> (statische Typprüfung), <code>pydantic</code> (prüft echte Daten zur Laufzeit).</li>\n</ul>\n",
  "exercises": [
   {
    "id": "f1",
    "type": "output",
    "code": "def shout(text):\n    print(text.upper())\n\nresult = shout(\"hi\")\nprint(result)",
    "lines": 2,
    "explain": "shout() gibt HI aus, hat aber kein return – also ist result None."
   },
   {
    "id": "f2",
    "type": "py",
    "task": "<code>greet(name=\"guest\", greeting=\"Hello\")</code>: liefert z.&nbsp;B. <code>\"Hello, guest!\"</code> bzw. mit <code>greet(\"Ada\", greeting=\"Hi\")</code> → <code>\"Hi, Ada!\"</code>. Die Funktion soll den Text <b>zurückgeben</b>, nicht ausgeben.",
    "starter": "def greet(name=\"guest\", greeting=\"Hello\"):\n    ",
    "hint": "return f\"{greeting}, {name}!\"",
    "solution": "def greet(name=\"guest\", greeting=\"Hello\"):\n    return f\"{greeting}, {name}!\"",
    "tests": "assert greet() == \"Hello, guest!\", f\"greet() sollte 'Hello, guest!' liefern, liefert {greet()!r}.\"\nassert greet(\"Ada\") == \"Hello, Ada!\", \"greet('Ada') falsch.\"\nassert greet(\"Ada\", greeting=\"Hi\") == \"Hi, Ada!\", \"greet('Ada', greeting='Hi') falsch.\""
   },
   {
    "id": "f5",
    "type": "py",
    "task": "<code>split_seconds(total)</code>: zerlegt eine Sekundenanzahl in Stunden, Minuten und Sekunden und gibt alle drei zurück. <code>split_seconds(3725)</code> → <code>(1, 2, 5)</code>.",
    "starter": "def split_seconds(total):\n    ",
    "hint": "hours = total // 3600, minutes = (total % 3600) // 60, seconds = total % 60",
    "solution": "def split_seconds(total):\n    hours = total // 3600\n    minutes = (total % 3600) // 60\n    seconds = total % 60\n    return hours, minutes, seconds",
    "tests": "for t, e in [(3725, (1, 2, 5)), (59, (0, 0, 59)), (3600, (1, 0, 0)), (0, (0, 0, 0))]:\n    assert tuple(split_seconds(t)) == e, f\"split_seconds({t}) sollte {e} sein, ist {split_seconds(t)}.\""
   },
   {
    "id": "f6",
    "type": "quiz",
    "task": "Was passiert bei <code>frames_to_seconds(\"abc\")</code>, wenn die Funktion mit <code>frame_count: int</code> annotiert ist?",
    "options": [
     "Python verweigert den Aufruf sofort, weil der Typ nicht passt",
     "Python prüft den Hint nicht – der Fehler zeigt sich erst, wenn mit dem String gerechnet wird",
     "Python wandelt \"abc\" automatisch in eine Zahl um",
     "Type Hints gibt es in Python nicht"
    ],
    "correct": 1,
    "explain": "Type Hints sind Dokumentation – Python erzwingt sie nicht. Erst Werkzeuge wie VS Code oder mypy warnen."
   }
  ]
 },
 {
  "id": "py-listen",
  "group": "Kapitel 1 · Einführung in Python",
  "num": "1.5",
  "title": "Listen, Slicing & List Comprehensions",
  "short": "Listen",
  "source": "sew.htl-villach.at · Jahr 3 · 1. Einführung in Python (Listen, List Comprehensions) · Aufgabe 02 Teil C",
  "theory": "\n<h3>Listen</h3>\n<p>Die wichtigste Datenstruktur: <b>geordnet und veränderbar</b> – Pythons Gegenstück zum Array, aber sie wächst/schrumpft dynamisch und darf Typen mischen.</p>\n<div class=\"example\" data-lang=\"py\">durations = [240, 180, 320]\ndurations.append(150)        # append at the end\nprint(durations[0])          # first element\nprint(durations[-1])         # last element\nprint(len(durations))\nprint(320 in durations)\ndurations.sort()             # sort in place\nprint(durations)</div>\n<ul><li>Index beginnt bei <b>0</b>. Negative Indizes zählen vom Ende: <code>[-1]</code> letztes, <code>[-2]</code> vorletztes.</li></ul>\n\n<h3>Slicing</h3>\n<p><code>liste[start:ende]</code> schneidet einen Teil heraus – <b>ende ist nicht enthalten</b>. Funktioniert auch mit Strings!</p>\n<div class=\"example\" data-lang=\"py\">values = [10, 20, 30, 40, 50]\nprint(values[1:3])\nprint(values[:2])\nprint(values[2:])\nfilename = \"preview_final_v2.png\"\nprint(filename[-4:])</div>\n\n<h3>List Comprehensions</h3>\n<p>Kurzschreibweise für „neue Liste aus einer Sequenz bauen“:</p>\n<div class=\"grid2\">\n<div class=\"card\"><b>Klassisch</b><pre class=\"syntax\">squares = []\nfor x in range(1, 11):\n    squares.append(x * x)</pre></div>\n<div class=\"card hl\"><b>Comprehension</b><pre class=\"syntax\">squares = [x * x for x in range(1, 11)]</pre></div>\n</div>\n<p>Aufbau: <code>[ausdruck for element in sequenz if bedingung]</code> – der <code>if</code>-Teil filtert und ist optional. Lies es wie einen Satz: „die Liste aller x·x für x von 1 bis 10“.</p>\n<div class=\"example\" data-lang=\"py\">durations = [240, 180, 320, 45, 150]\nprint([d for d in durations if d >= 180])\nnames = [\"intro\", \"MAIN\", \"Outro\"]\nprint([name.lower() for name in names])</div>\n<p class=\"tip\">💡 Comprehensions gelten als guter Stil, solange sie auf einen Blick lesbar sind. Bei mehreren Bedingungen/Verschachtelung lieber die ausgeschriebene Schleife.</p>\n",
  "exercises": [
   {
    "id": "l1",
    "type": "output",
    "code": "values = [10, 20, 30, 40, 50]\nprint(values[1:4])\nprint(values[-2])\nprint(values[:1])\nprint(\"python\"[2:])",
    "lines": 4,
    "explain": "[1:4] → Index 1, 2, 3. [-2] → vorletztes. [:1] → nur das erste (als Liste). Slicing geht auch mit Strings."
   },
   {
    "id": "l3",
    "type": "py",
    "task": "<code>long_songs(durations, minimum)</code>: liefert eine neue Liste mit allen Dauern, die mindestens <code>minimum</code> Sekunden lang sind (Reihenfolge bleibt).",
    "starter": "def long_songs(durations, minimum):\n    ",
    "hint": "[d for d in durations if d >= minimum]",
    "solution": "def long_songs(durations, minimum):\n    return [d for d in durations if d >= minimum]",
    "tests": "assert long_songs([240, 180, 320, 45, 150], 180) == [240, 180, 320], \"Beispiel aus dem Skriptum stimmt nicht.\"\nassert long_songs([], 10) == [], \"Leere Liste → [].\"\nassert long_songs([5, 1], 10) == [], \"Kein Treffer → [].\""
   },
   {
    "id": "l4",
    "type": "py",
    "task": "<code>file_extension(filename)</code>: liefert die Endung ohne Punkt, in Kleinbuchstaben. <code>\"Logo.PNG\"</code> → <code>\"png\"</code>, <code>\"archiv.tar.gz\"</code> → <code>\"gz\"</code>, ohne Punkt → <code>\"\"</code>.",
    "starter": "def file_extension(filename):\n    ",
    "hint": "filename.rfind(\".\") liefert die Position des letzten Punkts (-1 wenn keiner). Dann Slicing ab Position + 1.",
    "solution": "def file_extension(filename):\n    pos = filename.rfind(\".\")\n    if pos == -1:\n        return \"\"\n    return filename[pos + 1:].lower()",
    "tests": "for f, e in [(\"Logo.PNG\", \"png\"), (\"archiv.tar.gz\", \"gz\"), (\"README\", \"\"), (\"a.b\", \"b\")]:\n    assert file_extension(f) == e, f\"file_extension({f!r}) sollte {e!r} sein, ist {file_extension(f)!r}.\""
   },
   {
    "id": "l5",
    "type": "output",
    "code": "names = [\"intro\", \"MAIN\", \"Outro\"]\nprint([n.upper() for n in names if len(n) == 5])\nprint([x % 3 for x in range(5)])",
    "lines": 2,
    "explain": "Alle drei Namen haben 5 Zeichen → alle groß. x % 3 für 0..4 ergibt 0, 1, 2, 0, 1."
   }
  ]
 },
 {
  "id": "py-tupel-dict",
  "group": "Kapitel 1 · Einführung in Python",
  "num": "1.6",
  "title": "Tupel, Dictionaries, f-Strings & Timecode",
  "short": "Tupel, Dict, f-Strings",
  "source": "sew.htl-villach.at · Jahr 3 · 1. Einführung in Python (Tupel, Dictionaries, f-Strings, Timecode-Beispiel) · Aufgaben 01 D, 02 B/C",
  "theory": "\n<h3>Tupel</h3>\n<p>Runde Klammern, beim Lesen wie eine Liste – aber <b>unveränderbar</b> (immutable). Zweck: „diese Werte gehören als Einheit zusammen“ (Auflösung, Koordinate, RGB-Farbe).</p>\n<div class=\"example\" data-lang=\"py\">resolution = (1920, 1080)\nprint(resolution[0], len(resolution))\nresolution[0] = 1280</div>\n<p>Tupel begegnen dir ständig:</p>\n<ul>\n  <li><b>Mehrere Rückgabewerte</b>: <code>return a, b</code></li>\n  <li><b>Unpacking</b>: <code>minutes, seconds = split_timecode(355)</code>, auch bei <code>enumerate()</code> und <code>dict.items()</code></li>\n  <li><b>Tausch ohne Hilfsvariable</b>: <code>a, b = b, a</code></li>\n  <li><b>Dictionary-Schlüssel</b> (Listen dürfen das nicht): <code>seats = {(1, 3): \"Ada\"}</code></li>\n</ul>\n<p class=\"tip\">⚠️ Ein Tupel mit <b>einem</b> Element braucht ein Komma: <code>(5,)</code> ist ein Tupel, <code>(5)</code> ist die Zahl 5.</p>\n\n<h3>Dictionaries</h3>\n<p>Speichert <b>Schlüssel-Wert-Paare</b> – in Java <code>HashMap</code>, in JS ein Object/Map. Zugriff über einen Schlüssel statt einer Position; intern eine Hashtabelle → sehr schnell.</p>\n<div class=\"example\" data-lang=\"py\">song = {\n    \"title\": \"Bohemian Rhapsody\",\n    \"duration\": 355,\n}\nprint(song[\"title\"])\nsong[\"year\"] = 1975\nprint(\"year\" in song)\nprint(song.get(\"genre\"))\nfor key, value in song.items():\n    print(f\"{key}: {value}\")</div>\n<p>Nicht vorhandener Schlüssel mit <code>[ ]</code> → <code>KeyError</code>; <code>.get()</code> liefert stattdessen <code>None</code>. <b>Liste von Dictionaries</b> = Standardmuster für tabellenartige Daten.</p>\n\n<h3>f-Strings</h3>\n<p>Ein <code>f</code> vor dem String erlaubt Ausdrücke in <code>{ }</code>, nach einem Doppelpunkt Formatangaben:</p>\n<div class=\"example\" data-lang=\"py\">name = \"Ada\"\nprice = 7.5\nindex = 7\nprint(f\"{name} pays {price:.2f} EUR\")\nprint(f\"frame_{index:03d}.png\")\nprint(f\"{255:x}  {1920 * 1080:,}  {0.756:.1%}\")\nvalue = 42\nprint(f\"{value=}\")</div>\n<p class=\"callout\">Aktiv verlangt werden <code>:.2f</code> (2 Nachkommastellen) und <code>:03d</code> (mit Nullen auf 3 Stellen). Der Rest (<code>&lt; &gt; ^</code> Ausrichtung, <code>,</code> Tausender, <code>%</code>, <code>x</code> hex, <code>b</code> binär, <code>=</code> Debug) ist Nachschlagewissen.</p>\n\n<h3>Komplettbeispiel: Timecode</h3>\n<p>Timecode <code>HH:MM:SS:FF</code> (FF = Frame innerhalb der Sekunde). <code>//</code> und <code>%</code> zerlegen die Gesamtzahl Schritt für Schritt:</p>\n<div class=\"example\" data-lang=\"py\">def frames_to_timecode(frame_count, fps=25):\n    \"\"\"Convert an absolute frame number to a timecode HH:MM:SS:FF.\"\"\"\n    total_seconds = frame_count // fps\n    frame_in_second = frame_count % fps\n    hours = total_seconds // 3600\n    minutes = (total_seconds % 3600) // 60\n    seconds = total_seconds % 60\n    return f\"{hours:02d}:{minutes:02d}:{seconds:02d}:{frame_in_second:02d}\"\n\nprint(frames_to_timecode(90061))</div>\n",
  "exercises": [
   {
    "id": "py-d1",
    "type": "output",
    "code": "a, b = 1, 2\na, b = b, a\nprint(a, b)\nprint(type((5)))\nprint(type((5,)))",
    "lines": 3,
    "explain": "Tausch per Tupel-Unpacking. (5) ist nur eine geklammerte Zahl, (5,) ein Tupel."
   },
   {
    "id": "py-d5",
    "type": "py",
    "task": "<span class=\"tag\">Skriptum</span> Schreib <code>frames_to_timecode(frame_count, fps=25)</code> selbst (ohne nachzuschauen). Kontrolle: Frame 90061 → <code>\"01:00:02:11\"</code>.",
    "starter": "def frames_to_timecode(frame_count, fps=25):\n    ",
    "hint": "total_seconds = frame_count // fps, frame = frame_count % fps, dann Stunden/Minuten/Sekunden mit // und % – Ausgabe mit :02d.",
    "solution": "def frames_to_timecode(frame_count, fps=25):\n    total_seconds = frame_count // fps\n    frame_in_second = frame_count % fps\n    hours = total_seconds // 3600\n    minutes = (total_seconds % 3600) // 60\n    seconds = total_seconds % 60\n    return f\"{hours:02d}:{minutes:02d}:{seconds:02d}:{frame_in_second:02d}\"",
    "tests": "for n, e in [(90061, \"01:00:02:11\"), (0, \"00:00:00:00\"), (24, \"00:00:00:24\"), (25, \"00:00:01:00\"), (2160000, \"24:00:00:00\")]:\n    assert frames_to_timecode(n) == e, f\"frames_to_timecode({n}) sollte {e} sein, ist {frames_to_timecode(n)!r}.\"\nassert frames_to_timecode(60, fps=30) == \"00:00:02:00\", \"fps-Parameter wird nicht berücksichtigt.\""
   },
   {
    "id": "n16a",
    "type": "output",
    "code": "song = {\"title\": \"Intro\", \"duration\": 90}\nsong[\"duration\"] += 10\nfor key, value in song.items():\n    print(f\"{key}={value}\")",
    "lines": 2,
    "explain": "items() liefert Schlüssel-Wert-Paare, die per Unpacking auf key und value verteilt werden."
   }
  ]
 },
 {
  "id": "rek-grund",
  "group": "Kapitel 2 · Rekursion",
  "num": "2.1",
  "title": "Die Grundidee: verkleinern bis zum trivialen Fall",
  "short": "Grundidee",
  "source": "sew.htl-villach.at · Jahr 3 · 2. Rekursion – Einleitung, Die Grundidee, Das kleinste Beispiel: der Countdown",
  "theory": "\n<h3>Was bedeutet Rekursion?</h3>\n<p><b>Rekursion</b> heißt: Etwas kommt <b>in seiner eigenen Definition</b> vor. In der Programmierung bedeutet das ganz konkret: <b>Eine Funktion ruft sich selbst auf.</b></p>\n<p>Klingt nach Endlosschleife – ist bei richtiger Konstruktion aber eine der wichtigsten Techniken der Informatik. Manche Probleme, die mit Schleifen nur mühsam gehen, lassen sich rekursiv in wenigen Zeilen lösen.</p>\n\n<h3>Rekursive Strukturen sind überall</h3>\n<div class=\"grid2\">\n  <div class=\"card\">📁 <b>Dateisystem</b><br>Ein Ordner enthält Dateien <i>und weitere Ordner</i> – die wieder Dateien und Ordner enthalten.</div>\n  <div class=\"card\">🌐 <b>HTML</b><br>Ein Element enthält Elemente, die Elemente enthalten …</div>\n  <div class=\"card\">🎬 <b>Videoschnitt</b><br>Sequenzen können andere Sequenzen enthalten.</div>\n  <div class=\"card\">🎨 <b>Photoshop</b><br>Ebenengruppen enthalten weitere Ebenengruppen.</div>\n</div>\n<p>Programme, die solche Daten verarbeiten, sind im Kern fast immer rekursiv. Ein anschauliches Bild: eine <b>Matrjoschka</b> – öffnest du die Puppe, steckt eine kleinere gleiche Puppe drin. Irgendwann kommt die kleinste, die sich nicht mehr öffnen lässt.</p>\n\n<h3>Der rekursive Ansatz</h3>\n<p class=\"callout\">Ein Problem wird gelöst, indem man <b>eine kleinere Version desselben Problems</b> löst. Die kleinere Version wird nach demselben Schema auf eine noch kleinere zurückgeführt – bis ein Fall erreicht ist, dessen Lösung <b>unmittelbar feststeht</b>.</p>\n<p>Darum besteht <b>jede</b> korrekte rekursive Funktion aus zwei Teilen:</p>\n<div class=\"grid2\">\n  <div class=\"card hl\"><b>① Basisfall</b> (Abbruchbedingung)<br>Der <b>triviale</b> Fall, der <b>ohne</b> weiteren Selbstaufruf beantwortet wird. Er <b>beendet</b> die Rekursion.<br><span class=\"muted\">Matrjoschka: die kleinste Puppe.</span></div>\n  <div class=\"card hl\"><b>② Rekursionsschritt</b><br>Die Funktion ruft sich selbst auf – aber mit einem <b>kleineren</b> Problem, das <b>näher am Basisfall</b> ist.<br><span class=\"muted\">Matrjoschka: Puppe öffnen, mit der kleineren weitermachen.</span></div>\n</div>\n<p>Fehlt der Basisfall oder wird das Problem nicht kleiner, <b>terminiert die Rekursion nicht</b> (Python bricht dann mit <code>RecursionError</code> ab). Die Kontrollfrage für jede rekursive Funktion lautet daher:</p>\n<p class=\"callout\" style=\"text-align:center;font-size:16px\"><b>Wo hört es auf – und kommt jeder Aufruf diesem Ende näher?</b></p>\n\n<h3>Das kleinste Beispiel: der Countdown</h3>\n<div class=\"example\" data-lang=\"py\">def countdown(n):\n    if n == 0:              # base case\n        print(\"Liftoff!\")\n        return\n    print(n)\n    countdown(n - 1)        # recursive step: smaller problem\n\ncountdown(3)</div>\n<table class=\"ops\">\n<tr><td><b>Basisfall</b></td><td><code>n == 0</code> → „Liftoff!“ ausgeben und mit <code>return</code> aufhören. Kein Selbstaufruf.</td></tr>\n<tr><td><b>Rekursionsschritt</b></td><td><code>countdown(n - 1)</code> → dasselbe Problem, aber <b>um 1 kleiner</b>.</td></tr>\n<tr><td><b>Kommt es näher?</b></td><td>Ja: 3 → 2 → 1 → 0. Bei jedem Start ≥ 0 wird 0 sicher erreicht.</td></tr>\n</table>\n\n<h3>Ablauf im Detail</h3>\n<ol class=\"steps\">\n  <li><code>countdown(3)</code> <span>gibt 3 aus und ruft countdown(2) auf – <b>und wartet</b></span></li>\n  <li><code>countdown(2)</code> <span>gibt 2 aus, ruft countdown(1) auf – wartet</span></li>\n  <li><code>countdown(1)</code> <span>gibt 1 aus, ruft countdown(0) auf – wartet</span></li>\n  <li><code>countdown(0)</code> <span>Basisfall: „Liftoff!“, return</span></li>\n  <li><code>Rückweg</code> <span>die drei wartenden Aufrufe kehren nacheinander zurück</span></li>\n</ol>\n<p>Probier es Schritt für Schritt aus – der Stapel links zeigt, welche Aufrufe gerade „offen“ sind:</p>\n<div class=\"trace\" data-fn=\"countdown\">def countdown(n):\n    if n == 0:\n        print(\"Liftoff!\")\n        return\n    print(n)\n    countdown(n - 1)\n\ncountdown(3)</div>\n\n<h3>Rekursion vs. Endlosschleife</h3>\n<div class=\"grid2\">\n<div class=\"card\"><b>❌ ohne Basisfall</b><pre class=\"syntax\" style=\"margin:6px 0 0\">def countdown(n):\n    print(n)\n    countdown(n - 1)   # never stops</pre></div>\n<div class=\"card\"><b>❌ wird nicht kleiner</b><pre class=\"syntax\" style=\"margin:6px 0 0\">def countdown(n):\n    if n == 0:\n        return\n    print(n)\n    countdown(n)       # same problem!</pre></div>\n</div>\n<p>Beide laufen „unendlich“ – bis Python nach ca. 1000 offenen Aufrufen mit <code>RecursionError</code> abbricht.</p>\n\n<h3>Rezept: eine rekursive Funktion entwerfen</h3>\n<p>Beispiel <code>sum_up_to(n)</code> = 1 + 2 + … + n:</p>\n<ol>\n  <li><b>Kleinster Fall?</b> <code>sum_up_to(0)</code> = 0 → das ist der Basisfall.</li>\n  <li><b>Wie hängt das Problem mit einer kleineren Version zusammen?</b> 1 + … + n = <b>n + (1 + … + (n−1))</b> = <code>n + sum_up_to(n - 1)</code>.</li>\n  <li><b>Kommt es näher?</b> n − 1 ist näher an 0 ✔</li>\n  <li><b>Hinschreiben</b>, Basisfall zuerst:</li>\n</ol>\n<div class=\"example\" data-lang=\"py\">def sum_up_to(n):\n    if n == 0:                       # 1. base case\n        return 0\n    return n + sum_up_to(n - 1)      # 2. recursive step\n\nprint(sum_up_to(100))</div>\n",
  "exercises": [
   {
    "id": "rg1",
    "type": "quiz",
    "task": "Welche zwei Bestandteile braucht <b>jede</b> korrekte rekursive Funktion?",
    "options": [
     "Eine Schleife und ein return",
     "Basisfall und Rekursionsschritt (mit kleinerem Problem)",
     "Einen Docstring und Type Hints",
     "Eine globale Variable und einen Zähler"
    ],
    "correct": 1,
    "explain": "Der Basisfall beendet die Rekursion, der Rekursionsschritt verkleinert das Problem in Richtung Basisfall."
   },
   {
    "id": "rg6",
    "type": "py",
    "task": "<code>print_stars(n)</code>: gibt rekursiv n Zeilen aus, Zeile k besteht aus k Sternen – <b>zuerst die kurze</b> Zeile: <code>*</code>, <code>**</code>, <code>***</code> … (Tipp: Arbeit auf dem Rückweg!)",
    "starter": "def print_stars(n):\n    ",
    "hint": "if n == 0: return. Dann ZUERST print_stars(n - 1), DANACH print(\"*\" * n).",
    "solution": "def print_stars(n):\n    if n == 0:\n        return\n    print_stars(n - 1)\n    print(\"*\" * n)",
    "tests": "_recursive(\"print_stars\")\n_noloop(\"print_stars\")\nassert _capture(print_stars, 3).split() == [\"*\", \"**\", \"***\"], f\"print_stars(3) gibt {_capture(print_stars, 3).split()} aus.\"\nassert _capture(print_stars, 0).strip() == \"\", \"print_stars(0) soll nichts ausgeben.\""
   },
   {
    "id": "n21a",
    "type": "quiz",
    "task": "Welche Zeile ist in <code>countdown</code> der <b>Basisfall</b>?<br><code>def countdown(n):<br>&nbsp;&nbsp;if n == 0: print(\"Liftoff!\"); return<br>&nbsp;&nbsp;print(n)<br>&nbsp;&nbsp;countdown(n - 1)</code>",
    "options": [
     "print(n)",
     "if n == 0: … return",
     "countdown(n - 1)",
     "def countdown(n):"
    ],
    "correct": 1,
    "explain": "Der Basisfall beantwortet den trivialen Fall ohne Selbstaufruf und beendet die Rekursion."
   },
   {
    "id": "n21b",
    "type": "quiz",
    "task": "Welche dieser Funktionen <b>terminiert</b> für jedes n ≥ 0?",
    "options": [
     "def f(n): return f(n - 1)",
     "def f(n):\n if n == 0: return 0\n return f(n)",
     "def f(n):\n if n == 0: return 0\n return 1 + f(n - 1)",
     "def f(n):\n if n == 0: return 0\n return 1 + f(n + 1)"
    ],
    "correct": 2,
    "explain": "Nur hier gibt es einen Basisfall UND jeder Aufruf kommt ihm näher (n − 1). f(n) wird nicht kleiner, f(n + 1) entfernt sich."
   }
  ]
 },
 {
  "id": "rek-callstack",
  "group": "Kapitel 2 · Rekursion",
  "num": "2.2",
  "title": "Der Call Stack",
  "short": "Call Stack",
  "source": "sew.htl-villach.at · Jahr 3 · 2. Rekursion – Der Call Stack, Anweisung vor oder nach dem Selbstaufruf",
  "theory": "\n<h3>Was passiert bei einem Funktionsaufruf?</h3>\n<p>Jedes Mal, wenn eine Funktion aufgerufen wird, legt Python einen <b>Stack Frame</b> (Aufrufrahmen) an. Darin stehen:</p>\n<ul>\n  <li>die <b>lokalen Variablen</b> und Parameter <i>dieses</i> Aufrufs,</li>\n  <li>die <b>Stelle</b>, an der es weitergeht, wenn ein aufgerufener Unteraufruf zurückkehrt.</li>\n</ul>\n<p>Alle aktiven Frames liegen auf dem <b>Call Stack</b> (Aufrufstapel) – wie ein Tellerstapel: Ein neuer Aufruf kommt <b>oben drauf</b>, beim <code>return</code> wird der oberste <b>wieder entfernt</b> (LIFO: <i>last in, first out</i>).</p>\n\n<h3>Bei Rekursion: mehrere Frames derselben Funktion</h3>\n<div class=\"stack\">\n  <div class=\"fr run\">countdown(0) – läuft gerade · n = 0</div>\n  <div class=\"fr\">countdown(1) – wartet · n = 1</div>\n  <div class=\"fr\">countdown(2) – wartet · n = 2</div>\n  <div class=\"fr\">countdown(3) – wartet · n = 3</div>\n  <div class=\"cap\">Call Stack beim Erreichen des Basisfalls</div>\n</div>\n<div class=\"grid2\">\n  <div class=\"card hl\"><b>Wartende Aufrufe</b><br><code>countdown(3)</code> ist <b>nicht beendet</b>, während <code>countdown(2)</code> läuft. Er steht in der Zeile des Selbstaufrufs und <b>wartet auf dessen Rückkehr</b>.</div>\n  <div class=\"card hl\"><b>Jeder Frame hat sein eigenes n</b><br>Es gibt nicht <i>eine</i> Variable <code>n</code>, die sich ändert, sondern <b>vier unabhängige</b> Variablen <code>n</code> mit 3, 2, 1 und 0.</div>\n</div>\n<p>Klick dich durch und beobachte, wie der Stapel wächst und wieder schrumpft:</p>\n<div class=\"trace\" data-fn=\"countdown\">def countdown(n):\n    if n == 0:\n        print(\"Liftoff!\")\n        return\n    print(n)\n    countdown(n - 1)\n\ncountdown(3)</div>\n<p class=\"tip\">💡 Das geht auch in VS Code: Breakpoint in die Funktion setzen, <b>Debugger</b> starten. Das Panel <b>Call Stack</b> zeigt bei jedem Selbstaufruf einen Eintrag mehr, und jeden Frame kannst du einzeln mit seinen Variablen anschauen. Das Skriptum empfiehlt diese Übung dringend!</p>\n\n<h3>Anweisung vor oder nach dem Selbstaufruf</h3>\n<p>Wo eine Anweisung relativ zum Selbstaufruf steht, bestimmt, <b>wann</b> sie ausgeführt wird:</p>\n<div class=\"grid2\">\n<div class=\"card\"><b>VOR dem Selbstaufruf</b> → beim <b>Abstieg</b><pre class=\"syntax\" style=\"margin:6px 0\">def countdown(n):\n    if n == 0:\n        print(\"Liftoff!\")\n        return\n    print(n)            # before\n    countdown(n - 1)</pre>Ausgabe: <code>3 2 1 Liftoff!</code> – in Aufrufreihenfolge.</div>\n<div class=\"card hl\"><b>NACH dem Selbstaufruf</b> → beim <b>Rückweg</b><pre class=\"syntax\" style=\"margin:6px 0\">def count_up(n):\n    if n == 0:\n        print(\"Liftoff!\")\n        return\n    count_up(n - 1)\n    print(n)            # after</pre>Ausgabe: <code>Liftoff! 1 2 3</code> – in umgekehrter Reihenfolge.</div>\n</div>\n<p>Warum? Bei <code>count_up</code> kann kein Aufruf seine <code>print</code>-Zeile erreichen, bevor sein Unteraufruf fertig ist. Der <b>innerste</b> Aufruf (n = 1) wird als Erstes fertig – also kommt die 1 zuerst. Die Ausgaben passieren beim <b>Abbau des Stapels</b>:</p>\n<div class=\"trace\" data-fn=\"count_up\">def count_up(n):\n    if n == 0:\n        print(\"Liftoff!\")\n        return\n    count_up(n - 1)\n    print(n)\n\ncount_up(3)</div>\n<p class=\"callout\"><b>Arbeit auf dem Rückweg</b> ist ein wiederkehrendes Muster: Ergebnisse von Unteraufrufen werden nach deren Rückkehr weiterverarbeitet (z.&nbsp;B. <code>n * factorial(n - 1)</code> – die Multiplikation passiert erst auf dem Rückweg!).</p>\n\n<h3>Beides kombiniert</h3>\n<div class=\"example\" data-lang=\"py\">def down_and_up(n):\n    if n == 0:\n        print(\"--- base case ---\")\n        return\n    print(\"down\", n)        # on the way down\n    down_and_up(n - 1)\n    print(\"up\", n)          # on the way back\n\ndown_and_up(3)</div>\n",
  "exercises": [
   {
    "id": "rg2",
    "type": "output",
    "task": "Was gibt dieser Code aus? (Achtung: <code>print</code> steht <b>nach</b> dem Selbstaufruf.)",
    "code": "def count_up(n):\n    if n == 0:\n        print(\"Go!\")\n        return\n    count_up(n - 1)\n    print(n)\n\ncount_up(3)",
    "lines": 4,
    "explain": "Erst laufen alle Aufrufe bis zum Basisfall („Go!“), dann werden beim Rückweg 1, 2, 3 ausgegeben."
   },
   {
    "id": "rg5",
    "type": "quiz",
    "task": "Warum gibt es beim Aufruf <code>countdown(3)</code> zeitweise <b>vier</b> verschiedene Variablen <code>n</code> gleichzeitig?",
    "options": [
     "Weil Python Variablen kopiert, wenn sie sich ändern",
     "Weil jeder Aufruf einen eigenen Stack Frame mit eigenen lokalen Variablen bekommt",
     "Weil n global ist",
     "Gibt es nicht – es ist immer dieselbe Variable"
    ],
    "correct": 1,
    "explain": "Jeder noch wartende Aufruf hat seinen eigenen Frame auf dem Call Stack – mit eigenem n (3, 2, 1, 0)."
   },
   {
    "id": "n22a",
    "type": "quiz",
    "task": "Wie viele Frames von <code>countdown</code> liegen <b>maximal gleichzeitig</b> auf dem Call Stack, wenn man <code>countdown(3)</code> aufruft?",
    "options": [
     "1",
     "3",
     "4",
     "5"
    ],
    "correct": 2,
    "explain": "countdown(3), (2), (1) und (0) – beim Erreichen des Basisfalls sind alle vier gleichzeitig offen."
   },
   {
    "id": "n22b",
    "type": "output",
    "code": "def down_and_up(n):\n    if n == 0:\n        return\n    print(\"down\", n)\n    down_and_up(n - 1)\n    print(\"up\", n)\n\ndown_and_up(2)",
    "lines": 4,
    "explain": "Abstieg: down 2, down 1. Rückweg in umgekehrter Reihenfolge: up 1, up 2."
   },
   {
    "id": "n22c",
    "type": "quiz",
    "task": "Was bedeutet <b>LIFO</b> beim Call Stack?",
    "options": [
     "Last In, First Out – der zuletzt aufgerufene Frame wird als Erstes beendet",
     "Lowest Input First Output",
     "Loop In, Function Out",
     "Der älteste Aufruf wird zuerst beendet"
    ],
    "correct": 0,
    "explain": "Wie bei einem Tellerstapel: oben drauf, oben weg. Darum kehren rekursive Aufrufe in umgekehrter Reihenfolge zurück."
   }
  ]
 },
 {
  "id": "rek-fakultaet",
  "group": "Kapitel 2 · Rekursion",
  "num": "2.3",
  "title": "Klassiker 1: die Fakultät",
  "short": "Fakultät",
  "source": "sew.htl-villach.at · Jahr 3 · 2. Rekursion – Klassiker 1: die Fakultät",
  "theory": "\n<h3>Mathematische Definition</h3>\n<p>Die Fakultät n! ist das Produkt der Zahlen 1 bis n: 5! = 5 · 4 · 3 · 2 · 1 = 120. Die Mathematik definiert sie <b>rekursiv</b>:</p>\n<div class=\"grid2\">\n  <div class=\"card hl\"><b>0! = 1</b><br><span class=\"muted\">Basisfall</span></div>\n  <div class=\"card hl\"><b>n! = n · (n − 1)!</b><br><span class=\"muted\">Rekursionsschritt</span></div>\n</div>\n<p>Das lässt sich <b>fast wörtlich</b> nach Python übertragen:</p>\n<div class=\"example\" data-lang=\"py\">def factorial(n):\n    if n == 0:\n        return 1\n    return n * factorial(n - 1)\n\nprint(factorial(5))</div>\n<p class=\"tip\">💡 Hier wird ein Wert <b>zurückgegeben</b> (return), nicht nur ausgegeben. Die Multiplikation <code>n * …</code> kann erst passieren, wenn der Unteraufruf sein Ergebnis geliefert hat → <b>Arbeit auf dem Rückweg</b>.</p>\n\n<h3>Handexpansion – die wichtigste Übungstechnik</h3>\n<p>Die Auswertung von <code>factorial(4)</code> schriftlich ausgerollt. <b>Abstieg</b>: jeder Aufruf wird durch seinen Rekursionsschritt ersetzt. <b>Rückweg</b>: von innen nach außen ausrechnen.</p>\n<pre class=\"syntax\">factorial(4)\n= 4 * factorial(3)                          ┐\n= 4 * (3 * factorial(2))                    │ Abstieg\n= 4 * (3 * (2 * factorial(1)))              │\n= 4 * (3 * (2 * (1 * factorial(0))))        ┘\n= 4 * (3 * (2 * (1 * 1)))                   ← Basisfall: factorial(0) = 1\n= 4 * (3 * (2 * 1))                         ┐\n= 4 * (3 * 2)                               │ Rückweg\n= 4 * 6                                     │\n= 24                                        ┘</pre>\n<p class=\"callout\">Wer eine rekursive Funktion nicht durchschaut, schreibt sie für einen <b>kleinen Eingabewert</b> in dieser Form aus. Diese Handrechnung ist auch Teil der Abgabe von Aufgabe 03!</p>\n<p>Dasselbe als Call Stack – achte auf die Rückgabewerte beim Abbau:</p>\n<div class=\"trace\" data-fn=\"factorial\">def factorial(n):\n    if n == 0:\n        return 1\n    return n * factorial(n - 1)\n\nprint(factorial(4))</div>\n\n<h3>Induktiv denken statt alles durchrechnen</h3>\n<p>Erfahrene Entwickler verfolgen <b>nicht</b> jeden Aufruf bis zum Ende. Sie prüfen <b>zwei Dinge getrennt</b>:</p>\n<ol>\n  <li><b>Stimmt der Basisfall?</b> <code>factorial(0)</code> liefert 1 = 0! ✔</li>\n  <li><b>Stimmt der Rekursionsschritt</b> – <i>unter der Annahme</i>, dass der Selbstaufruf das kleinere Problem <b>richtig</b> löst? Wenn <code>factorial(n - 1)</code> wirklich (n−1)! liefert, dann liefert <code>n * factorial(n - 1)</code> = n · (n−1)! = n! ✔</li>\n</ol>\n<p>Diese Annahme ist kein Trick, sondern das Beweisprinzip der <b>vollständigen Induktion</b> aus der Mathematik: Gilt der Basisfall, und folgt aus der Korrektheit für n−1 die Korrektheit für n, dann ist die Funktion für <b>alle</b> n korrekt.</p>\n<div class=\"grid2\">\n<div class=\"card\"><b>Induktion (Mathe)</b><br>Induktionsanfang: gilt für 0<br>Induktionsschritt: n−1 ⇒ n</div>\n<div class=\"card\"><b>Rekursion (Code)</b><br>Basisfall: <code>n == 0</code><br>Rekursionsschritt: <code>n * factorial(n - 1)</code></div>\n</div>\n\n<h3>Was ist mit negativen Zahlen?</h3>\n<p><code>factorial(-1)</code> ruft <code>factorial(-2)</code>, <code>factorial(-3)</code> … auf – der Basisfall 0 wird <b>nie</b> erreicht → <code>RecursionError</code>. Abhilfe: Ungültige Eingaben vorher abfangen (siehe Aufgabe 03 C).</p>\n",
  "exercises": [
   {
    "id": "rk2",
    "type": "quiz",
    "task": "Wie lautet die vorletzte Zeile der Handexpansion von <code>factorial(4)</code> (vor dem Ergebnis 24)?",
    "options": [
     "= 4 * factorial(3)",
     "= 4 * 6",
     "= 4 * (3 * 2)",
     "= 24 * 1"
    ],
    "correct": 1,
    "explain": "… = 4 * (3 * (2 * 1)) = 4 * (3 * 2) = 4 * 6 = 24."
   },
   {
    "id": "rk4",
    "type": "quiz",
    "task": "<code>factorial(-1)</code> (ohne Absicherung) endet mit <code>RecursionError</code>. Warum?",
    "options": [
     "Weil -1 kein int ist",
     "Weil der Basisfall n == 0 nie erreicht wird: -1, -2, -3 … entfernt sich immer weiter davon",
     "Weil Python keine negativen Zahlen multiplizieren kann",
     "Weil das Ergebnis zu groß wird"
    ],
    "correct": 1,
    "explain": "Der Basisfall ist unerreichbar → unendliche Rekursion → Python bricht bei ca. 1000 Ebenen ab."
   },
   {
    "id": "n23a",
    "type": "quiz",
    "task": "Beim induktiven Prüfen von <code>return n * factorial(n - 1)</code> nimmst du an, dass …",
    "options": [
     "… factorial(n - 1) das richtige Ergebnis (n−1)! liefert",
     "… n immer 0 ist",
     "… der Basisfall fehlt",
     "… factorial nur einmal aufgerufen wird"
    ],
    "correct": 0,
    "explain": "Annahme: der Selbstaufruf löst das kleinere Problem korrekt. Dann musst du nur noch prüfen, ob n · (n−1)! = n! ist."
   },
   {
    "id": "n23b",
    "type": "output",
    "code": "def factorial(n):\n    if n == 0:\n        return 1\n    result = n * factorial(n - 1)\n    print(f\"{n}! = {result}\")\n    return result\n\nfactorial(3)",
    "lines": 3,
    "explain": "Die Ausgaben passieren auf dem Rückweg – zuerst der innerste Aufruf (1! = 1), dann 2!, dann 3!."
   }
  ]
 },
 {
  "id": "rek-fibonacci",
  "group": "Kapitel 2 · Rekursion",
  "num": "2.4",
  "title": "Klassiker 2: Fibonacci und die Kosten naiver Rekursion",
  "short": "Fibonacci & Kosten",
  "source": "sew.htl-villach.at · Jahr 3 · 2. Rekursion – Klassiker 2: Fibonacci und die Kosten naiver Rekursion",
  "theory": "\n<h3>Die Fibonacci-Folge</h3>\n<p>0, 1, 1, 2, 3, 5, 8, 13, 21, … – jede Zahl ist die <b>Summe ihrer beiden Vorgänger</b>. Die rekursive Umsetzung braucht <b>zwei Basisfälle</b> und <b>zwei Selbstaufrufe</b>:</p>\n<div class=\"example\" data-lang=\"py\">def fib(n):\n    if n == 0:\n        return 0\n    if n == 1:\n        return 1\n    return fib(n - 1) + fib(n - 2)\n\nprint([fib(i) for i in range(10)])</div>\n<p class=\"tip\">💡 Warum zwei Basisfälle? Der Schritt greift auf n−1 <b>und</b> n−2 zurück. Mit nur <code>n == 0</code> würde <code>fib(1)</code> → <code>fib(0) + fib(-1)</code> aufrufen und nie enden.</p>\n\n<h3>Korrekt – aber unbrauchbar langsam</h3>\n<p>Ab etwa n = 35 dauert die Berechnung ewig. Der <b>Aufrufbaum</b> von <code>fib(5)</code> zeigt die Ursache:</p>\n<pre class=\"syntax tree\">fib(5)\n├── fib(4)\n│   ├── fib(3)          ← fib(3) zum 1. Mal\n│   │   ├── fib(2)\n│   │   │   ├── fib(1)\n│   │   │   └── fib(0)\n│   │   └── fib(1)\n│   └── fib(2)          ← fib(2) zum 2. Mal\n│       ├── fib(1)\n│       └── fib(0)\n└── fib(3)              ← fib(3) zum 2. Mal – alles nochmal!\n    ├── fib(2)          ← fib(2) zum 3. Mal\n    │   ├── fib(1)\n    │   └── fib(0)\n    └── fib(1)</pre>\n<p><code>fib(3)</code> wird zweimal vollständig berechnet, <code>fib(2)</code> dreimal. Jeder Aufruf erzeugt (fast) zwei neue → die Zahl der Aufrufe <b>verdoppelt sich ungefähr</b> mit jedem n:</p>\n<table class=\"ops\">\n<tr><td><b>n</b></td><td>10</td><td>20</td><td>30</td><td>40</td></tr>\n<tr><td><b>Aufrufe von fib</b></td><td>177</td><td>21 891</td><td>2 692 537</td><td>331 160 281</td></tr>\n</table>\n<p>Eine Schleife bräuchte für <code>fib(40)</code> nur 40 Durchläufe!</p>\n<div class=\"example\" data-lang=\"py\">calls = 0\n\ndef fib(n):\n    global calls\n    calls += 1\n    if n <= 1:\n        return n\n    return fib(n - 1) + fib(n - 2)\n\nfor n in [5, 10, 15, 20]:\n    calls = 0\n    fib(n)\n    print(f\"fib({n}): {calls} calls\")</div>\n<p class=\"callout\">Die Schlussfolgerung lautet <b>nicht</b> „Rekursion ist langsam“, sondern präziser: <b>Rekursion, die dieselben Teilprobleme mehrfach löst, ist langsam.</b></p>\n\n<h3>Ausweg 1: iterativ mit zwei Merkvariablen</h3>\n<div class=\"example\" data-lang=\"py\">def fib_iterative(n):\n    a, b = 0, 1\n    for _ in range(n):\n        a, b = b, a + b\n    return a\n\nprint(fib_iterative(40))</div>\n<p><code>a</code> und <code>b</code> halten immer die zwei letzten Zahlen. <code>_</code> ist der übliche Name für eine Schleifenvariable, die nicht gebraucht wird.</p>\n\n<h3>Ausweg 2: Memoisierung</h3>\n<p>„Gedächtnis“: Jedes berechnete Ergebnis wird in einem <b>Dictionary</b> gespeichert. Bevor gerechnet wird, schaut man nach, ob das Ergebnis schon bekannt ist:</p>\n<div class=\"example\" data-lang=\"py\">def fib_memo(n, known={}):\n    if n in known:              # already computed? -> reuse\n        return known[n]\n    if n <= 1:\n        return n\n    known[n] = fib_memo(n - 1) + fib_memo(n - 2)\n    return known[n]\n\nprint(fib_memo(40))</div>\n<p>Jedes Teilproblem wird damit <b>nur einmal</b> gelöst. Für <code>fib(40)</code> sinkt die Zahl der Berechnungen von über einer Milliarde auf <b>79</b>. Der Aufrufbaum schrumpft zu einer Kette.</p>\n<p class=\"muted\">Achtung Feinheit: Der Standardwert <code>known={}</code> wird nur <b>einmal</b> beim Definieren der Funktion erzeugt – darum bleibt das Gedächtnis zwischen Aufrufen erhalten. Hier gewollt, sonst eine bekannte Stolperfalle.</p>\n\n<h3>Messen mit time.perf_counter()</h3>\n<div class=\"example\" data-lang=\"py\">import time\n\ndef fib(n):\n    return n if n <= 1 else fib(n - 1) + fib(n - 2)\n\ndef fib_memo(n, known={}):\n    if n in known:\n        return known[n]\n    if n <= 1:\n        return n\n    known[n] = fib_memo(n - 1) + fib_memo(n - 2)\n    return known[n]\n\nstart = time.perf_counter()\nfib(22)\nprint(f\"naive: {time.perf_counter() - start:.3f} s\")\n\nstart = time.perf_counter()\nfib_memo(22)\nprint(f\"memo:  {time.perf_counter() - start:.6f} s\")</div>\n",
  "exercises": [
   {
    "id": "rk6",
    "type": "output",
    "task": "Wie oft wird <code>fib</code> bei <code>fib(5)</code> insgesamt aufgerufen? Der Code zählt mit – was gibt er aus?",
    "code": "calls = 0\n\ndef fib(n):\n    global calls\n    calls += 1\n    if n <= 1:\n        return n\n    return fib(n - 1) + fib(n - 2)\n\nprint(fib(5))\nprint(calls)",
    "lines": 2,
    "explain": "fib(5) = 5, und es braucht 15 Aufrufe (zähl die Knoten im Aufrufbaum oben!). fib(30) braucht schon über 1,6 Millionen."
   },
   {
    "id": "rk8",
    "type": "quiz",
    "task": "<code>fib(30)</code> braucht über eine Million Aufrufe, <code>fib_memo(30)</code> unter 60. Wo liegt die Ersparnis?",
    "options": [
     "Dictionaries rechnen schneller als Funktionen",
     "Jedes Teilproblem wird nur einmal berechnet – danach wird das gespeicherte Ergebnis wiederverwendet",
     "fib_memo verwendet eine Schleife",
     "fib_memo rechnet nur jede zweite Zahl aus"
    ],
    "correct": 1,
    "explain": "Die naive Variante löst dieselben Teilprobleme (fib(3), fib(2) …) immer wieder. Mit Gedächtnis gibt es pro n nur eine Berechnung."
   },
   {
    "id": "n24a",
    "type": "quiz",
    "task": "Warum braucht <code>fib</code> <b>zwei</b> Basisfälle?",
    "options": [
     "Aus Stilgründen",
     "Weil der Schritt fib(n-1) + fib(n-2) zurückgreift – mit nur n == 0 würde fib(1) zu fib(-1) führen und nie enden",
     "Weil Python das verlangt",
     "Braucht sie nicht, einer reicht immer"
    ],
    "correct": 1,
    "explain": "Der Schritt verkleinert um 1 und um 2. Damit beide Wege sicher in einem Basisfall landen, braucht man 0 und 1."
   },
   {
    "id": "n24b",
    "type": "quiz",
    "task": "Was ist <b>Memoisierung</b>?",
    "options": [
     "Eine Schleife statt Rekursion",
     "Berechnete Ergebnisse in einem Gedächtnis (Dictionary) speichern und wiederverwenden",
     "Das Löschen des Call Stacks",
     "Das Erhöhen der Rekursionstiefe"
    ],
    "correct": 1,
    "explain": "So wird jedes Teilproblem nur einmal gelöst – aus exponentiell vielen Aufrufen werden wenige."
   }
  ]
 },
 {
  "id": "rek-strukturen",
  "group": "Kapitel 2 · Rekursion",
  "num": "2.5",
  "title": "Rekursion an Datenstrukturen",
  "short": "Datenstrukturen",
  "source": "sew.htl-villach.at · Jahr 3 · 2. Rekursion – Rekursion an Datenstrukturen: Verschachtelte Listen, Verzeichnisbäume, Strings",
  "theory": "\n<p>Bei Zahlenproblemen (Fakultät, Summe) ist Rekursion nur eine Alternative zur Schleife. Ihre <b>eigentliche Stärke</b> zeigt sie bei Daten, die <b>selbst rekursiv aufgebaut</b> sind – also Strukturen, die wieder gleichartige Strukturen enthalten.</p>\n\n<h3>Verschachtelte Listen</h3>\n<p>Eine Playlist enthält einzelne Titel (Dauer in Sekunden) – aber auch <b>Unter-Playlists</b>:</p>\n<pre class=\"syntax\">playlist = [240, [180, 320, [90, 150]], 200, [60, 60]]</pre>\n<pre class=\"syntax tree\">playlist\n├── 240\n├── [ ]  Unter-Playlist\n│   ├── 180\n│   ├── 320\n│   └── [ ]  Unter-Unter-Playlist\n│       ├── 90\n│       └── 150\n├── 200\n└── [ ]\n    ├── 60\n    └── 60</pre>\n<p>Eine einfache Schleife scheitert an den inneren Listen (man müsste wissen, wie tief verschachtelt wird). Die rekursive Lösung unterscheidet nur <b>zwei Fälle</b>:</p>\n<div class=\"grid2\">\n<div class=\"card hl\"><b>Element ist eine Zahl</b><br>→ direkt verarbeiten (addieren)</div>\n<div class=\"card hl\"><b>Element ist eine Liste</b><br>→ <b>dasselbe Problem, nur kleiner</b> → Selbstaufruf</div>\n</div>\n<div class=\"example\" data-lang=\"py\">def total_duration(entries):\n    total = 0\n    for entry in entries:\n        if isinstance(entry, list):\n            total += total_duration(entry)   # sublist: same problem, smaller\n        else:\n            total += entry                   # number: add directly\n    return total\n\nplaylist = [240, [180, 320, [90, 150]], 200, [60, 60]]\nprint(total_duration(playlist))</div>\n<ul>\n  <li><code>isinstance(x, list)</code> prüft, ob ein Wert eine Liste ist – ohne diese Prüfung wüsste die Funktion nicht, ob sie addieren oder absteigen soll.</li>\n  <li>Die Verschachtelungstiefe kommt im Code <b>nirgends</b> vor. Die Funktion schafft <b>jede</b> Tiefe, weil <b>die Struktur des Codes der Struktur der Daten folgt</b>.</li>\n  <li>Der <b>Basisfall ist implizit</b>: Eine Liste, die nur Zahlen enthält, löst keinen Selbstaufruf aus. Es gibt kein eigenes <code>if</code> dafür.</li>\n  <li>Hier wird Schleife <b>und</b> Rekursion kombiniert: die Schleife läuft „in die Breite“ (Elemente einer Ebene), die Rekursion „in die Tiefe“ (Unterlisten).</li>\n</ul>\n<p>Schau dir an, wie der Stack nur bei Unterlisten wächst:</p>\n<div class=\"trace\" data-fn=\"total_duration\">def total_duration(entries):\n    total = 0\n    for entry in entries:\n        if isinstance(entry, list):\n            total += total_duration(entry)\n        else:\n            total += entry\n    return total\n\nprint(total_duration([1, [2, 3], [4, [5]]]))</div>\n\n<h3>Verzeichnisbäume</h3>\n<p>Das Dateisystem ist <b>die</b> bekannteste rekursive Struktur. Wer alle Bilder unterhalb eines Projektordners sucht, muss in jeden Unterordner absteigen, dort in jeden Unterordner usw.</p>\n<pre class=\"syntax tree\">projekt/\n├── readme.txt\n├── bilder/\n│   ├── logo.png\n│   ├── hintergrund.jpg\n│   └── icons/\n│       ├── home.png\n│       ├── user.PNG\n│       └── alt/\n│           └── old.png\n├── video/  …\n├── code/   …\n└── leer/</pre>\n<div class=\"example\" data-lang=\"py\" data-demo=\"1\">from pathlib import Path\n\ndef find_images(folder):\n    hits = []\n    for entry in Path(folder).iterdir():\n        if entry.is_dir():\n            hits += find_images(entry)       # subfolder: descend\n        elif entry.suffix.lower() in (\".png\", \".jpg\", \".jpeg\"):\n            hits.append(entry)\n    return hits\n\nfor image in find_images(\"projekt\"):\n    print(image)</div>\n<table class=\"ops\">\n<tr><td><code>Path(folder).iterdir()</code></td><td>alle Einträge (Dateien und Ordner) eines Ordners</td></tr>\n<tr><td><code>entry.is_dir()</code></td><td>ist der Eintrag ein Ordner?</td></tr>\n<tr><td><code>entry.suffix</code></td><td>Dateiendung inkl. Punkt, z.&nbsp;B. <code>\".png\"</code></td></tr>\n<tr><td><code>entry.name</code></td><td>Name ohne Pfad</td></tr>\n<tr><td><code>entry.stat().st_size</code></td><td>Dateigröße in Bytes</td></tr>\n</table>\n<p><code>pathlib</code> ist eine plattformunabhängige Schnittstelle für Dateisystempfade (Doku: docs.python.org/3/library/pathlib.html). Der Basisfall ist wieder implizit: Ein Ordner <b>ohne Unterordner</b> löst keine Selbstaufrufe aus. Nach genau diesem Schema arbeiten <b>Dateisuche, Virenscanner und Backup-Programme</b>.</p>\n<p class=\"tip\">💡 Hier auf der Seite gibt es den Übungsordner <code>projekt/</code> (oben abgebildet) – alle Beispiele und Übungen laufen darauf.</p>\n\n<h3>Strings</h3>\n<p>Auch Zeichenketten lassen sich rekursiv verkleinern – mit <b>Slicing</b> als Werkzeug. Beispiel Palindrom (liest sich vorwärts wie rückwärts gleich):</p>\n<div class=\"example\" data-lang=\"py\">def is_palindrome(word):\n    if len(word) <= 1:                      # base case: empty or single char\n        return True\n    if word[0] != word[-1]:                 # outer characters differ\n        return False\n    return is_palindrome(word[1:-1])        # check the inner part\n\nprint(is_palindrome(\"rotator\"))\nprint(is_palindrome(\"python\"))</div>\n<pre class=\"syntax\">is_palindrome(\"rotator\")    r == r ✔  → innen weiter\nis_palindrome(\"otato\")      o == o ✔  → innen weiter\nis_palindrome(\"tat\")        t == t ✔  → innen weiter\nis_palindrome(\"a\")          Länge 1   → True (Basisfall)</pre>\n<p>Die äußeren Zeichen werden verglichen, der innere Rest wird als <b>kleineres Palindromproblem</b> weitergereicht. (Iterativ ginge es kürzer – als Übung im rekursiven Denken ist es trotzdem lehrreich.)</p>\n<div class=\"trace\" data-fn=\"is_palindrome\">def is_palindrome(word):\n    if len(word) <= 1:\n        return True\n    if word[0] != word[-1]:\n        return False\n    return is_palindrome(word[1:-1])\n\nprint(is_palindrome(\"rotator\"))</div>\n",
  "exercises": [
   {
    "id": "rs1",
    "type": "output",
    "task": "<span class=\"tag\">Aufgabe 04 A</span> Bestimme ohne Ausführen das Ergebnis:",
    "code": "def total_duration(entries):\n    total = 0\n    for entry in entries:\n        if isinstance(entry, list):\n            total += total_duration(entry)\n        else:\n            total += entry\n    return total\n\nprint(total_duration([1, [2, 3], [4, [5]]]))",
    "lines": 1,
    "explain": "1 + (2 + 3) + (4 + (5)) = 15 – die Verschachtelung ändert nichts an der Summe."
   },
   {
    "id": "rs2",
    "type": "quiz",
    "task": "Wo steckt in <code>total_duration</code> der Basisfall?",
    "options": [
     "In der Zeile return total",
     "Er ist implizit: Eine Liste ohne Unterlisten löst keinen weiteren Selbstaufruf aus",
     "Es gibt keinen – darum ist die Funktion falsch",
     "In isinstance()"
    ],
    "correct": 1,
    "explain": "Es gibt kein eigenes if für den Basisfall. Enthält eine Liste nur Zahlen, ruft sich die Funktion nicht mehr selbst auf."
   },
   {
    "id": "rs9",
    "type": "py",
    "task": "<span class=\"tag\">Skriptum</span> <code>is_palindrome(word)</code> rekursiv: äußere Zeichen vergleichen, dann den inneren Rest prüfen (Slicing <code>word[1:-1]</code>).",
    "starter": "def is_palindrome(word):\n    ",
    "hint": "Basisfall len(word) <= 1 → True. Wenn word[0] != word[-1] → False. Sonst is_palindrome(word[1:-1]).",
    "solution": "def is_palindrome(word):\n    if len(word) <= 1:\n        return True\n    if word[0] != word[-1]:\n        return False\n    return is_palindrome(word[1:-1])",
    "tests": "_recursive(\"is_palindrome\")\n_noloop(\"is_palindrome\")\nfor w, e in [(\"rotator\", True), (\"python\", False), (\"\", True), (\"a\", True), (\"abba\", True), (\"abca\", False)]:\n    assert is_palindrome(w) == e, f\"is_palindrome({w!r}) sollte {e} sein.\""
   },
   {
    "id": "n25a",
    "type": "quiz",
    "task": "Woran erkennst du einer Datenstruktur an, dass sie nach rekursiver Verarbeitung verlangt?",
    "options": [
     "Sie ist sehr groß",
     "Sie enthält Teile, die gleich aufgebaut sind wie das Ganze (Listen in Listen, Ordner in Ordnern)",
     "Sie ist sortiert",
     "Sie enthält nur Zahlen"
    ],
    "correct": 1,
    "explain": "Selbstähnlichkeit = rekursive Struktur. Dann folgt der Code der Struktur der Daten."
   }
  ]
 },
 {
  "id": "rek-vergleich",
  "group": "Kapitel 2 · Rekursion",
  "num": "2.6",
  "title": "Rekursion oder Schleife?",
  "short": "Rekursion oder Schleife?",
  "source": "sew.htl-villach.at · Jahr 3 · 2. Rekursion – Rekursion oder Schleife?",
  "theory": "\n<h3>Beides ist gleich mächtig</h3>\n<p>Grundsätzlich gilt: <b>Jedes rekursive Programm lässt sich auch iterativ formulieren und umgekehrt.</b> Die Entscheidung ist daher keine Frage des Könnens, sondern der <b>Angemessenheit</b>.</p>\n<table class=\"ops\">\n<tr><td><b>Kriterium</b></td><td><b>Rekursion</b></td><td><b>Schleife</b></td></tr>\n<tr><td>Lineare Abläufe (zählen, summieren)</td><td>möglich, aber umständlich</td><td>✔ natürlich</td></tr>\n<tr><td>Baumartige, verschachtelte Daten</td><td>✔ natürlich</td><td>umständlich (eigener Stapel nötig)</td></tr>\n<tr><td>Speicherbedarf</td><td>ein Stack Frame pro Aufruf</td><td>✔ konstant</td></tr>\n<tr><td>Geschwindigkeit</td><td>Funktionsaufrufe kosten Zeit</td><td>✔ meist schneller</td></tr>\n<tr><td>Nähe zur mathematischen Definition</td><td>✔ hoch</td><td>gering</td></tr>\n</table>\n<p class=\"callout\"><b>Faustregel:</b> Folgt die Struktur des Problems einem <b>Baum</b> oder einer <b>Verschachtelung</b> → Rekursion ist das passende Werkzeug. Ist das Problem eine <b>einfache Wiederholung</b> → Schleife vorziehen.</p>\n<p>Fakultät und Fibonacci sind in diesem Sinn <b>Lernbeispiele</b>: gut, um den Mechanismus zu verstehen – in echtem Produktionscode würde man beide iterativ schreiben.</p>\n\n<h3>Umformen: Schleife → Rekursion</h3>\n<p>Muster für Listen: „erstes Element + Ergebnis für den Rest“.</p>\n<div class=\"grid2\">\n<div class=\"card\"><b>Schleife</b><pre class=\"syntax\" style=\"margin:6px 0 0\">def list_sum(values):\n    total = 0\n    for value in values:\n        total += value\n    return total</pre></div>\n<div class=\"card hl\"><b>Rekursion</b><pre class=\"syntax\" style=\"margin:6px 0 0\">def list_sum(values):\n    if not values:          # empty list\n        return 0\n    return values[0] + list_sum(values[1:])</pre></div>\n</div>\n<ul>\n  <li>Startwert der Schleifenvariable (<code>total = 0</code>) → wird zum <b>Ergebnis des Basisfalls</b>.</li>\n  <li>Die Schleifenbedingung „noch Elemente da?“ → wird zur <b>Abbruchbedingung</b> (leere Liste).</li>\n  <li>Ein Durchlauf (<code>total += value</code>) → <b>ein Element verarbeiten + Rest per Selbstaufruf</b>.</li>\n</ul>\n\n<h3>Umformen: Rekursion → Schleife</h3>\n<div class=\"grid2\">\n<div class=\"card\"><b>Rekursion</b><pre class=\"syntax\" style=\"margin:6px 0 0\">def digit_sum(n):\n    if n == 0:\n        return 0\n    return n % 10 + digit_sum(n // 10)</pre></div>\n<div class=\"card hl\"><b>Schleife</b><pre class=\"syntax\" style=\"margin:6px 0 0\">def digit_sum(n):\n    total = 0\n    while n > 0:          # until base case\n        total += n % 10\n        n //= 10          # make it smaller\n    return total</pre></div>\n</div>\n<p>Das „kleiner machen“ des Rekursionsschritts (<code>n // 10</code>) wird zur Änderung der Schleifenvariable, der Basisfall zur Abbruchbedingung der <code>while</code>-Schleife.</p>\n\n<h3>Und bei Bäumen?</h3>\n<p>Einen Verzeichnisbaum mit Schleife zu durchlaufen geht auch – aber man muss sich selbst eine Liste der „noch zu besuchenden Ordner“ merken (einen <b>eigenen Stapel</b>). Genau das erledigt die Rekursion über den Call Stack automatisch:</p>\n<div class=\"grid2\">\n<div class=\"card hl\"><b>Rekursiv</b><pre class=\"syntax\" style=\"margin:6px 0 0\">def count_files(folder):\n    count = 0\n    for e in Path(folder).iterdir():\n        if e.is_dir():\n            count += count_files(e)\n        else:\n            count += 1\n    return count</pre></div>\n<div class=\"card\"><b>Iterativ mit eigenem Stapel</b><pre class=\"syntax\" style=\"margin:6px 0 0\">def count_files(folder):\n    count = 0\n    todo = [Path(folder)]\n    while todo:\n        current = todo.pop()\n        for e in current.iterdir():\n            if e.is_dir():\n                todo.append(e)\n            else:\n                count += 1\n    return count</pre></div>\n</div>\n",
  "exercises": [
   {
    "id": "rh2",
    "type": "quiz",
    "task": "Aufgabe: „Summiere die Zahlen einer <b>flachen</b> Liste.“ Rekursion oder Schleife?",
    "options": [
     "Rekursion – sie ist immer eleganter",
     "Schleife – eine einfache Wiederholung ohne Verschachtelung",
     "Beides gleich gut",
     "Keines von beiden, nur sum()"
    ],
    "correct": 1,
    "explain": "Lineare Abläufe sind der natürliche Fall für Schleifen (konstanter Speicher, schneller). Rekursion lohnt sich bei Bäumen/Verschachtelung."
   },
   {
    "id": "rh3",
    "type": "quiz",
    "task": "Welche Aufgabe ist der <b>typische</b> Fall für Rekursion?",
    "options": [
     "Die Zahlen 1 bis 100 ausgeben",
     "Alle Dateien in einem Ordner samt allen Unterordnern finden",
     "Den Durchschnitt einer Notenliste berechnen",
     "Einen String in Großbuchstaben umwandeln"
    ],
    "correct": 1,
    "explain": "Ein Verzeichnisbaum ist eine rekursive Struktur – der Code folgt der Struktur der Daten."
   },
   {
    "id": "n26a",
    "type": "quiz",
    "task": "Was wird beim Umformen von <code>total = 0; for v in values: total += v</code> in eine Rekursion zum <b>Ergebnis des Basisfalls</b>?",
    "options": [
     "Der Startwert 0 der Variable total",
     "Das erste Element values[0]",
     "len(values)",
     "Die Schleifenvariable v"
    ],
    "correct": 0,
    "explain": "Für die leere Liste liefert die Schleife ihren Startwert – genau das muss auch der Basisfall liefern."
   },
   {
    "id": "n26b",
    "type": "quiz",
    "task": "Warum ist Rekursion bei <b>Bäumen</b> (z. B. Ordnern) natürlicher als eine Schleife?",
    "options": [
     "Weil Schleifen keine Ordner öffnen können",
     "Weil man iterativ selbst einen Stapel der noch offenen Ordner verwalten müsste – die Rekursion nutzt dafür automatisch den Call Stack",
     "Weil Rekursion immer schneller ist",
     "Weil pathlib nur rekursiv funktioniert"
    ],
    "correct": 1,
    "explain": "Der Call Stack merkt sich automatisch, wo man in jeder Ebene weitermachen muss."
   }
  ]
 },
 {
  "id": "rek-grenzen",
  "group": "Kapitel 2 · Rekursion",
  "num": "2.7",
  "title": "Grenzen: die maximale Rekursionstiefe",
  "short": "Grenzen",
  "source": "sew.htl-villach.at · Jahr 3 · 2. Rekursion – Grenzen: die maximale Rekursionstiefe",
  "theory": "\n<h3>Jeder Aufruf kostet Speicher</h3>\n<p>Jeder <b>wartende</b> Aufruf belegt einen Frame auf dem Call Stack. Damit das Programm nicht unkontrolliert Speicher frisst, <b>begrenzt Python die Tiefe auf etwa 1000 Ebenen</b> und bricht darüber hinaus ab:</p>\n<div class=\"example\" data-lang=\"py\">def endless(n):\n    return endless(n + 1)\n\nendless(1)</div>\n<p>Die Fehlermeldung lautet <code>RecursionError: maximum recursion depth exceeded</code>. Das Limit kannst du abfragen:</p>\n<div class=\"example\" data-lang=\"py\">import sys\nprint(sys.getrecursionlimit())\n\ndef depth(n):\n    if n == 0:\n        return 0\n    return 1 + depth(n - 1)\n\nprint(depth(900))      # fine\nprint(depth(5000))     # too deep</div>\n\n<h3>Zwei mögliche Ursachen – auseinanderhalten!</h3>\n<div class=\"grid2\">\n<div class=\"card hl\"><b>① Programmierfehler</b> (der häufige Fall)<ul style=\"margin:6px 0 0;padding-left:18px\">\n<li>Basisfall <b>fehlt</b></li>\n<li>Basisfall ist <b>unerreichbar</b> – z.&nbsp;B. <code>n == 0</code>, aber Aufruf mit negativer Zahl, oder Schritt <code>n - 2</code> bei ungeradem Start</li>\n<li>Das Problem wird <b>nicht kleiner</b></li></ul>\nDie Rekursion wäre <b>nie</b> fertig geworden – der Fehler deckt das nur auf.</div>\n<div class=\"card\"><b>② Die Struktur ist wirklich so tief</b><br>Eine korrekte Rekursion über eine Struktur mit 5000 Ebenen überschreitet das Limit ebenfalls.<br>→ Dann ist eine <b>iterative Umformulierung</b> angebracht.</div>\n</div>\n<p class=\"tip\">⚠️ Das Limit lässt sich mit <code>sys.setrecursionlimit()</code> erhöhen – das behandelt aber nur das <b>Symptom</b> und riskiert einen <b>Absturz des Interpreters</b> (echter Stack-Overflow). Bei Ursache ① hilft es sowieso nicht.</p>\n\n<h3>Typische unerreichbare Basisfälle</h3>\n<div class=\"example\" data-lang=\"py\">def buggy(n):\n    if n == 0:\n        return 0\n    return n + buggy(n - 2)\n\nprint(buggy(4))    # 4 -> 2 -> 0  works\nprint(buggy(3))    # 3 -> 1 -> -1 -> -3 ... never 0</div>\n<p class=\"callout\"><b>Regel:</b> Der Rekursionsschritt muss garantieren, dass der Basisfall von <b>jedem erlaubten Startwert</b> aus erreicht wird. Oft hilft ein „großzügiger“ Basisfall: <code>n &lt;= 0</code> statt <code>n == 0</code>.</p>\n\n<h3>Zur Einordnung</h3>\n<p>Verzeichnisbäume sind selten tiefer als <b>20</b> Ebenen, JSON-Dokumente selten tiefer als <b>10</b>. Für strukturell rekursive Aufgaben ist das Limit in der Praxis kaum ein Hindernis – Probleme macht es vor allem bei <b>linearer</b> Rekursion über große Zahlen (z.&nbsp;B. <code>sum_up_to(100000)</code>), wo ohnehin eine Schleife besser wäre.</p>\n",
  "exercises": [
   {
    "id": "rh1",
    "type": "quiz",
    "task": "Ein Programm bricht mit <code>RecursionError: maximum recursion depth exceeded</code> ab. Welche zwei Ursachen nennt das Kapitel?",
    "options": [
     "Zu wenig RAM und zu langsame CPU",
     "Programmierfehler (Basisfall fehlt / unerreichbar / Problem wird nicht kleiner) oder die Struktur ist tatsächlich zu tief",
     "Ein Syntaxfehler oder ein Tippfehler im Funktionsnamen",
     "Zu viele print-Anweisungen"
    ],
    "correct": 1,
    "explain": "Meist ein Programmierfehler. Bei wirklich tiefen Strukturen (> ~1000 Ebenen) hilft eine iterative Umformulierung."
   },
   {
    "id": "n27a",
    "type": "quiz",
    "task": "Hilft <code>sys.setrecursionlimit(100000)</code> bei einer Funktion <b>ohne Basisfall</b>?",
    "options": [
     "Ja, dann läuft sie fertig",
     "Nein – sie würde nie fertig. Das Hochsetzen verschiebt nur den Abbruch und riskiert einen Absturz des Interpreters",
     "Ja, aber nur unter Linux",
     "Nein, weil man das Limit nicht ändern kann"
    ],
    "correct": 1,
    "explain": "Ohne Basisfall gibt es kein Ende. Das Limit hochsetzen behandelt nur das Symptom."
   },
   {
    "id": "n27b",
    "type": "quiz",
    "task": "Was passiert bei <code>f(6)</code> und <code>f(5)</code>?<br><code>def f(n):<br>&nbsp;&nbsp;if n == 0: return \"done\"<br>&nbsp;&nbsp;return f(n - 3)</code>",
    "options": [
     "Beide liefern \"done\"",
     "f(6) liefert \"done\", f(5) endet mit RecursionError",
     "f(5) liefert \"done\", f(6) endet mit RecursionError",
     "Beide enden mit RecursionError"
    ],
    "correct": 1,
    "explain": "f(6): 6 → 3 → 0 ✔. f(5): 5 → 2 → -1 → -4 … springt über 0 hinweg – Basisfall unerreichbar. Abhilfe: if n <= 0."
   }
  ]
 },
 {
  "id": "rek-hanoi",
  "group": "Kapitel 2 · Rekursion",
  "num": "2.8",
  "title": "Die Türme von Hanoi",
  "short": "Türme von Hanoi",
  "source": "sew.htl-villach.at · Jahr 3 · 2. Rekursion – Die Türme von Hanoi",
  "theory": "\n<h3>Die Aufgabe</h3>\n<p>Das bekannteste Demonstrationsbeispiel für die Stärke der Rekursion: Ein Turm aus <b>n</b> verschieden großen Scheiben soll von Stab <b>A</b> nach Stab <b>C</b>.</p>\n<div class=\"hanoi\"><div class=\"peg\"><span style=\"width:30%\"></span><span style=\"width:50%\"></span><span style=\"width:70%\"></span><span style=\"width:90%\"></span><b>A</b></div><div class=\"peg\"><b>B</b></div><div class=\"peg\"><b>C</b></div></div>\n<p style=\"margin-top:30px\"><b>Regeln:</b></p>\n<ol>\n  <li>Pro Zug wird <b>genau eine</b> Scheibe bewegt – die <b>oberste</b> eines Stapels.</li>\n  <li>Eine <b>größere</b> Scheibe darf <b>nie</b> auf einer kleineren liegen.</li>\n  <li>Stab <b>B</b> dient als Zwischenlager.</li>\n</ol>\n<p>Ab vier Scheiben endet Probieren meist im Chaos. Die rekursive Zerlegung dagegen ist kurz.</p>\n\n<h3>Die rekursive Idee</h3>\n<p class=\"callout\">Um <b>n</b> Scheiben von A nach C zu bringen:<br>\n① bringe die oberen <b>n − 1</b> Scheiben von A nach <b>B</b> (C ist dabei Zwischenlager),<br>\n② bewege die <b>größte</b> Scheibe von A nach C,<br>\n③ bringe die <b>n − 1</b> Scheiben von B nach C (A ist dabei Zwischenlager).</p>\n<p>Wie die n − 1 Scheiben bewegt werden, beantwortet <b>dieselbe Vorschrift eine Ebene tiefer</b> – nur mit vertauschten Rollen der Stäbe. Der <b>Basisfall</b>: Null Scheiben erfordern keinen Zug.</p>\n<div class=\"hanoi-steps\">\n  <div><b>Start</b><div class=\"hanoi sm\"><div class=\"peg\"><span style=\"width:35%\"></span><span style=\"width:60%\"></span><span style=\"width:85%\"></span></div><div class=\"peg\"></div><div class=\"peg\"></div></div></div>\n  <div><b>① n−1 nach B</b><div class=\"hanoi sm\"><div class=\"peg\"><span style=\"width:85%\"></span></div><div class=\"peg\"><span style=\"width:35%\"></span><span style=\"width:60%\"></span></div><div class=\"peg\"></div></div></div>\n  <div><b>② größte nach C</b><div class=\"hanoi sm\"><div class=\"peg\"></div><div class=\"peg\"><span style=\"width:35%\"></span><span style=\"width:60%\"></span></div><div class=\"peg\"><span style=\"width:85%\"></span></div></div></div>\n  <div><b>③ n−1 nach C</b><div class=\"hanoi sm\"><div class=\"peg\"></div><div class=\"peg\"></div><div class=\"peg\"><span style=\"width:35%\"></span><span style=\"width:60%\"></span><span style=\"width:85%\"></span></div></div></div>\n</div>\n\n<h3>Der Code</h3>\n<div class=\"example\" data-lang=\"py\">def hanoi(n, source, target, spare):\n    if n == 0:\n        return\n    hanoi(n - 1, source, spare, target)       # 1. n-1 disks out of the way\n    print(f\"disk {n}: {source} -> {target}\")  # 2. move the largest\n    hanoi(n - 1, spare, target, source)       # 3. n-1 disks back on top\n\nhanoi(3, \"A\", \"C\", \"B\")</div>\n<p><b>Fünf Zeilen Logik</b> für ein Problem, dessen iterative Lösung erheblich komplizierter ist. Achte auf die Parameter: In Schritt ① ist <code>spare</code> das Ziel und <code>target</code> das Zwischenlager; in Schritt ③ ist <code>spare</code> die Quelle.</p>\n<div class=\"trace\" data-fn=\"hanoi\">def hanoi(n, source, target, spare):\n    if n == 0:\n        return\n    hanoi(n - 1, source, spare, target)\n    print(f\"disk {n}: {source} -> {target}\")\n    hanoi(n - 1, spare, target, source)\n\nhanoi(2, \"A\", \"C\", \"B\")</div>\n\n<h3>Wie viele Züge?</h3>\n<p>Aus der Struktur: Züge(n) = Züge(n−1) + <b>1</b> + Züge(n−1) = 2 · Züge(n−1) + 1, mit Züge(0) = 0.</p>\n<table class=\"ops\">\n<tr><td><b>n</b></td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>10</td><td>64</td></tr>\n<tr><td><b>Züge</b></td><td>1</td><td>3</td><td>7</td><td>15</td><td>31</td><td>1023</td><td>≈ 18,4 Trillionen</td></tr>\n</table>\n<p>Die minimale Zugzahl ist <b>2ⁿ − 1</b> – sie wächst <b>exponentiell</b>: Jede zusätzliche Scheibe <b>verdoppelt</b> (ungefähr) die Arbeit. 64 Scheiben bei einem Zug pro Sekunde dauern mehr als <b>580 Milliarden Jahre</b>.</p>\n<p class=\"callout\">Lektion: <b>Manche Probleme sind trotz korrektem Algorithmus praktisch unlösbar.</b></p>\n<p class=\"muted\">Zusatz: Mit dem Modul <code>turtle</code> lassen sich rekursive Fraktale zeichnen (Koch-Kurve, binärer Baum: jeder Ast zeichnet zwei kleinere Äste, Basisfall = minimale Astlänge) – das Grundprinzip prozedural erzeugter Muster und Texturen in der Computergrafik.</p>\n",
  "exercises": [
   {
    "id": "rh6",
    "type": "output",
    "task": "Wie viele Züge braucht man für 3, 5 und 10 Scheiben? Was gibt der Code aus?",
    "code": "for n in [3, 5, 10]:\n    print(2 ** n - 1)",
    "lines": 3,
    "explain": "2³−1 = 7, 2⁵−1 = 31, 2¹⁰−1 = 1023. Jede zusätzliche Scheibe verdoppelt (ungefähr) die Rechendauer."
   },
   {
    "id": "rh7",
    "type": "quiz",
    "task": "Die Zugzahl bei Hanoi ist 2ⁿ − 1. Was passiert mit der Rechendauer, wenn <b>eine</b> Scheibe dazukommt?",
    "options": [
     "Sie steigt um einen Zug",
     "Sie verdoppelt sich ungefähr",
     "Sie bleibt gleich",
     "Sie halbiert sich"
    ],
    "correct": 1,
    "explain": "Exponentielles Wachstum: aus 2ⁿ − 1 wird 2ⁿ⁺¹ − 1 ≈ doppelt so viel."
   },
   {
    "id": "n28a",
    "type": "quiz",
    "task": "Was ist bei <code>hanoi(n, source, target, spare)</code> in Schritt ① <code>hanoi(n - 1, source, spare, target)</code> das <b>Ziel</b> der n−1 Scheiben?",
    "options": [
     "target",
     "spare (das Zwischenlager)",
     "source",
     "Es gibt kein Ziel"
    ],
    "correct": 1,
    "explain": "Die n−1 kleineren Scheiben müssen aus dem Weg – auf den Zwischenstab. target dient dabei als Hilfsstab."
   },
   {
    "id": "n28b",
    "type": "output",
    "code": "def hanoi(n, source, target, spare):\n    if n == 0:\n        return\n    hanoi(n - 1, source, spare, target)\n    print(f\"{n}: {source}->{target}\")\n    hanoi(n - 1, spare, target, source)\n\nhanoi(2, \"A\", \"C\", \"B\")",
    "lines": 3,
    "explain": "Kleine Scheibe nach B, große nach C, kleine auf die große nach C."
   }
  ]
 },
 {
  "id": "rek-checkliste",
  "group": "Kapitel 2 · Rekursion",
  "num": "2.9",
  "title": "Checkliste & Lernergebnisse",
  "short": "Checkliste",
  "source": "sew.htl-villach.at · Jahr 3 · 2. Rekursion – Checkliste für eigene rekursive Funktionen, Lernergebnisse",
  "theory": "\n<h3>Checkliste für eigene rekursive Funktionen</h3>\n<ol class=\"steps\">\n  <li><code>Basisfall zuerst</code> <span>den kleinsten Fall formulieren, dessen Antwort sofort feststeht – als erstes <b>if</b></span></li>\n  <li><code>Verkleinern</code> <span>jeder Selbstaufruf mit einem Argument, das dem Basisfall näher ist: n − 1, word[1:-1], der Unterordner</span></li>\n  <li><code>Induktiv prüfen</code> <span>Schritt kontrollieren unter der Annahme, dass der Selbstaufruf korrekt liefert</span></li>\n  <li><code>Von Hand expandieren</code> <span>bei Unklarheit für einen kleinen Wert schriftlich ausrollen (wie factorial(4))</span></li>\n  <li><code>Grenzfälle testen</code> <span>0, 1, leere Liste, leerer String, Ordner ohne Inhalt – fehlerhafte Basisfälle zeigen sich genau dort</span></li>\n</ol>\n\n<h3>Typische Zerlegungen – Spickzettel</h3>\n<table class=\"ops\">\n<tr><td><b>Datentyp</b></td><td><b>„Erstes / kleinstes Stück“</b></td><td><b>„Rest“ (kleiner)</b></td><td><b>Basisfall</b></td></tr>\n<tr><td>Zahl n (zählen)</td><td><code>n</code></td><td><code>n - 1</code></td><td><code>n == 0</code></td></tr>\n<tr><td>Zahl (Ziffern)</td><td><code>n % 10</code></td><td><code>n // 10</code></td><td><code>n == 0</code></td></tr>\n<tr><td>String</td><td><code>text[0]</code></td><td><code>text[1:]</code></td><td><code>text == \"\"</code> / <code>len(text) &lt;= 1</code></td></tr>\n<tr><td>String (von außen)</td><td><code>text[0]</code>, <code>text[-1]</code></td><td><code>text[1:-1]</code></td><td><code>len(text) &lt;= 1</code></td></tr>\n<tr><td>flache Liste</td><td><code>values[0]</code></td><td><code>values[1:]</code></td><td><code>values == []</code></td></tr>\n<tr><td>verschachtelte Liste</td><td>Zahl-Element</td><td>Unterliste</td><td>implizit (keine Unterliste)</td></tr>\n<tr><td>Ordner</td><td>Datei</td><td>Unterordner</td><td>implizit (kein Unterordner)</td></tr>\n</table>\n\n<h3>Lernergebnisse von Kapitel 2</h3>\n<table class=\"ops\">\n<tr><td><b>Erklären</b></td><td>Konzept der Rekursion sowie die Begriffe <b>Basisfall</b>, <b>Rekursionsschritt</b> und <b>Call Stack</b></td></tr>\n<tr><td><b>Analysieren</b></td><td>den Ablauf einer rekursiven Funktion <b>von Hand</b> verfolgen und ihre <b>Aufrufstruktur skizzieren</b></td></tr>\n<tr><td><b>Anwenden</b></td><td>rekursive Funktionen für <b>Zahlenprobleme</b> (Fakultät, Summen) und <b>verschachtelte Strukturen</b> (Listen, Verzeichnisse) schreiben</td></tr>\n<tr><td><b>Beurteilen</b></td><td>für ein Problem <b>begründet</b> zwischen rekursiver und iterativer Lösung wählen</td></tr>\n<tr><td><b>Nennen</b></td><td>Anwendungsgebiete und Grenzen: baumartige Daten, mehrfach gelöste Teilprobleme, Rekursionstiefe</td></tr>\n</table>\n\n<h3>Anwendungsgebiete der Rekursion</h3>\n<ul>\n  <li><b>Dateisysteme</b> – Dateisuche, Virenscanner, Backup-Programme</li>\n  <li><b>Dokumente</b> – HTML, XML, JSON (Elemente in Elementen)</li>\n  <li><b>Medien</b> – verschachtelte Playlists, Sequenzen, Ebenengruppen</li>\n  <li><b>Kombinatorik</b> – alle Möglichkeiten aufzählen (Bitfolgen, Permutationen)</li>\n  <li><b>Grafik</b> – Fraktale, prozedurale Muster und Texturen</li>\n  <li><b>Teile und herrsche</b> – Türme von Hanoi, Sortierverfahren</li>\n</ul>\n",
  "exercises": [
   {
    "id": "n29a",
    "type": "quiz",
    "task": "Welche drei Fragen stellst du an jede eigene rekursive Funktion vor dem ersten Start?",
    "options": [
     "Ist sie kurz? Hat sie Kommentare? Ist sie schnell?",
     "Gibt es einen Basisfall? Wird das Problem bei jedem Aufruf kleiner? Wird der Basisfall von jedem Startwert aus erreicht?",
     "Gibt es eine Schleife? Ein return? Ein print?",
     "Ist n positiv? Ist n gerade? Ist n kleiner 1000?"
    ],
    "correct": 1,
    "explain": "Basisfall – Verkleinerung – Erreichbarkeit. Das ist die Kurzfassung der Checkliste."
   },
   {
    "id": "n29b",
    "type": "quiz",
    "task": "Für <code>count_char(char, text)</code> rekursiv: Was ist ein sinnvoller Basisfall?",
    "options": [
     "text[0] == char",
     "text == \"\" → 0",
     "len(text) == 100",
     "char == \"\""
    ],
    "correct": 1,
    "explain": "Im leeren String kommt kein Zeichen vor → 0. Der Schritt arbeitet mit text[0] und text[1:]."
   }
  ]
 },
 {
  "id": "kl-objekt",
  "group": "Kapitel 4 · Klassen in Python",
  "num": "4.1",
  "title": "Klasse, Objekt & self",
  "short": "Klasse & Objekt",
  "source": "sew.htl-villach.at · Jahr 3 · 4. Klassen in Python – Einleitung, Klasse und Objekt, self",
  "theory": "\n<h3>Warum Klassen?</h3>\n<p>Mit Funktionen, Listen und Dictionaries kommt man weit. Sobald aber <b>zusammengehörige Daten</b> und die <b>passenden Operationen</b> gemeinsam verwaltet werden sollen, stößt man an Grenzen. Ein Bankkonto besteht aus <b>Inhaber und Kontostand</b>, und es gibt klar definierte Operationen darauf (einzahlen, abheben, Stand abfragen), die <b>Regeln</b> einhalten müssen. Genau dafür gibt es <b>Klassen</b> – das Kernstück der objektorientierten Programmierung (OOP).</p>\n<p>Alle folgenden Kapitel bauen darauf auf: Vererbung und Polymorphismus sind die Schwerpunkte des Jahres.</p>\n\n<h3>Klasse und Objekt</h3>\n<div class=\"grid2\">\n  <div class=\"card hl\"><b>Klasse</b> = Bauplan<br>legt fest, welche <b>Daten (Attribute)</b> und welche <b>Operationen (Methoden)</b> eine Art von Objekt hat.<br><span class=\"muted\">z. B. <code>Account</code></span></div>\n  <div class=\"card hl\"><b>Objekt</b> (= <b>Instanz</b>)<br>ein konkretes Exemplar nach diesem Bauplan, mit <b>eigenen Werten</b>.<br><span class=\"muted\">z. B. das Konto von Ada mit 100 €</span></div>\n</div>\n<p>Von einer Klasse können <b>beliebig viele</b> Objekte existieren – jedes mit eigenen Attributwerten.</p>\n<div class=\"example\" data-lang=\"py\">class Account:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self.balance = balance\n\n    def deposit(self, amount):\n        if amount > 0:\n            self.balance += amount\n\naccount_ada = Account(\"Ada\", 100)\naccount_bob = Account(\"Bob\")\n\naccount_ada.deposit(50)\nprint(account_ada.balance)\nprint(account_bob.balance)</div>\n<table class=\"ops\">\n<tr><td><code>class Account:</code></td><td>eröffnet die Klassendefinition; alles Eingerückte gehört dazu. Klassennamen in <b>PascalCase</b>.</td></tr>\n<tr><td><code>__init__</code></td><td>der <b>Konstruktor</b> („dunder init“, von <i>double underscore</i>). Läuft <b>automatisch</b>, wenn ein Objekt erzeugt wird, und legt dessen Attribute an.</td></tr>\n<tr><td><code>Account(\"Ada\", 100)</code></td><td>Objekt erzeugen: die Klasse wird <b>wie eine Funktion aufgerufen</b>. Ein Schlüsselwort <code>new</code> gibt es nicht.</td></tr>\n<tr><td><code>self.owner = owner</code></td><td>Attribute werden <b>nicht vorab deklariert</b> – sie entstehen durch die erste Zuweisung in <code>__init__</code>.</td></tr>\n<tr><td><code>account_ada.deposit(50)</code></td><td>Methoden werden mit der <b>Punktnotation</b> auf einem Objekt aufgerufen.</td></tr>\n</table>\n\n<h3>self – der Bezug auf das eigene Objekt</h3>\n<p>Jede Methode hat als <b>ersten Parameter <code>self</code></b>: das Objekt, auf dem die Methode aufgerufen wurde. Python übergibt es <b>automatisch</b>:</p>\n<pre class=\"syntax\">account_ada.deposit(50)\n# is internally equivalent to:\nAccount.deposit(account_ada, 50)</pre>\n<p>Beide Zeilen sind gleichwertig – die zweite zeigt den Mechanismus. Daraus folgen <b>zwei Regeln</b>, deren Verletzung die häufigsten Anfängerfehler verursacht:</p>\n<div class=\"grid2\">\n<div class=\"card\"><b>① Jede Methode beginnt mit <code>self</code></b><br>Fehlt der Parameter, meldet Python beim Aufruf:<br><code>deposit() takes 1 positional argument but 2 were given</code><br>Übersetzt: <b><code>self</code> wurde in der Definition vergessen.</b></div>\n<div class=\"card\"><b>② Attributzugriff läuft über <code>self</code></b><br>In einer Methode ist <code>balance</code> eine gewöhnliche <b>lokale Variable</b>; das Attribut heißt <code>self.balance</code>. Wer <code>self.</code> weglässt, ändert unbemerkt nur eine lokale Variable – das Objekt bleibt unverändert.</div>\n</div>\n<p>Probier beide Fehler aus:</p>\n<div class=\"example\" data-lang=\"py\">class Account:\n    def __init__(self, owner):\n        self.owner = owner\n        self.balance = 0\n\n    def deposit(amount):            # self forgotten!\n        self.balance += amount\n\nacc = Account(\"Ada\")\nacc.deposit(50)</div>\n<div class=\"example\" data-lang=\"py\">class Account:\n    def __init__(self, owner):\n        self.owner = owner\n        self.balance = 0\n\n    def deposit(self, amount):\n        balance = self.balance + amount     # local variable only!\n\nacc = Account(\"Ada\")\nacc.deposit(50)\nprint(acc.balance)</div>\n",
  "exercises": [
   {
    "id": "k4-1a",
    "type": "quiz",
    "task": "Was ist der Unterschied zwischen <b>Klasse</b> und <b>Objekt</b>?",
    "options": [
     "Es gibt keinen",
     "Die Klasse ist der Bauplan (Attribute + Methoden), das Objekt ein konkretes Exemplar mit eigenen Werten",
     "Ein Objekt ist ein Bauplan für Klassen",
     "Klassen gibt es nur einmal, Objekte nur einmal"
    ],
    "correct": 1,
    "explain": "Von einer Klasse kann es beliebig viele Objekte (Instanzen) geben."
   },
   {
    "id": "k4-1b",
    "type": "output",
    "code": "class Counter:\n    def __init__(self, start=0):\n        self.value = start\n\n    def increment(self):\n        self.value += 1\n\na = Counter()\nb = Counter(10)\na.increment()\na.increment()\nb.increment()\nprint(a.value, b.value)",
    "lines": 1,
    "explain": "Jedes Objekt hat sein eigenes value: a startet bei 0 (+2), b bei 10 (+1)."
   },
   {
    "id": "k4-1c",
    "type": "quiz",
    "task": "Was bedeutet die Fehlermeldung <code>deposit() takes 1 positional argument but 2 were given</code>?",
    "options": [
     "Man hat beim Aufruf zu viele Zahlen übergeben",
     "In der Methodendefinition wurde self vergessen – Python übergibt das Objekt automatisch als zusätzliches Argument",
     "Die Klasse hat keinen Konstruktor",
     "deposit darf nur einmal aufgerufen werden"
    ],
    "correct": 1,
    "explain": "account.deposit(50) wird zu Account.deposit(account, 50) – zwei Argumente, aber die Definition erwartet nur eines."
   },
   {
    "id": "k4-1d",
    "type": "output",
    "task": "Was gibt der Code aus? (Achtung auf <code>self</code>!)",
    "code": "class Box:\n    def __init__(self):\n        self.items = 0\n\n    def add(self):\n        items = self.items + 1\n\nb = Box()\nb.add()\nb.add()\nprint(b.items)",
    "lines": 1,
    "explain": "items ohne self. ist nur eine lokale Variable – das Attribut bleibt 0."
   },
   {
    "id": "k4-1e",
    "type": "py",
    "task": "Schreib eine Klasse <code>Rectangle</code> mit Konstruktor <code>(width, height)</code> und den Methoden <code>area()</code> und <code>perimeter()</code> (Fläche und Umfang, als Rückgabewert).",
    "starter": "class Rectangle:\n    def __init__(self, width, height):\n        ",
    "hint": "self.width = width, self.height = height; area: return self.width * self.height; perimeter: return 2 * (self.width + self.height)",
    "solution": "class Rectangle:\n    def __init__(self, width, height):\n        self.width = width\n        self.height = height\n\n    def area(self):\n        return self.width * self.height\n\n    def perimeter(self):\n        return 2 * (self.width + self.height)",
    "tests": "r = Rectangle(4, 3)\nassert r.area() == 12, f\"Rectangle(4, 3).area() sollte 12 sein, ist {r.area()}.\"\nassert r.perimeter() == 14, f\"Rectangle(4, 3).perimeter() sollte 14 sein, ist {r.perimeter()}.\"\nq = Rectangle(2, 2)\nassert q.area() == 4 and r.area() == 12, \"Jedes Objekt braucht seine eigenen Werte (self.width/self.height).\"\nassert r.width == 4 and r.height == 3, \"Die Attribute sollen width und height heißen.\""
   },
   {
    "id": "k4-1f",
    "type": "py",
    "task": "<span class=\"tag\">Aufgabe 08 A</span> Schreib <code>Account</code> mit <code>owner</code> und <code>balance</code> (Default 0) und der Methode <code>deposit(amount)</code>, die <b>nur positive</b> Beträge akzeptiert.",
    "starter": "class Account:\n    ",
    "hint": "def __init__(self, owner, balance=0): … def deposit(self, amount): if amount > 0: self.balance += amount",
    "solution": "class Account:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self.balance = balance\n\n    def deposit(self, amount):\n        if amount > 0:\n            self.balance += amount",
    "tests": "a = Account(\"Ada\", 100)\nb = Account(\"Bob\")\nassert b.balance == 0, \"Der Default-Kontostand soll 0 sein.\"\na.deposit(50)\nassert a.balance == 150 and b.balance == 0, \"Nach a.deposit(50) soll a 150 und b weiter 0 haben.\"\na.deposit(-20); a.deposit(0)\nassert a.balance == 150, \"Negative Beträge und 0 dürfen nichts ändern.\"\nassert a.owner == \"Ada\", \"owner fehlt oder ist falsch.\""
   }
  ]
 },
 {
  "id": "kl-kapselung",
  "group": "Kapitel 4 · Klassen in Python",
  "num": "4.2",
  "title": "Kapselung & Properties",
  "short": "Kapselung & Properties",
  "source": "sew.htl-villach.at · Jahr 3 · 4. Klassen in Python – Kapselung, Properties",
  "theory": "\n<h3>Das Problem</h3>\n<p>Im Beispiel aus 4.1 ist <code>balance</code> von außen <b>frei zugänglich</b>. Nichts hindert jemanden an <code>account_ada.balance = -1000000</code> – und die Prüfung in <code>deposit</code> ist damit wertlos.</p>\n<p class=\"callout\"><b>Kapselung</b> bedeutet, den <b>inneren Zustand</b> eines Objekts vor unkontrolliertem Zugriff zu schützen: Änderungen laufen <b>ausschließlich über Methoden</b>, die die fachlichen Regeln durchsetzen.</p>\n\n<h3>Kapselung in Python: Namenskonventionen</h3>\n<p>Python setzt Kapselung über <b>Konventionen</b> um, nicht über Zugriffsverbote (es gibt kein <code>private</code> wie in Java):</p>\n<table class=\"ops\">\n<tr><td><code>_balance</code><br><span class=\"muted\">ein Unterstrich</span></td><td>markiert ein Attribut als <b>intern</b>. Zugriff von außen gilt als Verstoß gegen die Schnittstelle – technisch bleibt er möglich. Die Konvention ist überall etabliert und wird von Linter und IDE geprüft. <b>Das ist der Normalfall.</b></td></tr>\n<tr><td><code>__balance</code><br><span class=\"muted\">zwei Unterstriche</span></td><td>aktiviert zusätzlich <b>Name Mangling</b>: Python benennt das Attribut nach außen in <code>_Account__balance</code> um. Dient v. a. dazu, Namenskollisionen in Klassenhierarchien zu vermeiden – im Alltag selten nötig.</td></tr>\n</table>\n<div class=\"example\" data-lang=\"py\">class Account:\n    def __init__(self):\n        self._balance = 100\n        self.__secret = \"pin\"\n\nacc = Account()\nprint(acc._balance)              # works – but you shouldn't\nprint(acc._Account__secret)      # name mangling: the real name\nprint(acc.__secret)              # AttributeError</div>\n\n<h3>Properties: kontrollierter Zugriff in Attributschreibweise</h3>\n<p>Für lesenden und schreibenden Zugriff auf geschützte Attribute gibt es <b>Properties</b>: Methoden, die sich nach außen <b>wie Attribute</b> verhalten.</p>\n<div class=\"example\" data-lang=\"py\">class Account:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self._balance = balance\n\n    @property\n    def balance(self):\n        return self._balance\n\n    @balance.setter\n    def balance(self, new_balance):\n        if new_balance < 0:\n            print(\"A negative balance is not allowed.\")\n            return\n        self._balance = new_balance\n\naccount = Account(\"Ada\", 100)\nprint(account.balance)      # read through the property\naccount.balance = 500       # runs through the setter, including validation\naccount.balance = -50       # rejected by the setter\nprint(account.balance)</div>\n<ul>\n  <li><code>@property</code> ist ein <b>Dekorator</b> – eine Markierung, die das Verhalten der folgenden Funktion verändert. Wie Dekoratoren intern funktionieren, ist nicht Thema; das Rezept genügt.</li>\n  <li>Der <b>Getter</b> heißt wie das Attribut (<code>balance</code>) und gibt <code>self._balance</code> zurück.</li>\n  <li>Der <b>Setter</b> heißt gleich und bekommt <code>@balance.setter</code> – hier steckt die <b>Validierung</b>.</li>\n  <li>Der Aufrufer schreibt einfach <code>account.balance</code> – <b>ohne Klammern</b> – und trotzdem kontrolliert die Klasse jeden Zugriff.</li>\n</ul>\n<p class=\"callout\">Eine <b>Property ohne Setter</b> macht ein Attribut von außen praktisch <b>schreibgeschützt</b>: <code>account.balance = 99</code> führt dann zu einem <code>AttributeError</code>.</p>\n<div class=\"example\" data-lang=\"py\">class Account:\n    def __init__(self, balance):\n        self._balance = balance\n\n    @property\n    def balance(self):\n        return self._balance\n\nacc = Account(100)\nprint(acc.balance)\nacc.balance = 99</div>\n<p class=\"tip\">💡 Die Reaktion mit <code>print</code> auf ungültige Werte ist eine Übergangslösung – die saubere Behandlung mit <b>Exceptions</b> kommt in Kapitel 7.</p>\n",
  "exercises": [
   {
    "id": "k4-2a",
    "type": "quiz",
    "task": "Was bedeutet ein <b>einzelner</b> führender Unterstrich, z. B. <code>self._balance</code>?",
    "options": [
     "Python verbietet den Zugriff von außen",
     "Konvention: das Attribut ist intern – Zugriff von außen ist technisch möglich, gilt aber als Verstoß gegen die Schnittstelle",
     "Das Attribut wird in _Account_balance umbenannt",
     "Das Attribut ist eine Konstante"
    ],
    "correct": 1,
    "explain": "Python setzt Kapselung über Konventionen um. Name Mangling gibt es erst bei zwei Unterstrichen."
   },
   {
    "id": "k4-2b",
    "type": "quiz",
    "task": "Was passiert bei <code>__secret</code> (zwei Unterstriche) im Objekt einer Klasse <code>Account</code>?",
    "options": [
     "Nichts Besonderes",
     "Name Mangling: nach außen heißt das Attribut _Account__secret",
     "Das Attribut wird gelöscht",
     "Es wird verschlüsselt gespeichert"
    ],
    "correct": 1,
    "explain": "acc.__secret liefert einen AttributeError, acc._Account__secret funktioniert."
   },
   {
    "id": "k4-2c",
    "type": "output",
    "task": "Was gibt der Code aus?",
    "code": "class Thermostat:\n    def __init__(self):\n        self._temp = 20\n\n    @property\n    def temp(self):\n        return self._temp\n\n    @temp.setter\n    def temp(self, value):\n        if 5 <= value <= 30:\n            self._temp = value\n\nt = Thermostat()\nt.temp = 25\nt.temp = 99\nprint(t.temp)",
    "lines": 1,
    "explain": "25 wird angenommen, 99 vom Setter abgelehnt – der Wert bleibt 25."
   },
   {
    "id": "k4-2d",
    "type": "quiz",
    "task": "Warum verhindert eine <b>Property ohne Setter</b> das Setzen von außen, obwohl <code>_balance</code> technisch erreichbar bleibt?",
    "options": [
     "Weil Python _balance automatisch schützt",
     "Weil account.balance = … über die Property läuft – ohne Setter gibt es keine Methode zum Schreiben → AttributeError. Nur wer bewusst _balance verwendet, umgeht das",
     "Weil Properties nur einmal gesetzt werden können",
     "Das verhindert es nicht"
    ],
    "correct": 1,
    "explain": "Die Property ersetzt das Attribut balance. Der direkte Zugriff auf _balance verstößt gegen die Konvention."
   },
   {
    "id": "k4-2e",
    "type": "py",
    "task": "<span class=\"tag\">Aufgabe 08 B</span> Stell <code>Account</code> um: Der Kontostand heißt <code>_balance</code> und ist nur über eine <b>Property ohne Setter</b> namens <code>balance</code> lesbar. Ergänze <code>deposit(amount)</code> (nur positiv) und <code>withdraw(amount)</code>: nur wenn der Betrag <b>positiv und gedeckt</b> ist, sonst eine gedruckte Meldung.",
    "starter": "class Account:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self._balance = balance\n\n    ",
    "hint": "@property def balance(self): return self._balance. withdraw: if amount <= 0 or amount > self._balance: print(...) und return; sonst self._balance -= amount.",
    "solution": "class Account:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self._balance = balance\n\n    @property\n    def balance(self):\n        return self._balance\n\n    def deposit(self, amount):\n        if amount > 0:\n            self._balance += amount\n\n    def withdraw(self, amount):\n        if amount <= 0 or amount > self._balance:\n            print(\"Withdrawal not possible.\")\n            return\n        self._balance -= amount",
    "tests": "a = Account(\"Ada\", 100)\nassert a.balance == 100, \"a.balance soll den Kontostand liefern (Property).\"\ntry:\n    a.balance = 99\n    ok = False\nexcept AttributeError:\n    ok = True\nassert ok, \"a.balance = 99 soll fehlschlagen – Property OHNE Setter.\"\na.deposit(50); a.withdraw(30)\nassert a.balance == 120, f\"100 + 50 - 30 = 120, ist {a.balance}.\"\nmsg = _capture(a.withdraw, 500)\nassert a.balance == 120 and msg.strip(), \"Ungedeckte Abhebung: nichts abbuchen und eine Meldung ausgeben.\"\n_capture(a.withdraw, -5)\nassert a.balance == 120, \"Negative Abhebung darf nichts ändern.\"\nassert hasattr(a, \"_balance\"), \"Der Kontostand soll intern _balance heißen.\""
   },
   {
    "id": "k4-2f",
    "type": "py",
    "task": "Schreib eine Klasse <code>AudioTrack</code> (Übung aus dem Skriptum) mit <code>name</code>, <code>length</code> (Sekunden) und einer <code>volume</code>-<b>Property mit Setter</b>: nur Werte von <b>0 bis 100</b> sind erlaubt, sonst bleibt der alte Wert (Meldung ausgeben). Startwert der Lautstärke: 50.",
    "starter": "class AudioTrack:\n    def __init__(self, name, length):\n        ",
    "hint": "self._volume = 50 im Konstruktor. @property def volume … @volume.setter def volume(self, value): if not 0 <= value <= 100: print(...); return; self._volume = value",
    "solution": "class AudioTrack:\n    def __init__(self, name, length):\n        self.name = name\n        self.length = length\n        self._volume = 50\n\n    @property\n    def volume(self):\n        return self._volume\n\n    @volume.setter\n    def volume(self, value):\n        if not 0 <= value <= 100:\n            print(\"Volume must be between 0 and 100.\")\n            return\n        self._volume = value",
    "tests": "t = AudioTrack(\"Intro\", 90)\nassert t.volume == 50, \"Startlautstärke soll 50 sein.\"\nt.volume = 80\nassert t.volume == 80, \"volume = 80 soll übernommen werden.\"\n_capture(setattr, t, \"volume\", 150)\nassert t.volume == 80, \"150 ist ungültig – der Wert muss 80 bleiben.\"\n_capture(setattr, t, \"volume\", -1)\nassert t.volume == 80, \"-1 ist ungültig.\"\nt.volume = 0; assert t.volume == 0, \"0 ist erlaubt.\"\nt.volume = 100; assert t.volume == 100, \"100 ist erlaubt.\"\nassert isinstance(type(t).__dict__.get(\"volume\"), property), \"volume soll eine Property sein.\""
   }
  ]
 },
 {
  "id": "kl-str",
  "group": "Kapitel 4 · Klassen in Python",
  "num": "4.3",
  "title": "Lesbare Objekte: __str__ und __repr__",
  "short": "__str__ & __repr__",
  "source": "sew.htl-villach.at · Jahr 3 · 4. Klassen in Python – Lesbare Objekte: __str__ und __repr__",
  "theory": "\n<h3>Das Problem</h3>\n<p>Ein Objekt direkt auszugeben liefert standardmäßig wenig Brauchbares:</p>\n<div class=\"example\" data-lang=\"py\">class Account:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self._balance = balance\n\naccount = Account(\"Ada\", 500)\nprint(account)</div>\n\n<h3>__str__ und __repr__</h3>\n<div class=\"example\" data-lang=\"py\">class Account:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self._balance = balance\n\n    def __str__(self):\n        return f\"account of {self.owner}: {self._balance:.2f} EUR\"\n\n    def __repr__(self):\n        return f\"Account({self.owner!r}, {self._balance})\"\n\naccount = Account(\"Ada\", 500)\nprint(account)           # uses __str__\nprint(repr(account))     # uses __repr__ (like the REPL)\nprint([account])         # lists show __repr__</div>\n<table class=\"ops\">\n<tr><td><b><code>__str__</code></b></td><td>Textdarstellung für <b>Benutzer</b>. Wird von <code>print()</code> und f-Strings verwendet.</td></tr>\n<tr><td><b><code>__repr__</code></b></td><td>eindeutige Darstellung für <b>Entwickler</b> – idealerweise ein <b>nachbaubarer Python-Ausdruck</b> wie <code>Account('Ada', 500)</code>. Wird von der REPL, von Debuggern und bei der Ausgabe von <b>Listen</b> verwendet.</td></tr>\n</table>\n<p class=\"tip\">💡 <code>{self.owner!r}</code> im f-String ruft <code>repr()</code> auf – darum stehen bei Strings die Anführungszeichen dabei: <code>'Ada'</code>.</p>\n<p class=\"callout\"><b>Arbeitsregel für dieses Jahr:</b> Jede Klasse bekommt <b>mindestens ein <code>__str__</code></b>. Zwei Zeilen Aufwand, der Nutzen zeigt sich bei jeder Fehlersuche.</p>\n\n<h3>Dunder-Methoden</h3>\n<p>Methoden mit doppelten Unterstrichen auf beiden Seiten heißen <b>Dunder-Methoden</b>. Über sie klinken sich eigene Klassen in die Mechanismen der Sprache ein:</p>\n<table class=\"ops\">\n<tr><td><code>__init__</code></td><td>Objekterzeugung</td><td><code>Account(\"Ada\")</code></td></tr>\n<tr><td><code>__str__</code></td><td>Textausgabe</td><td><code>print(acc)</code>, <code>f\"{acc}\"</code></td></tr>\n<tr><td><code>__repr__</code></td><td>Entwicklerdarstellung</td><td><code>repr(acc)</code>, REPL, Listen</td></tr>\n<tr><td><code>__len__</code></td><td>Länge</td><td><code>len(obj)</code></td></tr>\n<tr><td><code>__eq__</code></td><td>Vergleich</td><td><code>a == b</code></td></tr>\n</table>\n<div class=\"example\" data-lang=\"py\">class Playlist:\n    def __init__(self, name):\n        self.name = name\n        self.tracks = []\n\n    def __len__(self):\n        return len(self.tracks)\n\n    def __eq__(self, other):\n        return self.name == other.name and self.tracks == other.tracks\n\np = Playlist(\"Rock\")\np.tracks.append(\"Paranoid\")\nprint(len(p))\nprint(p == Playlist(\"Rock\"))</div>\n",
  "exercises": [
   {
    "id": "k4-3a",
    "type": "quiz",
    "task": "Wann wird <code>__str__</code> verwendet, wann <code>__repr__</code>?",
    "options": [
     "__str__ für Entwickler, __repr__ für Benutzer",
     "__str__ von print() und f-Strings (für Benutzer); __repr__ von REPL, Debugger und bei Listen (für Entwickler)",
     "Beide werden nie automatisch aufgerufen",
     "__repr__ nur bei Zahlen"
    ],
    "correct": 1,
    "explain": "__repr__ soll idealerweise ein nachbaubarer Ausdruck sein, z. B. Account('Ada', 500)."
   },
   {
    "id": "k4-3b",
    "type": "output",
    "task": "Was gibt der Code aus?",
    "code": "class Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\n    def __str__(self):\n        return f\"({self.x}|{self.y})\"\n\n    def __repr__(self):\n        return f\"Point({self.x}, {self.y})\"\n\np = Point(2, 3)\nprint(p)\nprint([p])",
    "lines": 2,
    "explain": "print(p) nimmt __str__. Eine Liste zeigt ihre Elemente mit __repr__."
   },
   {
    "id": "k4-3c",
    "type": "py",
    "task": "<span class=\"tag\">Aufgabe 08 B/D</span> Ergänze <code>Account</code> um <code>__str__</code> → <code>account of Ada: 125.50 EUR</code> (2 Nachkommastellen) und <code>__repr__</code> → <code>Account('Ada', 125.5)</code>.",
    "starter": "class Account:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self._balance = balance\n\n    ",
    "hint": "return f\"account of {self.owner}: {self._balance:.2f} EUR\" bzw. return f\"Account({self.owner!r}, {self._balance})\"",
    "solution": "class Account:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self._balance = balance\n\n    def __str__(self):\n        return f\"account of {self.owner}: {self._balance:.2f} EUR\"\n\n    def __repr__(self):\n        return f\"Account({self.owner!r}, {self._balance})\"",
    "tests": "a = Account(\"Ada\", 125.5)\nassert str(a) == \"account of Ada: 125.50 EUR\", f\"str(a) ist {str(a)!r}.\"\nassert repr(a) == \"Account('Ada', 125.5)\", f\"repr(a) ist {repr(a)!r}.\"\nassert str(Account(\"Bob\")) == \"account of Bob: 0.00 EUR\", \"Default-Kontostand 0 → 0.00 EUR.\""
   },
   {
    "id": "k4-3d",
    "type": "py",
    "task": "<span class=\"tag\">Aufgabe 08 D</span> Implementiere <code>__eq__</code>: Zwei Konten gelten als gleich, wenn <b>Inhaber und Kontostand</b> übereinstimmen.",
    "starter": "class Account:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self._balance = balance\n\n    def __eq__(self, other):\n        ",
    "hint": "return self.owner == other.owner and self._balance == other._balance",
    "solution": "class Account:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self._balance = balance\n\n    def __eq__(self, other):\n        return self.owner == other.owner and self._balance == other._balance",
    "tests": "assert Account(\"Ada\", 10) == Account(\"Ada\", 10), \"Gleicher Inhaber und Stand → gleich.\"\nassert not (Account(\"Ada\", 10) == Account(\"Ada\", 20)), \"Anderer Stand → ungleich.\"\nassert not (Account(\"Ada\", 10) == Account(\"Bob\", 10)), \"Anderer Inhaber → ungleich.\""
   }
  ]
 },
 {
  "id": "kl-attribute",
  "group": "Kapitel 4 · Klassen in Python",
  "num": "4.4",
  "title": "Klassenattribute und Instanzattribute",
  "short": "Klassen- vs. Instanzattribut",
  "source": "sew.htl-villach.at · Jahr 3 · 4. Klassen in Python – Klassenattribute und Instanzattribute",
  "theory": "\n<div class=\"grid2\">\n<div class=\"card hl\"><b>Instanzattribut</b><br>wird in <code>__init__</code> über <code>self</code> gesetzt und gehört <b>dem einzelnen Objekt</b>.<br><code>self.owner = owner</code></div>\n<div class=\"card hl\"><b>Klassenattribut</b><br>steht <b>direkt im Klassenkörper</b> und gehört <b>der Klasse</b> – alle Objekte teilen es.<br><code>interest_rate = 0.02</code></div>\n</div>\n<pre class=\"syntax\">class Account:\n    interest_rate = 0.02            # class attribute: shared by all accounts\n\n    def __init__(self, owner):\n        self.owner = owner          # instance attribute: per object</pre>\n<p>Für <b>gemeinsame Konstanten</b> wie den Zinssatz ist ein Klassenattribut angemessen. Gelesen wird es über die Klasse (<code>Account.interest_rate</code>) oder ein Objekt.</p>\n\n<h3>Die Falle: veränderliche Klassenattribute</h3>\n<div class=\"example\" data-lang=\"py\">class Playlist:\n    tracks = []                         # WRONG: one list shared by ALL playlists\n\n    def add(self, song):\n        self.tracks.append(song)\n\nrock = Playlist()\njazz = Playlist()\nrock.add(\"Paranoid\")\nprint(jazz.tracks)</div>\n<p>Beide Playlists teilen <b>dieselbe</b> Liste, weil sie an der Klasse hängt statt am Objekt. Richtig: die Liste im Konstruktor anlegen – dann bekommt jedes Objekt seine eigene:</p>\n<div class=\"example\" data-lang=\"py\">class Playlist:\n    def __init__(self):\n        self.tracks = []                # RIGHT: each playlist gets its own list\n\n    def add(self, song):\n        self.tracks.append(song)\n\nrock = Playlist()\njazz = Playlist()\nrock.add(\"Paranoid\")\nprint(jazz.tracks)</div>\n<p class=\"callout\"><b>Arbeitsregel:</b> Veränderliche Attribute (<b>Listen, Dictionaries</b>) immer in <code>__init__</code> anlegen. Klassenattribute nur für Werte, die <b>tatsächlich allen Exemplaren gemeinsam</b> sind.</p>\n\n<h3>Typischer Einsatz: Zähler</h3>\n<p>Ein Klassenattribut eignet sich auch, um mitzuzählen, wie viele Objekte erzeugt wurden. Wichtig: im Konstruktor über die <b>Klasse</b> erhöhen (<code>Account.account_count += 1</code>), nicht über <code>self</code> – sonst entstünde ein neues Instanzattribut.</p>\n<div class=\"example\" data-lang=\"py\">class Account:\n    account_count = 0\n\n    def __init__(self, owner):\n        self.owner = owner\n        Account.account_count += 1\n\nAccount(\"Ada\")\nAccount(\"Bob\")\nprint(Account.account_count)</div>\n",
  "exercises": [
   {
    "id": "k4-4a",
    "type": "quiz",
    "task": "Warum ist <code>tracks = []</code> im Klassenkörper ein Fehler, <code>interest_rate = 0.02</code> aber in Ordnung?",
    "options": [
     "Listen sind im Klassenkörper verboten",
     "Eine Liste ist veränderlich und wird von allen Objekten geteilt – fügt eines etwas hinzu, sehen es alle. Der Zinssatz ist ein gemeinsamer, unveränderter Wert",
     "Zahlen sind schneller als Listen",
     "Beides ist ein Fehler"
    ],
    "correct": 1,
    "explain": "Veränderliche Attribute gehören in __init__."
   },
   {
    "id": "k4-4b",
    "type": "output",
    "code": "class Team:\n    members = []\n\n    def __init__(self, name):\n        self.name = name\n\n    def join(self, person):\n        self.members.append(person)\n\na = Team(\"A\")\nb = Team(\"B\")\na.join(\"Ada\")\nb.join(\"Bob\")\nprint(a.members)",
    "lines": 1,
    "explain": "members ist ein Klassenattribut – beide Teams teilen dieselbe Liste."
   },
   {
    "id": "k4-4c",
    "type": "py",
    "task": "<span class=\"tag\">Aufgabe 08 C</span> Zähl mit einem Klassenattribut <code>account_count</code> mit, wie viele Konten insgesamt erzeugt wurden. Ergänze eine Buchungsliste <code>_transactions</code> (pro Objekt!), in der <code>deposit</code> jede Einzahlung als Text ablegt, z. B. <code>\"deposit 50\"</code>.",
    "starter": "class Account:\n    ",
    "hint": "account_count = 0 im Klassenkörper; im Konstruktor Account.account_count += 1 und self._transactions = []. In deposit: self._transactions.append(f\"deposit {amount}\")",
    "solution": "class Account:\n    account_count = 0\n\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self._balance = balance\n        self._transactions = []\n        Account.account_count += 1\n\n    def deposit(self, amount):\n        if amount > 0:\n            self._balance += amount\n            self._transactions.append(f\"deposit {amount}\")",
    "tests": "start = Account.account_count\na = Account(\"Ada\"); b = Account(\"Bob\", 10)\nassert Account.account_count == start + 2, \"account_count soll pro neuem Konto um 1 steigen (über die Klasse!).\"\nassert \"account_count\" in Account.__dict__, \"account_count soll ein Klassenattribut sein.\"\na.deposit(50)\nassert a._transactions == [\"deposit 50\"], f\"a._transactions ist {a._transactions}.\"\nassert b._transactions == [], \"Jedes Konto braucht seine EIGENE Liste – im Konstruktor anlegen!\"\nassert \"_transactions\" not in Account.__dict__, \"_transactions darf kein Klassenattribut sein.\""
   }
  ]
 },
 {
  "id": "kl-static",
  "group": "Kapitel 4 · Klassen in Python",
  "num": "4.5",
  "title": "@staticmethod und @classmethod",
  "short": "static- & classmethod",
  "source": "sew.htl-villach.at · Jahr 3 · 4. Klassen in Python – Statische Methoden und Klassenmethoden, Was es sonst noch gibt",
  "theory": "\n<p>Gewöhnliche Methoden erhalten mit <code>self</code> das Objekt und arbeiten mit dessen Instanzattributen. Manche Operationen gehören aber zur Klasse, <b>ohne ein einzelnes Objekt zu betreffen</b>. Dafür gibt es zwei Dekoratoren.</p>\n\n<h3>@staticmethod – Funktion im Namensraum der Klasse</h3>\n<p>Bekommt <b>weder <code>self</code> noch die Klasse</b>. Eine gewöhnliche Funktion, die thematisch in der Klasse abgelegt ist. Typisch: <b>Hilfsberechnungen und Prüfungen</b> ohne Objektzustand.</p>\n<div class=\"example\" data-lang=\"py\">class Account:\n    @staticmethod\n    def is_valid_iban(iban):\n        cleaned = iban.replace(\" \", \"\")\n        return len(cleaned) == 20 and cleaned[:2].isalpha()\n\nprint(Account.is_valid_iban(\"AT12 3456 7890 1234 56\"))</div>\n<p>Aufruf über die Klasse (<code>Account.is_valid_iban(...)</code>) – ein Objekt ist nicht nötig. Ohne den Dekorator würde Python das erste Argument als <code>self</code> deuten.</p>\n\n<h3>@classmethod – Methode auf der Klasse</h3>\n<p>Bekommt als ersten Parameter <b>die Klasse selbst</b>, konventionell <code>cls</code>. Wichtigster Einsatz: <b>alternative Konstruktoren</b> (Fabrikmethoden), die ein Objekt aus einer anderen Datenquelle erzeugen.</p>\n<div class=\"example\" data-lang=\"py\">class Account:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self._balance = balance\n\n    @classmethod\n    def from_dict(cls, data):\n        return cls(data[\"owner\"], data.get(\"balance\", 0))\n\nrecord = {\"owner\": \"Ada\", \"balance\": 100}\naccount = Account.from_dict(record)         # cls(...) creates an Account\nprint(account.owner, account._balance)</div>\n<p><code>cls(...)</code> ruft den Konstruktor der Klasse auf, auf der die Methode aufgerufen wurde – bewusst <b>nicht</b> fest als <code>Account(...)</code>. In einer Klassenhierarchie erzeugt <code>SavingsAccount.from_dict(...)</code> dadurch automatisch ein <code>SavingsAccount</code> (Vererbung kommt im nächsten Kapitel). So bietet man mehrere Erzeugungswege an, ohne den Konstruktor zu überladen.</p>\n\n<h3>Die drei methodengebundenen Dekoratoren</h3>\n<table class=\"ops\">\n<tr><td><code>@property</code></td><td>lesender Zugriff in Attributschreibweise</td></tr>\n<tr><td><code>@staticmethod</code></td><td>Funktion ohne Objekt- oder Klassenbezug</td></tr>\n<tr><td><code>@classmethod</code></td><td>Methode, die die Klasse statt des Objekts erhält</td></tr>\n</table>\n<p class=\"callout\"><b>Faustregel:</b> <code>self</code> verwendet, wer <b>Instanzdaten</b> braucht · <code>cls</code>, wer <b>die Klasse</b> braucht (meist für alternative Konstruktoren) · keines von beiden → reine Hilfsfunktion → <code>@staticmethod</code>.</p>\n",
  "exercises": [
   {
    "id": "k4-5a",
    "type": "quiz",
    "task": "Eine Methode prüft nur, ob ein Text eine gültige Postleitzahl ist – sie braucht weder Objekt- noch Klassendaten. Welcher Methodentyp passt?",
    "options": [
     "normale Methode mit self",
     "@classmethod",
     "@staticmethod",
     "@property"
    ],
    "correct": 2,
    "explain": "Reine Hilfsfunktion ohne Objekt- oder Klassenbezug → @staticmethod."
   },
   {
    "id": "k4-5b",
    "type": "quiz",
    "task": "Wofür verwendet man <code>@classmethod</code> am häufigsten?",
    "options": [
     "Für Getter",
     "Für alternative Konstruktoren (Fabrikmethoden), z. B. from_dict oder from_seconds",
     "Um self zu sparen",
     "Für Vergleiche mit =="
    ],
    "correct": 1,
    "explain": "cls(...) erzeugt ein Objekt der Klasse, auf der die Methode aufgerufen wurde."
   },
   {
    "id": "k4-5c",
    "type": "quiz",
    "task": "Warum schreibt man in einer Klassenmethode <code>cls(...)</code> statt <code>Account(...)</code>?",
    "options": [
     "Weil es kürzer ist",
     "Damit in Unterklassen automatisch ein Objekt der Unterklasse entsteht (SavingsAccount.from_dict → SavingsAccount)",
     "Weil Account in der Klasse nicht bekannt ist",
     "Es gibt keinen Unterschied"
    ],
    "correct": 1,
    "explain": "Das wird bei Vererbung (Kapitel 5) wichtig."
   },
   {
    "id": "k4-5d",
    "type": "py",
    "task": "Ergänze <code>Temperature</code> um eine <b>Klassenmethode</b> <code>from_fahrenheit(cls, f)</code> (Umrechnung: <code>(f - 32) * 5 / 9</code>) und eine <b>statische Methode</b> <code>is_freezing(celsius)</code> (True bei ≤ 0).",
    "starter": "class Temperature:\n    def __init__(self, celsius):\n        self.celsius = celsius\n\n    ",
    "hint": "@classmethod def from_fahrenheit(cls, f): return cls((f - 32) * 5 / 9). @staticmethod def is_freezing(celsius): return celsius <= 0",
    "solution": "class Temperature:\n    def __init__(self, celsius):\n        self.celsius = celsius\n\n    @classmethod\n    def from_fahrenheit(cls, f):\n        return cls((f - 32) * 5 / 9)\n\n    @staticmethod\n    def is_freezing(celsius):\n        return celsius <= 0",
    "tests": "t = Temperature.from_fahrenheit(212)\nassert isinstance(t, Temperature), \"from_fahrenheit soll ein Temperature-Objekt liefern.\"\nassert abs(t.celsius - 100) < 1e-9, f\"212 °F = 100 °C, erhalten {t.celsius}.\"\nclass Sub(Temperature): pass\nassert type(Sub.from_fahrenheit(32)) is Sub, \"Verwende cls(...) statt Temperature(...).\"\nassert Temperature.is_freezing(0) and Temperature.is_freezing(-5) and not Temperature.is_freezing(3), \"is_freezing falsch.\"\nassert isinstance(Temperature.__dict__[\"is_freezing\"], staticmethod), \"is_freezing soll @staticmethod sein.\"\nassert isinstance(Temperature.__dict__[\"from_fahrenheit\"], classmethod), \"from_fahrenheit soll @classmethod sein.\""
   }
  ]
 },
 {
  "id": "kl-beispiel",
  "group": "Kapitel 4 · Klassen in Python",
  "num": "4.6",
  "title": "Vollständiges Beispiel & Zusammenfassung",
  "short": "Beispiel & Übersicht",
  "source": "sew.htl-villach.at · Jahr 3 · 4. Klassen in Python – Ein vollständiges Beispiel, Zusammenfassung der Syntax, Lernergebnisse",
  "theory": "\n<h3>Die Klasse Clip</h3>\n<p>Aus dem Videoschnitt-Umfeld – kombiniert alle Elemente des Kapitels und ist Ausgangspunkt für die nächsten Kapitel:</p>\n<div class=\"example\" data-lang=\"py\">class Clip:\n    \"\"\"A video clip in an editing project.\"\"\"\n\n    fps = 25                                    # project standard for all clips\n\n    def __init__(self, name, duration_frames):\n        self.name = name\n        self._duration_frames = duration_frames\n\n    @classmethod\n    def from_seconds(cls, name, seconds):\n        \"\"\"Create a clip from a duration given in seconds.\"\"\"\n        return cls(name, round(seconds * cls.fps))\n\n    @staticmethod\n    def frames_to_seconds(frame_count):\n        return frame_count / Clip.fps\n\n    @property\n    def duration_seconds(self):\n        return self._duration_frames / Clip.fps\n\n    def trim(self, frame_count):\n        \"\"\"Cut the given number of frames off the end.\"\"\"\n        if 0 < frame_count < self._duration_frames:\n            self._duration_frames -= frame_count\n\n    def __str__(self):\n        return f\"{self.name} ({self.duration_seconds:.1f} s)\"\n\nintro = Clip(\"intro\", 250)\nintro.trim(50)\nprint(intro)\n\noutro = Clip.from_seconds(\"outro\", 4)   # alternative constructor\nprint(outro)\nprint(Clip.frames_to_seconds(100))      # no object needed</div>\n<p>Darin steckt: ein <b>Klassenattribut</b> (Projektstandard <code>fps</code>), ein <b>geschütztes Instanzattribut</b>, eine <b>Property</b> für die abgeleitete Größe, eine <b>Klassenmethode</b> als alternativer Konstruktor, eine <b>statische Hilfsmethode</b>, eine Methode mit <b>Plausibilitätsprüfung</b>, <code>__str__</code> sowie <b>Docstrings</b>. <i>Das ist der Standard, den eigene Klassen ab jetzt erfüllen sollen.</i></p>\n\n<h3>Zusammenfassung der Syntax</h3>\n<table class=\"ops\">\n<tr><td>Klassendefinition</td><td><code>class Account:</code></td></tr>\n<tr><td>Konstruktor</td><td><code>def __init__(self, ...):</code></td></tr>\n<tr><td>Objekt erzeugen</td><td><code>Account(\"Ada\", 100)</code></td></tr>\n<tr><td>Methode</td><td><code>def deposit(self, amount):</code></td></tr>\n<tr><td>Objektbezug</td><td><code>self</code>, expliziter erster Parameter</td></tr>\n<tr><td>Internes Attribut</td><td><code>self._balance</code> (Konvention)</td></tr>\n<tr><td>Lesender Zugriff</td><td><code>@property</code></td></tr>\n<tr><td>Schreibender Zugriff</td><td><code>@balance.setter</code></td></tr>\n<tr><td>Methode ohne Objektbezug</td><td><code>@staticmethod</code></td></tr>\n<tr><td>Methode auf der Klasse</td><td><code>@classmethod</code> (erster Parameter <code>cls</code>)</td></tr>\n<tr><td>Textdarstellung</td><td><code>__str__</code>, <code>__repr__</code></td></tr>\n<tr><td>Geteilter Wert</td><td>Klassenattribut im Klassenkörper</td></tr>\n</table>\n\n<h3>Lernergebnisse von Kapitel 4</h3>\n<table class=\"ops\">\n<tr><td><b>Erklären</b></td><td>Unterschied Klasse/Objekt, Rolle von <code>__init__</code> und <code>self</code></td></tr>\n<tr><td><b>Anwenden</b></td><td>Klassen mit Konstruktor, Methoden und Attributen schreiben, Objekte erzeugen und verwenden</td></tr>\n<tr><td><b>Anwenden</b></td><td>Kapselung mit Unterstrich-Konvention und Properties (<code>@property</code>, Setter mit Validierung)</td></tr>\n<tr><td><b>Erklären</b></td><td>Klassen- vs. Instanzattribute, Falle geteilter veränderlicher Klassenattribute</td></tr>\n<tr><td><b>Anwenden</b></td><td><code>@staticmethod</code> und <code>@classmethod</code> (alternative Konstruktoren) sachgerecht einsetzen</td></tr>\n<tr><td><b>Anwenden</b></td><td>Objekte mit <code>__str__</code> und <code>__repr__</code> lesbar darstellen</td></tr>\n</table>\n",
  "exercises": [
   {
    "id": "k4-6a",
    "type": "output",
    "code": "class Clip:\n    fps = 25\n\n    def __init__(self, name, duration_frames):\n        self.name = name\n        self._duration_frames = duration_frames\n\n    @property\n    def duration_seconds(self):\n        return self._duration_frames / Clip.fps\n\n    def trim(self, frame_count):\n        if 0 < frame_count < self._duration_frames:\n            self._duration_frames -= frame_count\n\n    def __str__(self):\n        return f\"{self.name} ({self.duration_seconds:.1f} s)\"\n\nc = Clip(\"intro\", 250)\nc.trim(300)\nc.trim(100)\nprint(c)",
    "lines": 1,
    "explain": "trim(300) wird abgelehnt (nicht kleiner als 250), trim(100) → 150 Frames = 6.0 s."
   },
   {
    "id": "k4-6b",
    "type": "multi",
    "task": "Welche Elemente kommen in der Klasse <code>Clip</code> vor?",
    "options": [
     "ein Klassenattribut (fps)",
     "eine Property (duration_seconds)",
     "ein alternativer Konstruktor mit @classmethod",
     "ein Setter für duration_seconds"
    ],
    "correct": [
     0,
     1,
     2
    ],
    "explain": "duration_seconds ist nur lesbar – es gibt keinen Setter."
   },
   {
    "id": "k4-6c",
    "type": "py",
    "task": "Schreib eine Klasse <code>Song</code> nach dem Vorbild von <code>Clip</code>:<ul style=\"margin:6px 0 0;padding-left:18px\"><li>Konstruktor <code>(title, seconds)</code>, Dauer intern in <code>_seconds</code></li><li><b>Property</b> <code>minutes</code> (nur lesen) → Dauer in Minuten</li><li><b>Klassenmethode</b> <code>from_minutes(cls, title, minutes)</code></li><li><code>__str__</code> → <code>\"Intro (1:30)\"</code> (Minuten:Sekunden, Sekunden zweistellig)</li></ul>",
    "starter": "class Song:\n    ",
    "hint": "__str__: m, s = divmod(self._seconds, 60); return f\"{self.title} ({m}:{s:02d})\". from_minutes: return cls(title, round(minutes * 60))",
    "solution": "class Song:\n    def __init__(self, title, seconds):\n        self.title = title\n        self._seconds = seconds\n\n    @property\n    def minutes(self):\n        return self._seconds / 60\n\n    @classmethod\n    def from_minutes(cls, title, minutes):\n        return cls(title, round(minutes * 60))\n\n    def __str__(self):\n        m, s = divmod(self._seconds, 60)\n        return f\"{self.title} ({m}:{s:02d})\"",
    "tests": "s = Song(\"Intro\", 90)\nassert str(s) == \"Intro (1:30)\", f\"str(Song('Intro', 90)) ist {str(s)!r}.\"\nassert str(Song(\"Short\", 65)) == \"Short (1:05)\", \"Sekunden zweistellig: 1:05.\"\nassert s.minutes == 1.5, f\"minutes sollte 1.5 sein, ist {s.minutes}.\"\ntry:\n    s.minutes = 3; ro = False\nexcept AttributeError:\n    ro = True\nassert ro, \"minutes soll nur lesbar sein (Property ohne Setter).\"\nt = Song.from_minutes(\"Main\", 4)\nassert isinstance(t, Song) and str(t) == \"Main (4:00)\", f\"from_minutes('Main', 4) → {t}.\""
   }
  ]
 },
 {
  "id": "auf-01",
  "group": "Aufgaben",
  "num": "01",
  "title": "Aufgabe 01 – Python-Spickzettel",
  "short": "01 Python-Spickzettel",
  "source": "sew.htl-villach.at · Jahr 3 · Übungen – Aufgabe 01",
  "theory": "\n<h3>Worum geht es?</h3>\n<p>Du erstellst deinen persönlichen <b>Python-Spickzettel</b>: eine kompakte, <b>selbst getestete</b> Referenz aller Grundkonstrukte (Kapitel 1). Der Lerneffekt liegt im Weg: Jedes Konstrukt wird einmal selbst getippt, ausgeführt und in eigenen Worten beschrieben. <b>Ungeprüfte Beispiele haben auf dem Zettel nichts verloren.</b></p>\n<table class=\"ops\">\n<tr><td><b>Teil A – Ankommen</b></td><td>Python installieren (<code>python --version</code> ≥ 3.12), REPL: <code>2 ** 10</code>, <code>7 / 2</code>, <code>7 // 2</code>, <code>\"ab\" * 3</code>; <code>hello.py</code> mit <code>input()</code> und f-String</td></tr>\n<tr><td><b>Teil B – Spickzettel</b></td><td>je ein getestetes Mini-Beispiel für: Variable/Konstante, if/elif/else, for über range und Liste, while, Funktion mit Default & return, Liste (append, Index, len, Slicing), Dictionary (Zugriff, in, items()), f-String mit <code>:.2f</code> und <code>:03d</code></td></tr>\n<tr><td><b>Teil C – Stolperfallen</b></td><td><code>input() * 2</code>, <code>10 / 4</code> vs. <code>10 // 4</code>, <code>\"5\" == 5</code>; drei Fehlerquellen absichtlich provozieren und die Fehlermeldung notieren</td></tr>\n<tr><td><b>Teil D – Experte</b></td><td><code>timecode_to_frames()</code> als Umkehrfunktion inkl. Prüfung ungültiger Eingaben und <b>Rundreise-Test</b> mit <code>assert</code></td></tr>\n</table>\n<p class=\"tip\">💡 Teil B kannst du am besten in der <a href=\"#py-spielwiese\">Spielwiese</a> ausprobieren. Hier unten sind die prüfbaren Teile.</p>\n<h3>Provozierte Fehler – zum Ausprobieren</h3>\n<div class=\"example\" data-lang=\"py\">is_valid = true</div>\n<div class=\"example\" data-lang=\"py\">if 3 > 2\n    print(\"yes\")</div>\n<div class=\"example\" data-lang=\"py\" data-stdin=\"5\">number = input(\"number: \")\nprint(number + 1)</div>\n<h3>Wissenscheck</h3>\n<ul>\n<li>Was liefert <code>input()</code> immer? → einen <b>String</b></li>\n<li>Unterschied <code>/</code> und <code>//</code>? → Division (float) vs. Ganzzahldivision</li>\n<li>Woran erkennt Python, welche Zeilen zu einem <code>if</code> gehören? → an der <b>Einrückung</b></li>\n<li>Namenskonvention für Funktionen/Variablen? → <b>snake_case</b></li>\n<li>Was gibt <code>f\"{3.14159:.2f}\"</code> aus? → <code>3.14</code></li>\n</ul>\n",
  "exercises": [
   {
    "id": "p2",
    "type": "py",
    "task": "Schreib ein Programm, das mit <code>input()</code> nach dem Namen fragt (<code>\"What is your name? \"</code>) und dann mit einem f-String <code>Hello, &lt;Name&gt;!</code> ausgibt.",
    "stdin": "Ada",
    "hint": "name = input(\"…\") – dann print(f\"Hello, {name}!\")",
    "solution": "name = input(\"What is your name? \")\nprint(f\"Hello, {name}!\")",
    "tests": "assert \"Hello, Ada!\" in _out(), \"Bei der Eingabe Ada muss Hello, Ada! ausgegeben werden.\"\nassert \"input(\" in _src, \"Verwende input().\""
   },
   {
    "id": "t3",
    "type": "quiz",
    "task": "Was gibt <code>input(\"number: \") * 2</code> bei der Eingabe <code>7</code> zurück?",
    "options": [
     "14",
     "'77'",
     "7",
     "einen Fehler"
    ],
    "correct": 1,
    "explain": "input() liefert immer einen <b>String</b>. String * 2 verdoppelt den Text: \"7\" * 2 = \"77\". Lösung: int(input(...))."
   },
   {
    "id": "py-d4",
    "type": "output",
    "code": "price = 7.5\nindex = 7\nprint(f\"{price:.2f}\")\nprint(f\"{index:03d}\")\nprint(f\"{3.14159:.2f}\")",
    "lines": 3,
    "explain": ":.2f → zwei Nachkommastellen (gerundet), :03d → mit Nullen auf drei Stellen."
   },
   {
    "id": "py-d6",
    "type": "py",
    "task": "<span class=\"tag\">Aufgabe 01 D – Experte</span> <code>timecode_to_frames(timecode, fps=25)</code>: Umkehrfunktion. <code>\"01:00:02:11\"</code> → <code>90061</code>. Ungültige Eingaben (nicht genau 4 Teile, nicht numerisch, Minuten/Sekunden über 59, Frame ≥ fps) → <code>None</code>. Stunden sind nach oben <b>nicht</b> begrenzt (<code>\"100:00:00:00\"</code> ist gültig).",
    "starter": "def timecode_to_frames(timecode, fps=25):\n    ",
    "hint": "parts = timecode.split(\":\"); len(parts) != 4 → None; jeder Teil .isdigit()? Dann int() und Bereiche prüfen. Ergebnis: ((h * 60 + m) * 60 + s) * fps + f",
    "solution": "def timecode_to_frames(timecode, fps=25):\n    parts = timecode.split(\":\")\n    if len(parts) != 4 or not all(p.isdigit() for p in parts):\n        print(\"Invalid timecode format.\")\n        return None\n    hours, minutes, seconds, frames = [int(p) for p in parts]\n    if minutes > 59 or seconds > 59 or frames >= fps:\n        print(\"Timecode value out of range.\")\n        return None\n    return ((hours * 60 + minutes) * 60 + seconds) * fps + frames",
    "tests": "assert timecode_to_frames(\"01:00:02:11\") == 90061, \"'01:00:02:11' sollte 90061 sein.\"\nassert timecode_to_frames(\"24:00:00:00\") == 2160000, \"24:00:00:00 ist gültig (keine Uhrzeit!) → 2160000.\"\nassert timecode_to_frames(\"100:00:00:00\") == 9000000, \"Stunden sind nach oben nicht begrenzt.\"\nfor bad in [\"01:00:02\", \"aa:00:00:00\", \"00:60:00:00\", \"00:00:60:00\", \"00:00:00:25\", \"1:2:3:4:5\"]:\n    assert timecode_to_frames(bad) is None, f\"{bad!r} ist ungültig → None erwartet.\"\ndef _ftc(n, fps=25):\n    s, f = divmod(n, fps); h, r = divmod(s, 3600); m, s = divmod(r, 60)\n    return f\"{h:02d}:{m:02d}:{s:02d}:{f:02d}\"\nfor n in [0, 24, 25, 3599, 90061, 2160000]:\n    assert timecode_to_frames(_ftc(n)) == n, f\"Rundreise für {n} schlägt fehl.\""
   },
   {
    "id": "a01a",
    "type": "output",
    "task": "<span class=\"tag\">Teil C</span> Was gibt der Code aus?",
    "code": "print(10 / 4)\nprint(10 // 4)\nprint(\"5\" == 5)",
    "lines": 3,
    "explain": "/ liefert immer float (2.5), // die Ganzzahl (2), und ein String ist nie gleich einer Zahl."
   },
   {
    "id": "a01b",
    "type": "quiz",
    "task": "Warum schafft die <b>Rundreise-Prüfung</b> <code>timecode_to_frames(frames_to_timecode(n)) == n</code> mehr Vertrauen als einzeln notierte Erwartungswerte?",
    "options": [
     "Weil sie schneller ist",
     "Weil sie beide Funktionen gegeneinander prüft und sich mit einer Schleife beliebig viele Werte automatisch testen lassen – auch Grenzfälle wie 24:00:00:00",
     "Weil assert nie fehlschlägt",
     "Weil man keine Werte ausrechnen muss"
    ],
    "correct": 1,
    "explain": "Beide Richtungen müssen zusammenpassen – Fehler in einer der Funktionen fallen sofort auf, und das automatisiert für viele Werte."
   }
  ]
 },
 {
  "id": "auf-02",
  "group": "Aufgaben",
  "num": "02",
  "title": "Aufgabe 02 – Alte Bekannte, neue Sprache",
  "short": "02 Alte Bekannte",
  "source": "sew.htl-villach.at · Jahr 3 · Übungen – Aufgabe 02",
  "theory": "\n<h3>Worum geht es?</h3>\n<p>Klassische Programmieraufgaben in Python lösen – Lösungsmuster wie <b>Zählen, Summieren, Suchen, Umwandeln</b>, die zum Grundwerkzeug gehören. Ziel: Routine mit der Syntax und erleben, dass Python für viele Muster besonders <b>knappe Formulierungen</b> hat. Jede Teilaufgabe wird als <b>Funktion mit mindestens zwei Testaufrufen</b> abgegeben.</p>\n<table class=\"ops\">\n<tr><td><b>Teil A – Fingerübungen</b></td><td><code>print_numbers()</code>, <code>sum_up_to(n)</code>, <code>grade_average(grades)</code> (leere Liste?)</td></tr>\n<tr><td><b>Teil B – Klassiker</b></td><td><code>fizzbuzz(n)</code>, <code>caesar(text, shift)</code> mit <code>ord()</code>/<code>chr()</code>, <code>linear_search()</code> mit zwei Rückgabewerten</td></tr>\n<tr><td><b>Teil C – Die Python-Art</b></td><td><code>grade_average</code> mit <code>sum()</code>/<code>len()</code>, Quadratzahlen als List Comprehension, <code>word_frequency()</code> mit Dictionary und mit <code>collections.Counter</code></td></tr>\n<tr><td><b>Teil D – Experte</b></td><td><code>crack_caesar()</code>: alle 26 Verschiebungen probieren, Kandidaten nach Buchstabenhäufigkeit (im Deutschen ist <b>e</b> am häufigsten) bewerten</td></tr>\n</table>\n<h3>ord() und chr()</h3>\n<div class=\"example\" data-lang=\"py\">print(ord(\"a\"), ord(\"z\"))\nprint(chr(98))\nshift = 3\nch = \"y\"\nprint(chr((ord(ch) - ord(\"a\") + shift) % 26 + ord(\"a\")))</div>\n<p><code>% 26</code> sorgt dafür, dass nach <code>z</code> wieder bei <code>a</code> begonnen wird.</p>\n<h3>Counter</h3>\n<div class=\"example\" data-lang=\"py\">from collections import Counter\nprint(Counter(\"eins zwei zwei\".split()))\nprint(Counter(\"ein text mit e\").most_common(2))</div>\n<h3>Wissenscheck</h3>\n<ul>\n<li>Warum bei fizzbuzz „durch 3 <b>und</b> 5“ zuerst prüfen?</li>\n<li>Was liefert <code>\"eins zwei zwei\".split()</code>, welcher Typ?</li>\n<li>Wie liest sich <code>[x * x for x in range(1, 21)]</code> als Satz?</li>\n<li>Wie gibt eine Funktion zwei Werte zurück, wie nimmt man sie entgegen?</li>\n<li>Welche Entscheidung musstest du bei <code>grade_average([])</code> treffen?</li>\n</ul>\n",
  "exercises": [
   {
    "id": "k2",
    "type": "py",
    "task": "<span class=\"tag\">Aufgabe 02 A</span> <code>print_numbers()</code>: gibt die Zahlen 1 bis 20 aus, jede in einer eigenen Zeile.",
    "starter": "def print_numbers():\n    ",
    "hint": "for i in range(1, 21): print(i)",
    "solution": "def print_numbers():\n    for i in range(1, 21):\n        print(i)",
    "tests": "out = _capture(print_numbers).split()\nassert out == [str(i) for i in range(1, 21)], \"Es müssen genau die Zahlen 1 bis 20 ausgegeben werden – denk an die Obergrenze von range().\""
   },
   {
    "id": "k3",
    "type": "py",
    "task": "<span class=\"tag\">Aufgabe 02 A</span> <code>sum_up_to(n)</code>: liefert die Summe 1 + 2 + … + n <b>mit einer Schleife</b>. Kontrollwert: <code>sum_up_to(100)</code> ergibt 5050.",
    "starter": "def sum_up_to(n):\n    ",
    "hint": "total = 0, dann for i in range(1, n + 1): total += i, am Ende return total",
    "solution": "def sum_up_to(n):\n    total = 0\n    for i in range(1, n + 1):\n        total += i\n    return total",
    "tests": "assert sum_up_to(100) == 5050, f\"sum_up_to(100) sollte 5050 sein, ist {sum_up_to(100)}.\"\nassert sum_up_to(1) == 1 and sum_up_to(0) == 0, \"Grenzfälle: sum_up_to(1) = 1, sum_up_to(0) = 0.\""
   },
   {
    "id": "f3",
    "type": "py",
    "task": "<span class=\"tag\">Aufgabe 02 A</span> <code>grade_average(grades)</code>: liefert den Durchschnitt einer Notenliste. Bei einer <b>leeren Liste</b> soll <code>None</code> zurückkommen (statt abzustürzen).",
    "starter": "def grade_average(grades):\n    ",
    "hint": "if not grades: return None – sonst sum(grades) / len(grades)",
    "solution": "def grade_average(grades):\n    # empty list: no average possible -> None\n    if not grades:\n        return None\n    return sum(grades) / len(grades)",
    "tests": "assert grade_average([1, 2, 3]) == 2, \"grade_average([1, 2, 3]) sollte 2 sein.\"\nassert abs(grade_average([1, 2]) - 1.5) < 1e-9, \"grade_average([1, 2]) sollte 1.5 sein.\"\nassert grade_average([]) is None, \"Bei leerer Liste soll None zurückkommen (Division durch 0 vermeiden).\""
   },
   {
    "id": "k4",
    "type": "py",
    "task": "<span class=\"tag\">Aufgabe 02 B</span> <code>fizzbuzz(n)</code>: gibt die Zahlen 1 bis n aus; Vielfache von 3 werden durch <code>Fizz</code> ersetzt, Vielfache von 5 durch <code>Buzz</code>, Vielfache von beiden durch <code>FizzBuzz</code>.",
    "starter": "def fizzbuzz(n):\n    ",
    "hint": "Reihenfolge! Zuerst i % 15 == 0 (oder i % 3 == 0 and i % 5 == 0) prüfen, dann 3, dann 5.",
    "solution": "def fizzbuzz(n):\n    for i in range(1, n + 1):\n        if i % 3 == 0 and i % 5 == 0:\n            print(\"FizzBuzz\")\n        elif i % 3 == 0:\n            print(\"Fizz\")\n        elif i % 5 == 0:\n            print(\"Buzz\")\n        else:\n            print(i)",
    "tests": "out = _capture(fizzbuzz, 15).split()\nexp = [\"1\",\"2\",\"Fizz\",\"4\",\"Buzz\",\"Fizz\",\"7\",\"8\",\"Fizz\",\"Buzz\",\"11\",\"Fizz\",\"13\",\"14\",\"FizzBuzz\"]\nassert len(out) == 15, f\"fizzbuzz(15) muss 15 Zeilen ausgeben, gibt {len(out)} aus.\"\nfor i, (a, b) in enumerate(zip(out, exp), 1):\n    assert a == b, f\"Bei {i} erwartet {b}, ausgegeben {a}.\""
   },
   {
    "id": "k5",
    "type": "quiz",
    "task": "Warum muss bei FizzBuzz der Fall „durch 3 <b>und</b> durch 5 teilbar“ <b>zuerst</b> geprüft werden?",
    "options": [
     "Weil Python sonst einen Fehler wirft",
     "Weil sonst schon die Bedingung „durch 3 teilbar“ greift und elif/else den Rest überspringt – FizzBuzz käme nie",
     "Weil 15 eine Primzahl ist",
     "Muss man nicht, die Reihenfolge ist egal"
    ],
    "correct": 1,
    "explain": "Bei if/elif wird nur der erste zutreffende Zweig ausgeführt. 15 ist durch 3 teilbar → „Fizz“, wenn dieser Fall zuerst kommt."
   },
   {
    "id": "py-d3",
    "type": "py",
    "task": "<span class=\"tag\">Aufgabe 02 B</span> <code>caesar(text, shift)</code>: verschiebt jeden <b>Kleinbuchstaben</b> a–z um <code>shift</code> Positionen im Alphabet (aus <code>abz</code> wird bei 1 <code>bca</code>); alle anderen Zeichen bleiben unverändert.",
    "starter": "def caesar(text, shift):\n    ",
    "hint": "ord(\"a\") = 97. Neuer Buchstabe: chr((ord(ch) - ord(\"a\") + shift) % 26 + ord(\"a\"))",
    "solution": "def caesar(text, shift):\n    result = \"\"\n    for ch in text:\n        if \"a\" <= ch <= \"z\":\n            result += chr((ord(ch) - ord(\"a\") + shift) % 26 + ord(\"a\"))\n        else:\n            result += ch\n    return result",
    "tests": "assert caesar(\"abz\", 1) == \"bca\", f\"caesar('abz', 1) sollte 'bca' sein, ist {caesar('abz', 1)!r}.\"\nassert caesar(\"hallo welt!\", 3) == \"kdoor zhow!\", \"Leerzeichen/Satzzeichen müssen bleiben.\"\nassert caesar(caesar(\"python\", 7), -7) == \"python\", \"Verschlüsseln und mit -shift entschlüsseln muss das Original ergeben.\"\nassert caesar(\"abc\", 26) == \"abc\", \"Verschiebung um 26 ergibt wieder das Original (% 26!).\""
   },
   {
    "id": "f4",
    "type": "py",
    "task": "<span class=\"tag\">Aufgabe 02 B</span> <code>linear_search(values, target)</code>: liefert den Index des ersten Treffers oder <code>-1</code> – <b>und</b> zusätzlich die Anzahl der benötigten Vergleiche: <code>return index, comparisons</code>.",
    "starter": "def linear_search(values, target):\n    ",
    "hint": "comparisons = 0; for i, v in enumerate(values): comparisons += 1; if v == target: return i, comparisons … am Ende return -1, comparisons",
    "solution": "def linear_search(values, target):\n    comparisons = 0\n    for i, value in enumerate(values):\n        comparisons += 1\n        if value == target:\n            return i, comparisons\n    return -1, comparisons",
    "tests": "assert linear_search([5, 3, 8, 3], 3) == (1, 2), f\"linear_search([5,3,8,3], 3) sollte (1, 2) sein, ist {linear_search([5,3,8,3], 3)}.\"\nassert linear_search([5, 3, 8], 9) == (-1, 3), \"Kein Treffer: (-1, Anzahl Vergleiche = Länge der Liste).\"\nassert linear_search([], 1) == (-1, 0), \"Leere Liste: (-1, 0).\"\nidx, cmp = linear_search([7], 7)\nassert (idx, cmp) == (0, 1), \"linear_search([7], 7) sollte (0, 1) sein.\""
   },
   {
    "id": "l2",
    "type": "py",
    "task": "<span class=\"tag\">Aufgabe 02 C</span> <code>squares(n)</code>: liefert die Liste der Quadratzahlen von 1 bis n als <b>List Comprehension</b>. <code>squares(4)</code> → <code>[1, 4, 9, 16]</code>.",
    "starter": "def squares(n):\n    return ",
    "hint": "[x * x for x in range(1, n + 1)]",
    "solution": "def squares(n):\n    return [x * x for x in range(1, n + 1)]",
    "tests": "assert squares(4) == [1, 4, 9, 16], f\"squares(4) sollte [1, 4, 9, 16] sein, ist {squares(4)}.\"\nassert squares(0) == [], \"squares(0) sollte [] sein.\"\nassert any(isinstance(n, __import__(\"ast\").ListComp) for n in __import__(\"ast\").walk(_func(\"squares\"))), \"Bitte als List Comprehension [ … for … ] lösen.\""
   },
   {
    "id": "l6",
    "type": "quiz",
    "task": "Wie liest sich <code>[x * x for x in range(1, 21)]</code> als Satz?",
    "options": [
     "„x mal x, 21-mal“",
     "„Die Liste aller x·x für x von 1 bis 20“",
     "„Die Liste aller x von 1 bis 21“",
     "„x·x, falls x kleiner 21“"
    ],
    "correct": 1,
    "explain": "range(1, 21) läuft von 1 bis 20 (Obergrenze nicht enthalten)."
   },
   {
    "id": "py-d2",
    "type": "py",
    "task": "<span class=\"tag\">Aufgabe 02 C</span> <code>word_frequency(text)</code>: zählt mit einem Dictionary, wie oft jedes Wort vorkommt (<code>text.split()</code>). <code>word_frequency(\"eins zwei zwei\")</code> → <code>{\"eins\": 1, \"zwei\": 2}</code>.",
    "starter": "def word_frequency(text):\n    ",
    "hint": "counts = {} … for word in text.split(): counts[word] = counts.get(word, 0) + 1",
    "solution": "def word_frequency(text):\n    counts = {}\n    for word in text.split():\n        counts[word] = counts.get(word, 0) + 1\n    return counts",
    "tests": "assert dict(word_frequency(\"eins zwei zwei\")) == {\"eins\": 1, \"zwei\": 2}, f\"Ergebnis: {word_frequency('eins zwei zwei')}\"\nassert dict(word_frequency(\"\")) == {}, \"Leerer Text → leeres Dictionary.\"\nassert dict(word_frequency(\"a b a c a\")) == {\"a\": 3, \"b\": 1, \"c\": 1}, \"word_frequency('a b a c a') falsch.\""
   },
   {
    "id": "a02a",
    "type": "py",
    "task": "<span class=\"tag\">Teil D – Experte</span> <code>crack_caesar(ciphertext)</code>: probiert alle 26 Verschiebungen durch und liefert den Kandidaten, in dem <b>e</b> der häufigste Buchstabe ist. (<code>caesar</code> musst du selbst mit definieren.)",
    "starter": "def caesar(text, shift):\n    result = \"\"\n    for ch in text:\n        if \"a\" <= ch <= \"z\":\n            result += chr((ord(ch) - ord(\"a\") + shift) % 26 + ord(\"a\"))\n        else:\n            result += ch\n    return result\n\ndef crack_caesar(ciphertext):\n    ",
    "hint": "for shift in range(26): candidate = caesar(ciphertext, -shift); häufigster Buchstabe: max(letters, key=candidate.count) – wenn \"e\", return candidate.",
    "solution": "def caesar(text, shift):\n    result = \"\"\n    for ch in text:\n        if \"a\" <= ch <= \"z\":\n            result += chr((ord(ch) - ord(\"a\") + shift) % 26 + ord(\"a\"))\n        else:\n            result += ch\n    return result\n\ndef crack_caesar(ciphertext):\n    for shift in range(26):\n        candidate = caesar(ciphertext, -shift)\n        letters = [ch for ch in candidate if \"a\" <= ch <= \"z\"]\n        if letters and max(letters, key=letters.count) == \"e\":\n            return candidate\n    return None",
    "tests": "plain = \"heute lernen wir in der schule eine neue sprache und programmieren viele kleine beispiele\"\nfor s in [3, 11, 25]:\n    assert crack_caesar(caesar(plain, s)) == plain, f\"Mit Verschiebung {s} wurde der Text nicht geknackt.\""
   }
  ]
 },
 {
  "id": "auf-03",
  "group": "Aufgaben",
  "num": "03",
  "title": "Aufgabe 03 – Rekursion I",
  "short": "03 Rekursion I",
  "source": "sew.htl-villach.at · Jahr 3 · Übungen – Aufgabe 03",
  "theory": "\n<h3>Worum geht es?</h3>\n<p>Deine ersten rekursiven Funktionen schreiben, Aufrufketten <b>von Hand</b> und <b>am Debugger</b> verfolgen, und messen, was naive Rekursion kostet. Das Fundament für Aufgabe 04 und 05. Theorie dazu: <a href=\"#rek-grund\">2.1</a>, <a href=\"#rek-callstack\">2.2</a>, <a href=\"#rek-fakultaet\">2.3</a>, <a href=\"#rek-fibonacci\">2.4</a>.</p>\n<table class=\"ops\">\n<tr><td><b>Teil A – Aufwärmen</b></td><td><code>countdown(n)</code> abtippen, Basisfall/Schritt kommentieren; <code>print</code> hinter den Selbstaufruf verschieben und erklären; <code>sum_up_to(n)</code> rekursiv</td></tr>\n<tr><td><b>Teil B – Fakultät</b></td><td><code>factorial(n)</code> rekursiv; <code>factorial(4)</code> schriftlich expandieren (Abgabe!); im Debugger den Call Stack beobachten (wie viele Einträge maximal? welches n?)</td></tr>\n<tr><td><b>Teil C – Stack sichtbar machen</b></td><td><code>factorial</code> mit Parameter <code>depth=0</code> und eingerückten Ausgaben; <code>factorial(-1)</code> → RecursionError erklären; negative Eingaben absichern</td></tr>\n<tr><td><b>Teil D – Experte</b></td><td><code>fib(n)</code> mit Aufrufzähler (n = 10, 20, 30), <code>fib_memo(n)</code>, Laufzeiten mit <code>time.perf_counter()</code> vergleichen, Fazit formulieren</td></tr>\n</table>\n<h3>Teil C: so soll die Ausgabe aussehen</h3>\n<pre class=\"syntax\">-> factorial(3)\n  -> factorial(2)\n    -> factorial(1)\n      -> factorial(0)\n      <- returns 1\n    <- returns 1\n  <- returns 2\n<- returns 6</pre>\n<p>Jeder Selbstaufruf übergibt <code>depth + 1</code>, jede Ausgabe wird mit <code>\"  \" * depth</code> eingerückt – damit wird der Call Stack als Text sichtbar.</p>\n<h3>Wissenscheck</h3>\n<ul>\n<li>Welche zwei Bestandteile braucht jede rekursive Funktion, was garantiert jeder?</li>\n<li>Warum gibt es bei <code>factorial(4)</code> vier verschiedene <code>n</code> gleichzeitig?</li>\n<li>Zwei mögliche Ursachen für <code>RecursionError</code>?</li>\n<li>Warum zählt countdown mit <code>print</code> vor dem Selbstaufruf rückwärts, danach vorwärts?</li>\n<li><code>fib(30)</code>: über eine Million Aufrufe, <code>fib_memo(30)</code>: unter 60 – wo ist die Ersparnis?</li>\n</ul>\n",
  "exercises": [
   {
    "id": "rg3",
    "type": "py",
    "task": "<span class=\"tag\">Aufgabe 03 A</span> Schreib <code>countdown(n)</code> <b>rekursiv</b>: gibt n, n-1, …, 1 aus und dann <code>Liftoff!</code>. Markiere Basisfall und Rekursionsschritt mit Kommentaren.",
    "starter": "def countdown(n):\n    ",
    "hint": "if n == 0: print(\"Liftoff!\") und return – sonst print(n) und countdown(n - 1)",
    "solution": "def countdown(n):\n    if n == 0:              # base case\n        print(\"Liftoff!\")\n        return\n    print(n)\n    countdown(n - 1)        # recursive step",
    "tests": "_recursive(\"countdown\")\n_noloop(\"countdown\")\nout = _capture(countdown, 5).split()\nassert out == [\"5\", \"4\", \"3\", \"2\", \"1\", \"Liftoff!\"], f\"countdown(5) gibt {out} aus – erwartet 5 4 3 2 1 Liftoff!\"\nassert _capture(countdown, 0).split() == [\"Liftoff!\"], \"countdown(0) soll nur Liftoff! ausgeben.\""
   },
   {
    "id": "rg4",
    "type": "py",
    "task": "<span class=\"tag\">Aufgabe 03 A</span> <code>sum_up_to(n)</code> diesmal <b>rekursiv</b> (ohne Schleife): Summe 1 bis n. Kontrollwert: <code>sum_up_to(100)</code> = 5050.",
    "starter": "def sum_up_to(n):\n    ",
    "hint": "Basisfall: n == 0 → 0. Rekursionsschritt: n + sum_up_to(n - 1)",
    "solution": "def sum_up_to(n):\n    if n == 0:                       # base case\n        return 0\n    return n + sum_up_to(n - 1)      # recursive step",
    "tests": "_recursive(\"sum_up_to\")\n_noloop(\"sum_up_to\")\nassert sum_up_to(100) == 5050, f\"sum_up_to(100) sollte 5050 sein, ist {sum_up_to(100)}.\"\nassert sum_up_to(0) == 0 and sum_up_to(1) == 1, \"Grenzfälle 0 und 1 prüfen.\""
   },
   {
    "id": "rk1",
    "type": "py",
    "task": "<span class=\"tag\">Aufgabe 03 B</span> <code>factorial(n)</code> rekursiv implementieren.",
    "starter": "def factorial(n):\n    ",
    "hint": "Basisfall n == 0 → 1, sonst n * factorial(n - 1)",
    "solution": "def factorial(n):\n    if n == 0:\n        return 1\n    return n * factorial(n - 1)",
    "tests": "_recursive(\"factorial\")\n_noloop(\"factorial\")\nfor n, e in [(0, 1), (1, 1), (4, 24), (5, 120), (10, 3628800)]:\n    assert factorial(n) == e, f\"factorial({n}) sollte {e} sein, ist {factorial(n)}.\""
   },
   {
    "id": "rk3",
    "type": "py",
    "task": "<span class=\"tag\">Aufgabe 03 C</span> Sichere <code>factorial(n)</code> ab: Für <b>negative</b> Eingaben gibt sie <code>None</code> zurück und druckt eine verständliche Meldung, statt mit <code>RecursionError</code> abzustürzen.",
    "starter": "def factorial(n):\n    ",
    "hint": "Zuerst if n < 0: print(...) und return None – dann wie gehabt.",
    "solution": "def factorial(n):\n    if n < 0:\n        print(\"Factorial is not defined for negative numbers.\")\n        return None\n    if n == 0:\n        return 1\n    return n * factorial(n - 1)",
    "tests": "_recursive(\"factorial\")\nassert factorial(5) == 120, \"factorial(5) sollte 120 sein.\"\nmsg = _capture(factorial, -1)\nassert factorial(-1) is None, \"factorial(-1) soll None liefern.\"\nassert msg.strip() != \"\", \"Bei negativer Eingabe soll eine Meldung ausgegeben werden.\""
   },
   {
    "id": "a03a",
    "type": "py",
    "task": "<span class=\"tag\">Teil C</span> <code>factorial(n, depth=0)</code>: berechnet die Fakultät rekursiv und gibt dabei den Ablauf aus – beim Abstieg <code>-&gt; factorial(n)</code>, beim Aufstieg <code>&lt;- returns ergebnis</code>, jeweils mit <code>\"  \" * depth</code> eingerückt (siehe Beispiel in der Theorie).",
    "starter": "def factorial(n, depth=0):\n    indent = \"  \" * depth\n    print(f\"{indent}-> factorial({n})\")\n    ",
    "hint": "Basisfall: result = 1. Sonst result = n * factorial(n - 1, depth + 1). Danach print(f\"{indent}<- returns {result}\") und return result.",
    "solution": "def factorial(n, depth=0):\n    indent = \"  \" * depth\n    print(f\"{indent}-> factorial({n})\")\n    if n == 0:\n        result = 1\n    else:\n        result = n * factorial(n - 1, depth + 1)\n    print(f\"{indent}<- returns {result}\")\n    return result\n\nfactorial(3)",
    "tests": "_recursive(\"factorial\")\nout = _capture(factorial, 3).rstrip(\"\\n\").split(\"\\n\")\nexp = [\"-> factorial(3)\", \"  -> factorial(2)\", \"    -> factorial(1)\", \"      -> factorial(0)\", \"      <- returns 1\", \"    <- returns 1\", \"  <- returns 2\", \"<- returns 6\"]\nassert out == exp, \"Ausgabe von factorial(3):\\n\" + \"\\n\".join(out)\nassert factorial.__defaults__ == (0,), \"depth soll den Standardwert 0 haben.\""
   },
   {
    "id": "rk5",
    "type": "py",
    "task": "<span class=\"tag\">Aufgabe 03 D</span> <code>fib(n)</code> rekursiv nach der Definition (<code>fib(0) = 0</code>, <code>fib(1) = 1</code>).",
    "starter": "def fib(n):\n    ",
    "hint": "Zwei Basisfälle (0 und 1), dann return fib(n - 1) + fib(n - 2)",
    "solution": "def fib(n):\n    if n == 0:\n        return 0\n    if n == 1:\n        return 1\n    return fib(n - 1) + fib(n - 2)",
    "tests": "_recursive(\"fib\")\n_noloop(\"fib\")\nassert [fib(i) for i in range(10)] == [0, 1, 1, 2, 3, 5, 8, 13, 21, 34], f\"fib(0..9) = {[fib(i) for i in range(10)]}\""
   },
   {
    "id": "rk7",
    "type": "py",
    "task": "<span class=\"tag\">Aufgabe 03 D</span> <code>fib_memo(n)</code>: Fibonacci <b>rekursiv mit Memoisierung</b> (Dictionary als Gedächtnis). Der Test ruft <code>fib_memo(300)</code> auf – ohne Gedächtnis würde das ewig dauern.",
    "starter": "def fib_memo(n, known={}):\n    ",
    "hint": "if n in known: return known[n] … if n <= 1: return n … known[n] = fib_memo(n - 1) + fib_memo(n - 2); return known[n]",
    "solution": "def fib_memo(n, known={}):\n    if n in known:\n        return known[n]\n    if n <= 1:\n        return n\n    known[n] = fib_memo(n - 1) + fib_memo(n - 2)\n    return known[n]",
    "tests": "_recursive(\"fib_memo\")\nassert [fib_memo(i) for i in range(10)] == [0, 1, 1, 2, 3, 5, 8, 13, 21, 34], \"Die ersten 10 Werte stimmen nicht.\"\nassert fib_memo(300) == 222232244629420445529739893461909967206666939096499764990979600, \"fib_memo(300) stimmt nicht.\""
   }
  ]
 },
 {
  "id": "auf-04",
  "group": "Aufgaben",
  "num": "04",
  "title": "Aufgabe 04 – Rekursion II",
  "short": "04 Rekursion II",
  "source": "sew.htl-villach.at · Jahr 3 · Übungen – Aufgabe 04",
  "theory": "\n<h3>Worum geht es?</h3>\n<p>Rekursion bei <b>verschachtelten Strukturen</b>: beliebig tief verschachtelte Listen, echte Verzeichnisbäume mit <code>pathlib</code>, und die Türme von Hanoi. Am Ende kannst du die <b>Anwendungsgebiete</b> der Rekursion benennen und belegen (Lehrplan-Kompetenz). Theorie: <a href=\"#rek-strukturen\">2.5</a>, <a href=\"#rek-grenzen\">2.7</a>, <a href=\"#rek-hanoi\">2.8</a>.</p>\n<table class=\"ops\">\n<tr><td><b>Teil A – Lesen & Verstehen</b></td><td><code>total_duration([1, [2, 3], [4, [5]]])</code> ohne Ausführen bestimmen; wo steckt der Basisfall?; <code>count_numbers(entries)</code></td></tr>\n<tr><td><b>Teil B – Verschachtelte Listen</b></td><td><code>max_depth(entries)</code>, <code>deep_max(entries)</code> – je mit flacher und ≥ 3-fach verschachtelter Testliste; warum ist eine einfache Schleife hier unvorteilhaft?</td></tr>\n<tr><td><b>Teil C – Verzeichnisbaum</b></td><td>eigener Übungsordner; <code>show_tree(folder, depth=0)</code>, <code>total_size(folder)</code>, <code>find_files(folder, extension)</code></td></tr>\n<tr><td><b>Teil D – Experte: Hanoi</b></td><td>Zerlegung in zwei Sätzen formulieren, <code>hanoi()</code> implementieren, Züge für n = 3, 5, 10 zählen → Formel 2ⁿ − 1 herleiten, 64 Scheiben in Jahren ausrechnen, vier Anwendungsgebiete nennen</td></tr>\n</table>\n<p class=\"tip\">💡 Teil C läuft hier auf dem Übungsordner <code>projekt/</code> (Struktur siehe <a href=\"#rek-strukturen\">2.5</a>). Auf deinem Rechner: eigenen Ordner anlegen, <b>nicht</b> an Systemverzeichnissen testen!</p>\n<h3>Teil D: 64 Scheiben in Jahren</h3>\n<div class=\"example\" data-lang=\"py\">moves = 2 ** 64 - 1\nseconds_per_year = 60 * 60 * 24 * 365\nprint(f\"{moves:,} moves\")\nprint(f\"{moves / seconds_per_year:,.0f} years\")</div>\n<h3>Wissenscheck</h3>\n<ul>\n<li>Woran erkennst du, dass eine Datenstruktur rekursive Verarbeitung verlangt?</li>\n<li>Warum braucht <code>show_tree</code> keinen explizit hingeschriebenen Basisfall?</li>\n<li>Was prüft <code>isinstance(entry, list)</code> und warum ist es in <code>total_duration</code> unverzichtbar?</li>\n<li>Hanoi wächst mit 2ⁿ − 1: was passiert, wenn eine Scheibe dazukommt?</li>\n<li>Zwei rekursive Strukturen aus deinem Alltag?</li>\n</ul>\n",
  "exercises": [
   {
    "id": "rs3",
    "type": "py",
    "task": "<span class=\"tag\">Aufgabe 04 A</span> <code>count_numbers(entries)</code>: zählt, wie viele <b>Zahlen</b> die (beliebig verschachtelte) Struktur enthält. <code>[1, [2, 3], [4, [5]]]</code> → 5.",
    "starter": "def count_numbers(entries):\n    ",
    "hint": "Wie total_duration – nur statt total += entry einfach count += 1, und bei Listen count += count_numbers(entry).",
    "solution": "def count_numbers(entries):\n    count = 0\n    for entry in entries:\n        if isinstance(entry, list):\n            count += count_numbers(entry)\n        else:\n            count += 1\n    return count",
    "tests": "_recursive(\"count_numbers\")\nfor s, e in [([1, [2, 3], [4, [5]]], 5), ([], 0), ([[[]]], 0), ([7, 8, 9], 3), ([[1], [[2, [3, [4]]]]], 4)]:\n    assert count_numbers(s) == e, f\"count_numbers({s}) sollte {e} sein, ist {count_numbers(s)}.\""
   },
   {
    "id": "rs4",
    "type": "py",
    "task": "<span class=\"tag\">Aufgabe 04 B</span> <code>max_depth(entries)</code>: maximale Verschachtelungstiefe. <code>[1, [2, [3]]]</code> → 3, <code>[1, 2]</code> → 1, <code>[]</code> → 1.",
    "starter": "def max_depth(entries):\n    ",
    "hint": "deepest = 0; für jede Unterliste: deepest = max(deepest, max_depth(entry)). Ergebnis: 1 + deepest.",
    "solution": "def max_depth(entries):\n    deepest = 0\n    for entry in entries:\n        if isinstance(entry, list):\n            deepest = max(deepest, max_depth(entry))\n    return 1 + deepest",
    "tests": "_recursive(\"max_depth\")\nfor s, e in [([1, [2, [3]]], 3), ([1, 2], 1), ([], 1), ([[], [[[]]]], 4), ([1, [2], [3, [4, [5]]]], 4)]:\n    assert max_depth(s) == e, f\"max_depth({s}) sollte {e} sein, ist {max_depth(s)}.\""
   },
   {
    "id": "rs5",
    "type": "py",
    "task": "<span class=\"tag\">Aufgabe 04 B</span> <code>deep_max(entries)</code>: die größte Zahl der gesamten Struktur. Bei einer Struktur <b>ohne Zahlen</b> (z.&nbsp;B. <code>[]</code> oder <code>[[], []]</code>) → <code>None</code>.",
    "starter": "def deep_max(entries):\n    ",
    "hint": "best = None; für Unterlisten: sub = deep_max(entry), für Zahlen: sub = entry. Wenn sub nicht None und (best is None oder sub > best): best = sub.",
    "solution": "def deep_max(entries):\n    # no numbers at all -> None\n    best = None\n    for entry in entries:\n        value = deep_max(entry) if isinstance(entry, list) else entry\n        if value is not None and (best is None or value > best):\n            best = value\n    return best",
    "tests": "_recursive(\"deep_max\")\nfor s, e in [([1, [9, 3], [4, [5]]], 9), ([[[-7]], -3], -3), ([], None), ([[], []], None), ([2, [[[[100]]]], 50], 100)]:\n    assert deep_max(s) == e, f\"deep_max({s}) sollte {e} sein, ist {deep_max(s)}.\""
   },
   {
    "id": "rs6",
    "type": "py",
    "task": "<span class=\"tag\">Aufgabe 04 C</span> <code>find_files(folder, extension)</code>: liefert eine Liste aller Dateien (als <code>Path</code>) mit der Endung (z.&nbsp;B. <code>\".png\"</code>, Groß-/Kleinschreibung egal) – egal wie tief sie liegen. Getestet wird am Ordner <code>projekt/</code>.",
    "demo": true,
    "starter": "from pathlib import Path\n\ndef find_files(folder, extension):\n    ",
    "hint": "Wie find_images im Skriptum: for entry in Path(folder).iterdir(): if entry.is_dir(): hits += find_files(entry, extension) elif entry.suffix.lower() == extension.lower(): hits.append(entry)",
    "solution": "from pathlib import Path\n\ndef find_files(folder, extension):\n    hits = []\n    for entry in Path(folder).iterdir():\n        if entry.is_dir():\n            hits += find_files(entry, extension)\n        elif entry.suffix.lower() == extension.lower():\n            hits.append(entry)\n    return hits\n\nfor f in find_files(\"projekt\", \".png\"):\n    print(f)",
    "tests": "_recursive(\"find_files\")\nnames = sorted(p.name if hasattr(p, \"name\") else str(p).split(\"/\")[-1] for p in find_files(\"projekt\", \".png\"))\nassert names == [\"home.png\", \"logo.png\", \"old.png\", \"user.PNG\"], f\"Gefunden: {names} – erwartet 4 PNG-Dateien (auch in bilder/icons/alt und user.PNG).\"\nassert len(find_files(\"projekt\", \".py\")) == 2, \"Es gibt 2 .py-Dateien (code/main.py, code/utils/helper.py).\"\nassert find_files(\"projekt/leer\", \".txt\") == [], \"Leerer Ordner → [].\""
   },
   {
    "id": "rs7",
    "type": "py",
    "task": "<span class=\"tag\">Aufgabe 04 C</span> <code>total_size(folder)</code>: Gesamtgröße aller Dateien unterhalb des Ordners in Bytes (<code>entry.stat().st_size</code>).",
    "demo": true,
    "starter": "from pathlib import Path\n\ndef total_size(folder):\n    ",
    "hint": "size = 0; Ordner → size += total_size(entry); Datei → size += entry.stat().st_size",
    "solution": "from pathlib import Path\n\ndef total_size(folder):\n    size = 0\n    for entry in Path(folder).iterdir():\n        if entry.is_dir():\n            size += total_size(entry)\n        else:\n            size += entry.stat().st_size\n    return size\n\nprint(total_size(\"projekt\"))",
    "tests": "_recursive(\"total_size\")\nassert total_size(\"projekt/bilder\") == 530, f\"projekt/bilder sollte 530 Bytes haben, ist {total_size('projekt/bilder')}.\"\nassert total_size(\"projekt\") == 1631, f\"projekt sollte 1631 Bytes haben, ist {total_size('projekt')}.\"\nassert total_size(\"projekt/leer\") == 0, \"Leerer Ordner → 0.\""
   },
   {
    "id": "rs8",
    "type": "py",
    "task": "<span class=\"tag\">Aufgabe 04 C</span> <code>show_tree(folder, depth=0)</code>: gibt den Ordner rekursiv als eingerückten Baum aus – <b>pro Ebene 2 Leerzeichen</b>, Unterordner mit <code>/</code> am Ende, <b>zuerst Unterordner, dann Dateien</b>, jeweils alphabetisch sortiert. Der Ordner selbst wird nicht ausgegeben.",
    "demo": true,
    "starter": "from pathlib import Path\n\ndef show_tree(folder, depth=0):\n    ",
    "note": "Beispiel für projekt/video:<br><code>intro.mp4</code><br><code>notizen.txt</code> – und für bilder/: <code>icons/</code>, darunter eingerückt <code>alt/</code> …",
    "hint": "entries = sorted(Path(folder).iterdir(), key=lambda e: (not e.is_dir(), e.name)). Ordner: print(\"  \" * depth + e.name + \"/\"), dann show_tree(e, depth + 1). Datei: print(\"  \" * depth + e.name)",
    "solution": "from pathlib import Path\n\ndef show_tree(folder, depth=0):\n    entries = sorted(Path(folder).iterdir(), key=lambda e: (not e.is_dir(), e.name))\n    for entry in entries:\n        if entry.is_dir():\n            print(\"  \" * depth + entry.name + \"/\")\n            show_tree(entry, depth + 1)\n        else:\n            print(\"  \" * depth + entry.name)\n\nshow_tree(\"projekt\")",
    "tests": "_recursive(\"show_tree\")\nout = _capture(show_tree, \"projekt/bilder\").rstrip(\"\\n\").split(\"\\n\")\nexp = [\"icons/\", \"  alt/\", \"    old.png\", \"  home.png\", \"  user.PNG\", \"hintergrund.jpg\", \"logo.png\"]\nassert out == exp, \"Ausgabe für projekt/bilder:\\n\" + \"\\n\".join(out) + \"\\n\\nerwartet:\\n\" + \"\\n\".join(exp)"
   },
   {
    "id": "rh4",
    "type": "py",
    "task": "<span class=\"tag\">Aufgabe 04 D</span> Implementiere <code>hanoi(n, source, target, spare)</code> mit Zugausgaben im Format <code>disk 1: A -> C</code> – möglichst ohne nachzuschauen.",
    "starter": "def hanoi(n, source, target, spare):\n    ",
    "hint": "n == 0 → return. Sonst: hanoi(n-1, source, spare, target), print(...), hanoi(n-1, spare, target, source)",
    "solution": "def hanoi(n, source, target, spare):\n    if n == 0:\n        return\n    hanoi(n - 1, source, spare, target)\n    print(f\"disk {n}: {source} -> {target}\")\n    hanoi(n - 1, spare, target, source)",
    "tests": "_recursive(\"hanoi\")\nout = _capture(hanoi, 3, \"A\", \"C\", \"B\").strip().split(\"\\n\")\nexp = [\"disk 1: A -> C\", \"disk 2: A -> B\", \"disk 1: C -> B\", \"disk 3: A -> C\", \"disk 1: B -> A\", \"disk 2: B -> C\", \"disk 1: A -> C\"]\nassert out == exp, \"hanoi(3, 'A', 'C', 'B') gibt aus:\\n\" + \"\\n\".join(out)\nassert len(_capture(hanoi, 5, \"A\", \"C\", \"B\").strip().split(\"\\n\")) == 31, \"Für 5 Scheiben sind es 31 Züge.\""
   },
   {
    "id": "rh5",
    "type": "py",
    "task": "<span class=\"tag\">Aufgabe 04 D</span> <code>hanoi_moves(n)</code>: berechnet die Zugzahl <b>rekursiv aus der Struktur</b> von hanoi (zwei Selbstaufrufe + ein Zug) – ohne Formel. Prüfe danach: Ergebnis = 2ⁿ − 1.",
    "starter": "def hanoi_moves(n):\n    ",
    "hint": "n == 0 → 0. Sonst 2 * hanoi_moves(n - 1) + 1 (oder hanoi_moves(n-1) + 1 + hanoi_moves(n-1)).",
    "solution": "def hanoi_moves(n):\n    if n == 0:\n        return 0\n    return 2 * hanoi_moves(n - 1) + 1",
    "tests": "_recursive(\"hanoi_moves\")\nfor n in [0, 1, 3, 5, 10, 20]:\n    assert hanoi_moves(n) == 2 ** n - 1, f\"hanoi_moves({n}) sollte {2 ** n - 1} sein, ist {hanoi_moves(n)}.\""
   }
  ]
 },
 {
  "id": "auf-05",
  "group": "Aufgaben",
  "num": "05",
  "title": "Aufgabe 05 – Rekursion III",
  "short": "05 Rekursion III",
  "source": "sew.htl-villach.at · Jahr 3 · Übungen – Aufgabe 05",
  "theory": "\n<h3>Worum geht es?</h3>\n<p>Gemischtes Training: viele kleine rekursive Funktionen, bei denen du <b>Basisfall und Rekursionsschritt jedes Mal selbst finden</b> musst – dazu die Umwandlung Schleife ⇄ Rekursion und die Analyse einer fehlerhaften Rekursion. <b>Teile A–C ohne Schleifen</b> (die Prüfung kontrolliert das). Theorie: <a href=\"#rek-vergleich\">2.6</a>, <a href=\"#rek-checkliste\">2.9</a>.</p>\n<table class=\"ops\">\n<tr><td><b>Teil A – Trainingslauf</b></td><td><code>digit_sum(n)</code>, <code>count_char(char, text)</code>, <code>repeat(text, n)</code> ohne <code>*</code> – je mit Kommentar zu Basisfall und Schritt</td></tr>\n<tr><td><b>Teil B – Strings & Potenz</b></td><td><code>reverse(text)</code>, <code>is_palindrome(text)</code>, <code>power(base, exponent)</code> ohne <code>**</code>; einen Aufruf von Hand expandieren</td></tr>\n<tr><td><b>Teil C – Umformen & Fehler</b></td><td><code>list_sum</code> Schleife → Rekursion, <code>digit_sum</code> Rekursion → Schleife, <code>buggy(n)</code> analysieren und reparieren, allgemeine Regel formulieren</td></tr>\n<tr><td><b>Teil D – Experte: alle Möglichkeiten</b></td><td><code>binary_strings(n)</code>, <code>permutations(text)</code>, Formeln für die Anzahl (2ⁿ bzw. n!), warum ist das rekursionstypisch?</td></tr>\n</table>\n<h3>Handexpansion reverse(\"abc\")</h3>\n<pre class=\"syntax\">reverse(\"abc\")\n= reverse(\"bc\") + \"a\"\n= (reverse(\"c\") + \"b\") + \"a\"\n= (\"c\" + \"b\") + \"a\"          ← Basisfall: Länge 1\n= \"cb\" + \"a\"\n= \"cba\"</pre>\n<h3>binary_strings – der Aufrufbaum</h3>\n<pre class=\"syntax tree\">binary_strings(2)\n└── rest = binary_strings(1)\n    └── rest = binary_strings(0)  → [\"\"]          ← Basisfall\n    → [\"0\" + \"\", \"1\" + \"\"] = [\"0\", \"1\"]\n→ [\"0\"+\"0\", \"0\"+\"1\", \"1\"+\"0\", \"1\"+\"1\"] = [\"00\", \"01\", \"10\", \"11\"]</pre>\n<p>Jede Ebene <b>verdoppelt</b> die Anzahl → 2ⁿ Ergebnisse. Bei <code>permutations</code> hat die erste Ebene n Möglichkeiten, die nächste n−1 … → n! Ergebnisse.</p>\n<h3>Wissenscheck</h3>\n<ul>\n<li>Die drei Prüffragen vor dem ersten Start?</li>\n<li>Basisfall von <code>reverse</code> – warum genügt „leerer String“ allein nicht immer?</li>\n<li>Warum stürzt <code>buggy(3)</code> ab, <code>buggy(4)</code> aber nicht?</li>\n<li>„Summiere die Zahlen einer flachen Liste“ – Rekursion oder Schleife?</li>\n<li>Wie viele Permutationen hat ein Wort mit 10 verschiedenen Zeichen?</li>\n</ul>\n",
  "exercises": [
   {
    "id": "rt1",
    "type": "py",
    "task": "<span class=\"tag\">05 A</span> <code>digit_sum(n)</code>: Quersumme rekursiv, ohne Schleife. 4712 → 14.",
    "starter": "def digit_sum(n):\n    ",
    "hint": "Basisfall n == 0 → 0. Schritt: n % 10 + digit_sum(n // 10)",
    "solution": "def digit_sum(n):\n    if n == 0:                          # base case\n        return 0\n    return n % 10 + digit_sum(n // 10)  # last digit + rest",
    "tests": "_recursive(\"digit_sum\")\n_noloop(\"digit_sum\")\nfor n, e in [(4712, 14), (0, 0), (9, 9), (1000, 1), (99999, 45)]:\n    assert digit_sum(n) == e, f\"digit_sum({n}) sollte {e} sein, ist {digit_sum(n)}.\""
   },
   {
    "id": "rt2",
    "type": "py",
    "task": "<span class=\"tag\">05 A</span> <code>count_char(char, text)</code>: wie oft kommt das Zeichen im Text vor? Rekursiv, ohne Schleife und ohne <code>.count()</code>.",
    "starter": "def count_char(char, text):\n    ",
    "hint": "Basisfall text == \"\" → 0. Schritt: (1 if text[0] == char else 0) + count_char(char, text[1:])",
    "solution": "def count_char(char, text):\n    if text == \"\":\n        return 0\n    first = 1 if text[0] == char else 0\n    return first + count_char(char, text[1:])",
    "tests": "_recursive(\"count_char\")\n_noloop(\"count_char\")\nassert \".count(\" not in _src, \"Bitte ohne .count() lösen.\"\nfor c, t, e in [(\"a\", \"banana\", 3), (\"x\", \"banana\", 0), (\"a\", \"\", 0), (\"s\", \"mississippi\", 4)]:\n    assert count_char(c, t) == e, f\"count_char({c!r}, {t!r}) sollte {e} sein.\""
   },
   {
    "id": "rt3",
    "type": "py",
    "task": "<span class=\"tag\">05 A</span> <code>repeat(text, n)</code>: hängt den Text n-mal aneinander – rekursiv, <b>ohne</b> den <code>*</code>-Operator.",
    "starter": "def repeat(text, n):\n    ",
    "hint": "n == 0 → \"\". Sonst text + repeat(text, n - 1)",
    "solution": "def repeat(text, n):\n    if n == 0:\n        return \"\"\n    return text + repeat(text, n - 1)",
    "tests": "_recursive(\"repeat\")\n_noloop(\"repeat\")\n_noop(\"repeat\", \"Mult\")\nfor t, n, e in [(\"ab\", 3, \"ababab\"), (\"x\", 0, \"\"), (\"hi\", 1, \"hi\")]:\n    assert repeat(t, n) == e, f\"repeat({t!r}, {n}) sollte {e!r} sein.\""
   },
   {
    "id": "rt4",
    "type": "py",
    "task": "<span class=\"tag\">05 B</span> <code>reverse(text)</code>: aus <code>\"stack\"</code> wird <code>\"kcats\"</code>. Ansatz: erstes Zeichen ans Ende des umgedrehten Rests.",
    "starter": "def reverse(text):\n    ",
    "hint": "Basisfall len(text) <= 1 → text. Schritt: reverse(text[1:]) + text[0]",
    "solution": "def reverse(text):\n    if len(text) <= 1:\n        return text\n    return reverse(text[1:]) + text[0]",
    "tests": "_recursive(\"reverse\")\n_noloop(\"reverse\")\nassert \"[::-1]\" not in _src, \"Bitte rekursiv statt mit [::-1] lösen.\"\nfor t in [\"stack\", \"\", \"a\", \"ab\", \"python\"]:\n    assert reverse(t) == t[::-1], f\"reverse({t!r}) sollte {t[::-1]!r} sein, ist {reverse(t)!r}.\""
   },
   {
    "id": "rt5",
    "type": "py",
    "task": "<span class=\"tag\">05 B</span> <code>power(base, exponent)</code>: Potenz ohne <code>**</code> – nur Multiplikation und Rekursion (Exponent ≥ 0, ganzzahlig).",
    "starter": "def power(base, exponent):\n    ",
    "hint": "exponent == 0 → 1. Sonst base * power(base, exponent - 1)",
    "solution": "def power(base, exponent):\n    if exponent == 0:\n        return 1\n    return base * power(base, exponent - 1)",
    "tests": "_recursive(\"power\")\n_noloop(\"power\")\n_noop(\"power\", \"Pow\")\nfor b, e in [(2, 10), (3, 0), (5, 1), (-2, 3), (10, 5)]:\n    assert power(b, e) == b ** e, f\"power({b}, {e}) sollte {b ** e} sein, ist {power(b, e)}.\""
   },
   {
    "id": "rt6",
    "type": "output",
    "task": "<span class=\"tag\">05 B</span> Handexpansion: Was gibt der Code aus? (Er zeigt, in welcher Reihenfolge die Teilergebnisse entstehen.)",
    "code": "def reverse(text):\n    if len(text) <= 1:\n        return text\n    result = reverse(text[1:]) + text[0]\n    print(result)\n    return result\n\nreverse(\"abc\")",
    "lines": 2,
    "explain": "reverse(\"abc\") → reverse(\"bc\") → reverse(\"c\") = \"c\" (Basisfall, kein print). Rückweg: \"c\" + \"b\" = \"cb\" wird ausgegeben, dann \"cb\" + \"a\" = \"cba\"."
   },
   {
    "id": "rt7",
    "type": "py",
    "task": "<span class=\"tag\">05 C</span> Forme die Schleifenlösung in eine <b>rekursive</b> Funktion <code>list_sum(values)</code> um (ohne Schleife).",
    "starter": "# Schleifenversion zum Umformen:\n# def list_sum(values):\n#     total = 0\n#     for value in values:\n#         total += value\n#     return total\n\ndef list_sum(values):\n    ",
    "hint": "Leere Liste → 0. Sonst values[0] + list_sum(values[1:])",
    "solution": "def list_sum(values):\n    if not values:\n        return 0\n    return values[0] + list_sum(values[1:])",
    "tests": "_recursive(\"list_sum\")\n_noloop(\"list_sum\")\nfor v in [[3, 4, 5], [], [10], [-1, 1, -1]]:\n    assert list_sum(v) == sum(v), f\"list_sum({v}) sollte {sum(v)} sein.\""
   },
   {
    "id": "rt8",
    "type": "py",
    "task": "<span class=\"tag\">05 C</span> Umgekehrt: Schreib <code>digit_sum_loop(n)</code> – die Quersumme als <b>Schleifenversion</b> (while).",
    "starter": "def digit_sum_loop(n):\n    ",
    "hint": "total = 0; while n > 0: total += n % 10; n //= 10",
    "solution": "def digit_sum_loop(n):\n    total = 0\n    while n > 0:\n        total += n % 10\n        n //= 10\n    return total",
    "tests": "for n, e in [(4712, 14), (0, 0), (99999, 45)]:\n    assert digit_sum_loop(n) == e, f\"digit_sum_loop({n}) sollte {e} sein.\"\nf = _func(\"digit_sum_loop\")\nassert any(isinstance(x, (__import__(\"ast\").While, __import__(\"ast\").For)) for x in __import__(\"ast\").walk(f)), \"Bitte mit einer Schleife lösen.\""
   },
   {
    "id": "rt9",
    "type": "quiz",
    "task": "<code>def buggy(n):<br>&nbsp;&nbsp;if n == 0: return 0<br>&nbsp;&nbsp;return n + buggy(n - 2)</code><br>Warum stürzt <code>buggy(3)</code> ab, <code>buggy(4)</code> aber nicht?",
    "options": [
     "Weil 3 eine Primzahl ist",
     "Bei ungeraden Zahlen springt n über 0 hinweg (3, 1, -1, -3 …) – der Basisfall wird nie erreicht",
     "Weil buggy(4) zu groß ist",
     "buggy(4) stürzt auch ab"
    ],
    "correct": 1,
    "explain": "4 → 2 → 0 trifft den Basisfall. 3 → 1 → -1 → … verfehlt ihn. Regel: Der Rekursionsschritt muss garantieren, dass der Basisfall von jedem Startwert aus erreicht wird."
   },
   {
    "id": "rt10",
    "type": "py",
    "task": "<span class=\"tag\">05 C</span> Repariere <code>buggy(n)</code> so, dass sie für <b>alle</b> n ≥ 0 funktioniert (Summe n + (n−2) + (n−4) + … solange ≥ 1).",
    "starter": "def buggy(n):\n    if n == 0:\n        return 0\n    return n + buggy(n - 2)",
    "hint": "Basisfall auf n <= 0 erweitern (so wird auch -1 abgefangen).",
    "solution": "def buggy(n):\n    if n <= 0:\n        return 0\n    return n + buggy(n - 2)",
    "tests": "_recursive(\"buggy\")\nfor n, e in [(4, 6), (3, 4), (0, 0), (1, 1), (7, 16)]:\n    assert buggy(n) == e, f\"buggy({n}) sollte {e} sein, ist {buggy(n)}.\""
   },
   {
    "id": "rt11",
    "type": "py",
    "task": "<span class=\"tag\">05 D – Experte</span> <code>binary_strings(n)</code>: Liste aller Bitfolgen der Länge n, aufsteigend. <code>binary_strings(2)</code> → <code>[\"00\", \"01\", \"10\", \"11\"]</code>.",
    "starter": "def binary_strings(n):\n    ",
    "hint": "Basisfall n == 0 → [\"\"] (eine leere Folge!). Sonst: rest = binary_strings(n - 1); return [\"0\" + r for r in rest] + [\"1\" + r for r in rest]",
    "solution": "def binary_strings(n):\n    if n == 0:\n        return [\"\"]\n    rest = binary_strings(n - 1)\n    return [\"0\" + r for r in rest] + [\"1\" + r for r in rest]",
    "tests": "_recursive(\"binary_strings\")\nassert binary_strings(2) == [\"00\", \"01\", \"10\", \"11\"], f\"binary_strings(2) = {binary_strings(2)}\"\nassert len(binary_strings(5)) == 32 and binary_strings(3)[5] == \"101\", \"binary_strings(3)/(5) falsch.\"\nassert binary_strings(1) == [\"0\", \"1\"], \"binary_strings(1) sollte ['0', '1'] sein.\""
   },
   {
    "id": "rt12",
    "type": "py",
    "task": "<span class=\"tag\">05 D – Experte</span> <code>permutations(text)</code>: alle Anordnungen der Zeichen (Reihenfolge der Liste egal). <code>permutations(\"abc\")</code> → 6 Strings.",
    "starter": "def permutations(text):\n    ",
    "hint": "Basisfall len(text) <= 1 → [text]. Sonst für jedes i: first = text[i], rest = text[:i] + text[i+1:], für jedes p in permutations(rest): first + p.",
    "solution": "def permutations(text):\n    if len(text) <= 1:\n        return [text]\n    result = []\n    for i in range(len(text)):\n        first = text[i]\n        rest = text[:i] + text[i + 1:]\n        for p in permutations(rest):\n            result.append(first + p)\n    return result",
    "tests": "_recursive(\"permutations\")\nassert sorted(permutations(\"abc\")) == [\"abc\", \"acb\", \"bac\", \"bca\", \"cab\", \"cba\"], f\"permutations('abc') = {sorted(permutations('abc'))}\"\nassert len(permutations(\"abcde\")) == 120, \"Ein Wort mit 5 verschiedenen Zeichen hat 5! = 120 Permutationen.\"\nassert permutations(\"a\") == [\"a\"], \"permutations('a') sollte ['a'] sein.\""
   },
   {
    "id": "rt13",
    "type": "quiz",
    "task": "Wie viele Permutationen hat ein Wort mit <b>10</b> verschiedenen Zeichen?",
    "options": [
     "100",
     "1024 (2¹⁰)",
     "3 628 800 (10!)",
     "45"
    ],
    "correct": 2,
    "explain": "n! Anordnungen → 10! = 3 628 800. Die Laufzeit wächst entsprechend explosiv. binary_strings(n) liefert dagegen 2ⁿ Ergebnisse."
   }
  ]
 },
 {
  "id": "auf-08",
  "group": "Aufgaben",
  "num": "08",
  "title": "Aufgabe 08 – Konto mit Klasse",
  "short": "08 Konto mit Klasse",
  "source": "sew.htl-villach.at · Jahr 3 · Übungen – Aufgabe 08",
  "theory": "\n<h3>Worum geht es?</h3>\n<p>Ein Bankkonto als Python-Klasse – mit allen Bausteinen von Kapitel 4: Konstruktor, Methoden, Kapselung, Properties, <code>__str__</code> und Klassen- vs. Instanzattribute. Das Konto ist bewusst klein; es geht um <b>saubere Handwerkstechnik</b>. Dieselbe Klasse wird später (Exceptions) weiter ausgebaut. Theorie: <a href=\"#kl-objekt\">4.1</a>–<a href=\"#kl-beispiel\">4.6</a>.</p>\n<table class=\"ops\">\n<tr><td><b>Teil A – Grundklasse</b></td><td><code>Account</code> mit <code>owner</code>, <code>balance</code> (Default 0) und <code>deposit(amount)</code> (nur positiv); zwei Konten erzeugen; absichtlich <code>Account.deposit(50)</code> ohne Objekt aufrufen und die Fehlermeldung mit <code>self</code> erklären</td></tr>\n<tr><td><b>Teil B – Kapselung</b></td><td><code>_balance</code> + Property <code>balance</code> ohne Setter; <code>withdraw(amount)</code> nur wenn positiv und gedeckt; Experiment mit <code>_balance</code> und <code>__secret</code>; <code>__str__</code> → <code>account of Ada: 125.50 EUR</code></td></tr>\n<tr><td><b>Teil C – Klassenattribut & Demo</b></td><td><code>account_count</code>; Buchungsliste <code>_transactions</code> + <code>print_statement()</code>; Demo hinter <code>if __name__ == \"__main__\":</code></td></tr>\n<tr><td><b>Teil D – Experte</b></td><td><code>transfer(self, target, amount)</code> „ganz oder gar nicht“; <code>__repr__</code>; <code>__eq__</code> (Inhaber + Stand) und begründete Position, ob Konten überhaupt gleich sein sollten</td></tr>\n</table>\n<h3>if __name__ == \"__main__\":</h3>\n<p>Jede Python-Datei hat die Variable <code>__name__</code>. Wird die Datei <b>direkt gestartet</b> (<code>python account.py</code>), ist sie <code>\"__main__\"</code>. Wird die Datei dagegen <b>importiert</b> (<code>from account import Account</code>), ist <code>__name__</code> der Modulname (<code>\"account\"</code>). Code hinter der Bedingung läuft also <b>nur beim direkten Start</b> – das Demo-Skript stört nicht, wenn andere Dateien die Klasse importieren.</p>\n<div class=\"example\" data-lang=\"py\">print(__name__)\n\nif __name__ == \"__main__\":\n    print(\"started directly – run the demo\")</div>\n<h3>Teil D: „ganz oder gar nicht“</h3>\n<p>Bei einer Überweisung zuerst <b>alles prüfen</b> (Betrag positiv? gedeckt?) und erst dann buchen. So kann kein Zustand entstehen, in dem abgebucht, aber nicht eingezahlt wurde.</p>\n<h3>Wissenscheck</h3>\n<ul>\n<li>Was bedeutet <code>deposit() takes 1 positional argument but 2 were given</code> in Klartext?</li>\n<li>Warum verhindert eine Property ohne Setter das Setzen von außen, obwohl <code>_balance</code> erreichbar bleibt?</li>\n<li>Wann wird <code>__str__</code> verwendet, wann <code>__repr__</code>?</li>\n<li>Warum ist <code>tracks = []</code> im Klassenkörper ein Fehler, <code>interest_rate = 0.02</code> aber in Ordnung?</li>\n<li>Was bewirkt <code>if __name__ == \"__main__\":</code>?</li>\n</ul>\n",
  "exercises": [
   {
    "id": "a08-a",
    "type": "quiz",
    "task": "<span class=\"tag\">Teil A</span> Was passiert bei <code>Account.deposit(50)</code> – also ohne Objekt?",
    "options": [
     "Es wird auf alle Konten 50 eingezahlt",
     "Fehler: 50 wird als self übergeben und der Parameter amount fehlt (missing 1 required positional argument)",
     "Es wird ein neues Konto erzeugt",
     "Nichts"
    ],
    "correct": 1,
    "explain": "Beim Aufruf über die Klasse übergibt Python kein Objekt – man müsste Account.deposit(konto, 50) schreiben."
   },
   {
    "id": "a08-b",
    "type": "py",
    "task": "<span class=\"tag\">Teil C</span> Schreib das komplette <code>Account</code> mit <code>deposit</code>, <code>withdraw</code> (nur positiv und gedeckt), Buchungsliste <code>_transactions</code> und <code>print_statement()</code>, die jede Buchung in einer eigenen Zeile ausgibt (<code>deposit 50</code>, <code>withdraw 20</code>).",
    "starter": "class Account:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self._balance = balance\n        self._transactions = []\n\n    ",
    "hint": "deposit/withdraw hängen f\"deposit {amount}\" bzw. f\"withdraw {amount}\" an – aber nur bei gültigen Buchungen. print_statement: for t in self._transactions: print(t)",
    "solution": "class Account:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self._balance = balance\n        self._transactions = []\n\n    @property\n    def balance(self):\n        return self._balance\n\n    def deposit(self, amount):\n        if amount > 0:\n            self._balance += amount\n            self._transactions.append(f\"deposit {amount}\")\n\n    def withdraw(self, amount):\n        if amount <= 0 or amount > self._balance:\n            print(\"Withdrawal not possible.\")\n            return\n        self._balance -= amount\n        self._transactions.append(f\"withdraw {amount}\")\n\n    def print_statement(self):\n        for t in self._transactions:\n            print(t)",
    "tests": "a = Account(\"Ada\", 100)\na.deposit(50); a.withdraw(20); _capture(a.withdraw, 1000); a.deposit(-5)\nassert a._balance == 130, f\"Stand sollte 130 sein, ist {a._balance}.\"\nassert _capture(a.print_statement).split(\"\\n\")[:2] == [\"deposit 50\", \"withdraw 20\"] and len(_capture(a.print_statement).strip().split(\"\\n\")) == 2, \"Kontoauszug soll genau die zwei gültigen Buchungen zeigen: deposit 50, withdraw 20.\"\nb = Account(\"Bob\")\nassert b._transactions == [], \"Jedes Konto braucht eine eigene Buchungsliste.\""
   },
   {
    "id": "a08-c",
    "type": "py",
    "task": "<span class=\"tag\">Teil D – Experte</span> <code>transfer(self, target, amount)</code>: bucht vom eigenen Konto ab und zahlt beim Zielkonto ein – <b>ganz oder gar nicht</b>. Bei ungültigem Betrag (≤ 0) oder fehlender Deckung bleiben <b>beide</b> Konten unverändert (Meldung ausgeben). Liefert <code>True</code> bei Erfolg, sonst <code>False</code>.",
    "starter": "class Account:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self._balance = balance\n\n    def transfer(self, target, amount):\n        ",
    "hint": "Zuerst prüfen: if amount <= 0 or amount > self._balance: print(...); return False. Erst dann self._balance -= amount; target._balance += amount; return True",
    "solution": "class Account:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self._balance = balance\n\n    def transfer(self, target, amount):\n        # check everything first, then book both sides -> all or nothing\n        if amount <= 0 or amount > self._balance:\n            print(\"Transfer not possible.\")\n            return False\n        self._balance -= amount\n        target._balance += amount\n        return True",
    "tests": "a = Account(\"Ada\", 100); b = Account(\"Bob\", 10)\nassert a.transfer(b, 30) is True, \"Gültige Überweisung soll True liefern.\"\nassert (a._balance, b._balance) == (70, 40), f\"Nach 30 €: Ada 70, Bob 40 – ist {a._balance}, {b._balance}.\"\nfor bad in (500, -5, 0):\n    res = [None]\n    out = _capture(lambda: res.__setitem__(0, a.transfer(b, bad)))\n    assert res[0] is False, f\"transfer({bad}) soll False liefern.\"\n    assert (a._balance, b._balance) == (70, 40), f\"Nach transfer({bad}) dürfen sich die Stände nicht ändern.\""
   },
   {
    "id": "a08-d",
    "type": "quiz",
    "task": "Was bewirkt <code>if __name__ == \"__main__\":</code>?",
    "options": [
     "Der Code darunter läuft immer zuerst",
     "Der Code darunter läuft nur, wenn die Datei direkt gestartet wird – nicht, wenn sie importiert wird",
     "Es definiert die Hauptklasse",
     "Es ist nur ein Kommentar"
    ],
    "correct": 1,
    "explain": "Beim Import ist __name__ der Modulname, nicht \"__main__\"."
   },
   {
    "id": "a08-e",
    "type": "reflect",
    "task": "<span class=\"tag\">Teil D</span> Sollen zwei Konten mit gleichem Inhaber und gleichem Stand als <b>gleich</b> (<code>==</code>) gelten – oder sollten Konten nie gleich sein? Begründe deine Position in 2–3 Sätzen.",
    "sample": "Für „nie gleich“: Ein Konto ist ein eigenes Ding mit eigener Identität (z. B. IBAN) – zwei verschiedene Konten von Ada mit zufällig 100 € sind trotzdem zwei Konten; verwechselt man sie, kann falsch gebucht werden. Für „gleich bei gleichen Werten“: Für Tests und Vergleiche von Zuständen ist es praktisch, wenn == die Inhalte vergleicht. Beides ist vertretbar – entscheidend ist eine begründete Wahl."
   }
  ]
 },
 {
  "id": "probe-lf1",
  "group": "Probetest",
  "num": "LF1",
  "title": "Leistungsfeststellung 1 – Originaltest zum Üben",
  "short": "LF1 Original",
  "source": "SEW – Leistungsfeststellung 1: Python-Einstieg und Rekursion (50 Minuten, keine Hilfsmittel, 26 Punkte)",
  "theory": "\n<p class=\"callout\">📝 Das ist die <b>Leistungsfeststellung 1</b>, die wiederholt wird – Aufgabe für Aufgabe zum Selbermachen. Mach sie zuerst <b>auf Papier in 50 Minuten ohne Hilfsmittel</b>, dann prüf deine Antworten hier unter „Praxis“.</p>\n<h3>Bewertung</h3>\n<table class=\"ops exam-rules\">\n<tr><td><b>Multiple Choice</b></td><td>Pro Frage können <b>keine, eine, mehrere oder alle</b> Antworten richtig sein. Alle 4 Kästchen richtig = volle Punkte, 3 von 4 = halbe Punkte, sonst 0.</td></tr>\n<tr><td><b>Programmieraufgaben</b></td><td>Bewertet wird die <b>Logik</b>. Kleine Syntaxfehler (fehlender Doppelpunkt) kosten nichts – aber die <b>Einrückung gehört zur Logik</b> und zählt!</td></tr>\n<tr><td><b>Teil A (Grundlagen)</b></td><td>Für eine positive Note brauchst du in Teil A <b>mindestens 5,5 von 8 Punkten</b> – egal wie gut der Rest ist!</td></tr>\n<tr><td><b>C2 (Expertenaufgabe)</b></td><td>Für ein Sehr gut müssen in C2 mindestens 4 von 5 Punkten erreicht werden.</td></tr>\n</table>\n<table class=\"ops\">\n<tr><td>Sehr gut</td><td>24 – 26</td><td>C2 mind. 4 Punkte</td></tr>\n<tr><td>Gut</td><td>21 – 23,5</td><td></td></tr>\n<tr><td>Befriedigend</td><td>17,5 – 20,5</td><td></td></tr>\n<tr><td>Genügend</td><td>13 – 17</td><td>Teil A mind. 5,5 Punkte</td></tr>\n<tr><td>Nicht genügend</td><td>unter 13</td><td>oder Teil A unter 5,5</td></tr>\n</table>\n<h3>Aufbau</h3>\n<table class=\"ops\">\n<tr><td><b>Teil A – Grundlagen (8 P)</b></td><td>A1 Multiple Choice (3 × 1 P) · A2 Ausgabe vorhersagen (3 P) · A3 Ablauf einer Rekursion (2 P)</td></tr>\n<tr><td><b>Teil B – Anwenden (9 P)</b></td><td>B1 Durchschnittliche Songdauer (5 P) · B2 Find the Error (4 P)</td></tr>\n<tr><td><b>Teil C – Vertiefung (9 P)</b></td><td>C1 Call Stack und Grenzen (4 P) · C2 Expertenaufgabe: Rekursive Suche (5 P)</td></tr>\n</table>\n<h3>Die typischen Fallen in diesem Test</h3>\n<div class=\"grid2\">\n<div class=\"card\"><b>A1</b> – <code>input()</code> liefert <b>immer</b> einen String → <code>\"7\" * 2</code> ist <code>\"77\"</code>, nicht 14. <code>values[4:]</code> ist die <b>Liste</b> <code>[50]</code>, nicht 50. <code>values[5]</code> ist ein IndexError. Eine Funktion <b>ohne return</b> liefert <code>None</code> – der <code>print</code> darin erscheint trotzdem am Bildschirm.</div>\n<div class=\"card\"><b>A2</b> – <code>range(1, 3)</code> ist 1 und 2 (Obergrenze nicht dabei!). Slicing <code>[1:3]</code> genauso. <code>\"year\" in song</code> ist <b>kein Fehler</b>, sondern <code>False</code> (prüft die Schlüssel).</div>\n<div class=\"card\"><b>B1</b> – Auf einen Dictionary-Wert greift man mit dem <b>Schlüssel</b> zu: <code>song[\"duration\"]</code>, nicht mit <code>song[2]</code>. Leere Liste zuerst abfangen, dann summieren und durch <code>len</code> teilen.</div>\n<div class=\"card\"><b>B2 / C2</b> – Basisfall muss <b>zurückgeben</b> (return), nicht ausgeben; der Selbstaufruf muss das Problem <b>verkleinern</b> (<code>n - 1</code>, <code>values[1:]</code>). C1b: Ursache = Rekursionslimit ~1000, Lösung = <b>iterativ mit Schleife</b>.</div>\n</div>\n",
  "exercises": [
   {
    "id": "lf1-a1a",
    "type": "multi",
    "task": "<span class=\"tag\">A1 · 1</span> Welche Aussagen über <code>input()</code> treffen zu?",
    "options": [
     "<code>input()</code> liefert immer einen String, egal was eingetippt wird.",
     "Tippt man <code>7</code> ein, liefert <code>input() * 2</code> den Wert <code>14</code>.",
     "<code>int(input())</code> wandelt eine eingetippte Ganzzahl in einen <code>int</code> um.",
     "<code>input(\"Zahl: \")</code> zeigt den Text <code>Zahl:</code> an und wartet dann auf eine Eingabe."
    ],
    "correct": [
     0,
     2,
     3
    ],
    "explain": "input() liefert immer str – darum ergibt \"7\" * 2 den String \"77\". Der Text in den Klammern ist die Eingabeaufforderung."
   },
   {
    "id": "lf1-a1b",
    "type": "multi",
    "task": "<span class=\"tag\">A1 · 2</span> Gegeben ist <code>values = [10, 20, 30, 40, 50]</code>. Welche Ausdrücke liefern den Wert <code>50</code>?",
    "options": [
     "<code>values[-1]</code>",
     "<code>values[5]</code>",
     "<code>values[len(values) - 1]</code>",
     "<code>values[4:]</code>"
    ],
    "correct": [
     0,
     2
    ],
    "explain": "[-1] und [len-1] sind das letzte Element. values[5] → IndexError (Indizes 0–4). values[4:] ist ein Slice → die Liste [50], nicht die Zahl 50."
   },
   {
    "id": "lf1-a1c",
    "type": "multi",
    "task": "<span class=\"tag\">A1 · 3</span> Gegeben ist folgender Code. Welche Aussagen treffen zu?",
    "code": "def area(width, height):\n    print(width * height)\n\nresult = area(4, 3)",
    "options": [
     "Am Bildschirm erscheint nichts, weil <code>result</code> nirgends ausgegeben wird.",
     "Die Variable <code>result</code> hat den Wert <code>12</code>.",
     "Die Variable <code>result</code> hat den Wert <code>None</code>.",
     "Das Programm bricht mit einer Fehlermeldung ab, weil <code>return</code> fehlt."
    ],
    "correct": [
     2
    ],
    "explain": "area() gibt 12 aus (print läuft beim Aufruf!), hat aber kein return → result ist None. Ein fehlendes return ist kein Fehler."
   },
   {
    "id": "lf1-a2",
    "type": "output",
    "task": "<span class=\"tag\">A2 · 3 P</span> Was gibt dieses Programm aus? Schreib jede Ausgabezeile.",
    "code": "durations = [240, 45, 180, 320]\nsong = {\"title\": \"Intro\", \"duration\": 45}\n\ntotal = 0\nfor i in range(1, 3):\n    total += durations[i]\nprint(total)\nprint(durations[1:3])\nprint(\"year\" in song)",
    "lines": 3,
    "explain": "range(1, 3) → i = 1, 2 → 45 + 180 = 225. [1:3] → [45, 180]. \"year\" ist kein Schlüssel → False (kein Fehler!)."
   },
   {
    "id": "lf1-a3",
    "type": "output",
    "task": "<span class=\"tag\">A3 · 2 P</span> Was gibt <code>show(3)</code> aus?",
    "code": "def show(n):\n    if n == 0:\n        print(\"start\")\n        return\n    show(n - 1)\n    print(n)\n\nshow(3)",
    "lines": 4,
    "explain": "print steht NACH dem Selbstaufruf → zuerst der Basisfall „start“, dann auf dem Rückweg 1, 2, 3."
   },
   {
    "id": "lf1-b1",
    "type": "py",
    "task": "<span class=\"tag\">B1 · 5 P</span> Eine Playlist ist als Liste von Dictionaries gespeichert. Schreib <code>average_duration(songs)</code>, die die durchschnittliche Dauer aller Songs <b>zurückgibt</b>. Für eine leere Liste gibt sie <code>0</code> zurück.<br><code>average_duration(songs)</code> → <code>130.0</code>, <code>average_duration([])</code> → <code>0</code>",
    "starter": "songs = [\n    {\"title\": \"Intro\", \"duration\": 90},\n    {\"title\": \"Main\", \"duration\": 240},\n    {\"title\": \"Outro\", \"duration\": 60},\n]\n\ndef average_duration(songs):\n    \n\nprint(average_duration(songs))\nprint(average_duration([]))",
    "hint": "if not songs: return 0. Dann total = 0; for song in songs: total += song[\"duration\"]; return total / len(songs). Zugriff auf den Wert mit dem Schlüssel \"duration\"!",
    "solution": "def average_duration(songs):\n    if not songs:\n        return 0\n    total = 0\n    for song in songs:\n        total += song[\"duration\"]\n    return total / len(songs)",
    "tests": "s = [{\"title\": \"Intro\", \"duration\": 90}, {\"title\": \"Main\", \"duration\": 240}, {\"title\": \"Outro\", \"duration\": 60}]\nassert average_duration(s) == 130.0, f\"average_duration(songs) sollte 130.0 sein, ist {average_duration(s)!r}.\"\nassert average_duration([]) == 0, \"Bei leerer Liste soll 0 zurückkommen.\"\nassert average_duration([{\"title\": \"X\", \"duration\": 7}]) == 7, \"Ein Song mit 7 Sekunden → 7.\"\nassert _capture(average_duration, s) == \"\", \"Die Funktion soll den Wert zurückgeben (return), nicht ausgeben.\""
   },
   {
    "id": "lf1-b2",
    "type": "py",
    "task": "<span class=\"tag\">B2 · 4 P</span> <b>Find the Error:</b> Die Funktion soll die Summe 1 + 2 + … + n <b>zurückgeben</b>, etwa <code>add_up(4)</code> → <code>10</code>. Sie enthält <b>genau 2 Fehler</b>. Korrigiere sie. (Im Test: Zeile angeben, Problem beschreiben, korrigierte Zeile hinschreiben.)",
    "starter": "def add_up(n):\n    \"\"\"Return 1 + 2 + ... + n for n >= 1.\"\"\"\n    if n == 1:\n        print(1)\n    return n + add_up(n)",
    "hint": "Zeile 3 (if n == 1) ist richtig – laut Docstring ist n ≥ 1. Schau dir Zeile 4 (gibt der Basisfall etwas zurück?) und Zeile 5 (wird das Problem kleiner?) an.",
    "explain": "<b>Zeile 4:</b> <code>print(1)</code> gibt nur aus, die Funktion läuft weiter → muss <code>return 1</code> sein. <b>Zeile 5:</b> <code>add_up(n)</code> wird nie kleiner → Endlosrekursion → muss <code>add_up(n - 1)</code> sein.",
    "solution": "def add_up(n):\n    \"\"\"Return 1 + 2 + ... + n for n >= 1.\"\"\"\n    if n == 1:\n        return 1\n    return n + add_up(n - 1)",
    "tests": "_recursive(\"add_up\")\nfor n, e in [(4, 10), (1, 1), (10, 55), (100, 5050)]:\n    assert add_up(n) == e, f\"add_up({n}) sollte {e} sein, ist {add_up(n)}.\"\nassert _capture(add_up, 3) == \"\", \"add_up soll nichts ausgeben, nur zurückgeben.\""
   },
   {
    "id": "lf1-c1a",
    "type": "quiz",
    "task": "<span class=\"tag\">C1 a · 2 P</span> Beim Aufruf <code>show(3)</code> (Funktion aus A3) wird irgendwann <code>start</code> ausgegeben. Wie viele Aufrufe von <code>show</code> liegen in diesem Moment <b>gleichzeitig</b> auf dem Call Stack, und welchen Wert hat <code>n</code> in jedem davon?",
    "options": [
     "3 Aufrufe: n = 3, 2, 1",
     "4 Aufrufe: n = 3, 2, 1, 0",
     "5 Aufrufe: n = 3, 2, 1, 0 und „start“",
     "1 Aufruf: n = 0"
    ],
    "correct": 1,
    "explain": "show(3), show(2), show(1) warten; show(0) läuft gerade und gibt „start“ aus. „start“ ist eine Ausgabe, kein Aufruf! Jeder Frame hat sein eigenes n."
   },
   {
    "id": "lf1-c1b",
    "type": "quiz",
    "task": "<span class=\"tag\">C1 b · 2 P</span> Der Aufruf <code>show(5000)</code> bricht mit <code>RecursionError: maximum recursion depth exceeded</code> ab, <b>obwohl die Funktion korrekt ist</b>. Ursache und Lösung?",
    "options": [
     "Der Basisfall fehlt – man muss if n == 0 ergänzen",
     "Jeder wartende Aufruf belegt einen Frame auf dem Call Stack; Python erlaubt nur ca. 1000 Ebenen, 5000 sind zu tief. Lösung: die Funktion iterativ (mit einer Schleife) schreiben",
     "Die Zahl 5000 ist zu groß für einen int",
     "print() ist zu langsam – man muss die Ausgabe weglassen"
    ],
    "correct": 1,
    "explain": "Die Struktur ist wirklich zu tief (Ursache ②). Iterative Umformulierung, z. B. print(\"start\") und dann for i in range(1, n + 1): print(i). sys.setrecursionlimit() behandelt nur das Symptom und riskiert einen Absturz."
   },
   {
    "id": "lf1-c2a",
    "type": "py",
    "task": "<span class=\"tag\">C2 a · 4 P · Experte</span> Schreib <code>find_index(values, target)</code> <b>rekursiv</b>: liefert den Index des <b>ersten</b> Vorkommens von <code>target</code> oder <code>-1</code>. <b>Keine Schleife</b>, kein <code>index()</code>, kein <code>in</code>.<br><code>titles = [\"intro\", \"main\", \"solo\", \"outro\"]</code><br><code>find_index(titles, \"solo\")</code> → 2 · <code>find_index(titles, \"bonus\")</code> → -1 · <code>find_index([], \"intro\")</code> → -1",
    "starter": "def find_index(values, target):\n    ",
    "hint": "Basisfall 1: leere Liste → -1. Basisfall 2: values[0] == target → 0. Sonst: rest = find_index(values[1:], target); wenn rest == -1 → -1, sonst rest + 1 (weil die Liste vorne um 1 kürzer war).",
    "solution": "def find_index(values, target):\n    if values == []:                 # base case: not found\n        return -1\n    if values[0] == target:          # base case: found at the front\n        return 0\n    rest = find_index(values[1:], target)\n    if rest == -1:\n        return -1\n    return rest + 1                  # shift by the removed first element",
    "tests": "_recursive(\"find_index\")\n_noloop(\"find_index\")\nimport ast as _a\nf = _func(\"find_index\")\nassert not any(isinstance(n, _a.Compare) and any(isinstance(o, (_a.In, _a.NotIn)) for o in n.ops) for n in _a.walk(f)), \"Der Operator in ist nicht erlaubt.\"\nassert \".index(\" not in _src, \"Die Methode index() ist nicht erlaubt.\"\nt = [\"intro\", \"main\", \"solo\", \"outro\"]\nassert find_index(t, \"solo\") == 2, f\"find_index(titles, 'solo') sollte 2 sein, ist {find_index(t, 'solo')}.\"\nassert find_index(t, \"bonus\") == -1, \"Nicht gefunden → -1 (Achtung: nicht -1 + 1 + 1 …!)\"\nassert find_index([], \"intro\") == -1, \"Leere Liste → -1.\"\nassert find_index(t, \"intro\") == 0 and find_index(t, \"outro\") == 3, \"Erstes/letztes Element falsch.\"\nassert find_index([\"a\", \"b\", \"a\"], \"a\") == 0, \"Es soll das ERSTE Vorkommen gefunden werden.\""
   },
   {
    "id": "lf1-c2b",
    "type": "quiz",
    "task": "<span class=\"tag\">C2 b · 1 P</span> Welchen Wert liefert die Musterlösung von <code>find_index</code> für <code>find_index(titles, \"bonus\")</code> (4 Elemente), und wie viele Aufrufe von <code>find_index</code> entstehen insgesamt?",
    "options": [
     "-1, 4 Aufrufe",
     "-1, 5 Aufrufe – Listen der Länge 4, 3, 2, 1 und zuletzt die leere Liste (Basisfall)",
     "3, 4 Aufrufe",
     "-1, 1 Aufruf"
    ],
    "correct": 1,
    "explain": "Bei jedem Aufruf wird die Liste um 1 kürzer: 4 → 3 → 2 → 1 → 0 Elemente. Erst die leere Liste ist der Basisfall → -1, das auf dem Rückweg unverändert durchgereicht wird. 5 Aufrufe."
   }
  ]
 },
 {
  "id": "probe-2",
  "group": "Probetest",
  "num": "P2",
  "title": "Probetest 2 – gleiche Struktur, neue Aufgaben",
  "short": "Probetest 2",
  "source": "Selbst erstellt nach dem Muster der Leistungsfeststellung 1 (26 Punkte)",
  "theory": "\n<p class=\"callout\">🔁 Gleicher Aufbau wie die LF1, aber <b>neue Aufgaben</b> – damit du prüfen kannst, ob du den Stoff wirklich kannst und nicht nur die Antworten auswendig weißt. Wieder zuerst <b>auf Papier, 50 Minuten</b>.</p>\n<table class=\"ops\">\n<tr><td><b>Teil A (8 P)</b></td><td>3 × Multiple Choice · Ausgabe vorhersagen · Ablauf einer Rekursion</td></tr>\n<tr><td><b>Teil B (9 P)</b></td><td>Funktion mit Liste von Dictionaries · Find the Error (2 Fehler)</td></tr>\n<tr><td><b>Teil C (9 P)</b></td><td>Call Stack & Grenzen · Expertenaufgabe rekursiv (ohne Schleife)</td></tr>\n</table>\n<h3>Vorgehen bei Rekursions-Aufgaben im Test</h3>\n<ol class=\"steps\">\n  <li><code>Basisfall</code> <span>Wann ist die Antwort sofort klar? (leere Liste, n == 0 …)</span></li>\n  <li><code>Verkleinern</code> <span>values[1:], n - 1, text[1:] – womit rufe ich mich selbst auf?</span></li>\n  <li><code>Zusammensetzen</code> <span>Wie mache ich aus dem Ergebnis des Rests das Gesamtergebnis? (+ 1, + values[0] …)</span></li>\n  <li><code>Durchspielen</code> <span>mit einer Liste aus 2 Elementen und mit der leeren Liste</span></li>\n</ol>\n",
  "exercises": [
   {
    "id": "p2-a1a",
    "type": "multi",
    "task": "<span class=\"tag\">A1 · 1</span> Welche Aussagen treffen zu?",
    "options": [
     "<code>7 / 2</code> ergibt <code>3.5</code>",
     "<code>7 // 2</code> ergibt <code>3.5</code>",
     "<code>7 % 2</code> ergibt <code>1</code>",
     "<code>type(7 / 7)</code> ist <code>int</code>"
    ],
    "correct": [
     0,
     2
    ],
    "explain": "/ liefert immer float – auch 7 / 7 ist 1.0 (float). // ist die Ganzzahldivision (3), % der Rest (1)."
   },
   {
    "id": "p2-a1b",
    "type": "multi",
    "task": "<span class=\"tag\">A1 · 2</span> Gegeben ist <code>name = \"python\"</code>. Welche Ausdrücke liefern <code>\"py\"</code>?",
    "options": [
     "<code>name[0:2]</code>",
     "<code>name[:2]</code>",
     "<code>name[1:3]</code>",
     "<code>name[0] + name[1]</code>"
    ],
    "correct": [
     0,
     1,
     3
    ],
    "explain": "[0:2] und [:2] sind gleich (Index 0 und 1). [1:3] ist \"yt\". name[0] + name[1] = \"p\" + \"y\"."
   },
   {
    "id": "p2-a1c",
    "type": "multi",
    "task": "<span class=\"tag\">A1 · 3</span> Welche Aussagen treffen zu?",
    "code": "def double(x):\n    return x * 2\n\nvalue = double(\"ab\")",
    "options": [
     "<code>value</code> hat den Wert <code>\"abab\"</code>",
     "Das Programm bricht ab, weil man einen String nicht mit 2 multiplizieren kann",
     "Am Bildschirm erscheint <code>abab</code>",
     "<code>double(3)</code> würde <code>6</code> liefern"
    ],
    "correct": [
     0,
     3
    ],
    "explain": "String * 2 wiederholt den Text → \"abab\". Es gibt aber kein print → am Bildschirm erscheint nichts."
   },
   {
    "id": "p2-a2",
    "type": "output",
    "task": "<span class=\"tag\">A2 · 3 P</span> Was gibt dieses Programm aus?",
    "code": "points = [3, 8, 1, 6]\nplayer = {\"name\": \"Ada\", \"level\": 2}\n\ncount = 0\nfor p in points:\n    if p > 2:\n        count += 1\nprint(count)\nprint(points[-2:])\nprint(player.get(\"score\"))",
    "lines": 3,
    "explain": "3, 8 und 6 sind > 2 → 3. [-2:] → die letzten zwei: [1, 6]. .get() liefert None statt eines Fehlers."
   },
   {
    "id": "p2-a3",
    "type": "output",
    "task": "<span class=\"tag\">A3 · 2 P</span> Was gibt <code>tell(3)</code> aus?",
    "code": "def tell(n):\n    if n == 0:\n        print(\"go\")\n        return\n    print(n)\n    tell(n - 1)\n    print(n * 10)\n\ntell(3)",
    "lines": 7,
    "explain": "Abstieg (print VOR dem Aufruf): 3, 2, 1, Basisfall go. Rückweg (NACH dem Aufruf) in umgekehrter Reihenfolge: 10, 20, 30."
   },
   {
    "id": "p2-b1",
    "type": "py",
    "task": "<span class=\"tag\">B1 · 5 P</span> Schreib <code>longest_title(songs)</code>: liefert den <b>Titel</b> des längsten Songs (größte <code>\"duration\"</code>). Bei leerer Liste → <code>None</code>. Bei Gleichstand der erste.",
    "starter": "songs = [\n    {\"title\": \"Intro\", \"duration\": 90},\n    {\"title\": \"Main\", \"duration\": 240},\n    {\"title\": \"Outro\", \"duration\": 60},\n]\n\ndef longest_title(songs):\n    \n\nprint(longest_title(songs))",
    "hint": "if not songs: return None. best = songs[0]; for song in songs: if song[\"duration\"] > best[\"duration\"]: best = song. return best[\"title\"]",
    "solution": "def longest_title(songs):\n    if not songs:\n        return None\n    best = songs[0]\n    for song in songs:\n        if song[\"duration\"] > best[\"duration\"]:\n            best = song\n    return best[\"title\"]",
    "tests": "s = [{\"title\": \"Intro\", \"duration\": 90}, {\"title\": \"Main\", \"duration\": 240}, {\"title\": \"Outro\", \"duration\": 60}]\nassert longest_title(s) == \"Main\", f\"Erwartet 'Main', erhalten {longest_title(s)!r}.\"\nassert longest_title([]) is None, \"Leere Liste → None.\"\nassert longest_title([{\"title\": \"A\", \"duration\": 5}, {\"title\": \"B\", \"duration\": 5}]) == \"A\", \"Bei Gleichstand der erste.\"\nassert longest_title([{\"title\": \"X\", \"duration\": 1}]) == \"X\", \"Ein Song → sein Titel.\""
   },
   {
    "id": "p2-b2",
    "type": "py",
    "task": "<span class=\"tag\">B2 · 4 P</span> <b>Find the Error:</b> Die Funktion soll die Gesamtzahl der Buchstaben aller Wörter <b>zurückgeben</b>: <code>total_length([\"ab\", \"cde\"])</code> → <code>5</code>, <code>total_length([])</code> → <code>0</code>. Genau <b>2 Fehler</b> – finde und korrigiere sie.",
    "starter": "def total_length(words):\n    \"\"\"Return the total number of characters of all words.\"\"\"\n    if words == []:\n        return 1\n    return len(words[0]) + total_length(words)",
    "hint": "Was muss die leere Liste ergeben? Und wird die Liste beim Selbstaufruf kürzer?",
    "explain": "<b>Zeile 4:</b> leere Liste hat 0 Buchstaben → <code>return 0</code>. <b>Zeile 5:</b> <code>total_length(words)</code> wird nie kleiner → <code>total_length(words[1:])</code>.",
    "solution": "def total_length(words):\n    \"\"\"Return the total number of characters of all words.\"\"\"\n    if words == []:\n        return 0\n    return len(words[0]) + total_length(words[1:])",
    "tests": "_recursive(\"total_length\")\nfor w, e in [([\"ab\", \"cde\"], 5), ([], 0), ([\"x\"], 1), ([\"hallo\", \"\", \"welt\"], 9)]:\n    assert total_length(w) == e, f\"total_length({w}) sollte {e} sein, ist {total_length(w)}.\""
   },
   {
    "id": "p2-c1a",
    "type": "quiz",
    "task": "<span class=\"tag\">C1 a · 2 P</span> Beim Aufruf <code>tell(3)</code> (aus A3) wird <code>go</code> ausgegeben. Wie viele Aufrufe von <code>tell</code> liegen <b>in diesem Moment</b> auf dem Call Stack, und welcher davon <b>läuft</b> gerade?",
    "options": [
     "3 Aufrufe, tell(1) läuft",
     "4 Aufrufe (n = 3, 2, 1, 0) – tell(0) läuft, die anderen drei warten",
     "1 Aufruf, tell(0)",
     "7 Aufrufe – einer pro Ausgabezeile"
    ],
    "correct": 1,
    "explain": "tell(3), tell(2), tell(1) stehen jeweils in der Zeile des Selbstaufrufs und warten. Nur der oberste Frame (tell(0)) läuft."
   },
   {
    "id": "p2-c1b",
    "type": "quiz",
    "task": "<span class=\"tag\">C1 b · 2 P</span> Welche Aussage über eine rekursive Funktion, die bei <code>f(3)</code> mit <code>RecursionError</code> abbricht, ist am <b>wahrscheinlichsten</b> richtig?",
    "options": [
     "3 Ebenen sind zu tief für Python",
     "Es ist ein Programmierfehler: Der Basisfall fehlt, ist unerreichbar (z. B. Schritt n - 2 bei ungeradem n) oder das Problem wird nicht kleiner",
     "Man muss sys.setrecursionlimit() erhöhen",
     "RecursionError tritt nur bei Fibonacci auf"
    ],
    "correct": 1,
    "explain": "Bei so kleinen Eingaben kann die Tiefe nicht das Problem sein → Programmierfehler (Ursache ①)."
   },
   {
    "id": "p2-c2a",
    "type": "py",
    "task": "<span class=\"tag\">C2 a · 4 P · Experte</span> Schreib <code>count_occurrences(values, target)</code> <b>rekursiv</b>: wie oft kommt <code>target</code> in der Liste vor? <b>Keine Schleife</b>, kein <code>count()</code>, kein <code>in</code>.<br><code>count_occurrences([\"a\", \"b\", \"a\"], \"a\")</code> → 2 · <code>count_occurrences([], \"a\")</code> → 0",
    "starter": "def count_occurrences(values, target):\n    ",
    "hint": "Leere Liste → 0. Sonst: (1 wenn values[0] == target, sonst 0) + count_occurrences(values[1:], target)",
    "solution": "def count_occurrences(values, target):\n    if values == []:\n        return 0\n    first = 1 if values[0] == target else 0\n    return first + count_occurrences(values[1:], target)",
    "tests": "_recursive(\"count_occurrences\")\n_noloop(\"count_occurrences\")\nassert \".count(\" not in _src, \"count() ist nicht erlaubt.\"\nimport ast as _a\nf = _func(\"count_occurrences\")\nassert not any(isinstance(n, _a.Compare) and any(isinstance(o, (_a.In, _a.NotIn)) for o in n.ops) for n in _a.walk(f)), \"Der Operator in ist nicht erlaubt.\"\nfor v, t, e in [([\"a\", \"b\", \"a\"], \"a\", 2), ([], \"a\", 0), ([1, 1, 1], 1, 3), ([1, 2, 3], 4, 0)]:\n    assert count_occurrences(v, t) == e, f\"count_occurrences({v}, {t!r}) sollte {e} sein.\""
   },
   {
    "id": "p2-c2b",
    "type": "quiz",
    "task": "<span class=\"tag\">C2 b · 1 P</span> Wie viele Aufrufe von <code>count_occurrences</code> entstehen (Musterlösung) für eine Liste mit <b>6</b> Elementen?",
    "options": [
     "6",
     "7 – einer pro Element plus der Aufruf mit der leeren Liste (Basisfall)",
     "1",
     "12"
    ],
    "correct": 1,
    "explain": "Die Liste wird bei jedem Aufruf um 1 kürzer: 6, 5, 4, 3, 2, 1, 0 Elemente → 7 Aufrufe. Hier gibt es kein vorzeitiges Ende, weil jedes Element gezählt werden muss."
   }
  ]
 },
 {
  "id": "sew-wiederholung",
  "group": "Test",
  "num": "✓",
  "title": "Test-Wiederholung SEW",
  "short": "Test-Wiederholung",
  "source": "Lernergebnisse von Kapitel 1 und 2 + Wissenscheck-Fragen der Aufgaben 01–05",
  "theory": "\n<p class=\"callout\">📋 Gemischte Wiederholung: <b>Ausgabe vorhersagen</b> (ohne Ausführen!), Begriffe, Stolperfallen und die Wissenscheck-Fragen aus den Aufgaben.</p>\n<h3>Häufige Fehlerquellen (aus dem Skriptum)</h3>\n<table class=\"ops\">\n<tr><td><code>input()</code> liefert Strings</td><td><code>input() * 2</code> bei „7“ → <code>\"77\"</code>. Umwandeln mit <code>int()</code>!</td></tr>\n<tr><td>Groß-/Kleinschreibung</td><td><code>True</code>, <code>False</code>, <code>None</code> groß – <code>true</code> ist ein <code>NameError</code></td></tr>\n<tr><td>Doppelpunkt fehlt</td><td>nach <code>if</code>, <code>elif</code>, <code>else</code>, <code>for</code>, <code>while</code>, <code>def</code> → <code>SyntaxError</code></td></tr>\n<tr><td>Einrückung uneinheitlich</td><td>Tabs + Leerzeichen gemischt → <code>IndentationError</code> / <code>TabError</code></td></tr>\n<tr><td><code>=</code> vs. <code>==</code></td><td><code>=</code> weist zu, <code>==</code> vergleicht</td></tr>\n<tr><td><code>len</code> ist eine Funktion</td><td><code>len(values)</code>, nicht <code>values.length</code></td></tr>\n</table>\n<h3>Lernergebnisse – das solltest du können</h3>\n<div class=\"grid2\">\n<div class=\"card\"><b>Kapitel 1 – Python</b><ul style=\"margin:6px 0 0;padding-left:18px\">\n<li>Python/VS Code/REPL verwenden</li>\n<li>Grundtypen + Operatoren (<code>/</code> vs <code>//</code>, <code>**</code>, <code>and/or/not</code>)</li>\n<li>if/Schleifen/Funktionen, Einrückung, PEP 8</li>\n<li>Listen, Dicts, Slicing, List Comprehensions</li>\n<li>Tupel vs. Liste, Unpacking, <code>enumerate()</code></li>\n<li><code>input()</code>, <code>print()</code>, f-Strings mit <code>:.2f</code>, <code>:03d</code></li></ul></div>\n<div class=\"card\"><b>Kapitel 2 – Rekursion</b><ul style=\"margin:6px 0 0;padding-left:18px\">\n<li><b>Erklären</b>: Rekursion, Basisfall, Rekursionsschritt, Call Stack</li>\n<li><b>Analysieren</b>: Ablauf von Hand verfolgen, Aufrufbaum skizzieren</li>\n<li><b>Anwenden</b>: Fakultät, Summen, verschachtelte Listen, Verzeichnisse</li>\n<li><b>Beurteilen</b>: Rekursion oder Schleife – begründet</li>\n<li><b>Nennen</b>: Anwendungsgebiete & Grenzen (Bäume, mehrfache Teilprobleme, Rekursionstiefe)</li></ul></div>\n</div>\n<h3>Anwendungsgebiete der Rekursion</h3>\n<p>Dateisysteme (Suche, Virenscanner, Backup) · HTML/JSON/XML-Dokumente · verschachtelte Playlists, Sequenzen, Ebenengruppen · Kombinatorik (alle Möglichkeiten aufzählen) · Fraktale & prozedurale Texturen · mathematische Definitionen (Fakultät, Fibonacci) · Teile-und-herrsche (Türme von Hanoi).</p>\n",
  "exercises": [
   {
    "id": "sw1",
    "type": "output",
    "code": "x = 7\ny = 2\nprint(x / y, x // y, x % y, x ** y)",
    "lines": 1,
    "explain": "3.5 2 1 49 – mehrere Werte in print() werden mit Leerzeichen getrennt."
   },
   {
    "id": "sw2",
    "type": "output",
    "code": "colors = [\"red\", \"green\", \"blue\"]\nfor i, c in enumerate(colors):\n    if i == 1:\n        continue\n    print(f\"{i}:{c}\")",
    "lines": 2,
    "explain": "continue überspringt Index 1 (green)."
   },
   {
    "id": "sw3",
    "type": "output",
    "code": "song = {\"title\": \"Intro\", \"duration\": 90}\nprint(song.get(\"year\"))\nprint(len(song))\nprint(\"title\" in song, 90 in song)",
    "lines": 3,
    "explain": ".get() liefert None statt KeyError. „in“ prüft bei Dictionaries die <b>Schlüssel</b>, nicht die Werte – darum ist 90 in song False."
   },
   {
    "id": "sw4",
    "type": "output",
    "code": "def mystery(n):\n    if n <= 0:\n        return 0\n    return 1 + mystery(n - 3)\n\nprint(mystery(10))",
    "lines": 1,
    "explain": "10 → 7 → 4 → 1 → -2 (Basisfall, 0). Vier Schritte à 1 → 4."
   },
   {
    "id": "sw5",
    "type": "output",
    "code": "def f(n):\n    if n == 0:\n        return\n    print(n)\n    f(n - 1)\n    print(n)\n\nf(2)",
    "lines": 4,
    "explain": "Vor dem Selbstaufruf: 2, 1 (Abstieg). Nach dem Selbstaufruf: 1, 2 (Rückweg)."
   },
   {
    "id": "sw6",
    "type": "quiz",
    "task": "Was liefert <code>\"eins zwei zwei\".split()</code> – und welchen Typ hat das Ergebnis?",
    "options": [
     "'eins zwei zwei' (str)",
     "['eins', 'zwei', 'zwei'] (list)",
     "('eins', 'zwei') (tuple)",
     "{'eins': 1, 'zwei': 2} (dict)"
    ],
    "correct": 1,
    "explain": "split() zerlegt an Leerzeichen und liefert eine <b>Liste</b> von Strings."
   },
   {
    "id": "sw7",
    "type": "quiz",
    "task": "Worin unterscheidet sich ein <b>Tupel</b> von einer <b>Liste</b>?",
    "options": [
     "Tupel können nur Zahlen enthalten",
     "Ein Tupel ist unveränderbar (immutable) – darum auch als Dictionary-Schlüssel erlaubt",
     "Tupel haben keinen Index",
     "Es gibt keinen Unterschied"
    ],
    "correct": 1,
    "explain": "Nach der Erzeugung kann man bei einem Tupel nichts mehr ändern. Einsatz: Werte, die als Einheit zusammengehören."
   },
   {
    "id": "sw8",
    "type": "quiz",
    "task": "Was ist der <b>Call Stack</b>?",
    "options": [
     "Eine Liste aller Variablen eines Programms",
     "Der Stapel der aktiven Funktionsaufrufe – pro Aufruf ein Frame mit eigenen lokalen Variablen",
     "Ein Dictionary für Memoisierung",
     "Die Fehlermeldung bei zu tiefer Rekursion"
    ],
    "correct": 1,
    "explain": "Bei Rekursion liegen mehrere Frames derselben Funktion übereinander – jeder wartet auf die Rückkehr des darüberliegenden."
   },
   {
    "id": "sw9",
    "type": "quiz",
    "task": "Was ist der Basisfall von <code>reverse(text)</code> – und warum genügt „leerer String“ allein nicht immer?",
    "options": [
     "len(text) == 5, weil Wörter meist 5 Zeichen haben",
     "len(text) <= 1: Ein String mit 0 oder 1 Zeichen ist schon umgedreht. Prüft man nur auf \"\" und greift im Schritt auf text[0] zu, muss man sicherstellen, dass auch Länge 1 korrekt behandelt wird",
     "text[0] == text[-1]",
     "Es gibt keinen Basisfall"
    ],
    "correct": 1,
    "explain": "Mit dem Basisfall len(text) <= 1 sind leerer String und einzelne Zeichen sicher abgedeckt."
   },
   {
    "id": "sw10",
    "type": "quiz",
    "task": "Woran erkennst du einer <b>Datenstruktur</b> an, dass sie nach rekursiver Verarbeitung verlangt?",
    "options": [
     "Sie ist sehr groß",
     "Sie enthält Teile, die wieder gleich aufgebaut sind wie das Ganze (z. B. Listen in Listen, Ordner in Ordnern)",
     "Sie enthält Zahlen",
     "Sie ist sortiert"
    ],
    "correct": 1,
    "explain": "Selbstähnlichkeit = rekursive Struktur. Der Code folgt dann der Struktur der Daten."
   },
   {
    "id": "sw11",
    "type": "py",
    "task": "<b>Test-Aufgabe:</b> <code>count_files(folder)</code>: zählt rekursiv alle <b>Dateien</b> (keine Ordner) unterhalb eines Ordners. Getestet am Ordner <code>projekt/</code>.",
    "demo": true,
    "starter": "from pathlib import Path\n\ndef count_files(folder):\n    ",
    "hint": "count = 0; Ordner → count += count_files(entry); Datei → count += 1",
    "solution": "from pathlib import Path\n\ndef count_files(folder):\n    count = 0\n    for entry in Path(folder).iterdir():\n        if entry.is_dir():\n            count += count_files(entry)\n        else:\n            count += 1\n    return count",
    "tests": "_recursive(\"count_files\")\nassert count_files(\"projekt\") == 10, f\"projekt enthält 10 Dateien, gezählt: {count_files('projekt')}.\"\nassert count_files(\"projekt/bilder\") == 5, \"projekt/bilder enthält 5 Dateien.\"\nassert count_files(\"projekt/leer\") == 0, \"Leerer Ordner → 0.\""
   },
   {
    "id": "sw12",
    "type": "py",
    "task": "<b>Test-Aufgabe:</b> <code>flatten(entries)</code>: macht aus einer beliebig verschachtelten Liste eine flache Liste (Reihenfolge bleibt). <code>[1, [2, [3, 4]], 5]</code> → <code>[1, 2, 3, 4, 5]</code>.",
    "starter": "def flatten(entries):\n    ",
    "hint": "result = []; Unterliste → result += flatten(entry); Zahl → result.append(entry)",
    "solution": "def flatten(entries):\n    result = []\n    for entry in entries:\n        if isinstance(entry, list):\n            result += flatten(entry)\n        else:\n            result.append(entry)\n    return result",
    "tests": "_recursive(\"flatten\")\nfor s, e in [([1, [2, [3, 4]], 5], [1, 2, 3, 4, 5]), ([], []), ([[[]]], []), ([[1], [[2]], 3], [1, 2, 3])]:\n    assert flatten(s) == e, f\"flatten({s}) sollte {e} sein, ist {flatten(s)}.\""
   }
  ]
 }
];
