Es werden die Anweisungen unten befolgt und dann wird die jeweilige Funktion aus dem Skript ausgeführt, um formatierte JSON-Dateien zu erhalten.

Die exportierten Dateien landen unter src/app/data/oberstufe

## Kurslisten: Die PDF wird von Mebis geholt und dann mit einem OCR Tool (z.B. https://pdfcandy.com/pdf-ocr.html) in TXT umgewandelt und unter Kurslisten.txt gespeichert. Dabei muss manuell nachgeholfen werden, sodass das Format folgendermaßen aussieht:

Kursname1 (Lehrer1)

1 Teilnehmer 1 Nachname, Vorname

2 Teilnehmer 2 Nachname, Vorname

[Leere Zeile]

Kursname2 (Lehrer2)

1 Teilnehmer 1 Nachname, Vorname

[Leere Zeile]

etc..

## Stundenplan: Die PDF wird von Mebis geholt und dann mit https://www.docsumo.com/free-tools/extract-tables-from-pdf-images in JSON umgewandelt und unter Raw_Stundenplan.json gespeichert. Die JSON Datei wird anschließend auf Fehler korrigiert (nicht wie bei Kurslisten davor)