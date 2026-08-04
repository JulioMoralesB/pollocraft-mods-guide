// The controller scheme used on the server. Most entries are Controlify's
// official defaults (read straight from the mod's own default_bind/default.json,
// not guessed); the roll on the West button is the server's own change.
// The `custom` flags are kept for reference but are no longer surfaced in the
// UI — players just want to know what each button does.
const CONTROLLER_BUTTONS = {
  "face-south": {
    label: "Sur (A / Cross)",
    actions: [
      { text: "Saltar" },
      { text: "Confirmar / activar en menús" },
      { text: "Elegir objeto en el inventario" },
      { text: "Clic izquierdo (mouse virtual)" },
    ],
  },
  "face-east": {
    label: "Este (B / Circle)",
    actions: [{ text: "Volver / cerrar menú" }],
  },
  "face-west": {
    label: "Oeste (X / Square)",
    actions: [
      { text: "Voltereta de esquive (Combat Roll)", custom: true },
      { text: "Tomar la mitad de una pila en el inventario" },
      { text: "Acción contextual 1 en menús" },
      { text: "Clic derecho (mouse virtual)" },
    ],
  },
  "face-north": {
    label: "Norte (Y / Triangle)",
    actions: [
      { text: "Abrir inventario" },
      { text: "Soltar todo el inventario" },
      { text: "Mover rápido en inventario (shift-clic)" },
      { text: "Acción contextual 2 en menús" },
    ],
  },
  "trigger-left": {
    label: "Gatillo izquierdo (LT / L2)",
    actions: [{ text: "Usar objeto / colocar bloque" }],
  },
  "trigger-right": {
    label: "Gatillo derecho (RT / R2)",
    actions: [{ text: "Atacar / romper bloque" }],
  },
  "shoulder-left": {
    label: "Hombro izquierdo (LB / L1)",
    actions: [{ text: "Ranura anterior del hotbar" }, { text: "Pestaña anterior en menús" }],
  },
  "shoulder-right": {
    label: "Hombro derecho (RB / R1)",
    actions: [{ text: "Ranura siguiente del hotbar" }, { text: "Pestaña siguiente en menús" }],
  },
  "stick-left": {
    label: "Stick izquierdo",
    actions: [{ text: "Caminar / moverse" }, { text: "Navegar menús" }, { text: "Mover el mouse virtual" }],
  },
  "stick-right": {
    label: "Stick derecho",
    actions: [{ text: "Mirar alrededor (cámara)" }, { text: "Navegar el menú radial" }, { text: "Scroll (mouse virtual)" }],
  },
  "stick-left-click": {
    label: "Clic del stick izquierdo (L3)",
    actions: [{ text: "Correr" }, { text: "Acción contextual 3 en menús" }],
  },
  "stick-right-click": {
    label: "Clic del stick derecho (R3)",
    actions: [{ text: "Agacharse" }],
  },
  "dpad-up": {
    label: "D-Pad arriba",
    actions: [{ text: "Abrir chat" }],
  },
  "dpad-down": {
    label: "D-Pad abajo",
    actions: [{ text: "Soltar objeto seleccionado" }],
  },
  "dpad-left": {
    label: "D-Pad izquierda",
    actions: [{ text: "Seleccionar bloque (pick block)" }],
  },
  "dpad-right": {
    label: "D-Pad derecha",
    actions: [{ text: "Abrir el menú rápido (la rueda que se explica abajo)" }],
  },
  "back": {
    label: "Back / Select",
    actions: [{ text: "Cambiar perspectiva de cámara" }, { text: "Alternar el mouse virtual" }],
  },
  "start": {
    label: "Start",
    actions: [{ text: "Pausa / abrir menú de juego" }],
  },
};

// Real, current radial menu — read directly from config/controlify.json.
const RADIAL_MENU_ACTIONS = [
  "Cambiar de mano",
  "Abrir mapa completo (Xaero)",
  "Soltar la pila completa",
  "Silenciar micrófono",
  "Crear waypoint",
  "Abrir mochila (Traveler's Backpack)",
  "Tomar captura de pantalla",
  "Ver lista de jugadores",
];
