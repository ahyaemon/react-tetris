(this["webpackJsonpreact-tetris"]=this["webpackJsonpreact-tetris"]||[]).push([[0],[,,,,,,,,,,,,,,,function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},,function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){"use strict";e.r(n);var i=e(1),o=e.n(i),r=e(10),c=e.n(r),s=e(6),u=(e(15),e(16),e(17),e(18),Object(i.createContext)({})),a=(e(19),e(20),e(0));function l(t){var n=t.color;return Object(a.jsx)("div",{className:"cell cell--".concat(n)})}function h(t){var n=t.cells;return Object(a.jsx)("div",{className:"row",children:n.map((function(t,n){return Object(a.jsx)("div",{className:"row__cells",children:Object(a.jsx)(l,{color:t})},n)}))})}function f(){var t=Object(i.useContext)(u).gameState;return Object(a.jsx)("div",{className:"board",children:t.rows.map((function(t,n){return Object(a.jsx)("div",{className:"board__row",children:Object(a.jsx)(h,{cells:t})},n)}))})}function j(){return Object(a.jsx)("div",{className:"screenLeft",children:Object(a.jsx)("div",{className:"screenLeft__board",children:Object(a.jsx)(f,{})})})}e(22);function d(){return Object(a.jsxs)("div",{className:"screenRight",children:[Object(a.jsx)("div",{className:"screenRight__afterNext",children:"afterNext"}),Object(a.jsx)("div",{className:"screenRight__hold",children:"hold"})]})}function m(){return Object(a.jsxs)("div",{className:"screen",children:[Object(a.jsx)("div",{className:"screen__left",children:Object(a.jsx)(j,{})}),Object(a.jsx)("div",{className:"screen__right",children:Object(a.jsx)(d,{})})]})}e(23),e(24);function v(){return Object(a.jsxs)("div",{className:"controllerLeft",children:[Object(a.jsx)("p",{children:"pm/am"}),Object(a.jsx)("p",{children:"p/a"})]})}var p;e(25),e(26);!function(t){t[t.Up=0]="Up",t[t.Right=1]="Right",t[t.Down=2]="Down",t[t.Left=3]="Left",t[t.RotationLeft=4]="RotationLeft",t[t.RotationRight=5]="RotationRight"}(p||(p={}));var b=function(t){var n=Object(i.useContext)(u),e=(n.gameState,n.setGameState),o=Object(i.useState)(!1),r=Object(s.a)(o,2),c=r[0],a=r[1],l=Object(i.useRef)(null),h=Object(i.useRef)(null);return Object(i.useEffect)((function(){c?(e(Z.input(t)),h.current=setTimeout((function(){l.current=setInterval((function(){e(Z.input(t))}),120)}),300)):(null!==l&&clearInterval(l.current),null!==h&&clearTimeout(h.current))}),[c]),a},w=e(9);function O(){var t=Object(i.useContext)(u),n=(t.gameState,t.setGameState),e=b(p.Down),o=b(p.Left),r=b(p.Right),c=Object(w.useMediaQuery)({query:"(min-width: 768px)"}),s=Object(w.useMediaQuery)({query:"(max-width: 768px)"});return Object(a.jsxs)("div",{className:"crossKeys",children:[Object(a.jsx)("div",{className:"crossKeys__up crossKey",onClick:function(){n(Z.input(p.Up))}}),c&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"crossKeys__left crossKey",onMouseDown:function(){return o(!0)},onMouseUp:function(){return o(!1)}}),Object(a.jsx)("div",{className:"crossKeys__right crossKey",onMouseDown:function(){return r(!0)},onMouseUp:function(){return r(!1)}}),Object(a.jsx)("div",{className:"crossKeys__down crossKey",onMouseDown:function(){return e(!0)},onMouseUp:function(){return e(!1)}})]}),s&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"crossKeys__left crossKey",onTouchStart:function(){return o(!0)},onTouchEnd:function(){return o(!1)}}),Object(a.jsx)("div",{className:"crossKeys__right crossKey",onTouchStart:function(){return r(!0)},onTouchEnd:function(){return r(!1)}}),Object(a.jsx)("div",{className:"crossKeys__down crossKey",onTouchStart:function(){return e(!0)},onTouchEnd:function(){return e(!1)}})]})]})}e(27);function x(){var t=Object(i.useContext)(u),n=(t.gameState,t.setGameState);return Object(a.jsxs)("div",{className:"rotationKeys",children:[Object(a.jsx)("div",{className:"rotationKeys__left",children:Object(a.jsx)("button",{type:"button",onClick:function(){n(Z.input(p.RotationLeft))},children:"L"})}),Object(a.jsx)("div",{className:"rotationKeys__right",children:Object(a.jsx)("button",{type:"button",onClick:function(){n(Z.input(p.RotationRight))},children:"R"})})]})}function y(){return Object(a.jsxs)("div",{className:"controllerRight",children:[Object(a.jsx)("div",{className:"controllerRight__rotationKeys",children:Object(a.jsx)(x,{})}),Object(a.jsx)("div",{className:"controllerRight__crossKeys",children:Object(a.jsx)(O,{})})]})}function g(){return Object(a.jsxs)("div",{className:"controller",children:[Object(a.jsx)("div",{className:"controller__left",children:Object(a.jsx)(v,{})}),Object(a.jsx)("div",{className:"controller__right",children:Object(a.jsx)(y,{})})]})}var M,R=e(2),_=e(3);!function(t){t.None="none",t.LightBlue="lightBlue",t.Yellow="yellow",t.Purple="purple",t.Green="green",t.Red="red",t.Orange="orange",t.Blue="blue"}(M||(M={}));var N,k=function(t){return t[0].map((function(n,e){return t.map((function(t){return t[e]})).reverse()}))},L=function(t){return k(k(t))},S=e(7),C=function(){function t(n){var e=this;Object(R.a)(this,t),this.positions=n,this.rightCol=function(){return Math.max.apply(Math,Object(S.a)(e.positions.map((function(t){return t.col}))))},this.leftCol=function(){return Math.min.apply(Math,Object(S.a)(e.positions.map((function(t){return t.col}))))},this.bottomRow=function(){return Math.max.apply(Math,Object(S.a)(e.positions.map((function(t){return t.row}))))}}return Object(_.a)(t,null,[{key:"fromMatrix",value:function(n){return new t(n.flatMap((function(t,n){return t.map((function(t,e){return{b:t,position:{row:n,col:e}}})).filter((function(t){return t.b}))})).map((function(t){return t.position})))}}]),t}(),D=function(){function t(n,e,i,o){Object(R.a)(this,t),this.a=n,this.b=e,this.c=i,this.d=o}return Object(_.a)(t,null,[{key:"fromMatrix",value:function(n){return new t(C.fromMatrix(n),C.fromMatrix(k(n)),C.fromMatrix(L(n)),C.fromMatrix(L(k(n))))}}]),t}();!function(t){t[t.I=0]="I",t[t.O=1]="O",t[t.T=2]="T",t[t.S=3]="S",t[t.Z=4]="Z",t[t.L=5]="L",t[t.J=6]="J"}(N||(N={}));var K,A={i:D.fromMatrix([[!1,!1,!1,!1],[!0,!0,!0,!0],[!1,!1,!1,!1],[!1,!1,!1,!1]]),o:D.fromMatrix([[!0,!0],[!0,!0]]),t:D.fromMatrix([[!1,!0,!1],[!0,!0,!0],[!1,!1,!1]]),s:D.fromMatrix([[!1,!0,!0],[!0,!0,!1],[!1,!1,!1]]),z:D.fromMatrix([[!0,!0,!1],[!1,!0,!0],[!1,!1,!1]]),l:D.fromMatrix([[!1,!1,!0],[!0,!0,!0],[!1,!1,!1]]),j:D.fromMatrix([[!0,!1,!1],[!0,!0,!0],[!1,!1,!1]])};!function(t){t[t.A=0]="A",t[t.B=1]="B",t[t.C=2]="C",t[t.D=3]="D"}(K||(K={}));var B=function(){function t(n,e,i){Object(R.a)(this,t),this.minoType=n,this.rotation=e,this.color=i}return Object(_.a)(t,[{key:"getShape",value:function(t){if(t===K.A)return this.rotation.a;if(t===K.B)return this.rotation.b;if(t===K.C)return this.rotation.c;if(t===K.D)return this.rotation.d;throw Error("no direction found")}}]),t}(),T={i:function(){return new B(N.I,A.i,M.LightBlue)},o:function(){return new B(N.O,A.o,M.Yellow)},t:function(){return new B(N.T,A.t,M.Purple)},s:function(){return new B(N.S,A.s,M.Green)},z:function(){return new B(N.Z,A.z,M.Red)},l:function(){return new B(N.L,A.l,M.Orange)},j:function(){return new B(N.J,A.j,M.Blue)},random:function(){var t;switch(t=7,Math.floor(Math.random()*t)){case 0:return this.i();case 1:return this.o();case 2:return this.t();case 3:return this.s();case 4:return this.z();case 5:return this.l();case 6:return this.j();default:throw Error("failed to create random mino")}}},E=function(){function t(n,e,i){Object(R.a)(this,t),this.mino=n,this.position=e,this.direction=i}return Object(_.a)(t,[{key:"getShape",value:function(){return this.mino.getShape(this.direction)}},{key:"rotationRight",value:function(){if(this.direction===K.A)return new t(this.mino,this.position,K.B);if(this.direction===K.B)return new t(this.mino,this.position,K.C);if(this.direction===K.C)return new t(this.mino,this.position,K.D);if(this.direction===K.D)return new t(this.mino,this.position,K.A);throw Error("invalid direction found: "+this.direction)}},{key:"rotationLeft",value:function(){if(this.direction===K.A)return new t(this.mino,this.position,K.D);if(this.direction===K.B)return new t(this.mino,this.position,K.A);if(this.direction===K.C)return new t(this.mino,this.position,K.B);if(this.direction===K.D)return new t(this.mino,this.position,K.C);throw Error("invalid direction found: "+this.direction)}},{key:"moveRight",value:function(){return this.move({row:this.position.row,col:this.position.col+1})}},{key:"moveLeft",value:function(){return this.move({row:this.position.row,col:this.position.col-1})}},{key:"moveDown",value:function(){return this.move({row:this.position.row+1,col:this.position.col})}},{key:"move",value:function(n){return new t(this.mino,n,this.direction)}},{key:"rightCol",value:function(){return this.position.col+this.getShape().rightCol()}},{key:"leftCol",value:function(){return this.position.col+this.getShape().leftCol()}},{key:"bottomRow",value:function(){return this.position.row+this.getShape().bottomRow()}}]),t}(),U=function(){function t(n,e){Object(R.a)(this,t),this.currentMino=n,this.rows=e}return Object(_.a)(t,[{key:"state",get:function(){var t=this,n=this.rows.map((function(t){return t.map((function(t){return t}))}));return this.currentMino.getShape().positions.forEach((function(e){n[t.currentMino.position.row+e.row][t.currentMino.position.col+e.col]=t.currentMino.mino.color})),{rows:n}}},{key:"input",value:function(t){return t===p.Up?(this.drop(),this.rows=this.state.rows,this.currentMino=new E(T.random(),{row:0,col:3},K.A)):t===p.Right?this.moveRight():t===p.Down?this.moveDown():t===p.Left?this.moveLeft():t===p.RotationLeft?this.currentMino=this.currentMino.rotationLeft():t===p.RotationRight&&(this.currentMino=this.currentMino.rotationRight()),this.state}},{key:"moveRight",value:function(){var n=this.currentMino.moveRight();n.rightCol()>=t.ncol||this.collided(n)||(this.currentMino=n)}},{key:"moveLeft",value:function(){var t=this.currentMino.moveLeft();t.leftCol()<0||this.collided(t)||(this.currentMino=t)}},{key:"moveDown",value:function(){var n=this.currentMino.moveDown();n.bottomRow()>=t.nrow||this.collided(n)||(this.currentMino=n)}},{key:"drop",value:function(){for(;;){var n=this.currentMino.moveDown();if(n.bottomRow()>=t.nrow)break;if(this.collided(n))break;this.currentMino=n}}},{key:"collided",value:function(t){var n=this;return void 0!==t.getShape().positions.map((function(n){return{row:n.row+t.position.row,col:n.col+t.position.col}})).find((function(t){return n.rows[t.row][t.col]!==M.None}))}}],[{key:"create",value:function(){var n=this,e=Array(this.nrow).fill(0).map((function(t){return Array(n.ncol).fill(M.None)}));return new t(new E(T.j(),{row:0,col:3},K.A),e)}}]),t}();U.ncol=10,U.nrow=20;var I="ArrowDown",F="ArrowUp",G="ArrowRight",z="ArrowLeft",J="z",P="x",Z=U.create();var q=function(){var t,n=Object(i.useState)(Z.state),e=Object(s.a)(n,2),o=e[0],r=e[1];return t=[{key:I,f:function(){r(Z.input(p.Down))}},{key:F,f:function(){r(Z.input(p.Up))}},{key:G,f:function(){r(Z.input(p.Right))}},{key:z,f:function(){r(Z.input(p.Left))}},{key:J,f:function(){r(Z.input(p.RotationLeft))}},{key:P,f:function(){r(Z.input(p.RotationRight))}}],Object(i.useEffect)((function(){document.addEventListener("keydown",(function(n){var e=t.find((function(t){return t.key===n.key}));e&&e.f()}),!1)}),[]),Object(a.jsx)(u.Provider,{value:{gameState:o,setGameState:r},children:Object(a.jsxs)("div",{className:"app",children:[Object(a.jsx)("div",{className:"app__screen",children:Object(a.jsx)(m,{})}),Object(a.jsx)("div",{className:"app_controller",children:Object(a.jsx)(g,{})})]})})},Q=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,29)).then((function(n){var e=n.getCLS,i=n.getFID,o=n.getFCP,r=n.getLCP,c=n.getTTFB;e(t),i(t),o(t),r(t),c(t)}))};c.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(q,{})}),document.getElementById("root")),Q()}],[[28,1,2]]]);
//# sourceMappingURL=main.1b9ec922.chunk.js.map