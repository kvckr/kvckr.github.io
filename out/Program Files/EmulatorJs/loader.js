!async function(){let e=23.5,t=document.getElementsByTagName("script")[0];function a(t){return new Promise((function(a,n){let o=document.createElement("link");o.rel="stylesheet",o.href="undefined"!=typeof EJS_paths&&"string"==typeof EJS_paths[t]?EJS_paths[t]:"undefined"!=typeof EJS_pathtodata?(EJS_pathtodata.endsWith("/")||(EJS_pathtodata+="/"),EJS_pathtodata+t+"?v="+e):t+"?v="+e,o.onload=a,document.head.appendChild(o)}))}function n(a){return new Promise((function(n,o){let d=document.createElement("script");d.src="undefined"!=typeof EJS_paths&&"string"==typeof EJS_paths[a]?EJS_paths[a]:"undefined"!=typeof EJS_pathtodata?(EJS_pathtodata.endsWith("/")||(EJS_pathtodata+="/"),EJS_pathtodata+a+"?v="+e):a+"?v="+e,t.parentNode.insertBefore(d,t),d.onload=n}))}"undefined"!=typeof EJS_DEBUG_XX&&!0===EJS_DEBUG_XX?(await a("emu-css.css"),await n("emu-main.js"),await n("emulator.js")):(await a("emu-css.min.css"),await n("emulator.min.js"));let o={};o.gameUrl=EJS_gameUrl,"undefined"!=typeof EJS_mameCore&&(o.mameCore=EJS_mameCore),"undefined"!=typeof EJS_biosUrl&&(o.biosUrl=EJS_biosUrl),"undefined"!=typeof EJS_gameID&&(o.gameId=EJS_gameID),"undefined"!=typeof EJS_gameParentUrl&&(o.gameParentUrl=EJS_gameParentUrl),"undefined"!=typeof EJS_gamePatchUrl&&(o.gamePatchUrl=EJS_gamePatchUrl),"undefined"!=typeof EJS_AdUrl&&(o.adUrl=EJS_AdUrl),"undefined"!=typeof EJS_paths&&(o.paths=EJS_paths),"undefined"!=typeof EJS_netplayUrl&&(o.netplayUrl=EJS_netplayUrl),"undefined"!=typeof EJS_startOnLoaded&&(o.startOnLoad=EJS_startOnLoaded),"undefined"!=typeof EJS_core&&(o.system=EJS_core),"undefined"!=typeof EJS_oldCores&&(o.oldCores=EJS_oldCores),"undefined"!=typeof EJS_loadStateURL&&(o.loadStateOnStart=EJS_loadStateURL),"undefined"!=typeof EJS_language&&(o.lang=EJS_language),"undefined"!=typeof EJS_noAutoCloseAd&&(o.noAutoAdClose=EJS_noAutoCloseAd),"undefined"!=typeof EJS_VirtualGamepadSettings&&(o.VirtualGamepadSettings=EJS_VirtualGamepadSettings),"undefined"!=typeof EJS_oldEJSNetplayServer&&(o.oldNetplayServer=EJS_oldEJSNetplayServer),"undefined"!=typeof EJS_Buttons&&(o.buttons=EJS_Buttons),"undefined"!=typeof EJS_Settings&&(o.settings=EJS_Settings),o.onsavestate=null,o.onloadstate=null,"undefined"!=typeof EJS_onSaveState&&(o.onsavestate=EJS_onSaveState),"undefined"!=typeof EJS_onLoadState&&(o.onloadstate=EJS_onLoadState),"undefined"!=typeof EJS_lightgun&&(o.lightgun=EJS_lightgun),"undefined"!=typeof EJS_gameName&&(o.gameName=EJS_gameName),"undefined"!=typeof EJS_pathtodata&&(o.dataPath=EJS_pathtodata),"undefined"!=typeof EJS_mouse&&(o.mouse=EJS_mouse),"undefined"!=typeof EJS_multitap&&(o.multitap=EJS_multitap),"undefined"!=typeof EJS_playerName&&(o.playerName=EJS_playerName),"undefined"!=typeof EJS_cheats&&(o.cheats=EJS_cheats),"undefined"!=typeof EJS_color&&(o.color=EJS_color),window.EJS_emulator=await new EJS(EJS_player,o),"undefined"!=typeof EJS_onGameStart&&EJS_emulator.on("start-game",EJS_onGameStart)}();