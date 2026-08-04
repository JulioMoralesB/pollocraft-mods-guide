// Physical keyboard layout, using Minecraft's own key.keyboard.* identifiers.
// Each row is an array of {code, label, w} — w is relative width (1 = one key unit).
//
// Labels reflect the Spanish (Latin America) keyboard layout — what's actually
// printed on the keycap for most players — not the raw US/English glyph. The
// `code` values are unchanged: Minecraft's key codes are physical/scancode-based
// (the same physical key is always "key.keyboard.semicolon" no matter what your
// OS layout prints on it), so bindings still match correctly either way.
// Sourced from Microsoft's official "Spanish (Latin America)" keyboard driver
// (kbdla) plus cross-checked general references. Letters, numbers, F-keys,
// modifiers, arrows and the numpad are identical to a US keyboard — only the
// punctuation keys around the edges differ.
const KEYBOARD_ROWS = [
  [
    { code: "key.keyboard.escape", label: "Esc", w: 1 },
    { code: null, label: "", w: 0.5 },
    { code: "key.keyboard.f1", label: "F1", w: 1 },
    { code: "key.keyboard.f2", label: "F2", w: 1 },
    { code: "key.keyboard.f3", label: "F3", w: 1 },
    { code: "key.keyboard.f4", label: "F4", w: 1 },
    { code: null, label: "", w: 0.5 },
    { code: "key.keyboard.f5", label: "F5", w: 1 },
    { code: "key.keyboard.f6", label: "F6", w: 1 },
    { code: "key.keyboard.f7", label: "F7", w: 1 },
    { code: "key.keyboard.f8", label: "F8", w: 1 },
    { code: null, label: "", w: 0.5 },
    { code: "key.keyboard.f9", label: "F9", w: 1 },
    { code: "key.keyboard.f10", label: "F10", w: 1 },
    { code: "key.keyboard.f11", label: "F11", w: 1 },
    { code: "key.keyboard.f12", label: "F12", w: 1 },
  ],
  [
    { code: "key.keyboard.grave.accent", label: "| °", w: 1 },
    { code: "key.keyboard.1", label: "1", w: 1 },
    { code: "key.keyboard.2", label: "2", w: 1 },
    { code: "key.keyboard.3", label: "3", w: 1 },
    { code: "key.keyboard.4", label: "4", w: 1 },
    { code: "key.keyboard.5", label: "5", w: 1 },
    { code: "key.keyboard.6", label: "6", w: 1 },
    { code: "key.keyboard.7", label: "7", w: 1 },
    { code: "key.keyboard.8", label: "8", w: 1 },
    { code: "key.keyboard.9", label: "9", w: 1 },
    { code: "key.keyboard.0", label: "0", w: 1 },
    { code: "key.keyboard.minus", label: "'", w: 1 },
    { code: "key.keyboard.equal", label: "¿", w: 1 },
    { code: "key.keyboard.backspace", label: "⌫", w: 2 },
  ],
  [
    { code: "key.keyboard.tab", label: "Tab", w: 1.5 },
    { code: "key.keyboard.q", label: "Q", w: 1 },
    { code: "key.keyboard.w", label: "W", w: 1 },
    { code: "key.keyboard.e", label: "E", w: 1 },
    { code: "key.keyboard.r", label: "R", w: 1 },
    { code: "key.keyboard.t", label: "T", w: 1 },
    { code: "key.keyboard.y", label: "Y", w: 1 },
    { code: "key.keyboard.u", label: "U", w: 1 },
    { code: "key.keyboard.i", label: "I", w: 1 },
    { code: "key.keyboard.o", label: "O", w: 1 },
    { code: "key.keyboard.p", label: "P", w: 1 },
    { code: "key.keyboard.left.bracket", label: "´ ¨", w: 1 },
    { code: "key.keyboard.right.bracket", label: "+ *", w: 1 },
    { code: "key.keyboard.backslash", label: "{ }", w: 1.5 },
  ],
  [
    { code: "key.keyboard.caps.lock", label: "Caps", w: 1.75 },
    { code: "key.keyboard.a", label: "A", w: 1 },
    { code: "key.keyboard.s", label: "S", w: 1 },
    { code: "key.keyboard.d", label: "D", w: 1 },
    { code: "key.keyboard.f", label: "F", w: 1 },
    { code: "key.keyboard.g", label: "G", w: 1 },
    { code: "key.keyboard.h", label: "H", w: 1 },
    { code: "key.keyboard.j", label: "J", w: 1 },
    { code: "key.keyboard.k", label: "K", w: 1 },
    { code: "key.keyboard.l", label: "L", w: 1 },
    { code: "key.keyboard.semicolon", label: "Ñ", w: 1 },
    { code: "key.keyboard.apostrophe", label: "[ {", w: 1 },
    { code: "key.keyboard.enter", label: "Enter", w: 2.25 },
  ],
  [
    { code: "key.keyboard.left.shift", label: "Shift", w: 2.25 },
    { code: "key.keyboard.z", label: "Z", w: 1 },
    { code: "key.keyboard.x", label: "X", w: 1 },
    { code: "key.keyboard.c", label: "C", w: 1 },
    { code: "key.keyboard.v", label: "V", w: 1 },
    { code: "key.keyboard.b", label: "B", w: 1 },
    { code: "key.keyboard.n", label: "N", w: 1 },
    { code: "key.keyboard.m", label: "M", w: 1 },
    { code: "key.keyboard.comma", label: ", ;", w: 1 },
    { code: "key.keyboard.period", label: ". :", w: 1 },
    { code: "key.keyboard.slash", label: "- _", w: 1 },
    { code: "key.keyboard.right.shift", label: "Shift", w: 2.75 },
  ],
  [
    { code: "key.keyboard.left.control", label: "Ctrl", w: 1.25 },
    { code: "key.keyboard.left.super", label: "Win", w: 1.25 },
    { code: "key.keyboard.left.alt", label: "Alt", w: 1.25 },
    { code: "key.keyboard.space", label: "Espacio", w: 6.25 },
    { code: "key.keyboard.right.alt", label: "Alt", w: 1.25 },
    { code: "key.keyboard.right.super", label: "Win", w: 1.25 },
    { code: "key.keyboard.menu", label: "Menu", w: 1.25 },
    { code: "key.keyboard.right.control", label: "Ctrl", w: 1.25 },
  ],
];

const NAV_CLUSTER_ROWS = [
  [
    { code: "key.keyboard.insert", label: "Ins", w: 1 },
    { code: "key.keyboard.home", label: "Home", w: 1 },
    { code: "key.keyboard.page.up", label: "PgUp", w: 1 },
  ],
  [
    { code: "key.keyboard.delete", label: "Del", w: 1 },
    { code: "key.keyboard.end", label: "End", w: 1 },
    { code: "key.keyboard.page.down", label: "PgDn", w: 1 },
  ],
  [
    { code: null, label: "", w: 1 },
    { code: null, label: "", w: 1 },
    { code: null, label: "", w: 1 },
  ],
  [
    { code: null, label: "", w: 1 },
    { code: "key.keyboard.up", label: "▲", w: 1 },
    { code: null, label: "", w: 1 },
  ],
  [
    { code: "key.keyboard.left", label: "◀", w: 1 },
    { code: "key.keyboard.down", label: "▼", w: 1 },
    { code: "key.keyboard.right", label: "▶", w: 1 },
  ],
];

const NUMPAD_ROWS = [
  [
    { code: "key.keyboard.num.lock", label: "Num", w: 1 },
    { code: "key.keyboard.keypad.divide", label: "/", w: 1 },
    { code: "key.keyboard.keypad.multiply", label: "*", w: 1 },
    { code: "key.keyboard.keypad.subtract", label: "-", w: 1 },
  ],
  [
    { code: "key.keyboard.keypad.7", label: "7", w: 1 },
    { code: "key.keyboard.keypad.8", label: "8", w: 1 },
    { code: "key.keyboard.keypad.9", label: "9", w: 1 },
    { code: "key.keyboard.keypad.add", label: "+", w: 1 },
  ],
  [
    { code: "key.keyboard.keypad.4", label: "4", w: 1 },
    { code: "key.keyboard.keypad.5", label: "5", w: 1 },
    { code: "key.keyboard.keypad.6", label: "6", w: 1 },
    { code: null, label: "", w: 1 },
  ],
  [
    { code: "key.keyboard.keypad.1", label: "1", w: 1 },
    { code: "key.keyboard.keypad.2", label: "2", w: 1 },
    { code: "key.keyboard.keypad.3", label: "3", w: 1 },
    { code: "key.keyboard.keypad.enter", label: "Enter", w: 1 },
  ],
  [
    { code: "key.keyboard.keypad.0", label: "0", w: 2 },
    { code: "key.keyboard.keypad.decimal", label: ".", w: 1 },
    { code: null, label: "", w: 1 },
  ],
];

const MOUSE_BUTTONS = [
  { code: "key.mouse.left", label: "Izquierdo" },
  { code: "key.mouse.right", label: "Derecho" },
  { code: "key.mouse.middle", label: "Central (rueda)" },
  { code: "key.mouse.4", label: "Lateral 4" },
  { code: "key.mouse.5", label: "Lateral 5" },
];
