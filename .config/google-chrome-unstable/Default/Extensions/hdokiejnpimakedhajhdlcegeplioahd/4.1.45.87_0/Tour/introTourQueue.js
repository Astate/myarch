var IntroTourQueue=function(t,o){IntroTourQueue.prototype.options=$.extend({remainingTours:[{name:"introTour",showDate:new Date,isLater:!1}]},o),IntroTourQueue.prototype.tourSetData=t};!function(){"use strict";IntroTourQueue.prototype.laterThisTour=function(){if(this.options.remainingTours&&this.options.remainingTours.length>0){var t=this.options.remainingTours.shift();t.showDate=new Date,t.showDate.setDate(t.showDate.getDate()+3),t.isLater=!0,this.options.remainingTours.push(t)}},IntroTourQueue.prototype.neverThisTour=function(){this.options.remainingTours&&this.options.remainingTours.length>0&&this.options.remainingTours.shift()},IntroTourQueue.prototype.takeThisTour=function(){this.options.remainingTours&&this.options.remainingTours.length>0&&this.options.remainingTours.shift()},IntroTourQueue.prototype.neverAllTours=function(){this.options.remainingTours=[]},IntroTourQueue.prototype.getAvailableTour=function(){var t=null;if(this.options.remainingTours&&this.options.remainingTours.length>0){var o=this.options.remainingTours[0];o&&this.tourSetData&&(t={tour:this.tourSetData[o.name],showDate:o.showDate,isLater:o.isLater})}return t}}();