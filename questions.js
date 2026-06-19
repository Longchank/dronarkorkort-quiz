const questions = [

  // ===== KAPITEL 1: FLYGSÄKERHET =====
  {
    id: 1, category: "chapter1", categoryName: "Flygsäkerhet", level: "A1A3",
    question: "Vad innebär VLOS vid drönardrift?",
    answer: "Visual Line of Sight – fjärrpiloten måste alltid kunna se drönaren med blotta ögat utan hjälpmedel",
    options: [
      "Visual Line of Sight – fjärrpiloten måste alltid kunna se drönaren med blotta ögat",
      "Very Low Operating System – ett automatiserat styrsystem",
      "Vertical Lift-Off Sequence – startproceduren för drönare",
      "Video Link Output Signal – videoöverföringen från drönaren"
    ],
    correctIndex: 0, image: "imgs/a2_figur_15.png"
  },
  {
    id: 2, category: "chapter1", categoryName: "Flygsäkerhet", level: "A1A3",
    question: "Vilka händelser är obligatoriska att rapportera enligt EU:s drönaregler?",
    answer: "Allvarlig personskada, dödsfall eller händelse som involverat bemannat luftfartyg",
    options: [
      "Alla incidenter oavsett allvarlighetsgrad",
      "Allvarlig personskada, dödsfall eller händelse som involverat bemannat luftfartyg",
      "Endast incidenter där drönaren skadats allvarligt",
      "Händelser som kostat mer än 1 000 kr att åtgärda"
    ],
    correctIndex: 1, image: "imgs/a2_figur_21.png"
  },
  {
    id: 3, category: "chapter1", categoryName: "Flygsäkerhet", level: "A1A3",
    question: "Vad innebär BVLOS?",
    answer: "Beyond Visual Line of Sight – flygning bortom synhåll, kräver särskilt tillstånd",
    options: [
      "Basic Visual Line Of Sight – standardflygning med normal sikt",
      "Beyond Visual Line of Sight – flygning bortom synhåll, kräver särskilt tillstånd",
      "Below Vertical Landing Operating System – automatisk landningssekvens",
      "Battery Visual Level Output Sensor – batterinivåindikator"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 4, category: "chapter1", categoryName: "Flygsäkerhet", level: "A1A3",
    question: "Vad är syftet med incidentrapportering vid drönardrift?",
    answer: "Att lära av händelser och förbättra säkerheten – inte att straffa individer",
    options: [
      "Att straffa ansvariga fjärrpiloter ekonomiskt",
      "Att lära av händelser och förbättra säkerheten",
      "Att förbjuda drönardrift i det aktuella området",
      "Att informera media om olyckor"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 5, category: "chapter1", categoryName: "Flygsäkerhet", level: "A1A3",
    question: "Vem är alltid ansvarig för att en drönardrift genomförs säkert?",
    answer: "Fjärrpiloten – oavsett om drönaren flyger autonomt eller manuellt",
    options: [
      "UAS-operatören som äger drönaren",
      "Fjärrpiloten – oavsett om drönaren flyger autonomt eller manuellt",
      "Tillverkaren vid autonom flygning",
      "Transportstyrelsen"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 6, category: "chapter1", categoryName: "Flygsäkerhet", level: "A1A3",
    question: "Vad innebär Remote ID för en drönare?",
    answer: "Drönaren sänder ut identifieringsinformation (ID, position, höjd, hastighet) som kan läsas av behöriga",
    options: [
      "Drönaren är registrerad hos tillverkaren med ett serienummer",
      "Drönaren sänder ut identifieringsinformation som kan läsas av behöriga",
      "Fjärrpiloten bär ett digitalt ID-kort under flygning",
      "Drönaren har ett inbyggt GPS-chip för stöldskydd"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 7, category: "chapter1", categoryName: "Flygsäkerhet", level: "A1A3",
    question: "Vad krävs för att en UAS-operatör ska få bedriva drönardrift i öppna kategorin?",
    answer: "Registrering hos Transportstyrelsen och operatörsnummer märkt på drönaren",
    options: [
      "Tillstånd från kommunen där man flyger",
      "Registrering hos Transportstyrelsen och operatörsnummer märkt på drönaren",
      "Enbart en giltig ansvarsförsäkring",
      "Certifikat från en godkänd flygklubb"
    ],
    correctIndex: 1, image: null
  },

  // ===== KAPITEL 2: LUFTRUMSREGLER =====
  {
    id: 8, category: "chapter2", categoryName: "Luftrumsregler", level: "A1A3",
    question: "Vad är den maximala flyghöjden för drönare i den öppna kategorin?",
    answer: "120 meter ovan mark eller vatten",
    options: ["50 meter", "100 meter", "120 meter ovan mark eller vatten", "150 meter"],
    correctIndex: 2, image: null
  },
  {
    id: 9, category: "chapter2", categoryName: "Luftrumsregler", level: "A1A3",
    question: "Vad är maximal startvikt för drönare i den öppna kategorin?",
    answer: "25 kg",
    options: ["5 kg", "10 kg", "20 kg", "25 kg"],
    correctIndex: 3, image: null
  },
  {
    id: 10, category: "chapter2", categoryName: "Luftrumsregler", level: "A1A3",
    question: "Vilka underkategorier finns i den öppna kategorin?",
    answer: "A1, A2 och A3",
    options: ["A1, A2 och A3", "B1, B2 och B3", "Lätt, Medel och Tung", "Hobby, Kommersiell och Industriell"],
    correctIndex: 0, image: null
  },
  {
    id: 11, category: "chapter2", categoryName: "Luftrumsregler", level: "A1A3",
    question: "Vad är maxvikten för en UAS av klass C1?",
    answer: "Max 899 gram, eller max rörelseenergi vid kollision på 80 joule",
    options: [
      "Max 249 gram",
      "Max 499 gram",
      "Max 899 gram, eller max rörelseenergi vid kollision på 80 joule",
      "Max 4 kg"
    ],
    correctIndex: 2, image: "imgs/a2_figur_4.png"
  },
  {
    id: 12, category: "chapter2", categoryName: "Luftrumsregler", level: "A1A3",
    question: "I vilken underkategori flyger en C2-märkt drönare?",
    answer: "A2 (och även A3)",
    options: ["Bara A1", "A2 (och även A3)", "Bara A3", "Specifik kategori"],
    correctIndex: 1, image: "imgs/a2_figur_5.png"
  },
  {
    id: 13, category: "chapter2", categoryName: "Luftrumsregler", level: "A1A3",
    question: "Vad är maxvikten för en UAS av klass C2?",
    answer: "Max 4 kg",
    options: ["Max 899 gram", "Max 2 kg", "Max 4 kg", "Max 10 kg"],
    correctIndex: 2, image: "imgs/a2_figur_5.png"
  },
  {
    id: 14, category: "chapter2", categoryName: "Luftrumsregler", level: "A1A3",
    question: "I vilken underkategori flyger C3- och C4-märkta drönare?",
    answer: "Enbart A3",
    options: ["A1", "A2", "Enbart A3", "Specifik kategori"],
    correctIndex: 2, image: "imgs/a2_figur_6.png"
  },
  {
    id: 15, category: "chapter2", categoryName: "Luftrumsregler", level: "A1A3",
    question: "Vad är minimiåldern för att flyga drönare som väger mer än 250 gram?",
    answer: "15 år",
    options: ["12 år", "14 år", "15 år", "18 år"],
    correctIndex: 2, image: null
  },
  {
    id: 16, category: "chapter2", categoryName: "Luftrumsregler", level: "A1A3",
    question: "Hur länge är ett drönarkort (A1/A3 eller A2) giltigt?",
    answer: "5 år",
    options: ["1 år", "2 år", "5 år", "10 år"],
    correctIndex: 2, image: null
  },
  {
    id: 17, category: "chapter2", categoryName: "Luftrumsregler", level: "A1A3",
    question: "Vad gäller för C0-klassen – drönare under 250 gram?",
    answer: "Ingen träning eller registrering krävs och ingen åldersgräns gäller",
    options: [
      "Kräver grundutbildning men ingen registrering",
      "Ingen träning eller registrering krävs och ingen åldersgräns gäller",
      "Kräver registrering men ingen utbildning",
      "Samma regler som C1 men lägre avgift"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 18, category: "chapter2", categoryName: "Luftrumsregler", level: "A1A3",
    question: "Vilka radiofrekvensband används normalt för drönarkommunikation?",
    answer: "2,4 GHz och 5,8 GHz",
    options: ["900 MHz och 1,2 GHz", "2,4 GHz och 5,8 GHz", "3,5 GHz och 7 GHz", "10 GHz och 24 GHz"],
    correctIndex: 1, image: "imgs/a2_figur_32.png"
  },

  // ===== KAPITEL 3: DRÖNARSYSTEM =====
  {
    id: 19, category: "chapter3", categoryName: "Drönarsystem", level: "A1A3",
    question: "Vad händer när en drönare aktiverar RTH (Return to Home)?",
    answer: "Drönaren flyger till startpositionen på förprogrammerad minsta höjd",
    options: [
      "Drönaren landar omedelbart på nuvarande position",
      "Drönaren flyger till startpositionen på förprogrammerad minsta höjd",
      "Drönaren hovrar tills piloten tar kontrollen igen",
      "Drönaren slår av motorerna och faller kontrollerat"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 20, category: "chapter3", categoryName: "Drönarsystem", level: "A1A3",
    question: "Vad är ett gimbal?",
    answer: "En mekanisk stabilisering i 2–3 axlar som håller kameran stabil under flygning",
    options: [
      "Drönarens reservbatteri",
      "En mekanisk stabilisering i 2–3 axlar som håller kameran stabil",
      "Antennfästet för radiolänken",
      "Styrelektroniken för motorerna"
    ],
    correctIndex: 1, image: "imgs/a2_figur_36.png"
  },
  {
    id: 21, category: "chapter3", categoryName: "Drönarsystem", level: "A1A3",
    question: "Vad är maxlängden på en förtöjningslina (tether)?",
    answer: "50 meter",
    options: ["20 meter", "30 meter", "50 meter", "100 meter"],
    correctIndex: 2, image: "imgs/a2_figur_8.png"
  },
  {
    id: 22, category: "chapter3", categoryName: "Drönarsystem", level: "A1A3",
    question: "Vilken minsta brottbelastning ska en förtöjningslina ha?",
    answer: "10 gånger drönarens vikt",
    options: [
      "2 gånger drönarens vikt",
      "5 gånger drönarens vikt",
      "10 gånger drönarens vikt",
      "20 gånger drönarens vikt"
    ],
    correctIndex: 2, image: "imgs/a2_figur_8.png"
  },
  {
    id: 23, category: "chapter3", categoryName: "Drönarsystem", level: "A1A3",
    question: "Vad är maxavståndet i Följ-mig-läget (Follow Me)?",
    answer: "50 meter från fjärrpiloten",
    options: ["20 meter", "50 meter från fjärrpiloten", "100 meter", "500 meter"],
    correctIndex: 1, image: null
  },
  {
    id: 24, category: "chapter3", categoryName: "Drönarsystem", level: "A1A3",
    question: "Vad är maxhastigheten i låghastighetläget (low-speed mode) för C2-drönare?",
    answer: "3 m/s (ca 11 km/h)",
    options: ["1 m/s", "3 m/s (ca 11 km/h)", "5 m/s", "10 m/s"],
    correctIndex: 1, image: null
  },
  {
    id: 25, category: "chapter3", categoryName: "Drönarsystem", level: "A1A3",
    question: "Vad är den viktigaste skillnaden mellan en multirotor och en fastvingedrönare?",
    answer: "Multirotorn kan hovra men har kortare flygtid; fastvingedrönaren kräver framåtfart för lyft men har längre räckvidd",
    options: [
      "Fastvingedrönaren kan hovra men inte multirotorn",
      "Multirotorn kan hovra men har kortare flygtid; fastvingedrönaren kräver framåtfart men har längre räckvidd",
      "Det är enbart en viktskillnad utan prestandaskillnad",
      "Multirotorn har alltid GPS men fastvingedrönare saknar det"
    ],
    correctIndex: 1, image: "imgs/a2_figur_30.png"
  },
  {
    id: 26, category: "chapter3", categoryName: "Drönarsystem", level: "A1A3",
    question: "Vad är syftet med geofencing i en drönare?",
    answer: "Att automatiskt hindra drönaren från att flyga in i förbjudna eller reglerade zoner",
    options: [
      "Att skydda drönaren mot stöld via GPS-larm",
      "Att automatiskt hindra drönaren från att flyga in i förbjudna zoner",
      "Att spara GPS-spåret för efteranalys",
      "Att öka räckvidden för radiolänken"
    ],
    correctIndex: 1, image: null
  },

  // ===== KAPITEL 4: METODIK FÖR PILOTER =====
  {
    id: 27, category: "chapter4", categoryName: "Metodik för piloter", level: "A1A3",
    question: "Vad ingår typiskt i en förflygningskontroll?",
    answer: "Kontroll av batteri, propellrar, firmware, sensorer och väder på platsen",
    options: [
      "Bara batterinivå och GPS-signal",
      "Kontroll av batteri, propellrar, firmware, sensorer och väder",
      "Enbart kontroll av att drönaren kan starta",
      "Registrering av platsen i ett system"
    ],
    correctIndex: 1, image: "imgs/a2_figur_26.png"
  },
  {
    id: 28, category: "chapter4", categoryName: "Metodik för piloter", level: "A1A3",
    question: "Vilken regel gäller alltid vid möte med bemannat luftfartyg?",
    answer: "Drönaren ska alltid ge väg för bemannat luftfartyg",
    options: [
      "Bemannat luftfartyg ger alltid väg för drönare",
      "Den som fått tillstånd att flyga i zonen har företräde",
      "Drönaren ska alltid ge väg för bemannat luftfartyg",
      "Man förhandlar via radio med flygtrafiktjänsten"
    ],
    correctIndex: 2, image: "imgs/a2_figur_28.png"
  },
  {
    id: 29, category: "chapter4", categoryName: "Metodik för piloter", level: "A1A3",
    question: "Vad ska en fjärrpilot göra om radiolänken bryts under flygning?",
    answer: "Drönaren utför den förprogrammerade failsafe-proceduren, t.ex. RTH eller hovring",
    options: [
      "Omedelbart ringa nödnumret 112",
      "Drönaren utför den förprogrammerade failsafe-proceduren, t.ex. RTH",
      "Manuellt styra drönaren med reservsändare",
      "Vänta tills länken återetableras utan åtgärd"
    ],
    correctIndex: 1, image: "imgs/a2_figur_22.png"
  },
  {
    id: 30, category: "chapter4", categoryName: "Metodik för piloter", level: "A1A3",
    question: "Vad bör en fjärrpilot göra om vädret försämras under ett pågående uppdrag?",
    answer: "Avbryta uppdraget och landa drönaren säkert",
    options: [
      "Fortsätta om uppdraget är tillräckligt viktigt",
      "Flyga högre för att komma ovan dåligt väder",
      "Avbryta uppdraget och landa drönaren säkert",
      "Aktivera autopilot och låta drönaren hantera det"
    ],
    correctIndex: 2, image: null
  },
  {
    id: 31, category: "chapter4", categoryName: "Metodik för piloter", level: "A1A3",
    question: "Vad innebär 'uppdragsfixering' (get-there-itis) och varför är det farligt?",
    answer: "Att man är så fokuserad på att slutföra uppdraget att man ignorerar varningssignaler och försämrade förhållanden",
    options: [
      "Att man fokuserar för mycket på kameran istället för att styra",
      "Att man är så fixerad vid uppdraget att man ignorerar varningssignaler",
      "Att man glömmer att checka GPS-signalen",
      "Att batteriet laddas för hårt inför uppdraget"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 32, category: "chapter4", categoryName: "Metodik för piloter", level: "A1A3",
    question: "Vad är PDRA?",
    answer: "Pre-defined Risk Assessment – en fördefinierad riskbedömning för standardscenarier i specifik kategori",
    options: [
      "Pilot Distance Risk Assessment – avståndsbedömning från hinder",
      "Pre-defined Risk Assessment – fördefinierad riskbedömning för standardscenarier",
      "Primary Drone Range Allowance – maxräckvidd för drönaren",
      "Propeller Damage Risk Analysis – kontroll av propellerskador"
    ],
    correctIndex: 1, image: null
  },

  // ===== KAPITEL 5: LUFTFARTENS BEGRÄNSNINGAR =====
  {
    id: 33, category: "chapter5", categoryName: "Luftfartens begränsningar", level: "A1A3",
    question: "Vad är ett skyddsobjekt och vad gäller där?",
    answer: "En plats med förhöjd säkerhetsnivå (t.ex. militäranläggning) – flyg, fotografering och tillträde kräver tillstånd",
    options: [
      "En skyddsrumsklass-A-anläggning öppen för allmänheten",
      "En plats med förhöjd säkerhetsnivå – flyg, fotografering och tillträde kräver tillstånd",
      "Ett naturreservat skyddat från buller",
      "Ett område reserverat för nödflyg och SAR-insatser"
    ],
    correctIndex: 1, image: "imgs/a2_figur_1.png"
  },
  {
    id: 34, category: "chapter5", categoryName: "Luftfartens begränsningar", level: "A1A3",
    question: "Vad är ett CTR?",
    answer: "Control Zone – kontrollerat luftrum runt en flygplats där drönare kräver tillstånd för att flyga",
    options: [
      "Civilian Training Regulations – regler för hobbypiloter",
      "Control Zone – kontrollerat luftrum runt flygplats där drönare kräver tillstånd",
      "Certified Traffic Route – en godkänd flygrutt för drönare",
      "Critical Temperature Range – temperaturgräns för drönarbatterier"
    ],
    correctIndex: 1, image: "imgs/a2_figur_2.png"
  },
  {
    id: 35, category: "chapter5", categoryName: "Luftfartens begränsningar", level: "A1A3",
    question: "Vad är ett NOTAM?",
    answer: "Notice to Airmen – ett meddelande om tillfälliga förändringar i luftrummet eller faror för flygare",
    options: [
      "Notice to Airmen – meddelande om tillfälliga förändringar i luftrummet",
      "National Outdoor Training Area Manual",
      "New Obstacle Tracking and Mapping – hinderkartläggning",
      "No Operating Time After Midnight – nattförbud"
    ],
    correctIndex: 0, image: null
  },
  {
    id: 36, category: "chapter5", categoryName: "Luftfartens begränsningar", level: "A1A3",
    question: "Vad är ett AIP SUP?",
    answer: "AIP Supplement – ett tillägg till AIP med information om tillfälliga förändringar som påverkar luftfart",
    options: [
      "AIP Supplement – tillägg om tillfälliga förändringar som påverkar luftfart",
      "Aviation Insurance Policy – obligatorisk försäkring för drönare",
      "Automated Information Package – inbyggt navigationspaket",
      "Aerial Inspection Protocol – standard för drönarinspektion"
    ],
    correctIndex: 0, image: "imgs/a2_figur_3.png"
  },
  {
    id: 37, category: "chapter5", categoryName: "Luftfartens begränsningar", level: "A1A3",
    question: "Hur långt ska en C3- eller C4-drönare hålla sig från bebyggda och rekreationsområden?",
    answer: "Minst 150 meter",
    options: ["30 meter", "50 meter", "100 meter", "Minst 150 meter"],
    correctIndex: 3, image: null
  },
  {
    id: 38, category: "chapter5", categoryName: "Luftfartens begränsningar", level: "A1A3",
    question: "Vad ska en fjärrpilot göra om en nödinsats pågår i området?",
    answer: "Omedelbart hålla drönaren undan och landa – drönare får aldrig störa nödinsatser",
    options: [
      "Det är tillåtet att filma om man håller säkert avstånd",
      "Omedelbart hålla drönaren undan och landa",
      "Polis kan ge tillfälligt tillstånd på plats",
      "Hovra på 120 meters höjd för att inte störa marknivån"
    ],
    correctIndex: 1, image: "imgs/a2_figur_20.png"
  },
  {
    id: 39, category: "chapter5", categoryName: "Luftfartens begränsningar", level: "A1A3",
    question: "Vad gäller för drönardrift i naturreservat?",
    answer: "Det varierar – kontrollera reservatets föreskrifter, många förbjuder drönare utan tillstånd",
    options: [
      "Det är alltid fritt att flyga drönare i naturreservat",
      "Det varierar – kontrollera föreskrifterna, många förbjuder utan tillstånd",
      "Det är alltid förbjudet i alla naturreservat",
      "Tillstånd krävs men beviljas alltid"
    ],
    correctIndex: 1, image: "imgs/a2_figur_38.png"
  },

  // ===== KAPITEL 6: MÄNSKLIGA FAKTORER =====
  {
    id: 40, category: "chapter6", categoryName: "Mänskliga faktorer", level: "A1A3",
    question: "Vad innebär IMSAFE-checklistan?",
    answer: "Illness, Medication, Stress, Alcohol, Fatigue, Emotion – en självkontroll av om piloten är i skick att flyga",
    options: [
      "Instrument, Map, Speed, Altitude, Fuel, Emergency",
      "Illness, Medication, Stress, Alcohol, Fatigue, Emotion – självkontroll av flygduglighet",
      "Inspection, Maintenance, Safety, Avoidance, Flight, Evaluation",
      "Integrated Mission Safety And Flight Evaluation"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 41, category: "chapter6", categoryName: "Mänskliga faktorer", level: "A1A3",
    question: "Vad är situationsmedvetenhet (situational awareness)?",
    answer: "Förmågan att uppfatta, förstå och förutse vad som händer i miljön runt flygningen",
    options: [
      "Att känna till alla lokala regler utantill",
      "Förmågan att uppfatta, förstå och förutse vad som händer i miljön runt flygningen",
      "Att ha god fysisk kondition som pilot",
      "Att alltid hålla ögonkontakt med drönaren"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 42, category: "chapter6", categoryName: "Mänskliga faktorer", level: "A1A3",
    question: "Varför är alkohol förbjudet vid drönardrift?",
    answer: "Alkohol försämrar reaktionstid, omdöme och koordination – det är rättsligt förbjudet att flyga under påverkan",
    options: [
      "Alkohol har ingen dokumenterad effekt på drönarpiloters prestation",
      "Alkohol försämrar reaktionstid, omdöme och koordination – det är förbjudet",
      "Det är bara förbjudet vid kommersiella uppdrag",
      "Det gäller bara flyg nära bemannade luftfartyg"
    ],
    correctIndex: 1, image: "imgs/a2_figur_9.png"
  },
  {
    id: 43, category: "chapter6", categoryName: "Mänskliga faktorer", level: "A1A3",
    question: "Hur kontrolleras alkohol hos en fjärrpilot?",
    answer: "Med alkometer (utandningsprov) – samma testmetod som för fordonsförare",
    options: [
      "Via blodprov på sjukhus",
      "Med alkometer (utandningsprov) – samma testmetod som för fordonsförare",
      "Enbart visuell bedömning av polisen",
      "Via urinprov inom 24 timmar"
    ],
    correctIndex: 1, image: "imgs/a2_figur_10.png"
  },
  {
    id: 44, category: "chapter6", categoryName: "Mänskliga faktorer", level: "A1A3",
    question: "Vilken effekt kan viss medicinering ha på drönarflygning?",
    answer: "Kan ge dåsighet, försämrat omdöme eller koordinationsproblem – kontrollera alltid biverkningarna",
    options: [
      "Medicinering har inga kända effekter på drönarflygning",
      "Kan ge dåsighet, försämrat omdöme eller koordinationsproblem",
      "Bara narkotikaklassad medicin är ett problem",
      "Receptmedicin är alltid godkänt för piloter"
    ],
    correctIndex: 1, image: "imgs/a2_figur_11.png"
  },
  {
    id: 45, category: "chapter6", categoryName: "Mänskliga faktorer", level: "A1A3",
    question: "Varför är trötthet en säkerhetsrisk vid drönardrift?",
    answer: "Trötthet försämrar koncentration, reaktionstid och beslutsförmåga och kan leda till allvarliga misstag",
    options: [
      "Trötthet är bara ett problem under uppdrag längre än 4 timmar",
      "Trötthet försämrar koncentration, reaktionstid och beslutsförmåga",
      "Trötthet är bara ett risk vid nattflygning",
      "Trötthet är inte ett dokumenterat problem för drönarpilot"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 46, category: "chapter6", categoryName: "Mänskliga faktorer", level: "A1A3",
    question: "Vad kan nedsatt syn eller färgblindhet innebära för en fjärrpilot?",
    answer: "Svårigheter att se drönaren på avstånd och tolka signallysen korrekt – påverkar förmågan att hålla VLOS",
    options: [
      "Ingen praktisk påverkan om man använder FPV-glasögon",
      "Svårigheter att se drönaren och tolka signallysen – påverkar VLOS",
      "Bara ett problem vid nattflygning",
      "Färgblindhet är inget hinder om drönaren har autopilot"
    ],
    correctIndex: 1, image: "imgs/a2_figur_13.png"
  },

  // ===== KAPITEL 7: METEOROLOGI – GRUNDLÄGGANDE =====
  {
    id: 47, category: "chapter7", categoryName: "Meteorologi – grundläggande", level: "A1A3",
    question: "Vad är METAR?",
    answer: "Meteorological Aerodrome Report – standardiserat vädermeddelande för flygplatser, uppdaterat varje timme",
    options: [
      "METeorological Annual Report – årsrapport om klimat",
      "Meteorological Aerodrome Report – vädermeddelande uppdaterat varje timme",
      "Maximum Expected Temperature And Rain – temperaturprognos",
      "Monthly Extreme Temperature Atmospheric Reading"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 48, category: "chapter7", categoryName: "Meteorologi – grundläggande", level: "A1A3",
    question: "Vad är TAF?",
    answer: "Terminal Aerodrome Forecast – en flygplatsprognos för de kommande 24–30 timmarna",
    options: [
      "Total Altitude Forecast – höjdprognos",
      "Terminal Aerodrome Forecast – flygplatsprognos för 24–30 timmar",
      "Terrain And Fog – rapport om terräng och dimma",
      "Temperature And Freezing – isbildningsrapport"
    ],
    correctIndex: 1, image: "imgs/a2_figur_46.png"
  },
  {
    id: 49, category: "chapter7", categoryName: "Meteorologi – grundläggande", level: "A1A3",
    question: "Vad är daggpunkten?",
    answer: "Den temperatur vid vilken luften mättas med vattenånga och dimma eller kondens börjar bildas",
    options: [
      "Den temperatur då regnet börjar falla",
      "Den temperatur vid vilken luften mättas och dimma börjar bildas",
      "Den temperatur då snöfall övergår till regn",
      "Minimitemperatur för att flyga drönare"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 50, category: "chapter7", categoryName: "Meteorologi – grundläggande", level: "A1A3",
    question: "Varför är dimma farlig för drönardrift?",
    answer: "Dimma försämrar sikten och gör det svårt eller omöjligt att behålla VLOS",
    options: [
      "Dimma är bara farlig kombinerat med stark vind",
      "Dimma försämrar sikten och gör det svårt att behålla VLOS",
      "Dimma är inget problem för drönare med infraröda sensorer",
      "Dimma är bara farlig för fastvingedrönare"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 51, category: "chapter7", categoryName: "Meteorologi – grundläggande", level: "A1A3",
    question: "Vad innebär mekanisk turbulens?",
    answer: "Turbulens orsakad av luftens rörelse kring hinder som byggnader, träd och kullar",
    options: [
      "Turbulens orsakad av jetströmmar på hög höjd",
      "Turbulens orsakad av luftens rörelse kring hinder som byggnader och träd",
      "Turbulens skapad av drönarens egna propellrar",
      "Turbulens orsakat av uppvärmning av markytan"
    ],
    correctIndex: 1, image: "imgs/a2_figur_45.png"
  },
  {
    id: 52, category: "chapter7", categoryName: "Meteorologi – grundläggande", level: "A1A3",
    question: "Varför är åska (cumulonimbus) farlig för drönardrift?",
    answer: "Åska ger blixt, kraftig turbulens, hagel och starka vindbyar som kan skada eller krascha drönaren",
    options: [
      "Åska påverkar inte elektroniken i moderna drönare",
      "Åska ger blixt, turbulens, hagel och vindbyar som kan krascha drönaren",
      "Åska är bara farlig om drönaren flyger in i molnet",
      "Åska skapar bara problem för radiolänken"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 53, category: "chapter7", categoryName: "Meteorologi – grundläggande", level: "A1A3",
    question: "Hur kan fåglar utgöra en fara vid drönardrift?",
    answer: "Fåglar kan attackera drönaren, särskilt under häckningssäsongen – anpassa flyghöjd och undvik häckningsplatser",
    options: [
      "Fåglar undviker alltid drönare automatiskt",
      "Fåglar kan attackera drönaren – anpassa höjd och undvik häckningsplatser",
      "Drönare ska flyga under fåglarna för att undvika kollision",
      "Fåglar är inget bekymmer utanför häckningssäsongen"
    ],
    correctIndex: 1, image: "imgs/a2_figur_23.png"
  },

  // ===== KAPITEL 8: FLYGPRESTANDA OCH TEKNISK KUNSKAP =====
  {
    id: 54, category: "chapter8", categoryName: "Flygprestanda och teknisk kunskap", level: "A1A3",
    question: "Vad ska en fjärrpilot kontrollera på propellrarna inför flygning?",
    answer: "Sprickor, repor, deformationer och att propellrarna är korrekt monterade",
    options: [
      "Enbart att propellrarna snurrar fritt",
      "Sprickor, repor, deformationer och att de är korrekt monterade",
      "Enbart att propellrarna inte vibrerar vid tomgång",
      "Att propellrarna har rätt märkesfärg"
    ],
    correctIndex: 1, image: "imgs/a2_figur_25.png"
  },
  {
    id: 55, category: "chapter8", categoryName: "Flygprestanda och teknisk kunskap", level: "A1A3",
    question: "Hur påverkar motvind en drönares flygtid?",
    answer: "Motvind ökar batteriförbrukningen och minskar flygtiden – planera returflygning med hänsyn till vinden",
    options: [
      "Motvind har ingen påverkan om GPS är aktiverat",
      "Motvind ökar batteriförbrukningen – planera returflygning med hänsyn till vinden",
      "Sidovind förlänger flygtiden genom att lyfta drönaren",
      "Medvind alltid förkortar flygtiden"
    ],
    correctIndex: 1, image: "imgs/a2_figur_43.png"
  },
  {
    id: 56, category: "chapter8", categoryName: "Flygprestanda och teknisk kunskap", level: "A1A3",
    question: "Vad mäter en magnetometer i en drönare?",
    answer: "Jordens magnetfält, vilket ger drönarens riktning (fungerar som en digital kompass)",
    options: [
      "Jordens magnetfält – ger drönarens riktning som en digital kompass",
      "Luftfuktigheten i omgivningen",
      "Signalstyrkan till fjärrkontrollen",
      "Batteriets elektromagnetiska komponent"
    ],
    correctIndex: 0, image: "imgs/a2_figur_35.png"
  },
  {
    id: 57, category: "chapter8", categoryName: "Flygprestanda och teknisk kunskap", level: "A1A3",
    question: "Vad är en hybriddrönare?",
    answer: "En drönare som kombinerar multirotorteknik (start, hovring, landning) med fastvingeteknik (effektiv framdrift)",
    options: [
      "En drönare som kan köra på mark och flyga",
      "En drönare som kombinerar multirotorteknik med fastvingeteknik",
      "En drönare med både el- och bensinmotor",
      "En drönare med dubbla styrsystem"
    ],
    correctIndex: 1, image: "imgs/a2_figur_31.png"
  },
  {
    id: 58, category: "chapter8", categoryName: "Flygprestanda och teknisk kunskap", level: "A1A3",
    question: "Vad händer med drönarens prestanda vid mycket hög utomhustemperatur?",
    answer: "Luften blir tunnare, vilket minskar propellrarnas lyftkapacitet och ökar batteriförbrukning",
    options: [
      "Prestandan förbättras av den varmare luften",
      "Luften blir tunnare – minskar lyftkapacitet och ökar batteriförbrukning",
      "Temperaturen påverkar inte moderna drönare",
      "Drönaren kompenserar automatiskt utan effekt på batteri"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 59, category: "chapter8", categoryName: "Flygprestanda och teknisk kunskap", level: "A1A3",
    question: "Vad mäter en barometer i en drönare?",
    answer: "Lufttrycket, vilket används för att beräkna och hålla höjden",
    options: [
      "Temperaturen i luften",
      "Lufttrycket, vilket används för att beräkna och hålla höjden",
      "Vindhastighet och vindriktning",
      "Signalstyrkan till GPS-satelliterna"
    ],
    correctIndex: 1, image: null
  },

  // ===== KAPITEL 9: OPERATIVA PROCEDURER =====
  {
    id: 60, category: "chapter9", categoryName: "Operativa procedurer", level: "A1A3",
    question: "Vad krävs för att flyga i underkategori A2 med en C2-märkt drönare?",
    answer: "Giltigt A2-drönarkort från erkänd utbildningsorganisation, utöver A1/A3-drönarkort",
    options: [
      "Enbart A1/A3-drönarkort räcker",
      "Giltigt A2-drönarkort utöver A1/A3-drönarkort",
      "Bara registrering hos Transportstyrelsen",
      "Inget – C2-drönare flyger fritt utan utbildning"
    ],
    correctIndex: 1, image: "imgs/a2_figur_5.png"
  },
  {
    id: 61, category: "chapter9", categoryName: "Operativa procedurer", level: "A1A3",
    question: "Vilket horisontellt avstånd ska en C2-drönare hålla till utomstående personer i normalläge?",
    answer: "Minst 30 meter horisontellt",
    options: ["5 meter", "10 meter", "Minst 30 meter horisontellt", "50 meter"],
    correctIndex: 2, image: null
  },
  {
    id: 62, category: "chapter9", categoryName: "Operativa procedurer", level: "A1A3",
    question: "Vilket horisontellt avstånd gäller för C2-drönare i låghastighetläge (max 3 m/s)?",
    answer: "Minst 5 meter horisontellt från utomstående personer",
    options: ["1 meter", "Minst 5 meter horisontellt", "10 meter", "30 meter"],
    correctIndex: 1, image: null
  },
  {
    id: 63, category: "chapter9", categoryName: "Operativa procedurer", level: "A1A3",
    question: "Vad skiljer underkategori A3 från A1 och A2?",
    answer: "A3 kräver minst 150 meters avstånd från bostads-, industri-, kommersiella och rekreationsområden",
    options: [
      "A3 tillåter flyga högre än 120 meter",
      "A3 kräver 150 meters avstånd från bostads- och rekreationsområden",
      "A3 är för tyngre drönare men tillåter flyg i städer",
      "A3 kräver alltid Transportstyrelsetillstånd"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 64, category: "chapter9", categoryName: "Operativa procedurer", level: "A1A3",
    question: "Vad gäller för nattflygning med drönare?",
    answer: "Drönaren ska ha ett blinkande ljus som gör den synlig under VLOS-krav",
    options: [
      "Nattflygning är alltid förbjudet i öppna kategorin",
      "Drönaren ska ha ett blinkande ljus som gör den synlig under VLOS",
      "Nattflygning är tillåtet utan extra utrustning om GPS är aktiverat",
      "Nattflygning kräver alltid tillstånd från Transportstyrelsen"
    ],
    correctIndex: 1, image: "imgs/a2_figur_37.png"
  },
  {
    id: 65, category: "chapter9", categoryName: "Operativa procedurer", level: "A1A3",
    question: "Vad innebär integritetsskyddslagen (GDPR) för drönardrift med kamera?",
    answer: "Filmning och fotografering av identifierbara personer kräver rättslig grund, t.ex. samtycke",
    options: [
      "GDPR gäller inte för luftbilder tagna av drönare",
      "Filmning av identifierbara personer kräver rättslig grund, t.ex. samtycke",
      "Det är alltid tillåtet att filma från luften utan samtycke",
      "GDPR gäller bara för kommersiella aktörer"
    ],
    correctIndex: 1, image: "imgs/a2_figur_39.png"
  },
  {
    id: 66, category: "chapter9", categoryName: "Operativa procedurer", level: "A1A3",
    question: "Vad gäller för ansvarsförsäkring vid drönardrift i öppna kategorin?",
    answer: "EU-förordningen kräver ansvarsförsäkring för UAS-operatörer som täcker skador på tredje part",
    options: [
      "Försäkring är frivillig och enbart rekommenderad",
      "EU-förordningen kräver ansvarsförsäkring som täcker skador på tredje part",
      "Försäkring krävs bara vid kommersiella uppdrag",
      "Hemförsäkringen täcker alltid drönarskador automatiskt"
    ],
    correctIndex: 1, image: "imgs/a2_figur_41.png"
  },
  {
    id: 67, category: "chapter9", categoryName: "Operativa procedurer", level: "A1A3",
    question: "Vad gäller vid kommersiell drönardrift (uppdrag mot betalning)?",
    answer: "Samma tekniska och utbildningskrav gäller – kategorin beror på drönare och plats, inte på syftet med flygningen",
    options: [
      "Kommersiell drift kräver alltid tillstånd i specifik kategori",
      "Samma krav gäller – kategorin beror på drönare och plats, inte syfte",
      "Kommersiell drift är alltid förbjuden i öppna kategorin",
      "Man behöver alltid en medinspektör vid kommersiella uppdrag"
    ],
    correctIndex: 1, image: "imgs/a2_figur_40.png"
  },

  // ===== KAPITEL 10: METEOROLOGI – FÖRDJUPNING (A2) =====
  {
    id: 68, category: "chapter10", categoryName: "Meteorologi – fördjupning", level: "A2",
    question: "Vad är QNH?",
    answer: "Lufttrycket justerat till havsnivå – används för att ställa in höjdmätaren korrekt",
    options: [
      "En väderstation-kod för nordliga vindar",
      "Lufttrycket justerat till havsnivå för korrekt höjdmätning",
      "En indikator för relativ luftfuktighet",
      "Queued Navigation Heading – autopilotens kursinställning"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 69, category: "chapter10", categoryName: "Meteorologi – fördjupning", level: "A2",
    question: "Under vilka förhållanden kan isbildning uppstå på en drönare?",
    answer: "Vid flygning i eller nära moln med underkylt vatten när temperaturen är under 0°C",
    options: [
      "Alltid när temperaturen understiger -10°C",
      "Vid flygning i eller nära moln med underkylt vatten under 0°C",
      "Vid stark vind i kombination med regn",
      "Bara vid flyghöjder över 500 meter"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 70, category: "chapter10", categoryName: "Meteorologi – fördjupning", level: "A2",
    question: "Vad innebär VMC (Visual Meteorological Conditions)?",
    answer: "Väderförhållanden med tillräcklig sikt och molndistans för att flyga visuellt utan instrumenthjälp",
    options: [
      "Väderförhållanden med obegränsad sikt och inga moln",
      "Väderförhållanden med tillräcklig sikt och molndistans för visuell flygning",
      "Very Meteorological Cloud – ett specifikt molntyp",
      "Minimikrav på vindstyrka vid drönarflyg"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 71, category: "chapter10", categoryName: "Meteorologi – fördjupning", level: "A2",
    question: "Varför är termik (uppvindar) relevant vid drönardrift?",
    answer: "Termik skapar oväntade vertikala luftrörelser som kan destabilisera drönaren och påverka höjdhållningen",
    options: [
      "Termik hjälper alltid drönaren att hålla höjden bättre",
      "Termik skapar oväntade vertikala rörelser som kan destabilisera drönaren",
      "Termik är bara relevant för fastvingedrönare",
      "Termik uppstår bara vid höjder över 500 meter"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 72, category: "chapter10", categoryName: "Meteorologi – fördjupning", level: "A2",
    question: "Vad är en gustig (vindbyig) vind och varför är den farlig för drönare?",
    answer: "Vind som snabbt varierar i styrka och riktning – försvårar stabilisering och kan överbelasta motorerna",
    options: [
      "En stabil vind som alltid blåser från exakt samma håll",
      "Vind som snabbt varierar i styrka och riktning och kan överbelasta motorer",
      "Vind som bara uppstår på höga höjder",
      "En termisk uppvindsrörelse inuti molnen"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 73, category: "chapter10", categoryName: "Meteorologi – fördjupning", level: "A2",
    question: "Hur identifierar man åskorisk i väderprognosen?",
    answer: "Titta i METAR/TAF efter TSRA (thunderstorm with rain) eller CB (cumulonimbus) och kontrollera synoptisk karta",
    options: [
      "Känn om luftfuktigheten är hög på plats",
      "Titta i METAR/TAF efter TSRA eller CB och kontrollera synoptisk karta",
      "Åskorisk kan inte förutses av fjärrpiloten",
      "Kontakta närmaste flygplats per telefon"
    ],
    correctIndex: 1, image: "imgs/a2_figur_46.png"
  },

  // ===== KAPITEL 11: FÖRDJUPAD TEKNISK KUNSKAP (A2) =====
  {
    id: 74, category: "chapter11", categoryName: "Fördjupad teknisk kunskap om drönare", level: "A2",
    question: "Vad är en IMU (Inertial Measurement Unit) i en drönare?",
    answer: "En sensor som mäter acceleration och rotationshastighet i 3 axlar – håller drönaren stabil",
    options: [
      "Intelligent Motor Unit – motorkontrollenheten",
      "En sensor som mäter acceleration och rotation i 3 axlar – håller drönaren stabil",
      "Integrated Map Update – automatisk kartuppdatering",
      "Internal Memory Unit – lagringsenhet för flygdata"
    ],
    correctIndex: 1, image: "imgs/a2_figur_47.png"
  },
  {
    id: 75, category: "chapter11", categoryName: "Fördjupad teknisk kunskap om drönare", level: "A2",
    question: "Vad är en GCS (Ground Control Station)?",
    answer: "Markstationsutrustning för att styra och övervaka drönaren – inkl. fjärrkontroll, display och datalink",
    options: [
      "GPS Coordinate System – ett navigeringssystem",
      "Markstationsutrustning för att styra och övervaka drönaren",
      "Ground Clearance Sensor – sensor för markavstånd",
      "General Control Software – drönarens operativsystem"
    ],
    correctIndex: 1, image: "imgs/a2_figur_32.png"
  },
  {
    id: 76, category: "chapter11", categoryName: "Fördjupad teknisk kunskap om drönare", level: "A2",
    question: "Vad kan orsaka störningar på drönarens radiolänk?",
    answer: "Andra radioenheter på samma frekvens, metallstrukturer, kraftledningar och elektromagnetisk interferens",
    options: [
      "Bara dåligt väder orsakar störningar",
      "Andra radioenheter, metallstrukturer, kraftledningar och elektromagnetisk interferens",
      "Bara om drönaren flyger över 100 meters höjd",
      "Bara äldre drönare utan modern frekvenshantering"
    ],
    correctIndex: 1, image: "imgs/a2_figur_34.png"
  },
  {
    id: 77, category: "chapter11", categoryName: "Fördjupad teknisk kunskap om drönare", level: "A2",
    question: "Varför är firmware-uppdateringar viktiga för drönare?",
    answer: "De åtgärdar buggar, förbättrar prestanda, uppdaterar geofencing och lägger till säkerhetsfunktioner",
    options: [
      "De är bara estetiska ändringar utan säkerhetsbetydelse",
      "De åtgärdar buggar, förbättrar prestanda och uppdaterar säkerhetsfunktioner",
      "Uppdateringar behövs bara vid köp av ny fjärrkontroll",
      "Uppdateringar kan bara utföras av auktoriserade verkstäder"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 78, category: "chapter11", categoryName: "Fördjupad teknisk kunskap om drönare", level: "A2",
    question: "Vad är skillnaden i prestandaprofil mellan multirotor och fastvingedrönare?",
    answer: "Fastvingedrönaren har längre räckvidd och uthållighet men kan inte hovra; multirotorn hovrar men har kortare flygtid",
    options: [
      "Fastvingedrönaren kan hovra men multirotorn inte",
      "Fastvingedrönaren har längre räckvidd men kan inte hovra; multirotorn hovrar men har kortare flygtid",
      "Det är bara en estetisk skillnad",
      "Multirotorn har alltid längre räckvidd tack vare GPS"
    ],
    correctIndex: 1, image: "imgs/a2_figur_48.png"
  },
  {
    id: 79, category: "chapter11", categoryName: "Fördjupad teknisk kunskap om drönare", level: "A2",
    question: "Vad är bromsträcka och varför är den relevant för A2-piloter?",
    answer: "Sträckan drönaren behöver för att stanna från full hastighet – viktigt för att hålla säkert avstånd till personer",
    options: [
      "Sträckan drönaren flyger på en laddning",
      "Sträckan drönaren behöver för att stanna – viktigt för säkert avstånd till personer",
      "Sträckan till närmaste landningsplats vid nödfall",
      "Sträckan radiolänken täcker vid störning"
    ],
    correctIndex: 1, image: "imgs/a2_figur_50.png"
  },

  // ===== KAPITEL 12: MARKRISK (A2) =====
  {
    id: 80, category: "chapter12", categoryName: "Markrisk", level: "A2",
    question: "Vad innebär 1:1-regeln vid A2-flygning?",
    answer: "Det horisontella avståndet till utomstående personer ska vara minst lika stort som flyghöjden",
    options: [
      "En drönare per pilot och en pilot per drönare",
      "Det horisontella avståndet till utomstående ska vara minst lika stort som flyghöjden",
      "Flyghöjden får aldrig överstiga 1 meter per kilo drönarens vikt",
      "Uppdraget tar max lika lång tid som förberedelserna"
    ],
    correctIndex: 1, image: "imgs/a2_figur_51.png"
  },
  {
    id: 81, category: "chapter12", categoryName: "Markrisk", level: "A2",
    question: "Vad är markrisk (ground risk) vid drönardrift?",
    answer: "Risken att drönaren vid en olycka orsakar skada på människor eller egendom på marken",
    options: [
      "Risken att drönaren kraschar i marken och skadas",
      "Risken att drönaren orsakar skada på människor eller egendom vid en olycka",
      "Risken för statisk urladdning vid markkontakt",
      "Risken att starta drönaren på ojämnt underlag"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 82, category: "chapter12", categoryName: "Markrisk", level: "A2",
    question: "Vad menas med 'utomstående personer' i drönarregelverket?",
    answer: "Personer som inte är medvetna om och inte deltar i drönaroperationen",
    options: [
      "Alla utomhus som saknar UAS-operatörsnummer",
      "Personer som inte är medvetna om och inte deltar i drönaroperationen",
      "Bara barn och äldre som inte kan flytta sig undan",
      "Alla utomhus som saknar hörselskydd"
    ],
    correctIndex: 1, image: "imgs/a2_figur_14.png"
  },
  {
    id: 83, category: "chapter12", categoryName: "Markrisk", level: "A2",
    question: "Vad är ett 'kontrollerat markområde' vid drönaroperationer?",
    answer: "Ett område där operatören säkerställt att inga obehöriga befinner sig, t.ex. avspärrat och bevakat",
    options: [
      "Alla kommunalt ägda ytor",
      "Ett område där operatören säkerställt att inga obehöriga befinner sig",
      "Mark under flygplatsens jurisdiktion",
      "En zon där drönaren navigerar helt autonomt"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 84, category: "chapter12", categoryName: "Markrisk", level: "A2",
    question: "Hur påverkar nyttolast (payload) markrisken?",
    answer: "Extra vikt ökar kinetisk energi vid kollision och minskar manövrerbarhet – markrisken ökar",
    options: [
      "Nyttolast har ingen effekt på markrisk",
      "Extra vikt ökar kinetisk energi vid kollision och minskar manövrerbarhet – markrisken ökar",
      "Nyttolast förbättrar stabiliteten och minskar markrisken",
      "Nyttolast påverkar bara fastvingedrönare"
    ],
    correctIndex: 1, image: "imgs/a2_figur_43.png"
  },
  {
    id: 85, category: "chapter12", categoryName: "Markrisk", level: "A2",
    question: "Vad ska en A2-pilot göra för att minska markrisken vid flygning nära människor?",
    answer: "Hålla avstånd per 1:1-regeln, använda låghastighetläge och undvika att flyga direkt över folk",
    options: [
      "Enbart informera personerna om att flygning pågår",
      "Hålla avstånd per 1:1-regeln, använda låghastighetläge och undvika att flyga över folk",
      "Bara aktivera RTH-funktionen som backup",
      "Installera en airbag på drönaren"
    ],
    correctIndex: 1, image: "imgs/a2_figur_51.png"
  },
  {
    id: 86, category: "chapter12", categoryName: "Markrisk", level: "A2",
    question: "Varför är det viktigt att bedöma om ett område är tätbefolkat eller glesbefolkat?",
    answer: "Tätbefolkade områden ökar sannolikheten att drönaren träffar en person vid olycka – kräver striktare marginaler",
    options: [
      "Befolkningstal påverkar bara tillståndsavgiften",
      "Tätbefolkat ökar sannolikheten att träffa person vid olycka – kräver striktare marginaler",
      "Glesbefolkat område kräver alltid mer restriktiva åtgärder",
      "Befolkningsbedömning är myndigheternas ansvar"
    ],
    correctIndex: 1, image: null
  },

  // ===== KAPITEL 1: FLYGSÄKERHET (extra frågor) =====
  {
    id: 167, category: "chapter1", categoryName: "Flygsäkerhet", level: "A1A3",
    question: "Vad ska en fjärrpilot göra direkt efter en drönarolycka där person eller egendom skadats?",
    answer: "Säkra platsen, larma nödtjänster vid behov, dokumentera händelsen och rapportera till Transportstyrelsen",
    options: [
      "Ta drönaren och lämna platsen för att undvika rättsliga problem",
      "Säkra platsen, larma nödtjänster vid behov, dokumentera och rapportera till Transportstyrelsen",
      "Bara rapportera till tillverkaren för garantiärende",
      "Vänta 48 timmar och se om drabbade hör av sig"
    ],
    correctIndex: 1, image: "imgs/a2_figur_21.png"
  },

  // ===== KAPITEL 2: LUFTRUMSREGLER (extra frågor) =====
  {
    id: 168, category: "chapter2", categoryName: "Luftrumsregler", level: "A1A3",
    question: "Vad definierar den öppna kategorin för drönardrift?",
    answer: "Lägre risk, max 120 m höjd, max 25 kg, VLOS-krav, ingen förhandstillstånd – regleras av UAS-förordningen",
    options: [
      "All hobbyflygning oavsett vikt och höjd",
      "Lägre risk, max 120 m, max 25 kg, VLOS-krav, ingen förhandstillstånd",
      "Kommersiell drift med certifierat luftfartyg",
      "Flygning med förtöjd drönare inomhus"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 169, category: "chapter2", categoryName: "Luftrumsregler", level: "A1A3",
    question: "Vad är den specifika kategorin och när hamnar man i den?",
    answer: "Mellannivåkategori med högre risk – när operation inte ryms i öppna kategorin, kräver riskbedömning (SORA) och godkännande",
    options: [
      "Samma som öppna kategorin men för kommersiell användning",
      "Mellannivåkategori med högre risk – kräver riskbedömning och godkännande",
      "Kategori för drönare över 25 kg utan andra krav",
      "En kategori specifikt för militär drönardrift"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 170, category: "chapter2", categoryName: "Luftrumsregler", level: "A1A3",
    question: "Var är det förbjudet att flyga drönare utan särskilt tillstånd i öppna kategorin?",
    answer: "Inom CTR (kontrollzoner), över skyddsobjekt, nära nödinsatser och i tillfälliga restriktionsområden (TFR/NOTAM)",
    options: [
      "Bara i militära övningsområden",
      "Inom CTR, över skyddsobjekt, nära nödinsatser och i TFR/NOTAM-zoner",
      "Bara i nationalparker och naturreservat",
      "Bara inom 5 km från en flygplats"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 171, category: "chapter2", categoryName: "Luftrumsregler", level: "A1A3",
    question: "I vilka situationer kan maxhöjden på 120 meter överskridas lagligen?",
    answer: "Vid flygning nära en struktur (torn, mast, byggnad) – upp till 15 meter över strukturens höjd om tillstånd finns eller det är tillåtet av zonen",
    options: [
      "Aldrig – 120 meter är en absolut gräns utan undantag",
      "Nära strukturer – upp till 15 meter över strukturens höjd med rätt tillstånd",
      "Alltid om man flyger i ödemark utan folk",
      "Om drönaren väger under 250 gram"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 172, category: "chapter2", categoryName: "Luftrumsregler", level: "A1A3",
    question: "Vad innebär kravet på CE-märkning (C-klass) för drönare i EU?",
    answer: "Drönaren uppfyller EU:s tekniska krav och är certifierad för en specifik underkategori (C0–C4) – möjliggör drift i öppna kategorin",
    options: [
      "Drönaren är registrerad hos en europeisk myndighet",
      "Drönaren uppfyller EU:s tekniska krav och är certifierad för en C-klass",
      "CE-märkning innebär att drönaren är skattad i Sverige",
      "CE-märkning är bara relevant för kommersiella aktörer"
    ],
    correctIndex: 1, image: null
  },

  // ===== KAPITEL 3: DRÖNARSYSTEM (extra frågor) =====
  {
    id: 173, category: "chapter3", categoryName: "Drönarsystem", level: "A1A3",
    question: "Varför används medurs (CW) och moturs (CCW) propellrar på en multirotor?",
    answer: "För att motkrafterna (torque) ska ta ut varandra – förhindrar att kroppen snurrar runt av motorernas reaktionskraft",
    options: [
      "För att öka lyftkraften när två propellrar arbetar åt samma håll",
      "Motkrafterna tar ut varandra – förhindrar att kroppen snurrar av motorernas reaktionskraft",
      "CW och CCW propellrar är identiska – märkningen är bara för monteringsordning",
      "De används för att kunna navigera utan kompass"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 174, category: "chapter3", categoryName: "Drönarsystem", level: "A1A3",
    question: "Vad är en kill switch och när ska den användas?",
    answer: "En nödstopp som omedelbart stänger av alla motorer – används bara om drönaren är okontrollerbar och en krasch är oundviklig",
    options: [
      "En knapp för att snabbt starta drönaren",
      "Nödstopp som stänger av alla motorer – används bara om krasch är oundviklig",
      "En funktion för att fjärrstyra drönaren vid länkförlust",
      "En säkring mot att drönaren lyfter av av misstag"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 175, category: "chapter3", categoryName: "Drönarsystem", level: "A1A3",
    question: "Varför är det viktigt att kalibrera RTH-hemPunkten (home point) inför varje flygning?",
    answer: "Home point sätts normalt vid start – om GPS-signal saknades vid start kan RTH leda till fel position",
    options: [
      "Kalibrering ändrar GPS-systemetets noggrannhet",
      "Home point sätts vid start – utan GPS-signal vid start kan RTH leda till fel position",
      "Home point måste uppdateras varje gång firmware uppdateras",
      "Kalibrering är bara nödvändigt vid den första flygningen"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 176, category: "chapter3", categoryName: "Drönarsystem", level: "A1A3",
    question: "Vad är syftet med flightkontrollern (FC) i en drönare?",
    answer: "Drönarens hjärna – tar emot pilotsignaler och sensordata, beräknar motorstyrningar och håller drönaren stabil",
    options: [
      "En enhet som enbart styr kamerans rörelse",
      "Drönarens hjärna – tar emot signaler och sensordata, styr motorer och håller stabil",
      "En säkerhetskopia av GPS-systemet",
      "En enhet som bara hanterar radiolänken"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 177, category: "chapter3", categoryName: "Drönarsystem", level: "A1A3",
    question: "Vad innebär en 'low battery failsafe' och hur bör den vara inställd?",
    answer: "En automatisk åtgärd vid kritiskt låg batterikapacitet – bör ge varning vid t.ex. 30% och initiera RTH eller landning vid 15–20%",
    options: [
      "En larm som enbart pip-signalerar utan att göra något annat",
      "Automatisk åtgärd vid kritisk batterinivå – varning vid ~30%, RTH eller landning vid 15–20%",
      "En funktion som laddas aktivt under flygning",
      "Failsafe stänger av all elektronik utom GPS vid lågt batteri"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 178, category: "chapter3", categoryName: "Drönarsystem", level: "A1A3",
    question: "Vad är skillnaden mellan en quadcopter och en hexacopter?",
    answer: "Quadcopter har 4 motorer/propellrar; hexacopter har 6 – fler motorer ger redundans och mer lyftkapacitet men ökar vikt och komplexitet",
    options: [
      "Quadcopter är snabbare, hexacopter lyfter mer – i övrigt identiska",
      "4 vs 6 motorer – fler ger redundans och lyftkapacitet men ökar vikt och komplexitet",
      "Hexacopter är alltid bättre och ersätter quadcopter i alla sammanhang",
      "Skillnaden är bara estetisk – prestandan är identisk"
    ],
    correctIndex: 1, image: "imgs/a2_figur_29.png"
  },

  // ===== KAPITEL 4: METODIK FÖR PILOTER (extra frågor) =====
  {
    id: 179, category: "chapter4", categoryName: "Metodik för piloter", level: "A1A3",
    question: "Hur påverkar stress en fjärrpilots prestation?",
    answer: "Måttlig stress kan höja prestationen, men hög stress försämrar beslutsfattande, reaktionstid och situationsmedvetenhet",
    options: [
      "Stress har ingen mätbar effekt på drönarpiloter",
      "Måttlig stress höjer prestationen; hög stress försämrar beslut, reaktion och situationsmedvetenhet",
      "Stress förbättrar alltid reaktionstiden",
      "Stress påverkar bara oerfarna piloter"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 180, category: "chapter4", categoryName: "Metodik för piloter", level: "A1A3",
    question: "Vad är CRM (Crew Resource Management) och hur är det relevant för drönarpiloten?",
    answer: "Principer för att effektivt utnyttja all tillgänglig information, teknik och teamresurser – gäller även ensam pilot för bättre beslutsfattande",
    options: [
      "CRM är bara relevant för kommersiella flygbolag med besättningar",
      "Principer för att utnyttja information, teknik och resurser effektivt – gäller även ensampilot",
      "CRM är ett certifieringssystem för drönartillverkare",
      "CRM handlar enbart om kommunikation med ATC"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 181, category: "chapter4", categoryName: "Metodik för piloter", level: "A1A3",
    question: "Vad innebär automationsberoendet (automation complacency) och varför är det en risk?",
    answer: "Piloten litar för mycket på automatik och tappar aktiv övervakning – vid systemfel kan piloten ha tappat situationsmedvetenhet",
    options: [
      "Piloten stänger av autopiloten för ofta",
      "Piloten litar för mycket på automatik och tappar aktiv övervakning – farligt vid systemfel",
      "Automationsberoende gäller bara flygplan, inte drönare",
      "Problemet är att piloten inte lär sig använda autopiloten"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 182, category: "chapter4", categoryName: "Metodik för piloter", level: "A1A3",
    question: "Varför är det viktigt att sätta gränser för flygningen i förväg (t.ex. vädergräns, batterigräns)?",
    answer: "Förinställda gränser förhindrar att man fattar dåliga beslut under press eller uppdragsfixering – lättare att följa en regel man bestämt lugnt",
    options: [
      "Det är onödigt om piloten har lång erfarenhet",
      "Förinställda gränser förhindrar dåliga beslut under press och uppdragsfixering",
      "Gränser ska bara sättas av UAS-operatören, inte piloten",
      "Gränser sätts alltid automatiskt av drönarsystemet"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 183, category: "chapter4", categoryName: "Metodik för piloter", level: "A1A3",
    question: "Vad är kognitiv tunnelseende (tunnel vision) hos en pilot?",
    answer: "Piloten fokuserar så intensivt på ett problem att hen missar annan viktig information – t.ex. fixering vid kamerabild och missade larm",
    options: [
      "Dålig fysisk syn som kräver glasögon",
      "Piloten fokuserar på ett problem och missar annan viktig info – t.ex. fixering vid kamera och missade larm",
      "En optisk illusion som uppstår vid stark sol",
      "Svårighet att se drönaren mot en enhetlig bakgrund"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 184, category: "chapter4", categoryName: "Metodik för piloter", level: "A1A3",
    question: "Hur bör en fjärrpilot hantera åskådare som distraherar under pågående flygning?",
    answer: "Be dem hålla avstånd artigt men bestämt – pilotens fulla uppmärksamhet på drönaren är ett säkerhetskrav",
    options: [
      "Avbryt flygningen omedelbart när åskådare dyker upp",
      "Be dem hålla avstånd artigt men bestämt – full uppmärksamhet på drönaren är ett säkerhetskrav",
      "Låt en assistent prata med åskådarna medan man flyger",
      "Åskådare är alltid välkomna och utgör ingen risk"
    ],
    correctIndex: 1, image: "imgs/a2_figur_14.png"
  },
  {
    id: 185, category: "chapter4", categoryName: "Metodik för piloter", level: "A1A3",
    question: "Vad är uppgiftsmättnad (task saturation) och hur hanteras det?",
    answer: "När piloten har för många uppgifter samtidigt och riskerar att tappa viktiga saker – hanteras med checklista, prioritering och om möjligt hjälp av assistent",
    options: [
      "När drönaren utför för många automatiska uppgifter parallellt",
      "Piloten har för många uppgifter – hanteras med checklista, prioritering och assistentstöd",
      "Uppgiftsmättnad uppstår bara vid mycket långa flygningar",
      "Problemet löses alltid med mer avancerad drönarprogramvara"
    ],
    correctIndex: 1, image: null
  },

  // ===== KAPITEL 5: LUFTFARTENS BEGRÄNSNINGAR (extra frågor) =====
  {
    id: 186, category: "chapter5", categoryName: "Luftfartens begränsningar", level: "A1A3",
    question: "Vad är ett R-område (restriktionsområde) i luftrummet?",
    answer: "Ett luftrum där flygning är begränsad men möjlig med tillstånd – vanligt nära militäranläggningar och kritisk infrastruktur",
    options: [
      "Ett område där all flygning är permanent förbjuden",
      "Luftrum där flygning är begränsad men möjlig med tillstånd – vanligt nära militär och kritisk infrastruktur",
      "Ett område reserverat för räddningshelikoptrar",
      "En zon där enbart registrerade hobbydrönare får flyga"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 187, category: "chapter5", categoryName: "Luftfartens begränsningar", level: "A1A3",
    question: "Vad är ett P-område (förbudsområde) i luftrummet?",
    answer: "Permanent förbjudet luftrum – t.ex. över kungliga slott och kärnkraftverk. Kräver dispens på högsta nivå och är sällan möjligt",
    options: [
      "Ett privat luftrum som markägaren äger",
      "Permanent förbjudet luftrum – t.ex. över kungliga slott och kärnkraftverk",
      "Ett område som är förbjudet bara på helger",
      "En zon för professionell fotografering med tillstånd"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 188, category: "chapter5", categoryName: "Luftfartens begränsningar", level: "A1A3",
    question: "Vad är en tillfällig flygrestriktion (TFR) och hur får en pilot kännedom om den?",
    answer: "Tillfälligt förbudet luftrum – t.ex. vid statsbesök, flyguppvisning eller nödläge. Publiceras via NOTAM och luftrumstjänster som Drönarkartan",
    options: [
      "En permanent restriktion som aldrig förändras",
      "Tillfälligt förbudet luftrum – publiceras via NOTAM och luftrumstjänster som Drönarkartan",
      "En restriktion bara för bemannade luftfartyg",
      "TFR gäller bara militära övningsområden"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 189, category: "chapter5", categoryName: "Luftfartens begränsningar", level: "A1A3",
    question: "Hur nära en flygplats får man flyga drönare utan tillstånd?",
    answer: "Det beror på flyplatsens CTR-gränser – alltid kontrollera Drönarkartan eller LFV:s luftrumstjänst för aktuell zon",
    options: [
      "Aldrig inom 5 km – det är alltid förbjudet",
      "Beror på CTR-gränserna – kontrollera alltid Drönarkartan eller LFV:s luftrumstjänst",
      "Alltid tillåtet om man håller under 30 meters höjd",
      "Inom 8 km krävs radiotillstånd men inget annat"
    ],
    correctIndex: 1, image: "imgs/a2_figur_2.png"
  },
  {
    id: 190, category: "chapter5", categoryName: "Luftfartens begränsningar", level: "A1A3",
    question: "Vad innebär rätten att flyga 15 meter ovanför en struktur i öppna kategorin?",
    answer: "En drönare i öppna kategorin kan flyga upp till 15 meter ovanför ett torn, en mast eller en byggnad om piloten är behörig och inga restriktioner gäller",
    options: [
      "Man kan alltid flyga 15 meter ovanför alla byggnader utan begränsning",
      "En drönare kan flyga upp till 15 meter ovanför en struktur om piloten är behörig och inga restriktioner finns",
      "Regeln gäller bara för C3 och C4-drönare",
      "15-metersgränsen ersätter alltid 120-metersgränsen"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 191, category: "chapter5", categoryName: "Luftfartens begränsningar", level: "A1A3",
    question: "Vad gäller för drönardrift i samband med en stor folksamling (t.ex. konsert eller demonstration)?",
    answer: "Drönardrift direkt över folksamlingar är förbjuden i öppna kategorin – kräver specifik kategori med tillstånd",
    options: [
      "Tillåtet om man håller 120 meters höjd",
      "Förbjudet i öppna kategorin – kräver specifik kategori med tillstånd",
      "Tillåtet med C1-drönare under 30 meters höjd",
      "Tillåtet om man informerat polisen på förhand"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 192, category: "chapter5", categoryName: "Luftfartens begränsningar", level: "A1A3",
    question: "Vad är Drönarkartan och varför är den viktig?",
    answer: "En svensk luftrumstjänst (app/webb) som visar restriktioner, CTR-gränser, skyddsobjekt och UAS-zoner i realtid – hjälper piloten flyga lagligt",
    options: [
      "En app för att dela flygvideor med andra drönarpilot",
      "Luftrumstjänst som visar restriktioner, CTR-gränser och UAS-zoner i realtid",
      "En karta som enbart visar godkända landningsplatser",
      "En betaltjänst för kommersiella operatörer"
    ],
    correctIndex: 1, image: null
  },

  // ===== KAPITEL 6: MÄNSKLIGA FAKTORER (extra frågor) =====
  {
    id: 193, category: "chapter6", categoryName: "Mänskliga faktorer", level: "A1A3",
    question: "Vad är grupptryck och hur kan det påverka en fjärrpilots beslutfattande negativt?",
    answer: "Yttre förväntningar från kollegor, kunder eller åskådare kan pressa piloten att flyga trots att förhållandena inte är säkra",
    options: [
      "Grupptryck gäller bara militär personal",
      "Yttre förväntningar kan pressa piloten att flyga trots osäkra förhållanden",
      "Grupptryck förbättrar alltid säkerheten eftersom fler ögon ser",
      "Grupptryck är bara ett problem under utbildning"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 194, category: "chapter6", categoryName: "Mänskliga faktorer", level: "A1A3",
    question: "Vad innebär 'lär av misstag'-kulturen inom luftfartssäkerhet?",
    answer: "Att rapportera och analysera incidenter öppet utan skuldbeläggning – systemförbättring sker bäst när piloter vågar rapportera avvikelser",
    options: [
      "Att bestraffa piloter för misstag avskräcker framtida fel",
      "Öppen rapportering utan skuldbeläggning förbättrar systemet – piloter måste våga rapportera",
      "Bara allvarliga olyckor behöver analyseras",
      "Lärandet sker enbart via tillverkarens uppdateringar"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 195, category: "chapter6", categoryName: "Mänskliga faktorer", level: "A1A3",
    question: "Vad menas med 'spatial disorientation' (spatial desorientation) vid drönardrift?",
    answer: "Piloten förlorar känslan för drönarens orientering i rymden – vanligt vid flykt mot enhetlig bakgrund eller i FPV utan referenspunkter",
    options: [
      "Piloten vet inte var flygplatsen är belägen",
      "Piloten förlorar känslan för drönarens orientering – vanligt mot enhetlig bakgrund eller i FPV",
      "Spatial desorientation är bara ett problem för bemannad luftfart",
      "Problemet uppstår bara nattetid"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 196, category: "chapter6", categoryName: "Mänskliga faktorer", level: "A1A3",
    question: "Varför är det viktigt att en fjärrpilot tar regelbundna pauser vid långa uppdrag?",
    answer: "Koncentration och reaktionstid minskar progressivt utan pauser – pauser återställer uppmärksamheten och minskar risken för misstag",
    options: [
      "Pauser krävs bara när batteriet laddas",
      "Koncentration och reaktionstid minskar utan pauser – pauser återställer uppmärksamheten",
      "Pauser gör piloten okoncentrerad när flygningen återupptas",
      "Paus behövs bara om man flyger mer än 4 timmar"
    ],
    correctIndex: 1, image: null
  },

  // ===== KAPITEL 7: METEOROLOGI – GRUNDLÄGGANDE (extra frågor) =====
  {
    id: 197, category: "chapter7", categoryName: "Meteorologi – grundläggande", level: "A1A3",
    question: "Vad innebär Beaufort 4 och Beaufort 6 för drönardrift?",
    answer: "Beaufort 4 (6–8 m/s, frisk bris) – de flesta drönare klarar det men flygtiden minskar. Beaufort 6 (11–14 m/s, hård vind) – undvik för de flesta konsumentdrönare",
    options: [
      "Beaufort-skalan är bara relevant för segelfartyg",
      "Beaufort 4 (6–8 m/s) – drönare klarar men flygtid minskar. Beaufort 6 (11–14 m/s) – undvik för konsumentdrönare",
      "Beaufort 4 är alltid farligt, Beaufort 6 är alltid acceptabelt",
      "Beaufort-värden är identiska med km/h-värden"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 198, category: "chapter7", categoryName: "Meteorologi – grundläggande", level: "A1A3",
    question: "Varför är snöfall extra problematiskt vid drönardrift jämfört med regn?",
    answer: "Snö kan ansamlas på propellrar och ändra aerodynamiken, och vid temperaturer runt 0°C kan snö omvandlas till is som obalanserar propellrarna",
    options: [
      "Snö är alltid säkrare än regn eftersom det är torrt",
      "Snö ansamlas på propellrar och kan bli is nära 0°C – obalanserar och skadar",
      "Snöfall är inget problem om drönaren har IP54-klassning",
      "Snö påverkar bara GPS-signal, inte propellrar"
    ],
    correctIndex: 1, image: null
  },

  // ===== KAPITEL 8: FLYGPRESTANDA OCH TEKNISK KUNSKAP (extra frågor) =====
  {
    id: 199, category: "chapter8", categoryName: "Flygprestanda och teknisk kunskap", level: "A1A3",
    question: "Vad händer med drönarens maximala räckvidd och flygtid vid medvind respektive motvind?",
    answer: "Medvind ökar räckvidden i en riktning men försvårar returen; motvind minskar räckvidden och ökar strömförbrukning – planera alltid med vinden i åtanke",
    options: [
      "Vinden har ingen effekt på räckvidd, bara på flygtid",
      "Medvind ökar räckvidd en riktning men försvårar returen; motvind minskar räckvidd – planera med vinden",
      "Medvind minskar alltid räckvidden",
      "Planera med 10% marginal oavsett vindförhållanden"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 200, category: "chapter8", categoryName: "Flygprestanda och teknisk kunskap", level: "A1A3",
    question: "Vad är vibrationernas effekt på en drönares sensorer och mekanik?",
    answer: "Onormala vibrationer kan förvrida IMU-data och ge instabilt flyg – orsakas ofta av obalanserade eller skadade propellrar",
    options: [
      "Vibrationer är ett normalt fenomen utan negativa effekter",
      "Onormala vibrationer förvrider IMU-data och ger instabilt flyg – orsakas av obalanserade propellrar",
      "Vibrationer påverkar bara kamerans bildkvalitet",
      "Vibrationer ökar flygsäkerheten genom att indikera full motoreffekt"
    ],
    correctIndex: 1, image: null
  },

  // ===== KAPITEL 10: METEOROLOGI – FÖRDJUPNING (extra frågor) =====
  {
    id: 87, category: "chapter10", categoryName: "Meteorologi – fördjupning", level: "A2",
    question: "Hur påverkar motvind en drönarens batteriförbrukning?",
    answer: "Motvind tvingar motorerna att arbeta hårdare, vilket ökar strömförbrukningen och minskar flygtiden markant",
    options: [
      "Motvind minskar batteriförbrukningen eftersom drönaren bromsar",
      "Motvind tvingar motorerna att arbeta hårdare och ökar strömförbrukning markant",
      "Motvind påverkar bara GPS-signalen, inte batteriet",
      "Motvind har ingen mätbar effekt under 10 m/s"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 88, category: "chapter10", categoryName: "Meteorologi – fördjupning", level: "A2",
    question: "Vad är vindgradient och vad innebär det för drönardrift?",
    answer: "Vindhastigheten ökar med höjden – en drönare kan möta starkare vind högre upp än vad piloten känner på marken",
    options: [
      "Vinden är alltid starkast närmast marken",
      "Vindhastigheten ökar med höjden – drönaren möter starkare vind högre upp",
      "Vindgradient är skillnaden i vindriktning mellan öst och väst",
      "Vindgradient uppstår bara vid kustlinjer"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 89, category: "chapter10", categoryName: "Meteorologi – fördjupning", level: "A2",
    question: "Vad är markeffekten (ground effect) och hur påverkar den en drönare vid start och landning?",
    answer: "Nära marken skapar propellrarnas nedåtluft ett trykkudde som ökar lyftkraften – drönaren känns lättare att lyfta men kan bete sig oväntat",
    options: [
      "Markeffekten suger drönaren mot marken vid låg höjd",
      "Nära marken skapar propellrarna ett trykkudde som ökar lyftkraften – beteendet kan vara oväntat",
      "Markeffekten uppstår bara vid landning, inte start",
      "Markeffekten är bara relevant för fastvingedrönare"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 90, category: "chapter10", categoryName: "Meteorologi – fördjupning", level: "A2",
    question: "Hur kan fjärrpiloten enkelt bedöma vindriktning och styrka på plats?",
    answer: "Observera hur gräs, löv eller rök rör sig, känn vinden mot huden och titta på en vindmätare eller mobilapp",
    options: [
      "Ringa SMHI för en lokal vindrapport",
      "Observera löv/gräs, känn vinden och använd vindmätare eller mobilapp",
      "Flyga drönaren i 5 meter och se hur den driftar",
      "Titta på en väderstation minst 20 km bort"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 91, category: "chapter10", categoryName: "Meteorologi – fördjupning", level: "A2",
    question: "Varför är regn och snö skadligt för de flesta drönare?",
    answer: "Fukt kan tränga in i elektroniken och korrodera kretsar, och is kan obalansera propellrarna",
    options: [
      "Regn är bara skadligt om drönaren saknar IP-klassning",
      "Fukt tränger in i elektroniken och korroderar kretsar; is obalanserar propellrar",
      "Regn påverkar bara kameran, inte flygelektroniken",
      "Snö är ofarligt eftersom det är fruset vatten"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 92, category: "chapter10", categoryName: "Meteorologi – fördjupning", level: "A2",
    question: "Vilka tecken tyder på att isbildning håller på att bildas på drönaren under flygning?",
    answer: "Onormalt hög motorbelastning, ökad vibration, minskad lyftkraft och obalans i flygbeteendet",
    options: [
      "GPS-signalen försämras markant",
      "Onormalt hög motorbelastning, ökad vibration och minskad lyftkraft",
      "Batteritemperaturen sjunker under 0°C",
      "Fjärrkontrollens signal avbryts periodvis"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 93, category: "chapter10", categoryName: "Meteorologi – fördjupning", level: "A2",
    question: "Hur påverkar kall väderlek (under 0°C) ett LiPo-batteris prestanda?",
    answer: "Kylan sänker batteriets kapacitet och spänning, vilket ger kortare flygtid och risk för plötslig spänningsdropp",
    options: [
      "Kyla förbättrar batteriets prestanda genom lägre motstånd",
      "Kylan sänker kapacitet och spänning – kortare flygtid och risk för plötslig dropp",
      "Kyla har ingen effekt på LiPo-batterier under -5°C",
      "Kyla påverkar bara batteriladdningstiden, inte flygprestandan"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 94, category: "chapter10", categoryName: "Meteorologi – fördjupning", level: "A2",
    question: "Vad innebär densitetshöjd (density altitude) och hur påverkar det drönarens prestanda?",
    answer: "Densitetshöjd är den effektiva höjd atmosfären beter sig som – hög temperatur och lågt lufttryck ger tunnare luft och sämre lyftkraft",
    options: [
      "Densitetshöjd är den faktiska höjden mätt med GPS",
      "Hög temperatur och lågt lufttryck ger tunnare luft och sämre lyftkraft",
      "Densitetshöjd påverkar bara fastvingedrönare",
      "Densitetshöjd är bara relevant på höjder över 1000 meter"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 95, category: "chapter10", categoryName: "Meteorologi – fördjupning", level: "A2",
    question: "Vad är termisk turbulens och när uppstår den?",
    answer: "Turbulens orsakad av uppvärmda luftpakket som stiger från marken – vanligast på soliga dagar med svag vind",
    options: [
      "Turbulens i närheten av vindkraftverk",
      "Turbulens av uppvärmda luftpaket som stiger – vanligast soliga dagar med svag vind",
      "Turbulens som uppstår när jetströmmen korsar lågtrycket",
      "Turbulens skapad av varmt avgasflöde från fordon"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 96, category: "chapter10", categoryName: "Meteorologi – fördjupning", level: "A2",
    question: "Vad är rotorwash och varför är det farligt vid landning på trånga platser?",
    answer: "Den nedåtgående luftström som propellrarna skapar – kan störa luften nära hinder och göra landning instabil",
    options: [
      "En rengöringsrutin för drönarrotorerna efter flygning",
      "Propellrarnas nedåtgående luftström – kan störa luften nära hinder och göra landning instabil",
      "Luften som kastas uppåt av propellrarna vid start",
      "En typ av mekanisk turbulens vid havsytan"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 97, category: "chapter10", categoryName: "Meteorologi – fördjupning", level: "A2",
    question: "Vilket väderorgan är den primära källan för väderprognoser för drönarpilot i Sverige?",
    answer: "SMHI (Sveriges meteorologiska och hydrologiska institut) – ger lokala prognoser och varningar",
    options: [
      "Transportstyrelsen publicerar egna väderprognoser för drönare",
      "SMHI ger lokala prognoser och varningar",
      "EASA sammanställer EU-gemensamma väderprognoser",
      "Närmaste flygplats är alltid den bästa källan"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 98, category: "chapter10", categoryName: "Meteorologi – fördjupning", level: "A2",
    question: "Hur kan en pilot kontrollera vindförhållanden på flyghöjd (t.ex. 80 m) utan att flyga dit?",
    answer: "Använd väderapp med höjdprofil (t.ex. Windy), titta på moln som rör sig och studera lokala topografiska faktorer",
    options: [
      "Det är omöjligt att mäta vind på hög höjd utan att flyga dit",
      "Använd väderapp med höjdprofil, observera molnrörelser och topografi",
      "Ring SMHI för en manuell vindmätning",
      "Tro alltid att vinden är densamma som på marken"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 99, category: "chapter10", categoryName: "Meteorologi – fördjupning", level: "A2",
    question: "Vad innebär vindskjuvning (wind shear) och varför är det farligt?",
    answer: "En plötslig förändring i vindhastighet eller riktning på kort sträcka – kan orsaka okontrollerbar attitydändring",
    options: [
      "En lång och gradvis vindändring under ett uppdrag",
      "En plötslig förändring i vindhastighet/riktning – kan orsaka okontrollerbar attitydändring",
      "En typ av sidovind som bara påverkar fastvingedrönare",
      "Vind som skär mot bergssidor och skapar ekon"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 100, category: "chapter10", categoryName: "Meteorologi – fördjupning", level: "A2",
    question: "Vad bör en fjärrpilot göra om daggpunkt och temperatur skiljer sig med mindre än 3°C?",
    answer: "Vara beredd på att dimma snabbt kan bildas – överväg att avbryta eller skjuta upp flygningen",
    options: [
      "Flyga snabbare för att hinna klart innan dimman bildas",
      "Vara beredd på att dimma kan bildas snabbt – överväg att skjuta upp flygningen",
      "Det är helt säkert att flyga om vinden är under 5 m/s",
      "Kontrollera daggpunkten är bara relevant på natten"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 101, category: "chapter10", categoryName: "Meteorologi – fördjupning", level: "A2",
    question: "Vilken typ av moln signalerar risk för kraftigt oväder med blixtar och hagel?",
    answer: "Cumulonimbus (Cb) – ett högt, tornliknande moln med städliknande topp som indikerar åskväder",
    options: [
      "Cirrus – högt, tunt moln med iskristaller",
      "Cumulonimbus – högt tornliknande moln med städliknande topp, indikerar åskväder",
      "Stratus – lågt dimliknande molnlager",
      "Altostratus – mellannivåmoln utan åskorisk"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 102, category: "chapter10", categoryName: "Meteorologi – fördjupning", level: "A2",
    question: "Vad är inversionsväder och hur påverkar det sikten för drönarpiloten?",
    answer: "En varm luftmassa ovanpå kall luft stänger in dimma och smog nära marken – sikten kan vara mycket dålig i låga höjder",
    options: [
      "Inversion innebär att temperaturen ökar med höjden och ger alltid klar sikt",
      "Varm luft ovanpå kall stänger in dimma nära marken – sikten kan vara dålig",
      "Inversion orsakar kraftig turbulens på alla höjder",
      "Inversionsväder uppstår bara vid kusterna"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 103, category: "chapter10", categoryName: "Meteorologi – fördjupning", level: "A2",
    question: "Hur lång tid i förväg bör en pilot kontrollera väderprognoser inför ett uppdrag?",
    answer: "Dagen före för planering och på nytt på morgonen uppdragets dag – väder kan förändras snabbt",
    options: [
      "Minst en vecka i förväg",
      "Dagen före och igen på uppdragsdagen – väder ändras snabbt",
      "Bara 15 minuter innan start räcker",
      "En gång i veckan är tillräckligt för rutinuppdrag"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 104, category: "chapter10", categoryName: "Meteorologi – fördjupning", level: "A2",
    question: "Varför kan mekanisk turbulens uppstå bakom ett höghus även vid måttlig vind?",
    answer: "Byggnaden fungerar som ett hinder och skapar virvlar i luften på läsidan – liknande en sten i ett vattendrag",
    options: [
      "Höghuset värmer upp luften och skapar termik",
      "Byggnaden fungerar som hinder och skapar virvlar på läsidan – likt en sten i vatten",
      "Mekanisk turbulens uppstår bara nära marken, inte vid höghus",
      "Vinden accelererar jämnt runt byggnaden utan virvlar"
    ],
    correctIndex: 1, image: "imgs/a2_figur_45.png"
  },
  {
    id: 105, category: "chapter10", categoryName: "Meteorologi – fördjupning", level: "A2",
    question: "Vad ska fjärrpiloten prioritera om vädret försämras oväntat till under minimumkrav?",
    answer: "Avbryta uppdraget omedelbart och landa på närmaste säkra plats",
    options: [
      "Flyga snabbt tillbaka till startplatsen oavsett väg",
      "Avbryta uppdraget och landa på närmaste säkra plats",
      "Aktivera autopilot och låta drönaren hantera vädret",
      "Höja flyghöjden för att komma ovanför det dåliga vädret"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 106, category: "chapter10", categoryName: "Meteorologi – fördjupning", level: "A2",
    question: "Hur påverkar luftfuktighet drönarens elektronik och motorer på lång sikt?",
    answer: "Hög luftfuktighet ökar risk för korrosion på kretskort och kontakter samt kan ge kondensation i motorer",
    options: [
      "Luftfuktighet är alltid positivt då den kyler elektroniken",
      "Hög luftfuktighet ökar korrosionsrisk och kan ge kondensation i motorer",
      "Luftfuktighet påverkar bara yttre lacker och plastdelar",
      "Modern elektronik är alltid förseglade och opåverkade"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 107, category: "chapter10", categoryName: "Meteorologi – fördjupning", level: "A2",
    question: "Vad innebär en stabil atmosfär kontra en instabil atmosfär för drönardrift?",
    answer: "Stabil atmosfär ger jämn, förutsägbar luft; instabil atmosfär ger termik, uppvindar och risk för åskbyar",
    options: [
      "Stabil atmosfär ger mest turbulens för drönare",
      "Stabil ger jämn förutsägbar luft; instabil ger termik och risk för åskbyar",
      "Instabil atmosfär är alltid bäst för drönardrift",
      "Stabiliteten påverkar bara fastvingedrönare"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 108, category: "chapter10", categoryName: "Meteorologi – fördjupning", level: "A2",
    question: "Vilken app-typ rekommenderas för att se vindprofil på olika flyghöjder?",
    answer: "Vindprognosappar med höjdprofil som Windy eller liknande – visar vind per höjdnivå",
    options: [
      "Vanliga SMS-väderalarm räcker",
      "Vindprognosappar med höjdprofil som Windy – visar vind per höjdnivå",
      "Drönaren har inbyggd vindmätare som visas i appen",
      "METAR-appen ger alltid aktuell vindprofil för låga höjder"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 109, category: "chapter10", categoryName: "Meteorologi – fördjupning", level: "A2",
    question: "Vad är havsvind (sea breeze) och hur kan den påverka drönardrift vid kusten?",
    answer: "Vind från havet mot land som uppstår dagtid när landet värms upp – kan ge plötslig vindökning längs kusten",
    options: [
      "Havsvind är alltid konstant och lätt att planera för",
      "Vind från hav mot land dagtid då landet värms – kan ge plötslig vindökning längs kusten",
      "Havsvind blåser bara på natten",
      "Havsvind är bara ett fenomen i tropiska klimat"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 110, category: "chapter10", categoryName: "Meteorologi – fördjupning", level: "A2",
    question: "Vad bör noteras om temperatur och batteriprestanda vid flygning på vintern?",
    answer: "Värm batteriet till 20–25°C innan flygning och förvara det varmt – kalla batterier tappar kapacitet och kan cutoffa tidigt",
    options: [
      "Kalla batterier presterar bättre eftersom resistansen minskar",
      "Värm batteriet till 20–25°C och förvara varmt – kalla batterier tappar kapacitet och cutoffar",
      "Batteritemperatur spelar ingen roll vid moderna LiPo",
      "Kyl ner batteriet för att öka flygtiden i kyla"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 111, category: "chapter10", categoryName: "Meteorologi – fördjupning", level: "A2",
    question: "Hur kan man avgöra om ett lågtrycksystem är på väg och vad innebär det för planering?",
    answer: "Sjunkande lufttryck, ökande molntäcke och tilltagande vind indikerar lågtryck – planera för kortare eller inställd flygning",
    options: [
      "Stigande lufttryck indikerar alltid inkommande lågtryck",
      "Sjunkande lufttryck, ökande moln och tilltagande vind – planera för kortare eller inställd flygning",
      "Lågtryck indikeras enbart av molnfärgen",
      "Lågtryck påverkar inte drönardrift under 120 meters höjd"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 112, category: "chapter10", categoryName: "Meteorologi – fördjupning", level: "A2",
    question: "Vad är skillnaden mellan regnskur och ihållande regn ur ett drönarsäkerhetsperspektiv?",
    answer: "Regnskurar är kortvariga men intensiva – ihållande regn ger kumulativ fuktpåverkan. Båda är potentiellt skadliga beroende på drönarens IP-klassning",
    options: [
      "Regnskurar är alltid mer farliga eftersom de är intensivare",
      "Ihållande regn är alltid ofarligt eftersom intensiteten är lägre",
      "Regnskurar är kortvariga men intensiva; ihållande ger kumulativ fukt. Båda är potentiellt skadliga",
      "Moderna drönare är alltid vattentäta och berörs inte"
    ],
    correctIndex: 2, image: null
  },
  {
    id: 113, category: "chapter10", categoryName: "Meteorologi – fördjupning", level: "A2",
    question: "Vad är turbulens i samband med bergsterräng och varför är det extra farligt?",
    answer: "Vind som passerar berg skapar kraftiga virvlar på läsidan – oförutsägbar och kan överstiga drönarens stabiliseringsförmåga",
    options: [
      "Bergsterräng skyddar alltid drönaren från turbulens",
      "Vind över berg skapar kraftiga virvlar på läsidan – oförutsägbar och kan överstiga stabiliseringsförmågan",
      "Bergturbulens uppstår bara vid vindar över 20 m/s",
      "Turbulens vid berg är alltid svagare än vid kustlinjer"
    ],
    correctIndex: 1, image: "imgs/a2_figur_34.png"
  },

  // ===== KAPITEL 11: FÖRDJUPAD TEKNISK KUNSKAP (extra frågor) =====
  {
    id: 114, category: "chapter11", categoryName: "Fördjupad teknisk kunskap om drönare", level: "A2",
    question: "Vad är en ESC (Electronic Speed Controller) och vad gör den?",
    answer: "En elektronisk enhet som tar signaler från flygkontrollen och reglerar motorvarvet på varje enskild motor",
    options: [
      "En nödstopp-enhet som stänger av alla motorer vid fara",
      "En elektronisk enhet som reglerar motorvarvet för varje motor baserat på flygsignaler",
      "En kontrollenhet för fjärrkontrollens signalstyrka",
      "En sensor som mäter batteriets effektuttag"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 115, category: "chapter11", categoryName: "Fördjupad teknisk kunskap om drönare", level: "A2",
    question: "Vad är skillnaden mellan GPS-läge och ATTI-läge (Attitude mode) på en drönare?",
    answer: "GPS-läge håller positionen automatiskt med hjälp av satellit; ATTI-läge stabiliserar enbart attityden och driftar med vind",
    options: [
      "GPS-läge är snabbare, ATTI-läge är mer exakt",
      "GPS-läge håller positionen automatiskt; ATTI-läge stabiliserar attityd men driftar med vind",
      "ATTI-läge är identiskt med GPS-läge utan GPS-signal",
      "ATTI-läge används bara för automatiska uppdrag"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 116, category: "chapter11", categoryName: "Fördjupad teknisk kunskap om drönare", level: "A2",
    question: "Varför är ATTI-läge mer krävande för piloten att flyga i?",
    answer: "Drönaren håller inte sin position utan driftar med vinden – piloten måste aktivt kompensera hela tiden",
    options: [
      "ATTI-läge kräver mer batteri och ger kortare flygtid",
      "Drönaren driftar med vinden och piloten måste aktivt kompensera hela tiden",
      "ATTI-läge är bara svårt vid vindar under 2 m/s",
      "ATTI-läge stänger av alla sensorer och kräver manuell kalibrering"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 117, category: "chapter11", categoryName: "Fördjupad teknisk kunskap om drönare", level: "A2",
    question: "Vad är GNSS och hur skiljer det sig från GPS?",
    answer: "GNSS är samlingsnamnet för alla satellitnavigeringssystem globalt; GPS är det amerikanska systemet. Moderna drönare använder ofta flera system för bättre noggrannhet",
    options: [
      "GNSS och GPS är exakt samma sak med olika namn",
      "GNSS är samlingsnamnet för alla system globalt; GPS är det amerikanska. Drönare använder ofta flera",
      "GPS är modernare och mer precist än GNSS",
      "GNSS är bara relevant för professionella drönare"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 118, category: "chapter11", categoryName: "Fördjupad teknisk kunskap om drönare", level: "A2",
    question: "Varför kan GPS-signalen försämras eller tappas nära höga metallstrukturer?",
    answer: "Höga strukturer blockerar och reflekterar satellitvågor (multipath-effekt), vilket ger felaktig positionsdata",
    options: [
      "Metallstrukturer stör radiolänken, inte GPS-signalen",
      "Höga strukturer blockerar och reflekterar satellitvågor – multipath-effekt ger felaktig position",
      "GPS-signal kan aldrig tappas i närheten av metallstrukturer",
      "Signalen försvagas bara vid strukturer högre än 100 meter"
    ],
    correctIndex: 1, image: "imgs/a2_figur_34.png"
  },
  {
    id: 119, category: "chapter11", categoryName: "Fördjupad teknisk kunskap om drönare", level: "A2",
    question: "Vad innebär det att kalibrera kompassen och när bör man göra det?",
    answer: "Nollställa kompasssensorn mot jordens magnetfält – bör göras vid ny flygplats, efter transport och om kompassen indikerar fel",
    options: [
      "Ladda om batteriet i kompassen – görs en gång per år",
      "Nollställa kompassen mot jordens magnetfält – vid ny plats, efter transport och vid felindikeringar",
      "Uppdatera kompassen med ny karta – görs via fjärrkontrollen",
      "Kalibrera kompassen är bara nödvändigt vid firmware-uppdatering"
    ],
    correctIndex: 1, image: "imgs/a2_figur_35.png"
  },
  {
    id: 120, category: "chapter11", categoryName: "Fördjupad teknisk kunskap om drönare", level: "A2",
    question: "Vad kan orsaka magnetisk kompasförvrängning och vad bör piloten göra?",
    answer: "Kraftledningar, järnstrukturer, betong med armering och starka magneter nära drönaren – byt flygplats eller höj höjden",
    options: [
      "Bara fukt i luften kan störa kompassen",
      "Kraftledningar, järnstrukturer, armerad betong och magneter – byt plats eller höj höjden",
      "Kompassstörning uppstår bara om kompassen är gammal",
      "Magnetisk störning påverkar bara GPS, inte kompassen"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 121, category: "chapter11", categoryName: "Fördjupad teknisk kunskap om drönare", level: "A2",
    question: "Vad mäter ett gyroskop i en drönare och hur används informationen?",
    answer: "Rotationshastigheten kring drönarens tre axlar – används av flygkontrollen för att hålla stabil attityd",
    options: [
      "Rotationshastigheten – används för att styra kamerans gimbal",
      "Rotationshastigheten kring tre axlar – flygkontrollen använder det för stabil attityd",
      "Gyroskopet mäter absolut orientering med hjälp av stjärnor",
      "Gyroskopet mäter lufttrycket och beräknar flyghöjd"
    ],
    correctIndex: 1, image: "imgs/a2_figur_47.png"
  },
  {
    id: 122, category: "chapter11", categoryName: "Fördjupad teknisk kunskap om drönare", level: "A2",
    question: "Vad är en accelerometer i en drönare och vad mäter den?",
    answer: "En sensor som mäter linjär acceleration i tre axlar – används för att beräkna drönarens rörelse och lutning",
    options: [
      "En sensor som mäter rotationshastigheten",
      "En sensor som mäter linjär acceleration i tre axlar – används för rörelse och lutning",
      "En sensor som mäter batteriets urladdningshastighet",
      "En sensor som mäter vindhastigheten framför drönaren"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 123, category: "chapter11", categoryName: "Fördjupad teknisk kunskap om drönare", level: "A2",
    question: "Vad anger C-värdet på ett LiPo-batteri?",
    answer: "Den maximala urladdningshastigheten relativt batteriets kapacitet – ett 5000 mAh 20C-batteri klarar 100A kontinuerligt",
    options: [
      "Batteriets laddningscykelantal innan det behöver bytas",
      "Den maximala urladdningshastigheten relativt kapaciteten – 5000 mAh 20C ger max 100A",
      "Batteriets kapacitet i celsiusgrader",
      "Antalet celler i batteriet"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 124, category: "chapter11", categoryName: "Fördjupad teknisk kunskap om drönare", level: "A2",
    question: "Varför ska LiPo-batterier förvaras på lagringsladdning (ca 50–60%) och inte fulladdat?",
    answer: "Förvaring fulladdat under lång tid skadar cellerna och minskar batteriets livslängd – 50–60% är optimalt",
    options: [
      "Fulladdat förvaring är optimalt och ger längre livslängd",
      "Förvaring fulladdat skadar cellerna och minskar livslängden – 50–60% är optimalt",
      "Batterier ska förvaras helt urladdade för att undvika brand",
      "Lagringsladdning gäller bara vid förvaring mer än ett år"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 125, category: "chapter11", categoryName: "Fördjupad teknisk kunskap om drönare", level: "A2",
    question: "Vad är ett tecken på att ett LiPo-batteri är skadat och inte bör användas?",
    answer: "Uppsvällt (puffat) batteri, synliga sprickor eller bucklor, onormal värmeutveckling eller kraftigt minskad flygtid",
    options: [
      "Batteriet tar längre tid att ladda än vanligt",
      "Uppsvällt batteri, sprickor, bucklor, onormal värme eller kraftigt minskad flygtid",
      "Batteriets yttre etikett har lossnat",
      "Batteriet har ett V-tal som skiljer sig med 0,1V mellan cellerna"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 126, category: "chapter11", categoryName: "Fördjupad teknisk kunskap om drönare", level: "A2",
    question: "Hur fungerar hinderdetektering (obstacle avoidance) på moderna drönare?",
    answer: "Sensorer (stereo-kamera, infraröd, ultraljud eller lidar) detekterar hinder och antingen varnar piloten eller bromsas automatiskt",
    options: [
      "GPS-systemet räknar ut om hinder finns baserat på kartdata",
      "Sensorer som stereo-kamera, IR eller ultraljud detekterar hinder och varnar eller bromsar",
      "Hinderdetektering fungerar bara i GPS-läge och inte i ATTI-läge",
      "Drönaren ringer upp fjärrkontrollens app för manuell bedömning"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 127, category: "chapter11", categoryName: "Fördjupad teknisk kunskap om drönare", level: "A2",
    question: "Vad är en optical flow-sensor och i vilka situationer är den särskilt användbar?",
    answer: "En nedåtpekande kamera som mäter markrörelser för positionshållning – användbar inomhus eller när GPS saknas",
    options: [
      "En sensor som automatiskt justerar kameraobjektivets fokus",
      "En nedåtpekande kamera som mäter markrörelser för positionshållning – bra när GPS saknas",
      "En sensor för att mäta ljusintensiteten i kamerans bild",
      "En sensor som detekterar optisk reflektion från metallytor"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 128, category: "chapter11", categoryName: "Fördjupad teknisk kunskap om drönare", level: "A2",
    question: "Hur påverkar nyttolast (extra last) drönarens tyngdpunkt och varför är det viktigt?",
    answer: "Lasten kan flytta tyngdpunkten bort från centrum – drönaren lutar, kompenserar med mer ström och manövrerbarheten minskar",
    options: [
      "Tyngdpunkten påverkas aldrig av lasten om den monteras korrekt",
      "Last kan flytta tyngdpunkten – drönaren lutar, förbrukar mer ström och manövrerbarheten minskar",
      "Last förbättrar alltid stabiliteten genom lägre tyngdpunkt",
      "Tyngdpunktsförändring spelar bara roll vid vindbyar"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 129, category: "chapter11", categoryName: "Fördjupad teknisk kunskap om drönare", level: "A2",
    question: "Vad är maximal nyttolast och varför bör man hålla god marginal under denna gräns?",
    answer: "Tillverkarens angiven maxlast som drönaren kan lyfta – marginal ger buffert för oförutsedd vind, manövrar och säkrare landning",
    options: [
      "Man bör alltid flyga med maximal last för att utnyttja drönaren fullt",
      "Marginal under maxlast ger buffert för vind, manövrar och säkrare landning",
      "Maximal nyttolast är bara relevant för leveransdrönare",
      "Tillverkarens maxlast inkluderar redan en säkerhetsmarginal om 50%"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 130, category: "chapter11", categoryName: "Fördjupad teknisk kunskap om drönare", level: "A2",
    question: "Vad är ADS-B och hur används det för att öka säkerheten för drönare?",
    answer: "Automatic Dependent Surveillance–Broadcast – sänder och tar emot positionsdata för att se och synas av bemannade luftfartyg",
    options: [
      "Advanced Drone Safety Battery – ett batterisäkerhetssystem",
      "Automatic Dependent Surveillance–Broadcast – sänder/tar emot positionsdata för samexistens med bemannat flyg",
      "Automated Defense System Broadcast – ett militärt system",
      "ADS-B är ett kommunikationsprotokoll enbart för markkontroll"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 131, category: "chapter11", categoryName: "Fördjupad teknisk kunskap om drönare", level: "A2",
    question: "Vad innebär failsafe-inställningen på en RC-sändare?",
    answer: "Den förinställda åtgärd drönaren utför om radiolänken bryts – vanligen RTH, hovring eller kontrollerad landning",
    options: [
      "En extra batteri som aktiveras om det primära batteriet tar slut",
      "Den förinställda åtgärd vid radiolänksbrott – vanligen RTH, hovring eller kontrollerad landning",
      "En låsning av styrdon för att förhindra oavsiktliga kommandon",
      "Automatisk firmware-återställning vid programkrash"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 132, category: "chapter11", categoryName: "Fördjupad teknisk kunskap om drönare", level: "A2",
    question: "Hur beräknar man ungefärlig flygtid baserat på batterikapacitet?",
    answer: "Flygtid ≈ (kapacitet i mAh × 60) / genomsnittligt strömuttag i mA – men alltid flyg med 20–30% marginal kvar",
    options: [
      "Multiplicera batteriets Wh-tal med 10 för att få minuter",
      "Flygtid ≈ (mAh × 60) / genomsnittlig strömförbrukning – flyg alltid med 20–30% marginal",
      "Tillverkarens angiven flygtid är alltid exakt under alla förhållanden",
      "Flygtid = V × Ah direkt utan hänsyn till strömförbrukning"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 133, category: "chapter11", categoryName: "Fördjupad teknisk kunskap om drönare", level: "A2",
    question: "Vad är FPV (First Person View) och vilka begränsningar gäller vid FPV-flygning?",
    answer: "Videoöverföring i realtid till glasögon/skärm för förarperspektiv – i öppna kategorin krävs en observatör som håller visuell kontakt med drönaren",
    options: [
      "FPV ersätter VLOS-kravet helt, piloten kan flyga utan att se drönaren",
      "Videoöverföring i realtid – i öppna kategorin krävs observatör för visuell kontakt",
      "FPV är förbjudet i öppna kategorin och kräver alltid STS-tillstånd",
      "FPV gäller bara för fasta vingar och inte multirotorer"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 134, category: "chapter11", categoryName: "Fördjupad teknisk kunskap om drönare", level: "A2",
    question: "Vad är latens (latency) i ett FPV-system och varför är låg latens viktig?",
    answer: "Fördröjningen mellan verkligheten och vad piloten ser på skärmen – hög latens försvårar korrekt manövrering och reaktion på hinder",
    options: [
      "Bildkvaliteten i FPV-systemet – hög latens ger sämre bild",
      "Fördröjningen mellan verklighet och bild – hög latens försvårar manövrering och hinderreaktion",
      "Signalstyrkan till FPV-mottagaren – hög latens ger bättre räckvidd",
      "Latens är bara ett problem vid flygning mer än 500 meter bort"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 135, category: "chapter11", categoryName: "Fördjupad teknisk kunskap om drönare", level: "A2",
    question: "Hur kan man minska risken för interferens på 2,4 GHz-bandet i tätort?",
    answer: "Byt till 5,8 GHz om drönaren stödjer det, håll sändare och drönare i fri sikt och undvik områden med mycket WiFi",
    options: [
      "Öka sändareffekten till maximum alltid i tätort",
      "Byt till 5,8 GHz om möjligt, håll fri sikt och undvik WiFi-täta områden",
      "Interferens kan aldrig minskas – byt drönare istället",
      "Stäng av drönarens GPS för att frigöra radiokanaler"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 136, category: "chapter11", categoryName: "Fördjupad teknisk kunskap om drönare", level: "A2",
    question: "Vad är Remote ID och vilken information sänder det ut?",
    answer: "Ett system som sänder ut drönarens ID, position, höjd, hastighet och operatörens ID – läsbart av behöriga myndigheter",
    options: [
      "Ett system för att registrera drönaren hos tillverkaren",
      "Sänder drönarens ID, position, höjd, hastighet och operatörens ID till behöriga myndigheter",
      "En intern GPS-logg som sparas på drönaren",
      "Remote ID är ett frivilligt system utan lagkrav"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 137, category: "chapter11", categoryName: "Fördjupad teknisk kunskap om drönare", level: "A2",
    question: "Vad händer i drönaren om IMU-kalibreringen är felaktig?",
    answer: "Drönaren kan ha felaktig uppfattning om sin egen lutning och rörelse – leder till instabilt hovring, oväntade rörelser eller krasch",
    options: [
      "Bara kamerans gimbal påverkas av felaktig IMU",
      "Drönaren missuppfattar sin lutning/rörelse – instabilt hovring, oväntade rörelser eller krasch",
      "Felaktig IMU stänger av GPS-funktionen automatiskt",
      "IMU-fel syns bara i loggar och påverkar inte flyget"
    ],
    correctIndex: 1, image: "imgs/a2_figur_47.png"
  },
  {
    id: 138, category: "chapter11", categoryName: "Fördjupad teknisk kunskap om drönare", level: "A2",
    question: "Vad är en borstlös motor (brushless motor) och varför används den i drönare?",
    answer: "En elmotor utan mekaniska kolborstar – ger högre effektivitet, längre livslängd, lägre underhåll och bättre prestanda än borstmotorer",
    options: [
      "En motor som drivs av tryckluft istället för elektricitet",
      "En elmotor utan kolborstar – effektivare, längre livslängd och lägre underhåll",
      "En motor med inbyggda borstar för självsmörjning",
      "Borstlösa motorer används bara i större drönare över 4 kg"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 139, category: "chapter11", categoryName: "Fördjupad teknisk kunskap om drönare", level: "A2",
    question: "Vad bör piloten göra om batterinivån sjunker snabbare än normalt under ett uppdrag?",
    answer: "Avbryta uppdraget och landa omgående – onormalt snabb urladdning kan tyda på problem med batteriet, hög belastning eller kyla",
    options: [
      "Aktivera strömbesparingsläget och fortsätta",
      "Avbryta och landa omgående – snabb urladdning tyder på batterifel, hög belastning eller kyla",
      "Ringa tillverkarens support för råd",
      "Byta till ATTI-läge för att spara batteri"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 140, category: "chapter11", categoryName: "Fördjupad teknisk kunskap om drönare", level: "A2",
    question: "Vad är skillnaden mellan en multirotordrönares lyftkraft och en fastvingedrönares?",
    answer: "Multirotorn skapar lyft med propellrarna vertikalt och kan hovra; fastvingedrönaren skapar aerodynamiskt lyft via vingarna och måste ha framåtfart",
    options: [
      "Fastvingedrönaren skapar lyft med propellrar och kan hovra",
      "Multirotorn lyfter vertikalt med propellrar och hovrar; fastvinge lyfter aerodynamiskt och måste ha fart",
      "Båda typerna skapar exakt likadant lyft men med olika bränsletyp",
      "Multirotorn är alltid effektivare än fastvingedrönaren"
    ],
    correctIndex: 1, image: "imgs/a2_figur_48.png"
  },

  // ===== KAPITEL 12: MARKRISK (extra frågor) =====
  {
    id: 141, category: "chapter12", categoryName: "Markrisk", level: "A2",
    question: "Vid vilken flyghöjd (enligt 1:1-regeln) ska ett minsta horisontellt avstånd på 50 meter hållas till utomstående?",
    answer: "Vid 50 meters flyghöjd – det horisontella avståndet ska motsvara flyghöjden",
    options: [
      "Vid 25 meters flyghöjd",
      "Vid 50 meters flyghöjd – horisontellt avstånd = flyghöjden",
      "Vid 100 meters flyghöjd",
      "Vid 30 meters flyghöjd"
    ],
    correctIndex: 1, image: "imgs/a2_figur_51.png"
  },
  {
    id: 142, category: "chapter12", categoryName: "Markrisk", level: "A2",
    question: "Vad är det minsta horisontella avstånd som alltid gäller för en C2-drönare oavsett höjd?",
    answer: "Minst 30 meter i normalläge, eller minst 5 meter i låghastighetläge (max 3 m/s)",
    options: [
      "Minst 10 meter alltid",
      "Minst 30 meter i normalläge eller 5 meter i låghastighetläge",
      "Minst 50 meter alltid oavsett höjd och hastighet",
      "Ingen minimigräns – 1:1-regeln räcker"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 143, category: "chapter12", categoryName: "Markrisk", level: "A2",
    question: "Vad innebär låghastighetläget på en C2-drönare och hur aktiveras det?",
    answer: "Ett läge som begränsar drönarens hastighet till max 3 m/s – aktiveras via fjärrkontrollen eller drönarens app",
    options: [
      "Ett automatiskt läge som aktiveras av drönaren när den detekterar folk",
      "Begränsar hastigheten till max 3 m/s – aktiveras via fjärrkontrollen eller appen",
      "Ett nödläge som aktiveras av flygkontrollen vid batteri under 20%",
      "Låghastighetläget begränsar höjden till max 30 meter"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 144, category: "chapter12", categoryName: "Markrisk", level: "A2",
    question: "Varför är låghastighetläget viktigt för markriskminskning nära utomstående?",
    answer: "Lägre hastighet ger kortare bromsträcka och minskar kinetisk energi vid eventuell kollision – ger piloten mer reaktionstid",
    options: [
      "Låghastighetläget minskar bara batteriförbrukningen",
      "Kortare bromsträcka och lägre kinetisk energi vid kollision – mer reaktionstid för piloten",
      "Låghastighetläget är bara viktigt för att hålla VLOS",
      "Låg hastighet ökar markrisken eftersom drönaren är lättare att träffa"
    ],
    correctIndex: 1, image: "imgs/a2_figur_50.png"
  },
  {
    id: 145, category: "chapter12", categoryName: "Markrisk", level: "A2",
    question: "Vad är kinetisk energi och hur beräknas den vid en drönarincident?",
    answer: "Rörelseenergi: Ek = ½mv² – en tyngre och snabbare drönare har väsentligt högre skadepotential vid kollision",
    options: [
      "Energi lagrad i batteriet: Ek = kapacitet × spänning",
      "Rörelseenergi: Ek = ½mv² – tyngre och snabbare drönare har högre skadepotential",
      "Kinetisk energi är inte relevant för riskbedömning av drönare",
      "Ek = massa × höjd – beror bara på flyghöjden"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 146, category: "chapter12", categoryName: "Markrisk", level: "A2",
    question: "Är det tillåtet att flyga en C2-drönare direkt över utomstående personers huvuden?",
    answer: "Nej – C2-drönare får inte flyga direkt över utomstående. Minimalt horisontellt avstånd ska alltid hållas",
    options: [
      "Ja, om piloten håller under 30 meters höjd",
      "Nej – C2 får inte flyga direkt över utomstående, horisontellt avstånd ska alltid hållas",
      "Ja, om låghastighetläget är aktiverat",
      "Ja, om utomstående är informerade och bär skyddshjälm"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 147, category: "chapter12", categoryName: "Markrisk", level: "A2",
    question: "Vad menas med att ett område är 'glesbefolkat' i sammanhanget för A2-drönarregler?",
    answer: "Ett område där inga eller mycket få människor normalt vistas och där oförutsedda utomstående är osannolika",
    options: [
      "Ett område utanför EU:s tätortsgränser",
      "Område där inga eller mycket få människor normalt vistas och utomstående är osannolika",
      "Vilket område som helst med mindre än 1000 invånare per km²",
      "Glesbefolkat är bara en formell kommunklassning från SCB"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 148, category: "chapter12", categoryName: "Markrisk", level: "A2",
    question: "Hur bör en A2-pilot hantera situationen om en oväntad folksamling uppstår under pågående uppdrag?",
    answer: "Omedelbart manövrera drönaren bort från folksamlingen, öka höjden eller landa – säkerhetsavstånd ska alltid hållas",
    options: [
      "Fortsätta uppdraget om folksamlingen är tillfällig",
      "Omedelbart manövrera bort, öka höjden eller landa – säkerhetsavstånd ska alltid hållas",
      "Be folksamlingen flytta på sig via megafon",
      "Aktivera hinderdetektering och låta drönaren sköta det automatiskt"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 149, category: "chapter12", categoryName: "Markrisk", level: "A2",
    question: "Vad innebär riskbedömning inför ett A2-uppdrag?",
    answer: "Systematisk genomgång av miljö, befolkningstäthet, hinder, väder, drönarens skick och nödåtgärder – dokumenteras vid komplexa uppdrag",
    options: [
      "Bara kontrollera att drönaren har fullt batteri",
      "Systematisk genomgång av miljö, befolkning, hinder, väder och nödåtgärder",
      "Fråga lokalbefolkningen om det är OK att flyga",
      "Riskbedömning krävs bara i specifik kategori, inte A2"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 150, category: "chapter12", categoryName: "Markrisk", level: "A2",
    question: "Hur minskar en parachute (fallskärm) på drönaren markrisken?",
    answer: "Bromsar fallet vid motorfel så att nedslagshastigheten och den kinetiska energin minskar kraftigt – minskar skaderisk vid olycka",
    options: [
      "Fallskärmen förhindrar att drönaren faller helt",
      "Bromsar fallet vid motorfel – nedslagshastighet och kinetisk energi minskar kraftigt",
      "Fallskärmen aktiveras automatiskt av GPS vid avvikelse från rutt",
      "Fallskärm är bara godkänt i specifik kategori, inte öppen"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 151, category: "chapter12", categoryName: "Markrisk", level: "A2",
    question: "Vad är skillnaden i markrisk mellan en 500 g drönare och en 4 kg drönare vid samma höjd och hastighet?",
    answer: "4 kg-drönaren har 8 gånger mer kinetisk massa – väsentligt större skadepotential och kräver striktare marginaler",
    options: [
      "Skillnaden är försumbar om båda flyger under 120 meter",
      "4 kg-drönaren har 8 gånger mer massa – väsentligt större skadepotential och kräver striktare marginaler",
      "Tyngre drönare är alltid säkrare eftersom de är mer stabila",
      "Markrisken beror bara på hastigheten, inte vikten"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 152, category: "chapter12", categoryName: "Markrisk", level: "A2",
    question: "Varför är det farligare att flyga över folksamlingar (t.ex. konserter, marknader) även om man håller 120 meters höjd?",
    answer: "Stor täthet av utomstående ökar dramatiskt sannolikheten att någon träffas vid en olycka – och man kan inte hålla 1:1-avstånd",
    options: [
      "Det är inte farligare – 120 meter är alltid säkert",
      "Stor täthet utomstående ökar sannolikheten att någon träffas och man kan inte hålla 1:1-avstånd",
      "Det är bara farligare vid regn eller mörker",
      "Folksamlingar är bara ett problem under 30 meters höjd"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 153, category: "chapter12", categoryName: "Markrisk", level: "A2",
    question: "Vad innebär vertikal markrisk kontra horisontell markrisk?",
    answer: "Vertikal risk: drönaren faller rakt ned; horisontell risk: drönaren slungas iväg vid krasch – bägge riktningarna måste beaktas vid planering",
    options: [
      "Det finns bara en typ av markrisk – nedåt",
      "Vertikal = faller rakt ned; horisontell = slungas iväg vid krasch – båda beaktas",
      "Horisontell markrisk uppstår bara vid medvind",
      "Vertikal markrisk gäller bara multirotorer, horisontell bara fastvinge"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 154, category: "chapter12", categoryName: "Markrisk", level: "A2",
    question: "Hur kan operatören minska markrisken utan att sänka flyghöjden?",
    answer: "Spärra av området under flygvägen, välja tidpunkt med färre utomstående, flyga längs gator istället för över tak, och använda låghastighetläge",
    options: [
      "Aktivera autopilot och hoppas att systemen hanterar det",
      "Spärra av under flygvägen, välja tidpunkt med färre folk, flyga längs gator och använda låghastighetläge",
      "Minska flygtiden till max 5 minuter",
      "Informera kommunen skriftligen en vecka i förväg"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 155, category: "chapter12", categoryName: "Markrisk", level: "A2",
    question: "Vad är bromsträckan beroende av och varför är det relevant vid flygning nära utomstående?",
    answer: "Drönarens hastighet, massa och motorrespons – hög fart och tung drönare ger lång bromsträcka och risk att inte hinna stanna",
    options: [
      "Bromsträckan beror bara på batterinivån",
      "Hastighet, massa och motorrespons – hög fart och tung drönare ger lång bromsträcka",
      "Bromsträckan är alltid konstant för en given drönarmodell",
      "Bromsträckan är bara relevant vid landning, inte under uppdrag"
    ],
    correctIndex: 1, image: "imgs/a2_figur_50.png"
  },
  {
    id: 156, category: "chapter12", categoryName: "Markrisk", level: "A2",
    question: "Vad ska en A2-pilot göra om drönaren börjar drifta mot utomstående personer på grund av vind?",
    answer: "Omedelbart kompensera med motstyrning eller öka höjden – om kontrollen inte kan återtas, landa snarast på säker plats",
    options: [
      "Vänta på att drönaren korrigerar sig via GPS",
      "Omedelbart kompensera med motstyrning eller höj – om kontroll ej återtas, landa snarast",
      "Aktivera RTH och vänta på att drönaren åker hem",
      "Skrika varning till personerna och hoppas på det bästa"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 157, category: "chapter12", categoryName: "Markrisk", level: "A2",
    question: "Vilken effekt har hög flyghastighet på 1:1-regelns tillämpning?",
    answer: "Hög hastighet ökar bromsträckan – piloten måste hålla ett större faktiskt avstånd än vad höjden ensam anger för att säkert kunna stanna",
    options: [
      "Hög hastighet minskar 1:1-kravet eftersom drönaren passerar snabbt",
      "Hög hastighet ökar bromsträckan – faktiskt avstånd måste vara större än höjden anger",
      "Hastigheten påverkar inte 1:1-regeln – enbart höjden räknas",
      "1:1-regeln gäller bara i låghastighetläge"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 158, category: "chapter12", categoryName: "Markrisk", level: "A2",
    question: "Vad är skillnaden i riskbedömning mellan ett uppdrag i industriområde och i ett bostadsområde?",
    answer: "Industriområde har normalt sett färre utomstående och lägre markrisk; bostadsområde har fler utomstående och kräver striktare avstånd och lägre höjd",
    options: [
      "Industriområde är alltid förbjudet för A2-drönare",
      "Industriområde – färre utomstående och lägre risk; bostadsområde – fler folk och kräver striktare åtgärder",
      "Riskbedömningen är identisk i alla typer av bebyggda områden",
      "Bostadsområde är alltid säkrare eftersom det finns fler som kan larma"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 159, category: "chapter12", categoryName: "Markrisk", level: "A2",
    question: "Vad ska noteras om ansvaret om en utomstående person skadas under en A2-operation?",
    answer: "Fjärrpiloten och UAS-operatören är juridiskt ansvariga – ansvarsförsäkring är obligatorisk och skadeståndsskyldighet kan uppstå",
    options: [
      "Tillverkaren är alltid ansvarig vid drönarolyckor",
      "Fjärrpiloten och operatören är juridiskt ansvariga – ansvarsförsäkring obligatorisk",
      "Ingen kan hållas ansvarig om drönaren flyger lagligt",
      "Kommunen är ansvarig om de inte förbjöd flygningen"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 160, category: "chapter12", categoryName: "Markrisk", level: "A2",
    question: "Vad innebär 'konsekvensreducerande åtgärder' i samband med markrisk?",
    answer: "Åtgärder som minskar skadans storlek om något går fel – t.ex. fallskärm, airbag, låghastighetläge och avspärrning",
    options: [
      "Åtgärder för att förhindra att olyckan inträffar",
      "Åtgärder som minskar skadans storlek om något går fel – fallskärm, airbag, låghastighetläge, avspärrning",
      "Åtgärder efter olyckan för att minimera mediauppmärksamhet",
      "Försäkringsrelaterade åtgärder för att sänka premien"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 161, category: "chapter12", categoryName: "Markrisk", level: "A2",
    question: "Varför ökar markrisken vid flygning längs med en väg i stad jämfört med ovanför en park?",
    answer: "Vägar har ständigt rörliga utomstående (fotgängare, cyklister, fordon) som är svårare att kontrollera avstånd till",
    options: [
      "Vägar är alltid säkrare eftersom folk ser åt sidan",
      "Vägar har ständigt rörliga utomstående som är svårare att hålla avstånd till",
      "Parker har alltid fler utomstående än vägar",
      "Markrisken är identisk längs väg och i park"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 162, category: "chapter12", categoryName: "Markrisk", level: "A2",
    question: "Vad är syftet med att avspärra ett område vid en planerad A2-operation?",
    answer: "Säkerställa att inga utomstående befinner sig under eller nära flygzonen – gör området till ett 'kontrollerat markområde'",
    options: [
      "Skydda drönaren från att bli stulen",
      "Säkerställa att inga utomstående är under flygzonen – skapar kontrollerat markområde",
      "Uppfylla kommunens krav på bygglov vid filmning",
      "Avspärrning är bara nödvändig om man flyger mer än 60 meter högt"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 163, category: "chapter12", categoryName: "Markrisk", level: "A2",
    question: "Hur tillämpas 1:1-regeln om drönaren flyger på 80 meters höjd?",
    answer: "Det horisontella avståndet till närmaste utomstående ska vara minst 80 meter",
    options: [
      "Det horisontella avståndet ska vara minst 40 meter (hälften av höjden)",
      "Det horisontella avståndet ska vara minst 80 meter",
      "Det horisontella avståndet ska vara minst 120 meter",
      "1:1-regeln gäller inte vid höjder över 60 meter"
    ],
    correctIndex: 1, image: "imgs/a2_figur_51.png"
  },
  {
    id: 164, category: "chapter12", categoryName: "Markrisk", level: "A2",
    question: "Vad bör en A2-pilot göra om drönaren förlorar GPS-signal nära utomstående?",
    answer: "Manuellt ta kontroll i ATTI-läge, hålla drönaren stabil och landa omgående på säker plats bort från utomstående",
    options: [
      "Vänta tills GPS-signalen återkommer utan att röra styrspakarna",
      "Manuellt ta kontroll i ATTI-läge, stabilisera och landa omgående på säker plats",
      "Aktivera RTH-funktionen – den fungerar utan GPS",
      "Öka höjden för att förbättra GPS-mottagningen"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 165, category: "chapter12", categoryName: "Markrisk", level: "A2",
    question: "Vad är skillnaden i tillämpning av 1:1-regeln i låghastighetläge jämfört med normalläge?",
    answer: "I låghastighetläge minskas minimikravet från 30 meter till 5 meter horisontellt – 1:1-regelns höjdkrav gäller fortfarande",
    options: [
      "I låghastighetläge behöver man inte följa 1:1-regeln alls",
      "Minimikrav minskar från 30 till 5 meter horisontellt – 1:1-regelns höjdkrav gäller fortfarande",
      "Låghastighetläget ersätter helt 1:1-regeln",
      "I låghastighetläge ökar minimiavståndet till 50 meter"
    ],
    correctIndex: 1, image: null
  },
  {
    id: 166, category: "chapter12", categoryName: "Markrisk", level: "A2",
    question: "Vad bör ingå i en nödplanering inför ett A2-uppdrag?",
    answer: "Identifiera nödlandningsplatser, planera nödstopp-procedur, veta hur man kontaktar räddningstjänst och ha koll på närmaste sjukhus",
    options: [
      "Bara ha tillverkarens kundtjänstnummer tillgängligt",
      "Identifiera nödlandningsplatser, nödstopp-procedur, räddningstjänst och närmaste sjukhus",
      "Nödplanering krävs bara för uppdrag längre än 30 minuter",
      "Det räcker att aktivera RTH som enda nödplan"
    ],
    correctIndex: 1, image: null
  }
];

