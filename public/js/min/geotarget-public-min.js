!function($){"use strict";function t(t,e,n){if(n){var o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3);var a="; expires="+o.toGMTString()}else var a="";document.cookie=t+"="+e+a+"; path=/"}function e(t){for(var e=t+"=",n=document.cookie.split(";"),o=0;o<n.length;o++){for(var a=n[o];" "==a.charAt(0);)a=a.substring(1,a.length);if(0==a.indexOf(e))return a.substring(e.length,a.length)}return null}$(document).ready(function(){$("#geot_dropdown").chosen({no_results_text:"Oops, nothing found!",search_contains:!0}).change(function(e,n){var o=n.selected;t("geot_country",o,999),window.location.reload()})});var n=function(t,e,n,o){var a={url:geot.ajax_url,data:t,cache:!1,type:"POST",dataType:"json",timeout:3e4},o=o||!1,e=e||!1,n=n||!1;e&&(a.success=e),n&&(a.error=n),o&&(a.dataType=o),$.ajax(a)},o={action:"geot_ajax",geots:{},vars:geot},a=null,i=function(t){return a||(a=(new Date).getTime()),t+a++};$(".geot-ajax").each(function(){var t=i("geot");$(this).attr("id",t),o.geots[t]={action:$(this).data("action")||"",filter:$(this).data("filter")||"",region:$(this).data("region")||"",ex_filter:$(this).data("ex_filter")||"",ex_region:$(this).data("ex_region")||"","default":$(this).data("default")||""}});var r=function(t){if(t.success){var e=t.data,n,o=t.posts.remove,a=t.posts.hide;if(console.log(t),e.length)for(n=0;n<e.length;++n)if(e[n].action.indexOf("filter")>-1){if(1==e[n].value){var i=$("#"+e[n].id).html();$("#"+e[n].id).replaceWith(i)}$("#"+e[n].id).remove()}else $("#"+e[n].id).replaceWith(e[n].value);if(o.length)for(n=0;n<o.length;++n){var r=o[n];$("#post-"+r+", .post-"+r).remove()}if(a.length)for(n=0;n<a.length;++n){var r=a[n].id;$("#post-"+r+" .entry-content, .post-"+r+" .entry-content").html("<p>"+a[n].msg+"</p>")}}};geot&&geot.ajax&&n(o,r)}(jQuery);