(this["webpackJsonpreact-tetris"]=this["webpackJsonpreact-tetris"]||[]).push([[0],[,,,,,,,,,,,,,,function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},,function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){"use strict";e.r(n);var i=e(1),o=e.n(i),r=e(8),c=e.n(r),s=e(9),u=(e(14),e(15),e(16),e(17),Object(i.createContext)({})),a=(e(18),e(19),e(0));function l(t){var n=t.color;return Object(a.jsx)("div",{className:"cell cell--".concat(n)})}function h(t){var n=t.cells;return Object(a.jsx)("div",{className:"row",children:n.map((function(t,n){return Object(a.jsx)("div",{className:"row__cells",children:Object(a.jsx)(l,{color:t})},n)}))})}function f(){var t=Object(i.useContext)(u).gameState;return Object(a.jsx)("div",{className:"board",children:t.rows.map((function(t,n){return Object(a.jsx)("div",{className:"board__row",children:Object(a.jsx)(h,{cells:t})},n)}))})}function j(){return Object(a.jsx)("div",{className:"screenLeft",children:Object(a.jsx)("div",{className:"screenLeft__board",children:Object(a.jsx)(f,{})})})}e(21);function d(){return Object(a.jsxs)("div",{className:"screenRight",children:[Object(a.jsx)("div",{className:"screenRight__afterNext",children:"afterNext"}),Object(a.jsx)("div",{className:"screenRight__hold",children:"hold"})]})}function m(){return Object(a.jsxs)("div",{className:"screen",children:[Object(a.jsx)("div",{className:"screen__left",children:Object(a.jsx)(j,{})}),Object(a.jsx)("div",{className:"screen__right",children:Object(a.jsx)(d,{})})]})}e(22),e(23);function p(){return Object(a.jsxs)("div",{className:"controllerLeft",children:[Object(a.jsx)("p",{children:"prev mino/after mino"}),Object(a.jsx)("p",{children:"prev/after"})]})}var b;e(24),e(25);function v(){var t=Object(i.useContext)(u),n=(t.gameState,t.setGameState);return Object(a.jsxs)("div",{className:"crossKeys",children:[Object(a.jsx)("button",{type:"button",onClick:function(){n(F.input(b.Up))},children:"\u4e0a"}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{type:"button",onClick:function(){n(F.input(b.Left))},children:"\u5de6"}),Object(a.jsx)("button",{type:"button",onClick:function(){n(F.input(b.Right))},children:"\u53f3"}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{type:"button",onClick:function(){n(F.input(b.Down))},children:"\u4e0b"})]})}!function(t){t[t.Up=0]="Up",t[t.Right=1]="Right",t[t.Down=2]="Down",t[t.Left=3]="Left",t[t.RotationLeft=4]="RotationLeft",t[t.RotationRight=5]="RotationRight"}(b||(b={}));e(26);function w(){var t=Object(i.useContext)(u),n=(t.gameState,t.setGameState);return Object(a.jsxs)("div",{className:"crossKeys",children:[Object(a.jsx)("button",{type:"button",onClick:function(){n(F.input(b.RotationLeft))},children:"\u5de6\u56de\u8ee2"}),Object(a.jsx)("button",{type:"button",onClick:function(){n(F.input(b.RotationRight))},children:"\u53f3\u56de\u8ee2"})]})}function O(){return Object(a.jsxs)("div",{className:"controllerRight",children:[Object(a.jsx)("div",{className:"controllerRight__crossKeys",children:Object(a.jsx)(v,{})}),Object(a.jsx)("div",{className:"controllerRight__rotationKeys",children:Object(a.jsx)(w,{})})]})}function x(){return Object(a.jsxs)("div",{className:"controller",children:[Object(a.jsx)("div",{className:"controller__left",children:Object(a.jsx)(p,{})}),Object(a.jsx)("div",{className:"controller__right",children:Object(a.jsx)(O,{})})]})}var g,y=e(2),R=e(3);!function(t){t.None="none",t.LightBlue="lightBlue",t.Yellow="yellow",t.Purple="purple",t.Green="green",t.Red="red",t.Orange="orange",t.Blue="blue"}(g||(g={}));var k,M=function(t){return t[0].map((function(n,e){return t.map((function(t){return t[e]})).reverse()}))},N=function(t){return M(M(t))},_=e(6),C=function(){function t(n){var e=this;Object(y.a)(this,t),this.positions=n,this.rightCol=function(){return Math.max.apply(Math,Object(_.a)(e.positions.map((function(t){return t.col}))))},this.leftCol=function(){return Math.min.apply(Math,Object(_.a)(e.positions.map((function(t){return t.col}))))},this.bottomRow=function(){return Math.max.apply(Math,Object(_.a)(e.positions.map((function(t){return t.row}))))}}return Object(R.a)(t,null,[{key:"fromMatrix",value:function(n){return new t(n.flatMap((function(t,n){return t.map((function(t,e){return{b:t,position:{row:n,col:e}}})).filter((function(t){return t.b}))})).map((function(t){return t.position})))}}]),t}(),L=function(){function t(n,e,i,o){Object(y.a)(this,t),this.a=n,this.b=e,this.c=i,this.d=o}return Object(R.a)(t,null,[{key:"fromMatrix",value:function(n){return new t(C.fromMatrix(n),C.fromMatrix(M(n)),C.fromMatrix(N(n)),C.fromMatrix(N(M(n))))}}]),t}();!function(t){t[t.I=0]="I",t[t.O=1]="O",t[t.T=2]="T",t[t.S=3]="S",t[t.Z=4]="Z",t[t.L=5]="L",t[t.J=6]="J"}(k||(k={}));var S,D={i:L.fromMatrix([[!1,!1,!1,!1],[!0,!0,!0,!0],[!1,!1,!1,!1],[!1,!1,!1,!1]]),o:L.fromMatrix([[!0,!0],[!0,!0]]),t:L.fromMatrix([[!1,!0,!1],[!0,!0,!0],[!1,!1,!1]]),s:L.fromMatrix([[!1,!0,!0],[!0,!0,!1],[!1,!1,!1]]),z:L.fromMatrix([[!0,!0,!1],[!1,!0,!0],[!1,!1,!1]]),l:L.fromMatrix([[!1,!1,!0],[!0,!0,!0],[!1,!1,!0]]),j:L.fromMatrix([[!0,!1,!1],[!0,!0,!0],[!1,!1,!1]])};!function(t){t[t.A=0]="A",t[t.B=1]="B",t[t.C=2]="C",t[t.D=3]="D"}(S||(S={}));var A=function(){function t(n,e,i){Object(y.a)(this,t),this.minoType=n,this.rotation=e,this.color=i}return Object(R.a)(t,[{key:"getShape",value:function(t){if(t===S.A)return this.rotation.a;if(t===S.B)return this.rotation.b;if(t===S.C)return this.rotation.c;if(t===S.D)return this.rotation.d;throw Error("no direction found")}}]),t}(),B={i:function(){return new A(k.I,D.i,g.LightBlue)},o:function(){return new A(k.O,D.o,g.Yellow)},t:function(){return new A(k.T,D.t,g.Purple)},s:function(){return new A(k.S,D.s,g.Green)},z:function(){return new A(k.Z,D.z,g.Red)},l:function(){return new A(k.L,D.l,g.Orange)},j:function(){return new A(k.J,D.j,g.Blue)},random:function(){var t;switch(t=7,Math.floor(Math.random()*t)){case 0:return this.i();case 1:return this.o();case 2:return this.t();case 3:return this.s();case 4:return this.z();case 5:return this.l();case 6:return this.j();default:throw Error("failed to create random mino")}}},E=function(){function t(n,e,i){Object(y.a)(this,t),this.mino=n,this.position=e,this.direction=i}return Object(R.a)(t,[{key:"getShape",value:function(){return this.mino.getShape(this.direction)}},{key:"rotationRight",value:function(){if(this.direction===S.A)return new t(this.mino,this.position,S.B);if(this.direction===S.B)return new t(this.mino,this.position,S.C);if(this.direction===S.C)return new t(this.mino,this.position,S.D);if(this.direction===S.D)return new t(this.mino,this.position,S.A);throw Error("invalid diredtion found: "+this.direction)}},{key:"moveRight",value:function(){return this.move({row:this.position.row,col:this.position.col+1})}},{key:"moveLeft",value:function(){return this.move({row:this.position.row,col:this.position.col-1})}},{key:"moveDown",value:function(){return this.move({row:this.position.row+1,col:this.position.col})}},{key:"move",value:function(n){return new t(this.mino,n,this.direction)}},{key:"rightCol",value:function(){return this.position.col+this.getShape().rightCol()}},{key:"leftCol",value:function(){return this.position.col+this.getShape().leftCol()}},{key:"bottomRow",value:function(){return this.position.row+this.getShape().bottomRow()}}]),t}(),T=function(){function t(n,e){Object(y.a)(this,t),this.currentMino=n,this.rows=e}return Object(R.a)(t,[{key:"state",get:function(){var t=this,n=this.rows.map((function(t){return t.map((function(t){return t}))}));return this.currentMino.getShape().positions.forEach((function(e){n[t.currentMino.position.row+e.row][t.currentMino.position.col+e.col]=t.currentMino.mino.color})),{rows:n}}},{key:"input",value:function(t){return t===b.Up?(this.drop(),this.rows=this.state.rows,this.currentMino=new E(B.random(),{row:0,col:3},S.A)):t===b.Right?this.moveRight():t===b.Down?this.moveDown():t===b.Left?this.moveLeft():t===b.RotationLeft||t===b.RotationRight&&(this.currentMino=this.currentMino.rotationRight()),this.state}},{key:"moveRight",value:function(){var n=this.currentMino.moveRight();n.rightCol()>=t.ncol||this.collided(n)||(this.currentMino=n)}},{key:"moveLeft",value:function(){var t=this.currentMino.moveLeft();t.leftCol()<0||this.collided(t)||(this.currentMino=t)}},{key:"moveDown",value:function(){var n=this.currentMino.moveDown();n.bottomRow()>=t.nrow||this.collided(n)||(this.currentMino=n)}},{key:"drop",value:function(){for(;;){var n=this.currentMino.moveDown();if(n.bottomRow()>=t.nrow)break;if(this.collided(n))break;this.currentMino=n}}},{key:"collided",value:function(t){var n=this;return void 0!==t.getShape().positions.map((function(n){return{row:n.row+t.position.row,col:n.col+t.position.col}})).find((function(t){return n.rows[t.row][t.col]!==g.None}))}}],[{key:"create",value:function(){var n=this,e=Array(this.nrow).fill(0).map((function(t){return Array(n.ncol).fill(g.None)}));return new t(new E(B.j(),{row:0,col:3},S.A),e)}}]),t}();T.ncol=10,T.nrow=20;var U="ArrowDown",z="ArrowUp",G="ArrowRight",I="ArrowLeft",J="z",P="x",F=T.create();var K=function(){var t,n=Object(i.useState)(F.state),e=Object(s.a)(n,2),o=e[0],r=e[1];return t=[{key:U,f:function(){r(F.input(b.Down))}},{key:z,f:function(){r(F.input(b.Up))}},{key:G,f:function(){r(F.input(b.Right))}},{key:I,f:function(){r(F.input(b.Left))}},{key:J,f:function(){r(F.input(b.RotationLeft))}},{key:P,f:function(){r(F.input(b.RotationRight))}}],Object(i.useEffect)((function(){document.addEventListener("keydown",(function(n){var e=t.find((function(t){return t.key===n.key}));e&&e.f()}),!1)}),[]),Object(a.jsx)(u.Provider,{value:{gameState:o,setGameState:r},children:Object(a.jsxs)("div",{className:"app",children:[Object(a.jsx)("header",{className:"app__header",children:"tetris simulator"}),Object(a.jsx)("div",{className:"app__screen",children:Object(a.jsx)(m,{})}),Object(a.jsx)("div",{className:"app_controller",children:Object(a.jsx)(x,{})})]})})},Z=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,28)).then((function(n){var e=n.getCLS,i=n.getFID,o=n.getFCP,r=n.getLCP,c=n.getTTFB;e(t),i(t),o(t),r(t),c(t)}))};c.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(K,{})}),document.getElementById("root")),Z()}],[[27,1,2]]]);
//# sourceMappingURL=main.d8f9f40e.chunk.js.map