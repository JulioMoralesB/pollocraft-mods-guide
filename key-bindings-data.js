const KEY_BINDINGS = {
  "key.mouse.left": {
    "normal": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Atacar / Romper bloque",
        "action": "key.attack"
      },
      {
        "mod": "Just Enough Items",
        "label": "Mostrar receta (alterno)",
        "action": "key.jei.showRecipe2"
      },
      {
        "mod": "Just Enough Items",
        "label": "Obtener un objeto (modo creativo)",
        "action": "key.jei.cheatOneItem"
      }
    ],
    "f3": []
  },
  "key.mouse.right": {
    "normal": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Usar objeto / Colocar bloque",
        "action": "key.use"
      },
      {
        "mod": "Just Enough Items",
        "label": "Mostrar usos (alterno)",
        "action": "key.jei.showUses2"
      },
      {
        "mod": "Just Enough Items",
        "label": "Limpiar barra de búsqueda",
        "action": "key.jei.clearSearchBar"
      },
      {
        "mod": "Just Enough Items",
        "label": "Obtener un objeto (alterno)",
        "action": "key.jei.cheatOneItem2"
      }
    ],
    "f3": []
  },
  "key.keyboard.w": {
    "normal": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Caminar hacia adelante",
        "action": "key.forward"
      }
    ],
    "f3": []
  },
  "key.keyboard.a": {
    "normal": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Moverse a la izquierda",
        "action": "key.left"
      },
      {
        "mod": "Just Enough Items",
        "label": "Agregar a favoritos",
        "action": "key.jei.bookmark"
      }
    ],
    "f3": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Depuración: recargar chunks (F3+A)",
        "action": "key.debug.reloadChunk"
      }
    ]
  },
  "key.keyboard.s": {
    "normal": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Caminar hacia atrás",
        "action": "key.back"
      }
    ],
    "f3": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Depuración: volcar texturas dinámicas (F3+S)",
        "action": "key.debug.dumpDynamicTextures"
      }
    ]
  },
  "key.keyboard.d": {
    "normal": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Moverse a la derecha",
        "action": "key.right"
      }
    ],
    "f3": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Depuración: limpiar chat (F3+D)",
        "action": "key.debug.clearChat"
      }
    ]
  },
  "key.keyboard.space": {
    "normal": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Saltar",
        "action": "key.jump"
      }
    ],
    "f3": []
  },
  "key.keyboard.left.shift": {
    "normal": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Agacharse",
        "action": "key.sneak"
      },
      {
        "mod": "Just Enough Items",
        "label": "Pausar rotación de recetas",
        "action": "key.jei.pauseRecipeCycling"
      }
    ],
    "f3": []
  },
  "key.keyboard.left.control": {
    "normal": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Correr",
        "action": "key.sprint"
      },
      {
        "mod": "Just Enough Items",
        "label": "Mostrar funciones extra en favoritos",
        "action": "key.jei.showBookmarkTooltipFeatures"
      }
    ],
    "f3": []
  },
  "key.keyboard.q": {
    "normal": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Soltar objeto seleccionado",
        "action": "key.drop"
      }
    ],
    "f3": []
  },
  "key.keyboard.e": {
    "normal": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Abrir/cerrar inventario",
        "action": "key.inventory"
      }
    ],
    "f3": []
  },
  "key.keyboard.enter": {
    "normal": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Abrir chat",
        "action": "key.chat"
      }
    ],
    "f3": []
  },
  "key.keyboard.tab": {
    "normal": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Ver lista de jugadores",
        "action": "key.playerlist"
      },
      {
        "mod": "Xaero's Minimap",
        "label": "Agrandar minimapa",
        "action": "gui.xaero_enlarge_map"
      }
    ],
    "f3": []
  },
  "key.mouse.middle": {
    "normal": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Seleccionar bloque (pick block)",
        "action": "key.pickItem"
      },
      {
        "mod": "Minecraft (vanilla)",
        "label": "Menú de espectador",
        "action": "key.spectatorHotbar"
      },
      {
        "mod": "Just Enough Items",
        "label": "Obtener una pila de objetos (alterno)",
        "action": "key.jei.cheatItemStack2"
      }
    ],
    "f3": []
  },
  "key.keyboard.slash": {
    "normal": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Abrir comando (/)",
        "action": "key.command"
      }
    ],
    "f3": []
  },
  "key.keyboard.o": {
    "normal": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Lista de amigos",
        "action": "key.friends"
      }
    ],
    "f3": []
  },
  "key.keyboard.p": {
    "normal": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Interacciones sociales",
        "action": "key.socialInteractions"
      }
    ],
    "f3": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Depuración: pausar al perder foco (F3+P)",
        "action": "key.debug.focusPause"
      }
    ]
  },
  "key.keyboard.f1": {
    "normal": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Ocultar/mostrar interfaz (cámara cinemática)",
        "action": "key.toggleGui"
      }
    ],
    "f3": []
  },
  "key.keyboard.f4": {
    "normal": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Alternar efectos de shader (espectador)",
        "action": "key.toggleSpectatorShaderEffects"
      },
      {
        "mod": "Freecam",
        "label": "Activar/desactivar cámara libre",
        "action": "key.freecam.toggle"
      }
    ],
    "f3": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Depuración: cambiar modo de juego (F3+F4)",
        "action": "key.debug.switchGameMode"
      }
    ]
  },
  "key.keyboard.f2": {
    "normal": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Tomar captura de pantalla",
        "action": "key.screenshot"
      }
    ],
    "f3": []
  },
  "key.keyboard.f5": {
    "normal": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Cambiar perspectiva de cámara",
        "action": "key.togglePerspective"
      }
    ],
    "f3": []
  },
  "key.keyboard.f11": {
    "normal": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Pantalla completa",
        "action": "key.fullscreen"
      }
    ],
    "f3": []
  },
  "key.keyboard.f": {
    "normal": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Intercambiar objeto con mano secundaria",
        "action": "key.swapOffhand"
      }
    ],
    "f3": []
  },
  "key.keyboard.c": {
    "normal": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Guardar barra de herramientas (creativo)",
        "action": "key.saveToolbarActivator"
      },
      {
        "mod": "Traveler's Backpack",
        "label": "Cambiar herramienta activa",
        "action": "key.travelersbackpack.cycle_tool"
      }
    ],
    "f3": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Depuración: forzar crash del juego (F3+C)",
        "action": "key.debug.crash"
      },
      {
        "mod": "Minecraft (vanilla)",
        "label": "Depuración: copiar coordenadas (F3+C)",
        "action": "key.debug.copyLocation"
      }
    ]
  },
  "key.keyboard.x": {
    "normal": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Cargar barra de herramientas (creativo)",
        "action": "key.loadToolbarActivator"
      }
    ],
    "f3": []
  },
  "key.keyboard.l": {
    "normal": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Ver logros",
        "action": "key.advancements"
      }
    ],
    "f3": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Depuración: iniciar/detener perfilado (F3+L)",
        "action": "key.debug.profiling"
      }
    ]
  },
  "key.keyboard.g": {
    "normal": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Acciones rápidas",
        "action": "key.quickActions"
      }
    ],
    "f3": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Depuración: bordes de chunk (F3+G)",
        "action": "key.debug.showChunkBorders"
      }
    ]
  },
  "key.keyboard.f3": {
    "normal": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Pantalla de depuración (F3)",
        "action": "key.debug.overlay"
      },
      {
        "mod": "Minecraft (vanilla)",
        "label": "Modificador de depuración (mantener F3)",
        "action": "key.debug.modifier"
      }
    ],
    "f3": []
  },
  "key.keyboard.1": {
    "normal": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Ranura de acceso rápido 1",
        "action": "key.hotbar.1"
      }
    ],
    "f3": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Depuración: gráfico de perfilado (F3+1)",
        "action": "key.debug.profilingChart"
      }
    ]
  },
  "key.keyboard.2": {
    "normal": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Ranura de acceso rápido 2",
        "action": "key.hotbar.2"
      }
    ],
    "f3": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Depuración: gráfico de FPS (F3+2)",
        "action": "key.debug.fpsCharts"
      }
    ]
  },
  "key.keyboard.3": {
    "normal": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Ranura de acceso rápido 3",
        "action": "key.hotbar.3"
      }
    ],
    "f3": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Depuración: gráfico de red (F3+3)",
        "action": "key.debug.networkCharts"
      }
    ]
  },
  "key.keyboard.4": {
    "normal": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Ranura de acceso rápido 4",
        "action": "key.hotbar.4"
      }
    ],
    "f3": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Depuración: textura de mapa de luz (F3+4)",
        "action": "key.debug.lightmapTexture"
      }
    ]
  },
  "key.keyboard.5": {
    "normal": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Ranura de acceso rápido 5",
        "action": "key.hotbar.5"
      }
    ],
    "f3": []
  },
  "key.keyboard.6": {
    "normal": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Ranura de acceso rápido 6",
        "action": "key.hotbar.6"
      }
    ],
    "f3": []
  },
  "key.keyboard.7": {
    "normal": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Ranura de acceso rápido 7",
        "action": "key.hotbar.7"
      }
    ],
    "f3": []
  },
  "key.keyboard.8": {
    "normal": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Ranura de acceso rápido 8",
        "action": "key.hotbar.8"
      }
    ],
    "f3": []
  },
  "key.keyboard.9": {
    "normal": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Ranura de acceso rápido 9",
        "action": "key.hotbar.9"
      }
    ],
    "f3": []
  },
  "key.keyboard.b": {
    "normal": [
      {
        "mod": "Emotecraft",
        "label": "Rueda rápida de emotes",
        "action": "key.emotecraft.fastchoose"
      }
    ],
    "f3": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Depuración: mostrar hitboxes (F3+B)",
        "action": "key.debug.showHitboxes"
      }
    ]
  },
  "key.keyboard.h": {
    "normal": [
      {
        "mod": "Simple Voice Chat",
        "label": "Ocultar íconos de chat de voz",
        "action": "key.hide_icons"
      }
    ],
    "f3": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Depuración: tooltips avanzados (F3+H)",
        "action": "key.debug.showAdvancedTooltips"
      }
    ]
  },
  "key.keyboard.i": {
    "normal": [
      {
        "mod": "Iris",
        "label": "Selección de shaderpacks",
        "action": "iris.keybind.shaderPackSelection"
      }
    ],
    "f3": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Depuración: copiar comando /give (F3+I)",
        "action": "key.debug.copyRecreateCommand"
      }
    ]
  },
  "key.keyboard.n": {
    "normal": [],
    "f3": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Depuración: espectar entidad (F3+N/click)",
        "action": "key.debug.spectate"
      }
    ]
  },
  "key.keyboard.f6": {
    "normal": [],
    "f3": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Depuración: opciones de depuración (F3+F6)",
        "action": "key.debug.debugOptions"
      }
    ]
  },
  "key.keyboard.t": {
    "normal": [],
    "f3": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Depuración: recargar resource packs (F3+T)",
        "action": "key.debug.reloadResourcePacks"
      }
    ]
  },
  "key.keyboard.v": {
    "normal": [
      {
        "mod": "Simple Voice Chat",
        "label": "Abrir chat de voz",
        "action": "key.voice_chat"
      }
    ],
    "f3": [
      {
        "mod": "Minecraft (vanilla)",
        "label": "Depuración: volcar info de versión (F3+V)",
        "action": "key.debug.dumpVersion"
      }
    ]
  },
  "key.keyboard.f9": {
    "normal": [
      {
        "mod": "Light Overlay",
        "label": "Mostrar/ocultar superposición de luz",
        "action": "key.light-overlay.toggle"
      }
    ],
    "f3": []
  },
  "key.keyboard.r": {
    "normal": [
      {
        "mod": "Combat Roll",
        "label": "Voltereta de esquive (roll)",
        "action": "keybinds.combat_roll.roll"
      },
      {
        "mod": "Just Enough Items",
        "label": "Mostrar receta",
        "action": "key.jei.showRecipe"
      },
      {
        "mod": "Iris",
        "label": "Recargar shaders",
        "action": "iris.keybind.reload"
      }
    ],
    "f3": []
  },
  "key.keyboard.keypad.7": {
    "normal": [
      {
        "mod": "DayCount",
        "label": "Mostrar/ocultar contador de días",
        "action": "key.daycount.day_count"
      }
    ],
    "f3": []
  },
  "key.keyboard.keypad.0": {
    "normal": [
      {
        "mod": "Jade",
        "label": "Abrir configuración de Jade",
        "action": "key.jade.config"
      }
    ],
    "f3": []
  },
  "key.keyboard.keypad.1": {
    "normal": [
      {
        "mod": "Jade",
        "label": "Mostrar/ocultar superposición de Jade",
        "action": "key.jade.show_overlay"
      }
    ],
    "f3": []
  },
  "key.keyboard.keypad.2": {
    "normal": [
      {
        "mod": "Jade",
        "label": "Mostrar información de líquidos",
        "action": "key.jade.toggle_liquid"
      }
    ],
    "f3": []
  },
  "key.keyboard.keypad.3": {
    "normal": [
      {
        "mod": "Jade",
        "label": "Mostrar recetas",
        "action": "key.jade.show_recipes"
      }
    ],
    "f3": []
  },
  "key.keyboard.keypad.4": {
    "normal": [
      {
        "mod": "Jade",
        "label": "Mostrar usos",
        "action": "key.jade.show_uses"
      }
    ],
    "f3": []
  },
  "key.keyboard.keypad.5": {
    "normal": [
      {
        "mod": "Jade",
        "label": "Narrar información (accesibilidad)",
        "action": "key.jade.narrate"
      }
    ],
    "f3": []
  },
  "key.keyboard.u": {
    "normal": [
      {
        "mod": "Just Enough Items",
        "label": "Mostrar usos",
        "action": "key.jei.showUses"
      },
      {
        "mod": "Xaero's Minimap",
        "label": "Ver lista de waypoints",
        "action": "gui.xaero_waypoints_key"
      }
    ],
    "f3": []
  },
  "key.keyboard.up": {
    "normal": [
      {
        "mod": "Just Enough Items",
        "label": "Búsqueda anterior",
        "action": "key.jei.previousSearch"
      }
    ],
    "f3": []
  },
  "key.keyboard.down": {
    "normal": [
      {
        "mod": "Just Enough Items",
        "label": "Búsqueda siguiente",
        "action": "key.jei.nextSearch"
      }
    ],
    "f3": []
  },
  "key.keyboard.backspace": {
    "normal": [
      {
        "mod": "Just Enough Items",
        "label": "Volver a la receta anterior",
        "action": "key.jei.recipeBack"
      }
    ],
    "f3": []
  },
  "key.keyboard.page.up": {
    "normal": [
      {
        "mod": "Just Enough Items",
        "label": "Página de recetas anterior",
        "action": "key.jei.previousRecipePage"
      }
    ],
    "f3": []
  },
  "key.keyboard.page.down": {
    "normal": [
      {
        "mod": "Just Enough Items",
        "label": "Página de recetas siguiente",
        "action": "key.jei.nextRecipePage"
      }
    ],
    "f3": []
  },
  "key.keyboard.escape": {
    "normal": [
      {
        "mod": "Just Enough Items",
        "label": "Cerrar ventana de recetas",
        "action": "key.jei.closeRecipeGui"
      }
    ],
    "f3": []
  },
  "key.keyboard.f12": {
    "normal": [
      {
        "mod": "OptiGUI",
        "label": "Inspeccionar interfaz (OptiGUI)",
        "action": "key.optigui.inspect"
      }
    ],
    "f3": []
  },
  "key.mouse.5": {
    "normal": [
      {
        "mod": "Ping Wheel",
        "label": "Marcar ubicación (ping)",
        "action": "key.pingwheel.ping_location"
      }
    ],
    "f3": []
  },
  "key.keyboard.j": {
    "normal": [
      {
        "mod": "Traveler's Backpack",
        "label": "Abrir mochila",
        "action": "key.travelersbackpack.inventory"
      }
    ],
    "f3": []
  },
  "key.keyboard.f8": {
    "normal": [
      {
        "mod": "Simple Voice Chat",
        "label": "Silenciar micrófono",
        "action": "key.mute_microphone"
      }
    ],
    "f3": []
  },
  "key.keyboard.f7": {
    "normal": [
      {
        "mod": "Simple Voice Chat",
        "label": "Desactivar chat de voz",
        "action": "key.disable_voice_chat"
      }
    ],
    "f3": []
  },
  "key.keyboard.grave.accent": {
    "normal": [
      {
        "mod": "Xaero's Minimap",
        "label": "Nuevo waypoint",
        "action": "gui.xaero_new_waypoint"
      }
    ],
    "f3": []
  },
  "key.keyboard.keypad.add": {
    "normal": [
      {
        "mod": "Xaero's Minimap",
        "label": "Crear waypoint instantáneo",
        "action": "gui.xaero_instant_waypoint"
      }
    ],
    "f3": []
  },
  "key.keyboard.y": {
    "normal": [
      {
        "mod": "Xaero's Minimap",
        "label": "Configuración del minimapa",
        "action": "gui.xaero_minimap_settings"
      }
    ],
    "f3": []
  },
  "key.keyboard.m": {
    "normal": [
      {
        "mod": "Xaero's World Map",
        "label": "Abrir mapa completo",
        "action": "gui.xaero_open_map"
      }
    ],
    "f3": []
  },
  "key.keyboard.right.bracket": {
    "normal": [
      {
        "mod": "Xaero's World Map",
        "label": "Abrir configuración del mapa",
        "action": "gui.xaero_open_settings"
      }
    ],
    "f3": []
  },
  "key.keyboard.right.shift": {
    "normal": [
      {
        "mod": "Xaero's World Map",
        "label": "Confirmación rápida",
        "action": "gui.xaero_quick_confirm"
      }
    ],
    "f3": []
  },
  "key.keyboard.z": {
    "normal": [
      {
        "mod": "Zoomify",
        "label": "Zoom (mantener presionado)",
        "action": "zoomify.key.zoom"
      }
    ],
    "f3": []
  },
  "key.keyboard.f10": {
    "normal": [
      {
        "mod": "Zoomify",
        "label": "Zoom secundario",
        "action": "zoomify.key.zoom.secondary"
      }
    ],
    "f3": []
  },
  "key.keyboard.k": {
    "normal": [
      {
        "mod": "Iris",
        "label": "Activar/desactivar shaders",
        "action": "iris.keybind.toggleShaders"
      }
    ],
    "f3": []
  }
};
