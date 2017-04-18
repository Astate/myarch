LPPlatform={},function(){LPPlatform.lpIsExtension=function(){return!0},LPPlatform.openURL=function(e){bg.openURL(e)},LPPlatform.getBaseURL=function(){return bg.get("base_url")},LPPlatform.doAjax=function(e){$.ajax(e)},LPPlatform.ajax=function(e){bg.isOffline()?e.error&&e.error(null,null,"offline"):LPPlatform.doAjax(e)},LPPlatform.getOpenGroups=function(){var e=bg.localStorage_getItem(bg.db_prepend(bg.get("g_username_hash")+".savedtree"));if(null!==e){var t={};e=LPProxy.decrypt(e).split(",");for(var o=0,r=e.length;o<r;++o){var n=e[o];0===n.indexOf("_")&&(n=n.substring(1)),t[n]=!0}return t}return null},LPPlatform.setOpenGroups=function(e){for(var t=0,o=e.length;t<o;++t)e[t]="_"+e[t];var r=LPProxy.encrypt(e.join(","));bg.localStorage_setItem(bg.db_prepend(bg.get("g_username_hash")+".savedtree"),r)},LPPlatform.initialized=function(){return!0},LPPlatform.getHTML=function(e,t){$.ajax({url:e,success:t,dataType:"text"})},LPPlatform.loadedPreferences=function(){return LPTools.hasProperties(bg.get("g_userprefs"))},LPPlatform.openAttachment=function(e){bg.openAttach(e._parentNote.getID(),e.getID())},LPPlatform.saveAttachment=function(e){bg.exportAttachment(e._parentNote.getID(),e.getID())},LPPlatform.logException=function(e){var t="string"==typeof e?e:e.message;e.stack&&(t+="\n"+e.stack),LPPlatform.logError(t)},LPPlatform.logError=function(e){e="Page: "+window.location.href+" Error: "+e;try{console.error(e),bg.lpReportError("VAULT_4_0: "+e)}catch(e){}},LPPlatform.addEventListener=function(e){for(var t=[],o=1;o<arguments.length;++o)t.push(arguments[o]);e.addEventListener.apply(e,t)},LPPlatform.removeEventListener=function(e){for(var t=[],o=1;o<arguments.length;++o)t.push(arguments[o]);e.removeEventListener.apply(e,t)},LPPlatform.handleAcctsIFrameLoaded=function(){},LPPlatform.canBackgroundOpenPopover=function(){return!0},LPPlatform.generateSharingKeys=function(e){bg.generateSharingKeys(e)},LPPlatform.getResourcePath=function(e){return e},LPPlatform.canPreventBlur=function(){return!0},LPPlatform.getBackgroundData=function(e){return e},LPPlatform.showIntroTutorial=function(){return!1},LPPlatform.setIntroTutorialDisable=function(e){return!1},LPPlatform.supportsBinary=function(){return!0},LPPlatform.openKeyboard=function(){bg.LPPlatform.openTabDialog("login",{virtualKeyboard:!0})},LPPlatform.getImportHandler=function(){return"importerHandler"},LPPlatform.showDownloader=function(){return!1},LPPlatform.openTour=function(){return!1}}(),function(e){e.closePopup=function(t){(t||0===Dialog.prototype.getDialogCount()&&0===LPDialog.getPendingCount())&&e.doClosePopup()},e.doClosePopup=function(){window.close()},e.closeTab=function(){window.close()},e.checkBrowserPasswordManager=function(e){},e.setupDropdownImportMenu=function(e){e.addClass("singleImportOption");var t=$("#importMenuItemMain");t.unbind("click"),t.bind("click",function(e){bg.lpevent("m_i"),bg.openimport()})},e.getUnavailablePreferences=function(){return{clearClipboardSecsVal:!bg.can_clear_clipboard(),openpopoverHk:!e.canBackgroundOpenPopover(),pollServerVal:bg.get("g_nopoll"),storeLostOTP:"0"===bg.get("g_prefoverrides").account_recovery,showvault:bg.get("g_hidevault")||bg.get("g_hideshowvault"),homeHk:bg.get("g_hidevault")||bg.get("g_hideshowvault"),saveallHk:bg.get("g_hidesaedhotkey"),searchHk:bg.get("g_hidesearch"),usepopupfill:!bg.get("g_offer_popupfill"),recentUsedCount:bg.get("g_hiderecentlyusedlistsize"),searchNotes:bg.get("g_hidenotes"),idleLogoffVal:!(bg.get("g_is_win")||bg.get("g_is_mac")||bg.get("g_is_linux")),enablenamedpipes:bg.get("lppassusernamehash")||!(bg.get("g_is_win")||bg.get("g_is_mac")||bg.get("g_is_linux"))||bg.is_chrome_portable(),enablenewlogin:!0}},e.getPreferencesRequiringBinary=function(){return{enablenamedpipes:!0}},e.handlePreferenceChanges=function(e){e.storeLostOTP===!1&&bg.DeleteOTP()},e.resizeTo=function(e,t){window.resizeTo(e,t)},e.openCreateAccount=function(){bg.LPPlatform.openTabDialog("createAccount")},e.showIntroTutorial=function(){bg.IntroTutorial.getTemporaryDisable(function(e){if(e)return!1;if(bg.get("LPContentScriptFeatures")&&"vault"!==bg.get("LPContentScriptFeatures").intro_tutorial_version)return LPVault.openTour(),!1;var t=LPProxy.getModelCount();if("US"!==bg.get("countryfromip"))return LPVault.openTour(),!1;var o=LPProxy.getPreference("ShowIntroTutorial",!0);if(o&&0===t){1==bg.get("g_one_minute_inbox_importer_dialog_enabled")?dialogs.introTutorialInboxImporter.open():dialogs.introTutorialWelcome.open()}else o&&1===t?bg.IntroTutorial.getState(function(e){e.enabled?(Topics.get(Topics.EXPAND_ALL).publish(),dialogs.introTutorialComplete.open({tutorialState:e})):LPVault.openTour()}):LPVault.openTour()})},e.setIntroTutorialDisable=function(e){bg.IntroTutorial&&bg.IntroTutorial.setTemporaryDisable&&bg.IntroTutorial.setTemporaryDisable(e)}}(LPPlatform);