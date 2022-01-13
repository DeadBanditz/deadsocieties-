(this.webpackJsonpfrontend_base_dapp=this.webpackJsonpfrontend_base_dapp||[]).push([[0],{210:function(t){t.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"activateWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_user","type":"address[]"}],"name":"removeWhitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"}],"name":"setMaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"},{"internalType":"uint256","name":"_newWalletLimit","type":"uint256"}],"name":"setMaxMintAmountAndWalletLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newSupply","type":"uint256"}],"name":"setMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newWalletLimit","type":"uint256"}],"name":"setWalletLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"walletLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"whitelistOnly","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_user","type":"address[]"}],"name":"whitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]')},220:function(t,e,n){},221:function(t,e,n){},222:function(t,e,n){},223:function(t,e,n){},224:function(t,e,n){},226:function(t,e,n){},227:function(t,e,n){},228:function(t,e,n){},229:function(t,e,n){},230:function(t,e,n){},231:function(t,e,n){},232:function(t,e,n){},233:function(t,e,n){},234:function(t,e,n){},249:function(t,e){},251:function(t,e){},255:function(t,e){},282:function(t,e){},284:function(t,e){},297:function(t,e){},299:function(t,e){},507:function(t,e,n){},508:function(t,e,n){},509:function(t,e,n){},510:function(t,e,n){},512:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n.n(a),s=n(32),r=n.n(s),p=(n(220),n(221),n(3)),o=n(4),u=n(7),l=n(8),c=(n.p,n.p+"static/media/logo1.58dabbad.jpg"),d=(n(222),n(223),n(224),n(0)),y=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(p.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsx)("button",{className:"ybutton",children:this.props.text})}}]),n}(i.a.Component),m=y;var b=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(p.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"header-control",children:[Object(d.jsxs)("div",{className:"header-content",children:[Object(d.jsx)("h1",{children:Object(d.jsx)("img",{className:"thePicture",src:c})}),Object(d.jsx)("div",{className:"header-content-buttons-container"})]}),Object(d.jsx)("div",{})]})})}}]),n}(i.a.Component),j=b,f=n(516),O=n(517),h=n(518),x=(n(226),n.p+"static/media/dicklogo.9f1ffd25.png"),g=(n.p,n.p,n.p,n(227),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(p.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"teammember-control",style:{textAlign:"center",justifyContent:"center"},children:[Object(d.jsx)("img",{style:{maxHeight:500,maxWidth:500},src:this.props.imageUrl,alt:"team member"}),Object(d.jsxs)("div",{className:"teammember-description",children:[Object(d.jsxs)("p",{className:"teammember-name",children:["@",this.props.name]}),Object(d.jsx)("p",{className:"teammember-occupation",children:this.props.title})]})]})}}]),n}(i.a.Component)),T=g,v=(i.a.Component,n(228),i.a.Component,n(229),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(p.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"footer-control",id:"socials",children:Object(d.jsxs)(f.a,{className:"footer",children:[Object(d.jsx)("p",{style:{fontSize:15},children:"\xa9 2021 Dead Societies. All Rights Reserved"}),Object(d.jsx)("div",{children:Object(d.jsx)("p",{style:{fontSize:15},children:Object(d.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://metaversesolutions.ai/",style:{textDecoration:"none",color:"white",textAlign:"right"},children:"Website by Metaverse Solutions, LLC"})})})]})})}}]),n}(i.a.Component)),w=v,M=(n(230),n.p+"static/media/Roadmap.7d8c759b.mp4"),C=n(520),A=n(31),N=(n(231),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(p.a)(this,n),(a=e.call(this,t)).state={open:!1},a}return Object(o.a)(n,[{key:"render",value:function(){var t=this;return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{onClick:function(){t.setState({open:!t.state.open})},"aria-controls":"example","aria-expanded":this.state.open,className:"collapse-header-control",children:[Object(d.jsxs)("div",{className:"collapse-header",children:[Object(d.jsx)("h4",{children:this.props.tag}),Object(d.jsx)("p",{children:this.props.title})]}),Object(d.jsx)(A.c,{})]}),Object(d.jsx)(C.a,{in:this.state.open,children:Object(d.jsx)("div",{id:"example",className:"collapse-content",children:this.props.content})})]})}}]),n}(i.a.Component)),_=(i.a.Component,n(232),n.p+"static/media/item1.1c214071.png"),k=n.p+"static/media/item2.81e34ae6.png",S=n.p+"static/media/item3.eec91da6.png",I=(n(233),n.p+"static/media/fire.76eb30ed.png"),E=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(p.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"top-item",children:[Object(d.jsx)("img",{src:this.props.image,alt:"top item"}),Object(d.jsxs)("div",{className:"top-item-description",children:[Object(d.jsx)("p",{children:this.props.name}),Object(d.jsx)("h6",{children:this.props.price})]}),Object(d.jsxs)("div",{className:"top-item-bid",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)(A.d,{})," HighestBid ",Object(d.jsx)("b",{children:this.props.highestBid})]}),Object(d.jsxs)("p",{children:["New Bid \xa0",Object(d.jsx)("img",{src:I,width:17,height:17,alt:"new bid"})]})]})]})}}]),n}(i.a.Component),B=E,F=(i.a.Component,n(59),n.p,n(234),n(58)),R=(n(71),n(18),n(70),n(209),n(210),n(72)),U=n(211),L=n(11),D={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CONNECTION_REQUEST":return Object(L.a)(Object(L.a)({},D),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(L.a)(Object(L.a)({},t),{},{loading:!1,account:e.payload.account,smartContract:e.payload.smartContract,web3:e.payload.web3});case"CONNECTION_FAILED":return Object(L.a)(Object(L.a)({},D),{},{loading:!1,errorMsg:e.payload});case"UPDATE_ACCOUNT":return Object(L.a)(Object(L.a)({},t),{},{account:e.payload.account});default:return t}},W={loading:!1,name:"",totalSupply:0,cost:0,error:!1,errorMsg:""},H=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHECK_DATA_REQUEST":return Object(L.a)(Object(L.a)({},t),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(L.a)(Object(L.a)({},t),{},{loading:!1,name:e.payload.name,totalSupply:e.payload.totalSupply,cost:e.payload.cost,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(L.a)(Object(L.a)({},W),{},{loading:!1,error:!0,errorMsg:e.payload});default:return t}},P=Object(R.b)({blockchain:z,data:H}),J=[U.a],K=Object(R.c)(R.a.apply(void 0,J)),Q=Object(R.d)(P,K);var q=n.p+"static/media/asdf.2aff7a6d.png",G=(n(507),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(p.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"about-control",children:Object(d.jsx)(f.a,{children:Object(d.jsxs)(O.a,{children:[Object(d.jsxs)(h.a,{md:6,xs:12,className:"image-control",style:{marginBottom:20,textAlign:"center"},children:[Object(d.jsx)("a",{href:"https://deadbanditz.io/",children:Object(d.jsx)("img",{style:{border:"solid black 10px",borderRadius:20},src:"https://deadbanditz.io/static/media/owl.b740aad4.png",alt:"about gif"})}),Object(d.jsx)("text",{style:{textAlign:"center",fontSize:30},children:"February 2022"})]}),Object(d.jsxs)(h.a,{md:6,xs:12,className:"image-control",style:{marginBottom:20,textAlign:"center"},children:[Object(d.jsx)("img",{style:{border:"solid black 10px",borderRadius:20},src:q,alt:"about gif"}),Object(d.jsx)("text",{style:{textAlign:"center",fontSize:30},children:"Coming Soon..."})]}),Object(d.jsxs)(h.a,{md:6,xs:12,className:"image-control",style:{marginBottom:20,textAlign:"center"},children:[Object(d.jsx)("img",{style:{border:"solid black 10px",borderRadius:20},src:q,alt:"about gif"}),Object(d.jsx)("text",{style:{textAlign:"center",fontSize:30},children:"Coming Soon..."})]}),Object(d.jsxs)(h.a,{md:6,xs:12,className:"image-control",style:{marginBottom:20,textAlign:"center"},children:[Object(d.jsx)("img",{style:{border:"solid black 10px",borderRadius:20},src:q,alt:"about gif"}),Object(d.jsx)("text",{style:{textAlign:"center",fontSize:30},children:"Coming Soon..."})]})]})})})}}]),n}(i.a.Component)),V=G,X=n(212),Y=n.n(X);n.p,n(508),i.a.Component,n(509),i.a.Component,n.p,n(510);var Z=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(j,{}),Object(d.jsx)(V,{}),Object(d.jsx)(w,{})]})},$=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,521)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),a(t),i(t),s(t),r(t)}))};n(511);r.a.render(Object(d.jsx)(F.a,{store:Q,children:Object(d.jsx)(Z,{})}),document.getElementById("root")),$()}},[[512,1,2]]]);
//# sourceMappingURL=main.7acb2b42.chunk.js.map