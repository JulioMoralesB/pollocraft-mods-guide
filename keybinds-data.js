const KEYBINDS = [
  {
    "action": "key.chat",
    "mod": "Minecraft (vanilla)",
    "label": "Abrir chat",
    "key": "Enter",
    "bound": true
  },
  {
    "action": "key.command",
    "mod": "Minecraft (vanilla)",
    "label": "Abrir comando (/)",
    "key": "/",
    "bound": true
  },
  {
    "action": "key.inventory",
    "mod": "Minecraft (vanilla)",
    "label": "Abrir/cerrar inventario",
    "key": "E",
    "bound": true
  },
  {
    "action": "key.quickActions",
    "mod": "Minecraft (vanilla)",
    "label": "Acciones rápidas",
    "key": "G",
    "bound": true
  },
  {
    "action": "key.sneak",
    "mod": "Minecraft (vanilla)",
    "label": "Agacharse",
    "key": "Shift izquierdo",
    "bound": true
  },
  {
    "action": "key.toggleSpectatorShaderEffects",
    "mod": "Minecraft (vanilla)",
    "label": "Alternar efectos de shader (espectador)",
    "key": "F4",
    "bound": true
  },
  {
    "action": "key.attack",
    "mod": "Minecraft (vanilla)",
    "label": "Atacar / Romper bloque",
    "key": "Clic izquierdo",
    "bound": true
  },
  {
    "action": "key.togglePerspective",
    "mod": "Minecraft (vanilla)",
    "label": "Cambiar perspectiva de cámara",
    "key": "F5",
    "bound": true
  },
  {
    "action": "key.forward",
    "mod": "Minecraft (vanilla)",
    "label": "Caminar hacia adelante",
    "key": "W",
    "bound": true
  },
  {
    "action": "key.back",
    "mod": "Minecraft (vanilla)",
    "label": "Caminar hacia atrás",
    "key": "S",
    "bound": true
  },
  {
    "action": "key.loadToolbarActivator",
    "mod": "Minecraft (vanilla)",
    "label": "Cargar barra de herramientas (creativo)",
    "key": "X",
    "bound": true
  },
  {
    "action": "key.sprint",
    "mod": "Minecraft (vanilla)",
    "label": "Correr",
    "key": "Ctrl izquierdo",
    "bound": true
  },
  {
    "action": "key.smoothCamera",
    "mod": "Minecraft (vanilla)",
    "label": "Cámara cinemática suave",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.debug.showChunkBorders",
    "mod": "Minecraft (vanilla)",
    "label": "Depuración: bordes de chunk (F3+G)",
    "key": "G",
    "bound": true
  },
  {
    "action": "key.debug.switchGameMode",
    "mod": "Minecraft (vanilla)",
    "label": "Depuración: cambiar modo de juego (F3+F4)",
    "key": "F4",
    "bound": true
  },
  {
    "action": "key.debug.copyRecreateCommand",
    "mod": "Minecraft (vanilla)",
    "label": "Depuración: copiar comando /give (F3+I)",
    "key": "I",
    "bound": true
  },
  {
    "action": "key.debug.copyLocation",
    "mod": "Minecraft (vanilla)",
    "label": "Depuración: copiar coordenadas (F3+C)",
    "key": "C",
    "bound": true
  },
  {
    "action": "key.debug.spectate",
    "mod": "Minecraft (vanilla)",
    "label": "Depuración: espectar entidad (F3+N/click)",
    "key": "N",
    "bound": true
  },
  {
    "action": "key.debug.crash",
    "mod": "Minecraft (vanilla)",
    "label": "Depuración: forzar crash del juego (F3+C)",
    "key": "C",
    "bound": true
  },
  {
    "action": "key.debug.fpsCharts",
    "mod": "Minecraft (vanilla)",
    "label": "Depuración: gráfico de FPS (F3+2)",
    "key": "2",
    "bound": true
  },
  {
    "action": "key.debug.profilingChart",
    "mod": "Minecraft (vanilla)",
    "label": "Depuración: gráfico de perfilado (F3+1)",
    "key": "1",
    "bound": true
  },
  {
    "action": "key.debug.networkCharts",
    "mod": "Minecraft (vanilla)",
    "label": "Depuración: gráfico de red (F3+3)",
    "key": "3",
    "bound": true
  },
  {
    "action": "key.debug.profiling",
    "mod": "Minecraft (vanilla)",
    "label": "Depuración: iniciar/detener perfilado (F3+L)",
    "key": "L",
    "bound": true
  },
  {
    "action": "key.debug.clearChat",
    "mod": "Minecraft (vanilla)",
    "label": "Depuración: limpiar chat (F3+D)",
    "key": "D",
    "bound": true
  },
  {
    "action": "key.debug.showHitboxes",
    "mod": "Minecraft (vanilla)",
    "label": "Depuración: mostrar hitboxes (F3+B)",
    "key": "B",
    "bound": true
  },
  {
    "action": "key.debug.debugOptions",
    "mod": "Minecraft (vanilla)",
    "label": "Depuración: opciones de depuración (F3+F6)",
    "key": "F6",
    "bound": true
  },
  {
    "action": "key.debug.focusPause",
    "mod": "Minecraft (vanilla)",
    "label": "Depuración: pausar al perder foco (F3+P)",
    "key": "P",
    "bound": true
  },
  {
    "action": "key.debug.reloadChunk",
    "mod": "Minecraft (vanilla)",
    "label": "Depuración: recargar chunks (F3+A)",
    "key": "A",
    "bound": true
  },
  {
    "action": "key.debug.reloadResourcePacks",
    "mod": "Minecraft (vanilla)",
    "label": "Depuración: recargar resource packs (F3+T)",
    "key": "T",
    "bound": true
  },
  {
    "action": "key.debug.lightmapTexture",
    "mod": "Minecraft (vanilla)",
    "label": "Depuración: textura de mapa de luz (F3+4)",
    "key": "4",
    "bound": true
  },
  {
    "action": "key.debug.showAdvancedTooltips",
    "mod": "Minecraft (vanilla)",
    "label": "Depuración: tooltips avanzados (F3+H)",
    "key": "H",
    "bound": true
  },
  {
    "action": "key.debug.dumpVersion",
    "mod": "Minecraft (vanilla)",
    "label": "Depuración: volcar info de versión (F3+V)",
    "key": "V",
    "bound": true
  },
  {
    "action": "key.debug.dumpDynamicTextures",
    "mod": "Minecraft (vanilla)",
    "label": "Depuración: volcar texturas dinámicas (F3+S)",
    "key": "S",
    "bound": true
  },
  {
    "action": "key.saveToolbarActivator",
    "mod": "Minecraft (vanilla)",
    "label": "Guardar barra de herramientas (creativo)",
    "key": "C",
    "bound": true
  },
  {
    "action": "key.socialInteractions",
    "mod": "Minecraft (vanilla)",
    "label": "Interacciones sociales",
    "key": "P",
    "bound": true
  },
  {
    "action": "key.swapOffhand",
    "mod": "Minecraft (vanilla)",
    "label": "Intercambiar objeto con mano secundaria",
    "key": "F",
    "bound": true
  },
  {
    "action": "key.friends",
    "mod": "Minecraft (vanilla)",
    "label": "Lista de amigos",
    "key": "O",
    "bound": true
  },
  {
    "action": "key.spectatorHotbar",
    "mod": "Minecraft (vanilla)",
    "label": "Menú de espectador",
    "key": "Clic central (rueda)",
    "bound": true
  },
  {
    "action": "key.debug.modifier",
    "mod": "Minecraft (vanilla)",
    "label": "Modificador de depuración (mantener F3)",
    "key": "F3",
    "bound": true
  },
  {
    "action": "key.right",
    "mod": "Minecraft (vanilla)",
    "label": "Moverse a la derecha",
    "key": "D",
    "bound": true
  },
  {
    "action": "key.left",
    "mod": "Minecraft (vanilla)",
    "label": "Moverse a la izquierda",
    "key": "A",
    "bound": true
  },
  {
    "action": "key.toggleGui",
    "mod": "Minecraft (vanilla)",
    "label": "Ocultar/mostrar interfaz (cámara cinemática)",
    "key": "F1",
    "bound": true
  },
  {
    "action": "key.fullscreen",
    "mod": "Minecraft (vanilla)",
    "label": "Pantalla completa",
    "key": "F11",
    "bound": true
  },
  {
    "action": "key.debug.overlay",
    "mod": "Minecraft (vanilla)",
    "label": "Pantalla de depuración (F3)",
    "key": "F3",
    "bound": true
  },
  {
    "action": "key.hotbar.1",
    "mod": "Minecraft (vanilla)",
    "label": "Ranura de acceso rápido 1",
    "key": "1",
    "bound": true
  },
  {
    "action": "key.hotbar.2",
    "mod": "Minecraft (vanilla)",
    "label": "Ranura de acceso rápido 2",
    "key": "2",
    "bound": true
  },
  {
    "action": "key.hotbar.3",
    "mod": "Minecraft (vanilla)",
    "label": "Ranura de acceso rápido 3",
    "key": "3",
    "bound": true
  },
  {
    "action": "key.hotbar.4",
    "mod": "Minecraft (vanilla)",
    "label": "Ranura de acceso rápido 4",
    "key": "4",
    "bound": true
  },
  {
    "action": "key.hotbar.5",
    "mod": "Minecraft (vanilla)",
    "label": "Ranura de acceso rápido 5",
    "key": "5",
    "bound": true
  },
  {
    "action": "key.hotbar.6",
    "mod": "Minecraft (vanilla)",
    "label": "Ranura de acceso rápido 6",
    "key": "6",
    "bound": true
  },
  {
    "action": "key.hotbar.7",
    "mod": "Minecraft (vanilla)",
    "label": "Ranura de acceso rápido 7",
    "key": "7",
    "bound": true
  },
  {
    "action": "key.hotbar.8",
    "mod": "Minecraft (vanilla)",
    "label": "Ranura de acceso rápido 8",
    "key": "8",
    "bound": true
  },
  {
    "action": "key.hotbar.9",
    "mod": "Minecraft (vanilla)",
    "label": "Ranura de acceso rápido 9",
    "key": "9",
    "bound": true
  },
  {
    "action": "key.spectatorOutlines",
    "mod": "Minecraft (vanilla)",
    "label": "Resaltar jugadores (espectador)",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.jump",
    "mod": "Minecraft (vanilla)",
    "label": "Saltar",
    "key": "Espacio",
    "bound": true
  },
  {
    "action": "key.pickItem",
    "mod": "Minecraft (vanilla)",
    "label": "Seleccionar bloque (pick block)",
    "key": "Clic central (rueda)",
    "bound": true
  },
  {
    "action": "key.drop",
    "mod": "Minecraft (vanilla)",
    "label": "Soltar objeto seleccionado",
    "key": "Q",
    "bound": true
  },
  {
    "action": "key.screenshot",
    "mod": "Minecraft (vanilla)",
    "label": "Tomar captura de pantalla",
    "key": "F2",
    "bound": true
  },
  {
    "action": "key.use",
    "mod": "Minecraft (vanilla)",
    "label": "Usar objeto / Colocar bloque",
    "key": "Clic derecho",
    "bound": true
  },
  {
    "action": "key.playerlist",
    "mod": "Minecraft (vanilla)",
    "label": "Ver lista de jugadores",
    "key": "Tab",
    "bound": true
  },
  {
    "action": "key.advancements",
    "mod": "Minecraft (vanilla)",
    "label": "Ver logros",
    "key": "L",
    "bound": true
  },
  {
    "action": "keybinds.bettercombat.feint",
    "mod": "Better Combat",
    "label": "Finta (feint)",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "keybinds.bettercombat.toggle_mine_with_weapons",
    "mod": "Better Combat",
    "label": "Permitir minar con armas",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "keybinds.combat_roll.roll",
    "mod": "Combat Roll",
    "label": "Voltereta de esquive (roll)",
    "key": "R",
    "bound": true
  },
  {
    "action": "key.daycount.day_count",
    "mod": "DayCount",
    "label": "Mostrar/ocultar contador de días",
    "key": "KEYPAD.7",
    "bound": true
  },
  {
    "action": "key.detailab.open_config",
    "mod": "Detail Armor Bar Reconstructed",
    "label": "Abrir configuración",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.dynamic_fps.toggle_disabled",
    "mod": "Dynamic FPS",
    "label": "Desactivar Dynamic FPS temporalmente",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.dynamic_fps.toggle_forced",
    "mod": "Dynamic FPS",
    "label": "Forzar ahorro de energía",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.iteminteractions.toggle_item_contents_tooltip",
    "mod": "Easy Shulker Boxes",
    "label": "Mostrar contenido del objeto en el tooltip",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.iteminteractions.toggle_item_held_by_cursor_tooltip",
    "mod": "Easy Shulker Boxes",
    "label": "Mostrar objeto sostenido por el cursor",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.elytratrails.open_settings",
    "mod": "Elytra Contrails",
    "label": "Abrir configuración de estelas",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.elytratrails.twirl_r",
    "mod": "Elytra Contrails",
    "label": "Girar a la derecha",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.elytratrails.twirl_l",
    "mod": "Elytra Contrails",
    "label": "Girar a la izquierda",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.elytratrails.twirl_random",
    "mod": "Elytra Contrails",
    "label": "Giro aleatorio (élitra)",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.elytratrails.continuous_twirl_r",
    "mod": "Elytra Contrails",
    "label": "Giro continuo a la derecha",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.elytratrails.continuous_twirl_l",
    "mod": "Elytra Contrails",
    "label": "Giro continuo a la izquierda",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.elytratrails.toggle",
    "mod": "Elytra Contrails",
    "label": "Mostrar/ocultar estelas de élitra",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.emotecraft.stop",
    "mod": "Emotecraft",
    "label": "Detener emote",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.emotecraft.fastchoose",
    "mod": "Emotecraft",
    "label": "Rueda rápida de emotes",
    "key": "B",
    "bound": true
  },
  {
    "action": "key.entityculling.toggle",
    "mod": "EntityCulling",
    "label": "Activar/desactivar EntityCulling",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.entityculling.toggleBoxes",
    "mod": "EntityCulling",
    "label": "Mostrar cajas de depuración",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.freecam.config.open",
    "mod": "Freecam",
    "label": "Abrir configuración de Freecam",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.freecam.toggle",
    "mod": "Freecam",
    "label": "Activar/desactivar cámara libre",
    "key": "F4",
    "bound": true
  },
  {
    "action": "key.freecam.tripod.reset",
    "mod": "Freecam",
    "label": "Reiniciar trípode",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.freecam.outlinePlayer.toggle",
    "mod": "Freecam",
    "label": "Resaltar contorno del jugador",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.freecam.controlPlayer.toggle",
    "mod": "Freecam",
    "label": "Seguir controlando al jugador",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "iris.keybind.toggleShaders",
    "mod": "Iris",
    "label": "Activar/desactivar shaders",
    "key": "K",
    "bound": true
  },
  {
    "action": "iris.keybind.wireframe",
    "mod": "Iris",
    "label": "Modo alambre (wireframe)",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "iris.keybind.reload",
    "mod": "Iris",
    "label": "Recargar shaders",
    "key": "R",
    "bound": true
  },
  {
    "action": "iris.keybind.shaderPackSelection",
    "mod": "Iris",
    "label": "Selección de shaderpacks",
    "key": "I",
    "bound": true
  },
  {
    "action": "key.jade.config",
    "mod": "Jade",
    "label": "Abrir configuración de Jade",
    "key": "Numpad 0",
    "bound": true
  },
  {
    "action": "key.jade.show_details",
    "mod": "Jade",
    "label": "Mostrar detalles extendidos",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.jade.toggle_liquid",
    "mod": "Jade",
    "label": "Mostrar información de líquidos",
    "key": "Numpad 2",
    "bound": true
  },
  {
    "action": "key.jade.show_recipes",
    "mod": "Jade",
    "label": "Mostrar recetas",
    "key": "Numpad 3",
    "bound": true
  },
  {
    "action": "key.jade.show_uses",
    "mod": "Jade",
    "label": "Mostrar usos",
    "key": "Numpad 4",
    "bound": true
  },
  {
    "action": "key.jade.show_overlay",
    "mod": "Jade",
    "label": "Mostrar/ocultar superposición de Jade",
    "key": "Numpad 1",
    "bound": true
  },
  {
    "action": "key.jade.narrate",
    "mod": "Jade",
    "label": "Narrar información (accesibilidad)",
    "key": "Numpad 5",
    "bound": true
  },
  {
    "action": "key.jade.profile.0",
    "mod": "Jade",
    "label": "Perfil de Jade 0",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.jade.profile.1",
    "mod": "Jade",
    "label": "Perfil de Jade 1",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.jade.profile.2",
    "mod": "Jade",
    "label": "Perfil de Jade 2",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.jade.profile.3",
    "mod": "Jade",
    "label": "Perfil de Jade 3",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.jei.toggleCheatMode",
    "mod": "Just Enough Items",
    "label": "Activar/desactivar modo creativo (JEI)",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.jei.bookmark",
    "mod": "Just Enough Items",
    "label": "Agregar a favoritos",
    "key": "A",
    "bound": true
  },
  {
    "action": "key.jei.toggleEditMode",
    "mod": "Just Enough Items",
    "label": "Alternar modo de edición",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.jei.previousSearch",
    "mod": "Just Enough Items",
    "label": "Búsqueda anterior",
    "key": "Flecha arriba",
    "bound": true
  },
  {
    "action": "key.jei.nextSearch",
    "mod": "Just Enough Items",
    "label": "Búsqueda siguiente",
    "key": "Flecha abajo",
    "bound": true
  },
  {
    "action": "key.jei.previousCategory",
    "mod": "Just Enough Items",
    "label": "Categoría anterior",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.jei.nextCategory",
    "mod": "Just Enough Items",
    "label": "Categoría siguiente",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.jei.closeRecipeGui",
    "mod": "Just Enough Items",
    "label": "Cerrar ventana de recetas",
    "key": "Esc",
    "bound": true
  },
  {
    "action": "key.jei.shareToChat",
    "mod": "Just Enough Items",
    "label": "Compartir en el chat",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.jei.copy.recipe.id",
    "mod": "Just Enough Items",
    "label": "Copiar ID de la receta",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.jei.focusSearch",
    "mod": "Just Enough Items",
    "label": "Ir a la barra de búsqueda",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.jei.clearSearchBar",
    "mod": "Just Enough Items",
    "label": "Limpiar barra de búsqueda",
    "key": "Clic derecho",
    "bound": true
  },
  {
    "action": "key.jei.toggleCheatModeConfigButton",
    "mod": "Just Enough Items",
    "label": "Mostrar botón de modo creativo",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.jei.showBookmarkTooltipFeatures",
    "mod": "Just Enough Items",
    "label": "Mostrar funciones extra en favoritos",
    "key": "Ctrl izquierdo",
    "bound": true
  },
  {
    "action": "key.jei.showRecipe",
    "mod": "Just Enough Items",
    "label": "Mostrar receta",
    "key": "R",
    "bound": true
  },
  {
    "action": "key.jei.showRecipe2",
    "mod": "Just Enough Items",
    "label": "Mostrar receta (alterno)",
    "key": "Clic izquierdo",
    "bound": true
  },
  {
    "action": "key.jei.showUses",
    "mod": "Just Enough Items",
    "label": "Mostrar usos",
    "key": "U",
    "bound": true
  },
  {
    "action": "key.jei.showUses2",
    "mod": "Just Enough Items",
    "label": "Mostrar usos (alterno)",
    "key": "Clic derecho",
    "bound": true
  },
  {
    "action": "key.jei.toggleBookmarkOverlay",
    "mod": "Just Enough Items",
    "label": "Mostrar/ocultar favoritos",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.jei.toggleOverlay",
    "mod": "Just Enough Items",
    "label": "Mostrar/ocultar lista de recetas (JEI)",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.jei.quickMove",
    "mod": "Just Enough Items",
    "label": "Mover objetos rápido",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.jei.cheatOneItem2",
    "mod": "Just Enough Items",
    "label": "Obtener un objeto (alterno)",
    "key": "Clic derecho",
    "bound": true
  },
  {
    "action": "key.jei.cheatOneItem",
    "mod": "Just Enough Items",
    "label": "Obtener un objeto (modo creativo)",
    "key": "Clic izquierdo",
    "bound": true
  },
  {
    "action": "key.jei.cheatItemStack",
    "mod": "Just Enough Items",
    "label": "Obtener una pila de objetos",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.jei.cheatItemStack2",
    "mod": "Just Enough Items",
    "label": "Obtener una pila de objetos (alterno)",
    "key": "Clic central (rueda)",
    "bound": true
  },
  {
    "action": "key.jei.toggleHideIngredient",
    "mod": "Just Enough Items",
    "label": "Ocultar ingrediente",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.jei.toggleWildcardHideIngredient",
    "mod": "Just Enough Items",
    "label": "Ocultar variantes del ingrediente",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.jei.pauseRecipeCycling",
    "mod": "Just Enough Items",
    "label": "Pausar rotación de recetas",
    "key": "Shift izquierdo",
    "bound": true
  },
  {
    "action": "key.jei.previousPage",
    "mod": "Just Enough Items",
    "label": "Página anterior",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.jei.previousRecipePage",
    "mod": "Just Enough Items",
    "label": "Página de recetas anterior",
    "key": "Re Pág (Page Up)",
    "bound": true
  },
  {
    "action": "key.jei.nextRecipePage",
    "mod": "Just Enough Items",
    "label": "Página de recetas siguiente",
    "key": "Av Pág (Page Down)",
    "bound": true
  },
  {
    "action": "key.jei.nextPage",
    "mod": "Just Enough Items",
    "label": "Página siguiente",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.jei.transferRecipeBookmark",
    "mod": "Just Enough Items",
    "label": "Transferir receta a favoritos",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.jei.maxTransferRecipeBookmark",
    "mod": "Just Enough Items",
    "label": "Transferir receta al máximo",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.jei.recipeBack",
    "mod": "Just Enough Items",
    "label": "Volver a la receta anterior",
    "key": "Retroceso (Backspace)",
    "bound": true
  },
  {
    "action": "key.light-overlay.toggle",
    "mod": "Light Overlay",
    "label": "Mostrar/ocultar superposición de luz",
    "key": "F9",
    "bound": true
  },
  {
    "action": "key.modmenu.open_menu",
    "mod": "Mod Menu",
    "label": "Abrir menú de mods",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.optigui.inspect",
    "mod": "OptiGUI",
    "label": "Inspeccionar interfaz (OptiGUI)",
    "key": "F12",
    "bound": true
  },
  {
    "action": "patpat.keybinding.pat",
    "mod": "PatPat",
    "label": "Acariciar mob",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.pingwheel.open_settings",
    "mod": "Ping Wheel",
    "label": "Abrir configuración de Ping Wheel",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.pingwheel.ping_location",
    "mod": "Ping Wheel",
    "label": "Marcar ubicación (ping)",
    "key": "Botón lateral 5 del mouse",
    "bound": true
  },
  {
    "action": "key.reachbehind.toggle_reaching_behind_blocks",
    "mod": "Reach Behind",
    "label": "Alternar interacción a través de bloques",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.voice_chat",
    "mod": "Simple Voice Chat",
    "label": "Abrir chat de voz",
    "key": "V",
    "bound": true
  },
  {
    "action": "key.voice_chat_adjust_volumes",
    "mod": "Simple Voice Chat",
    "label": "Ajustar volúmenes",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.voice_chat_settings",
    "mod": "Simple Voice Chat",
    "label": "Configuración del chat de voz",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.disable_voice_chat",
    "mod": "Simple Voice Chat",
    "label": "Desactivar chat de voz",
    "key": "F7",
    "bound": true
  },
  {
    "action": "key.voice_chat_group",
    "mod": "Simple Voice Chat",
    "label": "Grupo de chat de voz",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.push_to_talk",
    "mod": "Simple Voice Chat",
    "label": "Hablar (mantener presionado)",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.voice_chat_toggle_recording",
    "mod": "Simple Voice Chat",
    "label": "Iniciar/detener grabación",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.hide_icons",
    "mod": "Simple Voice Chat",
    "label": "Ocultar íconos de chat de voz",
    "key": "H",
    "bound": true
  },
  {
    "action": "key.mute_microphone",
    "mod": "Simple Voice Chat",
    "label": "Silenciar micrófono",
    "key": "F8",
    "bound": true
  },
  {
    "action": "key.whisper",
    "mod": "Simple Voice Chat",
    "label": "Susurrar (chat de voz cercano)",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.spyglass-improvements.use",
    "mod": "Spyglass Improvements",
    "label": "Usar catalejo mejorado",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.travelersbackpack.inventory",
    "mod": "Traveler's Backpack",
    "label": "Abrir mochila",
    "key": "J",
    "bound": true
  },
  {
    "action": "key.travelersbackpack.toggle_upgrade_0",
    "mod": "Traveler's Backpack",
    "label": "Alternar mejora 1",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.travelersbackpack.toggle_upgrade_1",
    "mod": "Traveler's Backpack",
    "label": "Alternar mejora 2",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.travelersbackpack.toggle_upgrade_2",
    "mod": "Traveler's Backpack",
    "label": "Alternar mejora 3",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.travelersbackpack.toggle_upgrade_3",
    "mod": "Traveler's Backpack",
    "label": "Alternar mejora 4",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.travelersbackpack.cycle_tool",
    "mod": "Traveler's Backpack",
    "label": "Cambiar herramienta activa",
    "key": "C",
    "bound": true
  },
  {
    "action": "key.travelersbackpack.sort",
    "mod": "Traveler's Backpack",
    "label": "Ordenar mochila",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "key.travelersbackpack.ability",
    "mod": "Traveler's Backpack",
    "label": "Usar habilidad de la mochila",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "gui.xaero_zoom_in",
    "mod": "Xaero's Minimap",
    "label": "Acercar zoom (minimapa)",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "gui.xaero_enlarge_map",
    "mod": "Xaero's Minimap",
    "label": "Agrandar minimapa",
    "key": "Tab",
    "bound": true
  },
  {
    "action": "gui.xaero_zoom_out",
    "mod": "Xaero's Minimap",
    "label": "Alejar zoom (minimapa)",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "gui.xaero_toggle_manual_cave_mode",
    "mod": "Xaero's Minimap",
    "label": "Alternar modo cueva manual",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "gui.xaero_switch_waypoint_set",
    "mod": "Xaero's Minimap",
    "label": "Cambiar set de waypoints",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "gui.xaero_minimap_settings",
    "mod": "Xaero's Minimap",
    "label": "Configuración del minimapa",
    "key": "Y",
    "bound": true
  },
  {
    "action": "gui.xaero_instant_waypoint",
    "mod": "Xaero's Minimap",
    "label": "Crear waypoint instantáneo",
    "key": "Numpad +",
    "bound": true
  },
  {
    "action": "gui.xaero_reverse_entity_radar",
    "mod": "Xaero's Minimap",
    "label": "Invertir radar de entidades",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "gui.xaero_alternative_list_players",
    "mod": "Xaero's Minimap",
    "label": "Lista de jugadores (alterna)",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "gui.xaero_toggle_slime",
    "mod": "Xaero's Minimap",
    "label": "Mostrar chunks de slimes",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "gui.xaero_toggle_grid",
    "mod": "Xaero's Minimap",
    "label": "Mostrar cuadrícula de chunks",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "gui.xaero_toggle_tracked_players_on_map",
    "mod": "Xaero's Minimap",
    "label": "Mostrar jugadores rastreados en el mapa",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "gui.xaero_toggle_tracked_players_in_world",
    "mod": "Xaero's Minimap",
    "label": "Mostrar jugadores rastreados en el mundo",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "gui.xaero_toggle_entity_radar",
    "mod": "Xaero's Minimap",
    "label": "Mostrar radar de entidades",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "gui.xaero_toggle_light_overlay",
    "mod": "Xaero's Minimap",
    "label": "Mostrar superposición de luz",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "gui.xaero_display_all_sets",
    "mod": "Xaero's Minimap",
    "label": "Mostrar todos los sets de waypoints",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "gui.xaero_toggle_map",
    "mod": "Xaero's Minimap",
    "label": "Mostrar/ocultar minimapa",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "gui.xaero_toggle_waypoints",
    "mod": "Xaero's Minimap",
    "label": "Mostrar/ocultar waypoints",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "gui.xaero_toggle_map_waypoints",
    "mod": "Xaero's Minimap",
    "label": "Mostrar/ocultar waypoints en el minimapa",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "gui.xaero_new_waypoint",
    "mod": "Xaero's Minimap",
    "label": "Nuevo waypoint",
    "key": "GRAVE.ACCENT",
    "bound": true
  },
  {
    "action": "gui.xaero_minimap_server_profiles",
    "mod": "Xaero's Minimap",
    "label": "Perfiles de servidor (minimapa)",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "gui.xaero_waypoints_key",
    "mod": "Xaero's Minimap",
    "label": "Ver lista de waypoints",
    "key": "U",
    "bound": true
  },
  {
    "action": "gui.xaero_open_settings",
    "mod": "Xaero's World Map",
    "label": "Abrir configuración del mapa",
    "key": "]",
    "bound": true
  },
  {
    "action": "gui.xaero_open_map",
    "mod": "Xaero's World Map",
    "label": "Abrir mapa completo",
    "key": "M",
    "bound": true
  },
  {
    "action": "gui.xaero_map_zoom_in",
    "mod": "Xaero's World Map",
    "label": "Acercar zoom (mapa completo)",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "gui.xaero_map_zoom_out",
    "mod": "Xaero's World Map",
    "label": "Alejar zoom (mapa completo)",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "gui.xaero_toggle_dimension",
    "mod": "Xaero's World Map",
    "label": "Cambiar dimensión mostrada",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "gui.xaero_world_map_server_settings",
    "mod": "Xaero's World Map",
    "label": "Configuración de servidor (mapa)",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "gui.xaero_quick_confirm",
    "mod": "Xaero's World Map",
    "label": "Confirmación rápida",
    "key": "Shift derecho",
    "bound": true
  },
  {
    "action": "gui.xaero_toggle_pac_chunk_claims",
    "mod": "Xaero's World Map",
    "label": "Mostrar reclamos de chunks",
    "key": "Sin asignar",
    "bound": false
  },
  {
    "action": "zoomify.key.zoom",
    "mod": "Zoomify",
    "label": "Zoom (mantener presionado)",
    "key": "Z",
    "bound": true
  },
  {
    "action": "zoomify.key.zoom.secondary",
    "mod": "Zoomify",
    "label": "Zoom secundario",
    "key": "F10",
    "bound": true
  }
];
