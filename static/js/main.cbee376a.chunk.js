(this.webpackJsonpfrontend_base_dapp=this.webpackJsonpfrontend_base_dapp||[]).push([[0],{231:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"activateWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_user","type":"address[]"}],"name":"removeWhitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"}],"name":"setMaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"},{"internalType":"uint256","name":"_newWalletLimit","type":"uint256"}],"name":"setMaxMintAmountAndWalletLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newSupply","type":"uint256"}],"name":"setMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newWalletLimit","type":"uint256"}],"name":"setWalletLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"walletLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"whitelistOnly","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_user","type":"address[]"}],"name":"whitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]')},242:function(e,t,n){},243:function(e,t,n){},244:function(e,t,n){},245:function(e,t,n){},246:function(e,t,n){},252:function(e,t,n){},253:function(e,t,n){},254:function(e,t,n){},255:function(e,t,n){},256:function(e,t,n){},257:function(e,t,n){},258:function(e,t,n){},259:function(e,t,n){},260:function(e,t,n){},275:function(e,t){},277:function(e,t){},281:function(e,t){},308:function(e,t){},310:function(e,t){},323:function(e,t){},325:function(e,t){},533:function(e,t,n){},534:function(e,t,n){},535:function(e,t,n){},536:function(e,t,n){},538:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),s=n(35),o=n.n(s),r=(n(242),n(243),n(4)),c=n(5),l=n(8),p=n(9),u=n.p+"static/media/logo.326fdbba.png",d=n.p+"static/media/CenterPic.8cb4515a.png",b=(n(244),n(546)),m=n(542),y=n(547),j=(n(245),n(30)),h=(n(246),n(0)),x=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)("button",{className:"ybutton",children:this.props.text})}}]),n}(i.a.Component),O=x;function f(){document.getElementById("mint").scrollIntoView()}function g(){document.getElementById("team").scrollIntoView()}function v(){document.getElementById("roadmap").scrollIntoView()}function w(){document.getElementById("whitelist").scrollIntoView()}function T(){window.open("https://opensea.io/collection/dickpixnft")}var k=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"header-control",children:[Object(h.jsx)(b.a,{collapseOnSelect:!0,expand:"lg",children:Object(h.jsxs)(m.a,{children:[Object(h.jsx)(b.a.Brand,{href:"#home",children:Object(h.jsx)("img",{src:u,width:100,height:100,alt:"logo"})}),Object(h.jsx)(b.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(h.jsxs)(b.a.Collapse,{id:"responsive-navbar-nav",children:[Object(h.jsx)(y.a,{className:"me-auto"}),Object(h.jsxs)(y.a,{children:[Object(h.jsx)(y.a.Link,{style:{fontWeight:900},onClick:f,children:"MINT"}),Object(h.jsx)(y.a.Link,{style:{fontWeight:900},onClick:g,children:"ARTIST"}),Object(h.jsx)(y.a.Link,{style:{fontWeight:900},onClick:v,children:"ROADMAP"}),Object(h.jsx)(y.a.Link,{style:{fontWeight:900},onClick:w,children:"JUNK MAIL"}),Object(h.jsx)(y.a.Link,{style:{fontWeight:900},onClick:T,children:"OPENSEA"}),Object(h.jsx)("text",{style:{width:20}}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("a",{style:{textDecoration:"none",color:"white",paddingRight:10},target:"_blank",rel:"noopener noreferrer",href:"https://instagram.com/dickpixnft",children:[" ",Object(h.jsx)(j.d,{size:32})]}),Object(h.jsxs)("a",{style:{textDecoration:"none",color:"white",paddingLeft:10,paddingRight:10},target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/thedickpixnft",children:[" ",Object(h.jsx)(j.g,{size:32})]}),Object(h.jsxs)("a",{style:{textDecoration:"none",color:"white",paddingLeft:10},target:"_blank",rel:"noopener noreferrer",href:"https://discord.gg/y7zpCW4EeQ",children:[" ",Object(h.jsx)(j.a,{size:32}),"   "]})]})]})]})]})}),Object(h.jsxs)("div",{className:"header-content",children:[Object(h.jsx)("h1",{children:Object(h.jsx)("img",{className:"thePicture",src:d})}),Object(h.jsx)("div",{className:"header-content-buttons-container"})]}),Object(h.jsx)("div",{})]})})}}]),n}(i.a.Component),C=k,S=n(543),N=n(544),M=(n(252),n.p+"static/media/dicklogo.9f1ffd25.png"),A=(n.p,n.p,n.p,n(253),function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"teammember-control",style:{textAlign:"center",justifyContent:"center"},children:[Object(h.jsx)("img",{style:{maxHeight:500,maxWidth:500},src:this.props.imageUrl,alt:"team member"}),Object(h.jsxs)("div",{className:"teammember-description",children:[Object(h.jsxs)("p",{className:"teammember-name",children:["@",this.props.name]}),Object(h.jsx)("p",{className:"teammember-occupation",children:this.props.title})]})]})}}]),n}(i.a.Component)),I=A,E=(i.a.Component,n(254),function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"join-community-control",id:"whitelist",children:Object(h.jsxs)(m.a,{style:{textAlign:"center"},children:[Object(h.jsxs)("div",{style:{backgroundColor:"#FF9859",border:"10px solid black",padding:10,borderRadius:20,margin:10},children:[Object(h.jsxs)("h1",{children:[Object(h.jsx)("span",{children:"YOU'VE GOT "})," JUNK MAIL"]}),Object(h.jsx)("p",{style:{fontWeight:900},children:" Join our Junk Mail newsletter to stay up to date with the Dick Pix community. We wouldn't want you getting blue balls. "})]}),Object(h.jsx)("a",{href:"https://docs.google.com/forms/d/e/1FAIpQLSeRpcp773JFMW3iCWMKYtAEuxOGKa5QQoM1D6n88-SNB0HvHw/viewform?usp=sf_link",children:Object(h.jsx)(O,{text:"JUNK MAIL"})})]})})}}]),n}(i.a.Component)),D=E,_=(n(255),function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"footer-control",id:"socials",children:Object(h.jsxs)(m.a,{className:"footer",children:[Object(h.jsx)("p",{style:{fontSize:15},children:"\xa92021 \xa0 Unsolicited Labs LLC"}),Object(h.jsx)("div",{children:Object(h.jsx)("p",{style:{fontSize:15},children:Object(h.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://metaversesolutions.ai/",style:{textDecoration:"none",color:"white",textAlign:"right"},children:"Website by Metaverse Solutions, LLC"})})})]})})}}]),n}(i.a.Component)),U=_,B=(n(256),n.p+"static/media/Roadmap.7d8c759b.mp4"),F=n(234),L=(n(257),function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={open:!1},a}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{onClick:function(){e.setState({open:!e.state.open})},"aria-controls":"example","aria-expanded":this.state.open,className:"collapse-header-control",children:[Object(h.jsxs)("div",{className:"collapse-header",children:[Object(h.jsx)("h4",{children:this.props.tag}),Object(h.jsx)("p",{children:this.props.title})]}),Object(h.jsx)(j.e,{})]}),Object(h.jsx)(F.a,{in:this.state.open,children:Object(h.jsx)("div",{id:"example",className:"collapse-content",children:this.props.content})})]})}}]),n}(i.a.Component)),R=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={roadmaps:[{tag:"Stop 1",title:"The Balls Dropped",content:"Welcome to the Dick Pix community! Our public mint is live and we rock out with our....well, you know the rest."},{tag:"Stop 2",title:"Unsolicited Airdrops",content:"Our airdrop giveaways (a.k.a. unsolicited dick pix) begin! 5 unsuspecting holders will each receive 1 Dick."},{tag:"Stop 3",title:"Dix-elated",content:'Draw me like one of your French girls! Jen is going to &quot;dix-elate&quot; 5 lucky holders and turn their likeness (not their actual Dicks) into 1/1 Dick Pix characters to forever live on the "cock-chain".'},{tag:"Stop 4",title:"Big Package Giveaway",content:"One lucky holder will receive the &quot;Better Dick Pix Package&quot; of a new iPhone, Macbook Pro, and a ring light! *US based residents only, ETH equivalent outside of US*"},{tag:"Stop 5",title:"Banana Hammock",content:"Member exclusive merch design initiates. Holders get to design and have input on our new merch concepts."},{tag:"Stop 6",title:"Wrap It Up",content:"Our dick philanthropy begins! A portion of the proceeds from mint go to sexual health and wellness organizations for STD/STI testing, family planning, and safe sex education and wellness practices."},{tag:"Stop 7",title:"Bag of Dicks",content:"WE SOLD OUT! THE DICK GAME NOW BEGINS. It&#39;s like Go Fish, but with dicks. Collect all the dicks in a set and receive exclusive, super rare airdrops, giveaways, and more!"},{tag:"Stop 8",title:"Community Sack",content:"The \u201cCommunity Sack\u201d Wallet is dropped! Royalties are set at 10% for the collection. 50% of these royalties will be allocated for holders to receive exclusive giveaways, airdrops, prizes, and ongoing community development. The remaining 50% will be used for business expenses - such as marketing and staffing - to ensure continued growth and success for our Dick Pix community."}]},a}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"roadmap-control",id:"roadmap",style:{textAlign:"center"},children:Object(h.jsxs)(m.a,{children:[Object(h.jsxs)("header",{style:{fontWeight:900},children:[Object(h.jsx)("span",{children:"WYD? U UP?"})," ",Object(h.jsx)("br",{})," I'M COMING THROUGH. BUT I HAVE A FEW STOPS TO MAKE..."]}),Object(h.jsx)("p",{className:"roadmap-description",children:"The Dick Pix Roadmap dick-tates some of the holder perks members will be able to enjoy. We are constantly brainstorming, developing and evolving ideas for our community to create an interactive and fun space. Follow this fuck boys drive to see where he ends up..."}),Object(h.jsxs)(S.a,{style:{alignContent:"center",justifyContent:"center",textAlign:"center"},children:[Object(h.jsx)(N.a,{xs:12,md:6,children:Object(h.jsx)("video",{autoplay:"autoplay",loop:"true",src:B,alt:"roadmap",type:"video/mp4"})}),Object(h.jsx)(N.a,{style:{color:"black",alignContent:"center",justifyContent:"center",textAlign:"center"},children:this.state.roadmaps.map((function(e,t){return Object(h.jsx)(L,{style:{textAlign:"center",color:"black"},tag:e.tag,title:e.title,content:e.content},t)}))})]})]})})}}]),n}(i.a.Component),W=(n(258),n.p+"static/media/item1.1c214071.png"),P=n.p+"static/media/item2.81e34ae6.png",z=n.p+"static/media/item3.eec91da6.png",H=(n(259),n.p+"static/media/fire.76eb30ed.png"),K=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"top-item",children:[Object(h.jsx)("img",{src:this.props.image,alt:"top item"}),Object(h.jsxs)("div",{className:"top-item-description",children:[Object(h.jsx)("p",{children:this.props.name}),Object(h.jsx)("h6",{children:this.props.price})]}),Object(h.jsxs)("div",{className:"top-item-bid",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)(j.f,{})," HighestBid ",Object(h.jsx)("b",{children:this.props.highestBid})]}),Object(h.jsxs)("p",{children:["New Bid \xa0",Object(h.jsx)("img",{src:H,width:17,height:17,alt:"new bid"})]})]})]})}}]),n}(i.a.Component),G=K,J=(i.a.Component,n(22)),q=n.p+"static/media/about.54c3cb49.gif",Q=(n(260),n(74)),V=n(88),Y=n(27),X=n.n(Y),Z=n(86),$=n.n(Z),ee=n(230),te=n.n(ee),ne=n(231),ae=n(89),ie=n(232),se=n(3),oe={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(se.a)(Object(se.a)({},oe),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(se.a)(Object(se.a)({},e),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(se.a)(Object(se.a)({},oe),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(se.a)(Object(se.a)({},e),{},{account:t.payload.account});default:return e}},ce={loading:!1,name:"",totalSupply:0,cost:0,error:!1,errorMsg:""},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(se.a)(Object(se.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(se.a)(Object(se.a)({},e),{},{loading:!1,name:t.payload.name,totalSupply:t.payload.totalSupply,cost:t.payload.cost,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(se.a)(Object(se.a)({},ce),{},{loading:!1,error:!0,errorMsg:t.payload});default:return e}},pe=Object(ae.b)({blockchain:re,data:le}),ue=[ie.a],de=Object(ae.c)(ae.a.apply(void 0,ue)),be=Object(ae.d)(pe,de),me=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},ye=function(e){return function(){var e=Object(V.a)(X.a.mark((function e(t){var n,a,i;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,be.getState().blockchain.smartContract.methods.name().call();case 4:return n=e.sent,e.next=7,be.getState().blockchain.smartContract.methods.totalSupply().call();case 7:return a=e.sent,e.next=10,be.getState().blockchain.smartContract.methods.cost().call();case 10:i=e.sent,t({type:"CHECK_DATA_SUCCESS",payload:{name:n,totalSupply:a,cost:i}}),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0),t(me("Could not load data from contract."));case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}()},je=function(e){return{type:"CONNECTION_FAILED",payload:e}},he=function(e){return function(){var t=Object(V.a)(X.a.mark((function t(n){return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"UPDATE_ACCOUNT",payload:{account:e}}),n(ye());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};var xe=function(){var e=Object(Q.b)(),t=Object(Q.c)((function(e){return e.blockchain})),n=(Object(Q.c)((function(e){return e.data})),Object(a.useState)("")),i=Object(J.a)(n,2),s=(i[0],i[1]),o=Object(a.useState)(!1),r=Object(J.a)(o,2),c=r[0],l=r[1],p=Object(a.useState)(0),u=Object(J.a)(p,2),d=u[0],b=u[1],y=function(){""!==t.account&&null!==t.smartContract&&e(ye(t.account))};return Object(a.useEffect)((function(){y()}),[t.account]),Object(h.jsx)("div",{className:"mint-control",id:"mint",children:Object(h.jsx)(m.a,{children:Object(h.jsxs)(S.a,{children:[Object(h.jsx)(N.a,{md:6,xs:12,className:"mint-image",children:Object(h.jsx)("img",{src:q,alt:"mint gif"})}),Object(h.jsxs)(N.a,{md:6,xs:12,className:"mint-description",children:[Object(h.jsxs)("header",{style:{fontWeight:0},children:["MINT YOUR ",Object(h.jsx)("text",{style:{color:"white"},children:"DICK PIX"}),Object(h.jsx)("br",{})," ABOUT ",Object(h.jsx)("text",{style:{color:"white"},children:"THE DICKS:"})]}),Object(h.jsxs)("p",{style:{textAlign:"center"},children:["3000 total supply. 777 of the Dicks are Legendary NFTs. They are the only 1/1 hand-drawn originals in the entire collection. The remaining 2,223 fall into 3 categories: Super Rare, Rare, and Common. There are 703 Super Rare Dicks in Black & White, 743 Rare Dicks in Gold, and 777 Common Dicks in 3D.",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsxs)("header",{style:{fontWeight:0},children:["BAG OF DICKS"," ",Object(h.jsx)("text",{style:{color:"white"},children:"COLLECTION GAME"})]}),"The \u201cBag of Dicks\u201d game is like a trading card game. Buy and trade with other holders to get a complete set of dicks. A complete set must contain all versions of a Legendary dick. Possible combinations range from 2-4 matching dicks in a set. For example, you must hold all 4 versions (1 Legendary, 1 Super Rare, 1 Rare, and 1 Common) of the Snoop Dogg dick to make a complete Snoop set.",Object(h.jsx)("br",{}),Object(h.jsx)("text",{style:{fontStyle:"italic"},children:"All \u201cBag of Dicks\u201d holders will be rewarded with exclusive airdrops, giveaways, prizes, and more!"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"SMART CONTRACT: ",Object(h.jsx)("br",{}),Object(h.jsx)("a",{style:{color:"white"},href:"https://etherscan.io/address/0x7181d2038b849a18145eb153b8befc552e52c37a",children:"0x7181d2038B849A18145eb153b8bEFC552e52c37A"})]}),Object(h.jsxs)("div",{className:"number-control",children:[Object(h.jsx)(j.b,{color:"white",size:40,onClick:function(){d<=0||b(d-1)}}),Object(h.jsx)("span",{id:"inputBox",children:d}),Object(h.jsx)(j.c,{color:"white",size:40,onClick:function(){d>=25||b(d+1)}})]}),Object(h.jsx)("p",{style:{marginTop:0,marginBottom:0},children:"0.077 ETH + Gas"}),""===t.account||null===t.smartContract?Object(h.jsxs)("div",{className:"flex-column",children:[Object(h.jsx)("button",{className:"ybutton",onClick:function(t){console.log("--------"),t.preventDefault(),e((console.log("--:"),function(){var e=Object(V.a)(X.a.mark((function e(t){var n,a,i,s,o;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t({type:"CONNECTION_REQUEST"}),n=window,!(a=n.ethereum)||!a.isMetaMask){e.next=21;break}return $.a.setProvider(a),i=new te.a(a),e.prev=6,e.next=9,a.request({method:"eth_requestAccounts"});case 9:return s=e.sent,e.next=12,a.request({method:"net_version"});case 12:1==e.sent?(o=new $.a(ne,"0x7181d2038B849A18145eb153b8bEFC552e52c37A"),t({type:"CONNECTION_SUCCESS",payload:{account:s[0],smartContract:o,web3:i}}),a.on("accountsChanged",(function(e){t(he(e[0]))})),a.on("chainChanged",(function(){window.location.reload()}))):t(je("Change network to Ethereum Mainnet.")),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(6),t(je("Something went wrong."));case 19:e.next=22;break;case 21:t(je("Please install Metamask."));case 22:case"end":return e.stop()}}),e,null,[[6,16]])})));return function(t){return e.apply(this,arguments)}}())),y()},children:"CONNECT"}),""!==t.errorMsg?Object(h.jsx)("div",{style:{textAlign:"center",fontSize:20,color:"white"},children:t.errorMsg}):null]}):Object(h.jsx)("button",{className:"ybutton",onClick:function(n){var a;n.preventDefault(),a=1,(a=document.getElementById("inputBox").textContent)<=0||(s("Minting your Official DickPix NFT..."),l(!0),t.smartContract.methods.mint(t.account,a).send({gasLimit:285e3*a,to:"0x7181d2038B849A18145eb153b8bEFC552e52c37A",from:t.account,value:t.web3.utils.toWei((.0777*a).toString(),"ether")}).once("error",(function(e){console.log(e),s("Sorry, something went wrong. Check your transaction on Etherscan to find out what happened!"),l(!1)})).then((function(n){s("Your BooCrew NFT has been successfully minted!"),l(!1),e(ye(t.account))}))),y()},children:c?"BUSY":"MINT"})]})]})})})},Oe=(n(533),function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"about-control",children:Object(h.jsx)(m.a,{children:Object(h.jsxs)(S.a,{children:[Object(h.jsxs)(N.a,{md:6,xs:12,className:"about-description",children:[Object(h.jsxs)("header",{children:[Object(h.jsx)("span",{children:"3000"})," DICKS.",Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:"777"})," ORIGINALS.",Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:"2223"})," SPECIALS.",Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:"1"})," GAME."]}),Object(h.jsx)("p",{children:"Dick Pix offers 777 unique, hilariously hand-drawn digital collectibles that represent community through ownership, and championing safer sex practices. This project blends nostalgic characters inspired by your favorite films, likenesses of people you know and love, and big comedic vibes to create a limited series of collectibles. The Dick Pix community enjoys sarcastic undertones, reading between the lines, and casual innuendos that bring laughter to the forefront of our philanthropic efforts. Portions of our sales are redistributed to charities and organizations that aid in STD/STI testing, family planning, and all-inclusive sexual wellness safety and education.                            "})]}),Object(h.jsx)(N.a,{md:6,xs:12,className:"image-control",children:Object(h.jsx)("img",{style:{border:"solid black 10px",borderRadius:20},src:q,alt:"about gif"})})]})})})}}]),n}(i.a.Component)),fe=Oe,ge=n(233),ve=n.n(ge),we=(n.p,n(534),function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"meet-control",children:[Object(h.jsx)(m.a,{children:Object(h.jsxs)("header",{style:{textAlign:"center"},children:["JUST THE TIP. ",Object(h.jsx)("br",{})," ",Object(h.jsx)("span",{children:"CHECK OUT OUR DICKS!"})]})}),Object(h.jsxs)(ve.a,{breakpoints:[{breakpoint:500,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:1280,settings:{slidesToShow:3,slidesToScroll:1}}],dots:!1,arrows:!0,showSides:!0,sidesOpacity:.5,sideSize:.1,slidesToScroll:1,slidesToShow:4,scrollOnDevice:!0,children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"caroImg",src:"https://dickpixnft.s3.us-east-2.amazonaws.com/dickpix124.png",alt:"boy1"})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"caroImg",src:"https://dickpixnft.s3.us-east-2.amazonaws.com/dickpix366.png",alt:"boy2"})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"caroImg",src:"https://dickpixnft.s3.us-east-2.amazonaws.com/dickpix373.png",alt:"boy3"})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"caroImg",src:"https://dickpixnft.s3.us-east-2.amazonaws.com/dickpix455.png",alt:"boy4"})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"caroImg",src:"https://dickpixnft.s3.us-east-2.amazonaws.com/dickpix519.png",alt:"boy5"})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"caroImg",src:"https://dickpixnft.s3.us-east-2.amazonaws.com/dickpix448.png",alt:"boy6"})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"caroImg",src:"https://dickpixnft.s3.us-east-2.amazonaws.com/dickpix438.png",alt:"boy6"})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"caroImg",src:"https://dickpixnft.s3.us-east-2.amazonaws.com/dickpix529.png",alt:"boy6"})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"caroImg",src:"https://dickpixnft.s3.us-east-2.amazonaws.com/dickpix664.png",alt:"boy6"})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"caroImg",src:"https://dickpixnft.s3.us-east-2.amazonaws.com/dickpix55.png",alt:"boy6"})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"caroImg",src:"https://dickpixnft.s3.us-east-2.amazonaws.com/dickpix24.png",alt:"boy6"})})]})]})}}]),n}(i.a.Component)),Te=we,ke=(n(535),function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"about-control",id:"team",children:Object(h.jsx)(m.a,{children:Object(h.jsxs)(S.a,{children:[Object(h.jsxs)(N.a,{md:6,xs:12,className:"about-description",style:{textAlign:"center"},children:[Object(h.jsxs)("header",{style:{textAlign:"center'",marginBottom:0},children:[Object(h.jsx)("span",{children:"OUR"})," FOUNDER",Object(h.jsx)("br",{})]}),Object(h.jsx)("a",{href:"https://instagram.com/jenfassino",style:{textDecoration:"none",color:"white",fontWeight:"bold",fontStyle:"italic",fontSize:30,marginTop:0,paddingTop:0},children:"@jenfassino"}),"Dick Pix was conceived and developed by Jen Fassino, pixel artist and host of the \u201cJen AF\u201d comedy podcast. Her love of pixel art and comedy, combined with her philanthropic efforts to expand safe sex education and best practices, led her to create a hand-drawn, completely unique 1/1 digital art collection of 777 pixelated dicks. Funny with a cause, Jen is known for disarming taboo conversations around sex through her comedic art, with a focus on advocating safe sex practices and combating sexual harassment. She is the unexpected female artist behind the collection that the NFT space never saw coming."]}),Object(h.jsx)(N.a,{md:6,xs:12,className:"image-control",children:Object(h.jsx)("img",{style:{border:"solid black 10px",borderRadius:20},src:M,alt:"about gif"})})]})})})}}]),n}(i.a.Component)),Ce=ke;n(536);var Se=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(C,{}),Object(h.jsx)(fe,{}),Object(h.jsx)(Te,{}),Object(h.jsx)(xe,{}),Object(h.jsx)(R,{}),Object(h.jsx)(Ce,{}),Object(h.jsx)(D,{}),Object(h.jsx)(U,{})]})},Ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,548)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),s(e),o(e)}))};n(537);o.a.render(Object(h.jsx)(Q.a,{store:be,children:Object(h.jsx)(Se,{})}),document.getElementById("root")),Ne()}},[[538,1,2]]]);
//# sourceMappingURL=main.cbee376a.chunk.js.map