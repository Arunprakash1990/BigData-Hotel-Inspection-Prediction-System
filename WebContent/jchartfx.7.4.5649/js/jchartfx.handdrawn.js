(function(){var A=window.cfx,c=window.sfx,L={Version:"7.4.5649.31763"};A.handdrawn=L;var h=function(){};h.k=function(c,t,k,p,m,l,q,e,a){l=h.j(p/2,l,q);t+=p/2;k+=m/2;for(m=0;m<l.length;m++)l[m].x=l[m].x+t+h.c(e,a),l[m].y=l[m].y+k+h.c(e,a);c.j(l);return l[l.length-1]};h.d=function(v,t,k,p,m,l,q){var e=p-t,a=m-k,b=c.a.d(e),a=c.a.d(a),f=0,d=0,g=0,u=0;20>b||20>a?0!=e?(f=t,d=k+h.b(l,q),g=t,u=k+h.b(l,q)):(f=t+h.b(l,q),d=k,g=t+h.b(l,q),u=k):(f=(2*t+p)/3,d=(2*k+m)/3,g=(t+2*p)/3,u=(k+2*m)/3,e=h.c(l,1.5*q),
l=h.c(l,1.5*q),b>a?(d+=e,u+=l):(f+=e,g+=l));v.i(t,k,f,d,g,u,p,m)};h.j=function(v,t,k){0>t&&(t+=360);t=t*c.a.c/180;k=k*c.a.c/180;var p=t+k,m=!1;0>k&&(k=t,t=p,p=k,m=!0);0>t&&(t+=6.28318530717959,p+=6.28318530717959);var l=t;k=c.a.k(l/1.5707963267949);for(var p=c.a.p(6.28318530717959,p-t),q=1,e=p;1E-5<e;){var a=l+c.a.p(e,1.5707963267949),b=c.a.k(a/1.5707963267949);k!=b&&(a=1.5707963267949*(k+1));q+=3;e-=a-l;l=a;k=b}e=c.f._ca(q);l=t;k=c.a.k(l/1.5707963267949);t=v*c.a.i(l);var f=v*c.a.t(l),d=0,g=0;m?(g=
q-1,d=-1):(g=0,d=1);e[g].x=t;e[g].y=f;for(g+=d;1E-5<p;)a=l+c.a.p(p,1.5707963267949),b=c.a.k(a/1.5707963267949),k!=b&&(a=1.5707963267949*(k+1)),m=v*c.a.i(a),q=v*c.a.t(a),l=a-l,g=h.m(v,l,k,t,f,m,q,e,g,d),p-=l,6.28318530717959<=a&&(b=a=0),l=a,k=b,t=m,f=q;return e};h.m=function(h,t,k,p,m,l,q,e,a,b){var f=1,d=1;3==k?d=-1:2==k?d=f=-1:1==k&&(f=-1);.01>c.a.d(t-1.5707963267949)?(p=.5522847498*h,3==k||1==k?(e[a].x=p*f,e[a].y=h*d,a+=b,e[a].x=h*f,e[a].y=p*d):(e[a].x=h*f,e[a].y=p*d,a+=b,e[a].x=p*f,e[a].y=h*d)):
(h=p*p+m*m,k=h+p*l+m*q,h=1.333333*(c.a.u(2*h*k)-k)/(p*q-m*l),e[a].x=p-h*m,e[a].y=m+h*p,a+=b,e[a].x=l+h*q,e[a].y=q-h*l);a+=b;e[a].x=l;e[a].y=q;return a+b};h.h=function(v,t,k,p,m,l,q,e){var a=(new c.aA)._0aA();h.k(a,v,t,k,p,m,l,q,e);return a};h.l=function(v,t,k,p,m,l){var q=(new c.aA)._0aA(),e=c.f._ca(13);e[0]._i1(k,p/2);e[1]._i1(h.a(1,m,l,k),h.a(.775,m,l,p));e[2]._i1(h.a(.775,m,l,k),h.a(1,m,l,p));e[3]._i1(h.a(.5,m,l,k),h.a(1,m,l,p));e[4]._i1(h.a(.225,m,l,k),h.a(1,m,l,p));e[5]._i1(h.a(0,m,l,k),h.a(.775,
m,l,p));e[6]._i1(h.a(0,m,l,k),h.a(.5,m,l,p));e[7]._i1(h.a(0,m,l,k),h.a(.225,m,l,p));e[8]._i1(h.a(.225,m,l,k),h.a(0,m,l,p));e[9]._i1(h.a(.5,m,l,k),h.a(0,m,l,p));e[10]._i1(h.a(.775,m,l,k),h.a(0,m,l,p));e[11]._i1(h.a(1,m,l,k),h.a(.225,m,l,p));e[12]._i1(k,p/2);for(k=0;k<e.length;k++)e[k].x+=v,e[k].y+=t;q.j(e);return q};h.f=function(v,t,k,p,m,l,q){var e=(new c.aA)._0aA(),a=0,b=!0;5>c.a.d(v-k)?b=70<c.a.d(t-p):5>c.a.d(t-p)&&(b=70<c.a.d(v-k));b&&(a=h.c(m,q),h.c(m,q));h.d(e,v,t,k+a,p+a,m,l);return e};h.e=
function(v,t,k){v.hasArcs=!1;var p=v.c();if(0==p.length)return v;v=v.d();for(var m=(new c.aA)._0aA(),l=p[0]._nc(),q=0,q=0==v[0]?1:0;q<v.length;){var e=p[q]._nc(),a=v[q]&15;if(1==a||0==a)0==a&&0!=q?m.H():h.d(m,l.x,l.y,e.x,e.y,t,k),q++,l._cf(e);else if(3==a){var a=p[q+1]._nc(),b=p[q+2]._nc();e.x+=h.b(t,k);e.y+=h.b(t,k);a.x+=h.b(t,k);a.y+=h.b(t,k);b.x+=h.b(t,k-.5);b.y+=h.b(t,k-.5);m.i(l.x,l.y,e.x,e.y,a.x,a.y,b.x,b.y);l._cf(b);q+=3}else 4==a&&(a=p[q+1],b=p[q+2],l._cf(h.k(m,e.x,e.y,a.x,a.y,b.x,b.y,t,k)),
q+=3)}0!=(v[v.length-1]&128)&&m.E();return m};h.g=function(v,t,k,p,m,l,q,e){if(k<=e)return h.f(v,t,v,t+p,m,l,0);if(p<=e)return h.f(v,t,v+k,t,m,l,0);e=c.a.p(k/2,q+m.d()*l);var a=c.a.p(k/2,q+m.d()*l),b=c.a.p(k/2,q+m.d()*l),f=c.a.p(k/2,q+m.d()*l),d=c.a.p(p/2,q+m.d()*l),g=c.a.p(p/2,q+m.d()*l),u=c.a.p(p/2,q+m.d()*l),r=c.a.p(p/2,q+m.d()*l);q=(new c.aA)._0aA();var n=c.f._ca(25);n[0]._i1(0,d);n[1]._i1(0,d/2);n[2]._i1(e/2,0);n[3]._i1(e,0);n[4]._i1(k/2,h.b(m,l));n[5]._i1(k/2,h.b(m,l));n[6]._i1(k-a,0);n[7]._i1(k-
a/2,0);n[8]._i1(k,g/2);n[9]._i1(k,g);n[10]._i1(h.a(1,m,l,k),p/2);n[11]._i1(h.a(1,m,l,k),p/2);n[12]._i1(k,p-r);n[13]._i1(k,p-r/2);n[14]._i1(k-f/2,p);n[15]._i1(k-f,p);n[16]._i1(k/2,h.a(1,m,l,p));n[17]._i1(k/2,h.a(1,m,l,p));n[18]._i1(b,p);n[19]._i1(b/2,p);n[20]._i1(0,p-u/2);n[21]._i1(0,p-u);n[22]._i1(h.b(m,l),p/2);n[23]._i1(h.b(m,l),p/2);n[24]._i1(0,d);for(k=0;k<n.length;k++)n[k].x+=v,n[k].y+=t;q.j(n);return q};h.c=function(c,h){return 2*c.d()*h-h};h.a=function(c,h,k,p){var m=h.d();1!=h.b()%3&&(m*=-1);
return p*c+m*k};h.b=function(c,h){var k=c.d();1!=c.b()%3&&(k*=-1);return k*h};var F=function t(){t._ic();this.a=this.i=0;this.d=!1;this.e=this.f=null};F.prototype={_0dO:function(){this.b=new c.c;return this},sg:function(c){this.f=c.b()},sj:function(c){this.e=c.n()},l:function(c,k){},h:function(c){this.b.x=c.x;this.b.y=c.y;this.b.w=c.w;this.b.h=c.h}};F._dt("CWHR",c.SA,0);var G=function k(){k._ic();this.m=this.p=null;this.o=0;this.n=null;this.q=this.r=0};G.prototype={_0dP:function(){this._bc._0dO.call(this);
this.u=new c.d;return this},sv:function(c){this.p=c.k()},st:function(k){this.m=new c.at;this.m.sb(k.b());this.m.sd(k.d())},k:function(c,h,m){1<=m&&(0==this.o?c.idI(this.n,this.p,this.f,this.r,this.q,this.m):1==this.o&&c.idG(this.n,this.p,this.f,this.u,this.m))}};G._dt("CWHR",F,0);var J=function p(){p._ic();this.m=this.n=0};J.prototype={_0dQ:function(){this._bc._0dO.call(this);this.d=!0;return this},k:function(c,h,l){switch(this.n){case 0:c.sidf(this.m)}}};J._dt("CWHR",F,0);var M=function m(){m._ic()};
M.prototype={_0dR:function(h,l,q){this._bc._0dO.call(this);this.m=new c.d;this.m._cf(h);this.a=1;null!=l?(this.sg(l),this.d=!0):this.sj(q);return this},l:function(c,l){0==this.b.w&&this.h(this.m);l._cf(this.b)},k:function(c,l,h){null!=this.e?c.idD(this.e,this.m):c.idT(this.f,this.m)}};M._dt("CWHR",F,0);var H=function l(){l._ic()};H.prototype={_0dS:function(c,h,e){this._bc._0dO.call(this);this.m=c.D();null!=h?(this.sg(h),this.a=1,this.d=!0):(this.sj(e),this.a=this.m.c().length,this.d=50<this.a);return this},
l:function(c,h){0==this.b.w&&this.h(this.m.F());h._cf(this.b)},k:function(h,q,e){e=this.m;if(q<this.a){e=(new c.aA)._0aA();for(var a=this.m.d(),b=this.m.c(),f=0,d=(new c.f)._01e(0,0),g=new c.f;f<q;f++){var u=a[f];g._cf(b[f]);0==u?d._cf(g):1==u?(e.r(d,g),d._cf(g)):3==u&&(u=b[f+2],e.h(d,g,b[f+1],u),d._cf(u),f+=2)}}null!=this.e?h.idv(this.e,e):h.idO(this.f,e);e!=this.m&&e._d()}};H._dt("CWHR",F,0);var I=function q(){q._ic();this.m=null};I.prototype={_0dT:function(c){this._bc._0dO.call(this);this.d=!0;
null!=c&&(this.m=c.b());return this},l:function(c,e){null!=this.m&&(0==this.b.w&&this.h(this.m.c(c)),e._cf(this.b))},k:function(c,e,a){c.sidb(this.m)}};I._dt("CWHR",F,0);var K=function e(){e._ic();this.j=this.k=this.l=null;this.i=0;this.h=!1;this.b=this.g=0};K.prototype={_0dU:function(e){this.a=(new c._L)._0_L();this.c=e;this.f=this.d=-1;return this},ida:function(){return 0},sida:function(e){},idb:function(){return this.l},sidb:function(e){this.l=e;e=(new I)._0dT(e);this.a.Si(e)},idc:function(){return this.j},
sidc:function(e){this.j=e},idd:function(){return this.k},sidd:function(e){this.k=e},ide:function(){return this.c.ide()},side:function(e){this.c.side(e)},idf:function(){return this.g},sidf:function(e){this.g=e;var a=(new J)._0dQ();a.n=0;a.m=e;this.a.Si(a)},idg:function(){throw new c.T;},sidg:function(e){throw new c.T;},_d:function(){throw new c.T;},idh:function(e,a,b,f,d,g,h){throw new c.T;},idi:function(e,a,b,f,d,g,h){throw new c.T;},idj:function(e,a,b,f,d){throw new c.T;},idk:function(e,a,b,f,d){throw new c.T;
},idl:function(e,a,b,f,d){throw new c.T;},idm:function(e,a){throw new c.T;},idn:function(e,a,b){throw new c.T;},ido:function(e,a,b){throw new c.T;},idp:function(e,a,b,f){throw new c.T;},idq:function(e,a,b,f){throw new c.T;},idr:function(e,a,b,f,d,g,h,r){throw new c.T;},ids:function(e,a,b,f,d,g,h,r){throw new c.T;},idt:function(e,a,b,f,d){throw new c.T;},idu:function(e,a,b,f,d){throw new c.T;},idv:function(e,a){var b=(new H)._0dS(a,null,e);this.b+=b.a;this.a.Si(b)},idw:function(e,a,b,f){throw new c.T;
},idx:function(e,a){throw new c.T;},idy:function(e,a){throw new c.T;},idz:function(e,a){throw new c.T;},idA:function(e,a){throw new c.T;},idB:function(e,a){throw new c.T;},idC:function(e,a){throw new c.T;},idD:function(e,a){throw new c.T;},idE:function(e,a,b,f,d){throw new c.T;},idF:function(e,a,b,f,d){throw new c.T;},idG:function(e,a,b,f,d){var g=(new G)._0dP();g.n=e;g.sv(a);g.sg(b);g.st(d);g.u._cf(f);g.o=1;this.a.Si(g);this.c.idG(e,a,b,f,d)},idH:function(e,a,b,f,d,g){var c=(new G)._0dP();c.n=e;
c.sv(a);c.sg(b);c.st(g);c.r=f;c.q=d;this.a.Si(c);this.c.idH(e,a,b,f,d,g)},idI:function(e,a,b,f,d,g){this.idH(e,a,b,f,d,g)},idJ:function(e,a,b,f,d,g){throw new c.T;},idK:function(e,a,b,f,d,g){throw new c.T;},idL:function(e,a,b,f,d,g,h){throw new c.T;},idM:function(e,a,b,f,d){throw new c.T;},idN:function(e,a,b,f,d){throw new c.T;},idO:function(e,a){var b=(new H)._0dS(a,e,null);this.b+=b.a;this.a.Si(b)},idP:function(e,a,b,f){throw new c.T;},idQ:function(e,a){throw new c.T;},idR:function(e,a){throw new c.T;
},idS:function(e,a){this.e(e,c.d.r(a))},idT:function(e,a){this.e(e,a)},idU:function(e,a,b,f,d){this.e(e,(new c.d)._02c(a,b,f,d))},idV:function(e,a,b,f,d){this.e(e,(new c.d)._02c(a,b,f,d))},e:function(e,a){var b=(new M)._0dR(a,e,null);this.b+=b.a;this.a.Si(b)},idW:function(e,a){throw new c.T;},idX:function(e){return this.c.idX(e)},n:function(e,a){var b=1<=e;this.f=-1;if(-1!=this.d){var f=this.d+1;if(f<this.a.Se()){var d=this.b*e,g=this.a.So(f);10>g.a||!b||!(this.i+g.a>d||b)||(b=g,-1!=g.i&&(b=this.a.So(g.i)),
b.l(this.c.ide(),a),this.f=f)}}},idY:function(e,a){return this.c.idY(e,a)},idZ:function(e,a){throw new c.T;},m:function(e,a){if(!this.h){this.h=!0;for(var b=this.a.Se(),f=0,d=0;d<b;d++){var g=this.a.So(d);g.d||(d!=f&&(this.a.Sn(d),this.a.Sl(f,g)),f++)}f=-1;for(d=0;d<b;d++)g=this.a.So(d),c.V.E(g,I)?f=d:g.i=f}for(var b=0,d=this.b*a,f=0,h=this.a.Sb();1==h.SK();){g=h.SM();g.k(e,d-b,a);b+=g.a;if(b>d)break;this.d=f;this.i=b;f++}},renderToolBarCommand:function(e,a,b){throw new c.T;},id0:function(e,a){throw new c.T;
},id1:function(e,a,b){throw new c.T;},id2:function(e,a){throw new c.T;},id3:function(e,a,b){throw new c.T;}};K._dt("CWHR",c.SA,0,A.ic_,c.Su);var D=function a(){a._ic();this.B=null;this.H=0;this.p=!1;this.G=null;this.o=this.h=this.c=0;this.z=this.A=null;this.n=0;this.y=null;this.g=!1;this.E=this.a=this.F=null;this.e=0;this.x=this.l=!1;this.b=null;this.k=0;this.j=null;this.d=this.i=0;this.w=null;this._0_1()};L.HandDrawn=D;D.prototype={_0_1:function(){this.b=0!=D.m?(new c.U)._01U(D.m):new c.U;this.e=
this.d=this.c=this.k=3;this.g=!0;this.n=3;this.h=.25;this.o=20;this.w=(new c.ar)._0ar(c.m.l(0,255,255,255));this.i=1;return this},ida:function(){var a=1;this.g&&(a|=128);this.F.st&&(a|=8);return a|52},sida:function(a){this.p=0!=(a&1024)},idb:function(){return this.a.idb()},sidb:function(a){this.a.sidb(a)},idc:function(){return this.E},sidc:function(a){this.E=a;this.F.CH(a)},idd:function(){return this.G},sidd:function(a){this.x?this.x=!1:this.l=!1;"number"==typeof a&&(a=null);this.G=a;var b=c.V.C(a,
A.ifh);null!=b&&(b=b.ifi(2),"Border"==b||"PlotArea"==b?this.l=!0:"BorderNext"==b&&(this.x=this.l=!0));this.F.CO(a)},getFillStrokeAngle:function(){return this.o},setFillStrokeAngle:function(a){this.o=a;this.f()},getFillStrokeCurvePercentage:function(){return this.h},setFillStrokeCurvePercentage:function(a){this.h=a;this.f()},getFillStrokeThickness:function(){return this.n},setFillStrokeThickness:function(a){this.n=a;this.f()},getFillWithStrokes:function(){return this.g},setFillWithStrokes:function(a){this.g=
a;this.f()},ide:function(){return this.F},side:function(a){this.F=a;this.a=(new A.bk)._0bk(a)},getMessiness:function(){return this.e},setMessiness:function(a){this.e=a;this.f()},getRandomness:function(){return this.k},setRandomness:function(a){this.c=this.k=a;this.f()},idf:function(){return this.a.idf()},sidf:function(a){this.a.sidf(a)},getStrokeOffsetRandomness:function(){return this.d},setStrokeOffsetRandomness:function(a){this.d=a;this.f()},idg:function(){return this.a.idg()},sidg:function(a){this.a.sidg(a);
this.i=null==a?1:a.b()[0];this.P()},ics:function(a){this.B=c.V.C(a,A.iQ);return!0},P:function(){this.c=this.k/this.i},u:function(){var a=(new c.aA)._0aA();a.Z=!1;return a},_d:function(){},idh:function(a,b,f,d,g,c,h){this.O(a,b,f,d,g,c,h)},idi:function(a,b,f,d,c,h,r){this.O(a,b,f,d,c,h,r)},O:function(a,b,f,d,g,u,r){var n=this.e,z=this.c;if(10>=d||10>=g)z=n=2;for(var w=0,w=1>=n&&0==this.d?1:c.a.o(n,1),n=0;n<w;n++){var y=h.h(b,f,d,g,u,r,this.b,z);this.a.idv(a,y);y._d()}},idj:function(a,b,f,d,c){this.a.idj(a,
b,f,d,c)},idk:function(a,b,f,d,c){this.N(a,b,f,d,c)},idl:function(a,b,f,d,c){this.N(a,b,f,d,c)},N:function(a,b,f,d,g){var u=this.e,r=this.c;if(10>=d||10>=g)r=u=2;for(var n=0,n=1>=u&&0==this.d?1:c.a.o(u,1),u=0;u<n;u++){var z=h.l(b,f,d,g,this.b,r);this.a.idv(a,z);z._d()}},idm:function(a,b){this.a.idm(a,b)},idn:function(a,b,f){this.a.idn(a,b,f)},ido:function(a,b,f){this.a.ido(a,b,f)},idp:function(a,b,f,d){this.a.idp(a,b,f,d)},idq:function(a,b,f,d){this.a.idq(a,b,f,d)},idr:function(a,b,f,d,c,h,r,n){this.a.idr(a,
b,f,d,c,h,r,n)},ids:function(a,b,f,d,g,h,r,n){this.a.ids(a,c.d.r((new c.c)._02c(b.x,b.y,b.w,b.h)),f,d,g,h,r,n)},idt:function(a,b,f,d,c){this.M(a,b,f,d,c)},idu:function(a,b,f,d,c){this.M(a,b,f,d,c)},M:function(a,b,f,d,g){for(var u=0,u=1>=this.e&&0==this.d?1:c.a.o(this.e,1),r=0;r<u;r++){var n=h.f(b,f,d,g,this.b,this.c,this.d);this.a.idv(a,n);n._d()}},t:function(a,b,f){if(1>=this.e&&0==this.d){for(var d=this.u(),g=b[0]._nc(),u=1;u<b.length;u++){var r=b[u]._nc();h.d(d,g.x,g.y,r.x,r.y,this.b,this.c);g._cf(r)}f&&
(r=b[0]._nc(),h.d(d,g.x,g.y,r.x,r.y,this.b,this.c));this.a.idv(a,d);d._d()}else for(var n=c.a.o(this.e,1),u=0;u<n;u++){for(var d=this.u(),g=b[0]._nc(),z=-1,w=1;w<b.length;)r=b[w]._nc(),h.d(d,g.x,g.y,r.x,r.y,this.b,this.c),g._cf(r),w++,w<b.length&&0<this.d&&3<=w-z&&.7<this.b.d()&&(this.a.idv(a,d),d._d(),d=this.u(),g.x+=h.c(this.b,this.d),g.y+=h.c(this.b,this.d),z=w);f&&(r=b[0]._nc(),h.d(d,g.x,g.y,r.x,r.y,this.b,this.c));this.a.idv(a,d);d._d()}},idv:function(a,b){for(var f=this.e,d=0,d=1>=f&&0==this.d?
1:c.a.o(f,1),f=0;f<d;f++){var g=h.e(b,this.b,this.c);this.a.idv(a,g);g._d()}},idw:function(a,b,f,d){this.a.idw(a,b,f,d)},idx:function(a,b){this.t(a,b,!0)},idy:function(a,b){this.t(a,b,!0)},idz:function(a,b){for(var f=b.length,d=1;d<f;d++)this.a.idt(a,b[d-1].x,b[d-1].y,b[d].x,b[d].y);this.a.idt(a,b[f-1].x,b[f-1].y,b[0].x,b[0].y)},idA:function(a,b){this.t(a,b,!1)},idB:function(a,b){this.t(a,b,!1)},idC:function(a,b){this.r(a,b.x,b.y,b.w,b.h)},idD:function(a,b){this.r(a,b.x,b.y,b.w,b.h)},idE:function(a,
b,f,d,c){this.r(a,b,f,d,c)},idF:function(a,b,f,d,c){this.r(a,b,f,d,c)},r:function(a,b,f,d,g){for(var u=this.e,r=0,r=1>=u&&0==this.d?1:c.a.o(u,1),u=0;u<r;u++){var n=h.g(b,f,d,g,this.b,this.c,0,1);this.a.idv(a,n);n._d()}},idG:function(a,b,f,d,c){this.a.idG(a,b,f,d,c)},idH:function(a,b,f,d,c,h){this.a.idH(a,b,f,d,c,h)},idI:function(a,b,f,d,c,h){this.a.idI(a,b,f,d,c,h)},idJ:function(a,b,f,d,c,h){this.a.idJ(a,b,f,d,c,h)},idK:function(a,b,c,d,g,h){this.a.idK(a,b,c,d,g,h)},idL:function(a,b,c,d,g,h,r){this.a.idL(a,
b,c,d,g,h,r)},idM:function(a,b,c,d,g){this.L(a,b,c,d,g)},idN:function(a,b,c,d,g){this.L(a,b,c,d,g)},L:function(a,b,c,d,g){b=h.h(b,c,d,g,0,360,this.b,this.c);this.K(a,b,b);b._d()},idO:function(a,b){this.R(a,b)},R:function(a,b){var c=h.e(b,this.b,this.c);this.K(a,b,c);c._d()},K:function(a,b,f){var d=!0;if(this.g&&!this.p){b.hasArcs=!1;var g=b.c();0!=g.length&&(b=b.d(),g=this.I(g,b),this.v(a,g.x,g.y,g.w,g.h)&&(d=this.a.idb(),this.a.sidb((new c.aq)._01aq(f)),this.D(a,g.x,g.y,g.w,g.h,this.b),this.a.sidb(d),
d=!1))}d&&this.a.idO(a,f)},idP:function(a,b,c,d){this.a.idP(a,b,c,d)},idQ:function(a,b){this.J(a,b)},idR:function(a,b){this.J(a,b)},J:function(a,b){var f=this.Q(b);if(this.g&&!this.p){var d=this.I(b,null);if(this.v(a,d.x,d.y,d.w,d.h)){var g=this.a.idb();this.a.sidb((new c.aq)._01aq(f));this.D(a,d.x,d.y,d.w,d.h,this.b);this.a.sidb(g);return}}f=h.e(f,this.b,this.c);this.a.idO(a,f);f._d()},idS:function(a,b){this.q(a,b.x,b.y,b.w,b.h,this.b)},idT:function(a,b){this.q(a,b.x,b.y,b.w,b.h,this.b)},idU:function(a,
b,c,d,g){this.q(a,b,c,d,g,this.b)},idV:function(a,b,c,d,g){this.q(a,b,c,d,g,this.b)},q:function(a,b,c,d,g,u){this.v(a,b,c,d,g)?this.D(a,b,c,d,g,u):(b=h.g(b,c,d,g,this.b,this.c,0,1),this.a.idO(a,b),b._d())},idW:function(a,b){this.a.idW(a,b)},D:function(a,b,f,d,g,u){if(0!=d&&0!=g){var r=this.n,n=this.o,z=null;if(4>g)n=0,r=1,null==this.A&&(this.A=this.C(0)),z=this.A;else if(4>d)n=90,r=1,null==this.y&&(this.y=this.C(90)),z=this.y;else{if(n!=this.H||null==this.z)this.z=this.C(n);z=this.z}a=(new c.ao)._02ao(a,
r);a.sj(2);b+=.6*r;d-=1.6*r;g-=r;for(var w=b,y=f+2*r,O=b+d,A=f+g,x=0,B=0,C=0,E=0,D=!0,F=z.length,G=this.u(),E=C=0,H=.8*r,I=.6*r,J=r,M=0!=this.h&&1!=this.h,K=1==this.h,L=0,P=0;800>P;P++){B=u.b()%F;if(D){x=w+d;B=y-d*z[B];B<f&&(C=(B-y)/(x-w),E=y-C*w,B=f,x=(f-E)/C);x>O&&(C=(B-y)/(x-w),E=y-C*w,x=O,B=C*x+E);var C=x,E=B,N=this.b.d();.15>N?x=x+I+this.b.d()*H:.85>N&&(x-=this.b.d()*H)}else x=w-d,B=y+d*z[B],x<b&&(C=(B-y)/(x-w),E=y-C*w,x=b,B=C*x+E),B>A&&(C=(B-y)/(x-w),E=y-C*w,B=A,x=(B-E)/C),C=x,E=B,N=this.b.d(),
.15>N?x-=I+this.b.d()*H:.85>N&&(x+=this.b.d()*H);if(B>=A&&x>=O&&0!=L)break;M&&(K=u.d()<this.h);K?h.d(G,w,y,x,B,this.b,this.c):G.u(w,y,x,B);L++;w=C;y=E;D?(x=1.2*r*this.b.d(),1>x&&(x=1),y+=x):(C>=x&&(y+=1.2*r*this.b.d()),w+=this.b.d()*(r-1));D=!D;if(c.a.d(y-A)<J&&c.a.d(w-O)<J)break;if(0==n&&y>A)break}0!=(this.a.ida()&8)?(u=this.a.idd(),this.a.sidd(null),this.a.idV(this.w,b,f,d,g),this.a.sidd(u)):this.a.idV(this.w,b,f,d,g);this.a.idv(a,G);G._d();a._d()}},idX:function(a){return this.a.idX(a)},I:function(a,
b){var f=0,d=0,g=0,u=0,r=0;null==b||4!=b[0]?(f=a[0].x,g=a[0].y,d=f,u=g,r=1):(f=g=c.C.b,d=u=c.C.c,r=0);for(;r<a.length;r++){var n=a[r]._nc();if(null!=b&&4==b[r]){var z=a[r+1],w=a[r+2],y=z.x/2,A=n.x+y,z=n.y+z.y/2,w=h.j(y,w.x,w.y);A<f&&(f=A);A>d&&(d=A);z<g&&(g=z);z>u&&(u=z);for(y=0;y<w.length;y++)n._cf(w[y]),n.x+=A,n.y+=z,n.x<f?f=n.x:n.x>d&&(d=n.x),n.y<g?g=n.y:n.y>u&&(u=n.y);n.x=A;n.y=z;r+=2}n.x<f?f=n.x:n.x>d&&(d=n.x);n.y<g?g=n.y:n.y>u&&(u=n.y)}return(new c.d)._02c(f,g,d-f,u-g)},ict:function(a){return null},
C:function(a){this.H=a;var b=Array(5);a=.0174532925199433*a-.03490658;for(var f=0;f<b.length;f++)b[f]=c.a.t(a),a+=.01745329;return b},_iCommands:function(a){return!0},ic9:function(a,b){this.j.n(a,b)},idY:function(a,b){return this.a.idY(a,b)},idZ:function(a,b){this.a.idZ(a,b)},Q:function(a){var b=(new c.aA)._0aA();b.A(a);return b},ic$:function(a){0==a||null==this.j?this.j=(new K)._0dU(this.a):this.j.m(this.a,a);1>a&&(this.a=this.j)},renderToolBarCommand:function(a,b,c){},f:function(){null!=this.B&&
this.B.iag(1048608)},id0:function(a,b){this.a.id0(a,b)},id1:function(a,b,c){this.i*=a;this.P();this.a.id1(a,b,c)},id2:function(a,b){this.a.id2(a,b)},v:function(a,b,f,d,g){if(!this.g||this.l||this.p)return!1;a=c.V.D(a,c.ar);return null==a||0==a.j().a||16>d&&16>g?!1:!0},id3:function(a,b,c){this.a.id3(a,b,c)}};D.m=0;D.useRandomSeed=function(a){D.m=a};D._dt("CWHH",c.SA,0,A.icr,A.ic8,A.ic_,c.Su)})();
