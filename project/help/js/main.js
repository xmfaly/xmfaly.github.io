$(document).ready(function(){var e=$("#subbut").offset().top,t=$("#subbut").offset().left,o=$("#search").offset().left,n=location.search;-1!==n.indexOf("?")?($("#cursor").animate({left:o-"-15",top:e-"-20"},1500,function(){var e=n.substr(1).split("=")[1],t=decodeURIComponent(e);document.forms[0].search.value=t}),$("#cursor").animate({left:o-"-50",top:e-"-55"},1e3),$("#cursor").animate({left:t-"-50",top:e-"-15"},1500,function(){document.getElementById("form").submit()})):($("#cursor").css("display","none"),$("#genbox").css("display","block"),$("#gen").click(function(){var e=location.href+"?wd="+encodeURIComponent($("#search").val());$("#link").text(e),$("#link").attr("href",e)}))});