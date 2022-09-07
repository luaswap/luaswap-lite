(this.webpackJsonp=this.webpackJsonp||[]).push([[6],{1029:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(5),u=a(24),c=a(42),o=a(74);t.default=function(e){Object(c.default)().accent;return r.a.createElement(l.default,{style:{alignItems:"flex-start",height:32,marginBottom:e.disabled?0:u.Spacing.small}},r.a.createElement(o.default,{medium:!0,fontWeight:e.fontWeight||"bold",disabled:e.disabled,style:[{flex:1,fontSize:u.IS_DESKTOP?20:18,paddingBottom:u.Spacing.tiny},e.style]},e.text))}},1030:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(12),l=a(54),u=a(87);t.default="web"===r.default.OS?function(e,t,a){var r=Object(l.useHistory)();return Object(n.useCallback)((function(){a?window.open(e,a):r.push(e)}),[e,a])}:function(e,t,a){var r=Object(u.useNavigation)().navigate;return Object(n.useCallback)((function(){r(t)}),[t])}},1031:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(5),u=a(24),c=a(70),o=a(74);t.default=function(e){var t=e.chainId,a=void 0===t?88:t,n=Object(c.default)(),s={88:"TomoChain Mainnet",56:"Binance Smart Chain Mainnet"}[a];return r.a.createElement(l.default,{style:{flex:1,alignItems:"center",justifyContent:"center"}},r.a.createElement(o.default,{light:!0,style:{textAlign:"center",marginVertical:u.Spacing.large}},n("change-network-to",{networkName:s})))}},1032:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(5),u=a(24),c=a(74);t.default=function(e){var t=e.error;return r.a.createElement(l.default,{style:{borderColor:"red",borderWidth:1,width:"100%",padding:u.Spacing.tiny,marginTop:u.Spacing.small}},t.code&&r.a.createElement(c.default,{fontWeight:"bold",style:{color:"red",fontSize:14}},"Error Code ",t.code),r.a.createElement(c.default,{note:!0,style:{color:"red",fontSize:14}},t.message))}},1033:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a.n(n),l=a(10),u=a.n(l),c=a(0),o=a.n(c),s=a(5),i=a(24),d=a(59),f=a(42),m=a(370);function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){u()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}t.default=function(e){var t=Object(c.useContext)(d.GlobalContext).darkMode,a=Object(f.default)(),n=a.backgroundLight,l=a.borderDark,u=Object(m.default)().border;return o.a.createElement(s.default,r()({},e,{style:[p(p({},u({radius:20,color:t?l:n})),{},{backgroundColor:n,padding:i.Spacing.small+i.Spacing.tiny}),e.style]}))}},1034:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),u=a(42),c=a(70),o=a(74);t.default=function(e){var t=Object(c.default)(),a=Object(u.default)(),n=a.textDark,s=a.textLight,i=a.placeholder;return r.a.createElement(o.default,{style:{fontSize:l.IS_DESKTOP?28:20,marginBottom:l.Spacing.normal,color:e.disabled?i:e.amount?n:s}},e.disabled?t("n/a"):e.amount?e.amount+" "+(e.suffix||""):t("fetching"))}},1035:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(5),u=a(24),c=a(42);t.default=function(e){var t=Object(c.default)().border;return r.a.createElement(l.default,{style:{height:1,width:"100%",backgroundColor:t,marginTop:e.small?u.Spacing.tiny:u.Spacing.small,marginBottom:e.small?u.Spacing.tiny:u.Spacing.small+u.Spacing.tiny}})}},1036:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(70),u=a(298);t.default=function(e){var t=e.symbol,a=Object(l.default)();return r.a.createElement(u.default,{title:t?a("insufficient-",{symbol:t}):a("insufficient-balance"),disabled:!0,style:{borderRadius:15}})}},1037:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(70),u=a(298);t.default=function(){var e=Object(l.default)();return r.a.createElement(u.default,{title:e("fetching"),disabled:!0,style:{borderRadius:15}})}},1040:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),u=a(42),c=a(1030),o=a(70),s=a(123),i=a(74);t.default=function(e){var t=Object(o.default)(),a=Object(u.default)(),n=a.textMedium,d=a.textLight,f=a.placeholder,m=Object(c.default)(e.url||"","","_blank"),b=e.disabled?"---":e.text?e.text+(e.suffix?" "+e.suffix:""):t("fetching");return r.a.createElement(s.default,{style:{justifyContent:"space-between",marginTop:4,paddingBottom:10}},r.a.createElement(i.default,{note:!l.IS_DESKTOP,style:{color:e.disabled?f:n}},e.label),r.a.createElement(i.default,{note:!l.IS_DESKTOP,onPress:e.url?m:void 0,style:{color:e.disabled?f:e.text?n:d,textDecorationLine:e.url?"underline":"none"}},b))}},1041:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a.n(n),l=a(0),u=a.n(l),c=a(12),o=a(5),s=a(28),i=a(24),d=a(42),f=a(21),m=a(298),b=a(1029),p=a(1047),h=function(e){var t=Object(d.default)().accent,a=Object(l.useCallback)((function(){var t,a;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:e.token&&(t=e.token.balance,Object(f.isNativeToken)(e.token)?(a=Object(f.pow10)(16),t=t.gt(a)?t.sub(a):s.ethers.constants.Zero):e.trc21Fee&&(t=t.gt(e.trc21Fee)?t.sub(e.trc21Fee):s.ethers.constants.Zero),e.updateAmount(Object(f.formatBalance)(t,e.token.decimals)));case 1:case"end":return n.stop()}}),null,null,null,Promise)}),[e.token,e.updateAmount,e.trc21Fee]);return u.a.createElement(o.default,{style:{position:"absolute",right:12,bottom:"web"===c.default.OS?17:24}},u.a.createElement(m.default,{type:"clear",size:"small",color:t,title:e.maxButtonText||(i.IS_DESKTOP?"MAX "+e.token.symbol:"MAX"),fontWeight:"bold",onPress:a,buttonStyle:{paddingHorizontal:i.Spacing.tiny}}))};t.default=function(e){var t,a,n=Object(l.useCallback)((function(t){if(e.token&&e.onAmountChanged)try{Object(f.parseBalance)(t,e.token.decimals),e.onAmountChanged(t)}catch(a){t.endsWith(".")&&t.indexOf(".")===t.length-1&&e.onAmountChanged(t)}}),[e.token,e.onAmountChanged]);return u.a.createElement(o.default,null,e.title&&u.a.createElement(b.default,{text:e.title}),u.a.createElement(o.default,null,u.a.createElement(p.default,{label:e.label,value:e.amount,onChangeText:n,placeholder:"0.0",keyboardType:"numeric",autoFocus:e.autoFocus||!1,inputContainerStyle:{borderBottomWidth:0},labelStyle:{fontFamily:"light",height:e.label?"auto":0}}),(null==(t=e.token)||null==(a=t.balance)?void 0:a.gt(0))&&!e.hideMaxButton&&u.a.createElement(h,{token:e.token,maxButtonText:e.maxButtonText,updateAmount:e.onAmountChanged,trc21Fee:e.trc21Fee})))}},1042:function(e,t,a){"use strict";a.r(t);var n=a(18),r=a.n(n),l=a(4),u=a.n(l),c=a(0),o=a.n(c),s=a(5),i=a(24),d=a(62),f=a(70),m=a(298);t.default=function(e){var t,a=Object(f.default)(),n=Object(c.useContext)(d.EthersContext).approveToken,l=Object(c.useState)(!1),b=r()(l,2),p=b[0],h=b[1],g=Object(c.useCallback)((function(){var t;return u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!e.token){a.next=19;break}return e.onError({}),h(!0),a.prev=3,a.next=6,u.a.awrap(n(e.token.address,e.spender));case 6:if(!(t=a.sent)){a.next=11;break}return a.next=10,u.a.awrap(t.wait());case 10:e.onSuccess();case 11:a.next=16;break;case 13:a.prev=13,a.t0=a.catch(3),e.onError(a.t0);case 16:return a.prev=16,h(!1),a.finish(16);case 19:case"end":return a.stop()}}),null,null,[[3,13,16,19]],Promise)}),[e.token]);return e.hidden?o.a.createElement(s.default,null):o.a.createElement(m.default,{title:a("approve-",{symbol:(null==(t=e.token)?void 0:t.symbol)||""}),onPress:g,loading:p,containerStyle:{marginBottom:i.Spacing.tiny},style:{borderRadius:15}})}},1044:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(53),u=a(63),c=a(5),o=a(54),s=a(24),i=a(1030),d=a(123),f={us:a(1051),cn:a(1052),kr:a(1053),fr:a(1054),es:a(1055),jp:a(1056)},m=function(e){var t=e.name,a=e.locale,n=Object(o.useHistory)(),c=Object(o.useLocation)();return r.a.createElement(u.default,{onPress:function(){n.push(c.pathname+"?locale="+a)},style:{marginHorizontal:4}},r.a.createElement(l.default,{source:f[t],style:{width:30,height:20}}))};t.default=function(e){e.simple,Object(i.default)("https://dashboard.alchemyapi.io/signup?referral=429fb682-0d85-40ab-ad88-daf847cf7c63","","_blank");return r.a.createElement(c.default,{style:{width:"100%",padding:s.Spacing.normal,alignItems:"center"}},r.a.createElement(d.default,{style:{marginTop:s.Spacing.small}},r.a.createElement(m,{name:"us",locale:"en"}),r.a.createElement(m,{name:"es",locale:"es"}),r.a.createElement(m,{name:"fr",locale:"fr"}),r.a.createElement(m,{name:"cn",locale:"zh"}),r.a.createElement(m,{name:"jp",locale:"jp"}),r.a.createElement(m,{name:"kr",locale:"ko"})))}},1046:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(5),u=a(24),c=a(42),o=a(370),s=a(298),i=a(74);t.default=function(e){var t=Object(c.default)().textLight,a=(0,Object(o.default)().border)({color:e.color}),n=e.color||t;return r.a.createElement(l.default,{style:[e.clear?{}:a,e.style]},r.a.createElement(i.default,{note:!0,style:{color:n,fontSize:u.IS_DESKTOP?13:10}},e.text),e.buttonText&&e.onPressButton&&r.a.createElement(s.default,{title:e.buttonText,type:"clear",size:"small",fontWeight:"bold",onPress:e.onPressButton,titleStyle:{color:n},buttonStyle:{paddingHorizontal:0,paddingVertical:0},style:{alignSelf:"flex-end",marginTop:u.Spacing.tiny}}))}},1047:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a.n(n),l=a(0),u=a.n(l),c=a(12),o=a(98),s=a(42),i=a(370);t.default=function(e){var t=Object(s.default)(),a=t.textDark,n=t.textMedium,d=t.textLight,f=Object(i.default)().border,m=e.size||"normal",b=e.color||a,p="small"===m?16:"large"===m?24:20,h=Object(l.useCallback)((function(t){null==e.onChangeText||e.onChangeText(t),null==e.onError||e.onError("");var a=[];""!==t&&e.forbidden&&e.forbidden.forEach((function(e){t.match(e.regexp)&&a.push(e.error)})),""!==t&&e.allowed&&e.allowed.forEach((function(e){t.match(e.regexp)||a.push(e.error)})),a.length>0&&(null==e.onError||e.onError(a.join("\n")))}),[e.onChangeText,e.onError,e.forbidden,e.allowed]);return u.a.createElement(o.Input,r()({},e,{inputStyle:[f(),{fontSize:p,fontFamily:"regular",paddingVertical:10,color:b,marginTop:0,minHeight:32},"web"===c.default.OS?{outline:"none"}:{},e.inputStyle],labelStyle:[{color:n},e.labelStyle],placeholderTextColor:e.placeholderTextColor||d,errorStyle:e.onError?{height:0}:e.errorStyle,containerStyle:[{paddingHorizontal:0},e.containerStyle],onChangeText:h}))}},1051:function(e,t,a){e.exports=a.p+"static/media/us.d367121f.png"},1052:function(e,t,a){e.exports=a.p+"static/media/cn.baedda5d.png"},1053:function(e,t,a){e.exports=a.p+"static/media/kr.146730ea.png"},1054:function(e,t,a){e.exports=a.p+"static/media/fr.dda60be7.png"},1055:function(e,t,a){e.exports=a.p+"static/media/es.82844a36.png"},1056:function(e,t,a){e.exports=a.p+"static/media/jp.27444bf9.png"},1077:function(e,t,a){"use strict";a.r(t);var n=a(18),r=a.n(n),l=a(4),u=a.n(l),c=a(0),o=a(28),s=a(139),i=a.n(s),d=a(67),f=a(62),m=a(21),b=a(100),p=function(){return{enter:Object(c.useCallback)((function(e,t){var a,n,r;return u.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return a=Object(m.getContract)("SushiBar",d.SUSHI_BAR,t),l.next=3,u.a.awrap(a.estimateGas.enter(e));case 3:return n=l.sent,l.next=6,u.a.awrap(a.enter(e,{gasLimit:n.mul(120).div(100)}));case 6:return r=l.sent,l.abrupt("return",Object(b.logTransaction)(r,"SushiBar.enter()",e.toString()));case 8:case"end":return l.stop()}}),null,null,null,Promise)}),[]),leave:Object(c.useCallback)((function(e,t){var a,n,r;return u.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return a=Object(m.getContract)("SushiBar",d.SUSHI_BAR,t),l.next=3,u.a.awrap(a.estimateGas.leave(e));case 3:return n=l.sent,l.next=6,u.a.awrap(a.leave(e,{gasLimit:n.mul(120).div(100)}));case 6:return r=l.sent,l.abrupt("return",Object(b.logTransaction)(r,"SushiBar.leave()",e.toString()));case 8:case"end":return l.stop()}}),null,null,null,Promise)}),[])}};t.default=function(){var e=Object(c.useContext)(f.EthersContext),t=e.signer,a=e.address,n=e.getTokenAllowance,l=e.tokens,s=e.updateTokens,b=p(),h=b.enter,g=b.leave,S=Object(c.useState)(),x=r()(S,2),E=x[0],O=x[1],y=Object(c.useState)(),v=r()(y,2),j=v[0],k=v[1],w=Object(c.useState)(),C=r()(w,2),B=C[0],T=C[1],P=Object(c.useState)(""),A=r()(P,2),I=A[0],H=A[1],D=Object(c.useState)(!1),_=r()(D,2),z=_[0],F=_[1],M=Object(c.useState)(!1),R=r()(M,2),L=R[0],U=R[1],W=Object(c.useState)(!1),K=r()(W,2),N=K[0],Z=K[1],V=Object(c.useState)(!1),G=r()(V,2),X=G[0],J=G[1],q=Object(c.useState)(!1),Q=r()(q,2),Y=Q[0],$=Q[1],ee=Object(c.useMemo)((function(){return l.find((function(e){return"SUSHI"===e.symbol}))}),[l]),te=Object(c.useMemo)((function(){return l.find((function(e){return"xSUSHI"===e.symbol}))}),[l]);Object(c.useEffect)((function(){H("")}),[a]),i()((function(){var e,a,r,l,c;return u.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:if(!(ee&&te&&t)){s.next=34;break}return F(!1),U(!1),Z(!0),s.prev=4,e=o.ethers.BigNumber.from(2).pow(96).sub(1),s.next=8,u.a.awrap(n(ee.address,d.SUSHI_BAR));case 8:return a=s.sent,F(o.ethers.BigNumber.from(a).gte(e)),s.next=12,u.a.awrap(n(te.address,d.SUSHI_BAR));case 12:return r=s.sent,U(o.ethers.BigNumber.from(r).gte(e)),l=Object(m.getContract)("ERC20",ee.address,t),s.t0=O,s.next=18,u.a.awrap(l.balanceOf(d.SUSHI_BAR));case 18:return s.t1=s.sent,(0,s.t0)(s.t1),s.t2=k,s.next=23,u.a.awrap(l.totalSupply());case 23:return s.t3=s.sent,(0,s.t2)(s.t3),c=Object(m.getContract)("ERC20",te.address,t),s.t4=T,s.next=29,u.a.awrap(c.totalSupply());case 29:s.t5=s.sent,(0,s.t4)(s.t5);case 31:return s.prev=31,Z(!1),s.finish(31);case 34:case"end":return s.stop()}}),null,null,[[4,,31,34]],Promise)}),[ee,te,t]);var ae=Object(c.useCallback)((function(){var e,a;return u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(I&&ee&&t)){n.next=16;break}return J(!0),n.prev=2,e=Object(m.parseBalance)(I,ee.decimals),n.next=6,u.a.awrap(h(e,t));case 6:if(!(a=n.sent)){n.next=13;break}return n.next=10,u.a.awrap(a.wait());case 10:return n.next=12,u.a.awrap(s());case 12:H("");case 13:return n.prev=13,J(!1),n.finish(13);case 16:case"end":return n.stop()}}),null,null,[[2,,13,16]],Promise)}),[I,ee,t]),ne=Object(c.useCallback)((function(){var e,a;return u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(I&&te&&t)){n.next=16;break}return $(!0),n.prev=2,e=Object(m.parseBalance)(I,te.decimals),n.next=6,u.a.awrap(g(e,t));case 6:if(!(a=n.sent)){n.next=13;break}return n.next=10,u.a.awrap(a.wait());case 10:return n.next=12,u.a.awrap(s());case 12:H("");case 13:return n.prev=13,$(!1),n.finish(13);case 16:case"end":return n.stop()}}),null,null,[[2,,13,16]],Promise)}),[I,te,t]);return{sushi:ee,xSushi:te,sushiStaked:E,sushiSupply:j,xSushiSupply:B,amount:I,setAmount:H,sushiAllowed:z,setSushiAllowed:F,xSushiAllowed:L,setXSushiAllowed:U,loading:N,onEnter:ae,entering:X,onLeave:ne,leaving:Y}}},1221:function(e,t,a){"use strict";a.r(t);var n=a(18),r=a.n(n),l=a(4),u=a.n(l),c=a(0),o=a.n(c),s=a(12),i=a(5),d=a(1034),f=a(1042),m=a(373),b=a(1035),p=a(298),h=a(1031),g=a(371),S=a(375),x=a(1032),E=a(1037),O=a(1029),y=a(1033),v=a(1036),j=a(1040),k=a(1046),w=a(74),C=a(376),B=a(1041),T=a(1044),P=a(374),A=a(67),I=a(24),H=a(158),D=a(62),_=a(1077),z=a(70),F=a(21),M=a(372),R=function(){if(88!==Object(c.useContext)(D.EthersContext).chainId)return o.a.createElement(h.default,null);var e=Object(z.default)(),t=Object(_.default)();return o.a.createElement(i.default,{style:{marginTop:I.Spacing.large}},o.a.createElement(L,{state:t}),o.a.createElement(b.default,null),o.a.createElement(U,{state:t}),t.sushi&&t.sushi.balance.isZero()&&o.a.createElement(k.default,{text:e("you-dont-have-sushi"),color:"orange",style:{marginTop:I.Spacing.small}}),o.a.createElement(W,{state:t}))},L=function(e){var t=e.state,a=Object(z.default)();return o.a.createElement(i.default,null,o.a.createElement(O.default,{text:a("your-sushi")}),o.a.createElement(d.default,{amount:t.sushi?Object(F.formatBalance)(t.sushi.balance,t.sushi.decimals):"",suffix:"SUSHI"}))},U=function(e){var t=e.state,a=Object(z.default)();return!t.sushi||t.sushi.balance.isZero()?o.a.createElement(O.default,{text:a("amount-to-stake"),disabled:!0}):o.a.createElement(i.default,null,o.a.createElement(O.default,{text:a("amount-to-stake")}),o.a.createElement(B.default,{token:t.sushi,amount:t.amount,onAmountChanged:t.setAmount,autoFocus:I.IS_DESKTOP}))},W=function(e){var t=e.state,a=Object(z.default)(),n=!t.sushi||t.sushi.balance.isZero()||!t.xSushi||!t.sushiStaked||!t.xSushiSupply||Object(F.isEmptyValue)(t.amount),r=n?void 0:Object(F.parseBalance)(t.amount,t.sushi.decimals).mul(t.xSushiSupply).div(t.sushiStaked),l=n?void 0:Object(F.formatBalance)(t.xSushiSupply,t.xSushi.decimals,8),u=n?void 0:t.xSushi.balance.add(r),c=n?void 0:H.default.from(r.add(u),t.xSushiSupply).toString();return o.a.createElement(y.default,null,o.a.createElement(d.default,{amount:r?Object(F.formatBalance)(r,t.xSushi.decimals,8):"",suffix:"xSUSHI",disabled:n}),o.a.createElement(j.default,{label:a("xsushi-share"),text:c,suffix:"%",disabled:n}),o.a.createElement(j.default,{label:a("total-xsushi"),text:l,disabled:n}),o.a.createElement(K,{state:t}))},K=function(e){var t=e.state,a=Object(c.useState)({}),n=r()(a,2),l=n[0],u=n[1];return o.a.createElement(i.default,{style:{marginTop:I.Spacing.normal}},!t.sushi||t.sushi.balance.isZero()||Object(F.isEmptyValue)(t.amount)?o.a.createElement(N,{state:t,onError:u,disabled:!0}):Object(F.parseBalance)(t.amount,t.sushi.decimals).gt(t.sushi.balance)?o.a.createElement(v.default,{symbol:t.sushi.symbol}):t.loading?o.a.createElement(E.default,null):o.a.createElement(o.a.Fragment,null,o.a.createElement(f.default,{token:t.sushi,spender:A.SUSHI_BAR,onSuccess:function(){return t.setSushiAllowed(!0)},onError:u,hidden:t.sushiAllowed}),o.a.createElement(N,{state:t,onError:u,disabled:!t.sushiAllowed})),l.message&&4001!==l.code&&o.a.createElement(x.default,{error:l}))},N=function(e){var t=e.state,a=e.onError,n=e.disabled,r=Object(z.default)();return o.a.createElement(p.default,{title:r("stake"),loading:t.entering,onPress:function(){return u.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return a({}),e.prev=1,e.next=4,u.a.awrap(t.onEnter());case 4:t.setAmount(""),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),a(e.t0);case 10:case"end":return e.stop()}}),null,null,[[1,7]],Promise)},disabled:n})};t.default=function(){var e=Object(z.default)();return o.a.createElement(M.default,null,o.a.createElement(g.default,null,o.a.createElement(m.default,null),o.a.createElement(S.default,null,o.a.createElement(C.default,{text:e("stake")}),o.a.createElement(w.default,{light:!0},e("stake-desc")),o.a.createElement(R,null)),"web"===s.default.OS&&o.a.createElement(T.default,null)),o.a.createElement(P.StakingSubMenu,null))}}}]);
//# sourceMappingURL=6.b381dbfb.chunk.js.map