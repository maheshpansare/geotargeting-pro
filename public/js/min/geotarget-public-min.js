!function($){"use strict";function e(e,t,o){if(o){var n=new Date;n.setTime(n.getTime()+24*o*60*60*1e3);var i="; expires="+n.toGMTString()}else var i="";document.cookie=e+"="+t+i+"; path=/"}function t(e){for(var t=e+"=",o=document.cookie.split(";"),n=0;n<o.length;n++){for(var i=o[n];" "==i.charAt(0);)i=i.substring(1,i.length);if(0==i.indexOf(t))return i.substring(t.length,i.length)}return null}$(document).ready(function(){geot&&(/iP(od|hone)/i.test(window.navigator.userAgent)||/IEMobile/i.test(window.navigator.userAgent)||/Windows Phone/i.test(window.navigator.userAgent)||/BlackBerry/i.test(window.navigator.userAgent)||/BB10/i.test(window.navigator.userAgent)||/Android.*Mobile/i.test(window.navigator.userAgent))&&(geot.dropdown_search=!0),$("#geot_dropdown").chosen({no_results_text:"Oops, nothing found!",search_contains:!0,disable_search:geot.dropdown_search||!1}).change(function(t,o){var n=o.selected;e("geot_country",n,999),window.location.reload()})});var o=function(e,t,o,n){var i={url:geot.ajax_url,data:e,cache:!1,type:"POST",dataType:"json",timeout:3e4},n=n||!1,t=t||!1,o=o||!1;t&&(i.success=t),o&&(i.error=o),n&&(i.dataType=n),$.ajax(i)},n={action:"geot_ajax",geots:{},vars:geot},i=null,a=function(e){return i||(i=(new Date).getTime()),e+i++};$(".geot-ajax").each(function(){var e=a("geot");$(this).attr("id",e),n.geots[e]={action:$(this).data("action")||"",filter:$(this).data("filter")||"",region:$(this).data("region")||"",ex_filter:$(this).data("ex_filter")||"",ex_region:$(this).data("ex_region")||"","default":$(this).data("default")||""}});var r=function(e){if(e.success){var t=e.data,o,n=e.posts.remove,i=e.posts.hide,a=e.debug;if(console.log(e),t.length)for(o=0;o<t.length;++o)if(t[o].action.indexOf("filter")>-1){if(1==t[o].value){var r=$("#"+t[o].id).html();$("#"+t[o].id).replaceWith(r)}$("#"+t[o].id).remove()}else $("#"+t[o].id).replaceWith(t[o].value);if(n.length)for(o=0;o<n.length;++o){var s=n[o];$("#post-"+s+", .post-"+s).remove()}if(i.length)for(o=0;o<i.length;++o){var s=i[o].id;$("#post-"+s+" .entry-content, .post-"+s+" .entry-content").html("<p>"+i[o].msg+"</p>")}a.length&&$("#geot-debug-info").html(a)}};geot&&geot.ajax&&o(n,r)}(jQuery);