// ─────────────────────────────────────────
// DATI: programmazione settimanale
// ─────────────────────────────────────────

const programma = {
  1: { nome: "G1 — Push", sottotitolo: "Petto · Spalle · Tricipiti", durata: "~65 min", tipo: "palestra" },
  2: { nome: "Norwegian", sottotitolo: "Interval training VO2max", durata: "~45 min", tipo: "corsa" },
  3: null, // riposo
  4: { nome: "Corsa Easy", sottotitolo: "Base aerobica · Zona 2", durata: "~50 min", tipo: "corsa" },
  5: { nome: "G2 — Pull", sottotitolo: "Schiena · Bicipiti", durata: "~60 min", tipo: "palestra" },
  6: { nome: "G3 — Legs", sottotitolo: "Gambe · Glutei · Polpacci", durata: "~65 min", tipo: "palestra" },
  0: null  // riposo
};

// ─────────────────────────────────────────
// DATI: schede di allenamento
// ─────────────────────────────────────────

const schede = {

  "g1": {
    id: "g1",
    nome: "G1 — Push",
    sottotitolo: "Petto · Spalle · Tricipiti",
    durata: "~65 min",
    tipo: "palestra",
    riscaldamento: [
      { nome: "Cardio leggero", dose: "5 min", note: "Camminata veloce o pedalata leggera" },
      { nome: "Circonduzione delle braccia", dose: "10+10 / braccio", note: "Cerchi ampi, partendo piccoli e allargando" },
      { nome: "Shoulder dislocations (asciugamano)", dose: "10 rip", note: "Presa larga, porta il telo da davanti sopra la testa e dietro la schiena" },
      { nome: "Rotazione esterna delle spalle", dose: "15 rip / braccio", note: "Gomito a 90° al fianco, ruota l'avambraccio verso l'esterno" }
    ],
    esercizi: [
      { nome: "Panca piana manubri ★", muscolo: "Pettorali", serie: "12×10 — 10×10 — 10×12 — 8×12", riposo: "90 sec" },
      { nome: "Panca inclinata manubri", muscolo: "Pett. superiori", serie: "10×10 — 10×10 — 8×12", riposo: "90 sec" },
      { nome: "Croci ai cavi alti", muscolo: "Pettorali", serie: "12×7,5 — 12×7,5 — 12×7,5", riposo: "60 sec" },
      { nome: "Military press multipower", muscolo: "Spalle", serie: "12×10 — 10×15 — 10×15 — 8×20", riposo: "90 sec" },
      { nome: "Shrugs con manubri", muscolo: "Trapezi", serie: "15×14 — 15×14 — 15×14", riposo: "60 sec" },
      { nome: "Alzate laterali in piedi", muscolo: "Deltoide laterale", serie: "15×6 — 12×7 — 12×8", riposo: "60 sec" },
      { nome: "Estensione al cavo alto", muscolo: "Tricipiti", serie: "12×17,5 — 12×17,5", riposo: "60 sec" },
      { nome: "French press panca piana", muscolo: "Tricipiti", serie: "12×6 — 10×7 — 10×8", riposo: "75 sec" },
      { nome: "Face pull al cavo con corda ★", muscolo: "Delt. post. / Rotatori", serie: "15×7,5 — 15×7,5 — 15×10", riposo: "60 sec" }
    ],
    addominali: [
      { nome: "Plank", serie: "3 × 40 sec", riposo: "30 sec" },
      { nome: "Side bend con manubrio", serie: "3 × 15 rip · 6 kg", riposo: "30 sec" }
    ],
    defaticamento: [
      { nome: "Pec stretch al muro", durata: "35 sec/lato", note: "Palmo e avambraccio al muro con gomito a 90°, ruota il busto dall'altra parte" },
      { nome: "Cross-body shoulder stretch", durata: "30 sec/lato", note: "Braccio teso attraverso il petto, tienilo fermo con l'altro braccio" },
      { nome: "Overhead tricep stretch", durata: "30 sec/lato", note: "Porta un gomito dietro la testa, usa l'altra mano per spingerlo verso il basso" }
    ]
  },

  "g2": {
    id: "g2",
    nome: "G2 — Pull",
    sottotitolo: "Schiena · Bicipiti",
    durata: "~60 min",
    tipo: "palestra",
    riscaldamento: [
      { nome: "Cardio leggero", dose: "5 min", note: "Camminata veloce o pedalata leggera" },
      { nome: "Rotazione toracica seduto", dose: "10 per lato", note: "Seduto su panca, mani dietro la testa, ruota solo il busto" },
      { nome: "Shoulder dislocations (asciugamano)", dose: "10 rip", note: "Come G1" }
    ],
    nota_pre: "Prima di iniziare: 1–2 serie di riscaldamento alla lat machine con 15 kg.",
    esercizi: [
      { nome: "Lat machine avanti", muscolo: "Dorsali / Bicipiti", serie: "10×30 — 10×35 — 10×35 — 8×40", riposo: "90 sec" },
      { nome: "Rematore dorsy bench", muscolo: "Dorsali / Spalle", serie: "12×15 — 10×20 — 10×20 — 8×25", riposo: "90 sec" },
      { nome: "Pulley basso trazibar", muscolo: "Dorsali", serie: "15×20 — 12×25 — 12×30", riposo: "75 sec" },
      { nome: "Hyperextension", muscolo: "Lombari", serie: "15×BW — 15×BW — 15×BW", riposo: "60 sec", nota: "Quando 3×15 BW è facile, tieni un disco da 5 kg al petto." },
      { nome: "Curl alternato manubri", muscolo: "Bicipiti", serie: "12×7 — 10×8 — 10×8 — 8×9", riposo: "75 sec" },
      { nome: "Curl hammer al cavo basso", muscolo: "Bicipiti / Avambracci", serie: "12×12 — 12×12 — 12×12", riposo: "60 sec" }
    ],
    addominali: [
      { nome: "Crunch machine", serie: "3 × 20 rip · 15 kg", riposo: "30 sec" },
      { nome: "V-sit up su panca", serie: "3 × 15 rip", riposo: "30 sec" }
    ],
    defaticamento: [
      { nome: "Child's pose", durata: "45 sec", note: "Inginocchiato, porta i glutei verso i talloni, allunga le braccia in avanti" },
      { nome: "Bicep stretch", durata: "30 sec/braccio", note: "Braccio teso verso il basso, palmo verso l'esterno con le dita in giù" },
      { nome: "Ginocchia al petto", durata: "35 sec", note: "Sdraiato, abbraccia entrambe le ginocchia — dondola da lato a lato" }
    ]
  },

  "g3": {
    id: "g3",
    nome: "G3 — Legs",
    sottotitolo: "Gambe · Glutei · Polpacci",
    durata: "~65 min",
    tipo: "palestra",
    riscaldamento: [
      { nome: "Cardio leggero", dose: "5 min", note: "Camminata veloce o pedalata leggera" },
      { nome: "Leg swings frontali", dose: "12 / gamba", note: "Tieniti a un appoggio, dondola la gamba avanti e indietro" },
      { nome: "Leg swings laterali", dose: "12 / gamba", note: "Stesso appoggio, movimento laterale" },
      { nome: "Hip circles", dose: "10 per lato", note: "Mani sui fianchi, ruota i fianchi in cerchio ampio" },
      { nome: "Squat a corpo libero", dose: "15 rip", note: "Piedi larghezza spalle, cosce parallele, busto eretto" },
      { nome: "Affondi camminando", dose: "8 / gamba", note: "Passo lungo in avanti, ginocchio posteriore quasi a terra" }
    ],
    esercizi: [
      { nome: "Hack squat", muscolo: "Quadricipiti / Glutei", serie: "10×30 — 10×40 — 10×40 — 8×50", riposo: "90 sec" },
      { nome: "Leg press piedi alti e larghi ★", muscolo: "Femorali / Glutei", serie: "12×40 — 10×60 — 10×60", riposo: "90 sec", nota: "Prime 2 sessioni: 40 kg su tutte le serie." },
      { nome: "Hip thrust ★", muscolo: "Glutei", serie: "12×BW — 12×BW — 12×BW", riposo: "75 sec", nota: "Prime 2 sessioni solo BW. Dalla 3ª: bilanciere 20 kg con pad sul bacino." },
      { nome: "Leg extension monopodalica", muscolo: "Quadricipiti", serie: "12×15 — 12×15 — 12×15", riposo: "60 sec" },
      { nome: "Leg curl", muscolo: "Femorali", serie: "12×25 — 12×30 — 10×30", riposo: "75 sec" },
      { nome: "Calf alla pressa orizzontale", muscolo: "Polpacci (gastrocnemio)", serie: "20×80 — 15×90 — 12×100", riposo: "60 sec" },
      { nome: "Calf machine seduto", muscolo: "Polpacci (soleo)", serie: "12×20 — 12×30 — 12×30", riposo: "60 sec" }
    ],
    addominali: [
      { nome: "Plank", serie: "3 × 40 sec", riposo: "30 sec" },
      { nome: "Crunch gambe su panca", serie: "3 × 15 rip", riposo: "30 sec" }
    ],
    defaticamento: [
      { nome: "Hip flexor lunge", durata: "45 sec/lato", note: "Ginocchio a terra, piede avanti a 90°, spingi i fianchi in avanti e in basso" },
      { nome: "Hamstring stretch", durata: "35 sec/lato", note: "Seduto, una gamba tesa, inclinati in avanti con la schiena dritta" },
      { nome: "Piriforme stretch (figura 4)", durata: "45 sec/lato", note: "Sdraiato, incrocia una caviglia sul ginocchio opposto, porta le gambe al petto" },
      { nome: "Gastrocnemio al muro", durata: "30 sec/lato", note: "Piede indietro con gamba tesa e tallone a terra" },
      { nome: "Soleo al muro", durata: "30 sec/lato", note: "Stessa posizione, piega leggermente il ginocchio posteriore" }
    ]
  },

  "norwegian": {
    id: "norwegian",
    nome: "Norwegian Workout",
    sottotitolo: "Interval training · VO2max",
    durata: "~45 min",
    tipo: "corsa",
    riscaldamento: [
      { nome: "Camminata veloce", dose: "3 min", note: "" },
      { nome: "Jogging leggero", dose: "5 min", note: "Ritmo 7:30–8:00 min/km" },
      { nome: "Strides", dose: "2 volte", note: "Accelera per 20 sec fino a ~5:30/km, poi cammina 40 sec" }
    ],
    esercizi: [
      { nome: "Intervallo 1", muscolo: "Build 2' → Max 2' → Walk 2'", serie: "HR build: 145–160 bpm · HR max: >168 bpm", riposo: "Camminata 2 min inclusa" },
      { nome: "Intervallo 2", muscolo: "Build 2' → Max 2' → Walk 2'", serie: "HR build: 145–160 bpm · HR max: >168 bpm", riposo: "Camminata 2 min inclusa" },
      { nome: "Intervallo 3", muscolo: "Build 2' → Max 2' → Walk 2'", serie: "HR build: 145–160 bpm · HR max: >168 bpm", riposo: "Camminata 2 min inclusa" },
      { nome: "Intervallo 4", muscolo: "Build 2' → Max 2' → Walk 2'", serie: "HR build: 145–160 bpm · HR max: >168 bpm", riposo: "Camminata 2 min inclusa" }
    ],
    defaticamento: [
      { nome: "Camminata lenta", durata: "3–5 min", note: "Non fermarti di botto dopo l'ultimo intervallo" },
      { nome: "Quad in piedi", durata: "40 sec/lato", note: "Tallone verso il gluteo, inclina il busto in avanti" },
      { nome: "Hamstring — piede sulla macchina", durata: "35 sec/lato", note: "Piede su paraurti o cofano, gamba tesa, inclinati in avanti" },
      { nome: "Gastrocnemio contro la macchina", durata: "30 sec/lato", note: "Piede indietro con gamba tesa e tallone a terra" },
      { nome: "Soleo contro la macchina", durata: "30 sec/lato", note: "Stessa posizione, piega leggermente il ginocchio posteriore" }
    ]
  },

  "easy": {
    id: "easy",
    nome: "Corsa Easy",
    sottotitolo: "Base aerobica · Zona 2",
    durata: "~50 min",
    tipo: "corsa",
    riscaldamento: [
      { nome: "Camminata veloce", dose: "3 min", note: "" },
      { nome: "Leg swings frontali", dose: "10 / gamba", note: "" },
      { nome: "Leg swings laterali", dose: "10 / gamba", note: "" },
      { nome: "Hip circles", dose: "8 / lato", note: "" }
    ],
    esercizi: [
      { nome: "Corsa continua", muscolo: "Cardio", serie: "40 min", riposo: "—", nota: "Media 128–135 bpm · Allarme a 140 bpm · Ritmo ~7:45–8:00 min/km in estate" }
    ],
    defaticamento: [
      { nome: "Quad in piedi", durata: "30 sec/lato", note: "Tallone verso il gluteo, appoggiati alla macchina se serve" },
      { nome: "Hamstring — piede sulla macchina", durata: "30 sec/lato", note: "Piede su paraurti o cofano, gamba tesa" },
      { nome: "Gastrocnemio contro la macchina", durata: "30 sec/lato", note: "Piede indietro con gamba tesa e tallone a terra" },
      { nome: "Soleo contro la macchina", durata: "30 sec/lato", note: "Stessa posizione, piega leggermente il ginocchio posteriore" }
    ]
  }

};

// ─────────────────────────────────────────
// GUIDE AGLI ESERCIZI
// ─────────────────────────────────────────

const guide = {

  "Shrugs con manubri": {
    muscoli: "Trapezio superiore · Elevatore della scapola",
    esecuzione: "In piedi con un manubrio per mano ai lati del corpo, braccia tese e palmi rivolti verso le cosce. Solleva le spalle in linea retta verso le orecchie, tieni 1 secondo in alto contraendo i trapezi, poi scendi lentamente fino ad abbassare bene le spalle.",
    postura: "Busto eretto, sguardo in avanti, collo lungo e rilassato. Le braccia restano tese per tutto il movimento e i manubri rimangono ai lati delle cosce, non davanti al corpo.",
    errori: "Ruotare le spalle in avanti o indietro: il movimento è solo su e giù. Piegare i gomiti e aiutarsi con i bicipiti. Spingere la testa in avanti. Usare un peso troppo alto, che costringe ad accorciare la corsa o a dare slancio con le gambe. Scendere di colpo senza controllo."
  },

  "Side bend con manubrio": {
    muscoli: "Obliqui · Quadrato dei lombi",
    esecuzione: "In piedi, piedi alla larghezza delle spalle, un solo manubrio in una mano lungo la gamba e l'altra mano sul fianco o dietro la testa. Inclina il busto di lato verso il manubrio, facendolo scendere vicino alla coscia fino a sentire lo stiramento sul fianco, poi risali contraendo gli obliqui del lato opposto. Le ripetizioni si fanno per lato: finite quelle di un lato cambia mano.",
    postura: "Bacino e gambe fermi, busto sempre sullo stesso piano senza piegarsi avanti o indietro. Sguardo avanti, testa in linea con la colonna, addome leggermente contratto. Respira con regolarità.",
    errori: "Ruotare il busto invece di piegarlo di lato. Spingere il fianco in fuori o piegare le ginocchia. Dondolare il manubrio e usare lo slancio. Usare due manubri insieme: i pesi si annullano a vicenda e il lavoro sugli obliqui si perde. Andare oltre l'ampiezza che riesci a controllare."
  },

  "Pec stretch al muro": {
    muscoli: "Pettorali · Deltoide anteriore",
    esecuzione: "In piedi di fianco a un muro, appoggia palmo e avambraccio con il gomito a 90° all'altezza della spalla. Ruota lentamente il busto dalla parte opposta fino a sentire lo stiramento sul petto e sulla parte anteriore della spalla. Mantieni e respira.",
    postura: "Spalla bassa, lontana dall'orecchio, busto eretto, bacino fermo. Lo stiramento deve essere deciso ma mai doloroso.",
    errori: "Alzare la spalla verso l'orecchio. Spingere troppo fino a sentire fastidio nell'articolazione della spalla. Fare rimbalzi. Trattenere il respiro."
  },

  "Cross-body shoulder stretch": {
    muscoli: "Deltoide posteriore · Muscoli attorno alla scapola",
    esecuzione: "In piedi, porta un braccio teso davanti al petto, in orizzontale. Con l'altro braccio tienilo vicino al corpo, appena sopra o sotto il gomito, e accompagnalo delicatamente verso il petto.",
    postura: "Spalle basse e rilassate, busto eretto, sguardo avanti. Il braccio resta all'altezza della spalla.",
    errori: "Alzare la spalla verso l'orecchio. Ruotare il busto per aumentare lo stiramento. Premere direttamente sull'articolazione del gomito invece che sul braccio."
  },

  "Overhead tricep stretch": {
    muscoli: "Tricipiti · Parte alta dei dorsali",
    esecuzione: "In piedi o seduto, porta un braccio sopra la testa e piega il gomito, con la mano che scende dietro la nuca tra le scapole. Con l'altra mano spingi delicatamente il gomito verso il basso e indietro.",
    postura: "Busto eretto, addome leggermente contratto, testa in posizione neutra. Il gomito resta puntato verso l'alto.",
    errori: "Spingere la testa in avanti. Inarcare la zona lombare. Tirare il gomito con troppa forza."
  },

  "Child's pose": {
    muscoli: "Dorsali · Lombari · Glutei",
    esecuzione: "Inginocchiato, porta i glutei verso i talloni e allunga le braccia in avanti sul pavimento, con la fronte appoggiata a terra. Respira lentamente nell'addome e lascia che la schiena si allunghi.",
    postura: "Ginocchia leggermente aperte, braccia lunghe, spalle rilassate lontano dalle orecchie.",
    errori: "Forzare i glutei verso i talloni se il ginocchio dà fastidio: apri di più le ginocchia o metti un cuscino dietro di esse. Sollevare le spalle. Trattenere il respiro."
  },

  "Bicep stretch": {
    muscoli: "Bicipiti · Flessori dell'avambraccio",
    esecuzione: "Tieni un braccio completamente teso lungo il fianco, con il palmo rivolto verso l'esterno e le dita verso il basso. Con l'altra mano spingi delicatamente il palmo all'indietro finché senti lo stiramento nel bicipite e nell'avambraccio.",
    postura: "Gomito teso ma non bloccato con forza, spalla bassa e busto eretto.",
    errori: "Piegare il gomito. Alzare la spalla. Spingere con forza invece di aumentare lo stiramento gradualmente."
  },

  "Ginocchia al petto": {
    muscoli: "Lombari · Glutei",
    esecuzione: "Sdraiato sulla schiena, abbraccia entrambe le ginocchia e portale verso il petto. Dondola lentamente da un lato all'altro, restando rilassato.",
    postura: "Testa e spalle appoggiate a terra, collo lungo, respiro regolare.",
    errori: "Tirare le ginocchia con troppa forza. Sollevare la testa e le spalle. Trattenere il respiro."
  },

  "Hip flexor lunge": {
    muscoli: "Flessori dell'anca · Quadricipiti",
    esecuzione: "Ginocchio posteriore a terra (se serve su un cuscino), piede anteriore avanti con il ginocchio a 90°. Spingi il bacino in avanti e leggermente in basso mantenendo il busto eretto, finché senti lo stiramento nella parte anteriore dell'anca posteriore.",
    postura: "Busto alto, addome e gluteo posteriore contratti, bacino in leggera retroversione.",
    errori: "Inarcare la zona lombare per scendere di più. Inclinare il busto in avanti. Spostare il ginocchio anteriore oltre la punta del piede perdendo l'allineamento."
  },

  "Hamstring stretch": {
    muscoli: "Femorali",
    esecuzione: "Seduto a terra con una gamba tesa e l'altra piegata. Inclinati in avanti dall'anca verso il piede della gamba tesa, tenendo la schiena lunga, finché senti lo stiramento dietro la coscia.",
    postura: "Punta del piede rivolta verso l'alto, ginocchio disteso ma non bloccato, petto aperto.",
    errori: "Arrotondare la schiena per arrivare più lontano. Fare rimbalzi. Bloccare il ginocchio con forza."
  },

  "Piriforme stretch (figura 4)": {
    muscoli: "Piriforme · Glutei profondi",
    esecuzione: "Sdraiato sulla schiena con le ginocchia piegate, incrocia una caviglia sopra il ginocchio opposto a formare un 4. Porta poi entrambe le gambe verso il petto, tenendo la coscia con le mani, finché senti uno stiramento profondo nel gluteo della gamba incrociata.",
    postura: "Testa e spalle a terra, il piede della gamba incrociata resta flesso per proteggere il ginocchio.",
    errori: "Tirare con troppa forza sul ginocchio. Sollevare la schiena da terra. Lasciare il piede rilassato e il ginocchio storto."
  },

  "Gastrocnemio al muro": {
    muscoli: "Polpaccio (gastrocnemio)",
    esecuzione: "Mani al muro, un piede avanti e uno indietro. La gamba posteriore resta tesa con il tallone a terra e il piede dritto in avanti. Piega il ginocchio anteriore e spingi il bacino verso il muro finché senti lo stiramento nella parte alta del polpaccio posteriore.",
    postura: "Busto e gamba posteriore in linea, tallone sempre appoggiato, punta del piede in avanti.",
    errori: "Sollevare il tallone. Ruotare il piede verso l'esterno. Fare rimbalzi."
  },

  "Soleo al muro": {
    muscoli: "Polpaccio profondo (soleo)",
    esecuzione: "Stessa posizione del gastrocnemio, ma con il ginocchio posteriore leggermente piegato e il tallone sempre a terra. Porta il peso in avanti abbassando un poco il bacino finché senti lo stiramento più in basso nel polpaccio, vicino al tendine d'Achille.",
    postura: "Tallone saldo a terra, piede dritto, busto eretto.",
    errori: "Sollevare il tallone. Piegare troppo il ginocchio, scaricando lo stiramento. Rimbalzare."
  },

  "Camminata lenta": {
    muscoli: "Defaticamento cardiovascolare",
    esecuzione: "Dopo l'ultimo intervallo continua a camminare a ritmo molto tranquillo, con il respiro che torna regolare e la frequenza cardiaca che scende gradualmente.",
    postura: "Busto eretto, passo morbido, braccia rilassate, sguardo avanti.",
    errori: "Fermarsi di colpo. Camminare troppo veloce. Appoggiare le mani sulle ginocchia e chinarsi in avanti."
  },

  "Quad in piedi": {
    muscoli: "Quadricipiti · Flessori dell'anca",
    esecuzione: "In piedi su una gamba, con una mano appoggiata alla macchina o al muro. Piega l'altra gamba e porta il tallone verso il gluteo, afferrando la caviglia. Spingi leggermente il bacino in avanti e inclina un poco il busto per sentire lo stiramento anche sull'anca.",
    postura: "Ginocchia vicine tra loro, busto eretto, addome contratto.",
    errori: "Inarcare la zona lombare. Aprire il ginocchio verso l'esterno. Sbilanciarsi senza un appoggio."
  },

  "Hamstring — piede sulla macchina": {
    muscoli: "Femorali",
    esecuzione: "Appoggia un piede sul paraurti o sul cofano a un'altezza comoda, con la gamba tesa e la punta verso l'alto. Inclinati in avanti dal bacino mantenendo la schiena lunga, finché senti lo stiramento dietro la coscia.",
    postura: "Gamba d'appoggio ben salda a terra, busto lungo, ginocchio teso ma non bloccato. La macchina deve essere ferma e in sicurezza.",
    errori: "Arrotondare la schiena. Appoggiare il piede troppo in alto. Fare rimbalzi."
  },

  "Gastrocnemio contro la macchina": {
    muscoli: "Polpaccio (gastrocnemio)",
    esecuzione: "Mani appoggiate alla fiancata della macchina, un piede avanti e uno indietro. La gamba posteriore resta tesa con il tallone a terra; piega il ginocchio anteriore e avvicina il bacino alla macchina finché senti lo stiramento nel polpaccio.",
    postura: "Corpo in linea dalla testa al tallone posteriore, piede dritto in avanti.",
    errori: "Sollevare il tallone. Ruotare il piede verso l'esterno. Fare rimbalzi."
  },

  "Soleo contro la macchina": {
    muscoli: "Polpaccio profondo (soleo)",
    esecuzione: "Stessa posizione del gastrocnemio, con il ginocchio posteriore leggermente piegato e il tallone sempre a terra. Porta il peso in avanti finché senti lo stiramento più in basso nel polpaccio.",
    postura: "Tallone saldo a terra, busto eretto, mani sulla fiancata della macchina.",
    errori: "Sollevare il tallone. Piegare troppo il ginocchio. Rimbalzare."
  },

  "Panca piana manubri ★": {
    muscoli: "Pettorali · Deltoide anteriore · Tricipiti",
    esecuzione: "Sdraiato sulla panca piana, tieni i manubri all'altezza del petto con i gomiti a circa 45° rispetto al busto. Spingi verso l'alto fino a braccia quasi tese senza bloccare i gomiti, poi riporta controllato. La schiena è leggermente arcuata — non piatta.",
    postura: "Piedi a terra, spalle indietro e in basso, schiena con leggero arco naturale. I manubri si muovono su un piano leggermente inclinato, non perfettamente verticale.",
    errori: "Gomiti troppo aperti a 90° — stressano eccessivamente la spalla. Rimbalzare in basso invece di controllare la discesa. Sollevare i piedi da terra."
  },

  "Panca inclinata manubri": {
    muscoli: "Pettorali superiori · Deltoide anteriore · Tricipiti",
    esecuzione: "Come la panca piana ma con la panca inclinata a 30–45°. L'inclinazione sposta il lavoro sulla parte alta del pettorale. Stessa traiettoria controllata, stessa posizione delle spalle.",
    postura: "Schiena aderente alla panca, non inarcarsi eccessivamente per compensare il peso. Gomiti leggermente sotto la linea delle spalle.",
    errori: "Inclinazione troppo alta (oltre 45°) — diventa un esercizio per le spalle, non per il petto. Portare i manubri troppo in avanti durante la salita."
  },

  "Croci ai cavi alti": {
    muscoli: "Pettorali (enfasi sulla parte inferiore e interna)",
    esecuzione: "In piedi al centro dei cavi impostati in alto, un cavo per mano. Porta le mani verso il basso e verso il centro, come se abbracciassi qualcuno. Tieni una leggera flessione dei gomiti fissa per tutto il movimento — non piegare e raddrizzare il braccio.",
    postura: "Busto leggermente inclinato in avanti, un piede avanti per la stabilità. Le mani si incontrano all'altezza dell'ombelico o leggermente sotto.",
    errori: "Piegare i gomiti durante il movimento — diventa un curl. Usare le spalle invece del petto per tirare. Portare le mani troppo in basso perdendo tensione."
  },

  "Military press multipower": {
    muscoli: "Deltoide anteriore e laterale · Trapezio · Tricipiti",
    esecuzione: "In piedi o seduto al multipower, bilanciere all'altezza del mento. Spingi verso l'alto fino a braccia quasi tese, poi riporta controllato fino al mento. Il multipower guida il movimento su un piano fisso.",
    postura: "Core contratto, schiena neutra senza inarcarsi. Non spingere il bacino in avanti per aiutarti. Polsi dritti, non piegati all'indietro.",
    errori: "Inarcare la schiena lombale per compensare il peso — pericoloso. Abbassare il bilanciere troppo sotto il mento perdendo tensione. Gomiti che scivolano troppo avanti."
  },

  "Alzate laterali in piedi": {
    muscoli: "Deltoide laterale (mediale)",
    esecuzione: "In piedi, manubri ai lati. Solleva le braccia lateralmente fino all'altezza delle spalle con i gomiti leggermente flessi. Il mignolo è leggermente più alto del pollice in cima — come se stessi versando acqua da un bicchiere. Scendi lento e controllato.",
    postura: "Busto eretto, leggera flessione del gomito fissa. Non usare lo slancio del busto per aiutarti.",
    errori: "Portare le braccia troppo in alto — oltre i 90° diventa lavoro per il trapezio. Usare lo slancio del corpo. Alzata troppo veloce con discesa non controllata."
  },

  "French press panca piana": {
    muscoli: "Tricipiti (tutte e tre le teste)",
    esecuzione: "Sdraiato sulla panca, tieni i manubri con i palmi che si affacciano l'uno verso l'altro. Porta i manubri verso le orecchie piegando solo i gomiti — i gomiti restano fermi e puntati verso il soffitto. Estendi controllato.",
    postura: "I gomiti non si aprono durante il movimento. La parte superiore del braccio è fissa e perpendicolare al suolo.",
    errori: "Muovere le spalle invece dei soli gomiti. Gomiti che si aprono verso l'esterno. Usare lo slancio per sollevare invece dei tricipiti."
  },

  "Estensione al cavo alto": {
    muscoli: "Tricipiti",
    esecuzione: "In piedi davanti al cavo impostato in alto, afferra il manubrio o la corda con entrambe le mani. Inclina il busto leggermente in avanti, poi spingi verso il basso estendendo i gomiti fino a braccia quasi tese. Risali controllato.",
    postura: "Gomiti fermi vicino al busto, non si aprono. Solo gli avambracci si muovono.",
    errori: "Aprire i gomiti verso l'esterno. Usare il peso del corpo per spingere in basso. Non controllare la risalita."
  },

  "Face pull al cavo con corda ★": {
    muscoli: "Deltoide posteriore · Rotatori esterni · Trapezio medio",
    esecuzione: "Cavo impostato all'altezza degli occhi con attacco a corda. Afferra le estremità con i pollici verso di te. Tira verso il viso tenendo i gomiti alti — all'altezza delle spalle o sopra — separando le estremità della corda verso le orecchie. Movimento lento.",
    postura: "Gomiti alti durante tutto il movimento. Le mani arrivano ai lati della testa, non davanti al viso.",
    errori: "Lasciare scendere i gomiti — trasforma l'esercizio in un normale row. Tirare troppo veloce. Un dolore alla spalla anteriore indica tecnica errata — bruciore al deltoide posteriore è normale."
  },

  "Lat machine avanti": {
    muscoli: "Dorsali · Bicipiti · Romboidi",
    esecuzione: "Seduto alla lat machine, presa larga prona (palmi verso il basso). Tira la barra verso il petto superiore tenendo il busto leggermente inclinato indietro — circa 20–30°. Contrai i dorsali in basso, poi risali controllato fino a braccia quasi tese.",
    postura: "Petto in fuori, spalle abbassate. Non dondolare il busto per aiutarti. I gomiti scendono verso il basso e indietro, non lateralmente.",
    errori: "Tirare con le braccia invece di iniziare il movimento dai dorsali. Dondolare il busto. Alzarsi dal sedile durante il movimento."
  },

  "Rematore dorsy bench": {
    muscoli: "Dorsali · Romboidi · Bicipiti · Deltoide posteriore",
    esecuzione: "Appoggia un ginocchio e la mano dello stesso lato sulla panca. Con l'altra mano tieni il manubrio a braccio teso. Tira verso il fianco tenendo il gomito vicino al corpo, poi scendi controllato.",
    postura: "Schiena parallela al suolo, non ruotare il busto per tirare. Il manubrio viaggia verticalmente, non in diagonale.",
    errori: "Ruotare il busto per guadagnare range. Usare il bicipite invece di pensare al gomito che sale. Non portare il manubrio abbastanza in alto."
  },

  "Pulley basso trazibar": {
    muscoli: "Dorsali · Romboidi · Bicipiti",
    esecuzione: "Seduto al pulley, piedi sulla pedana, impugna la barra triangolare. Tira verso l'ombelico tenendo il busto eretto, poi estendi controllato. Non dondolare.",
    postura: "Schiena neutra, non inarcarsi o curvarsi. I gomiti passano vicino al corpo.",
    errori: "Dondolare il busto avanti e indietro per usare lo slancio. Curvare la schiena in avanti nella fase di allungamento. Tirare con le braccia invece dei dorsali."
  },

  "Hyperextension": {
    muscoli: "Lombari · Glutei · Femorali",
    esecuzione: "Sul banco per le iperestensioni, appoggia i fianchi sul supporto con le gambe bloccate. Piega il busto verso il basso, poi solleva fino a che il corpo è in linea retta — non iperestendere oltre. Tieni 1 secondo in cima.",
    postura: "Mani dietro la testa o incrociate al petto. Movimento lento e controllato in entrambe le direzioni.",
    errori: "Iperestendere oltre la linea del corpo — stress eccessivo sulla lombare. Scendere troppo veloce. Bloccare il respiro."
  },

  "Curl alternato manubri": {
    muscoli: "Bicipiti · Brachiale",
    esecuzione: "In piedi, manubri ai lati con i palmi verso di te. Fletti un braccio alla volta portando il manubrio verso la spalla. Ruota leggermente il polso verso l'esterno durante la salita (supinazione). Scendi lento.",
    postura: "Gomiti fermi ai fianchi, non si alzano durante il movimento. Busto fermo — non oscillare.",
    errori: "Portare i gomiti in avanti per aiutarsi. Oscillare il busto per usare lo slancio. Scendere troppo veloce senza controllare."
  },

  "Curl hammer al cavo basso": {
    muscoli: "Bicipiti · Brachioradiale · Avambracci",
    esecuzione: "In piedi davanti al cavo basso, afferra la corda con presa neutra (pollici verso l'alto). Fletti entrambe le braccia portando le mani verso le spalle senza ruotare i polsi. Scendi controllato.",
    postura: "Gomiti fermi ai fianchi. La presa neutra rimane fissa per tutto il movimento.",
    errori: "Ruotare i polsi durante il movimento — diventa un curl normale. Aprire i gomiti. Usare lo slancio del corpo."
  },

  "Hack squat": {
    muscoli: "Quadricipiti · Glutei · Femorali",
    esecuzione: "Sulla macchina hack squat, spalle e schiena appoggiate alla pedana, piedi a larghezza fianchi al centro della piattaforma. Scendi fino a cosce parallele al suolo o oltre, poi spingi verso l'alto senza bloccare le ginocchia in cima.",
    postura: "Schiena aderente alla pedana durante tutto il movimento. Le ginocchia seguono la direzione delle punte dei piedi.",
    errori: "Sollevare i talloni dalla piattaforma — metti i piedi più in alto. Ginocchia che collassano verso l'interno. Non scendere abbastanza."
  },

  "Leg press piedi alti e larghi ★": {
    muscoli: "Femorali · Glutei · Quadricipiti",
    esecuzione: "Sulla pressa orizzontale, posiziona i piedi nella metà superiore della piattaforma, leggermente più larghi della posizione standard e con le punte leggermente extraruotate. Scendi controllato fino a cosce parallele, poi spingi.",
    postura: "Schiena e glutei aderenti al sedile. Non sollevare i glutei dalla seduta in fondo al movimento.",
    errori: "Sollevare i glutei per guadagnare profondità — riduce il range reale. Piedi troppo in basso che spostano il lavoro sui quadricipiti. Ginocchia che collassano."
  },

  "Hip thrust ★": {
    muscoli: "Glutei · Femorali",
    esecuzione: "Spalle appoggiate sul bordo della panca, piedi a terra con le ginocchia piegate a circa 90°. Abbassa i glutei verso il suolo, poi spingi i fianchi verso l'alto contraendo i glutei — tieni 1 secondo in alto con i fianchi paralleli al suolo. Scendi controllato.",
    postura: "Mento leggermente verso il petto, schiena neutra. In cima il ginocchio è a 90° e il corpo forma una linea retta da spalle a ginocchia.",
    errori: "Iperestendere la schiena in cima invece di spingere con i glutei. Piedi troppo vicini o lontani dal corpo — regola fino a che il ginocchio è a 90° in cima. Non contrarre i glutei attivamente."
  },

  "Leg extension monopodalica": {
    muscoli: "Quadricipiti",
    esecuzione: "Seduto alla macchina leg extension, un solo piede sotto il rullo. Estendi la gamba fino a quasi tesa, contrai il quadricipite in cima, poi scendi controllato. Esegui tutte le ripetizioni su un lato, poi cambia.",
    postura: "Schiena aderente allo schienale, non sollevare il gluteo dal sedile. Il ginocchio rimane allineato.",
    errori: "Usare lo slancio per alzare invece del quadricipite. Scendere troppo veloce. Sollevare il gluteo dal sedile nella fase finale."
  },

  "Leg curl": {
    muscoli: "Femorali · Bicipite femorale",
    esecuzione: "Sdraiato prono sulla macchina leg curl, caviglie sotto il rullo. Fletti le ginocchia portando i talloni verso i glutei, poi scendi controllato. Non sollevare i fianchi dalla seduta.",
    postura: "Fianchi aderenti alla macchina durante tutto il movimento. Le punte dei piedi possono essere neutre o leggermente flesse.",
    errori: "Sollevare i fianchi per guadagnare range. Scendere troppo veloce. Dondolare il corpo."
  },

  "Calf alla pressa orizzontale": {
    muscoli: "Gastrocnemio (polpaccio)",
    esecuzione: "Sulla pressa orizzontale, posiziona solo le punte dei piedi sul bordo inferiore della piattaforma. Spingi sulle punte fino all'estensione completa, poi scendi fino a sentire lo stiramento nel polpaccio. Movimento lento e ampio.",
    postura: "Gambe quasi tese, leggera flessione al ginocchio. Movimento solo alla caviglia.",
    errori: "Range di movimento ridotto — il beneficio sta nell'ampiezza completa. Rimbalzare in basso invece di controllare. Piedi troppo alti sulla piattaforma."
  },

  "Calf machine seduto": {
    muscoli: "Soleo (polpaccio profondo)",
    esecuzione: "Seduto alla macchina calf seduto, ginocchia sotto il supporto, punte dei piedi sulla pedana. Spingi verso il basso sulle punte, poi scendi fino allo stiramento. La posizione seduta con il ginocchio piegato isola il soleo rispetto al gastrocnemio.",
    postura: "Schiena eretta, movimento solo alla caviglia.",
    errori: "Usare lo slancio invece di controllare il movimento. Non scendere abbastanza per stirare il soleo. Alzarsi dalla seduta."
  },

  "Crunch machine": {
    muscoli: "Retto addominale",
    esecuzione: "Seduto alla macchina crunch, impugna le maniglie o appoggia le braccia sui supporti. Contrai gli addominali portando le spalle verso le ginocchia — non è un movimento della schiena, è una contrazione dell'addome. Tieni 1 secondo in fondo, poi risali controllato.",
    postura: "Non tirare con le braccia o il collo. Il movimento è piccolo e controllato, non un'oscillazione ampia.",
    errori: "Usare il collo o le braccia per tirare. Oscillare invece di contrarre. Non controllare la risalita."
  },

  "Plank": {
    muscoli: "Core · Trasverso addominale · Lombari",
    esecuzione: "Appoggiati su avambracci e punte dei piedi, corpo in linea retta dalla testa ai talloni. Contrai l'addome come se stessi per ricevere un pugno. Respira normalmente.",
    postura: "Fianchi né troppo alti né troppo bassi — linea retta. Testa in posizione neutra, sguardo verso il suolo.",
    errori: "Fianchi che salgono — troppo facile. Fianchi che scendono — schiena in stress. Trattenere il respiro."
  },

  "Chiusure a libro gambe piegate": {
    muscoli: "Retto addominale · Flessori dell'anca",
    esecuzione: "Sdraiato, ginocchia piegate a 90° con i piedi sollevati. Porta contemporaneamente le ginocchia verso il petto e il busto verso le ginocchia — come un libro che si chiude. Apri controllato senza toccare terra con i piedi.",
    postura: "Mani a lato del corpo o sotto i glutei per supporto. Non usare lo slancio.",
    errori: "Toccare terra con i piedi tra le ripetizioni — si perde la tensione. Usare solo le gambe senza coinvolgere il busto."
  },

  "V-sit up su panca": {
    muscoli: "Retto addominale · Flessori dell'anca",
    esecuzione: "Seduto sul bordo della panca, busto leggermente inclinato indietro, gambe tese sollevate. Porta le ginocchia verso il petto e il busto in avanti simultaneamente, poi estendi controllato.",
    postura: "Mani che afferrano i lati della panca per stabilità. Non cadere indietro.",
    errori: "Usare solo le gambe senza muovere il busto. Cadere troppo indietro perdendo il controllo. Movimento troppo veloce."
  },

  "Crunch gambe su panca": {
    muscoli: "Retto addominale",
    esecuzione: "Sdraiato, gambe appoggiate sulla panca con le ginocchia a 90°. Porta le spalle verso le ginocchia contraendo l'addome — le spalle si sollevano di pochi centimetri, non è uno sit-up completo. Scendi controllato.",
    postura: "Mani dietro la testa senza tirare il collo, o incrociate al petto.",
    errori: "Tirare il collo con le mani. Fare un sit-up completo invece di un crunch. Non controllare la discesa."
  }

};

const nomiGiorni = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
const nomiMesi = ["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"];

// ─────────────────────────────────────────
// PAGINA: OGGI
// ─────────────────────────────────────────

function renderOggi() {
  const oggi = new Date();
  const giorno = oggi.getDay(); // 0 = domenica, 1 = lunedì, ecc.
  const sessione = programma[giorno];

  const dataFormattata = `${nomiGiorni[giorno]} ${oggi.getDate()} ${nomiMesi[oggi.getMonth()]}`;

  let html = `<p class="data-oggi">${dataFormattata}</p>`;

  if (sessione) {
    const colore = sessione.tipo === "corsa" ? "card-corsa" : "card-palestra";
    html += `
      <div class="card-sessione ${colore}">
        <div class="card-tag">${sessione.tipo === "corsa" ? "🏃 Corsa" : "🏋️ Palestra"}</div>
        <h2 class="card-nome">${sessione.nome}</h2>
        <p class="card-sub">${sessione.sottotitolo}</p>
        <p class="card-durata">⏱ ${sessione.durata}</p>
      </div>
      <button class="btn-primario" onclick="navigateTo('schede')">
        Vai alla scheda →
      </button>
    `;
  } else {
    html += `
      <div class="card-riposo">
        <div class="card-tag">😴 Riposo</div>
        <h2 class="card-nome">Giorno di riposo</h2>
        <p class="card-sub">Recupero attivo. Nessuna sessione prevista.</p>
      </div>
    `;
  }

  return html;
}

// ─────────────────────────────────────────
// NAVIGAZIONE
// ─────────────────────────────────────────

const pagineTitoli = {
  oggi:    { title: "Oggi",    subtitle: "" },
  schede:  { title: "Schede",  subtitle: "Tutti gli allenamenti" },
  log:     { title: "Log",     subtitle: "Storico sessioni" },
  profilo: { title: "Profilo", subtitle: "I tuoi dati" }
};

function navigateTo(pageId) {
  window.modificaOrdineId = null;
  const p = pagineTitoli[pageId];
  document.getElementById("page-title").textContent = p.title;
  document.getElementById("page-subtitle").textContent = p.subtitle;

  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.page === pageId);
  });

  const content = document.getElementById("content");

  if (pageId === "oggi") {
    content.innerHTML = renderOggi();
  } else if (pageId === "schede") {
    content.innerHTML = renderSchede();
  } else if (pageId === "log") {
    content.innerHTML = renderLog();
  } else if (pageId === "profilo") {
    content.innerHTML = renderProfilo();
  } else {
    content.innerHTML = `<p style="color:#888;">Sezione in costruzione.</p>`;
  }
}

document.querySelectorAll(".nav-btn").forEach(btn => {
  btn.addEventListener("click", () => navigateTo(btn.dataset.page));
});

navigateTo("oggi");

// ─────────────────────────────────────────
// PAGINA: SCHEDE — lista
// ─────────────────────────────────────────

function renderSchede() {
  const ordine = ["g1", "g2", "g3", "norwegian", "easy"];
  
  let html = `<div class="lista-schede">`;

  ordine.forEach(id => {
    const s = schede[id];
    const classe = s.tipo === "corsa" ? "card-corsa" : "card-palestra";
    html += `
      <div class="card-lista ${classe}" onclick="apriScheda('${s.id}')">
        <div class="card-lista-left">
          <p class="card-lista-nome">${s.nome}</p>
          <p class="card-lista-sub">${s.sottotitolo}</p>
        </div>
        <div class="card-lista-right">
          <p class="card-lista-durata">${s.durata}</p>
          <span class="card-lista-arrow">→</span>
        </div>
      </div>
    `;
  });

  html += `</div>`;
  return html;
}

// ─────────────────────────────────────────
// PAGINA: SCHEDA SINGOLA
// ─────────────────────────────────────────

function apriScheda(id, ripristinaScroll) {
  const s = schede[id];
  const content = document.getElementById("content");
  const isPalestra = s.tipo === "palestra";
  const inModifica = isPalestra && window.modificaOrdineId === id;

  const risultato = costruisciAttivi(id, s);
  const attivi = risultato.attivi;
  const nPrincipali = attivi.filter(e => e.sezione === "esercizi").length;

  // Stato della sessione in corso
  window.eserciziSessioneAttiva = attivi;
  window.schedaAttivaId = id;
  window.storicoSchedaAttivo = isPalestra ? storicoScheda(id) : [];

  document.getElementById("page-title").textContent = s.nome;
  document.getElementById("page-subtitle").textContent = inModifica ? "Modifica ordine" : s.sottotitolo;

  if (inModifica) {
    content.innerHTML = renderModificaOrdine(id, s, attivi);
    content.scrollTop = 0;
    return;
  }

  const bannerBozza = risultato.bozzaUtile ? `
    <div class="nota-bozza">
      <span>Sessione di oggi ripristinata</span>
      <button onclick="ricominciaSessione(${jsArg(id)})">Ricomincia</button>
    </div>
  ` : "";

  let html = `
    <button class="btn-back" onclick="navigateTo('schede')">← Schede</button>
    <h2 class="scheda-titolo">${s.nome}</h2>
    <p class="scheda-sub">${s.sottotitolo} · ${s.durata}</p>
    ${bannerBozza}
  `;

  // RISCALDAMENTO
  html += `<div class="sezione-titolo">Riscaldamento</div>`;
  html += `<div class="blocco">`;
  s.riscaldamento.forEach(e => {
    html += `
      <div class="riga-riscaldamento">
        <div class="riga-left">
          <p class="riga-nome">${e.nome}</p>
          ${e.note ? `<p class="riga-nota">${e.note}</p>` : ""}
        </div>
        <p class="riga-dose">${e.dose}</p>
      </div>
    `;
  });
  html += `</div>`;

  if (s.nota_pre) {
    html += `<div class="nota-pre">▸ ${s.nota_pre}</div>`;
  }

  // ESERCIZI
  const bottoneOrdine = isPalestra
    ? `<button class="btn-ordine" onclick="entraModificaOrdine(${jsArg(id)})">↕ Modifica ordine</button>`
    : "";
  html += `<div class="sezione-riga"><div class="sezione-titolo">Esercizi</div>${bottoneOrdine}</div>`;
  if (isPalestra) {
    html += `<p class="nota-contatore">Il numero ×N indica quante volte di fila hai fatto l'esercizio con gli stessi valori.</p>`;
  }
  attivi.forEach((e, i) => {
    if (e.sezione === "esercizi") html += cardEsercizio(e, i, i + 1, id, isPalestra);
  });

  // ADDOMINALI
  if (attivi.some(e => e.sezione === "addominali")) {
    html += `<div class="sezione-titolo">Addominali</div>`;
    attivi.forEach((e, i) => {
      if (e.sezione === "addominali") html += cardEsercizio(e, i, i - nPrincipali + 1, id, isPalestra);
    });
  }

  // DEFATICAMENTO
  html += `<div class="sezione-titolo">Defaticamento</div>`;
  html += righeDefaticamento(s.defaticamento, id);

  // BOTTONE CHIUDI SESSIONE
  html += `
    <button class="btn-chiudi-sessione" id="btn-chiudi" onclick="chiudiSessione(${jsArg(id)})">
      ✓ Chiudi sessione
    </button>
    <div style="height: 32px;"></div>
  `;

  content.innerHTML = html;

  attivi.forEach((e, i) => aggiornaContatore(i));

  // Se si torna dalla guida, riporta alla stessa posizione; altrimenti in cima
  content.scrollTop = ripristinaScroll && window.scrollPrimaGuida ? window.scrollPrimaGuida : 0;
}

// Argomento sicuro (anche con apostrofi e virgolette) dentro un onclick="..."
function jsArg(valore) {
  return escAttr(JSON.stringify(valore));
}

// ─────────────────────────────────────────
// SCHEDA — costruzione dati e card
// ─────────────────────────────────────────

// "90 sec" → 90 · "35 sec/lato" → 35 (per lato) · "3–5 min" → 180 · "—" → nessuna durata
function parseDurata(str) {
  const m = String(str).match(/(\d+)(?:\s*[–-]\s*\d+)?\s*(sec|min)/i);
  if (!m) return null;
  const n = parseInt(m[1], 10);
  return {
    secondi: m[2].toLowerCase() === "min" ? n * 60 : n,
    perLato: /\/\s*(lato|braccio|gamba)/i.test(str)
  };
}

// Applica l'ordine personalizzato. I nuovi esercizi non ancora ordinati si inseriscono dopo il loro predecessore.
function caricaOrdine() {
  return leggiJSON("ordine_v2", {});
}

function applicaOrdine(schedaId, sezione, lista) {
  const salvato = (caricaOrdine()[schedaId] || {})[sezione];
  if (!Array.isArray(salvato)) return lista.slice();

  const perChiave = {};
  lista.forEach(e => { perChiave[chiaveEsercizio(e.nome)] = e; });

  const risultato = [];
  salvato.forEach(k => {
    const e = perChiave[k];
    if (e && !risultato.includes(e)) risultato.push(e);
  });

  lista.forEach((e, i) => {
    if (risultato.includes(e)) return;
    let pos = 0;
    for (let j = i - 1; j >= 0; j--) {
      const idx = risultato.indexOf(lista[j]);
      if (idx !== -1) { pos = idx + 1; break; }
    }
    risultato.splice(pos, 0, e);
  });

  return risultato;
}

function costruisciAttivi(id, s) {
  const pesi = caricaPesiScheda(id);
  const bozza = caricaBozza(id);
  let bozzaUtile = false;

  const crea = (e, sezione) => {
    const k = chiaveEsercizio(e.nome);
    const base = pesi[k] !== undefined ? pesi[k] : e.serie;
    const inBozza = bozza && bozza.esercizi ? bozza.esercizi[k] : null;
    const serie = inBozza && typeof inBozza.serie === "string" ? inBozza.serie : base;
    const completato = inBozza ? !!inBozza.completato : false;
    if (completato || serie !== base) bozzaUtile = true;
    return {
      sezione: sezione,
      nome: e.nome,
      muscolo: e.muscolo || (sezione === "addominali" ? "Addominali" : ""),
      serie: serie,
      riposo: e.riposo,
      nota: e.nota || "",
      completato: completato
    };
  };

  const principali = applicaOrdine(id, "esercizi", s.esercizi).map(e => crea(e, "esercizi"));
  const addominali = applicaOrdine(id, "addominali", s.addominali || []).map(e => crea(e, "addominali"));
  return { attivi: principali.concat(addominali), bozzaUtile: bozzaUtile };
}

function cardEsercizio(e, i, numero, schedaId, conContatore) {
  const durataRiposo = parseDurata(e.riposo);
  const riposoTesto = e.riposo && e.riposo !== "—" ? `<p class="esercizio-riposo">⏱ ${e.riposo}</p>` : "";
  const contatore = conContatore
    ? `<span class="contatore" id="cont-${i}" title="Volte di fila con gli stessi valori">×0</span>`
    : "";
  const bottoneTimer = durataRiposo
    ? `<button class="btn-timer" onclick="avviaTimer(${durataRiposo.secondi}, 'RECUPERO')">⏱ Recupero ${e.riposo}</button>`
    : "";
  const stileFatto = e.completato ? ' style="color:#4caf50;border-color:#4caf50"' : "";

  return `
    <div class="card-esercizio${e.completato ? " completato" : ""}" id="card-ez-${i}">
      <div class="esercizio-header">
        <span class="esercizio-num">${numero}</span>
        <div class="esercizio-info">
          <p class="esercizio-nome">${e.nome}${contatore}</p>
          <p class="esercizio-muscolo">${e.muscolo}</p>
        </div>
        ${riposoTesto}
      </div>
      <div class="esercizio-tracking">
        <input
          type="text"
          class="input-serie"
          id="serie-${i}"
          value="${escAttr(e.serie)}"
          placeholder="es. 12×10 — 10×12"
          oninput="salvaBozza(); aggiornaContatore(${i})"
          ${e.completato ? "disabled" : ""}
        />
        <div class="tracking-azioni">
          ${bottoneTimer}
          <button class="btn-completa" id="btn-completa-${i}" onclick="completaEsercizio(${i}, ${jsArg(schedaId)})"${stileFatto}>✓ Fatto</button>
        </div>
      </div>
      ${e.nota ? `<p class="esercizio-nota">▸ ${e.nota}</p>` : ""}
      ${guide[e.nome] ? `<button class="btn-guida" onclick="salvaBozza(); apriGuida(${jsArg(e.nome)}, ${jsArg(schedaId)})">📖 Come si fa</button>` : ""}
    </div>
  `;
}

function righeDefaticamento(lista, schedaId) {
  let html = `<div class="blocco">`;
  lista.forEach(e => {
    const d = parseDurata(e.durata);
    html += `
      <div class="riga-riscaldamento">
        <div class="riga-left">
          <p class="riga-nome">${e.nome}</p>
          ${e.note ? `<p class="riga-nota">${e.note}</p>` : ""}
          ${guide[e.nome] ? `<button class="btn-guida btn-guida-riga" onclick="salvaBozza(); apriGuida(${jsArg(e.nome)}, ${jsArg(schedaId)})">📖 Come si fa</button>` : ""}
        </div>
        <div class="riga-stretch-dx">
          <p class="riga-dose">${e.durata}</p>
          ${d ? `<button class="btn-timer btn-timer-sm" onclick="avviaStretch(${jsArg(e.durata)})">⏱ Avvia</button>` : ""}
        </div>
      </div>
    `;
  });
  html += `</div>`;
  return html;
}

// ─────────────────────────────────────────
// CONTATORE "VOLTE DI FILA"
// ─────────────────────────────────────────

const SOGLIA_STALLO = 4;   // da quante volte di fila il numero si evidenzia

// Rende confrontabili "12x14 - 10x14" e "12×14 — 10×14"
function normalizzaSerie(testo) {
  return String(testo)
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[–—−]/g, "-")
    .replace(/x/g, "×")
    .replace(/\./g, ",");
}

// Sessioni già registrate di questa scheda, dalla più recente
function storicoScheda(schedaId) {
  try {
    return caricaLog().filter(sessione => sessione.id === schedaId);
  } catch (err) {
    console.error("Storico non leggibile:", err);
    return [];
  }
}

// Sessioni consecutive (le più recenti) in cui l'esercizio è stato fatto con esattamente questi valori.
// Le sessioni in cui non l'hai fatto non contano e non azzerano; una sessione con valori diversi interrompe la serie.
function volteDiFila(storico, nome, serie) {
  const chiave = chiaveEsercizio(nome);
  const target = normalizzaSerie(serie);
  let n = 0;
  for (const sessione of storico) {
    const e = (sessione.esercizi || []).find(x => chiaveEsercizio(x.nome) === chiave);
    if (!e || !e.completato) continue;
    if (normalizzaSerie(e.serie) === target) n++;
    else break;
  }
  return n;
}

function aggiornaContatore(i) {
  const e = (window.eserciziSessioneAttiva || [])[i];
  const el = document.getElementById("cont-" + i);
  if (!e || !el) return;
  const input = document.getElementById("serie-" + i);
  const valore = input ? input.value : e.serie;
  const n = volteDiFila(window.storicoSchedaAttivo || [], e.nome, valore) + (e.completato ? 1 : 0);
  el.textContent = "×" + n;
  el.classList.toggle("stallo", n >= SOGLIA_STALLO);
}

// ─────────────────────────────────────────
// MODIFICA ORDINE ESERCIZI
// ─────────────────────────────────────────

function renderModificaOrdine(id, s, attivi) {
  const sezioni = [
    { chiave: "esercizi", titolo: "Esercizi" },
    { chiave: "addominali", titolo: "Addominali" }
  ];

  let html = `
    <button class="btn-back" onclick="navigateTo('schede')">← Schede</button>
    <h2 class="scheda-titolo">${s.nome}</h2>
    <p class="scheda-sub">Modifica ordine</p>
    <div class="nota-pre">▸ Usa le frecce per spostare gli esercizi. L'ordine viene salvato subito.</div>
  `;

  sezioni.forEach(sez => {
    const voci = attivi.filter(e => e.sezione === sez.chiave);
    if (voci.length === 0) return;
    html += `<div class="sezione-titolo">${sez.titolo}</div><div class="blocco">`;
    voci.forEach((e, k) => {
      html += `
        <div class="riga-ordine">
          <span class="esercizio-num">${k + 1}</span>
          <p class="riga-nome">${e.nome}</p>
          <div class="ordine-frecce">
            <button class="btn-freccia" onclick="spostaEsercizio(${jsArg(id)}, ${jsArg(sez.chiave)}, ${k}, -1)" ${k === 0 ? "disabled" : ""}>▲</button>
            <button class="btn-freccia" onclick="spostaEsercizio(${jsArg(id)}, ${jsArg(sez.chiave)}, ${k}, 1)" ${k === voci.length - 1 ? "disabled" : ""}>▼</button>
          </div>
        </div>
      `;
    });
    html += `</div>`;
  });

  html += `
    <button class="btn-primario" style="margin-top:20px" onclick="finisciModificaOrdine(${jsArg(id)})">✓ Fine</button>
    <button class="btn-azione-profilo" style="margin-top:10px" onclick="ripristinaOrdine(${jsArg(id)})">Ripristina ordine originale</button>
    <div style="height: 32px;"></div>
  `;
  return html;
}

function entraModificaOrdine(id) {
  salvaBozza();   // la sessione in corso non si perde
  window.modificaOrdineId = id;
  apriScheda(id);
}

function finisciModificaOrdine(id) {
  window.modificaOrdineId = null;
  apriScheda(id);
}

function spostaEsercizio(schedaId, sezione, indice, direzione) {
  const content = document.getElementById("content");
  const scroll = content.scrollTop;
  const nomi = (window.eserciziSessioneAttiva || [])
    .filter(e => e.sezione === sezione)
    .map(e => chiaveEsercizio(e.nome));
  const nuovo = indice + direzione;
  if (nuovo < 0 || nuovo >= nomi.length) return;

  const tmp = nomi[indice];
  nomi[indice] = nomi[nuovo];
  nomi[nuovo] = tmp;

  const ordine = caricaOrdine();
  ordine[schedaId] = ordine[schedaId] || {};
  ordine[schedaId][sezione] = nomi;
  scriviJSON("ordine_v2", ordine);

  apriScheda(schedaId);
  content.scrollTop = scroll;
}

function ripristinaOrdine(schedaId) {
  if (!confirm("Ripristinare l'ordine originale degli esercizi di questa scheda?")) return;
  const ordine = caricaOrdine();
  delete ordine[schedaId];
  scriviJSON("ordine_v2", ordine);
  apriScheda(schedaId);
}

// ─────────────────────────────────────────
// TIMER (recupero e defaticamento)
// ─────────────────────────────────────────

let timerInterval = null;
let timerSecondi = 0;
let timerFasi = [];
let timerFaseCorrente = null;
let timerFine = 0;

function vibra(schema) {
  try {
    if (navigator.vibrate) navigator.vibrate(schema);
  } catch (err) { /* non tutti i telefoni la supportano */ }
}

function avviaTimer(secondi, etichetta) {
  avviaSequenza([{ sec: secondi, label: etichetta || "RECUPERO", fine: "Via!" }]);
}

// Defaticamento: per gli esercizi "per lato" fa lato 1, pausa di 5 secondi per cambiare, lato 2
function avviaStretch(durata) {
  const d = parseDurata(durata);
  if (!d) return;
  const base = "DEFATICAMENTO";
  if (d.perLato) {
    avviaSequenza([
      { sec: d.secondi, label: base + " · LATO 1" },
      { sec: 5, label: "CAMBIA LATO" },
      { sec: d.secondi, label: base + " · LATO 2", fine: "Fatto" }
    ]);
  } else {
    avviaSequenza([{ sec: d.secondi, label: base, fine: "Fatto" }]);
  }
}

function avviaSequenza(fasi) {
  fermaTimer();
  timerFasi = fasi.slice();
  document.getElementById("timer-banner").classList.add("attivo");
  iniziaFase();
  timerInterval = setInterval(timerTick, 250);
}

function iniziaFase() {
  timerFaseCorrente = timerFasi.shift();
  timerFine = Date.now() + timerFaseCorrente.sec * 1000;
  timerSecondi = timerFaseCorrente.sec;
  document.getElementById("timer-label").textContent = timerFaseCorrente.label;
  aggiornaDisplayTimer();
}

// Il tempo si calcola dall'orologio, quindi resta corretto anche se lo schermo si spegne
function timerTick() {
  if (!timerFaseCorrente) return;
  const restanti = Math.max(0, Math.ceil((timerFine - Date.now()) / 1000));
  if (restanti !== timerSecondi) {
    timerSecondi = restanti;
    aggiornaDisplayTimer();
  }
  if (restanti > 0) return;

  if (timerFasi.length > 0) {
    vibra(200);
    iniziaFase();
    return;
  }

  clearInterval(timerInterval);
  timerInterval = null;
  vibra([300, 100, 300]);
  document.getElementById("timer-display").textContent = timerFaseCorrente.fine || "Via!";
  timerFaseCorrente = null;
  setTimeout(() => {
    if (!timerInterval) document.getElementById("timer-banner").classList.remove("attivo");
  }, 1500);
}

function fermaTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  timerFasi = [];
  timerFaseCorrente = null;
  document.getElementById("timer-banner").classList.remove("attivo");
}

function aggiornaDisplayTimer() {
  const min = Math.floor(timerSecondi / 60);
  const sec = timerSecondi % 60;
  document.getElementById("timer-display").textContent =
    `${min}:${sec.toString().padStart(2, "0")}`;
}

function secondiDaStringa(str) {
  const d = parseDurata(str);
  return d ? d.secondi : 60;
}

// ─────────────────────────────────────────
// STORAGE — salvataggio dati locali
// ─────────────────────────────────────────

// Versione dell'app (si vede in fondo al Profilo)
const APP_VERSION = "2.2";

// Il nome senza l'eventuale ★ identifica l'esercizio: togliere la stella in futuro non fa perdere i pesi
function chiaveEsercizio(nome) {
  return String(nome).replace(/\s*★\s*/g, "").trim();
}

function escAttr(valore) {
  return String(valore)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function dataLocale(d) {
  d = d || new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function leggiJSON(chiave, fallback) {
  try {
    const grezzo = localStorage.getItem(chiave);
    return grezzo ? JSON.parse(grezzo) : fallback;
  } catch (err) {
    console.error("Lettura fallita:", chiave, err);
    return fallback;
  }
}

function scriviJSON(chiave, valore) {
  try {
    localStorage.setItem(chiave, JSON.stringify(valore));
    return true;
  } catch (err) {
    console.error("Scrittura fallita:", chiave, err);
    return false;
  }
}

// ── Pesi fissi della scheda: { g1: { "Panca piana manubri": "12×10 — ..." }, g2: {...} }
function caricaPesi() {
  return leggiJSON("pesi_v2", {});
}

function caricaPesiScheda(id) {
  return caricaPesi()[id] || {};
}

function salvaScheda(id, esercizi) {
  const pesi = caricaPesi();
  pesi[id] = pesi[id] || {};
  esercizi.forEach(e => {
    pesi[id][chiaveEsercizio(e.nome)] = e.serie;
  });
  scriviJSON("pesi_v2", pesi);
}

// Conversione una tantum: copia i vecchi dati "per posizione" (scheda_g1, ...) nel nuovo formato "per nome".
// I vecchi dati NON vengono toccati.
function migraDatiV2() {
  if (localStorage.getItem("pesi_v2") !== null) return;

  const pesi = {};
  Object.keys(schede).forEach(id => {
    const vecchi = leggiJSON("scheda_" + id, null);
    if (!Array.isArray(vecchi)) return;
    pesi[id] = {};
    vecchi.forEach(e => {
      if (e && e.nome && typeof e.serie === "string") {
        pesi[id][chiaveEsercizio(e.nome)] = e.serie;
      }
    });
  });
  scriviJSON("pesi_v2", pesi);
}

// ── Bozza della sessione in corso (una per scheda, valida solo nel giorno in cui nasce)
function caricaBozza(schedaId) {
  const bozza = leggiJSON("bozza_" + schedaId, null);
  if (!bozza || bozza.giorno !== dataLocale()) return null;
  return bozza;
}

function sincronizzaDaInput() {
  const attivi = window.eserciziSessioneAttiva;
  if (!attivi) return;
  attivi.forEach((e, i) => {
    const input = document.getElementById("serie-" + i);
    if (input) e.serie = input.value;
  });
}

function salvaBozza() {
  const id = window.schedaAttivaId;
  const attivi = window.eserciziSessioneAttiva;
  // Salva solo se la scheda e' davvero a schermo
  if (!id || !attivi || !document.getElementById("card-ez-0")) return;

  sincronizzaDaInput();
  const esercizi = {};
  attivi.forEach(e => {
    esercizi[chiaveEsercizio(e.nome)] = { serie: e.serie, completato: !!e.completato };
  });
  scriviJSON("bozza_" + id, { giorno: dataLocale(), aggiornata: Date.now(), esercizi: esercizi });
}

function eliminaBozza(schedaId) {
  localStorage.removeItem("bozza_" + schedaId);
}

function ricominciaSessione(schedaId) {
  if (!confirm("Azzerare la sessione di oggi? Gli esercizi segnati come fatti e le modifiche non salvate andranno persi.")) return;
  eliminaBozza(schedaId);
  apriScheda(schedaId);
}

// Salva anche quando l'app va in secondo piano (es. cambio app durante l'allenamento)
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") salvaBozza();
});

function salvaLog(id, nomeSessione, esercizi, stats) {
  const oggi = new Date();
  const chiave = "log_" + oggi.toISOString().split("T")[0];

  const sessione = {
    id: id,
    nome: nomeSessione,
    data: oggi.toISOString(),
    esercizi: esercizi,
    stats: stats || null
  };

  const esistenti = localStorage.getItem(chiave);
  const lista = esistenti ? JSON.parse(esistenti) : [];
  lista.push(sessione);
  localStorage.setItem(chiave, JSON.stringify(lista));
}

function caricaLog() {
  // Carica tutti i log salvati
  const log = [];
  for (let i = 0; i < localStorage.length; i++) {
    const chiave = localStorage.key(i);
    if (chiave.startsWith("log_")) {
      const sessioni = JSON.parse(localStorage.getItem(chiave));
      sessioni.forEach(s => log.push(s));
    }
  }
  // Ordina per data, più recente prima
  log.sort((a, b) => new Date(b.data) - new Date(a.data));
  return log;
}

// ─────────────────────────────────────────
// TRACCIAMENTO — completamento esercizi
// ─────────────────────────────────────────

function completaEsercizio(index, schedaId) {
  const eserciziAttivi = window.eserciziSessioneAttiva;
  const card = document.getElementById("card-ez-" + index);
  const btn = document.getElementById("btn-completa-" + index);
  const serieInput = document.getElementById("serie-" + index);

  // Toggle: se già completato, deseleziona
  if (eserciziAttivi[index].completato) {
    eserciziAttivi[index].completato = false;
    card.classList.remove("completato");
    btn.textContent = "✓ Fatto";
    btn.style.color = "";
    btn.style.borderColor = "";
    serieInput.disabled = false;
  } else {
    // Segna come completato
    eserciziAttivi[index].completato = true;
    eserciziAttivi[index].serie = serieInput.value;
    card.classList.add("completato");
    btn.textContent = "✓ Fatto";
    btn.style.color = "#4caf50";
    btn.style.borderColor = "#4caf50";
    serieInput.disabled = true;
  }

  aggiornaContatore(index);
  salvaBozza();
}

function chiudiSessione(schedaId) {
  // Cio' che vedi nei campi e' cio' che viene salvato, anche per gli esercizi non spuntati
  sincronizzaDaInput();
  salvaBozza();
  const eserciziAttivi = window.eserciziSessioneAttiva;
  const s = schede[schedaId];
  const isCorsa = s.tipo === "corsa";

  if (isCorsa) {
    // Mostra form statistiche corsa
    const content = document.getElementById("content");
    const formHtml = `
      <div class="form-corsa">
        <h2 class="scheda-titolo">Sessione completata 💪</h2>
        <p class="scheda-sub">Inserisci i dati dal Samsung Watch</p>

        <div class="sezione-titolo">Statistiche corsa</div>
        <div class="blocco">
          <div class="riga-riscaldamento">
            <p class="riga-nome">Distanza</p>
            <div class="riga-destra">
              <input type="number" class="input-profilo" id="stat-distanza" placeholder="6.0" step="0.1" min="0" />
              <span class="input-unita">km</span>
            </div>
          </div>
          <div class="riga-riscaldamento">
            <p class="riga-nome">Tempo totale</p>
            <div class="riga-destra">
              <input type="number" class="input-profilo" id="stat-minuti" placeholder="45" step="1" min="0" />
              <span class="input-unita">min</span>
            </div>
          </div>
          <div class="riga-riscaldamento">
            <p class="riga-nome">FC media</p>
            <div class="riga-destra">
              <input type="number" class="input-profilo" id="stat-fc-media" placeholder="130" step="1" min="0" />
              <span class="input-unita">bpm</span>
            </div>
          </div>
          <div class="riga-riscaldamento">
            <p class="riga-nome">FC max</p>
            <div class="riga-destra">
              <input type="number" class="input-profilo" id="stat-fc-max" placeholder="168" step="1" min="0" />
              <span class="input-unita">bpm</span>
            </div>
          </div>
          <div class="riga-riscaldamento">
            <p class="riga-nome">VO2max stimato</p>
            <div class="riga-destra">
              <input type="number" class="input-profilo" id="stat-vo2max" placeholder="46" step="0.1" min="0" />
              <span class="input-unita">ml/kg/min</span>
            </div>
          </div>
        </div>

        <button class="btn-chiudi-sessione" onclick="salvaSessioneCorsa('${schedaId}')">
          Salva e chiudi
        </button>
        <button class="btn-back" style="margin-top: 12px; display: block; text-align: center; width: 100%;" onclick="apriScheda('${schedaId}')">
          ← Torna alla scheda
        </button>
        <div style="height: 32px;"></div>
      </div>
    `;
    content.innerHTML = formHtml;
    document.getElementById("page-title").textContent = s.nome;
    document.getElementById("page-subtitle").textContent = "Statistiche";
    return;
  }

  // Sessione palestra — salva direttamente
  completaESalva(schedaId, eserciziAttivi, null);
}

function salvaSessioneCorsa(schedaId) {
  const distanza = parseFloat(document.getElementById("stat-distanza").value);
  const minuti = parseFloat(document.getElementById("stat-minuti").value);
  const fcMedia = parseInt(document.getElementById("stat-fc-media").value);
  const fcMax = parseInt(document.getElementById("stat-fc-max").value);
  const vo2max = parseFloat(document.getElementById("stat-vo2max").value);

  // Calcola ritmo medio automaticamente
  let ritmoStr = "—";
  if (distanza > 0 && minuti > 0) {
    const ritmoDec = minuti / distanza;
    const ritmoMin = Math.floor(ritmoDec);
    const ritmoSec = Math.round((ritmoDec - ritmoMin) * 60);
    ritmoStr = `${ritmoMin}:${String(ritmoSec).padStart(2, "0")} /km`;
  }

  const stats = {
    distanza: isNaN(distanza) ? null : distanza,
    minuti: isNaN(minuti) ? null : minuti,
    ritmo: ritmoStr,
    fc_media: isNaN(fcMedia) ? null : fcMedia,
    fc_max: isNaN(fcMax) ? null : fcMax,
    vo2max: isNaN(vo2max) ? null : vo2max
  };

  // Aggiorna VO2max nel profilo
  if (!isNaN(vo2max) && vo2max > 0) {
    aggiornavo2max(vo2max);
  }

  const eserciziAttivi = window.eserciziSessioneAttiva;
  completaESalva(schedaId, eserciziAttivi, stats);
}

function completaESalva(schedaId, eserciziAttivi, stats) {
  const s = schede[schedaId];

  const salvaNellaScheda = confirm(
    "Vuoi aggiornare la scheda con i pesi di oggi?\n\n" +
    "OK → aggiorna la scheda permanente\n" +
    "Annulla → salva solo nel log"
  );

  if (salvaNellaScheda) {
    salvaScheda(schedaId, eserciziAttivi);
  }

  salvaLog(schedaId, s.nome, eserciziAttivi, stats);
  eliminaBozza(schedaId);
  alert("Sessione completata e salvata 💪");
  navigateTo("oggi");
}

// ─────────────────────────────────────────
// PAGINA: LOG
// ─────────────────────────────────────────

function renderLog() {
  const oggi = new Date();
  window.calAnno = window.calAnno || oggi.getFullYear();
  window.calMese = window.calMese || oggi.getMonth();
  window.logVista = window.logVista || "calendario";

  const log = caricaLog();

  let output = `
    <div class="log-switcher">
      <button class="log-switch-btn ${window.logVista === 'calendario' ? 'attivo' : ''}" onclick="cambiaVistaLog('calendario')">📅 Calendario</button>
      <button class="log-switch-btn ${window.logVista === 'lista' ? 'attivo' : ''}" onclick="cambiaVistaLog('lista')">📋 Lista</button>
    </div>
  `;

  if (window.logVista === "calendario") {
    output += `<div id="cal-wrapper">${renderCalendario(window.calAnno, window.calMese)}</div>`;
    if (log.length === 0) {
      output += `
        <div class="log-vuoto">
          <p class="log-vuoto-testo">Nessuna sessione registrata.</p>
          <p class="log-vuoto-sub">I giorni allenati appariranno evidenziati nel calendario.</p>
        </div>
      `;
    }
    return output;
  }

  // VISTA LISTA
  if (log.length === 0) {
    output += `
      <div class="log-vuoto">
        <p class="log-vuoto-icona">📋</p>
        <p class="log-vuoto-testo">Nessuna sessione registrata.</p>
        <p class="log-vuoto-sub">Completa il tuo primo allenamento per vederlo qui.</p>
      </div>
    `;
    return output;
  }

  const perData = {};
  log.forEach(sessione => {
    const data = sessione.data.split("T")[0];
    if (!perData[data]) perData[data] = [];
    perData[data].push(sessione);
  });

  Object.keys(perData).sort((a, b) => b.localeCompare(a)).forEach(data => {
    const sessioni = perData[data];
    const dataObj = new Date(data + "T12:00:00");
    const dataFormattata = `${nomiGiorni[dataObj.getDay()]} ${dataObj.getDate()} ${nomiMesi[dataObj.getMonth()]} ${dataObj.getFullYear()}`;

    output += `<div class="log-data-label">${dataFormattata}</div>`;

    sessioni.forEach(sessione => {
      const s = schede[sessione.id];
      const classe = s ? (s.tipo === "corsa" ? "card-corsa" : "card-palestra") : "";
      const completati = sessione.esercizi.filter(e => e.completato).length;
      const totali = sessione.esercizi.length;

      output += `
        <div class="card-log ${classe}" onclick="apriDettaglioLog('${sessione.data}', '${sessione.id}')">
          <div class="log-header">
            <p class="log-nome">${sessione.nome}</p>
            <p class="log-completati">${completati}/${totali} esercizi</p>
          </div>
          <p class="log-ora">${new Date(sessione.data).toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" })}</p>
        </div>
      `;
    });
  });

  return output;
}

function cambiaVistaLog(vista) {
  window.logVista = vista;
  document.getElementById("content").innerHTML = renderLog();
}

function apriDettaglioLog(dataISO, schedaId) {
  const chiave = "log_" + dataISO.split("T")[0];
  const lista = JSON.parse(localStorage.getItem(chiave)) || [];
  const sessione = lista.find(s => s.data === dataISO && s.id === schedaId);

  if (!sessione) return;

  const content = document.getElementById("content");
  const dataFormattata = new Date(sessione.data).toLocaleDateString("it-IT", {
    weekday: "long", day: "numeric", month: "long", year: "numeric"
  });

  let html = `
    <button class="btn-back" onclick="navigateTo('log')">← Log</button>
    <h2 class="scheda-titolo">${sessione.nome}</h2>
    <p class="scheda-sub">${dataFormattata}</p>
    <div class="sezione-titolo">Esercizi registrati</div>
  `;

  sessione.esercizi.forEach((e, i) => {
    const stato = e.completato ? "✓" : "—";
    const coloreStato = e.completato ? "#4caf50" : "#555";
    html += `
      <div class="card-esercizio" style="opacity: ${e.completato ? "1" : "0.5"}">
        <div class="esercizio-header">
          <span class="esercizio-num" style="color: ${coloreStato}">${stato}</span>
          <div class="esercizio-info">
            <p class="esercizio-nome">${e.nome}</p>
            <p class="esercizio-muscolo">${e.muscolo}</p>
          </div>
        </div>
        <p class="esercizio-serie" style="color: ${e.completato ? "var(--accent)" : "#555"}">${e.serie}</p>
      </div>
    `;
  });

  if (sessione.stats) {
    const st = sessione.stats;
    html += `<div class="sezione-titolo">Statistiche corsa</div>`;
    html += `<div class="blocco">`;
    if (st.distanza) html += `<div class="riga-riscaldamento"><p class="riga-nome">Distanza</p><p class="riga-dose">${st.distanza} km</p></div>`;
    if (st.minuti) html += `<div class="riga-riscaldamento"><p class="riga-nome">Tempo</p><p class="riga-dose">${st.minuti} min</p></div>`;
    if (st.ritmo) html += `<div class="riga-riscaldamento"><p class="riga-nome">Ritmo medio</p><p class="riga-dose">${st.ritmo}</p></div>`;
    if (st.fc_media) html += `<div class="riga-riscaldamento"><p class="riga-nome">FC media</p><p class="riga-dose">${st.fc_media} bpm</p></div>`;
    if (st.fc_max) html += `<div class="riga-riscaldamento"><p class="riga-nome">FC max</p><p class="riga-dose">${st.fc_max} bpm</p></div>`;
    if (st.vo2max) html += `<div class="riga-riscaldamento"><p class="riga-nome">VO2max</p><p class="riga-dose" style="color: var(--accent)">${st.vo2max} ml/kg/min</p></div>`;
    html += `</div>`;
  }

  html += `<div style="height: 32px;"></div>`;
  content.innerHTML = html;

  document.getElementById("page-title").textContent = "Log";
  document.getElementById("page-subtitle").textContent = sessione.nome;
}

// ─────────────────────────────────────────
// CALENDARIO MENSILE
// ─────────────────────────────────────────

function renderCalendario(anno, mese) {
  const oggi = new Date();
  const primoGiorno = new Date(anno, mese, 1);
  const ultimoGiorno = new Date(anno, mese + 1, 0);

  const giorniAllenati = {};
  for (let i = 1; i <= ultimoGiorno.getDate(); i++) {
    const data = `${anno}-${String(mese + 1).padStart(2, "0")}-${String(i).padStart(2, "0")}`;
    const chiave = "log_" + data;
    const sessioni = localStorage.getItem(chiave);
    if (sessioni) {
      const lista = JSON.parse(sessioni);
      giorniAllenati[i] = lista[0] && schede[lista[0].id] ? schede[lista[0].id].tipo : "palestra";
    }
  }

  const nomeMese = nomiMesi[mese].charAt(0).toUpperCase() + nomiMesi[mese].slice(1);
  let html = `
    <div class="cal-header">
      <button class="cal-nav" onclick="cambioMese(${anno}, ${mese - 1})">‹</button>
      <p class="cal-titolo">${nomeMese} ${anno}</p>
      <button class="cal-nav" onclick="cambioMese(${anno}, ${mese + 1})">›</button>
    </div>
    <div class="cal-griglia">
      <div class="cal-giorno-label">L</div>
      <div class="cal-giorno-label">M</div>
      <div class="cal-giorno-label">M</div>
      <div class="cal-giorno-label">G</div>
      <div class="cal-giorno-label">V</div>
      <div class="cal-giorno-label">S</div>
      <div class="cal-giorno-label">D</div>
  `;

  let offset = primoGiorno.getDay() - 1;
  if (offset < 0) offset = 6;

  for (let i = 0; i < offset; i++) {
    html += `<div class="cal-cella vuota"></div>`;
  }

  for (let giorno = 1; giorno <= ultimoGiorno.getDate(); giorno++) {
    const isOggi = giorno === oggi.getDate() && mese === oggi.getMonth() && anno === oggi.getFullYear();
    const tipoAllenamento = giorniAllenati[giorno];

    let classeExtra = "";
    if (isOggi) classeExtra += " oggi";
    if (tipoAllenamento === "palestra") classeExtra += " allenato-palestra";
    if (tipoAllenamento === "corsa") classeExtra += " allenato-corsa";

    const dataStr = `${anno}-${String(mese + 1).padStart(2, "0")}-${String(giorno).padStart(2, "0")}`;
    const clickabile = tipoAllenamento ? `onclick="apriGiornoLog('${dataStr}')"` : "";

    html += `<div class="cal-cella${classeExtra}" ${clickabile}>${giorno}</div>`;
  }

  html += `</div>`;
  return html;
}

function cambioMese(anno, mese) {
  if (mese < 0) { mese = 11; anno--; }
  if (mese > 11) { mese = 0; anno++; }
  window.calAnno = anno;
  window.calMese = mese;
  document.getElementById("cal-wrapper").innerHTML = renderCalendario(anno, mese);
}

function apriGiornoLog(dataStr) {
  const chiave = "log_" + dataStr;
  const lista = JSON.parse(localStorage.getItem(chiave)) || [];
  if (lista.length === 0) return;

  if (lista.length === 1) {
    apriDettaglioLog(lista[0].data, lista[0].id);
    return;
  }

  const content = document.getElementById("content");
  const dataObj = new Date(dataStr + "T12:00:00");
  const dataFormattata = dataObj.toLocaleDateString("it-IT", {
    weekday: "long", day: "numeric", month: "long"
  });

  let html = `
    <button class="btn-back" onclick="navigateTo('log')">← Log</button>
    <h2 class="scheda-titolo">${dataFormattata}</h2>
    <div class="sezione-titolo">Sessioni del giorno</div>
  `;

  lista.forEach(sessione => {
    const s = schede[sessione.id];
    const classe = s ? (s.tipo === "corsa" ? "card-corsa" : "card-palestra") : "";
    html += `
      <div class="card-log ${classe}" onclick="apriDettaglioLog('${sessione.data}', '${sessione.id}')">
        <p class="log-nome">${sessione.nome}</p>
        <p class="log-ora">${new Date(sessione.data).toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" })}</p>
      </div>
    `;
  });

  content.innerHTML = html;
  document.getElementById("page-title").textContent = "Log";
  document.getElementById("page-subtitle").textContent = dataFormattata;
}

// ─────────────────────────────────────────
// PAGINA: PROFILO
// ─────────────────────────────────────────

function renderProfilo() {
  const dati = caricaDatiProfilo();
  const zone = calcolaZone(dati.hrmax);

  return `
    <div class="sezione-titolo">I tuoi dati</div>
    <div class="blocco">
      <div class="riga-riscaldamento">
        <p class="riga-nome">Nome</p>
        <p class="riga-dose">Brambi</p>
      </div>
      <div class="riga-riscaldamento">
        <p class="riga-nome">Data di nascita</p>
        <p class="riga-dose">18/08/1999</p>
      </div>
      <div class="riga-riscaldamento">
        <p class="riga-nome">Altezza</p>
        <p class="riga-dose">184 cm</p>
      </div>
      <div class="riga-riscaldamento">
        <p class="riga-nome">Peso</p>
        <div class="riga-destra">
          <input type="number" class="input-profilo" id="input-peso" value="${dati.peso}" min="40" max="200" step="0.5" />
          <span class="input-unita">kg</span>
        </div>
      </div>
      <div class="riga-riscaldamento">
        <p class="riga-nome">HRmax</p>
        <div class="riga-destra">
          <input type="number" class="input-profilo" id="input-hrmax" value="${dati.hrmax}" min="140" max="220" step="1" />
          <span class="input-unita">bpm</span>
        </div>
      </div>
    </div>

    <button class="btn-salva-profilo" onclick="salvaDatiProfilo()">Salva modifiche</button>

    <div class="sezione-titolo">VO2max</div>
    <div class="blocco">
      <div class="riga-riscaldamento">
        <div class="riga-left">
          <p class="riga-nome">Valore attuale</p>
          <p class="riga-nota">Ultimo aggiornamento: ${dati.vo2max_data || "—"}</p>
        </div>
        <p class="riga-dose" style="color: var(--accent); font-size: 20px;">${dati.vo2max} <span style="font-size:12px; color: var(--text-muted)">ml/kg/min</span></p>
      </div>
      <div class="riga-riscaldamento">
        <p class="riga-nome">Obiettivo</p>
        <p class="riga-dose">51+ ml/kg/min</p>
      </div>
    </div>

    <div class="sezione-titolo">Zone di frequenza cardiaca</div>
    <p class="profilo-nota-zone">Calcolate su HRmax ${dati.hrmax} bpm</p>
    <div class="blocco">
      <div class="riga-riscaldamento">
        <div class="riga-left">
          <p class="riga-nome">Zona 1</p>
          <p class="riga-nota">Intensità ridotta</p>
        </div>
        <p class="riga-dose zona-1">${zone[1].min}–${zone[1].max} bpm</p>
      </div>
      <div class="riga-riscaldamento">
        <div class="riga-left">
          <p class="riga-nome">Zona 2</p>
          <p class="riga-nota">Aerobico leggero · corsa easy</p>
        </div>
        <p class="riga-dose zona-2">${zone[2].min}–${zone[2].max} bpm</p>
      </div>
      <div class="riga-riscaldamento">
        <div class="riga-left">
          <p class="riga-nome">Zona 3</p>
          <p class="riga-nota">Aerobico moderato</p>
        </div>
        <p class="riga-dose zona-3">${zone[3].min}–${zone[3].max} bpm</p>
      </div>
      <div class="riga-riscaldamento">
        <div class="riga-left">
          <p class="riga-nome">Zona 4</p>
          <p class="riga-nota">Soglia anaerobica</p>
        </div>
        <p class="riga-dose zona-4">${zone[4].min}–${zone[4].max} bpm</p>
      </div>
      <div class="riga-riscaldamento">
        <div class="riga-left">
          <p class="riga-nome">Zona 5</p>
          <p class="riga-nota">Massimale · Norwegian max</p>
        </div>
        <p class="riga-dose zona-5">${zone[5].min}–${zone[5].max} bpm</p>
      </div>
    </div>

    <div class="sezione-titolo">Ritmi di riferimento</div>
    <div class="blocco">
      <div class="riga-riscaldamento">
        <p class="riga-nome">Corsa easy (estate)</p>
        <p class="riga-dose">7:45–8:00 /km</p>
      </div>
      <div class="riga-riscaldamento">
        <p class="riga-nome">Corsa easy (autunno/inverno)</p>
        <p class="riga-dose">7:10–7:30 /km</p>
      </div>
      <div class="riga-riscaldamento">
        <p class="riga-nome">Norwegian — build</p>
        <p class="riga-dose">5:50–6:15 /km</p>
      </div>
      <div class="riga-riscaldamento">
        <p class="riga-nome">Norwegian — max</p>
        <p class="riga-dose">5:00–5:20 /km</p>
      </div>
      <div class="riga-riscaldamento">
        <p class="riga-nome">Norwegian — Fase 3–4</p>
        <p class="riga-dose">5:10–5:35 /km</p>
      </div>
      <div class="riga-riscaldamento">
        <p class="riga-nome">Strides riscaldamento</p>
        <p class="riga-dose">~5:30 /km</p>
      </div>
    </div>

    ${renderBackupProfilo()}

    <div class="sezione-titolo">Dati</div>
    <div class="profilo-azioni">
      <button class="btn-azione-profilo btn-export" onclick="esportaLog()">
        📤 Esporta log
      </button>
      <button class="btn-azione-profilo btn-reset" onclick="cancellaLog()">
        🗑 Cancella log
      </button>
    </div>

    <p class="profilo-versione">Versione app ${APP_VERSION}</p>
    <div style="height: 32px;"></div>
  `;
}

function esportaLog() {
  const log = caricaLog();
  if (log.length === 0) {
    alert("Nessun dato da esportare.");
    return;
  }

  let testo = "LOG ALLENAMENTI\n";
  testo += "================\n\n";

  log.forEach(sessione => {
    const data = new Date(sessione.data).toLocaleDateString("it-IT", {
      weekday: "long", day: "numeric", month: "long", year: "numeric"
    });
    const ora = new Date(sessione.data).toLocaleTimeString("it-IT", {
      hour: "2-digit", minute: "2-digit"
    });
    testo += `${data} — ${ora}\n`;
    testo += `${sessione.nome}\n`;
    sessione.esercizi.forEach(e => {
      const stato = e.completato ? "✓" : "—";
      testo += `  ${stato} ${e.nome}: ${e.serie}\n`;
    });
    testo += "\n";
  });

  // Crea un file di testo e scaricalo
  const blob = new Blob([testo], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "log_allenamenti.txt";
  a.click();
  URL.revokeObjectURL(url);
}

function cancellaLog() {
  const conferma = confirm("Sei sicuro? Tutti i dati del log verranno eliminati definitivamente.\n\nTi consiglio di scaricare prima un backup dal Profilo.");
  if (!conferma) return;

  const chiavi = [];
  for (let i = 0; i < localStorage.length; i++) {
    const chiave = localStorage.key(i);
    if (chiave.startsWith("log_")) chiavi.push(chiave);
  }
  chiavi.forEach(k => localStorage.removeItem(k));
  alert("Log cancellato.");
  navigateTo("log");
}

// ─────────────────────────────────────────
// PROFILO — dati e zone HR
// ─────────────────────────────────────────

function caricaDatiProfilo() {
  const default_dati = {
    peso: 78,
    hrmax: 186,
    vo2max: 46,
    vo2max_data: null
  };
  const salvati = localStorage.getItem("profilo");
  return salvati ? { ...default_dati, ...JSON.parse(salvati) } : default_dati;
}

function salvaDatiProfilo() {
  const peso = parseFloat(document.getElementById("input-peso").value);
  const hrmax = parseInt(document.getElementById("input-hrmax").value);

  if (isNaN(peso) || isNaN(hrmax)) {
    alert("Inserisci valori validi.");
    return;
  }

  const dati = caricaDatiProfilo();
  dati.peso = peso;
  dati.hrmax = hrmax;
  localStorage.setItem("profilo", JSON.stringify(dati));

  // Aggiorna la visualizzazione
  navigateTo("profilo");
  alert("Dati salvati.");
}

function calcolaZone(hrmax) {
  return {
    1: { min: Math.round(hrmax * 0.50), max: Math.round(hrmax * 0.60) },
    2: { min: Math.round(hrmax * 0.60) + 1, max: Math.round(hrmax * 0.70) },
    3: { min: Math.round(hrmax * 0.70) + 1, max: Math.round(hrmax * 0.80) },
    4: { min: Math.round(hrmax * 0.80) + 1, max: Math.round(hrmax * 0.90) },
    5: { min: Math.round(hrmax * 0.90) + 1, max: hrmax }
  };
}

function aggiornavo2max(valore) {
  const dati = caricaDatiProfilo();
  dati.vo2max = valore;
  const oggi = new Date().toLocaleDateString("it-IT", {
    day: "numeric", month: "long", year: "numeric"
  });
  dati.vo2max_data = oggi;
  localStorage.setItem("profilo", JSON.stringify(dati));
}

// ─────────────────────────────────────────
// GUIDE ESERCIZI
// ─────────────────────────────────────────

function apriGuida(nomeEsercizio, schedaId) {
  const guida = guide[nomeEsercizio];
  if (!guida) {
    alert("Guida non disponibile per questo esercizio.");
    return;
  }

  const content = document.getElementById("content");
  window.scrollPrimaGuida = content.scrollTop;

  let html = `
    <button class="btn-back" onclick="apriScheda('${schedaId}', true)">← Scheda</button>
    <h2 class="scheda-titolo">${nomeEsercizio.replace(" ★", "")}</h2>
    <p class="scheda-sub">${guida.muscoli}</p>

    <div class="sezione-titolo">Esecuzione</div>
    <div class="card-guida">
      <p class="guida-testo">${guida.esecuzione}</p>
    </div>

    <div class="sezione-titolo">Postura e setup</div>
    <div class="card-guida">
      <p class="guida-testo">${guida.postura}</p>
    </div>

    <div class="sezione-titolo">Errori comuni</div>
    <div class="card-guida card-guida-errori">
      <p class="guida-testo">${guida.errori}</p>
    </div>

    <div style="height: 32px;"></div>
  `;

  content.innerHTML = html;
  document.getElementById("page-title").textContent = "Guida";
  document.getElementById("page-subtitle").textContent = nomeEsercizio.replace(" ★", "");
}

// ─────────────────────────────────────────
// BACKUP E RIPRISTINO DEI DATI
// ─────────────────────────────────────────

function renderBackupProfilo() {
  const ultimo = localStorage.getItem("ultimo_backup");
  const testo = ultimo
    ? "Ultimo backup: " + new Date(ultimo).toLocaleDateString("it-IT", { day: "numeric", month: "long", year: "numeric" })
    : "Nessun backup ancora. Salva una copia di log, pesi e profilo.";

  return `
    <div class="sezione-titolo">Backup dei dati</div>
    <p class="profilo-nota-zone">${testo}</p>
    <div class="profilo-azioni">
      <button class="btn-azione-profilo btn-export" onclick="scaricaBackup()">
        💾 Scarica backup
      </button>
      <button class="btn-azione-profilo btn-export" onclick="ripristinaBackup()">
        📥 Ripristina da backup
      </button>
    </div>
  `;
}

function creaBackup() {
  const dati = {};
  for (let i = 0; i < localStorage.length; i++) {
    const chiave = localStorage.key(i);
    // Le bozze sono temporanee, non servono nel backup
    if (chiave && !chiave.startsWith("bozza_")) dati[chiave] = localStorage.getItem(chiave);
  }
  return { app: "training-app", versione: 2, creato: new Date().toISOString(), dati: dati };
}

function scaricaBackup() {
  const backup = creaBackup();
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "backup_training_" + dataLocale() + ".json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);

  localStorage.setItem("ultimo_backup", backup.creato);
  navigateTo("profilo");
}

// Valida il testo di un backup e ne restituisce il contenuto (lancia un errore se non e' valido)
function leggiBackup(testo) {
  let backup;
  try {
    backup = JSON.parse(testo);
  } catch (err) {
    throw new Error("Il file non e' un backup valido.");
  }
  if (!backup || backup.app !== "training-app" || !backup.dati || typeof backup.dati !== "object") {
    throw new Error("Questo file non e' un backup di Training App.");
  }
  return backup;
}

function applicaBackup(backup) {
  let scritti = 0;
  Object.keys(backup.dati).forEach(chiave => {
    if (typeof backup.dati[chiave] === "string") {
      localStorage.setItem(chiave, backup.dati[chiave]);
      scritti++;
    }
  });
  return scritti;
}

function ripristinaBackup() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "application/json,.json";
  input.onchange = () => {
    const file = input.files && input.files[0];
    if (!file) return;
    const lettore = new FileReader();
    lettore.onload = () => {
      let backup;
      try {
        backup = leggiBackup(lettore.result);
      } catch (err) {
        alert(err.message);
        return;
      }
      const quanti = Object.keys(backup.dati).length;
      const ok = confirm(
        "Ripristinare " + quanti + " elementi (log, pesi, profilo)?\n\n" +
        "Quelli gia' presenti con lo stesso nome o la stessa data verranno sostituiti. Gli altri restano."
      );
      if (!ok) return;
      applicaBackup(backup);
      alert("Backup ripristinato.");
      location.reload();
    };
    lettore.readAsText(file);
  };
  input.click();
}

// Chiede al browser di non cancellare i dati dell'app se il telefono ha poco spazio
function richiediStoragePersistente() {
  if (navigator.storage && navigator.storage.persist) {
    navigator.storage.persist().catch(() => {});
  }
}

// ─────────────────────────────────────────
// AVVIO
// ─────────────────────────────────────────

migraDatiV2();
richiediStoragePersistente();
