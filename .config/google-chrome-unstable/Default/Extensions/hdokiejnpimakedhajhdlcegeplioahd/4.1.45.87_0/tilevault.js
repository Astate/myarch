function addTileBox(e,t){var r=null,o=null,a=null,n=!1;if(void 0!==e.sharerusername)r=e.id,o=gs("Share offer from")+":",a=of(getBG().hex2bin(e.sharerusername)),e.tld,n=!0;else{if(e.url,"http://group"==e.url)return;r=void 0!==e.aid?e.aid:e.appaid,o=e.name,a=getusernamefromacct(e),e.tld}var i=getBG(),l=i.geticonurlfromrecord(e,!0),d=i.getbigiconurlfromrecord(e);null==l&&null==d&&(d=gLocalBaseUrl+"images/logos/lastpass.png");if(d)l=d,"","";else if("http://sn"==e.url){var c=void 0!==e.notetype&&""!=e.notetype?e.notetype:"Generic";l=gLocalBaseUrl+"images/logos/sn/"+ofa(c)+".png","bigimg",""}o&&of(o);a&&of(a);var s=document.createElement("div");s.className="tile",s.setAttribute("acctid",r),n?s.setAttribute("pending","1"):s.setAttribute("draggable","true"),document.getElementById(t)?document.getElementById(t).appendChild(s):console.error("cannot find parent: "+t)}function addGroupBox(e,t,r){t||(t="#thegrid");var o=get_div_id();g_groupidmap[e]=o,g_idgroupmap[o]=e;var a=void 0!==r[e],n=a?"grpopen":"grpclose";0==e.indexOf("_")&&(e=e.substring(1));var i=of(e),l="<a class='tiletoplink' acctid='_"+o+"'><div class='bigfolder'><div class='"+n+"'></div><p class='name'>"+i+"</p></div></a><div id='c_"+o+"' class='cont'></div>";$(l).appendTo($(t))}function setupTileEvents(){$(".tiletoplink").unbind("click"),$(".tile").unbind("mouseover"),$(".tile").unbind("contextmenu"),$(".tile").unbind("dragstart"),$(".tiletoplink").click(function(e){var t=getNodeAcctId(e.target);if(""!=t)if("_"==t[0]){var r=getBigFolder(e.target),o=getOpenedGroups(),a="#c"+t,n=getgroupnamefromid(t.substr(1),!0),i=void 0!==o[n];if(i){closeTileGroup(a);var l=$(r).children(".grpopen");$(l).addClass("grpclose"),$(l).removeClass("grpopen")}else{openTileGroup(a);var l=$(r).children(".grpclose");$(l).addClass("grpopen"),$(l).removeClass("grpclose")}saveGroupState()}else ls(t)}),$(".tile").mouseover(function(e){process_mouseover(e)}),$(".tile").bind("contextmenu",function(e){return process_rightclk(e),!1}),$(".tile").bind("dragstart",function(e){var t=(e.target,getNodeAcctId(e.target));g_dragid=t})}function process_rightclk(e){setTimeout(function(){$.contextMenu.create(function(){var e=getBG(),t={};return t[gs("Move Selected to Group")]=function(){e.lpevent("v_multmov"),openMoveGroup(n)},t[gs("Delete Selected")]=function(){e.lpevent("v_multd"),e.deleteAid(ids,window,!1,!1,function(){for(var e=0;e<saved.length;e++)$.tree.focused().cut(saved[e])})},[t]},{theme:"vista"}).show(t,e)},100)}function process_mouseover(t){var r=getBG(),o=getTile(t.target);if(o){if($(o).children(".tileoverlay").length)return;var a=getNodeAcctId(t.target),n=get_record(a),i=!1;if(null==n&&void 0!==r.g_applications[a]&&(n=r.g_applications[a],i=!0),null==n){if(getTile(t.target).hasAttribute("pending")){var l=(gLocalBaseUrl,gs("Accept"),gLocalBaseUrl,gs("Reject"),document.createElement("div"));l.id="hoverlaytop",l.className="tileoverlay",l.acctid=a,o.appendChild(l),$("#hoverlayaccept,#hoverlayreject").unbind("click"),$("#hoverlayaccept").click(function(e){var t=getNodeAcctId(e.target);accept(t)}),$("#hoverlayreject").click(function(e){var t=getNodeAcctId(e.target);reject(t)})}}else{var d=!i&&"http://sn"!=n.url,c=!i&&n&&void 0===n.sharefolderid&&(void 0===n.sharedfromaid||null==n.sharedfromaid||""==n.sharedfromaid||"0"==n.sharedfromaid||"null"==n.sharedfromaid)&&r.g_sharing_enabled,g=!i&&"http://sn"!=n.url&&("undefined"==typeof g_issafari&&"undefined"==typeof g_isopera&&"undefined"==typeof g_ismaxthon&&"undefined"==typeof g_isfirefoxsdk||"function"==typeof r.can_copy_to_clipboard&&r.can_copy_to_clipboard()||"undefined"!=typeof g_is_safari);d?gs("Launch Site"):gs("Edit Note"),g&&(gs("Copy Password"),gLocalBaseUrl),c&&(gs("Share"),gLocalBaseUrl),gs("Edit"),gLocalBaseUrl;i&&(a="app"+a);var l=document.createElement("div");l.id="hoverlaytop",l.className="tileoverlay",o.appendChild(l),l.setAttribute("acctid",a),$("#hoverlayedit,#hoverlayshare,#hoverlaylaunch,.vaultcheck,#hoveroverlaycopy").unbind("click"),$("#hoverlayedit").click(function(t){var r=getNodeAcctId(t.target);e(r)}),$("#hoverlayshare").click(function(e){var t=getNodeAcctId(e.target);s(t)}),$("#hoverlaylaunch").click(function(e){var t=getNodeAcctId(e.target);ls(t)}),$("#hoverlaycopy").click(function(e){var t=getNodeAcctId(e.target);getBG().copypassword(t)}),$(".vaultcheck").click(function(e){var t=e.target,r=t.checked,o=getTile(e.target);r?$(o).css("border","1px solid yellow"):$(o).css("border","1px solid transparent")})}$(".tile").unbind("mouseout"),$(".tile").mouseout(function(e){var t=$(e.toElement);"hoverlaytop"!=t.attr("id")&&0==t.parents("div#hoverlaytop").length&&$(".tileoverlay").remove()})}}function closeTileGroup(e){$(e).hide()}function openTileGroup(e){$(e).show()}function getNodeAcctId(e){if(e&&e.hasAttribute("acctid"))return e.getAttribute("acctid");for(var t="";""==t&&e.parentNode&&e.parentNode!=e;)if(e=e.parentNode,e.hasAttribute("acctid")){t=e.getAttribute("acctid");break}return t}function getTile(e){for(;e.parentNode&&e.parentNode!=e;)if(e=e.parentNode,"tile"==e.className)return e;return null}function getBigFolder(e){if(e.className.indexOf("bigfolder")!=-1)return e;for(;e.parentNode&&e.parentNode!=e;)if(e=e.parentNode,e.className.indexOf("bigfolder")!=-1)return e;return null}function createTileData(e,t){var r=[],o=[],a=""==path?"_"+gs("(none)"):path;if(""==t){if(void 0!==e[a])for(var n=0;n<e[a].length;n++)"http://group"==e[a][n].url?o.push(e[a][n].group):r.push(e[a][n])}else for(var n=0;n<e.length;n++)"http://group"==e[n].url?o.push(e[n].group):r.push(e[n]);var i=getBG();r.sort(i.lp_sort_case_insensitive_name);var l=getSubfolders(path,e,o);l.sort(function(e,t){return e.toLowerCase().localeCompare(t.toLowerCase())});for(var n=l.length-1;n>=0;n--)""==t?r.unshift(l[n]):l[n].toLowerCase().indexOf(t)!=-1&&r.unshift(l[n]);return r}function createTile(e,t,r,o){g_groupidmap=[],g_idgroupmap=[];for(var a=""!=o,n=0;n<e.length;n++){var i=e[n],l=checkParentGroups(i,r);addGroupBox(i,l,r)}$(".bigfolder").bind("dragover",function(e){var t=getNodeAcctId(e.target);if(""!=t&&"_"==t[0]){var r=getBigFolder(e.target),o=getgroupnamefromid(t.substr(1),!0);o!=gs("favorites")&&o!=g_xlat_runame&&o!=g_xlat_pendingname&&$(r).addClass("bigfolderdroptarget")}e.preventDefault(),e.stopPropagation()}),$(".bigfolder").bind("dragleave",function(e){var t=getBigFolder(e.target);$(t).removeClass("bigfolderdroptarget"),e.preventDefault(),e.stopPropagation()}),$(".bigfolder").bind("drop",function(e){var t=getNodeAcctId(e.target);if(""!=t&&"_"==t[0]){var r=getBigFolder(e.target);$(r).removeClass("bigfolderdroptarget");var o=getgroupnamefromid(t.substr(1),!0);e.originalEvent.dataTransfer.getData("id");console.error(g_dragid+" DROPPED IN "+o),getBG().moveSelectedToGroup(o.substr(1),g_dragid)}e.preventDefault(),e.stopPropagation()});for(var n=0;n<e.length;n++){var i=e[n],l="c_"+g_groupidmap[i],d=t[i];d.sort(getBG().lp_sort_case_insensitive_name);for(var c=0;c<d.length;c++){addTileBox(d[c],l)}if(!(a||void 0!==r[i])){var s=document.getElementById(l);s?s.style.display="none":console.error("no parent "+l)}}}function checkParentGroups(e,t){var r=e.split("/");if(1==r.length)return null;for(var o="",a=0;a<r.length;a++)o+=(""==o?"":"/")+r[a],0==$("#contents"+o).length&&addGroupBox(e,"#contents"+o,t);return"#"+o}