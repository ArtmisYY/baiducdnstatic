/*
YUI 3.17.0 (build ce55cc9)
Copyright 2014 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

YUI.add("io-xdr",function(e,t){function a(e,t,n){var r='<object id="io_swf" type="application/x-shockwave-flash" data="'+e+'" width="0" height="0">'+'<param name="movie" value="'+e+'">'+'<param name="FlashVars" value="yid='+t+"&uid="+n+'">'+'<param name="allowScriptAccess" value="always">'+"</object>",i=s.createElement("div");s.body.appendChild(i),i.innerHTML=r}function f(t,n,r){return n==="flash"&&(t.c.responseText=decodeURI(t.c.responseText)),r==="xml"&&(t.c.responseXML=e.DataType.XML.parse(t.c.responseText)),t}function l(e,t){return e.c.abort(e.id,t)}function c(e){return u?i[e.id]!==4:e.c.isInProgress(e.id)}var n=e.publish("io:xdrReady",{fireOnce:!0}),r={},i={},s=e.config.doc,o=e.config.win,u=o&&o.XDomainRequest;e.mix(e.IO.prototype,{_transport:{},_ieEvt:function(e,t){var n=this,r=e.id,s="timeout";e.c.onprogress=function(){i[r]=3},e.c.onload=function(){i[r]=4,n.xdrResponse("success",e,t)},e.c.onerror=function(){i[r]=4,n.xdrResponse("failure",e,t)},e.c.ontimeout=function(){i[r]=4,n.xdrResponse(s,e,t)},e.c[s]=t[s]||0},xdr:function(t,n,i){var s=this;return i.xdr.use==="flash"?(r[n.id]=i,o.setTimeout(function(){try{n.c.send(t,{id:n.id,uid:n.uid,method:i.method,data:i.data,headers:i.headers})}catch(e){s.xdrResponse("transport error",n,i),delete r[n.id]}},e.io.xdr.delay)):u?(s._ieEvt(n,i),n.c.open(i.method||"GET",t),setTimeout(function(){n.c.send(i.data)},0)):n.c.send(t,n,i),{id:n.id,abort:function(){return n.c?l(n,i):!1},isInProgress:function(){return n.c?c(n.id):!1},io:s}},xdrResponse:function(e,t,n){n=r[t.id]?r[t.id]:n;var s=this,o=u?i:r,a=n.xdr.use,l=n.xdr.dataType;switch(e){case"start":s.start(t,n);break;case"success":s.success(f(t,a,l),n),delete o[t.id];break;case"timeout":case"abort":case"transport error":t.c={status:0,statusText:e};case"failure":s.failure(f(t,a,l),n),delete o[t.id]}},_xdrReady:function(t,r){e.fire(n,t,r)},transport:function(t){t.id==="flash"&&(a(e.UA.ie?t.src+"?d="+(new Date).valueOf().toString():t.src,e.id,t.uid),e.IO.transports.flash=function(){return s.getElementById("io_swf")})}}),e.io.xdrReady=function(t,n){var r=e.io._map[n];e.io.xdr.delay=0,r._xdrReady.apply(r,[t,n])},e.io.xdrResponse=function(t,n,r){var i=e.io._map[n.uid];i.xdrResponse.apply(i,[t,n,r])},e.io.transport=function(t){var n=e.io._map["io:0"]||new e.IO;t.uid=n._uid,n.transport.apply(n,[t])},e.io.xdr={delay:100}},"3.17.0",{requires:["io-base","datatype-xml-parse"]});
