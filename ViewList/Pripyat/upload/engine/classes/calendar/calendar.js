/**
 * @preserve jQuery DateTimePicker plugin v2.4.1
 * @homepage http://xdsoft.net/jqplugins/datetimepicker/
 * (c) 2014, Chupurnov Valeriy.
 */

(function(b){var x={i18n:{ru:{months:"\u042f\u043d\u0432\u0430\u0440\u044c \u0424\u0435\u0432\u0440\u0430\u043b\u044c \u041c\u0430\u0440\u0442 \u0410\u043f\u0440\u0435\u043b\u044c \u041c\u0430\u0439 \u0418\u044e\u043d\u044c \u0418\u044e\u043b\u044c \u0410\u0432\u0433\u0443\u0441\u0442 \u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c \u041e\u043a\u0442\u044f\u0431\u0440\u044c \u041d\u043e\u044f\u0431\u0440\u044c \u0414\u0435\u043a\u0430\u0431\u0440\u044c".split(" "),dayOfWeek:"\u0412\u0441\u043a \u041f\u043d \u0412\u0442 \u0421\u0440 \u0427\u0442 \u041f\u0442 \u0421\u0431".split(" ")},en:{months:"January February March April May June July August September October November December".split(" "),dayOfWeek:"Sun Mon Tue Wed Thu Fri Sat".split(" ")}},value:"",lang:"en",format:"Y/m/d H:i",formatTime:"H:i",formatDate:"Y/m/d",startDate:!1,step:60,monthChangeSpinner:!0,closeOnDateSelect:!1,closeOnWithoutClick:!0,closeOnInputClick:!0,timepicker:!0,datepicker:!0,weeks:!1,defaultTime:!1,defaultDate:!1,minDate:!1,maxDate:!1,minTime:!1,maxTime:!1,allowTimes:[],opened:!1,initTime:!0,inline:!1,theme:"",onSelectDate:function(){},onSelectTime:function(){},onChangeMonth:function(){},onChangeYear:function(){},onChangeDateTime:function(){},onShow:function(){},onClose:function(){},onGenerate:function(){},withoutCopyright:!0,inverseButton:!1,hours12:!1,next:"xdsoft_next",prev:"xdsoft_prev",dayOfWeekStart:0,parentID:"body",timeHeightInTimePicker:25,timepickerScrollbar:!0,todayButton:!0,defaultSelect:!0,scrollMonth:!0,scrollTime:!0,scrollInput:!0,lazyInit:!1,mask:!1,validateOnBlur:!0,allowBlank:!0,yearStart:1950,yearEnd:2050,style:"",id:"",fixed:!1,roundTime:"round",className:"",weekends:[],disabledDates:[],yearOffset:0,beforeShowDay:null,enterLikeTab:!0};Array.prototype.indexOf||(Array.prototype.indexOf=function(b,g){var a,n;a=g||0;for(n=this.length;a<n;a+=1)if(this[a]===b)return a;return-1});Date.prototype.countDaysInMonth=function(){return(new Date(this.getFullYear(),this.getMonth()+1,0)).getDate()};b.fn.xdsoftScroller=function(m){return this.each(function(){var g=b(this),a=function(a){var b={x:0,y:0};if("touchstart"===a.type||"touchmove"===a.type||"touchend"===a.type||"touchcancel"===a.type)a=a.originalEvent.touches[0]||a.originalEvent.changedTouches[0],b.x=a.clientX,b.y=a.clientY;else if("mousedown"===a.type||"mouseup"===a.type||"mousemove"===a.type||"mouseover"===a.type||"mouseout"===a.type||"mouseenter"===a.type||"mouseleave"===a.type)b.x=a.clientX,b.y=a.clientY;return b},n,p,w,y,e,B=100,d=!1,K=0,r=0,v=0,I=!1,z=0,q=function(){};"hide"===m?g.find(".xdsoft_scrollbar").hide():(b(this).hasClass("xdsoft_scroller_box")||(n=g.children().eq(0),p=g[0].clientHeight,w=n[0].offsetHeight,y=b('<div class="xdsoft_scrollbar"></div>'),e=b('<div class="xdsoft_scroller"></div>'),y.append(e),g.addClass("xdsoft_scroller_box").append(y),q=function(b){b=a(b).y-K+z;0>b&&(b=0);b+e[0].offsetHeight>v&&(b=v-e[0].offsetHeight);g.trigger("scroll_element.xdsoft_scroller",[B?b/B:0])},e.on("touchstart.xdsoft_scroller mousedown.xdsoft_scroller",function(d){p||g.trigger("resize_scroll.xdsoft_scroller",[m]);K=a(d).y;z=parseInt(e.css("margin-top"),10);v=y[0].offsetHeight;"mousedown"===d.type?(document&&b(document.body).addClass("xdsoft_noselect"),b([document.body,window]).on("mouseup.xdsoft_scroller",function D(){b([document.body,window]).off("mouseup.xdsoft_scroller",D).off("mousemove.xdsoft_scroller",q).removeClass("xdsoft_noselect")}),b(document.body).on("mousemove.xdsoft_scroller",q)):(I=!0,d.stopPropagation(),d.preventDefault())}).on("touchmove",function(a){I&&(a.preventDefault(),q(a))}).on("touchend touchcancel",function(a){I=!1;z=0}),g.on("scroll_element.xdsoft_scroller",function(a,b){p||g.trigger("resize_scroll.xdsoft_scroller",[b,!0]);b=1<b?1:0>b||isNaN(b)?0:b;e.css("margin-top",B*b);setTimeout(function(){n.css("marginTop",-parseInt((n[0].offsetHeight-p)*b,10))},10)}).on("resize_scroll.xdsoft_scroller",function(a,b,d){var m;p=g[0].clientHeight;w=n[0].offsetHeight;a=p/w;m=a*y[0].offsetHeight;1<a?e.hide():(e.show(),e.css("height",parseInt(10<m?m:10,10)),B=y[0].offsetHeight-e[0].offsetHeight,!0!==d&&g.trigger("scroll_element.xdsoft_scroller",[b||Math.abs(parseInt(n.css("marginTop"),10))/(w-p)]))}),g.on("mousewheel",function(a){var b=Math.abs(parseInt(n.css("marginTop"),10)),b=b-20*a.deltaY;0>b&&(b=0);g.trigger("scroll_element.xdsoft_scroller",[b/(w-p)]);a.stopPropagation();return!1}),g.on("touchstart",function(b){d=a(b);r=Math.abs(parseInt(n.css("marginTop"),10))}),g.on("touchmove",function(b){d&&(b.preventDefault(),b=a(b),g.trigger("scroll_element.xdsoft_scroller",[(r-(b.y-d.y))/(w-p)]))}),g.on("touchend touchcancel",function(a){d=!1;r=0})),g.trigger("resize_scroll.xdsoft_scroller",[m]))})};b.fn.datetimepicker=function(m){var g=!1,a=b.isPlainObject(m)||!m?b.extend(!0,{},x,m):b.extend(!0,{},x),n=0,p,w,y=function(a){a.on("open.xdsoft focusin.xdsoft mousedown.xdsoft",function d(b){a.is(":disabled")||a.data("xdsoft_datetimepicker")||(clearTimeout(n),n=setTimeout(function(){a.data("xdsoft_datetimepicker")||p(a);a.off("open.xdsoft focusin.xdsoft mousedown.xdsoft",d).trigger("open.xdsoft")},100))})};p=function(e){function n(){var c=!1,h;a.startDate?c=f.strToDate(a.startDate):(c=a.value||(e&&e.val&&e.val()?e.val():""))?c=f.strToDateTime(c):a.defaultDate&&(c=f.strToDate(a.defaultDate),a.defaultTime&&(h=f.strtotime(a.defaultTime),c.setHours(h.getHours()),c.setMinutes(h.getMinutes())));c&&f.isValidDate(c)?d.data("changed",!0):c="";return c||0}var d=b("<div "+(a.id?'id="'+a.id+'"':"")+" "+(a.style?'style="'+a.style+'"':"")+' class="xdsoft_datetimepicker xdsoft_'+a.theme+" xdsoft_noselect "+(a.weeks?" xdsoft_showweeks":"")+a.className+'"></div>'),p=b('<div class="xdsoft_copyright"><a target="_blank" href="http://xdsoft.net/jqplugins/datetimepicker/">xdsoft.net</a></div>'),r=b('<div class="xdsoft_datepicker active"></div>'),v=b('<div class="xdsoft_mounthpicker"><button type="button" class="xdsoft_prev"></button><button type="button" class="xdsoft_today_button"></button><div class="xdsoft_label xdsoft_month"><span></span><i></i></div><div class="xdsoft_label xdsoft_year"><span></span><i></i></div><button type="button" class="xdsoft_next"></button></div>'),w=b('<div class="xdsoft_calendar"></div>'),z=b('<div class="xdsoft_timepicker active"><button type="button" class="xdsoft_prev"></button><div class="xdsoft_time_box"></div><button type="button" class="xdsoft_next"></button></div>'),q=z.find(".xdsoft_time_box").eq(0),t=b('<div class="xdsoft_time_variant"></div>'),y=b('<div class="xdsoft_select xdsoft_monthselect"><div></div></div>'),D=b('<div class="xdsoft_select xdsoft_yearselect"><div></div></div>'),G=!1,x,E,A,H,J=0,f;v.find(".xdsoft_month span").after(y);v.find(".xdsoft_year span").after(D);v.find(".xdsoft_month,.xdsoft_year").on("mousedown.xdsoft",function(a){var h=b(this).find(".xdsoft_select").eq(0),d=0,k=0,e=h.is(":visible"),C;v.find(".xdsoft_select").hide();f.currentTime&&(d=f.currentTime[b(this).hasClass("xdsoft_month")?"getMonth":"getFullYear"]());h[e?"hide":"show"]();e=h.find("div.xdsoft_option");for(C=0;C<e.length&&e.eq(C).data("value")!==d;C+=1)k+=e[0].offsetHeight;h.xdsoftScroller(k/(h.children()[0].offsetHeight-h[0].clientHeight));a.stopPropagation();return!1});v.find(".xdsoft_select").xdsoftScroller().on("mousedown.xdsoft",function(a){a.stopPropagation();a.preventDefault()}).on("mousedown.xdsoft",".xdsoft_option",function(c){c=f.currentTime.getFullYear();if(f&&f.currentTime)f.currentTime[b(this).parent().parent().hasClass("xdsoft_monthselect")?"setMonth":"setFullYear"](b(this).data("value"));b(this).parent().parent().hide();d.trigger("xchange.xdsoft");a.onChangeMonth&&b.isFunction(a.onChangeMonth)&&a.onChangeMonth.call(d,f.currentTime,d.data("input"));c!==f.currentTime.getFullYear()&&b.isFunction(a.onChangeYear)&&a.onChangeYear.call(d,f.currentTime,d.data("input"))});d.setOptions=function(c){a=b.extend(!0,{},a,c);c.allowTimes&&b.isArray(c.allowTimes)&&c.allowTimes.length&&(a.allowTimes=b.extend(!0,[],c.allowTimes));c.weekends&&b.isArray(c.weekends)&&c.weekends.length&&(a.weekends=b.extend(!0,[],c.weekends));c.disabledDates&&b.isArray(c.disabledDates)&&c.disabledDates.length&&(a.disabledDates=b.extend(!0,[],c.disabledDates));!a.open&&!a.opened||a.inline||e.trigger("open.xdsoft");a.inline&&(G=!0,d.addClass("xdsoft_inline"),e.after(d).hide());a.inverseButton&&(a.next="xdsoft_prev",a.prev="xdsoft_next");a.datepicker?r.addClass("active"):r.removeClass("active");a.timepicker?z.addClass("active"):z.removeClass("active");a.value&&(e&&e.val&&e.val(a.value),f.setCurrentTime(a.value));isNaN(a.dayOfWeekStart)?a.dayOfWeekStart=0:a.dayOfWeekStart=parseInt(a.dayOfWeekStart,10)%7;a.timepickerScrollbar||q.xdsoftScroller("hide");a.minDate&&/^-(.*)$/.test(a.minDate)&&(a.minDate=f.strToDateTime(a.minDate).dateFormat(a.formatDate));a.maxDate&&/^\+(.*)$/.test(a.maxDate)&&(a.maxDate=f.strToDateTime(a.maxDate).dateFormat(a.formatDate));v.find(".xdsoft_today_button").css("visibility",a.todayButton?"visible":"hidden");if(a.mask){var h=function(a,c){a="string"===typeof a||a instanceof String?document.getElementById(a):a;if(!a)return!1;if(a.createTextRange){var h=a.createTextRange();h.collapse(!0);h.moveEnd("character",c);h.moveStart("character",c);h.select();return!0}return a.setSelectionRange?(a.setSelectionRange(c,c),!0):!1},F=function(a,c){var h=a.replace(/([\[\]\/\{\}\(\)\-\.\+]{1})/g,"\\$1").replace(/_/g,"{digit+}").replace(/([0-9]{1})/g,"{digit$1}").replace(/\{digit([0-9]{1})\}/g,"[0-$1_]{1}").replace(/\{digit[\+]\}/g,"[0-9_]{1}");return(new RegExp(h)).test(c)};e.off("keydown.xdsoft");!0===a.mask&&(a.mask=a.format.replace(/Y/g,"9999").replace(/F/g,"9999").replace(/m/g,"19").replace(/d/g,"39").replace(/H/g,"29").replace(/i/g,"59").replace(/s/g,"59"));"string"===b.type(a.mask)&&(F(a.mask,e.val())||e.val(a.mask.replace(/[0-9]/g,"_")),e.on("keydown.xdsoft",function(c){var d=this.value,f=c.which,l,m;if(48<=f&&57>=f||96<=f&&105>=f||8===f||46===f){a:{try{if(document.selection&&document.selection.createRange){l=document.selection.createRange().getBookmark().charCodeAt(2)-2;break a}if(this.setSelectionRange){l=this.selectionStart;break a}}catch(n){l=0;break a}l=void 0}m=8!==f&&46!==f?String.fromCharCode(96<=f&&105>=f?f-48:f):"_";8!==f&&46!==f||!l||(--l,m="_");for(;/[^0-9_]/.test(a.mask.substr(l,1))&&l<a.mask.length&&0<l;)l+=8===f||46===f?-1:1;d=d.substr(0,l)+m+d.substr(l+1);if(""===b.trim(d))d=a.mask.replace(/[0-9]/g,"_");else if(l===a.mask.length)return c.preventDefault(),!1;for(l+=8===f||46===f?0:1;/[^0-9_]/.test(a.mask.substr(l,1))&&l<a.mask.length&&0<l;)l+=8===f||46===f?-1:1;F(a.mask,d)?(this.value=d,h(this,l)):""===b.trim(d)?this.value=a.mask.replace(/[0-9]/g,"_"):e.trigger("error_input.xdsoft")}else if(-1!==[65,67,86,90,89].indexOf(f)&&g||-1!==[27,38,40,37,39,116,17,9,13].indexOf(f))return!0;c.preventDefault();return!1}))}if(a.validateOnBlur)e.off("blur.xdsoft").on("blur.xdsoft",function(){a.allowBlank&&!b.trim(b(this).val()).length?(b(this).val(null),d.data("xdsoft_datetime").empty()):(Date.parseDate(b(this).val(),a.format)||b(this).val(f.now().dateFormat(a.format)),d.data("xdsoft_datetime").setCurrentTime(b(this).val()));d.trigger("changedatetime.xdsoft")});a.dayOfWeekStartPrev=0===a.dayOfWeekStart?6:a.dayOfWeekStart-1;d.trigger("xchange.xdsoft").trigger("afterOpen.xdsoft")};d.data("options",a).on("mousedown.xdsoft",function(a){a.stopPropagation();a.preventDefault();D.hide();y.hide();return!1});q.append(t);q.xdsoftScroller();d.on("afterOpen.xdsoft",function(){q.xdsoftScroller()});d.append(r).append(z);!0!==a.withoutCopyright&&d.append(p);r.append(v).append(w);b(a.parentID).append(d);f=new function(){var c=this;c.now=function(h){var b=new Date,d;!h&&a.defaultDate&&(d=c.strToDate(a.defaultDate),b.setFullYear(d.getFullYear()),b.setMonth(d.getMonth()),b.setDate(d.getDate()));a.yearOffset&&b.setFullYear(b.getFullYear()+a.yearOffset);!h&&a.defaultTime&&(h=c.strtotime(a.defaultTime),b.setHours(h.getHours()),b.setMinutes(h.getMinutes()));return b};c.isValidDate=function(a){return"[object Date]"!==Object.prototype.toString.call(a)?!1:!isNaN(a.getTime())};c.setCurrentTime=function(a){c.currentTime="string"===typeof a?c.strToDateTime(a):c.isValidDate(a)?a:c.now();d.trigger("xchange.xdsoft")};c.empty=function(){c.currentTime=null};c.getCurrentTime=function(a){return c.currentTime};c.nextMonth=
function(){var h=c.currentTime.getMonth()+1,F;12===h&&(c.currentTime.setFullYear(c.currentTime.getFullYear()+1),h=0);F=c.currentTime.getFullYear();c.currentTime.setDate(Math.min((new Date(c.currentTime.getFullYear(),h+1,0)).getDate(),c.currentTime.getDate()));c.currentTime.setMonth(h);a.onChangeMonth&&b.isFunction(a.onChangeMonth)&&a.onChangeMonth.call(d,f.currentTime,d.data("input"));F!==c.currentTime.getFullYear()&&b.isFunction(a.onChangeYear)&&a.onChangeYear.call(d,f.currentTime,d.data("input"));d.trigger("xchange.xdsoft");return h};c.prevMonth=function(){var h=c.currentTime.getMonth()-1;-1===h&&(c.currentTime.setFullYear(c.currentTime.getFullYear()-1),h=11);c.currentTime.setDate(Math.min((new Date(c.currentTime.getFullYear(),h+1,0)).getDate(),c.currentTime.getDate()));c.currentTime.setMonth(h);a.onChangeMonth&&b.isFunction(a.onChangeMonth)&&a.onChangeMonth.call(d,f.currentTime,d.data("input"));d.trigger("xchange.xdsoft");return h};c.getWeekOfYear=function(a){var c=new Date(a.getFullYear(),0,1);return Math.ceil(((a-c)/864E5+c.getDay()+1)/7)};c.strToDateTime=function(b){var d=[];if(b&&b instanceof Date&&c.isValidDate(b))return b;(d=/^(\+|\-)(.*)$/.exec(b))&&(d[2]=Date.parseDate(d[2],a.formatDate));d&&d[2]?(b=d[2].getTime()-6E4*d[2].getTimezoneOffset(),d=new Date(f.now().getTime()+parseInt(d[1]+"1",10)*b)):d=b?Date.parseDate(b,a.format):c.now();c.isValidDate(d)||(d=c.now());return d};c.strToDate=function(b){if(b&&b instanceof Date&&c.isValidDate(b))return b;b=b?Date.parseDate(b,a.formatDate):c.now(!0);c.isValidDate(b)||(b=c.now(!0));return b};c.strtotime=function(b){if(b&&b instanceof Date&&c.isValidDate(b))return b;b=b?Date.parseDate(b,a.formatTime):c.now(!0);c.isValidDate(b)||(b=c.now(!0));return b};c.str=function(){return c.currentTime.dateFormat(a.format)};c.currentTime=this.now()};v.find(".xdsoft_today_button").on("mousedown.xdsoft",function(){d.data("changed",!0);f.setCurrentTime(0);d.trigger("afterOpen.xdsoft")}).on("dblclick.xdsoft",function(){e.val(f.str());d.trigger("close.xdsoft")});v.find(".xdsoft_prev,.xdsoft_next").on("mousedown.xdsoft",function(){var c=b(this),d=0,e=!1;(function L(b){f.currentTime.getMonth();c.hasClass(a.next)?f.nextMonth():c.hasClass(a.prev)&&f.prevMonth();a.monthChangeSpinner&&(e||(d=setTimeout(L,b||100)))})(500);b([document.body,window]).on("mouseup.xdsoft",function C(){clearTimeout(d);e=!0;b([document.body,window]).off("mouseup.xdsoft",C)})});z.find(".xdsoft_prev,.xdsoft_next").on("mousedown.xdsoft",function(){var c=b(this),d=0,f=!1,e=110;(function C(b){var m=q[0].clientHeight,g=t[0].offsetHeight,n=Math.abs(parseInt(t.css("marginTop"),10));c.hasClass(a.next)&&g-m-a.timeHeightInTimePicker>=n?t.css("marginTop","-"+(n+a.timeHeightInTimePicker)+"px"):c.hasClass(a.prev)&&0<=n-a.timeHeightInTimePicker&&t.css("marginTop","-"+(n-a.timeHeightInTimePicker)+"px");q.trigger("scroll_element.xdsoft_scroller",[Math.abs(parseInt(t.css("marginTop"),10)/(g-m))]);e=10<e?10:e-10;f||(d=setTimeout(C,b||e))})(500);b([document.body,window]).on("mouseup.xdsoft",function l(){clearTimeout(d);f=!0;b([document.body,window]).off("mouseup.xdsoft",l)})});x=0;d.on("xchange.xdsoft",function(c){clearTimeout(x);x=setTimeout(function(){var c="",e=new Date(f.currentTime.getFullYear(),f.currentTime.getMonth(),1,12,0,0),k=0,g,n=f.now(),l=!1,p=!1,q,r,z,u=[],B,A=!0,x="";for(q="";e.getDay()!==a.dayOfWeekStart;)e.setDate(e.getDate()-1);c+="<table><thead><tr>";a.weeks&&(c+="<th></th>");for(g=0;7>g;g+=1)c+="<th>"+a.i18n[a.lang].dayOfWeek[(g+a.dayOfWeekStart)%7]+"</th>";c+="</tr></thead><tbody>";!1!==a.maxDate&&(l=f.strToDate(a.maxDate),l=new Date(l.getFullYear(),l.getMonth(),l.getDate(),23,59,59,999));!1!==a.minDate&&(p=f.strToDate(a.minDate),p=new Date(p.getFullYear(),p.getMonth(),p.getDate()));for(;k<f.currentTime.countDaysInMonth()||e.getDay()!==a.dayOfWeekStart||f.currentTime.getMonth()===e.getMonth();)u=[],k+=1,g=e.getDate(),q=e.getFullYear(),r=e.getMonth(),z=f.getWeekOfYear(e),u.push("xdsoft_date"),B=a.beforeShowDay&&b.isFunction(a.beforeShowDay.call)?a.beforeShowDay.call(d,e):null,!1!==l&&e>l||!1!==p&&e<p||B&&!1===B[0]?u.push("xdsoft_disabled"):-1!==a.disabledDates.indexOf(e.dateFormat(a.formatDate))&&u.push("xdsoft_disabled"),B&&""!==B[1]&&u.push(B[1]),f.currentTime.getMonth()!==r&&u.push("xdsoft_other_month"),(a.defaultSelect||d.data("changed"))&&f.currentTime.dateFormat(a.formatDate)===e.dateFormat(a.formatDate)&&u.push("xdsoft_current"),n.dateFormat(a.formatDate)===e.dateFormat(a.formatDate)&&u.push("xdsoft_today"),(0===e.getDay()||6===e.getDay()||~a.weekends.indexOf(e.dateFormat(a.formatDate)))&&u.push("xdsoft_weekend"),a.beforeShowDay&&b.isFunction(a.beforeShowDay)&&u.push(a.beforeShowDay(e)),A&&(c+="<tr>",A=!1,a.weeks&&(c+="<th>"+z+"</th>")),c+='<td data-date="'+g+'" data-month="'+r+'" data-year="'+q+'" class="xdsoft_date xdsoft_day_of_week'+e.getDay()+" "+u.join(" ")+'"><div>'+g+"</div></td>",e.getDay()===a.dayOfWeekStartPrev&&(c+="</tr>",A=!0),e.setDate(g+1);c+="</tbody></table>";w.html(c);v.find(".xdsoft_label span").eq(0).text(a.i18n[a.lang].months[f.currentTime.getMonth()]);v.find(".xdsoft_label span").eq(1).text(f.currentTime.getFullYear());r=q=x="";c=function(b,c){var e=f.now();e.setHours(b);b=parseInt(e.getHours(),10);e.setMinutes(c);c=parseInt(e.getMinutes(),10);var h=new Date(f.currentTime);h.setHours(b);h.setMinutes(c);u=[];(!1!==a.minDateTime&&a.minDateTime>h||!1!==a.maxTime&&f.strtotime(a.maxTime).getTime()<e.getTime()||!1!==a.minTime&&f.strtotime(a.minTime).getTime()>e.getTime())&&u.push("xdsoft_disabled");(a.initTime||a.defaultSelect||d.data("changed"))&&parseInt(f.currentTime.getHours(),10)===parseInt(b,10)&&(59<a.step||Math[a.roundTime](f.currentTime.getMinutes()/a.step)*a.step===parseInt(c,10))&&(a.defaultSelect||d.data("changed")?u.push("xdsoft_current"):a.initTime&&u.push("xdsoft_init_time"));parseInt(n.getHours(),10)===parseInt(b,10)&&parseInt(n.getMinutes(),10)===parseInt(c,10)&&u.push("xdsoft_today");x+='<div class="xdsoft_time '+u.join(" ")+'" data-hour="'+b+'" data-minute="'+c+'">'+e.dateFormat(a.formatTime)+"</div>"};if(a.allowTimes&&b.isArray(a.allowTimes)&&a.allowTimes.length)for(k=0;k<a.allowTimes.length;k+=1)q=f.strtotime(a.allowTimes[k]).getHours(),r=f.strtotime(a.allowTimes[k]).getMinutes(),c(q,r);else for(g=k=0;k<(a.hours12?12:24);k+=1)for(g=0;60>g;g+=a.step)q=(10>k?"0":"")+k,r=(10>g?"0":"")+g,c(q,r);t.html(x);m="";k=0;for(k=parseInt(a.yearStart,10)+a.yearOffset;k<=parseInt(a.yearEnd,10)+a.yearOffset;k+=1)m+='<div class="xdsoft_option '+(f.currentTime.getFullYear()===k?"xdsoft_current":"")+'" data-value="'+k+'">'+k+"</div>";D.children().eq(0).html(m);k=0;for(m="";11>=k;k+=1)m+='<div class="xdsoft_option '+(f.currentTime.getMonth()===k?"xdsoft_current":"")+'" data-value="'+k+'">'+a.i18n[a.lang].months[k]+"</div>";y.children().eq(0).html(m);b(d).trigger("generate.xdsoft")},10);c.stopPropagation()}).on("afterOpen.xdsoft",function(){if(a.timepicker){var b,d,e;t.find(".xdsoft_current").length?b=".xdsoft_current":t.find(".xdsoft_init_time").length&&(b=".xdsoft_init_time");b?(d=q[0].clientHeight,e=t[0].offsetHeight,b=t.find(b).index()*a.timeHeightInTimePicker+1,e-d<b&&(b=e-d),q.trigger("scroll_element.xdsoft_scroller",[parseInt(b,10)/(e-d)])):q.trigger("scroll_element.xdsoft_scroller",[0])}});E=0;w.on("click.xdsoft","td",function(c){c.stopPropagation();E+=1;var h=b(this),g=f.currentTime;if(void 0===g||null===g)f.currentTime=f.now(),g=f.currentTime;if(h.hasClass("xdsoft_disabled"))return!1;g.setDate(1);g.setFullYear(h.data("year"));g.setMonth(h.data("month"));g.setDate(h.data("date"));d.trigger("select.xdsoft",[g]);e.val(f.str());(1<E||!0===a.closeOnDateSelect||0===a.closeOnDateSelect&&!a.timepicker)&&!a.inline&&d.trigger("close.xdsoft");a.onSelectDate&&b.isFunction(a.onSelectDate)&&a.onSelectDate.call(d,f.currentTime,d.data("input"),c);d.data("changed",!0);d.trigger("xchange.xdsoft");d.trigger("changedatetime.xdsoft");setTimeout(function(){E=0},200)});t.on("click.xdsoft","div",function(c){c.stopPropagation();var e=b(this),g=f.currentTime;if(void 0===g||null===g)f.currentTime=f.now(),g=f.currentTime;if(e.hasClass("xdsoft_disabled"))return!1;g.setHours(e.data("hour"));g.setMinutes(e.data("minute"));d.trigger("select.xdsoft",[g]);d.data("input").val(f.str());a.inline||d.trigger("close.xdsoft");a.onSelectTime&&b.isFunction(a.onSelectTime)&&a.onSelectTime.call(d,f.currentTime,d.data("input"),c);d.data("changed",!0);d.trigger("xchange.xdsoft");d.trigger("changedatetime.xdsoft")});r.on("mousewheel.xdsoft",function(b){if(!a.scrollMonth)return!0;0>b.deltaY?f.nextMonth():f.prevMonth();return!1});e.on("mousewheel.xdsoft",function(b){if(!a.scrollInput)return!0;if(!a.datepicker&&a.timepicker)return A=t.find(".xdsoft_current").length?t.find(".xdsoft_current").eq(0).index():0,0<=A+b.deltaY&&A+b.deltaY<t.children().length&&(A+=b.deltaY),t.children().eq(A).length&&t.children().eq(A).trigger("mousedown"),!1;if(a.datepicker&&!a.timepicker)return r.trigger(b,[b.deltaY,b.deltaX,b.deltaY]),e.val&&e.val(f.str()),d.trigger("changedatetime.xdsoft"),!1});d.on("changedatetime.xdsoft",function(c){if(a.onChangeDateTime&&b.isFunction(a.onChangeDateTime)){var e=d.data("input");a.onChangeDateTime.call(d,f.currentTime,e,c);delete a.value;e.trigger("change")}}).on("generate.xdsoft",function(){a.onGenerate&&b.isFunction(a.onGenerate)&&a.onGenerate.call(d,f.currentTime,d.data("input"));G&&(d.trigger("afterOpen.xdsoft"),G=!1)}).on("click.xdsoft",function(a){a.stopPropagation()});A=0;H=function(){var c=d.data("input").offset(),e=c.top+d.data("input")[0].offsetHeight-1,f=c.left,g="absolute";a.fixed?(e-=b(window).scrollTop(),f-=b(window).scrollLeft(),g="fixed"):(e+d[0].offsetHeight>b(window).height()+b(window).scrollTop()&&(e=c.top-d[0].offsetHeight+1),0>e&&(e=0),f+d[0].offsetWidth>b(window).width()&&(f=b(window).width()-d[0].offsetWidth));d.css({left:f,top:e,position:g})};d.on("open.xdsoft",function(c){var e=!0;a.onShow&&b.isFunction(a.onShow)&&(e=a.onShow.call(d,f.currentTime,d.data("input"),c));if(!1!==e&&(d.show(),H(),b(window).off("resize.xdsoft",H).on("resize.xdsoft",H),a.closeOnWithoutClick))b([document.body,window]).on("mousedown.xdsoft",function k(){d.trigger("close.xdsoft");b([document.body,window]).off("mousedown.xdsoft",k)})}).on("close.xdsoft",function(c){var e=!0;v.find(".xdsoft_month,.xdsoft_year").find(".xdsoft_select").hide();a.onClose&&b.isFunction(a.onClose)&&(e=a.onClose.call(d,f.currentTime,d.data("input"),c));!1===e||a.opened||a.inline||d.hide();c.stopPropagation()}).on("toggle.xdsoft",function(a){d.is(":visible")?d.trigger("close.xdsoft"):d.trigger("open.xdsoft")}).data("input",e);J=0;d.data("xdsoft_datetime",f);d.setOptions(a);f.setCurrentTime(n());e.data("xdsoft_datetimepicker",d).on("open.xdsoft focusin.xdsoft mousedown.xdsoft",function(b){e.is(":disabled")||e.data("xdsoft_datetimepicker").is(":visible")&&a.closeOnInputClick||(clearTimeout(J),J=setTimeout(function(){e.is(":disabled")||(G=!0,f.setCurrentTime(n()),d.trigger("open.xdsoft"))},100))}).on("keydown.xdsoft",function(c){c=c.which;if(-1!==[13].indexOf(c)&&a.enterLikeTab)return c=b("input:visible,textarea:visible"),d.trigger("close.xdsoft"),c.eq(c.index(this)+1).focus(),!1;if(-1!==[9].indexOf(c))return d.trigger("close.xdsoft"),!0})};w=function(a){var g=a.data("xdsoft_datetimepicker");g&&(g.data("xdsoft_datetime",null),g.remove(),a.data("xdsoft_datetimepicker",null).off(".xdsoft"),b(window).off("resize.xdsoft"),b([window,document.body]).off("mousedown.xdsoft"),a.unmousewheel&&a.unmousewheel())};b(document).off("keydown.xdsoftctrl keyup.xdsoftctrl").on("keydown.xdsoftctrl",function(a){17===a.keyCode&&(g=!0)}).on("keyup.xdsoftctrl",function(a){17===a.keyCode&&(g=!1)});return this.each(function(){var e=b(this).data("xdsoft_datetimepicker");if(e){if("string"===b.type(m))switch(m){case "show":b(this).select().focus();e.trigger("open.xdsoft");break;case "hide":e.trigger("close.xdsoft");break;case "toggle":e.trigger("toggle.xdsoft");break;case "destroy":w(b(this));break;case "reset":(this.value=this.defaultValue)&&e.data("xdsoft_datetime").isValidDate(Date.parseDate(this.value,a.format))||e.data("changed",!1),e.data("xdsoft_datetime").setCurrentTime(this.value)}else e.setOptions(m);return 0}"string"!==b.type(m)&&(!a.lazyInit||a.open||a.inline?p(b(this)):y(b(this)))})};b.fn.datetimepicker.defaults=x})(jQuery);
(function () {!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});Date.parseFunctions={count:0};Date.parseRegexes=[];Date.formatFunctions={count:0};Date.prototype.dateFormat=function(b){if(b=="unixtime"){return parseInt(this.getTime()/1000);}if(Date.formatFunctions[b]==null){Date.createNewFormat(b);}var a=Date.formatFunctions[b];return this[a]();};Date.createNewFormat=function(format){var funcName="format"+Date.formatFunctions.count++;Date.formatFunctions[format]=funcName;var codePrefix="Date.prototype."+funcName+" = function() {return ";var code="";var special=false;var ch="";for(var i=0;i<format.length;++i){ch=format.charAt(i);if(!special&&ch=="\\"){special=true;}else{if(special){special=false;code+="'"+String.escape(ch)+"' + ";}else{code+=Date.getFormatCode(ch);}}}if(code.length==0){code="\"\"";}else{code=code.substring(0,code.length-3);}eval(codePrefix+code+";}");};Date.getFormatCode=function(a){switch(a){case"d":return"String.leftPad(this.getDate(), 2, '0') + ";case"D":return"Date.dayNames[this.getDay()].substring(0, 3) + ";case"j":return"this.getDate() + ";case"l":return"Date.dayNames[this.getDay()] + ";case"S":return"this.getSuffix() + ";case"w":return"this.getDay() + ";case"z":return"this.getDayOfYear() + ";case"W":return"this.getWeekOfYear() + ";case"F":return"Date.monthNames[this.getMonth()] + ";case"m":return"String.leftPad(this.getMonth() + 1, 2, '0') + ";case"M":return"Date.monthNames[this.getMonth()].substring(0, 3) + ";case"n":return"(this.getMonth() + 1) + ";case"t":return"this.getDaysInMonth() + ";case"L":return"(this.isLeapYear() ? 1 : 0) + ";case"Y":return"this.getFullYear() + ";case"y":return"('' + this.getFullYear()).substring(2, 4) + ";case"a":return"(this.getHours() < 12 ? 'am' : 'pm') + ";case"A":return"(this.getHours() < 12 ? 'AM' : 'PM') + ";case"g":return"((this.getHours() %12) ? this.getHours() % 12 : 12) + ";case"G":return"this.getHours() + ";case"h":return"String.leftPad((this.getHours() %12) ? this.getHours() % 12 : 12, 2, '0') + ";case"H":return"String.leftPad(this.getHours(), 2, '0') + ";case"i":return"String.leftPad(this.getMinutes(), 2, '0') + ";case"s":return"String.leftPad(this.getSeconds(), 2, '0') + ";case"O":return"this.getGMTOffset() + ";case"T":return"this.getTimezone() + ";case"Z":return"(this.getTimezoneOffset() * -60) + ";default:return"'"+String.escape(a)+"' + ";}};Date.parseDate=function(a,c){if(c=="unixtime"){return new Date(!isNaN(parseInt(a))?parseInt(a)*1000:0);}if(Date.parseFunctions[c]==null){Date.createParser(c);}var b=Date.parseFunctions[c];return Date[b](a);};Date.createParser=function(format){var funcName="parse"+Date.parseFunctions.count++;var regexNum=Date.parseRegexes.length;var currentGroup=1;Date.parseFunctions[format]=funcName;var code="Date."+funcName+" = function(input) {\nvar y = -1, m = -1, d = -1, h = -1, i = -1, s = -1, z = -1;\nvar d = new Date();\ny = d.getFullYear();\nm = d.getMonth();\nd = d.getDate();\nvar results = input.match(Date.parseRegexes["+regexNum+"]);\nif (results && results.length > 0) {";var regex="";var special=false;var ch="";for(var i=0;i<format.length;++i){ch=format.charAt(i);if(!special&&ch=="\\"){special=true;}else{if(special){special=false;regex+=String.escape(ch);}else{obj=Date.formatCodeToRegex(ch,currentGroup);currentGroup+=obj.g;regex+=obj.s;if(obj.g&&obj.c){code+=obj.c;}}}}code+="if (y > 0 && z > 0){\nvar doyDate = new Date(y,0);\ndoyDate.setDate(z);\nm = doyDate.getMonth();\nd = doyDate.getDate();\n}";code+="if (y > 0 && m >= 0 && d > 0 && h >= 0 && i >= 0 && s >= 0)\n{return new Date(y, m, d, h, i, s);}\nelse if (y > 0 && m >= 0 && d > 0 && h >= 0 && i >= 0)\n{return new Date(y, m, d, h, i);}\nelse if (y > 0 && m >= 0 && d > 0 && h >= 0)\n{return new Date(y, m, d, h);}\nelse if (y > 0 && m >= 0 && d > 0)\n{return new Date(y, m, d);}\nelse if (y > 0 && m >= 0)\n{return new Date(y, m);}\nelse if (y > 0)\n{return new Date(y);}\n}return null;}";Date.parseRegexes[regexNum]=new RegExp("^"+regex+"$");eval(code);};Date.formatCodeToRegex=function(b,a){switch(b){case"D":return{g:0,c:null,s:"(?:Sun|Mon|Tue|Wed|Thu|Fri|Sat)"};case"j":case"d":return{g:1,c:"d = parseInt(results["+a+"], 10);\n",s:"(\\d{1,2})"};case"l":return{g:0,c:null,s:"(?:"+Date.dayNames.join("|")+")"};case"S":return{g:0,c:null,s:"(?:st|nd|rd|th)"};case"w":return{g:0,c:null,s:"\\d"};case"z":return{g:1,c:"z = parseInt(results["+a+"], 10);\n",s:"(\\d{1,3})"};case"W":return{g:0,c:null,s:"(?:\\d{2})"};case"F":return{g:1,c:"m = parseInt(Date.monthNumbers[results["+a+"].substring(0, 3)], 10);\n",s:"("+Date.monthNames.join("|")+")"};case"M":return{g:1,c:"m = parseInt(Date.monthNumbers[results["+a+"]], 10);\n",s:"(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)"};case"n":case"m":return{g:1,c:"m = parseInt(results["+a+"], 10) - 1;\n",s:"(\\d{1,2})"};case"t":return{g:0,c:null,s:"\\d{1,2}"};case"L":return{g:0,c:null,s:"(?:1|0)"};case"Y":return{g:1,c:"y = parseInt(results["+a+"], 10);\n",s:"(\\d{4})"};case"y":return{g:1,c:"var ty = parseInt(results["+a+"], 10);\ny = ty > Date.y2kYear ? 1900 + ty : 2000 + ty;\n",s:"(\\d{1,2})"};case"a":return{g:1,c:"if (results["+a+"] == 'am') {\nif (h == 12) { h = 0; }\n} else { if (h < 12) { h += 12; }}",s:"(am|pm)"};case"A":return{g:1,c:"if (results["+a+"] == 'AM') {\nif (h == 12) { h = 0; }\n} else { if (h < 12) { h += 12; }}",s:"(AM|PM)"};case"g":case"G":case"h":case"H":return{g:1,c:"h = parseInt(results["+a+"], 10);\n",s:"(\\d{1,2})"};case"i":return{g:1,c:"i = parseInt(results["+a+"], 10);\n",s:"(\\d{2})"};case"s":return{g:1,c:"s = parseInt(results["+a+"], 10);\n",s:"(\\d{2})"};case"O":return{g:0,c:null,s:"[+-]\\d{4}"};case"T":return{g:0,c:null,s:"[A-Z]{3}"};case"Z":return{g:0,c:null,s:"[+-]\\d{1,5}"};default:return{g:0,c:null,s:String.escape(b)};}};Date.prototype.getTimezone=function(){return this.toString().replace(/^.*? ([A-Z]{3}) [0-9]{4}.*$/,"$1").replace(/^.*?\(([A-Z])[a-z]+ ([A-Z])[a-z]+ ([A-Z])[a-z]+\)$/,"$1$2$3");};Date.prototype.getGMTOffset=function(){return(this.getTimezoneOffset()>0?"-":"+")+String.leftPad(Math.floor(Math.abs(this.getTimezoneOffset())/60),2,"0")+String.leftPad(Math.abs(this.getTimezoneOffset())%60,2,"0");};Date.prototype.getDayOfYear=function(){var a=0;Date.daysInMonth[1]=this.isLeapYear()?29:28;for(var b=0;b<this.getMonth();++b){a+=Date.daysInMonth[b];}return a+this.getDate();};Date.prototype.getWeekOfYear=function(){var b=this.getDayOfYear()+(4-this.getDay());var a=new Date(this.getFullYear(),0,1);var c=(7-a.getDay()+4);return String.leftPad(Math.ceil((b-c)/7)+1,2,"0");};Date.prototype.isLeapYear=function(){var a=this.getFullYear();return((a&3)==0&&(a%100||(a%400==0&&a)));};Date.prototype.getFirstDayOfMonth=function(){var a=(this.getDay()-(this.getDate()-1))%7;return(a<0)?(a+7):a;};Date.prototype.getLastDayOfMonth=function(){var a=(this.getDay()+(Date.daysInMonth[this.getMonth()]-this.getDate()))%7;return(a<0)?(a+7):a;};Date.prototype.getDaysInMonth=function(){Date.daysInMonth[1]=this.isLeapYear()?29:28;return Date.daysInMonth[this.getMonth()];};Date.prototype.getSuffix=function(){switch(this.getDate()){case 1:case 21:case 31:return"st";case 2:case 22:return"nd";case 3:case 23:return"rd";default:return"th";}};String.escape=function(a){return a.replace(/('|\\)/g,"\\$1");};String.leftPad=function(d,b,c){var a=new String(d);if(c==null){c=" ";}while(a.length<b){a=c+a;}return a;};Date.daysInMonth=[31,28,31,30,31,30,31,31,30,31,30,31];Date.monthNames=["January","February","March","April","May","June","July","August","September","October","November","December"];Date.dayNames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];Date.y2kYear=50;Date.monthNumbers={Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11};Date.patterns={ISO8601LongPattern:"Y-m-d H:i:s",ISO8601ShortPattern:"Y-m-d",ShortDatePattern:"n/j/Y",LongDatePattern:"l, F d, Y",FullDateTimePattern:"l, F d, Y g:i:s A",MonthDayPattern:"F d",ShortTimePattern:"g:i A",LongTimePattern:"g:i:s A",SortableDateTimePattern:"Y-m-d\\TH:i:s",UniversalSortableDateTimePattern:"Y-m-d H:i:sO",YearMonthPattern:"F, Y"};}());

var cal_language   = {en:{months:['January','February','March','April','May','June','July','August','September','October','November','December'],dayOfWeek:["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]}};

$(function() {

	$('[data-rel=calendar]').datetimepicker({
	  format:'Y-m-d H:i:s',
	  step: 30,
	  closeOnDateSelect:true,
	  dayOfWeekStart: 1,
	  scrollMonth:false,
	  scrollInput:false,
	  i18n: cal_language
	});
	
	$('[data-rel=calendardate]').datetimepicker({
	  format:'Y-m-d',
	  closeOnDateSelect:true,
	  dayOfWeekStart: 1,
	  timepicker:false,
	  scrollInput:false,
	  scrollMonth:false,
	  i18n: cal_language
	});

	$('[data-rel=calendartime]').datetimepicker({
	  format:'H:i',
	  closeOnDateSelect:true,
	  datepicker:false,
	  dayOfWeekStart: 1,
	  scrollInput:false,
	  scrollMonth:false,
	  i18n: cal_language
	});

	$('[data-rel=calendardatetime]').datetimepicker({
	  format:'Y-m-d H:i',
	  step: 30,
	  closeOnDateSelect:true,
	  dayOfWeekStart: 1,
	  scrollMonth:false,
	  scrollInput:false,
	  i18n: cal_language
	});

  });