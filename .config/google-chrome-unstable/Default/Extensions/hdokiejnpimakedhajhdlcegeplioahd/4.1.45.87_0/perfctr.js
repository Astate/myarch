function init_LPctr(){LPctr||(LPctr=new LPctr_lib)}function LPCTR(t){var e=0;if("undefined"!=typeof g_isdebug&&g_isdebug||"undefined"!=typeof debug&&debug){init_LPctr();var e=LPctr.increment(t)}return 0!==e}function LPctr_lib(){var t=this;this.timestamp=function(){return(new Date).getTime()};var e=(t.timestamp(),0),i={},r={};this.reset_all=function(){r={},e=t.timestamp()},this.increment=function(r){return r?(void 0===i[r]?i[r]=1:"number"!=typeof i[r]||(i[r],0)||(i[r]>=2147483647?i[r]=1:i[r]++,e=t.timestamp()),i[r]):0},this.get=function(t){return t&&void 0!==i[t]?i[t]:0},this.clear=function(t){return!(!t||"number"!=typeof i[t]||(i[t],0))&&delete i[t]},this.start_timer=function(e){return e?(i[e]={start:t.timestamp(),stop:0},i[e].start):0},this.stop_timer=function(e){return e&&void 0!==i[e]?(i[e].stop=t.timestamp(),i[e].stop):0},this.get_timer=function(t){if(t&&void 0!==i[t]){var e=i[t].start,r=i[t].stop;return isNaN(e)||isNaN(r)||null===e||null===r||void 0===e||void 0===r||e>r?0:r-e}return 0},this.clear_timer=function(e){return t.reset_timer(e)},this.reset_timer=function(t){return!!t&&(i[t]=0,!0)}}var LPctr=new LPctr_lib;