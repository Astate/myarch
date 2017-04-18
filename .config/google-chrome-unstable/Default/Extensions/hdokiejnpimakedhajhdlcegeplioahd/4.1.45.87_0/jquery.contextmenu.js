!function(e){e.contextMenu={shadow:!0,shadowOffset:0,shadowOffsetX:5,shadowOffsetY:5,shadowWidthAdjust:-3,shadowHeightAdjust:-3,shadowOpacity:.2,shadowClass:"context-menu-shadow",shadowColor:"black",offsetX:0,offsetY:0,appendTo:"body",direction:"down",constrainToScreen:!0,showTransition:"show",hideTransition:"hide",showSpeed:null,hideSpeed:null,showCallback:null,hideCallback:null,className:"context-menu",itemClassName:"context-menu-item",itemHoverClassName:"context-menu-item-hover",disabledItemClassName:"context-menu-item-disabled",disabledItemHoverClassName:"context-menu-item-disabled-hover",separatorClassName:"context-menu-separator",innerDivClassName:"context-menu-item-inner",themePrefix:"context-menu-theme-",theme:"default",separator:"context-menu-separator",target:null,menu:null,shadowObj:null,bgiframe:null,shown:!1,useIframe:!1,create:function(t,a){var n=e.extend({},this,a);return"string"==typeof t?n.menu=e(t):"function"==typeof t?n.menuFunction=t:n.menu=n.createMenu(t,n),n.menu&&(n.menu.css({display:"none"}),e(n.appendTo).append(n.menu)),n.shadow&&(n.createShadow(n),n.shadowOffset&&(n.shadowOffsetX=n.shadowOffsetY=n.shadowOffset)),e("body").bind("contextmenu",function(){n.hide()}),n},createIframe:function(){return e('<iframe frameborder="0" tabindex="-1" src="javascript:false" style="display:block;position:absolute;z-index:-1;filter:Alpha(Opacity=0);"/>')},createMenu:function(t,a){var n=a.className;e.each(a.theme.split(","),function(e,t){n+=" "+a.themePrefix+t});for(var s=e("<table cellspacing=0 cellpadding=0></table>").click(function(){return a.hide(),!1}),o=e("<tr></tr>"),i=e("<td></td>"),d=e('<div class="'+n+'"></div>'),r=0;r<t.length;r++){if(t[r]==e.contextMenu.separator)d.append(a.createSeparator());else for(var h in t[r])d.append(a.createMenuItem(h,t[r][h]))}return a.useIframe&&i.append(a.createIframe()),s.append(o.append(i.append(d))),s},createMenuItem:function(t,a){var n=this;"function"==typeof a&&(a={onclick:a});var s=e.extend({onclick:function(){},className:"",hoverClassName:n.itemHoverClassName,icon:"",disabled:!1,title:"",hoverItem:n.hoverItem,hoverItemOut:n.hoverItemOut},a),o=s.icon?"background-image:url("+s.icon+");":"";""!=o&&(o=' style="'+o+'"');var i=e('<div class="'+n.itemClassName+" "+s.className+(s.disabled?" "+n.disabledItemClassName:"")+'" title="'+s.title+'"></div>').click(function(e){return!n.isItemDisabled(this)&&s.onclick.call(n.target,this,n,e)}).hover(function(){s.hoverItem.call(this,n.isItemDisabled(this)?n.disabledItemHoverClassName:s.hoverClassName)},function(){s.hoverItemOut.call(this,n.isItemDisabled(this)?n.disabledItemHoverClassName:s.hoverClassName)}),d=e('<div class="'+n.innerDivClassName+'"'+o+">"+t+"</div>");return i.append(d),i},createSeparator:function(){return e('<div class="'+this.separatorClassName+'"></div>')},isItemDisabled:function(t){return e(t).is("."+this.disabledItemClassName)},hoverItem:function(t){e(this).addClass(t)},hoverItemOut:function(t){e(this).removeClass(t)},createShadow:function(t){t.shadowObj=e('<div class="'+t.shadowClass+'"></div>').css({display:"none",position:"absolute",zIndex:9998,opacity:t.shadowOpacity,backgroundColor:t.shadowColor}),e(t.appendTo).append(t.shadowObj)},showShadow:function(e,t,a){var n=this;n.shadow&&n.shadowObj.css({width:n.menu.width()+n.shadowWidthAdjust+"px",height:n.menu.height()+n.shadowHeightAdjust+"px",top:t+n.shadowOffsetY+"px",left:e+n.shadowOffsetX+"px"}).addClass(n.shadowClass)[n.showTransition](n.showSpeed)},beforeShow:function(){return!0},show:function(t,a){var n=this,s=a.pageX,o=a.pageY;if(n.target=t,n.beforeShow()!==!1){n.menuFunction&&(n.menu&&e(n.menu).remove(),n.menu=n.createMenu(n.menuFunction(n,t),n),n.menu.css({display:"none"}),e(n.appendTo).append(n.menu));var i=n.menu;s+=n.offsetX,o+=n.offsetY;var d=n.getPosition(s,o,n,a);n.showShadow(d.x,d.y,a),n.useIframe&&i.find("iframe").css({width:i.width()+n.shadowOffsetX+n.shadowWidthAdjust,height:i.height()+n.shadowOffsetY+n.shadowHeightAdjust}),i.css({top:d.y+"px",left:d.x+"px",position:"absolute",zIndex:9999})[n.showTransition](n.showSpeed,n.showCallback?function(){n.showCallback.call(n)}:null),n.shown=!0,e(document).one("click",null,function(){n.hide()})}},getPosition:function(t,a,n,s){var o=t+n.offsetX,i=a+n.offsetY,d=e(n.menu).height(),r=e(n.menu).width(),h=n.direction;if(n.constrainToScreen){var l=e(window),c=l.height(),u=l.width();"down"==h&&i>c/2&&(h="up");var m=o+r-l.scrollLeft();m>u&&(o-=m-u)}return"up"==h&&(i-=d),{x:o,y:i}},hide:function(){var t=this;t.shown&&(t.iframe&&e(t.iframe).hide(),t.menu&&t.menu[t.hideTransition](t.hideSpeed,t.hideCallback?function(){t.hideCallback.call(t)}:null),t.shadow&&t.shadowObj[t.hideTransition](t.hideSpeed)),t.shown=!1}},e.fn.contextMenu=function(t,a){var n=e.contextMenu.create(t,a);return this.each(function(){e(this).bind("contextmenu",function(e){return n.show(this,e),!1})})}}(jQuery);