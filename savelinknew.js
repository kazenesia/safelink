
 var currentURL=location.href; var str = currentURL; var res = str.replace("///st-kazenesia.blogspot.com/p/safelink.html?url=", ""); $(".visit-link").hide(); function changeLink(){var decodedString = Base64.decode(res); window.open(decodedString,'_blank')} function generate() {var linkDL = document.getElementById("download"), btn = document.getElementById("btn"), notif = document.getElementById("daplong"), direklink = document.getElementById("download").href, waktu = 5; var teks_waktu = document.createElement("span"); linkDL.parentNode.replaceChild(teks_waktu, linkDL); var id; id = setInterval(function () { waktu--; if (waktu < 0) { teks_waktu.parentNode.replaceChild(linkDL, teks_waktu); clearInterval(id); notif.style.display = "none"; linkDL.style.display = "inline-block"; } else { teks_waktu.innerHTML = "Link akan tampil dalam " + waktu.toString() + " Detik"; btn.style.display = "none";}}, 1000);} 
 var uri = window.location.toString(); if (uri.indexOf("%3D","%3D") > 0) { var clean_uri = uri.substring(0, uri.indexOf("%3D")); window.history.replaceState({}, document.title, clean_uri);} var uri = window.location.toString(); if (uri.indexOf("%3D%3D","%3D%3D") > 0) { var clean_uri = uri.substring(0, uri.indexOf("%3D%3D")); window.history.replaceState({}, document.title, clean_uri);} var uri = window.location.toString(); if (uri.indexOf("&m=1","&m=1") > 0) { var clean_uri = uri.substring(0, uri.indexOf("&m=1")); window.history.replaceState({}, document.title, clean_uri); } var uri = window.location.toString(); if (uri.indexOf("?m=1","?m=1") > 0) { var clean_uri = uri.substring(0, uri.indexOf("?m=1")); window.history.replaceState({}, document.title, clean_uri);}; var protocol=window.location.protocol.replace(/\:/g,''); if(protocol=='http'){ var url=window.location.href.replace('http','https'); window.location.replace(url);} 
