'use strict';var Lg=function(a){this.bk="number"==typeof a?0<a?1:0>a?-1:null:null==a?null:a?-1:1};if("undefined"!=typeof angular){var Mg=angular.module("chrome_18n",[]);chrome.runtime&&chrome.runtime.getManifest&&chrome.runtime.getManifest().default_locale&&Mg.directive("angularMessage",function(){return{restrict:"E",replace:!0,controller:["$scope",function(a){var b=this;this.Ue=this.hd=null;a.dirForText=function(a){b.hd||(b.hd=chrome.i18n.getMessage("@@bidi_dir")||"ltr");b.Ue||(b.Ue=new Lg("rtl"==b.hd));var c=b.Ue,e,f=e=0,g=!1;a=(a||"").split(qg);for(var m=0;m<a.length;m++){var q=a[m];og.test(q)?
(e++,f++):pg.test(q)?g=!0:mg.test(q)?f++:rg.test(q)&&(g=!0)}e=0==f?g?1:0:.4<e/f?-1:1;return-1==(0==e?c.bk:e)?"rtl":"ltr"}}],compile:function(a,b){b=b.key;var c=null,d=document.createElement("amr");b&&!b.match(/^\d+$/)&&(b=chrome.i18n.getMessage(b),null==b&&d.setAttribute("id","missing"));if(b){var e=chrome.i18n.getMessage(b+"_ph"),c=[];if(null!=e)for(c=e.split("\ue000"),e=0;e<c.length;++e)c[e]=c[e].replace(/^{{(.*)}}$/,'<amrp dir="{{dirForText($1)}}">{{$1}}</amrp>');c=chrome.i18n.getMessage(b,c)}else d.setAttribute("r",
"nokey");c?d.innerHTML=c:(d.setAttribute("tl","false"),d.innerHTML=a.html());a.replaceWith(d)}}})};var Ng=/^[\w+/]+[=]{0,2}$/;var Og=function(a,b,c){a.timeOfStartCall=(new Date).getTime();var d=c||na,e=d.document,f;a:{if((f=(d||na).document.querySelector("script[nonce]"))&&(f=f.nonce||f.getAttribute("nonce"))&&Ng.test(f))break a;f=void 0}f&&(a.nonce=f);if("help"==a.flow){var g=oa("document.location.href",d);!a.helpCenterContext&&g&&(a.helpCenterContext=g.substring(0,1200));g=!0;if(b&&JSON&&JSON.stringify){var m=JSON.stringify(b);(g=1200>=m.length)&&(a.psdJson=m)}g||(b={invalidPsd:!0})}b=[a,b,c];d.GOOGLE_FEEDBACK_START_ARGUMENTS=
b;c=a.serverUri||"//www.google.com/tools/feedback";if(g=d.GOOGLE_FEEDBACK_START)g.apply(d,b);else{var d=c+"/load.js?",q;for(q in a)b=a[q],null!=b&&!ya(b)&&(d+=encodeURIComponent(q)+"="+encodeURIComponent(b)+"&");a=e.createElement("script");f&&a.setAttribute("nonce",f);a.src=d;e.body.appendChild(a)}};p("userfeedback.api.startFeedback",Og);var Pg=function(){this.f=this.b=this.receiverVersion=this.modelName=this.h=this.a=this.ne=""};var Qg=chrome.i18n.getMessage("4163185390680253103"),Rg=chrome.i18n.getMessage("492097680647953484"),Sg=chrome.i18n.getMessage("2575016469622936324"),Tg=chrome.i18n.getMessage("128276876460319075"),Ug=chrome.i18n.getMessage("3326722026796849289"),Vg=chrome.i18n.getMessage("1018984561488520517"),Wg=chrome.i18n.getMessage("8205999658352447129"),Xg=chrome.i18n.getMessage("5723583529370342957"),Yg=chrome.i18n.getMessage("1550904064710828958"),Zg=chrome.i18n.getMessage("5014364904504073524"),$g=chrome.i18n.getMessage("2194670894476780934"),
ah=chrome.i18n.getMessage("6614468912728530636"),bh=chrome.i18n.getMessage("5910595154486533449"),ch=chrome.i18n.getMessage("5363086287710390513"),dh=chrome.i18n.getMessage("244647017322945605"),eh=chrome.i18n.getMessage("5375576275991472719"),fh=chrome.i18n.getMessage("4592127349908255218"),gh=chrome.i18n.getMessage("843316808366399491"),hh=chrome.i18n.getMessage("5699813974548050528"),ih=chrome.i18n.getMessage("8515148417333877999"),jh=chrome.i18n.getMessage("1636686747687494376"),kh=chrome.i18n.getMessage("4148300086676792937"),
lh=chrome.i18n.getMessage("3219866268410307919"),mh=chrome.i18n.getMessage("9211708838274008657"),nh=chrome.i18n.getMessage("8706273405040403641"),oh=chrome.i18n.getMessage("4756056595565370923"),ph=chrome.i18n.getMessage("7876724262035435114"),qh=chrome.i18n.getMessage("5485620192329479690"),rh=chrome.i18n.getMessage("6963873398546068901"),sh=chrome.i18n.getMessage("3567591856726172993"),th=chrome.i18n.getMessage("3239956785410157548");var vh=function(a,b){var c=this;this.j=b;this.a=a;this.a.top=a;this.m=[];this.h=!1;this.b=new Pg;this.a.videoSmoothnessRatings=this.Qf($g,Vg,Wg,Xg,Yg,Zg);this.a.videoQualityRatings=this.Qf($g,ah,bh,ch,dh,eh);this.a.audioQualityRatings=this.Qf($g,fh,gh,hh,ih,jh);this.m=[{value:"Bug",desc:Qg},{value:"FeatureRequest",desc:Rg},{value:"MirroringQuality",desc:Sg},{value:"Discovery",desc:Tg},{value:"Other",desc:Ug}];this.a.feedbackTypes=this.m;this.a.includeFineLogs=!0;this.a.feedbackType="Bug";this.a.sendFeedback=
this.Ll.bind(this);this.a.cancel=this.Yj.bind(this);this.a.attachLogsClick=this.g.bind(this);this.a.viewLogs=this.o.bind(this);this.a.$watchGroup("videoSmoothness videoQuality audioQuality feedbackDescription comments feedbackType".split(" "),this.ak.bind(this));this.a.sufficientFeedback=!1;this.a.$watch("attachLogs",this.g.bind(this));this.a.attachLogs=!0;this.w=ob();this.a.userEmail="";chrome.identity.getProfileUserInfo(function(a){c.a.userEmail=a.email;uh(c)});this.a.yourAnswerText=th;this.a.language=
chrome.i18n&&chrome.i18n.getUILanguage?chrome.i18n.getUILanguage():chrome.runtime.getManifest().default_locale;this.a.requestLogsInProgress=!1};h=vh.prototype;h.Qf=function(a){for(var b=[],c=1;c<arguments.length;c++)b.push(new wh(c,arguments[c]));b.push(new wh(0,arguments[0]));return b};h.Yj=function(){this.a.feedbackDescription&&!confirm(kh)||window.close()};
h.ak=function(){var a=this.a.feedbackType;this.a.sufficientFeedback="MirroringQuality"==a?this.a.videoSmoothness||this.a.videoQuality||this.a.audioQuality||this.a.comments:"Discovery"==a?this.a.visibleInSetup||this.a.comments:!!this.a.feedbackDescription};
h.Ll=function(){if(this.a.sufficientFeedback){var a=this.a.feedbackType,b="";"MirroringQuality"==a?(this.a.videoSmoothness&&(b+="\nVideo Smoothness: "+this.a.videoSmoothness),this.a.videoQuality&&(b+="\nVideo Quality: "+this.a.videoQuality),this.a.audioQuality&&(b+="\nAudio: "+this.a.audioQuality),this.a.projectedContentUrl&&(b+="\nProjected Content/URL: "+this.a.projectedContentUrl),this.a.comments&&(b+="\nComments: "+this.a.comments)):"Discovery"==a?(this.a.visibleInSetup&&(b+="\nChromecast Visible in Setup: "+
this.a.visibleInSetup),this.a.hasNetworkSoftware&&(b+="\nUsing VPN/proxy/firewall/NAS Software: "+this.a.hasNetworkSoftware),this.a.networkDescription&&(b+="\nNetwork Description: "+this.a.networkDescription),this.a.comments&&(b+="\nComments: "+this.a.comments)):b=this.a.feedbackDescription;a="Type: "+a+"\n\n"+b;this.a.sendDialogText=lh;this.a.okButton=sh;this.a.feedbackSent=!1;this.j.show({locals:{hr:this.a.feedbackSent,pr:this.a.sendDialogText,Bk:this.a.okButton},scope:this.a,preserveScope:!0,bindToController:!0,
template:'<md-dialog id="feedback-confirmation"><md-dialog-content><div id="send-feedback-text">{{sendDialogText}}</div><md-dialog-actions><md-button class="md-raised md-primary"ng-disabled="!feedbackSent" ng-click="closeWindow()">{{okButton}}</md-button></md-dialog-actions></md-dialog-content></md-dialog>',controller:this.f});this.Xh(a,Date.now())}};h.Xh=function(a,b){var c=Date.now();!this.a.requestLogsInProgress||5E3<c-b?xh(this,a):setTimeout(this.Xh.bind(this),1E3,a,b)};
var xh=function(a,b){var c=0,d=function(b,c,d){d?b(!0):(a.a.sendDialogText=oh,uh(a),c(Error("Failed to send")))},e=chrome.declarativeWebRequest?"MrTeamfood":"MRStable";fg(new dg(function(){c++;return new Promise(function(c,g){var f=a.a.userEmail,q=a.b;c=d.bind(null,c,g);g=chrome.runtime.getManifest();Og({productId:85561,bucket:e,flow:"submit",serverUri:"https://www.google.com/tools/feedback",allowNonLoggedInFeedback:!0,locale:g.default_locale,enableAnonymousFeedback:!f,report:{description:b},callback:c},
{version:g.version,description:g.description,user_email:f||"NA",logs:q.ne||"NA",external_logs:q.a||"NA",device_model:q.modelName||"NA",receiver_version:q.receiverVersion||"NA",dash_report_url:q.h||"NA",cast_device_counts:q.b,dial_device_counts:q.f})})},1E4,4),2).start().then(function(){a.a.sendDialogText=nh;a.a.feedbackSent=!0;uh(a)},function(){a.a.sendDialogText=mh;a.a.feedbackSent=!0;uh(a)})};
vh.prototype.g=function(){var a=this;this.b=new Pg;this.a.attachLogs&&(this.a.requestLogsInProgress=!0,chrome.runtime.sendMessage(new gg(this.w,"retrieve_log_data"),function(b){a.a.requestLogsInProgress=!1;a.b.ne=b.logs||"no extension";b.castStreamingLogs&&(a.b.h=b.castStreamingLogs);b.castDeviceCounts&&(a.b.b=b.castDeviceCounts);b.dialDeviceCounts&&(a.b.f=b.dialDeviceCounts);if(b=b.device)if(b.model&&(a.b.modelName=b.model),b.version&&(a.b.receiverVersion=b.version),!a.h){var c=ob();a.h=!0;a.b.a=
jg(b.ip,c,a.v.bind(a))}}))};
vh.prototype.o=function(){this.a.logs=this.b.ne;this.a.logsHeader=ph;this.a.sendLogs=qh;this.a.fineLogsWarning=rh;this.a.okButton=sh;this.j.show({locals:{dr:this.a.attachLogs,ne:this.a.logs,lr:this.a.includeFineLogs,or:this.a.logsHeader,qr:this.a.sendLogs,jr:this.a.fineLogsWarning,Bk:this.a.okButton},scope:this.a,preserveScope:!0,bindToController:!0,clickOutsideToClose:!0,template:'<md-dialog><md-dialog-content id="logs-dialog"><div class="subheading">{{logsHeader}}</div><div ng-show="includeFineLogs && attachLogs"id="feedback-fine-log-warning" class="informative">{{fineLogsWarning}}</div><pre>{{logs}}</pre><div class="send-logs"><md-checkbox type="checkbox" ng-model="attachLogs"ng-change="attachLogsClick()"><span>{{sendLogs}}</span></md-checkbox></div><md-dialog-actions><md-button class="md-raised md-primary"ng-click="closeDialog()">{{okButton}}</md-button></md-dialog-actions></md-dialog-content></md-dialog>',controller:this.f})};
vh.prototype.v=function(a,b){this.h=!1;this.b.a="error"==a?"":b;this.a.attachLogs||(this.b.a="");uh(this)};var uh=function(a){a.a.$$phase||a.a.$apply()};vh.prototype.f=function(a,b){a.closeWindow=function(){window.close()};a.closeDialog=function(){b.hide()}};vh.prototype.f.$inject=["$scope","$mdDialog"];var wh=function(a,b){this.id=a;this.desc=b;this.text=0==a?b:a+" ("+b+")"};
angular.module("feedbackApp","chrome_18n material.components.button material.components.checkbox material.components.dialog material.components.input material.components.radioButton".split(" ")).controller("FeedbackCtrl",["$scope","$mdDialog",vh]);p("ng.safehtml.googSceHelper.isGoogHtmlType",function(a){return a&&a.Ic?!0:!1});p("ng.safehtml.googSceHelper.isCOMPILED",function(){return!0});p("ng.safehtml.googSceHelper.unwrapAny",function(a){if(a instanceof Cg)return Dg(a);if(a instanceof Ig)return Jg(a);if(a instanceof Fg)return Gg(a);if(a instanceof zg)return Ag(a);if(a instanceof wg)return xg(a);throw Error();});
p("ng.safehtml.googSceHelper.unwrapGivenContext",function(a,b){if("html"==a)return Jg(b);if("resourceUrl"==a||"templateUrl"==a)return Dg(b);if("url"==a)return b instanceof Cg?Dg(b):Gg(b);if("css"==a)return Ag(b);if("js"==a)return xg(b);throw Error();});
