(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,sx='com.google.gwt.core.client.',tx='com.google.gwt.http.client.',ux='com.google.gwt.lang.',vx='com.google.gwt.user.client.',wx='com.google.gwt.user.client.impl.',xx='com.google.gwt.user.client.ui.',yx='com.sun.javaone.client.',zx='java.lang.',Ax='java.util.';function rx(){}
function tr(a){return this===a;}
function ur(){return rs(this);}
function rr(){}
_=rr.prototype={};_.eQ=tr;_.hC=ur;_.tI=1;function o(){return u();}
var p=null;function s(a){return a==null?0:a.$H?a.$H:(a.$H=v());}
function t(a){return a==null?0:a.$H?a.$H:(a.$H=v());}
function u(){var b=$doc.location.href;var a=b.indexOf('#');if(a!= -1)b=b.substring(0,a);a=b.indexOf('?');if(a!= -1)b=b.substring(0,a);a=b.lastIndexOf('/');if(a!= -1)b=b.substring(0,a);return b.length>0?b+'/':'';}
function v(){return ++w;}
var w=0;function ts(b,a){a;return b;}
function vs(b,a){if(b.a!==null){throw ar(new Fq(),"Can't overwrite cause");}if(a===b){throw Dq(new Cq(),'Self-causation not permitted');}b.a=a;return b;}
function ss(){}
_=ss.prototype=new rr();_.tI=3;_.a=null;function Aq(b,a){ts(b,a);return b;}
function zq(){}
_=zq.prototype=new ss();_.tI=4;function wr(b,a){Aq(b,a);return b;}
function vr(){}
_=vr.prototype=new zq();_.tI=5;function y(c,b,a){wr(c,'JavaScript '+b+' exception: '+a);return c;}
function x(){}
_=x.prototype=new vr();_.tI=6;function C(b,a){if(!kd(a,2)){return false;}return bb(b,jd(a,2));}
function D(a){return s(a);}
function E(){return [];}
function F(){return function(){};}
function ab(){return {};}
function cb(a){return C(this,a);}
function bb(a,b){return a===b;}
function db(){return D(this);}
function A(){}
_=A.prototype=new rr();_.eQ=cb;_.hC=db;_.tI=7;function ec(b,d,c,a){if(d===null){throw new kr();}if(a===null){throw new kr();}if(c<0){throw new Cq();}b.a=c;b.c=d;if(c>0){b.b=lb(new kb(),b,a);eg(b.b,c);}else{b.b=null;}return b;}
function gc(a){var b;if(a.c!==null){b=a.c;a.c=null;vc(b);fc(a);}}
function fc(a){if(a.b!==null){bg(a.b);}}
function ic(e,a){var b,c,d,f;if(e.c===null){return;}fc(e);f=e.c;e.c=null;b=wc(f);if(b!==null){c=wr(new vr(),b);a.C(e,c);}else{d=kc(f);a.F(e,d);}}
function jc(b,a){if(b.c===null){return;}gc(b);a.C(b,bc(new ac(),b,b.a));}
function kc(b){var a;a=gb(new fb(),b);return a;}
function lc(a){var b;b=p;{ic(this,a);}}
function eb(){}
_=eb.prototype=new rr();_.q=lc;_.tI=0;_.a=0;_.b=null;_.c=null;function mc(){}
_=mc.prototype=new rr();_.tI=0;function gb(a,b){a.a=b;return a;}
function ib(a){return yc(a.a);}
function jb(a){return xc(a.a);}
function fb(){}
_=fb.prototype=new mc();_.tI=0;function cg(){cg=rx;kg=Eu(new Cu());{jg();}}
function ag(a){cg();return a;}
function bg(a){if(a.c){fg(a.d);}else{gg(a.d);}hv(kg,a);}
function dg(a){if(!a.c){hv(kg,a);}a.hb();}
function eg(b,a){if(a<=0){throw Dq(new Cq(),'must be positive');}bg(b);b.c=false;b.d=hg(b,a);av(kg,b);}
function fg(a){cg();$wnd.clearInterval(a);}
function gg(a){cg();$wnd.clearTimeout(a);}
function hg(b,a){cg();return $wnd.setTimeout(function(){b.r();},a);}
function ig(){var a;a=p;{dg(this);}}
function jg(){cg();pg(new Cf());}
function Bf(){}
_=Bf.prototype=new rr();_.r=ig;_.tI=8;_.c=false;_.d=0;var kg;function mb(){mb=rx;cg();}
function lb(b,a,c){mb();b.a=a;b.b=c;ag(b);return b;}
function nb(){jc(this.a,this.b);}
function kb(){}
_=kb.prototype=new Bf();_.hb=nb;_.tI=9;function ub(){ub=rx;xb=qb(new pb(),'GET');qb(new pb(),'POST');yb=ai(new Fh());}
function sb(b,a,c){ub();tb(b,a===null?null:a.a,c);return b;}
function tb(b,a,c){ub();qc('httpMethod',a);qc('url',c);b.a=a;b.c=c;return b;}
function vb(g,d,a){var b,c,e,f,h;h=ci(yb);{b=zc(h,g.a,g.c,true);}if(b!==null){e=Eb(new Db(),g.c);vs(e,Bb(new Ab(),b));throw e;}wb(g,h);c=ec(new eb(),h,g.b,a);f=Ac(h,c,d,a);if(f!==null){throw Bb(new Ab(),f);}return c;}
function wb(a,b){{Bc(b,'Content-Type','text/plain; charset=utf-8');}}
function ob(){}
_=ob.prototype=new rr();_.tI=0;_.a=null;_.b=0;_.c=null;var xb,yb;function qb(b,a){b.a=a;return b;}
function pb(){}
_=pb.prototype=new rr();_.tI=0;_.a=null;function Bb(b,a){Aq(b,a);return b;}
function Ab(){}
_=Ab.prototype=new zq();_.tI=10;function Eb(a,b){Bb(a,'The URL '+b+' is invalid or violates the same-origin security restriction');return a;}
function Db(){}
_=Db.prototype=new Ab();_.tI=11;function bc(b,a,c){Bb(b,dc(c));return b;}
function dc(a){return 'A request timeout has expired after '+hr(a)+' ms';}
function ac(){}
_=ac.prototype=new Ab();_.tI=12;function qc(a,b){rc(a,b);if(0==bs(is(b))){throw Dq(new Cq(),a+' can not be empty');}}
function rc(a,b){if(null===b){throw lr(new kr(),a+' can not be null');}}
function vc(a){a.onreadystatechange=ei;a.abort();}
function wc(b){try{if(b.status===undefined){return 'XmlHttpRequest.status == undefined, please see Safari bug '+'http://bugs.webkit.org/show_bug.cgi?id=3810 for more details';}return null;}catch(a){return 'Unable to read XmlHttpRequest.status; likely causes are a '+'networking error or bad cross-domain request. Please see '+'https://bugzilla.mozilla.org/show_bug.cgi?id=238559 for more '+'details';}}
function xc(a){return a.responseText;}
function yc(a){return a.status;}
function zc(e,c,d,b){try{e.open(c,d,b);return null;}catch(a){return a.message||a.toString();}}
function Ac(e,c,d,b){e.onreadystatechange=function(){if(e.readyState==uc){e.onreadystatechange=ei;c.q(b);}};try{e.send(d);return null;}catch(a){e.onreadystatechange=ei;return a.message||a.toString();}}
function Bc(d,b,c){try{d.setRequestHeader(b,c);return null;}catch(a){return a.message||a.toString();}}
var uc=4;function Dc(c,a,d,b,e){c.a=a;c.b=b;e;c.tI=d;return c;}
function Fc(a,b,c){return a[b]=c;}
function ad(b,a){return b[a];}
function bd(a){return a.length;}
function dd(e,d,c,b,a){return cd(e,d,c,b,0,bd(b),a);}
function cd(j,i,g,c,e,a,b){var d,f,h;if((f=ad(c,e))<0){throw new ir();}h=Dc(new Cc(),f,ad(i,e),ad(g,e),j);++e;if(e<a){j=fs(j,1);for(d=0;d<f;++d){Fc(h,d,cd(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){Fc(h,d,b);}}return h;}
function ed(a,b,c){if(c!==null&&a.b!=0&& !kd(c,a.b)){throw new pq();}return Fc(a,b,c);}
function Cc(){}
_=Cc.prototype=new rr();_.tI=0;function hd(b,a){return !(!(b&&nd[b][a]));}
function id(a){return String.fromCharCode(a);}
function jd(b,a){if(b!=null)hd(b.tI,a)||md();return b;}
function kd(b,a){return b!=null&&hd(b.tI,a);}
function md(){throw new vq();}
function ld(a){if(a!==null){throw new vq();}return a;}
function od(b,d){_=d.prototype;if(b&& !(b.tI>=_.tI)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var nd;function rd(a){if(kd(a,3)){return a;}return y(new x(),td(a),sd(a));}
function sd(a){return a.message;}
function td(a){return a.name;}
function xd(){if(wd===null||Ad()){wd=pw(new vv());zd(wd);}return wd;}
function yd(b){var a;a=xd();return jd(vw(a,b),1);}
function zd(e){var b=$doc.cookie;if(b&&b!=''){var a=b.split('; ');for(var d=0;d<a.length;++d){var f,g;var c=a[d].indexOf('=');if(c== -1){f=a[d];g='';}else{f=a[d].substring(0,c);g=a[d].substring(c+1);}f=decodeURIComponent(f);g=decodeURIComponent(g);e.eb(f,g);}}}
function Ad(){var a=$doc.cookie;if(a!=''&&a!=Bd){Bd=a;return true;}else{return false;}}
function Cd(a){$doc.cookie=a+"='';expires='Fri, 02-Jan-1970 00:00:00 GMT'";}
function Ed(a,b){Dd(a,b,0,null,null,false);}
function Dd(d,g,c,b,e,f){var a=encodeURIComponent(d)+'='+encodeURIComponent(g);if(c)a+=';expires='+new Date(c).toGMTString();if(b)a+=';domain='+b;if(e)a+=';path='+e;if(f)a+=';secure';$doc.cookie=a;}
var wd=null,Bd=null;function ae(){ae=rx;De=Eu(new Cu());{ye=new Fg();ih(ye);}}
function be(b,a){ae();lh(ye,b,a);}
function ce(a,b){ae();return dh(ye,a,b);}
function de(){ae();return nh(ye,'A');}
function ee(){ae();return nh(ye,'div');}
function fe(){ae();return nh(ye,'tbody');}
function ge(){ae();return nh(ye,'td');}
function he(){ae();return nh(ye,'tr');}
function ie(){ae();return nh(ye,'table');}
function le(b,a,d){ae();var c;c=p;{ke(b,a,d);}}
function ke(b,a,c){ae();var d;if(a===Ce){if(ne(b)==8192){Ce=null;}}d=je;je=b;try{c.B(b);}finally{je=d;}}
function me(b,a){ae();oh(ye,b,a);}
function ne(a){ae();return ph(ye,a);}
function oe(a){ae();eh(ye,a);}
function pe(b,a){ae();return qh(ye,b,a);}
function qe(a){ae();return rh(ye,a);}
function se(a,b){ae();return th(ye,a,b);}
function re(a,b){ae();return sh(ye,a,b);}
function te(a){ae();return uh(ye,a);}
function ue(a){ae();return fh(ye,a);}
function ve(a){ae();return vh(ye,a);}
function we(a){ae();return gh(ye,a);}
function xe(a){ae();return hh(ye,a);}
function ze(c,a,b){ae();jh(ye,c,a,b);}
function Ae(a){ae();var b,c;c=true;if(De.b>0){b=ld(dv(De,De.b-1));if(!(c=null.lb())){me(a,true);oe(a);}}return c;}
function Be(b,a){ae();wh(ye,b,a);}
function Ee(a,b,c){ae();xh(ye,a,b,c);}
function Fe(a,b){ae();yh(ye,a,b);}
function af(a,b){ae();zh(ye,a,b);}
function bf(a,b){ae();Ah(ye,a,b);}
function cf(b,a,c){ae();Bh(ye,b,a,c);}
function df(a,b){ae();kh(ye,a,b);}
function ef(){ae();return Ch(ye);}
function ff(){ae();return Dh(ye);}
var je=null,ye=null,Ce=null,De;function jf(a){if(kd(a,4)){return ce(this,jd(a,4));}return C(od(this,gf),a);}
function kf(){return D(od(this,gf));}
function gf(){}
_=gf.prototype=new A();_.eQ=jf;_.hC=kf;_.tI=13;function of(a){return C(od(this,lf),a);}
function pf(){return D(od(this,lf));}
function lf(){}
_=lf.prototype=new A();_.eQ=of;_.hC=pf;_.tI=14;function sf(){sf=rx;xf=Eu(new Cu());{yf=new gi();if(!ii(yf)){yf=null;}}}
function tf(a){sf();av(xf,a);}
function uf(){sf();$wnd.history.back();}
function vf(a){sf();var b,c;for(b=jt(xf);ct(b);){c=jd(dt(b),5);c.D(a);}}
function wf(){sf();return yf!==null?li(yf):'';}
function zf(a){sf();if(yf!==null){ji(yf,a);}}
function Af(b){sf();var a;a=p;{vf(b);}}
var xf,yf=null;function Ef(){while((cg(),kg).b>0){bg(jd(dv((cg(),kg),0),6));}}
function Ff(){return null;}
function Cf(){}
_=Cf.prototype=new rr();_.bb=Ef;_.cb=Ff;_.tI=15;function og(){og=rx;rg=Eu(new Cu());Cg=Eu(new Cu());{yg();}}
function pg(a){og();av(rg,a);}
function qg(a){og();av(Cg,a);}
function sg(a){og();$doc.body.style.overflow=a?'auto':'hidden';}
function tg(){og();var a,b;for(a=jt(rg);ct(a);){b=jd(dt(a),7);b.bb();}}
function ug(){og();var a,b,c,d;d=null;for(a=jt(rg);ct(a);){b=jd(dt(a),7);c=b.cb();{d=c;}}return d;}
function vg(){og();var a,b;for(a=jt(Cg);ct(a);){b=jd(dt(a),8);b.db(xg(),wg());}}
function wg(){og();return ef();}
function xg(){og();return ff();}
function yg(){og();__gwt_initHandlers(function(){Bg();},function(){return Ag();},function(){zg();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function zg(){og();var a;a=p;{tg();}}
function Ag(){og();var a;a=p;{return ug();}}
function Bg(){og();var a;a=p;{vg();}}
function Dg(a){og();$doc.title=a;}
var rg,Cg;function lh(c,b,a){b.appendChild(a);}
function nh(b,a){return $doc.createElement(a);}
function oh(c,b,a){b.cancelBubble=a;}
function ph(b,a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function qh(d,b,a){var c=b.getAttribute(a);return c==null?null:c;}
function rh(c,b){var a=$doc.getElementById(b);return a||null;}
function th(d,a,b){var c=a[b];return c==null?null:String(c);}
function sh(d,a,c){var b=parseInt(a[c]);if(!b){return 0;}return b;}
function uh(b,a){return a.__eventBits||0;}
function vh(d,b){var c='',a=b.firstChild;while(a){if(a.nodeType==1){c+=d.s(a);}else if(a.nodeValue){c+=a.nodeValue;}a=a.nextSibling;}return c;}
function wh(c,b,a){b.removeChild(a);}
function xh(c,a,b,d){a[b]=d;}
function yh(c,a,b){a.__listener=b;}
function zh(c,a,b){if(!b){b='';}a.innerHTML=b;}
function Ah(c,a,b){while(a.firstChild){a.removeChild(a.firstChild);}if(b!=null){a.appendChild($doc.createTextNode(b));}}
function Bh(c,b,a,d){b.style[a]=d;}
function Ch(a){return $doc.body.clientHeight;}
function Dh(a){return $doc.body.clientWidth;}
function Eh(a){return vh(this,a);}
function Eg(){}
_=Eg.prototype=new rr();_.s=Eh;_.tI=0;function dh(c,a,b){return a==b;}
function eh(b,a){a.preventDefault();}
function fh(c,b){var a=b.firstChild;while(a&&a.nodeType!=1)a=a.nextSibling;return a||null;}
function gh(c,a){var b=a.nextSibling;while(b&&b.nodeType!=1)b=b.nextSibling;return b||null;}
function hh(c,a){var b=a.parentNode;if(b==null){return null;}if(b.nodeType!=1)b=null;return b||null;}
function ih(d){$wnd.__dispatchCapturedMouseEvent=function(b){if($wnd.__dispatchCapturedEvent(b)){var a=$wnd.__captureElem;if(a&&a.__listener){le(b,a,a.__listener);b.stopPropagation();}}};$wnd.__dispatchCapturedEvent=function(a){if(!Ae(a)){a.stopPropagation();a.preventDefault();return false;}return true;};$wnd.addEventListener('click',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('dblclick',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousedown',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mouseup',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousemove',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousewheel',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('keydown',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keyup',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keypress',$wnd.__dispatchCapturedEvent,true);$wnd.__dispatchEvent=function(b){var c,a=this;while(a&& !(c=a.__listener))a=a.parentNode;if(a&&a.nodeType!=1)a=null;if(c)le(b,a,c);};$wnd.__captureElem=null;}
function jh(f,e,g,d){var c=0,b=e.firstChild,a=null;while(b){if(b.nodeType==1){if(c==d){a=b;break;}++c;}b=b.nextSibling;}e.insertBefore(g,a);}
function kh(c,b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&2?$wnd.__dispatchEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function bh(){}
_=bh.prototype=new Eg();_.tI=0;function Fg(){}
_=Fg.prototype=new bh();_.tI=0;function ai(a){ei=F();return a;}
function ci(a){return di(a);}
function di(a){return new XMLHttpRequest();}
function Fh(){}
_=Fh.prototype=new rr();_.tI=0;var ei=null;function li(a){return $wnd.__gwt_historyToken;}
function mi(a){Af(a);}
function fi(){}
_=fi.prototype=new rr();_.tI=0;function ii(d){$wnd.__gwt_historyToken='';var c=$wnd.location.hash;if(c.length>0)$wnd.__gwt_historyToken=c.substring(1);$wnd.__checkHistory=function(){var b='',a=$wnd.location.hash;if(a.length>0)b=a.substring(1);if(b!=$wnd.__gwt_historyToken){$wnd.__gwt_historyToken=b;mi(b);}$wnd.setTimeout('__checkHistory()',250);};$wnd.__checkHistory();return true;}
function ji(b,a){if(a==null){a='';}$wnd.location.hash=encodeURIComponent(a);}
function gi(){}
_=gi.prototype=new fi();_.tI=0;function bm(b,a){cm(b,fm(b)+id(45)+a);}
function cm(b,a){rm(b.i,a,true);}
function em(a){return re(a.i,'offsetWidth');}
function fm(a){return pm(a.i);}
function gm(b,a){hm(b,fm(b)+id(45)+a);}
function hm(b,a){rm(b.i,a,false);}
function im(d,b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function jm(b,a){if(b.i!==null){im(b,b.i,a);}b.i=a;}
function km(b,a){qm(b.i,a);}
function lm(b,a){sm(b.i,a);}
function mm(a,b){tm(a.i,b);}
function nm(b,a){df(b.i,a|te(b.i));}
function om(a){return se(a,'className');}
function pm(a){var b,c;b=om(a);c=Er(b,32);if(c>=0){return gs(b,0,c);}return b;}
function qm(a,b){Ee(a,'className',b);}
function rm(c,j,a){var b,d,e,f,g,h,i;if(c===null){throw wr(new vr(),'Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');}j=is(j);if(bs(j)==0){throw Dq(new Cq(),'Style names cannot be empty');}i=om(c);e=Fr(i,j);while(e!=(-1)){if(e==0||zr(i,e-1)==32){f=e+bs(j);g=bs(i);if(f==g||f<g&&zr(i,f)==32){break;}}e=as(i,j,e+1);}if(a){if(e==(-1)){if(bs(i)>0){i+=' ';}Ee(c,'className',i+j);}}else{if(e!=(-1)){b=is(gs(i,0,e));d=is(fs(i,e+bs(j)));if(bs(b)==0){h=d;}else if(bs(d)==0){h=b;}else{h=b+' '+d;}Ee(c,'className',h);}}}
function sm(a,b){if(a===null){throw wr(new vr(),'Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');}b=is(b);if(bs(b)==0){throw Dq(new Cq(),'Style names cannot be empty');}um(a,b);}
function tm(a,b){a.style.display=b?'':'none';}
function um(b,f){var a=b.className.split(/\s+/);if(!a){return;}var g=a[0];var h=g.length;a[0]=f;for(var c=1,d=a.length;c<d;c++){var e=a[c];if(e.length>h&&(e.charAt(h)=='-'&&e.indexOf(g)==0)){a[c]=f+e.substring(h);}}b.className=a.join(' ');}
function am(){}
_=am.prototype=new rr();_.tI=0;_.i=null;function pn(a){if(a.g){throw ar(new Fq(),"Should only call onAttach when the widget is detached from the browser's document");}a.g=true;Fe(a.i,a);a.n();a.E();}
function qn(a){if(!a.g){throw ar(new Fq(),"Should only call onDetach when the widget is attached to the browser's document");}try{a.ab();}finally{a.o();Fe(a.i,null);a.g=false;}}
function rn(a){if(a.h!==null){a.h.gb(a);}else if(a.h!==null){throw ar(new Fq(),"This widget's parent does not implement HasWidgets");}}
function sn(b,a){if(b.g){Fe(b.i,null);}jm(b,a);if(b.g){Fe(a,b);}}
function tn(c,b){var a;a=c.h;if(b===null){if(a!==null&&a.g){qn(c);}c.h=null;}else{if(a!==null){throw ar(new Fq(),'Cannot set a new parent without first clearing the old parent');}c.h=b;if(b.g){pn(c);}}}
function un(){}
function vn(){}
function wn(a){}
function xn(){}
function yn(){}
function Dm(){}
_=Dm.prototype=new am();_.n=un;_.o=vn;_.B=wn;_.E=xn;_.ab=yn;_.tI=16;_.g=false;_.h=null;function Bk(b,a){tn(a,b);}
function Dk(b,a){tn(a,null);}
function Ek(){var a,b;for(b=this.y();b.x();){a=jd(b.A(),9);pn(a);}}
function Fk(){var a,b;for(b=this.y();b.x();){a=jd(b.A(),9);qn(a);}}
function al(){}
function bl(){}
function Ak(){}
_=Ak.prototype=new Dm();_.n=Ek;_.o=Fk;_.E=al;_.ab=bl;_.tI=17;function zi(a){a.f=en(new Em(),a);}
function Ai(a){zi(a);return a;}
function Bi(c,a,b){rn(a);fn(c.f,a);be(b,a.i);Bk(c,a);}
function Ci(d,b,a){var c;Ei(d,a);if(b.h===d){c=aj(d,b);if(c<a){a--;}}return a;}
function Di(b,a){if(a<0||a>=b.f.b){throw new cr();}}
function Ei(b,a){if(a<0||a>b.f.b){throw new cr();}}
function bj(b,a){return hn(b.f,a);}
function aj(b,a){return jn(b.f,a);}
function cj(e,b,c,a,d){a=Ci(e,b,a);rn(b);kn(e.f,b,a);if(d){ze(c,b.i,a);}else{be(c,b.i);}Bk(e,b);}
function dj(b,a){return b.gb(bj(b,a));}
function ej(b,c){var a;if(c.h!==b){return false;}Dk(b,c);a=c.i;Be(xe(a),a);nn(b.f,c);return true;}
function fj(){return ln(this.f);}
function gj(a){return ej(this,a);}
function yi(){}
_=yi.prototype=new Ak();_.y=fj;_.gb=gj;_.tI=18;function oi(a){Ai(a);sn(a,ee());cf(a.i,'position','relative');cf(a.i,'overflow','hidden');return a;}
function pi(a,b){Bi(a,b,a.i);}
function ri(a){cf(a,'left','');cf(a,'top','');cf(a,'position','');}
function si(b){var a;a=ej(this,b);if(a){ri(b.i);}return a;}
function ni(){}
_=ni.prototype=new yi();_.gb=si;_.tI=19;function ui(a){Ai(a);a.e=ie();a.d=fe();be(a.e,a.d);sn(a,a.e);return a;}
function wi(c,b,a){Ee(b,'align',a.a);}
function xi(c,b,a){cf(b,'verticalAlign',a.a);}
function ti(){}
_=ti.prototype=new yi();_.tI=20;_.d=null;_.e=null;function ij(a){Ai(a);sn(a,ee());return a;}
function jj(a,b){Bi(a,b,a.i);lj(a,b);}
function lj(b,c){var a;a=c.i;cf(a,'width','100%');cf(a,'height','100%');mm(c,false);}
function mj(a,b){cf(b.i,'width','');cf(b.i,'height','');mm(b,true);}
function nj(b,a){Di(b,a);if(b.a!==null){mm(b.a,false);}b.a=bj(b,a);mm(b.a,true);}
function oj(b){var a;a=ej(this,b);if(a){mj(this,b);if(this.a===b){this.a=null;}}return a;}
function hj(){}
_=hj.prototype=new yi();_.gb=oj;_.tI=21;_.a=null;function xk(a){sn(a,ee());nm(a,131197);km(a,'gwt-Label');return a;}
function zk(a){switch(ne(a)){case 1:break;case 4:case 8:case 64:case 16:case 32:break;case 131072:break;}}
function wk(){}
_=wk.prototype=new Dm();_.B=zk;_.tI=22;function qj(a){xk(a);sn(a,ee());nm(a,125);km(a,'gwt-HTML');return a;}
function rj(b,a){qj(b);tj(b,a);return b;}
function tj(b,a){af(b.i,a);}
function pj(){}
_=pj.prototype=new wk();_.tI=23;function zj(){zj=rx;xj(new wj(),'center');Aj=xj(new wj(),'left');xj(new wj(),'right');}
var Aj;function xj(b,a){b.a=a;return b;}
function wj(){}
_=wj.prototype=new rr();_.tI=0;_.a=null;function Fj(){Fj=rx;ak=Dj(new Cj(),'bottom');Dj(new Cj(),'middle');bk=Dj(new Cj(),'top');}
var ak,bk;function Dj(a,b){a.a=b;return a;}
function Cj(){}
_=Cj.prototype=new rr();_.tI=0;_.a=null;function fk(a){a.a=(zj(),Aj);a.c=(Fj(),bk);}
function gk(a){ui(a);fk(a);a.b=he();be(a.d,a.b);Ee(a.e,'cellSpacing','0');Ee(a.e,'cellPadding','0');return a;}
function hk(b,c){var a;a=jk(b);be(b.b,a);Bi(b,c,a);}
function jk(b){var a;a=ge();wi(b,a,b.a);xi(b,a,b.c);return a;}
function kk(c,d,a){var b;Ei(c,a);b=jk(c);ze(c.b,b,a);cj(c,d,b,a,false);}
function lk(c,d){var a,b;b=xe(d.i);a=ej(c,d);if(a){Be(c.b,b);}return a;}
function mk(b,a){b.c=a;}
function nk(a){return lk(this,a);}
function ek(){}
_=ek.prototype=new ti();_.gb=nk;_.tI=24;_.b=null;function pk(a){sn(a,ee());be(a.i,a.a=de());nm(a,1);km(a,'gwt-Hyperlink');return a;}
function qk(c,b,a){pk(c);tk(c,b);sk(c,a);return c;}
function sk(b,a){b.b=a;Ee(b.a,'href','#'+a);}
function tk(b,a){bf(b.a,a);}
function uk(a){if(ne(a)==1){zf(this.b);oe(a);}}
function ok(){}
_=ok.prototype=new Dm();_.B=uk;_.tI=25;_.a=null;_.b=null;function il(){il=rx;nl=pw(new vv());}
function hl(b,a){il();oi(b);if(a===null){a=jl();}sn(b,a);pn(b);return b;}
function kl(){il();return ll(null);}
function ll(c){il();var a,b;b=jd(vw(nl,c),10);if(b!==null){return b;}a=null;if(c!==null){if(null===(a=qe(c))){return null;}}if(nl.c==0){ml();}ww(nl,c,b=hl(new cl(),a));return b;}
function jl(){il();return $doc.body;}
function ml(){il();pg(new dl());}
function cl(){}
_=cl.prototype=new ni();_.tI=26;var nl;function fl(){var a,b;for(b=cu(qu((il(),nl)));ju(b);){a=jd(ku(b),10);if(a.g){qn(a);}}}
function gl(){return null;}
function dl(){}
_=dl.prototype=new rr();_.bb=fl;_.cb=gl;_.tI=27;function vl(a){wl(a,ee());return a;}
function wl(b,a){sn(b,a);return b;}
function xl(a,b){if(a.a!==null){throw ar(new Fq(),'SimplePanel can only contain one child widget');}Al(a,b);}
function zl(a,b){if(a.a!==b){return false;}Dk(a,b);Be(a.i,b.i);a.a=null;return true;}
function Al(a,b){if(b===a.a){return;}if(b!==null){rn(b);}if(a.a!==null){zl(a,a.a);}a.a=b;if(b!==null){be(a.i,a.a.i);Bk(a,b);}}
function Bl(){return rl(new pl(),this);}
function Cl(a){return zl(this,a);}
function ol(){}
_=ol.prototype=new Ak();_.y=Bl;_.gb=Cl;_.tI=28;_.a=null;function ql(a){a.a=a.b.a!==null;}
function rl(b,a){b.b=a;ql(b);return b;}
function tl(){return this.a;}
function ul(){if(!this.a||this.b.a===null){throw new nx();}this.a=false;return this.b.a;}
function pl(){}
_=pl.prototype=new rr();_.x=tl;_.A=ul;_.tI=0;function wm(a){a.a=(zj(),Aj);a.b=(Fj(),bk);}
function xm(a){ui(a);wm(a);Ee(a.e,'cellSpacing','0');Ee(a.e,'cellPadding','0');return a;}
function ym(b,d){var a,c;c=he();a=Am(b);be(c,a);be(b.d,c);Bi(b,d,a);}
function Am(b){var a;a=ge();wi(b,a,b.a);xi(b,a,b.b);return a;}
function Bm(c,e,a){var b,d;Ei(c,a);d=he();b=Am(c);be(d,b);ze(c.d,d,a);cj(c,e,b,a,false);}
function Cm(c){var a,b;b=xe(c.i);a=ej(this,c);if(a){Be(this.d,xe(b));}return a;}
function vm(){}
_=vm.prototype=new ti();_.gb=Cm;_.tI=29;function en(b,a){b.a=dd('[Lcom.google.gwt.user.client.ui.Widget;',[0],[9],[4],null);return b;}
function fn(a,b){kn(a,b,a.b);}
function hn(b,a){if(a<0||a>=b.b){throw new cr();}return b.a[a];}
function jn(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]===c){return a;}}return (-1);}
function kn(d,e,a){var b,c;if(a<0||a>d.b){throw new cr();}if(d.b==d.a.a){c=dd('[Lcom.google.gwt.user.client.ui.Widget;',[0],[9],[d.a.a*2],null);for(b=0;b<d.a.a;++b){ed(c,b,d.a[b]);}d.a=c;}++d.b;for(b=d.b-1;b>a;--b){ed(d.a,b,d.a[b-1]);}ed(d.a,a,e);}
function ln(a){return an(new Fm(),a);}
function mn(c,b){var a;if(b<0||b>=c.b){throw new cr();}--c.b;for(a=b;a<c.b;++a){ed(c.a,a,c.a[a+1]);}ed(c.a,c.b,null);}
function nn(b,c){var a;a=jn(b,c);if(a==(-1)){throw new nx();}mn(b,a);}
function Em(){}
_=Em.prototype=new rr();_.tI=0;_.a=null;_.b=0;function an(b,a){b.b=a;return b;}
function cn(){return this.a<this.b.b-1;}
function dn(){if(this.a>=this.b.b){throw new nx();}return this.b.a[++this.a];}
function Fm(){}
_=Fm.prototype=new rr();_.x=cn;_.A=dn;_.tI=0;_.a=(-1);function Fo(){Fo=rx;rp=hs('abcdefghijklmnopqrstuvwxyz');}
function Do(a){Fo();return a;}
function Eo(a){qg(Bn(new An(),a));}
function ap(a){if(!a.a.b){sp();}}
function bp(c,a){var b;b=jb(a);return (ib(a)==200||ib(a)==203||ib(a)<100)&&b!==null&& !Dr(b,'');}
function cp(e,d){var a,c,f;f=o()+'/appendix'+id(rp[d])+'.html';c=sb(new ob(),(ub(),xb),f);try{vb(c,null,uo(new to(),e,d,f));}catch(a){a=rd(a);if(kd(a,14)){}else throw a;}}
function dp(e,d){var a,c,f;f=o()+'/exercise'+d+'.html';c=sb(new ob(),(ub(),xb),f);try{vb(c,null,Fn(new En(),e,d,f));}catch(a){a=rd(a);if(kd(a,14)){a;gp(e);}else throw a;}}
function ep(d){var a,c,e;e=o()+'/intro.html';c=sb(new ob(),(ub(),xb),e);try{vb(c,null,ko(new jo(),d,e));}catch(a){a=rd(a);if(kd(a,14)){a;dp(d,0);}else throw a;}}
function fp(e,d){var a,c,f;if(e.a.b){dp(e,d+1);}else{f=o()+'/solution'+d+'.html';c=sb(new ob(),(ub(),xb),f);try{vb(c,null,fo(new eo(),e,d,f));}catch(a){a=rd(a);if(kd(a,14)){a;dp(e,d+1);}else throw a;}}}
function gp(d){var a,c,e;e=o()+'/summary.html';c=sb(new ob(),(ub(),xb),e);try{vb(c,null,po(new oo(),d,e));}catch(a){a=rd(a);if(kd(a,14)){a;pp(d);cp(d,0);}else throw a;}}
function hp(e,d,f){var a,c;c=sb(new ob(),(ub(),xb),f);try{vb(c,null,zo(new yo(),e,d,f));}catch(a){a=rd(a);if(kd(a,14)){}else throw a;}}
function ip(d,c){var a,b,e,f;b=cs(c,',');for(a=0;a<b.a;a++){if(!Dr(b[a],'')){e=np(d,b[a]);f=op(d,b[a]);Fp(d.a,b[a],e,null);if(f!==null&& !Dr(f,'')){hp(d,b[a],f);}}}}
function jp(b,a){if(Dr(a,'Clear')){lp(b);}hq(b.a,a);}
function kp(d){var a,b,c;b=ll('j1holframe');a=false;if(b===null){b=ll('j1holprintcontents');if(b===null){b=kl();}else{a=true;}}d.a=Ap(new vp(),a);if(!a){lm(d.a.g,'j1holtabbar');cm(d.a.g,'d7v0');pi(b,d.a.g);pi(b,dq(d.a));}if(a){ep(d);}else{tf(d);c=null;if(Dr(wf(),'Clear')){lp(d);}else{c=mp(d);}if(c!==null&& !Dr(c,'')){ip(d,c);pp(d);}else{ep(d);}Eo(d);}}
function lp(d){var a,b,c;c=yd('j1holtablist');if(c!==null&& !Dr(c,'')){b=cs(c,',');for(a=0;a<b.a;a++){if(!Dr(b[a],'')){Cd('j1holtab.'+b[a]);}}Cd('j1holtablist');}}
function mp(b){var a;a=yd('j1holtablist');return a;}
function np(d,c){var a,b;a=yd('j1holtab.'+c);b=Er(a,124);if(b==(-1)){b=bs(a);}return gs(a,0,b);}
function op(d,c){var a,b;a=yd('j1holtab.'+c);b=Er(a,124)+1;if(b==(-1)){b=0;}return fs(a,b);}
function pp(a){var b;b=wf();if(bs(b)>0){jp(a,b);}else{gq(a.a,0);}ap(a);}
function qp(f,c,a){var b,d,e,g;e=yd('j1holtablist');d=null;if(e===null||Dr(e,'')){d=','+c+',';}else if(Fr(e,','+c+',')<0){d=e+c+',';}b=cq(f.a,c);g=c;if(b>=0){g=eq(f.a,b);}if(d!==null){Ed('j1holtablist',d);Ed('j1holtab.'+c,g+'|'+a);}}
function sp(){Fo();var f=$doc.getElementsByTagName('span');for(var c=0;c<f.length;c++){var e=f[c];if(e.className=='collapsed'||e.classname=='uncollapsed'){var b=$doc.createElement('div');var a=$doc.createElement('div');var d=e.parentNode;if(e.className=='collapsed'){e.className='xcollapsed';}else{e.className='xuncollapsed';}b.spanElement=e;b.className='collapseboxclosed';b.onclick=function(){if(this.spanElement.className=='xcollapsed'){this.spanElement.className='xuncollapsed';this.className='collapseboxopen';}else if(this.spanElement.className=='xuncollapsed'){this.spanElement.className='xcollapsed';this.className='collapseboxclosed';}};a.className='collapsewidget';b.appendChild(a);d.insertBefore(b,e);}}}
function tp(a){jp(this,a);}
function up(){Fo();var a,b,c,d,e;a=qe('j1holtitleid');if(a!==null){e=ve(a);if(e!==null&& !Dr(e,'')){Dg(e);}c=qe('j1holcovernumberid');d=qe('j1holcovertitleid');if(c!==null||d!==null){b=Er(e,58);if(b>=0){bf(c,is(gs(e,0,b)));bf(d,is(fs(e,b+1)));}}}}
function zn(){}
_=zn.prototype=new rr();_.D=tp;_.tI=30;_.a=null;_.b=0;var rp;function Bn(b,a){b.a=a;return b;}
function Dn(b,a){if(b!=this.a.b){fq(this.a.a,false);this.a.b=b;sg(false);sg(true);}}
function An(){}
_=An.prototype=new rr();_.db=Dn;_.tI=31;function Fn(b,a,c,d){b.a=a;b.b=c;b.c=d;return b;}
function bo(a,b){gp(this.a);}
function co(a,b){if(bp(this.a,b)){Cp(this.a.a,'Exercise_'+this.b,jb(b));qp(this.a,'Exercise_'+this.b,this.c);fp(this.a,this.b);}else{gp(this.a);}}
function En(){}
_=En.prototype=new rr();_.C=bo;_.F=co;_.tI=0;function fo(b,a,c,d){b.a=a;b.b=c;b.c=d;return b;}
function ho(a,b){dp(this.a,this.b+1);}
function io(a,b){if(bp(this.a,b)){Cp(this.a.a,'Solution_'+this.b,jb(b));qp(this.a,'Solution_'+this.b,this.c);}dp(this.a,this.b+1);}
function eo(){}
_=eo.prototype=new rr();_.C=ho;_.F=io;_.tI=0;function ko(b,a,c){b.a=a;b.b=c;return b;}
function mo(a,b){dp(this.a,0);}
function no(a,b){if(bp(this.a,b)){Cp(this.a.a,'Intro',jb(b));qp(this.a,'Intro',this.b);up();}dp(this.a,0);}
function jo(){}
_=jo.prototype=new rr();_.C=mo;_.F=no;_.tI=0;function po(b,a,c){b.a=a;b.b=c;return b;}
function ro(a,b){pp(this.a);cp(this.a,0);}
function so(a,b){if(bp(this.a,b)){Cp(this.a.a,'Summary',jb(b));qp(this.a,'Summary',this.b);}pp(this.a);cp(this.a,0);}
function oo(){}
_=oo.prototype=new rr();_.C=ro;_.F=so;_.tI=0;function uo(b,a,c,d){b.a=a;b.b=c;b.c=d;return b;}
function wo(a,b){}
function xo(a,b){if(bp(this.a,b)){Cp(this.a.a,'Appendix_'+id(uq((Fo(),rp)[this.b])),jb(b));qp(this.a,'Appendix_'+id(uq((Fo(),rp)[this.b])),this.c);}cp(this.a,this.b+1);}
function to(){}
_=to.prototype=new rr();_.C=wo;_.F=xo;_.tI=0;function zo(b,a,c,d){b.a=a;b.b=c;b.c=d;return b;}
function Bo(a,b){}
function Co(a,b){if(bp(this.a,b)){iq(this.a.a,this.b,jb(b));ap(this.a);if(Br(this.c,'/intro.html')){up();}}}
function yo(){}
_=yo.prototype=new rr();_.C=Bo;_.F=Co;_.tI=0;function zp(a){a.g=xm(new vm());a.a=ij(new hj());a.e=Eu(new Cu());a.f=Eu(new Cu());}
function Ap(c,a){var b;zp(c);c.b=a;if(!a){b=gk(new ek());mk(b,(Fj(),ak));av(c.f,b);ym(c.g,b);}else{c.c=ll('j1holprintcontents');}return c;}
function Cp(c,b,a){Dp(c,b,a,c.e.b);}
function Fp(d,b,e,a){var c;c=a;if(c===null){c='<p class="xxbig j1holwarn centertext">LOADING...<\/p>';}aq(d,b,e,c,d.e.b);}
function Dp(e,d,a,c){var b,f;b=jq(a);f=mq(b);if(f===null){f=nq(d);}Ep(e,d,f,b,c);}
function aq(d,c,e,a,b){Ep(d,c,e,jq(a),b);}
function Ep(f,c,g,a,b){var d,e;d=kq(a);if(f.b){pi(f.c,d);}else{e=lq(g,c);Bp(f,e);jj(f.a,d);Fu(f.e,b,xp(new wp(),c,g,e,d,a,f));if(f.e.b==1){bm(e,'selected');nj(f.a,0);}else{gm(e,'selected');}}}
function Bp(b,a){hk(jd(dv(b.f,b.f.b-1),15),a);fq(b,true);}
function cq(d,c){var a,b;b=(-1);for(a=0;a<d.e.b;a++){if(Dr(jd(dv(d.e,a),16).b,c)){b=a;break;}else if(es(c,jd(dv(d.e,a),16).b+'=')){b=a;break;}}return b;}
function dq(a){if(a.b){return a.c;}else{return a.a;}}
function eq(b,a){return jd(dv(b.e,a),16).d;}
function fq(f,c){var a,b,d,e,g;for(b=f.f.b-1;b>=0;b--){a=jd(dv(f.f,b),15);if(em(a)>xg()){e=null;if(b>0){e=jd(dv(f.f,b-1),15);}else if(a.f.b>1){e=gk(new ek());Fu(f.f,0,e);Bm(f.g,e,0);b++;}while(a.f.b>1&&em(a)>xg()){g=bj(a,0);dj(a,0);hk(e,g);}}else if(!c){e=null;d=b-1;if(d>=0){e=jd(dv(f.f,d),15);}else{break;}while(em(a)<xg()){if(e.f.b>0){g=bj(e,e.f.b-1);lk(e,g);kk(a,g,0);}else if(d>0){d--;e=jd(dv(f.f,d),15);}else{break;}}if(em(a)>xg()){g=bj(a,0);dj(a,0);hk(e,g);}}else{break;}}while(!c){if(jd(dv(f.f,0),15).f.b==0){gv(f.f,0);dj(f.g,0);}else{break;}}}
function hq(d,b){var a,c;a=cq(d,b);if(a>=0){gq(d,a);c=Er(b,61);if(c>=1){uf();zf(fs(b,c+1));}}}
function gq(d,b){var a,c;if(d.d!=b){a=jd(dv(d.e,d.d),16);gm(a.c,'selected');d.d=b;c=jd(dv(d.e,b),16);bm(c.c,'selected');nj(d.a,b);}}
function iq(e,d,a){var b,c;c=cq(e,d);if(c>=0){b=jd(dv(e.e,c),16);tj(b.a,a);}}
function jq(a){var b;b=rj(new pj(),a);km(b,'j1holpanel');return b;}
function kq(a){var b,c,d,e;d=vl(new ol());e=vl(new ol());b=vl(new ol());c=vl(new ol());km(d,'d7');km(e,'d7v4');km(b,'cornerBL');km(c,'cornerBR');xl(c,a);xl(b,c);xl(e,b);xl(d,e);return d;}
function lq(b,d){var a,c;c=vl(new ol());a=qk(new ok(),b,d);km(c,'j1holtab');xl(c,a);km(a,'j1holtablink');return c;}
function mq(d){var a,b,c,e;e=null;a=d.i;b=ue(a);while(b!==null){c=pe(b,'name');if(c!==null&&Cr(c,'j1holtabname')){e=pe(b,'content');break;}else{b=we(b);}}return e;}
function nq(c){var a,b;b=c;a=(-1);while((a=Er(b,95))>=0){if(a==0){b=fs(b,1);}else{b=gs(b,0,a)+id(32)+fs(b,a+1);}}return b;}
function vp(){}
_=vp.prototype=new rr();_.tI=0;_.b=false;_.c=null;_.d=0;function xp(f,b,g,d,c,a,e){f.b=b;f.d=g;f.c=d;f.a=a;return f;}
function wp(){}
_=wp.prototype=new rr();_.tI=32;_.a=null;_.b=null;_.c=null;_.d=null;function pq(){}
_=pq.prototype=new vr();_.tI=33;function uq(a){return String.fromCharCode(a).toUpperCase().charCodeAt(0);}
function vq(){}
_=vq.prototype=new vr();_.tI=34;function Dq(b,a){wr(b,a);return b;}
function Cq(){}
_=Cq.prototype=new vr();_.tI=35;function ar(b,a){wr(b,a);return b;}
function Fq(){}
_=Fq.prototype=new vr();_.tI=36;function dr(b,a){wr(b,a);return b;}
function cr(){}
_=cr.prototype=new vr();_.tI=37;function or(){or=rx;{qr();}}
function qr(){or();pr=/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/i;}
var pr=null;function gr(){gr=rx;or();}
function hr(a){gr();return os(a);}
function ir(){}
_=ir.prototype=new vr();_.tI=38;function lr(b,a){wr(b,a);return b;}
function kr(){}
_=kr.prototype=new vr();_.tI=39;function zr(b,a){return b.charCodeAt(a);}
function Br(b,a){return b.lastIndexOf(a)!= -1&&b.lastIndexOf(a)==b.length-a.length;}
function Dr(b,a){if(!kd(a,1))return false;return ks(b,a);}
function Cr(b,a){if(a==null)return false;return b==a||b.toLowerCase()==a.toLowerCase();}
function Er(b,a){return b.indexOf(String.fromCharCode(a));}
function Fr(b,a){return b.indexOf(a);}
function as(c,b,a){return c.indexOf(b,a);}
function bs(a){return a.length;}
function cs(b,a){return ds(b,a,0);}
function ds(j,i,g){var a=new RegExp(i,'g');var h=[];var b=0;var k=j;var e=null;while(true){var f=a.exec(k);if(f==null||(k==''||b==g-1&&g>0)){h[b]=k;break;}else{h[b]=k.substring(0,f.index);k=k.substring(f.index+f[0].length,k.length);a.lastIndex=0;if(e==k){h[b]=k.substring(0,1);k=k.substring(1);}e=k;b++;}}if(g==0){for(var c=h.length-1;c>=0;c--){if(h[c]!=''){h.splice(c+1,h.length-(c+1));break;}}}var d=js(h.length);var c=0;for(c=0;c<h.length;++c){d[c]=h[c];}return d;}
function es(b,a){return Fr(b,a)==0;}
function fs(b,a){return b.substr(a,b.length-a);}
function gs(c,a,b){return c.substr(a,b-a);}
function hs(d){var a,b,c;c=bs(d);a=dd('[C',[0],[(-1)],[c],0);for(b=0;b<c;++b)a[b]=zr(d,b);return a;}
function is(c){var a=c.replace(/^(\s*)/,'');var b=a.replace(/\s*$/,'');return b;}
function js(a){return dd('[Ljava.lang.String;',[0],[1],[a],null);}
function ks(a,b){return String(a)==b;}
function ls(a){return Dr(this,a);}
function ns(){var a=ms;if(!a){a=ms={};}var e=':'+this;var b=a[e];if(b==null){b=0;var f=this.length;var d=f<64?1:f/32|0;for(var c=0;c<f;c+=d){b<<=1;b+=this.charCodeAt(c);}b|=0;a[e]=b;}return b;}
function os(a){return ''+a;}
_=String.prototype;_.eQ=ls;_.hC=ns;_.tI=2;var ms=null;function rs(a){return t(a);}
function xs(b,a){wr(b,a);return b;}
function ws(){}
_=ws.prototype=new vr();_.tI=40;function As(d,a,b){var c;while(a.x()){c=a.A();if(b===null?c===null:b.eQ(c)){return a;}}return null;}
function Cs(a){throw xs(new ws(),'add');}
function Ds(b){var a;a=As(this,this.y(),b);return a!==null;}
function zs(){}
_=zs.prototype=new rr();_.k=Cs;_.m=Ds;_.tI=0;function it(b,a){throw dr(new cr(),'Index: '+a+', Size: '+b.b);}
function jt(a){return at(new Fs(),a);}
function kt(b,a){throw xs(new ws(),'add');}
function lt(a){this.j(this.jb(),a);return true;}
function mt(e){var a,b,c,d,f;if(e===this){return true;}if(!kd(e,17)){return false;}f=jd(e,17);if(this.jb()!=f.jb()){return false;}c=jt(this);d=f.y();while(ct(c)){a=dt(c);b=dt(d);if(!(a===null?b===null:a.eQ(b))){return false;}}return true;}
function nt(){var a,b,c,d;c=1;a=31;b=jt(this);while(ct(b)){d=dt(b);c=31*c+(d===null?0:d.hC());}return c;}
function ot(){return jt(this);}
function pt(a){throw xs(new ws(),'remove');}
function Es(){}
_=Es.prototype=new zs();_.j=kt;_.k=lt;_.eQ=mt;_.hC=nt;_.y=ot;_.fb=pt;_.tI=41;function at(b,a){b.c=a;return b;}
function ct(a){return a.a<a.c.jb();}
function dt(a){if(!ct(a)){throw new nx();}return a.c.v(a.b=a.a++);}
function et(a){if(a.b<0){throw new Fq();}a.c.fb(a.b);a.a=a.b;a.b=(-1);}
function ft(){return ct(this);}
function gt(){return dt(this);}
function Fs(){}
_=Fs.prototype=new rr();_.x=ft;_.A=gt;_.tI=0;_.a=0;_.b=(-1);function ou(f,d,e){var a,b,c;for(b=kw(f.p());dw(b);){a=ew(b);c=a.t();if(d===null?c===null:d.eQ(c)){if(e){fw(b);}return a;}}return null;}
function pu(b){var a;a=b.p();return st(new rt(),b,a);}
function qu(b){var a;a=uw(b);return au(new Ft(),b,a);}
function ru(a){return ou(this,a,false)!==null;}
function su(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!kd(d,18)){return false;}f=jd(d,18);c=pu(this);e=f.z();if(!zu(c,e)){return false;}for(a=ut(c);Bt(a);){b=Ct(a);h=this.w(b);g=f.w(b);if(h===null?g!==null:!h.eQ(g)){return false;}}return true;}
function tu(b){var a;a=ou(this,b,false);return a===null?null:a.u();}
function uu(){var a,b,c;b=0;for(c=kw(this.p());dw(c);){a=ew(c);b+=a.hC();}return b;}
function vu(){return pu(this);}
function wu(a,b){throw xs(new ws(),'This map implementation does not support modification');}
function qt(){}
_=qt.prototype=new rr();_.l=ru;_.eQ=su;_.w=tu;_.hC=uu;_.z=vu;_.eb=wu;_.tI=42;function zu(e,b){var a,c,d;if(b===e){return true;}if(!kd(b,19)){return false;}c=jd(b,19);if(c.jb()!=e.jb()){return false;}for(a=c.y();a.x();){d=a.A();if(!e.m(d)){return false;}}return true;}
function Au(a){return zu(this,a);}
function Bu(){var a,b,c;a=0;for(b=this.y();b.x();){c=b.A();if(c!==null){a+=c.hC();}}return a;}
function xu(){}
_=xu.prototype=new zs();_.eQ=Au;_.hC=Bu;_.tI=43;function st(b,a,c){b.a=a;b.b=c;return b;}
function ut(b){var a;a=kw(b.b);return zt(new yt(),b,a);}
function vt(a){return this.a.l(a);}
function wt(){return ut(this);}
function xt(){return this.b.a.c;}
function rt(){}
_=rt.prototype=new xu();_.m=vt;_.y=wt;_.jb=xt;_.tI=44;function zt(b,a,c){b.a=c;return b;}
function Bt(a){return a.a.x();}
function Ct(b){var a;a=b.a.A();return a.t();}
function Dt(){return Bt(this);}
function Et(){return Ct(this);}
function yt(){}
_=yt.prototype=new rr();_.x=Dt;_.A=Et;_.tI=0;function au(b,a,c){b.a=a;b.b=c;return b;}
function cu(b){var a;a=kw(b.b);return hu(new gu(),b,a);}
function du(a){return tw(this.a,a);}
function eu(){return cu(this);}
function fu(){return this.b.a.c;}
function Ft(){}
_=Ft.prototype=new zs();_.m=du;_.y=eu;_.jb=fu;_.tI=0;function hu(b,a,c){b.a=c;return b;}
function ju(a){return a.a.x();}
function ku(a){var b;b=a.a.A().u();return b;}
function lu(){return ju(this);}
function mu(){return ku(this);}
function gu(){}
_=gu.prototype=new rr();_.x=lu;_.A=mu;_.tI=0;function Du(a){{bv(a);}}
function Eu(a){Du(a);return a;}
function Fu(c,a,b){if(a<0||a>c.b){it(c,a);}iv(c.a,a,b);++c.b;}
function av(b,a){rv(b.a,b.b++,a);return true;}
function bv(a){a.a=E();a.b=0;}
function dv(b,a){if(a<0||a>=b.b){it(b,a);}return nv(b.a,a);}
function ev(b,a){return fv(b,a,0);}
function fv(c,b,a){if(a<0){it(c,a);}for(;a<c.b;++a){if(mv(b,nv(c.a,a))){return a;}}return (-1);}
function gv(c,a){var b;b=dv(c,a);pv(c.a,a,1);--c.b;return b;}
function hv(c,b){var a;a=ev(c,b);if(a==(-1)){return false;}gv(c,a);return true;}
function jv(a,b){Fu(this,a,b);}
function kv(a){return av(this,a);}
function iv(a,b,c){a.splice(b,0,c);}
function lv(a){return ev(this,a)!=(-1);}
function mv(a,b){return a===b||a!==null&&a.eQ(b);}
function ov(a){return dv(this,a);}
function nv(a,b){return a[b];}
function qv(a){return gv(this,a);}
function pv(a,c,b){a.splice(c,b);}
function rv(a,b,c){a[b]=c;}
function sv(){return this.b;}
function Cu(){}
_=Cu.prototype=new Es();_.j=jv;_.k=kv;_.m=lv;_.v=ov;_.fb=qv;_.jb=sv;_.tI=45;_.a=null;_.b=0;function rw(){rw=rx;yw=Ew();}
function ow(a){{qw(a);}}
function pw(a){rw();ow(a);return a;}
function qw(a){a.a=E();a.d=ab();a.b=od(yw,A);a.c=0;}
function sw(b,a){if(kd(a,1)){return cx(b.d,jd(a,1))!==yw;}else if(a===null){return b.b!==yw;}else{return bx(b.a,a,a.hC())!==yw;}}
function tw(a,b){if(a.b!==yw&&ax(a.b,b)){return true;}else if(Dw(a.d,b)){return true;}else if(Bw(a.a,b)){return true;}return false;}
function uw(a){return iw(new Fv(),a);}
function vw(c,a){var b;if(kd(a,1)){b=cx(c.d,jd(a,1));}else if(a===null){b=c.b;}else{b=bx(c.a,a,a.hC());}return b===yw?null:b;}
function ww(c,a,d){var b;if(kd(a,1)){b=fx(c.d,jd(a,1),d);}else if(a===null){b=c.b;c.b=d;}else{b=ex(c.a,a,d,a.hC());}if(b===yw){++c.c;return null;}else{return b;}}
function xw(c,a){var b;if(kd(a,1)){b=ix(c.d,jd(a,1));}else if(a===null){b=c.b;c.b=od(yw,A);}else{b=hx(c.a,a,a.hC());}if(b===yw){return null;}else{--c.c;return b;}}
function zw(e,c){rw();for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.k(a[f]);}}}}
function Aw(d,a){rw();for(var c in d){if(c.charCodeAt(0)==58){var e=d[c];var b=zv(c.substring(1),e);a.k(b);}}}
function Bw(f,h){rw();for(var e in f){if(e==parseInt(e)){var a=f[e];for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.u();if(ax(h,d)){return true;}}}}return false;}
function Cw(a){return sw(this,a);}
function Dw(c,d){rw();for(var b in c){if(b.charCodeAt(0)==58){var a=c[b];if(ax(d,a)){return true;}}}return false;}
function Ew(){rw();}
function Fw(){return uw(this);}
function ax(a,b){rw();if(a===b){return true;}else if(a===null){return false;}else{return a.eQ(b);}}
function dx(a){return vw(this,a);}
function bx(f,h,e){rw();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.t();if(ax(h,d)){return c.u();}}}}
function cx(b,a){rw();return b[':'+a];}
function gx(a,b){return ww(this,a,b);}
function ex(f,h,j,e){rw();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.t();if(ax(h,d)){var i=c.u();c.ib(j);return i;}}}else{a=f[e]=[];}var c=zv(h,j);a.push(c);}
function fx(c,a,d){rw();a=':'+a;var b=c[a];c[a]=d;return b;}
function hx(f,h,e){rw();var a=f[e];if(a){for(var g=0,b=a.length;g<b;++g){var c=a[g];var d=c.t();if(ax(h,d)){if(a.length==1){delete f[e];}else{a.splice(g,1);}return c.u();}}}}
function ix(c,a){rw();a=':'+a;var b=c[a];delete c[a];return b;}
function vv(){}
_=vv.prototype=new qt();_.l=Cw;_.p=Fw;_.w=dx;_.eb=gx;_.tI=46;_.a=null;_.b=null;_.c=0;_.d=null;var yw;function xv(b,a,c){b.a=a;b.b=c;return b;}
function zv(a,b){return xv(new wv(),a,b);}
function Av(b){var a;if(kd(b,20)){a=jd(b,20);if(ax(this.a,a.t())&&ax(this.b,a.u())){return true;}}return false;}
function Bv(){return this.a;}
function Cv(){return this.b;}
function Dv(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.hC();}if(this.b!==null){b=this.b.hC();}return a^b;}
function Ev(a){var b;b=this.b;this.b=a;return b;}
function wv(){}
_=wv.prototype=new rr();_.eQ=Av;_.t=Bv;_.u=Cv;_.hC=Dv;_.ib=Ev;_.tI=47;_.a=null;_.b=null;function iw(b,a){b.a=a;return b;}
function kw(a){return bw(new aw(),a.a);}
function lw(c){var a,b,d;if(kd(c,20)){a=jd(c,20);b=a.t();if(sw(this.a,b)){d=vw(this.a,b);return ax(a.u(),d);}}return false;}
function mw(){return kw(this);}
function nw(){return this.a.c;}
function Fv(){}
_=Fv.prototype=new xu();_.m=lw;_.y=mw;_.jb=nw;_.tI=48;function bw(c,b){var a;c.c=b;a=Eu(new Cu());if(c.c.b!==(rw(),yw)){av(a,xv(new wv(),null,c.c.b));}Aw(c.c.d,a);zw(c.c.a,a);c.a=jt(a);return c;}
function dw(a){return ct(a.a);}
function ew(a){return a.b=jd(dt(a.a),20);}
function fw(a){if(a.b===null){throw ar(new Fq(),'Must call next() before remove().');}else{et(a.a);xw(a.c,a.b.t());a.b=null;}}
function gw(){return dw(this);}
function hw(){return ew(this);}
function aw(){}
_=aw.prototype=new rr();_.x=gw;_.A=hw;_.tI=0;_.a=null;_.b=null;function nx(){}
_=nx.prototype=new vr();_.tI=49;function oq(){kp(Do(new zn()));}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{oq();}catch(a){b(d);}else{oq();}}
var nd=[{},{},{1:1},{3:1},{3:1},{3:1},{3:1},{2:1},{6:1},{6:1},{3:1,14:1},{3:1,14:1},{3:1,14:1},{2:1,4:1},{2:1},{7:1},{9:1,11:1,12:1,13:1},{9:1,11:1,12:1,13:1},{9:1,11:1,12:1,13:1},{9:1,11:1,12:1,13:1},{9:1,11:1,12:1,13:1},{9:1,11:1,12:1,13:1},{9:1,11:1,12:1,13:1},{9:1,11:1,12:1,13:1},{9:1,11:1,12:1,13:1,15:1},{9:1,11:1,12:1,13:1},{9:1,10:1,11:1,12:1,13:1},{7:1},{9:1,11:1,12:1,13:1},{9:1,11:1,12:1,13:1},{5:1},{8:1},{16:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{17:1},{18:1},{19:1},{19:1},{17:1},{18:1},{20:1},{19:1},{3:1}];if (com_sun_javaone_HoLTemplate) {  var __gwt_initHandlers = com_sun_javaone_HoLTemplate.__gwt_initHandlers;  com_sun_javaone_HoLTemplate.onScriptLoad(gwtOnLoad);}})();