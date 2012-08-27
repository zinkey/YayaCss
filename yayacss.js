/* Copyright (c) 2010 Baidu  Licensed under the BSD License */
var T,baidu=T=baidu||{version:"1.3.9"};baidu.guid="$BAIDU$";window[baidu.guid]=window[baidu.guid]||{};baidu.ajax=baidu.ajax||{};baidu.fn=baidu.fn||{};baidu.fn.blank=function(){};baidu.ajax.request=function(d,r){r=r||{};var j=r.data||"",h=!(r.async===false),i=r.username||"",p=r.password||"",a=(r.method||"GET").toUpperCase(),g=r.headers||{},n=r.timeout||0,c={},l,o,q;function k(){if(q.readyState==4){try{var t=q.status}catch(s){f("failure");return}f(t);if((t>=200&&t<300)||t==304||t==1223){f("success")}else{f("failure")}window.setTimeout(function(){q.onreadystatechange=baidu.fn.blank;if(h){q=null}},0)}}function b(){if(window.ActiveXObject){try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(s){try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(s){}}}if(window.XMLHttpRequest){return new XMLHttpRequest()}}function f(u){u="on"+u;var t=c[u],v=baidu.ajax[u];if(t){if(l){clearTimeout(l)}if(u!="onsuccess"){t(q)}else{try{q.responseText}catch(s){return t(q)}t(q,q.responseText)}}else{if(v){if(u=="onsuccess"){return}v(q)}}}for(o in r){c[o]=r[o]}g["X-Requested-With"]="XMLHttpRequest";try{q=b();if(a=="GET"){if(j){d+=(d.indexOf("?")>=0?"&":"?")+j;j=null}if(r.noCache){d+=(d.indexOf("?")>=0?"&":"?")+"b"+(+new Date)+"=1"}}if(i){q.open(a,d,h,i,p)}else{q.open(a,d,h)}if(h){q.onreadystatechange=k}if(a=="POST"){q.setRequestHeader("Content-Type","application/x-www-form-urlencoded")}for(o in g){if(g.hasOwnProperty(o)){q.setRequestHeader(o,g[o])}}f("beforerequest");if(n){l=setTimeout(function(){q.onreadystatechange=baidu.fn.blank;q.abort();f("timeout")},n)}q.send(j);if(!h){k()}}catch(m){f("failure")}return q};baidu.ajax.form=function(a,c){c=c||{};var g=a.elements,o=g.length,b=a.getAttribute("method"),f=a.getAttribute("action"),u=c.replacer||function(v,i){return v},r={},t=[],m,q,s,n,d,h,j,l,k;function p(i,v){t.push(i+"="+v)}for(m in c){if(c.hasOwnProperty(m)){r[m]=c[m]}}for(m=0;m<o;m++){q=g[m];n=q.name;if(!q.disabled&&n){s=q.type;d=q.value;switch(s){case"radio":case"checkbox":if(!q.checked){break}case"textarea":case"text":case"password":case"hidden":case"select-one":p(n,u(d,n));break;case"select-multiple":h=q.options;l=h.length;for(j=0;j<l;j++){k=h[j];if(k.selected){p(n,u(k.value,n))}}break}}}r.data=t.join("&");r.method=a.getAttribute("method")||"GET";return baidu.ajax.request(f,r)};baidu.ajax.get=function(b,a){return baidu.ajax.request(b,{onsuccess:a})};baidu.ajax.post=function(b,c,a){return baidu.ajax.request(b,{onsuccess:a,method:"POST",data:c})};baidu.browser=baidu.browser||{};if(/chrome\/(\d+\.\d)/i.test(navigator.userAgent)){baidu.browser.chrome=+RegExp["\x241"]}if(/firefox\/(\d+\.\d)/i.test(navigator.userAgent)){baidu.browser.firefox=+RegExp["\x241"]}if(/msie (\d+\.\d)/i.test(navigator.userAgent)){baidu.browser.ie=baidu.ie=document.documentMode||+RegExp["\x241"]}baidu.browser.isGecko=/gecko/i.test(navigator.userAgent)&&!/like gecko/i.test(navigator.userAgent);baidu.browser.isStrict=document.compatMode=="CSS1Compat";baidu.browser.isWebkit=/webkit/i.test(navigator.userAgent);try{if(/(\d+\.\d)/.test(external.max_version)){baidu.browser.maxthon=+RegExp["\x241"]}}catch(e){}if(/opera\/(\d+\.\d)/i.test(navigator.userAgent)){baidu.browser.opera=+RegExp["\x241"]}(function(){var a=navigator.userAgent;if(/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(a)&&!/chrome/i.test(a)){baidu.browser.safari=+(RegExp["\x241"]||RegExp["\x242"])}})();
/*yaya css 1.0.0 under MIT License 2011.5.30*/
(function(){
var BrowserMap = {
		"firefox":T.browser.firefox,
		"chrome":T.browser.chrome,
		"ie":T.browser.ie,
		"opera":T.browser.opera,
		"safari":T.browser.safari,
		"maxthon":T.browser.maxthon
};
function setStyle(href){
		T.ajax.get(href,function(xhr,responseText){
	
			for (var i in BrowserMap)
			{
				  if (BrowserMap[i]!=undefined)
				  {
							responseText=  responseText.replace(new RegExp("(\\s|\\{|;)("+i+"["+BrowserMap[i]+"]?\\-)","g"),"$1");
				  }
			}
			var style = document.createElement("style");		
			document.getElementsByTagName("head")[0].appendChild(style);
			if (style.styleSheet)
			{
				style.styleSheet.cssText = responseText;
			}
			else{
				style.innerHTML = responseText;
			}
			
		});
}
var link = document.getElementsByTagName("link");
for (var i=0,j=link.length;i<j;i++){
	if (link[i].getAttribute("type")=="text/yayacss"){
		var href = link[i].getAttribute("href");
		if (href&&href!="")
		{
			try{
				setStyle(href);
			}catch(e){}
		}
	}
}
})();