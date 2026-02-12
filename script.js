// =============================================================================
// 1. CONFIGURACIÓN Y RECURSOS
// =============================================================================
const soundWin = new Audio('https://assets.mixkit.co/active_storage/sfx/2013/2013-preview.mp3');
const soundLoss = new Audio('https://assets.mixkit.co/active_storage/sfx/2019/2019-preview.mp3');
const soundTick = new Audio('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3');
const soundDing = new Audio('https://assets.mixkit.co/active_storage/sfx/2017/2017-preview.mp3');

const wordSets = {
    ANIMALES: [
        "PERRO", "GATOS", "TIGRE", "CEBRA", "MOSCA", "PANDA", "PULPO", "GALLO", "CISNE",
        "CERDO", "RATON", "CABRA", "BURRO", "ZORRO", "OVEJA", "LLAMA", "KOALA", "LINCE",
        "ERIZO", "HIENA", "LOROS", "MONOS", "FOCAS", "PAVOS", "BAGRE", "PATOS", "GANSO",
        "BUHOS", "COBRA", "SAPOS", "HURON", "LEMUR", "MORSA", "ORCAS", "PUMAS", "RANAS"
    ],
    PAISES: [
        "CHILE", "CHINA", "JAPON", "RUSIA", "INDIA", "PARIS", "DUBAI", "QATAR", "COREA",
        "KENIA", "TOKIO", "NEPAL", "SIRIA", "SUDAN", "SAMOA", "TONGA", "HAITI", "LIBIA",
        "MALTA", "YEMEN", "GABON", "CONGO", "NAURU", "QUITO", "PEKIN", "MOSCU", "VIENA",
        "PRAGA", "SUIZA", "MIAMI"
    ],
    NOMBRES: [
        "PABLO", "MARIA", "JESUS", "LAURA", "PEDRO", "DIEGO", "ELENA", "SOFIA", "LUCAS",
        "MATEO", "ANGEL", "JULIO", "ABRIL", "DARIO", "ESTER", "FELIX", "OSCAR", "RAMON",
        "RUBEN", "PAULA", "DIANA", "CLARA", "CARLA", "MARIO", "TOMAS", "JUANA", "LUCIA",
        "DAVID", "JORGE", "BRUNO", "NADIA", "IRENE", "NOEMI", "KEVIN", "CELIA", "CELIO",
        "PAOLA", "FREDY", "MARTA"
    ],
    COMIDA: [
        "ARROZ", "CARNE", "POLLO", "HUEVO", "LIMON", "MANGO", "FRESA", "PASAS", "CHILE",
        "PASTA", "QUESO", "JAMON", "TORTA", "AREPA", "TACOS", "CALDO", "PERAS", "MORAS",
        "PIZZA", "SUSHI", "PANES", "AVENA", "TRIGO", "PAPAS", "FIDEO", "PIÑAS", "COCOS",
        "KIWIS", "HABAS", "DONAS", "COLES", "APIOS", "MELON", "LECHE", "YOGUR"
    ],
    VERBOS: [
        "ANDAR", "MIRAR", "COMER", "VIVIR", "CORRE", "SALTA", "JUEGA", "VUELA", "VOLAR",
        "ROMPE", "BUSCA", "LLEVA", "CRECE", "SUBIR", "BAJAR", "ENTRA", "SALIR", "CANTA",
        "BAILA", "GRITA", "SOÑAR", "TEMER", "REZAR", "ROGAR", "NADAR", "TOCAR", "REGAR",
        "ESTAR", "HABER", "TENER", "VENIR", "BEBER", "JUGAR", "DECIR", "PONER", "GUIAR",
        "ABRIR", "BOTAR", "VOTAR", "PEDIR", "CREER", "COGER", "TOMAR", "DEJAR", "ECHAR",
        "GANAR", "GIRAR", "HACER", "IDEAR", "JURAR", "LAVAR", "MORIR", "PARAR", "PASAR",
        "PEGAR", "PODER", "ROBAR", "SABER", "TRAER", "MIRAN", "DICEN", "SABEN", "COMEN",
        "AYUDA", "BAILE", "CANTO", "GRITO", "HABLA", "JUEGO", "NACER", "BESAR"

    ],
    INGLES: [
        "APPLE", "BREAD", "BACON", "DRINK", "SALAD", "GRAPE", "TIGER", "WHALE", "SNAKE",
        "SHEEP", "EAGLE", "WRITE", "SPEAK", "LAUGH", "DANCE", "LEARN", "CHAIR", "TABLE",
        "PHONE", "CLOCK", "LIGHT", "NOTES", "STONE", "STORY", "PARTY", "LUCKY", "CANDY",
        "FUNNY", "FLOOR", "GREEN", "HELLO", "DADDY", "HOBBY", "SILLY", "BERRY"
    ],
    GENERAL: [
        "PERRO", "GATOS", "TIGRE", "CEBRA", "MOSCA", "PANDA", "PULPO", "GALLO", "CISNE",
        "CERDO", "RATON", "CABRA", "BURRO", "ZORRO", "OVEJA", "KOALA", "LINCE", "RANAS",
        "ERIZO", "HIENA", "LOROS", "MONOS", "FOCAS", "PAVOS", "BAGRE", "PATOS", "GANSO",
        "BUHOS", "SAPOS", "HURON", "LEMUR", "MORSA", "ORCAS", "PUMAS", "GABON", "CONGO",
        "CHINA", "JAPON", "RUSIA", "INDIA", "PARIS", "DUBAI", "QATAR", "COREA", "NAURU",
        "KENIA", "TOKIO", "NEPAL", "SIRIA", "SUDAN", "SAMOA", "TONGA", "HAITI", "LIBIA",
        "MALTA", "YEMEN", "ARROZ", "CARNE", "POLLO", "HUEVO", "LIMON", "MANGO", "FRESA",
        "PABLO", "MARIA", "JESUS", "LAURA", "PEDRO", "DIEGO", "ELENA", "SOFIA", "LUCAS",
        "MATEO", "ANGEL", "JULIO", "ABRIL", "DARIO", "ESTER", "FELIX", "OSCAR", "RAMON",
        "RUBEN", "PAULA", "DIANA", "CLARA", "CARLA", "MARIO", "TOMAS", "JUANA", "LUCIA",
        "DAVID", "JORGE", "BRUNO", "NADIA", "IRENE", "NOEMI", "KEVIN", "CELIA", "CELIO",
        "PAOLA", "FREDY", "MARTA", "HABAS", "DONAS", "COLES", "APIOS", "MELON", "YOGUR",
        "PASTA", "QUESO", "JAMON", "TORTA", "AREPA", "TACOS", "CALDO", "PERAS", "MORAS",
        "PIZZA", "SUSHI", "PANES", "TRIGO", "PAPAS", "FIDEO", "PIÑAS", "COCOS", "CANTA",
        "KIWIS", "PASAS", "ANDAR", "CORRE", "SALTA", "JUEGA", "VUELA", "ENTRA", "SALIR",
        "BAILA", "GRITA", "SOÑAR", "TEMER", "REZAR", "ROGAR", "NADAR", "TOCAR", "REGAR",
        "ESTAR", "HABER", "TENER", "VENIR", "BEBER", "JUGAR", "DECIR", "PONER", "GUIAR",
        "ABRIR", "BOTAR", "VOTAR", "PEDIR", "CREER", "COGER", "TOMAR", "DEJAR", "ECHAR",
        "GANAR", "GIRAR", "HACER", "IDEAR", "JURAR", "LAVAR", "MORIR", "PARAR", "PASAR",
        "PEGAR", "PODER", "ROBAR", "SABER", "TRAER", "MIRAN", "DICEN", "SABEN", "COMEN",
        "LLEVA", "CRECE", "SUBIR", "BAJAR", "CALVO", "ATRAS", "ATLAS", "BLUSA", "SUDOR",
        "PAÑOS", "ABUSO", "ACTOR", "ALGAS", "ALTAR", "ANCHO", "ANIMO", "ANTES", "NIVEL",
        "ARBOL", "ASILO", "ASTRO", "AUTOS", "AVION", "AYUDA", "BAILE", "BANCO", "BARCO",
        "BARRO", "BATEA", "BINGO", "BOLSO", "BRAZO", "BRISA", "BRUJO", "BUENO", "RUMBO",
        "BURLA", "BUSCA", "CALOR", "CAMPO", "CANAL", "CANTO", "CAPAZ", "CARRO", "HUMOR",
        "CARTA", "CASAS", "CAUSA", "CERRO", "CHICO", "CIELO", "CINCO", "CLASE", "CLAVO",
        "COBRA", "COCHE", "COFRE", "COLOR", "COMER", "CORAL", "CORTE", "COSTO", "CRUEL",
        "CUEVA", "CULPA", "CURSO", "DADOS", "DARDO", "DATOS", "DEBER", "DICHA", "DIETA",
        "DISCO", "DONDE", "DORAR", "EBANO", "ENANO", "ELITE", "ERROR", "FILAS", "PESCA",
        "EXTRA", "FALSO", "FALTA", "FAROL", "FECHA", "FERIA", "FICHA", "FLACO", "FLOTA",
        "FRITO", "FUEGO", "FUERA", "FURIA", "GLOBO", "GOLPE", "GOMAS", "GORRA", "GOTAS",
        "GRADO", "GRANO", "GRITO", "GRUPO", "GUAPA", "GUAPO", "HABLA", "CALMA", "NORMA",
        "HACHA", "ARMAS", "HASTA", "HECHO", "HIELO", "HERIR", "HIJOS", "HOJAS", "HONDA",
        "HORAS", "HORNO", "HOTEL", "HUESO", "IDEAL", "IDEAS", "IGUAL", "ISLAS", "JABON",
        "JARRA", "JAULA", "JEFES", "JUEGO", "JUGOS", "JUNTO", "LABIO", "LADOS", "EXITO",
        "LAGOS", "LANZA", "LARGO", "LECHE", "LENTO", "LETRA", "LIBRE", "LIBRO", "LINDA",
        "LINDO", "LISTA", "LISTO", "LLAVE", "LLENA", "LLENO", "LLORO", "COCOA", "LOGRO",
        "LUCHA", "OTRAS", "LUEGO", "LUGAR", "LUNES", "MADRE", "MAGIA", "MANOS", "MAPAS",
        "OVULO", "MARCA", "MARCO", "MAREA", "MARTE", "MARZO", "MASAS", "MATAR", "MAYOR",
        "MEDIA", "MEDIO", "MEJOR", "MENOR", "MENOS", "MENTE", "MESAS", "METRO", "MIEDO",
        "MINAS", "MIRAR", "MISMO", "MITAD", "MOLER", "MONTE", "MOTOR", "MOVER", "SAZON",
        "MOVIL", "MUELA", "MUERE", "MUJER", "MUNDO", "MUSEO", "NACER", "NARIZ", "FELIZ",
        "NEGRO", "NIETO", "NIEVE", "NIÑOS", "NOBLE", "NOCHE", "NOTAS", "NUEVA", "NUEVO",
        "NUNCA", "OBRAS", "ORDEN", "OREJA", "OSADO", "OTROS", "OVALO", "PADRE", "PAGAR",
        "PALOS", "PANAL", "PANEL", "PAPEL", "PARDO", "PARED", "PARTE", "JOVEN", "GRATO",
        "PASTO", "PATAS", "PATIO", "PAUSA", "PECHO", "PEDAL", "PELEA", "PELOS", "GORDO",
        "PENAS", "PESAR", "PIANO", "PIEZA", "PILAR", "PINTO", "POETA", "POLVO", "BELLO",
        "SANAR", "BESAR", "POSTE", "PRIMO", "PUNTO", "QUIEN", "RADIO", "RAMAS", "CLARO",
        "RAYOS", "RAZON", "REGLA", "RELOJ", "REMAR", "RENTA", "RESTO", "ROBOT", "VOLAR",
        "ROCAS", "ROSAS", "ROMPE", "SABOR", "SACOS", "SALTO", "SALUD", "GAFAS", "FAVOR",
        "SANTO", "SECOS", "SELLO", "SERIE", "SILLA", "SOBRE", "SOCIO", "SOLAR", "SOLOS",
        "SOPLA", "SORDO", "SUAVE", "SUCIO", "SUELO", "SUEÑO", "TABLA", "TARDE", "TAREA",
        "TECHO", "TELON", "TEMOR", "TINTA", "TIPOS", "TONTO", "TORRE", "COBRE", "CIEGO",
        "TRUCO", "UNION", "USARA", "VACIO", "VAGOS", "VALOR", "VASOS", "VECES", "GRIPE",
        "VELAS", "VENTA", "VERDE", "VIAJE", "VIDAS", "VIEJO", "VUELO", "VISTA", "SUEÑA",
        "VIVIR", "ZUMOS", "BELLA", "DANZA", "USADO", "CAMAS", "PLATO", "CABLE", "OIDOS",
        "TAPAS", "VIDEO", "POBRE", "FONDO", "AVISO", "NUBES", "CLIMA", "FORMA", "PASOS",
        "PLANO", "TURNO", "RUIDO", "LUCES", "FRASE", "SONAR", "ZONAR", "DEDOS", "BANDA",
        "TEXTO", "LATEX", "QUITO", "PEKIN", "MOSCU", "VIENA", "PRAGA", "SUIZA", "MIAMI",
        "APPLE", "BREAD", "BACON", "DRINK", "SALAD", "GRAPE", "TIGER", "WHALE", "SNAKE",
        "SHEEP", "EAGLE", "WRITE", "SPEAK", "LAUGH", "DANCE", "LEARN", "CHAIR", "TABLE",
        "PHONE", "CLOCK", "LIGHT", "NOTES", "STONE", "STORY", "PARTY", "LUCKY", "CANDY",
        "FUNNY", "FLOOR", "GREEN", "HELLO", "DADDY", "HOBBY", "SILLY", "BERRY"
    ]
};



const victoryMessages = {
    ANIMALES: ["¡Rugido de victoria!", "¡Instinto salvaje!", "¡Eres el alfa!"],
    PAISES: ["¡Victoria internacional!", "¡Trotamundos experto!", "¡Sin fronteras!"],
    NOMBRES: ["¡Qué buena memoria!", "¡Un nombre inolvidable!", "¡Ganaste!"],
    COMIDA: ["¡Buen provecho!", "¡Victoria deliciosa!", "¡Chef del Wordle!"],
    GENERAL: ["¡Impresionante!", "¡Punto para el equipo!", "¡Lo lograste!"]
};

//const defeatMessages = ["¡Se les escapó por poco!", "¡Más suerte la próxima!", "¡Casi lo logran!", "¡No se rindan!"];
const defeatMessages = {
    TIMEOUT: ["¡El tiempo se agotó!", "¡Qué mala suerte, tiempo fuera!"],
    ANIMALES: ["¡Se escapó la presa!", "¡El espécimen huyó!", "¡Te faltó instinto!", "¡Perdiste el rastro!"],
    PAISES: ["¡Te perdiste en el mapa!", "¡Vuelo cancelado!", "¡Escala fallida!", "¡Sin brújula!"],
    NOMBRES: ["¡Se te olvidó quién era!", "¡Desconocido total!", "¡Nombre borrado!", "¡Mala memoria!"],
    COMIDA: ["¡Se te quemó el arroz!", "¡Plato amargo!", "¡Receta fallida!", "¡Mal sabor de boca!"],
    VERBOS: ["¡Te quedaste sin acción!", "¡Mal conjugado!", "¡Falta de movimiento!", "¡Verbo fallido!"],
    GENERAL: ["¡Suerte para la próxima!", "¡Casi lo logras!", "¡Inténtalo de nuevo!", "¡No te rindas!"],
    INGLES: ["¡Lost in translation! Te faltó vocabulario.", "¡Game over! Se te trabó la lengua.", "¡Te faltó el diccionario!", "¡Keep trying! Sigue practicando tu inglés."]
};

const playableCategories = Object.keys(wordSets);
const allWords = [...new Set(Object.values(wordSets).flat())];

const playerId = localStorage.getItem("playerId")
    || crypto.randomUUID();

localStorage.setItem("playerId", playerId);

let lastWinsRendered = { A: -1, B: -1 };

// =============================================================================
// 2. ESTADO DEL JUEGO (SYNCRONIZADO)
// =============================================================================
let stats = JSON.parse(localStorage.getItem('wordleElite_PRO_V3')) || {
    wins: { A: 0, B: 0 },
    turns: { A: 0, B: 0 },
    hist: { A: [0, 0, 0, 0, 0, 0], B: [0, 0, 0, 0, 0, 0] },
    current: "A",
    goal: 5,
    started: false,
    usedWords: [],
    category: "GENERAL",
    timeLimit: 120,
    categoryUsage: {
        A: { ANIMALES: 0, PAISES: 0, NOMBRES: 0, COMIDA: 0, VERBOS: 0, GENERAL: 0, INGLES: 0 },
        B: { ANIMALES: 0, PAISES: 0, NOMBRES: 0, COMIDA: 0, VERBOS: 0, GENERAL: 0, INGLES: 0 }
    },
    boardLetters: Array(30).fill(""),
    boardColors: Array(30).fill(""),
    currentAttempt: 0,
    guess: "",
    endMessage: "",
    players: {}

};
if (!stats.players) stats.players = {};


// Inicialización de seguridad para categorías
playableCategories.forEach(cat => {
    if (!stats.categoryUsage.A[cat]) stats.categoryUsage.A[cat] = 0;
    if (!stats.categoryUsage.B[cat]) stats.categoryUsage.B[cat] = 0;
});

window.stats = stats; // Exponer para Firebase

let secret = "", attempt = 0, guess = "", gameOver = false, timerStarted = false;
let myTeam = "", timerId = null, timeLeft = 120;

// =============================================================================
// 3. SINCRONIZACIÓN Y NUBE
// =============================================================================
window.applyCloudChanges = function (data) {
    // 1. Validación de seguridad: Si no hay datos, no hacer nada
    if (!data) return;

    // Detectar reinicio TOTAL (Hard Reset) desde otro cliente
    // Si los datos entrantes tienen 0 victorias y 0 intentos, asumimos reset
    if (data.wins && data.wins.A === 0 && data.wins.B === 0 && data.turns.A === 0 && (!data.boardLetters || data.boardLetters.every(l => l === ""))) {
        stats = data;
        window.stats = stats;
        softResetVisual(); // Limpia visualmente el tablero
        renderUI(); // Actualiza marcadores a 0
        return; // Salimos para evitar conflictos
    }

    // Detectar reinicio de RONDA remoto
    if (data.currentAttempt === 0 && data.guess === "" && gameOver && !data.endMessage) {
        softResetVisual();
    }

    stats = data;
    window.stats = stats;

    // Sincronizar tiempo visualmente
    document.getElementById("timer").innerText = stats.timeLeft || 120;

    // 2. Acceso seguro a usedWords
    if (data.usedWords && data.usedWords.length > 0) {
        secret = data.usedWords[data.usedWords.length - 1];
    }

    // Sincronizar categoría visualmente en el selector
    if (data.category) {
        document.getElementById("categorySelect").value = data.category;
    }

    if (data.endMessage) {
        document.getElementById("message").innerText = data.endMessage;
        gameOver = true;
    } else if (!gameOver) {
        document.getElementById("message").innerText = "";
    }

    // PINTAR TABLERO (Con validación de existencia de arrays)
    const cells = document.querySelectorAll("#grid .cell");
    if (stats.boardLetters && cells.length > 0) {
        stats.boardLetters.forEach((letra, i) => {
            if (cells[i]) {
                cells[i].textContent = letra;
                cells[i].className = "cell";
                if (stats.boardColors && stats.boardColors[i]) {
                    cells[i].classList.add(stats.boardColors[i]);
                    cells[i].style.color = "white";
                } else {
                    cells[i].style.color = "";
                }
            }
        });
    }

    // ACTUALIZACIÓN: Llamar al bloqueo visual
    updateTurnOverlay();

    renderUI();
};

function sync() {
    window.stats = stats;
    localStorage.setItem('wordleElite_PRO_V3', JSON.stringify(stats));
    if (typeof window.syncToCloud === "function") window.syncToCloud();
    renderUI();
}

// =============================================================================
// 4. LÓGICA DE JUEGO
// =============================================================================
function handleKey(k) {
    if (gameOver) return;

    // VALIDACIÓN DE EQUIPO (Lobby)
    if (!myTeam) return; // No ha elegido equipo
    if (myTeam !== stats.current) return; // No es su turno

    // Inicio de Timer y Juego
    if (!timerStarted && k !== "ENTER" && k !== "⌫") startTimer();
    if (!stats.started && k !== "ENTER" && k !== "⌫") {
        stats.started = true;
    }

    if (k === "ENTER") {
        if (guess.length === 5) submit();
    } else if (k === "⌫") {
        guess = guess.slice(0, -1);
    } else if (guess.length < 5 && k.length === 1) {
        guess += k;
    }

    // Actualizar espejo para la nube
    stats.guess = guess;
    const start = attempt * 5;
    for (let i = 0; i < 5; i++) {
        stats.boardLetters[start + i] = guess[i] || "";
    }
    sync();
}

function submit() {
    if (!allWords.includes(guess)) {
        const msg = document.getElementById("message");
        msg.innerText = "⚠️ PALABRA NO VÁLIDA";
        return;
    }

    const start = attempt * 5;
    let tempSec = secret.split("");
    const res = Array(5).fill("absent");

    for (let i = 0; i < 5; i++) {
        if (guess[i] === secret[i]) {
            res[i] = "correct";
            tempSec[i] = null;
        }
    }

    for (let i = 0; i < 5; i++) {
        if (res[i] !== "correct" && tempSec.includes(guess[i])) {
            res[i] = "present";
            tempSec[tempSec.indexOf(guess[i])] = null;
        }
    }

    res.forEach((s, i) => {
        stats.boardColors[start + i] = s;
        // Pintar teclado localmente para feedback inmediato
        const key = document.getElementById("k-" + guess[i]);
        if (key && !key.classList.contains("correct")) key.className = "key " + s;
    });

    // Verificar si el tiempo se agotó
    if (stats.timeLeft <= 0) {
        soundLoss.play();
        const msgs = defeatMessages.TIMEOUT || ["¡El tiempo se agotó!", "¡Qué mala suerte, tiempo fuera!"];
        end(`❌ ${msgs[Math.floor(Math.random() * msgs.length)]} ERA: ${secret}`);
        return; // Termina la ejecución si el tiempo se agotó
    }

    // Mensaje de Victoria
    if (guess === secret) {
        stats.wins[stats.current]++;
        stats.hist[stats.current][attempt]++;
        soundWin.play();
        const msgs = victoryMessages[stats.category] || victoryMessages.GENERAL;
        end(`🏆 ${msgs[Math.floor(Math.random() * msgs.length)]}`);
    }
    // Mensaje de Derrota (si se alcanzaron 5 intentos sin adivinar)
    else if (attempt === 5) {
        soundLoss.play();
        const defeatMsgs = defeatMessages[stats.category] || defeatMessages.GENERAL;
        end(`❌ ${defeatMsgs[Math.floor(Math.random() * defeatMsgs.length)]} ERA: ${secret}`);
    }
    else {
        attempt++;
        stats.currentAttempt = attempt;
        guess = "";
        stats.guess = "";
        sync();
    }
}


function end(m) {
    gameOver = true;
    clearInterval(timerId);
    timerStarted = false;
    stats.endMessage = m;
    stats.turns[stats.current]++;
    stats.current = (stats.current === "A") ? "B" : "A";
    sync();
}

// =============================================================================
// 5. INTERFAZ Y EVENTOS DEL DOM
// =============================================================================
window.selectTeam = function (t) {
    myTeam = t;
    // Feedback visual en botones del lobby
    document.getElementById("btnTeamA").className = (t === 'A') ? "team-btn selected" : "team-btn";
    document.getElementById("btnTeamB").className = (t === 'B') ? "team-btn selected" : "team-btn";
};
window.joinGame = function () {
    if (!stats) {
        console.log("Stats aún no cargado...");
        return;
    }

    if (!myTeam) return alert("¡Selecciona un EQUIPO!");

    const nick = document.getElementById("playerNick").value.trim();
    if (!nick) return alert("¡Escribe tu NOMBRE!");

    const playerId = localStorage.getItem("playerId") || crypto.randomUUID();
    localStorage.setItem("playerId", playerId);

    // Aseguramos que stats.players esté bien
    if (!stats.players) stats.players = {};

    // Asignamos el jugador
    stats.players[playerId] = {
        name: nick,
        team: myTeam
    };

    // Ocultar el modal
    document.getElementById("lobbyModal").style.display = "none";

    // Verificar si el array de palabras usadas está vacío
    if (!stats.usedWords || stats.usedWords.length === 0) {
        showCategoryRoulette();
    }

    // Sincronizar datos con Firebase
    sync();

    // Asegurarnos de que los botones estén habilitados
    document.getElementById("btnTeamA").disabled = false;
    document.getElementById("btnTeamB").disabled = false;

    // Vuelve a activar el botón de "unirse al juego" si estaba desactivado
    document.getElementById("joinButton").disabled = false;

    // Verificar si todo está en orden visual
    renderUI();
};

window.toggleTheme = function () {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
};

async function showCategoryRoulette() {
    if (myTeam !== stats.current) return; // Doble seguridad

    const catDisplay = document.getElementById("categorySelect");
    for (let i = 0; i < 15; i++) {
        catDisplay.value = playableCategories[Math.floor(Math.random() * 7)];
        soundTick.play();
        await new Promise(r => setTimeout(r, 100));
    }
    soundDing.play();

    stats.category = catDisplay.value;

    // Lógica de "Fair Play" (Límite 2 usos)
    if (stats.categoryUsage[stats.current][stats.category] >= 2) {
        stats.category = "GENERAL";
        catDisplay.value = "GENERAL";
    }
    stats.categoryUsage[stats.current][stats.category]++;

    const list = wordSets[stats.category];
    secret = list[Math.floor(Math.random() * list.length)];
    stats.usedWords.push(secret);
    sync();
}

function startTimer() {
    if (timerStarted || gameOver) return;
    timerStarted = true;
    timerId = setInterval(() => {
        if (gameOver) return;

        // Solo el dueño del turno descuenta y sincroniza
        if (myTeam === stats.current) {
            if (stats.timeLeft > 0) {
                stats.timeLeft--;
                sync(); // Esto envía el tiempo a Firebase
            }
        }

        // Todos actualizan su pantalla con el valor de stats
        document.getElementById("timer").innerText = stats.timeLeft;
        if (stats.timeLeft <= 0) {
            const defeatMsgs = defeatMessages.TIMEOUT || ["¡El tiempo se agotó!", "¡Qué mala suerte, tiempo fuera!"];
            end(`❌ ${defeatMsgs[Math.floor(Math.random() * defeatMsgs.length)]} ERA: ${secret}`);
        }
    }, 1000);
}

function renderUI() {
    // Marcador
    // Asegurar que las propiedades existan antes de pintar
    if (!stats.wins) stats.wins = { A: 0, B: 0 };
    if (!stats.turns) stats.turns = { A: 0, B: 0 };
    if (!stats.hist) stats.hist = { A: [0, 0, 0, 0, 0, 0], B: [0, 0, 0, 0, 0, 0] };

    document.getElementById("scoreHeader").innerText = `${stats.wins.A} — ${stats.wins.B}`;
    document.getElementById("turnStatA").innerText = "Partidas: " + stats.turns.A;
    document.getElementById("turnStatB").innerText = "Partidas: " + stats.turns.B;

    // Banner de Turno
    const banner = document.getElementById("turnIndicator");
    const activeName = document.getElementById("activePlayerName");
   
    banner.className = `turn-banner turn-team-${stats.current}`;

    let nameInTurn = "";

    for (const id in stats.players) {
        const p = stats.players[id];
        if (p.team === stats.current) {
            nameInTurn = p.name;
            break;
        }
    }

    if (myTeam === stats.current) {
        activeName.innerText = `${nameInTurn} (TU TURNO)`;
    } else {
        activeName.innerText = nameInTurn ||
            (stats.current === "A" ? "EQUIPO AZUL" : "EQUIPO ROJO");
    }


    // Gráficos de Barras
    // Sistema de Trofeos
    ["A", "B"].forEach(t => {
        const container = document.getElementById("hist" + t);
        if (!container) return;

        const wins = stats.wins[t] || 0;

        // Si no cambió, no re-renderiza
        if (lastWinsRendered[t] === wins) return;

        lastWinsRendered[t] = wins;

        container.innerHTML = "";

        const trophies = Math.floor(wins / 10);
        const stars = wins % 10;

        for (let i = 0; i < trophies; i++) {
            container.innerHTML += `<span class="trophy">🏆</span>`;
        }

        for (let i = 0; i < stars; i++) {
            container.innerHTML += `<span class="star">⭐</span>`;
        }

        if (wins === 0) {
            const mensajes = [
                "🐵 ¿Se quedaron dormidos? 😴",
                "😅 Vamos equipo, aún hay tiempo...",
                "🤔 Estrategia secreta o qué?",
                "💀 Buscando la primera victoria...",
                "🔥 ¡La remontada será legendaria!"
            ];

            const random = mensajes[Math.floor(Math.random() * mensajes.length)];

            container.innerHTML = `
            <span class="no-wins">${random}</span>
            `;
        }

    });

    // 🔒 Bloqueo del botón "Siguiente Ronda" / "Siguiente Palabra"
    // Buscamos el botón por su texto o ID (ajusta 'btnNextRound' según tu HTML)
    const nextRoundBtn = document.getElementById("nextRoundBtn") || 
                         Array.from(document.querySelectorAll('button')).find(el => el.textContent.includes('Siguiente'));

    if (nextRoundBtn) {
        if (!gameOver) {
            // Mientras se está jugando: deshabilitado
            nextRoundBtn.disabled = true;
            nextRoundBtn.style.opacity = "0.5";
            nextRoundBtn.style.cursor = "not-allowed";
        } else {
            // Cuando alguien gana o pierde: habilitado
            nextRoundBtn.disabled = false;
            nextRoundBtn.style.opacity = "1";
            nextRoundBtn.style.cursor = "pointer";
        }
    }

    updateTurnLock();
}

function renderKeyboard() {
    const keys = [["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"], ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"], ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "⌫"]];
    const kb = document.getElementById("keyboard");
    if (!kb) return;
    kb.innerHTML = "";
    keys.forEach(row => {
        const div = document.createElement("div"); div.className = "keyboard-row";
        row.forEach(k => {
            const b = document.createElement("button"); b.innerText = k; b.className = "key"; b.id = "k-" + k;
            b.onclick = () => handleKey(k); div.appendChild(b);
        });
        kb.appendChild(div);
    });
}

function softResetVisual() {
    gameOver = false; attempt = 0; guess = "";
    document.getElementById("message").innerText = "";
    const grid = document.getElementById("grid");
    grid.innerHTML = "";
    for (let i = 0; i < 30; i++) grid.innerHTML += `<div class="cell"></div>`;
    renderKeyboard();
}

/*
window.resetRound = function () {
    stats.endMessage = ""; stats.guess = ""; stats.currentAttempt = 0; stats.timeLeft = 120;
    stats.boardLetters = Array(30).fill(""); stats.boardColors = Array(30).fill("");
    softResetVisual();
    showCategoryRoulette();
};
*/

window.resetRound = function () {
    // Si la partida NO ha terminado, no permitir el reset
    if (!gameOver) {
        alert("⚠️ No puedes iniciar una nueva ronda hasta que la actual termine.");
        return;
    }

    stats.endMessage = ""; 
    stats.guess = ""; 
    stats.currentAttempt = 0; 
    stats.timeLeft = 120;
    stats.boardLetters = Array(30).fill(""); 
    stats.boardColors = Array(30).fill("");
    
    softResetVisual();
    showCategoryRoulette();
};

window.resetDatabaseToDefault = function () {
    const defaultStats = {
        wins: { A: 0, B: 0 },
        turns: { A: 0, B: 0 },
        hist: { A: [0, 0, 0, 0, 0, 0], B: [0, 0, 0, 0, 0, 0] },
        current: "A",
        goal: 5,
        started: false,
        usedWords: [],
        category: "GENERAL",
        timeLeft: 120, // Sincronización de tiempo
        categoryUsage: {
            A: { ANIMALES: 0, PAISES: 0, NOMBRES: 0, COMIDA: 0, VERBOS: 0, GENERAL: 0, INGLES: 0 },
            B: { ANIMALES: 0, PAISES: 0, NOMBRES: 0, COMIDA: 0, VERBOS: 0, GENERAL: 0, INGLES: 0 }
        },
        boardLetters: Array(30).fill(""),
        boardColors: Array(30).fill(""),
        currentAttempt: 0,
        guess: "",
        endMessage: "",
        players: stats.players // Mantenemos jugadores para que no se desconecten
    };

    stats = defaultStats;
    sync(); // Esto enviará la estructura limpia a Firebase
    console.log("✅ Base de datos reseteada y sincronizada.");
};

window.hardReset = function () {
    // 1. BLOQUEO: Si hay juego en curso y ya han escrito algo
    if (!gameOver && (stats.guess.length > 0 || stats.currentAttempt > 0)) {
        alert("⚠️ NO PUEDES REINICIAR: Hay una jugada en curso. Espera a que termine la ronda.");
        return;
    }

    // 2. CONFIRMACIÓN Y EJECUCIÓN
    if (confirm("⚠️ ¿REINICIAR TORNEO COMPLETO?\n\nEsto borrará los puntos y el progreso de TODOS los jugadores conectados.")) {
        // En lugar de limpiar local y recargar, limpiamos stats y sincronizamos.
        // Esto fuerza la actualización en todas las pantallas.
        resetDatabaseToDefault();
        softResetVisual();
    }
};

// Tutorial Overlay
/*const steps = [
    { element: "goalBox", title: "Objetivo", text: "Gana quien llegue primero a la META de puntos." },
    { element: "categoryBox", title: "Categoría", text: "La ruleta elige el tema. ¡Ojo con las repetidas!" },
    { element: "grid", title: "Tablero", text: "Tu rival verá lo que escribes en tiempo real." }
];*/
const steps = [
    {
        element: "goalBox",
        title: "🎯 Objetivo del Torneo",
        text: "Aquí defines a cuántas victorias se gana el torneo. ¡Decídelo bien antes de empezar!",
        // Ajustado: Izquierda (20%) y debajo de la barra (150px)
        pos: { top: "150px", left: "20%" } 
    },
    {
        element: "categorySelect",
        title: "🎲 Categoría y Ruleta",
        text: "La ruleta elige el tema. Tienes 2 'comodines' por categoría. Si es muy difícil, ¡no escribas nada y espera a la siguiente ronda!",
        // Ajustado: Centro absoluto (50%) y debajo de la barra
        pos: { top: "150px", left: "50%" }
    },
    {
        element: "timeInput",
        title: "⏳ Tiempo de Ronda",
        text: "Segundos por turno. Si el reloj llega a cero antes de adivinar, pierdes el turno.",
        // Ajustado: Derecha (80%) y debajo de la barra
        pos: { top: "150px", left: "80%" } 
    },
    {
        element: "grid",
        title: "🧩 El Tablero",
        text: "Tu rival ve lo que escribes letra por letra. \n🟩 Verde: Correcta. \n🟨 Amarilla: Mala posición. \n⬜ Gris: No existe.",
        // Ajustado: Centro de la pantalla, encima del teclado
        pos: { top: "45%", left: "50%" } 
    }
];
let currentStep = 0;

window.startInteractiveTutorial = function () {
    document.getElementById("tutorialOverlay").style.display = "flex";
    currentStep = 0;
    showStep();
};

/*
function showStep() {
    const step = steps[currentStep];
    document.getElementById("stepTitle").innerText = step.title;
    document.getElementById("stepText").innerText = step.text;
    // Si quieres mover la flecha dinámicamente, aquí iría la lógica de posición
}
*/

function showStep() {
    const step = steps[currentStep];
    const modal = document.getElementById("tutorialModal");
    
    // 1. Actualizar textos
    document.getElementById("stepTitle").innerText = step.title;
    document.getElementById("stepText").innerText = step.text;

    // 2. Aplicar coordenadas dinámicas
    // Usamos transform para asegurar que el 'left: 50%' centre la caja perfectamente
    modal.style.position = "absolute";
    modal.style.top = step.pos.top;
    modal.style.left = step.pos.left;
    modal.style.transform = "translate(-50%, 0)"; 
    
    // 3. Resaltar visualmente el elemento objetivo (Opcional pero recomendado)
    // Removemos resaltados anteriores
    document.querySelectorAll(".highlight-tutorial").forEach(el => el.classList.remove("highlight-tutorial"));
    
    const targetEl = document.getElementById(step.element);
    if (targetEl) {
        targetEl.classList.add("highlight-tutorial");
        // Scroll suave hacia el elemento si está fuera de pantalla (útil en móviles)
        targetEl.scrollIntoView({ behavior: "smooth", block: "center" });
    }
}

window.nextStep = function () {
    currentStep++;
    if (currentStep < steps.length) {
        showStep();
    } else {
        closeTutorial();
    }
};

window.closeTutorial = function () { // Cierra modal overlay
    document.getElementById("tutorialOverlay").style.display = "none";
    document.getElementById("tutorialModal").style.display = "none";
    localStorage.setItem('tutorialVisto', 'true');
};

window.skipTutorial = function () {
    closeTutorial();
};


// Bloqueo de reinicio accidental (F5 y Ctrl + R)
window.addEventListener('keydown', e => {
    // Detecta F5 (e.key === 'F5')
    // Detecta Ctrl + R (e.ctrlKey && e.key.toLowerCase() === 'r')
    // Detecta Cmd + R en Mac (e.metaKey && e.key.toLowerCase() === 'r')
    if (
        e.key === 'F5' || 
        ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'r')
    ) {
        e.preventDefault();
        alert("⚠️ El reinicio del navegador está bloqueado para evitar la pérdida de datos de la partida. Usa el botón de Reinicio del Torneo si es necesario.");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    renderKeyboard();
    softResetVisual();
    renderUI(); // Pintar estado inicial

    // Verificar tutorial
    if (!localStorage.getItem('tutorialVisto')) {
        // Muestra el modal estático primero, o el interactivo, según prefieras
        document.getElementById("tutorialModal").style.display = "flex";
    }
});

document.onkeydown = (e) => {
    let k = e.key.toUpperCase();
    if (k === "BACKSPACE") k = "⌫";
    handleKey(k);
};

// Función para mostrar/ocultar el bloqueo de turno
function updateTurnOverlay() {
    let overlay = document.getElementById("turn-blocker-overlay");

    // Si no existe el elemento, lo creamos (solo la primera vez)
    if (!overlay) {
        overlay = document.createElement("div");
        overlay.id = "turn-blocker-overlay";
        overlay.innerHTML = `
            <div style="background: rgba(0,0,0,0.8); color: white; padding: 20px; border-radius: 15px; text-align: center; border: 2px solid #3b82f6;">
                <h2 id="overlay-msg">ESPERANDO AL OPONENTE...</h2>
                <p>Es el turno del otro equipo</p>
                <div class="spinner" style="border: 4px solid #f3f3f3; border-top: 4px solid #3b82f6; border-radius: 50%; width: 30px; height: 30px; animation: spin 2s linear infinite; margin: 10px auto;"></div>
            </div>
            <style>
                #turn-blocker-overlay {
                    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                    display: flex; justify-content: center; align-items: center;
                    z-index: 9999; pointer-events: all; cursor: not-allowed;
                }
                @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
            </style>
        `;
        document.body.appendChild(overlay);
    }

    // Lógica de visibilidad
    if (myTeam && stats.current !== myTeam && !gameOver) {
        overlay.style.display = "flex";
        document.getElementById("overlay-msg").innerText = "TURNO DEL EQUIPO " + (stats.current === "A" ? "AZUL" : "ROJO");
    } else {
        overlay.style.display = "none";
    }
}

function updateTurnLock() {
    const grid = document.getElementById("grid");
    const keyboard = document.getElementById("keyboard");
    const msg = document.getElementById("message");

    // 🔒 Bloqueo / desbloqueo de UI
    if (myTeam === stats.current && !stats.endMessage) {
        grid.style.pointerEvents = "auto";
        keyboard.style.pointerEvents = "auto";
        grid.style.opacity = "1";
        keyboard.style.opacity = "1";
    } else {
        grid.style.pointerEvents = "none";
        keyboard.style.pointerEvents = "none";
        grid.style.opacity = "0.4";
        keyboard.style.opacity = "0.4";
    }

    // 📢 Mensajes (PRIORIDAD ABSOLUTA AL MENSAJE FINAL)
    if (stats.endMessage) {
        msg.innerText = stats.endMessage;
    } else if (myTeam !== stats.current) {
        msg.innerText = "⛔ Esperando turno del otro equipo";
    } else {
        msg.innerText = "";
    }
}