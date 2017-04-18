var SiteDialog=function(t){DialogWithGroupInput.call(this,t,{confirmOnClose:!1,hideButtons:!0,hideHeader:!0,type:Account,additionalClasses:"lmiDialog",additionalDropdownClasses:"lmiDropdown"}),this.tiles=[],this.activeTile=null,this.selectedTile=null,this.isSelectable=!1,this.submitted=!1};SiteDialog.prototype=Object.create(DialogWithGroupInput.prototype),SiteDialog.prototype.constructor=SiteDialog,function(){SiteDialog.prototype.initialize=function(t){DialogWithGroupInput.prototype.initialize.apply(this,arguments),function(e){t.on("click",".neverSave",function(){bg.handleNeverURL({action:"never",cmd:"neverdomain",url:e.data.defaultData.url,fromsave:!0}),bg.IntroTutorial.setState({enabled:!1}),e.sendTrackingEvent("never"),e.close()}),t.on("input change",function(){e.data.generatedPasswordSaved&&e.nextButton.text(Strings.translateString("Update"))}),e.backButton=t.find("#close").bind("click",function(){e.data.generatedPassword?e.data.generatedPasswordSaved?(e.dialogContent.css({height:e.dialogContent.css("height")}),e.$element.addClass("removeGeneratedConfirmation"),e.sendTrackingEvent("undo")):(e.sendTrackingEvent("discard"),e.close()):(e.sendTrackingEvent("notnow"),e.close())}),e.nextButton=t.find("#submit").bind("click",function(){e.isSelectable?e.selectedTile&&e.submit():e.submit()}),t.find("#closeConfirmation").bind("click",function(){e.close()}),t.find("#deleteGenerated").bind("click",function(){e.vaultItem.deleteItem({confirm:!1}),e.close()}),t.find(".addNewSiteButton").bind("click",function(){var t=e.tiles.slice();e.defaultFields(e.data),e.originalData=e.getData(),e.populateFields(e.data.dialogData),e.setupAdd(),e.setSelectable(!1),$(this).LP_hide();for(var i=0;i<t.length;++i)t[i].remove()})}(this)};var t=function(t){for(var e={},i=t.find("[dialogFieldDisplay]"),n=0;n<i.length;++n){e[i[n].getAttribute("dialogFieldDisplay")]=!0}return e},e=function(t,e){for(var i=t.find("[dialogFieldDisplay]"),n=0;n<i.length;++n){var a=i[n],s=e[a.getAttribute("dialogFieldDisplay")];s&&(a.textContent=s)}};SiteDialog.prototype.sendTrackingEvent=function(t){var e=this.clickedEdit?"savesiteedit":"savesiteseen",i={action:t};this.clickedEdit&&$.extend(i,{changedEmail:this.inputFields.unencryptedUsername.getValue()!==this.data.defaultData.unencryptedUsername,changedPassword:this.inputFields.password.getValue()!==this.data.dialogData.password,showedPassword:!!this.activeTile&&this.activeTile.showedPassword()}),bg.sendLpImprove(e,i)},SiteDialog.prototype.setupAdd=function(t){t=t||this.data,this.$element.find(".question").text(Strings.translateString("Add to LastPass?")),this.nextButton.text(Strings.translateString("Add"));var e=new this.SiteTile;t.defaultData.unencryptedUsername||e.showDetails({animate:!1,clearErrors:!0,tileHeight:"auto"})};var i=function(t,e,i){var n=$.extend({},t.defaultData);return e&&$.extend(n,e.getFormData($.extend(i,DialogInput.getProperties(t.dialogData),DialogInput.getProperties(t.defaultData)))),n},n=function(t,e,n){return $.extend(i(t,e,n),t.dialogData)},a=function(t,e){bg.LPIcons.get({url:t.defaultData.url,square:!0,callback:function(i){if(i)e(i);else{var n=function(){bg.LPPlatform.getFavicon({url:t.defaultData.url,callback:e})};t.sameDomain?csTop.LPContentScriptTools.getFavicon(function(t){t?e(t):n()}):n()}}})};SiteDialog.prototype.hasDuplicates=function(){for(var t=0;t<this.tiles.length;++t)if(this.tiles[t].getDuplicates().length>0)return!0;return!1},SiteDialog.prototype.setup=function(a,s){s.saveOptions={source:"saveSite"},a.find(".addSiteFavicon").append(LPTools.createElement("img",{class:"favicon",src:s.favicon?s.favicon:"images/site/world.png"}));var o=this,l=a.find(".tileContainer"),r=a.find(".question"),d=a.find(".explanation"),c=a.find(".dialogForm"),u=a.find(".tile.template"),h=a.find(".deleteOverlayContainer.template"),g=t(u),p=DialogInput.getProperties(o.inputFields),f=this.SiteTile=function(t){t=t||{};var a=this,s=u.clone().removeClass("template"),r=null,d=o.data,f=!1,m=!1,v=null,S=!1,D=i(d,t.site,p),y=n(d,t.site,p),b=null,w=function(t){t&&o.clearErrors(),o.originalData=D,o.populateFields(y)};this.showedPassword=function(){return S},this.getDialogData=function(){return y},this.getOriginalData=function(){return D},this.getOriginalDialogData=function(){return n(d,t.site,p)},this.getDuplicates=function(){if(null===b&&(b=[],d.defaultData.unencryptedUsername)){var t=bg.hostof(y.url);o.tiles.forEach(function(e){var i=e.getDialogData();e!==a&&bg.hostof(i.url)===t&&b.push(e)})}return b},this.handleHeightChange=function(){var t=function(t,e){var i=function(n){n.target===this&&(t.unbind("transitionend",i),e())};t.bind("transitionend",i)},e=function(e,i){e=e||{};var n=LPTools.getOption(e,"animate",!0),a="animating";n&&(e.animationClass&&(a+=" "+e.animationClass),s.addClass(a));var o=function(t){s.removeClass(a),t&&t.transitionEndHandler&&t.transitionEndHandler(),i({callback:t&&t.onFrameResizeComplete})};e.change(function(i){var a=LPTools.getOption(i,"tileHeight",LPTools.getOption(e,"tileHeight",s.children().first().outerHeight())),l=s.height();return s.css("height",a),a!==l&&n?t(s,function(){o(i)}):o(i),a})};return function(t){LPTools.getOption(t,"animate",!0)?o.requestAnimationFrame(function(i){e(t,i)}):e(t,function(t){o.setFrameSize(),t&&t.callback&&t.callback()})}}(),this.showDetails=function(t){this.handleHeightChange($.extend(t,{animationClass:"details-animatation",change:function(e){null===v&&(v=s.height()),o.activeTile&&o.activeTile!==a&&o.activeTile.hideDetails(t),o.activeTile=a,w(t&&t.clearErrors),s.find(".tileContent").append(c),s.addClass("details");var i=e();o.clickedEdit||(o.clickedEdit=!0,o.sendTrackingEvent("edit"),o.adjustView(!0),o.adjustScrollHeight(i-v))}}))},this.preSubmit=function(){o.activeTile!==this&&(o.activeTile&&(o.activeTile.hideDetails(),o.activeTile=null),w()),o.vaultItem=t.site,!o.vaultItem&&d.dialogData.fields&&(d.saveOptions.saveFromSubmit=!0)},this.hideDetails=function(t){y=o.getData();var e=c.clone();this.handleHeightChange($.extend(t,{animationClass:"details-animatation",change:function(t){s.find(".tileContent").append(e),s.removeClass("details"),t({transitionEndHandler:function(){e.remove()},tileHeight:v})}}))},this.unselect=function(){f&&(o.selectedTile=null,f=!1,s.removeClass("selected"),o.$element.removeClass("selected"),o.nextButton.prop("disabled",!0))},this.toggleSelect=function(){f?(this.unselect(),this.getDuplicates().forEach(function(t){t.hideDeleteOverlay()})):(this.getDuplicates().forEach(function(t){t.showDeleteOverlay()}),o.tiles.forEach(function(t){t.unselect()}),o.selectedTile=this,f=!0,s.addClass("selected"),o.$element.addClass("selected"),o.nextButton.prop("disabled",!1))},this.remove=function(){s.remove();for(var t=0;t<o.tiles.length;++t)if(o.tiles[t]===this){o.tiles.splice(t,1);break}},this.showDeleteOverlay=function(){null===r&&(r=h.clone().removeClass("template"),r.find(".cancelDeleteButton").bind("click",this.hideDeleteOverlay),r.find(".deleteButton").bind("click",function(){t.site.deleteItem({confirm:!1,success:function(){a.remove()}}),a.hideDeleteOverlay()})),s.append(r),s.addClass("duplicate")},this.hideDeleteOverlay=function(){s.removeClass("duplicate"),r.one("animationend",function(){s.hasClass("duplicate")||r.detach()})},this.setSelectable=function(t){m=t;var e=s.find(".favicon");m?(e.addClass("hoverFadeOut"),s.find(".checkmark").LP_show()):(e.removeClass("hoverFadeOut"),s.find(".checkmark").LP_hide()),o.setSelectable(t)},s.find(".tileEdit").bind("click",function(){a.showDetails({clearErrors:!0})}),s.find(".checkmark").bind("click",function(){a.toggleSelect()}),s.on("click",".showPassword",function(){S=!0}),l.append(s),e(s,t.site?t.site.getFormData(g):d.defaultData),o.tiles.push(this)};if(s.matchingSites)if(0===s.matchingSites.length)s.generatedPasswordSaved?(r.text(Strings.translateString("Nice! We've now added this to LastPass")),this.nextButton.text(Strings.translateString("Got it")),this.backButton.text(Strings.translateString("Undo")),new f({site:s.vaultItem})):this.setupAdd(s);else if(1===s.matchingSites.length)s.generatedPasswordSaved?(r.text(Strings.translateString("Nice! We've updated your password")),this.nextButton.text(Strings.translateString("Got it")),this.backButton.LP_hide()):(r.text(Strings.translateString("Update password?")),this.nextButton.text(Strings.translateString("Update")),s.defaultData.unencryptedUsername&&s.matchingSiteSameSubDomain||a.find(".addNewSiteButton").LP_show()),s.vaultItem=LPProxy.getSiteModel(s.matchingSites[0]),new f({site:s.vaultItem});else{for(var m=0;m<s.matchingSites.length;++m)new f({site:LPProxy.getSiteModel(s.matchingSites[m])}).setSelectable(!0);r.text(Strings.translateString("Which account should we update?")),s.defaultData.unencryptedUsername?this.hasDuplicates()&&d.text(Strings.translateString("Choose one to update and delete the duplicate.")):a.find(".addNewSiteButton").LP_show(),this.nextButton.text(Strings.translateString("Update"))}!s.generatedPassword||s.generatedPasswordSaved||s.sameDomain||(r.text(Strings.translateString("Oops! What would you like to do with your generated password?")),this.backButton.text(Strings.translateString("Discard"))),DialogWithGroupInput.prototype.setup.apply(this,arguments),this.inputFields.unencryptedUsername.setValues(LPProxy.getSiteUsernames()),this.inputFields.unencryptedUsername.disableClickToggle()},SiteDialog.prototype.setSelectable=function(t){t?(this.$element.addClass("selectable"),this.nextButton.prop("disabled",!0)):(this.$element.removeClass("selectable"),this.nextButton.prop("disabled",!1))},SiteDialog.prototype.validate=function(t){var e=DialogWithGroupInput.prototype.validate.apply(this,arguments);return""===t.unencryptedUsername&&(this.addError("unencryptedUsername",Strings.translateString("Please enter a username.")),e=!1),e},SiteDialog.prototype.getDialogActions=function(t){},SiteDialog.prototype.close=function(t){bg.LPTabState.clear({force:!0}),DialogWithGroupInput.prototype.close.apply(this,arguments)},SiteDialog.prototype.saveGeneratedPassword=function(t,e){var a;if(t.generatedPassword&&t.formSubmitted&&t.defaultData.unencryptedUsername)if(0===t.matchingSites.length)a=n(t),(new Account).addFromDialog(a,this.getGroup(a),{success:function(i){t.vaultItem=i,t.generatedPasswordSaved=!0,bg.LPTabState.clear({force:!0}),e()}});else if(1===t.matchingSites.length&&t.matchingSiteSameSubDomain){var s=LPProxy.getSiteModel(t.matchingSites[0]);a=n(t,s),r(a,i(t,s),a),s.saveFromDialog(a,this.getGroup(a),{success:function(i){t.vaultItem=i,t.generatedPasswordSaved=!0,bg.LPTabState.clear({force:!0}),e()}})}else e();else e()},SiteDialog.prototype.open=function(t){var e=this;this.saveGeneratedPassword(t,function(){a(t,function(i){t.favicon=i,DialogWithGroupInput.prototype.open.call(e,t)})})},SiteDialog.prototype.adjustScrollHeight=function(t){this.scrollHeight&&(this.scrollHeight+=t,this.tileContainer.css({"max-height":this.scrollHeight}))},SiteDialog.prototype.setInitialScrollHeight=function(){if(this.tiles.length>3){this.tileContainer=this.$element.find(".tileContainer");var t=this.tileContainer.height(),e=this.$element.find(".tile").first().height(),i=(t-e*this.tiles.length)/(this.tiles.length-1);this.scrollHeight=3.5*e+3*i,this.tileContainer.css({overflow:"auto","max-height":this.scrollHeight})}},SiteDialog.prototype.showInitial=function(){!function(t){t.requestAnimationFrame(function(e){t.show(),t.setInitialScrollHeight(),t.$element.addClass("animate-enter").one("animationend",function(){t.$element.removeClass("animate-enter"),e()})})}(this)};var s=null,o=!1;SiteDialog.prototype.showInProcessOverlay=function(){if(this.submitted){var t=this.$element;t.addClass("inProcess").one("animationend",function(){t.addClass("waiting"),setTimeout(function(){o=!0,s&&s()},500)})}},SiteDialog.prototype.hideInProcessOverlay=function(){this.$element.removeClass("inProcess waiting")},SiteDialog.prototype.closeOnSuccess=function(){if(this.submitted){var t=this;t.$element.addClass("inProcess waiting");var e=function(){t.$element.removeClass("waiting").addClass("success").one("animationend.success",function(){setTimeout(function(){t.close()},500)})};o?e():s=function(){setTimeout(function(){e()},0)}}},SiteDialog.prototype.performValidate=function(t){var e=this;if(e.selectedTile)if(e.selectedTile===e.activeTile)e.activeTile.handleHeightChange({change:function(i){var n=t.callback;t.callback=function(){var t=arguments;i({onFrameResizeComplete:function(){n&&n.apply(e,t)}})},DialogWithGroupInput.prototype.performValidate.call(e,t)}});else{var i=t.callback;t.callback=function(t){t||e.selectedTile.showDetails(),i&&i.apply(this,arguments)},DialogWithGroupInput.prototype.performValidate.call(e,t)}},SiteDialog.prototype.getErrorOptions=function(){return{static:!0,alignTop:!0,showErrorLabel:!1}},SiteDialog.prototype.submit=function(){1===this.tiles.length&&(this.selectedTile=this.tiles[0]),this.selectedTile.preSubmit(),DialogWithGroupInput.prototype.submit.apply(this,arguments),this.vaultItem?this.sendTrackingEvent("update"):this.sendTrackingEvent("add")};var l=function(t,e){t.fields&&t.fields.forEach(function(i){t.unencryptedUsername&&t.unencryptedUsername===i.value&&"password"!==i.type?i.value=e.unencryptedUsername:"password"===i.type&&(i.value=e.password)})},r=function(t,e,i){if(i.fields){l(e,i),l(t,i);var n=e.fields?e.fields:[];t.fields&&(n=n.concat(t.fields.filter(function(t){for(var e=0;e<n.length;++e){var i=n[e];if(t.type===i.type&&t.name===i.name&&t.formname===i.formname)return!1}return!0}))),i.fields=n}};SiteDialog.prototype.handleSubmit=function(t){this.submitted=!0,r(this.selectedTile.getOriginalDialogData(),this.selectedTile.getOriginalData(),t),DialogWithGroupInput.prototype.handleSubmit.apply(this,arguments)}}();