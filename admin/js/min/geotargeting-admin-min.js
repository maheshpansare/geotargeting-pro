!function($){"use strict";$("document").ready(function(){function e(e){var t=e.data("counter"),n=$("#cities"+t),o=n.next(".chosen-container");$.post(geot.ajax_url,{action:"geot_cities_by_country",country:e.val()},function(e){n.html(e),n.trigger("chosen:updated")})}$(".geot-chosen-select").chosen({width:"90%",no_results_text:"Oops, nothing found!"}),MutationObserver=window.MutationObserver||window.WebKitMutationObserver;var t=new MutationObserver(function(e){for(var t=0;t<e.length;t++)if($(e[t].target).is(".geot-chosen-select")){var n=$(e[t].target).parent(".geot-select2");n.find(".chosen-container").remove(),$(e[t].target).chosen({width:"90%",no_results_text:"Oops, nothing found!"})}});$(".acf-table").each(function(){t.observe($(this)[0],{subtree:!0,attributes:!0})}),$(".add-region").click(function(e){e.preventDefault();var t=$(this).prev(".region-group"),n=t.clone(),o=parseInt(t.data("id"))+1;n.find('input[type="text"]').attr("name","geot_settings[region]["+o+"][name]").val(""),n.find("select").attr("name","geot_settings[region]["+o+"][countries][]").find("option:selected").removeAttr("selected"),n.find(".chosen-container").remove(),n.insertAfter(t),$(".geot-chosen-select").chosen({width:"90%",no_results_text:"Oops, nothing found!"})}),$(".geot-settings").on("click",".remove-region",function(e){e.preventDefault();var t=$(this).parent(".region-group");t.remove()}),$(".add-city-region").click(function(t){t.preventDefault();var n=$(this).prev(".city-region-group"),o=n.clone(),i=o.find(".cities_container"),r=o.find(".country_ajax"),s=parseInt(n.data("id"))+1;o.find('input[type="text"]').attr("name","geot_settings[city_region]["+s+"][name]").val(""),r.attr("name","geot_settings[city_region]["+s+"][countries][]").find("option:selected").removeAttr("selected"),i.attr("name","geot_settings[city_region]["+s+"][cities][]").find("option:selected").removeAttr("selected"),o.find(".chosen-container").remove(),o.insertAfter(n),r.attr("data-counter",s),i.attr("id","cities"+s),i.chosen({width:"90%",no_results_text:"Oops, nothing found!"}),r.chosen({width:"90%",no_results_text:"Oops, nothing found!"}).on("change",function(){e(r)})}),$(".geot-settings").on("click",".remove-city-region",function(e){e.preventDefault();var t=$(this).parent(".city-region-group");t.remove()}),$(".add-redirection").click(function(e){e.preventDefault();var t=$(this).prev(".redirection-group"),n=t.clone(),o=parseInt(t.data("id"))+1;n.find('input[type="text"]').attr("name","geot_settings[redirection]["+o+"][name]").val(""),n.find("select").eq(0).attr("name","geot_settings[redirection]["+o+"][countries][]").find("option:selected").removeAttr("selected"),n.find("select").eq(1).attr("name","geot_settings[redirection]["+o+"][regions][]").find("option:selected").removeAttr("selected"),n.find(".chosen-container").remove(),n.insertAfter(t),$(".geot-chosen-select").chosen({width:"90%",no_results_text:"Oops, nothing found!"})}),$(".geot-settings").on("click",".remove-redirection",function(e){e.preventDefault();var t=$(this).parent(".redirection-group");t.remove()}),$(".country_ajax").on("change",function(){e($(this))}),$(document).on("widget-updated",function(){$(".geot-chosen-select").chosen({width:"90%",no_results_text:"Oops, nothing found!"})}),$(document).on("widget-added",function(e,t){$(t).find(".chosen-container").remove(),$(t).find(".geot-chosen-select").show().chosen({width:"90%",no_results_text:"Oops, nothing found!"})})})}(jQuery);