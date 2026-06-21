# Drönarkörkortet – Övningsapp

Gratis webbapp för att öva inför det svenska drönarkörkortet (A1/A3 och A2). Bygger på Transportstyrelsens officiella studiematerial.
OBS: Allt är AI-genererat, jag tar inget ansvar för frågorna och svaren i appen. Bygg med Claude och har baserat allt på de 2 pdf filerna som transportstyrelsen tillhandahåller. 
**Live:** https://longchank.github.io/dronarkorkort-quiz/

---

## Funktioner

- **Flashkort** – Bläddra igenom frågor och vänd kortet för att se svaret
- **Quiz** – Välj bland fyra svarsalternativ och få direkt feedback
- **Tentamen** – Simulera det riktiga provet med tidsgräns och resultatsammanfattning
  - A1/A3: 40 frågor, 30 minuter, godkänt ≥ 30/40
  - A2: 30 frågor, 45 minuter, godkänt ≥ 23/30

**Filter:**
- Nivå: Alla / A1/A3 / Enbart A2
- Kapitel: 12 kapitel (Flygsäkerhet, Luftrumsregler, Drönarsystem, m.fl.)
- Blanda frågor slumpmässigt

---

## Kapitel

| Nr | Ämne | Nivå |
|----|------|------|
| 1 | Flygsäkerhet | A1/A3 |
| 2 | Luftrumsregler | A1/A3 |
| 3 | Drönarsystem | A1/A3 |
| 4 | Metodik för piloter | A1/A3 |
| 5 | Luftfartens begränsningar | A1/A3 |
| 6 | Mänskliga faktorer | A1/A3 |
| 7 | Meteorologi – grundläggande | A1/A3 |
| 8 | Flygprestanda och teknisk kunskap | A1/A3 |
| 9 | Operativa procedurer | A1/A3 |
| 10 | Meteorologi – fördjupning | A2 |
| 11 | Fördjupad teknisk kunskap | A2 |
| 12 | Markrisk | A2 |

---

## Teknik

Ren HTML, CSS och JavaScript – inga beroenden, inget byggsystem. Fungerar direkt i webbläsaren.

```
index.html    – struktur och layout
style.css     – design
questions.js  – alla frågor och svarsalternativ
app.js        – logik för flashkort, quiz och tentamen
imgs/         – figurer kopplade till specifika frågor
```

---

## Kör lokalt

Öppna `index.html` direkt i en webbläsare, eller starta en lokal server:

```bash
npx serve .
# eller
python -m http.server
```

---

## Licens

Frågeunderlaget baseras på Transportstyrelsens offentliga studiematerial för UAS-fjärrpiloter.
