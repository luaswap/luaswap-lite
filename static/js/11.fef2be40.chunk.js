(this.webpackJsonp=this.webpackJsonp||[]).push([[11],{1034:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(24),c=n(42),l=n(70),u=n(74);t.default=function(e){var t=Object(l.default)(),n=Object(c.default)(),a=n.textDark,s=n.textLight,i=n.placeholder;return r.a.createElement(u.default,{style:{fontSize:o.IS_DESKTOP?28:20,marginBottom:o.Spacing.normal,color:e.disabled?i:e.amount?a:s}},e.disabled?t("n/a"):e.amount?e.amount+" "+(e.suffix||""):t("fetching"))}},1036:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(70),c=n(298);t.default=function(e){var t=e.symbol,n=Object(o.default)();return r.a.createElement(c.default,{title:t?n("insufficient-",{symbol:t}):n("insufficient-balance"),disabled:!0,style:{borderRadius:15}})}},1042:function(e,t,n){"use strict";n.r(t);var a=n(18),r=n.n(a),o=n(4),c=n.n(o),l=n(0),u=n.n(l),s=n(5),i=n(24),d=n(62),f=n(70),m=n(298);t.default=function(e){var t,n=Object(f.default)(),a=Object(l.useContext)(d.EthersContext).approveToken,o=Object(l.useState)(!1),p=r()(o,2),b=p[0],k=p[1],v=Object(l.useCallback)((function(){var t;return c.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.token){n.next=19;break}return e.onError({}),k(!0),n.prev=3,n.next=6,c.a.awrap(a(e.token.address,e.spender));case 6:if(!(t=n.sent)){n.next=11;break}return n.next=10,c.a.awrap(t.wait());case 10:e.onSuccess();case 11:n.next=16;break;case 13:n.prev=13,n.t0=n.catch(3),e.onError(n.t0);case 16:return n.prev=16,k(!1),n.finish(16);case 19:case"end":return n.stop()}}),null,null,[[3,13,16,19]],Promise)}),[e.token]);return e.hidden?u.a.createElement(s.default,null):u.a.createElement(m.default,{title:n("approve-",{symbol:(null==(t=e.token)?void 0:t.symbol)||""}),onPress:v,loading:b,containerStyle:{marginBottom:i.Spacing.tiny},style:{borderRadius:15}})}},1060:function(e,t,n){"use strict";var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,o){function c(e){try{u(a.next(e))}catch(t){o(t)}}function l(e){try{u(a.throw(e))}catch(t){o(t)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,l)}u((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.signERC2612Permit=t.signDaiPermit=void 0;const r=n(381),o=n(1061),c="0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",l=[{name:"name",type:"string"},{name:"version",type:"string"},{name:"chainId",type:"uint256"},{name:"verifyingContract",type:"address"}],u=e=>"".padEnd(e,"0"),s=(e,t)=>a(void 0,void 0,void 0,(function*(){return o.hexToUtf8((yield r.call(e,t,"0x06fdde03")).substr(130))})),i=(e,t)=>a(void 0,void 0,void 0,(function*(){if("string"!==typeof t)return t;const n=t,[a,o]=yield Promise.all([s(e,n),r.getChainId(e)]);return{name:a,version:"1",chainId:o,verifyingContract:n}}));t.signDaiPermit=(e,t,n,o,s,d)=>a(void 0,void 0,void 0,(function*(){const a=t.verifyingContract||t,f={holder:n,spender:o,nonce:d||(yield r.call(e,a,`0x7ecebe00${u(24)}${n.substr(2)}`)),expiry:s||c,allowed:!0},m=((e,t)=>({types:{EIP712Domain:l,Permit:[{name:"holder",type:"address"},{name:"spender",type:"address"},{name:"nonce",type:"uint256"},{name:"expiry",type:"uint256"},{name:"allowed",type:"bool"}]},primaryType:"Permit",domain:t,message:e}))(f,yield i(e,t)),p=yield r.signData(e,n,m);return Object.assign(Object.assign({},p),f)})),t.signERC2612Permit=(e,t,n,o,s=c,d,f)=>a(void 0,void 0,void 0,(function*(){const a=t.verifyingContract||t,m={owner:n,spender:o,value:s,nonce:f||(yield r.call(e,a,`0x7ecebe00${u(24)}${n.substr(2)}`)),deadline:d||c},p=((e,t)=>({types:{EIP712Domain:l,Permit:[{name:"owner",type:"address"},{name:"spender",type:"address"},{name:"value",type:"uint256"},{name:"nonce",type:"uint256"},{name:"deadline",type:"uint256"}]},primaryType:"Permit",domain:t,message:e}))(m,yield i(e,t)),b=yield r.signData(e,n,p);return Object.assign(Object.assign({},b),m)}))},1061:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.hexToUtf8=void 0;const r=a(n(1062));t.hexToUtf8=function(e){let t="",n=0,a=(e=(e=(e=(e=(e=e.replace(/^0x/i,"")).replace(/^(?:00)*/,"")).split("").reverse().join("")).replace(/^(?:00)*/,"")).split("").reverse().join("")).length;for(let r=0;r<a;r+=2)n=parseInt(e.substr(r,2),16),t+=String.fromCharCode(n);return r.default.decode(t)}},1062:function(e,t,n){!function(e){var t,n,a,r=String.fromCharCode;function o(e){for(var t,n,a=[],r=0,o=e.length;r<o;)(t=e.charCodeAt(r++))>=55296&&t<=56319&&r<o?56320==(64512&(n=e.charCodeAt(r++)))?a.push(((1023&t)<<10)+(1023&n)+65536):(a.push(t),r--):a.push(t);return a}function c(e){if(e>=55296&&e<=57343)throw Error("Lone surrogate U+"+e.toString(16).toUpperCase()+" is not a scalar value")}function l(e,t){return r(e>>t&63|128)}function u(e){if(0==(4294967168&e))return r(e);var t="";return 0==(4294965248&e)?t=r(e>>6&31|192):0==(4294901760&e)?(c(e),t=r(e>>12&15|224),t+=l(e,6)):0==(4292870144&e)&&(t=r(e>>18&7|240),t+=l(e,12),t+=l(e,6)),t+=r(63&e|128)}function s(){if(a>=n)throw Error("Invalid byte index");var e=255&t[a];if(a++,128==(192&e))return 63&e;throw Error("Invalid continuation byte")}function i(){var e,r;if(a>n)throw Error("Invalid byte index");if(a==n)return!1;if(e=255&t[a],a++,0==(128&e))return e;if(192==(224&e)){if((r=(31&e)<<6|s())>=128)return r;throw Error("Invalid continuation byte")}if(224==(240&e)){if((r=(15&e)<<12|s()<<6|s())>=2048)return c(r),r;throw Error("Invalid continuation byte")}if(240==(248&e)&&(r=(7&e)<<18|s()<<12|s()<<6|s())>=65536&&r<=1114111)return r;throw Error("Invalid UTF-8 detected")}e.version="3.0.0",e.encode=function(e){for(var t=o(e),n=t.length,a=-1,r="";++a<n;)r+=u(t[a]);return r},e.decode=function(e){t=o(e),n=t.length,a=0;for(var c,l=[];!1!==(c=i());)l.push(c);return function(e){for(var t,n=e.length,a=-1,o="";++a<n;)(t=e[a])>65535&&(o+=r((t-=65536)>>>10&1023|55296),t=56320|1023&t),o+=r(t);return o}(l)}}(t)},1063:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(24),c=n(74);t.default=function(e){return r.a.createElement(c.default,{medium:!0,caption:!0,disabled:e.disabled,style:{marginLeft:o.Spacing.tiny,fontWeight:"bold"}},e.token.symbol)}},1074:function(e,t,n){"use strict";n.r(t);var a=n(27),r=n.n(a),o=n(4),c=n.n(o),l=n(0),u=n(40),s=n(1060),i=n(28),d=n(67),f=n(62),m=n(21),p=n(100),b=n(378),k=n(377);t.default=function(){var e=Object(l.useContext)(f.EthersContext).ethereum,t=Object(b.default)(),n=t.getPair,a=t.getTrade,o=t.calculateAmountOfLPTokenMinted,v=Object(k.default)(),T=v.allowedSlippage,y=v.ttl,O=new u.Percent("3","100"),g=function(e,t,n,o,l){var s,i,f,p,b;return c.a.async((function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,c.a.awrap(a(e,t,n,o));case 2:if(i=k.sent){k.next=5;break}throw new Error("Cannot find trade");case 5:return f=u.Router.swapCallParameters(i,{feeOnTransfer:!1,allowedSlippage:T,recipient:d.ZAP_IN,ttl:y}),p=Object(m.getContract)("IUniswapV2Router02",d.ROUTER,l),k.next=9,c.a.awrap((s=p.populateTransaction)[f.methodName].apply(s,r()(f.args).concat([{value:f.value}])));case 9:return b=k.sent,k.abrupt("return",b.data||"");case 11:case"end":return k.stop()}}),null,null,null,Promise)},E=Object(l.useCallback)((function(e,t,a,l,s){var f,b,k,v,T,y,E,h,P;return c.a.async((function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,c.a.awrap(n(e,t,l));case 2:return b=j.sent,k=new u.TokenAmount(Object(m.convertToken)(e),a.div(2).toString()),j.next=6,c.a.awrap(o(b,k,b.getOutputAmount(k)[0]));case 6:if(v=j.sent){j.next=9;break}throw new Error("Cannot calculate LP token amount");case 9:return T=Object(m.getContract)("ZapIn",d.ZAP_IN,s),j.t0=e.address,j.t1=b.liquidityToken.address,j.t2=a,j.t3=Object(m.deduct)(v,O),j.t4=d.ROUTER,j.t5=d.ROUTER,j.next=18,c.a.awrap(g(e,t,a.div(2),l,s));case 18:return j.t6=j.sent,y=[j.t0,j.t1,j.t2,j.t3,j.t4,j.t5,j.t6],E=Object(m.isNativeToken)(e)?a:i.ethers.constants.Zero,j.next=23,c.a.awrap((f=T.estimateGas).ZapIn.apply(f,y.concat([{value:E}])));case 23:return h=j.sent,j.next=26,c.a.awrap(T.ZapIn.apply(T,y.concat([{value:E,gasLimit:h.mul(120).div(100)}])));case 26:return P=j.sent,j.abrupt("return",p.logTransaction.apply(void 0,[P,"ZapIn_General_V2.ZapIn()"].concat(r()(y.map((function(e){return e.toString()}))))));case 28:case"end":return j.stop()}}),null,null,null,Promise)}),[g]),h=function(e,t,r,o){var l,u,s,i,d,f;return c.a.async((function(p){for(;;)switch(p.prev=p.next){case 0:if(e!==t.tokenA){p.next=5;break}l=t.tokenB,u=t.tokenA,p.next=11;break;case 5:if(e!==t.tokenB){p.next=10;break}l=t.tokenA,u=t.tokenB,p.next=11;break;case 10:throw new Error("Wrong outputToken");case 11:return p.next=13,c.a.awrap(n(l,u,o));case 13:return s=p.sent,i=Object(m.parseCurrencyAmount)(s.reserveOf(Object(m.convertToken)(l)),l.decimals),d=r.mul(i).div(t.totalSupply),p.next=18,c.a.awrap(a(l,u,d,o));case 18:if(f=p.sent){p.next=21;break}throw new Error("Cannot find trade");case 21:return p.abrupt("return",Object(m.parseCurrencyAmount)(f.outputAmount));case 22:case"end":return p.stop()}}),null,null,null,Promise)};return{zapIn:E,zapOut:Object(l.useCallback)((function(t,n,a,o,l){var u,i,f,b,k,v,T;return c.a.async((function(g){for(;;)switch(g.prev=g.next){case 0:return i=Object(m.getContract)("ZapOut",d.ZAP_OUT,l),f=Math.floor((new Date).getTime()/1e3)+y,g.t0=c.a,g.t1=s.signERC2612Permit,g.t2=e,g.t3=t.address,g.next=8,c.a.awrap(l.getAddress());case 8:return g.t4=g.sent,g.t5=d.ZAP_OUT,g.t6=a.toString(),g.t7=f,g.t8=(0,g.t1)(g.t2,g.t3,g.t4,g.t5,g.t6,g.t7),g.next=15,g.t0.awrap.call(g.t0,g.t8);case 15:return b=g.sent,g.t9=n.address,g.t10=t.address,g.t11=a,g.t12=m.deduct,g.next=22,c.a.awrap(h(n,t,a,o));case 22:return g.t13=g.sent,g.t14=O,g.t15=(0,g.t12)(g.t13,g.t14),g.t16=a,g.t17=f,g.t18=b.v,g.t19=b.r,g.t20=b.s,k=[g.t9,g.t10,g.t11,g.t15,g.t16,g.t17,g.t18,g.t19,g.t20],g.next=33,c.a.awrap((u=i.estimateGas).ZapOutWithPermit.apply(u,k));case 33:return v=g.sent,g.next=36,c.a.awrap(i.ZapOutWithPermit.apply(i,k.concat([{gasLimit:v.mul(120).div(100)}])));case 36:return T=g.sent,g.abrupt("return",p.logTransaction.apply(void 0,[T,"ZapOut_General_V1.ZapOutWithPermit()"].concat(r()(k.map((function(e){return e.toString()}))))));case 38:case"end":return g.stop()}}),null,null,null,Promise)}),[h]),getZapOutSwappedAmount:h}}},1227:function(e,t,n){"use strict";n.r(t),n.d(t,"LPTokenOutputItem",(function(){return te}));var a=n(18),r=n.n(a),o=n(0),c=n.n(o),l=n(12),u=n(5),s=n(139),i=n.n(s),d=n(1034),f=n(1042),m=n(373),p=n(1035),b=n(298),k=n(1031),v=n(1057),T=n(371),y=n(375),O=n(1032),g=n(1037),E=n(123),h=n(1029),P=n(1033),j=n(1036),w=n(1038),x=n(1064),S=n(1040),L=n(1043),A=n(1065),C=n(74),I=n(376),B=n(1041),R=n(1039),_=(n(1063),n(1044)),Z=n(374),D=n(67),U=n(24),W=n(62),N=n(10),q=n.n(N),M=n(4),F=n.n(M),G=n(28),H=n(21),V=n(1066),z=n(377),$=n(1074);function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(Object(n),!0).forEach((function(t){q()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Q=function(){var e=Object(V.default)("my-lp-tokens"),t=Object(o.useContext)(W.EthersContext),n=t.provider,a=t.signer,c=t.getTokenAllowance,l=t.updateTokens,u=(t.chainId,Object(z.default)()),s=u.removeLiquidity,d=u.removeLiquidityETH,f=Object($.default)().zapOut,m=Object(o.useState)(!1),p=r()(m,2),b=p[0],k=p[1],v=Object(o.useState)(),T=r()(v,2),y=T[0],O=T[1],g=Object(o.useState)(!1),E=r()(g,2),h=E[0],P=E[1];i()((function(){var t,n;return F.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(!a||!e.selectedLPToken){r.next=16;break}return e.setFromSymbol(e.selectedLPToken.tokenA.symbol),e.setToSymbol(e.selectedLPToken.tokenB.symbol),k(!0),e.setSelectedLPTokenAllowed(!1),r.prev=5,t=G.ethers.BigNumber.from(2).pow(96).sub(1),r.next=9,F.a.awrap(c(e.selectedLPToken.address,D.ROUTER));case 9:n=r.sent,e.setSelectedLPTokenAllowed(G.ethers.BigNumber.from(n).gte(t));case 11:return r.prev=11,k(!1),r.finish(11);case 14:r.next=18;break;case 16:e.setFromSymbol(""),e.setToSymbol("");case 18:case"end":return r.stop()}}),null,null,[[5,,11,14]],Promise)}),[a,e.selectedLPToken]),i()((function(){var t,n;return F.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:e.selectedLPToken&&e.selectedLPToken.totalSupply&&e.pair&&e.fromToken&&e.toToken&&e.pair.liquidityToken.address===e.selectedLPToken.address&&(t=Object(H.parseCurrencyAmount)(e.pair.reserveOf(Object(H.convertToken)(e.fromToken)),e.fromToken.decimals),n=Object(H.parseCurrencyAmount)(e.pair.reserveOf(Object(H.convertToken)(e.toToken)),e.toToken.decimals),e.setFromAmount(Object(H.formatBalance)(Object(H.parseBalance)(e.amount,e.selectedLPToken.decimals).mul(t).div(e.selectedLPToken.totalSupply).toString(),e.selectedLPToken.tokenA.decimals)),e.setToAmount(Object(H.formatBalance)(Object(H.parseBalance)(e.amount,e.selectedLPToken.decimals).mul(n).div(e.selectedLPToken.totalSupply).toString(),e.selectedLPToken.tokenB.decimals)));case 1:case"end":return a.stop()}}),null,null,null,Promise)}),[e.selectedLPToken,e.amount,e.pair,e.fromToken,e.toToken,a]);var j=function(){var t,n,r,o,c,l,u,i;return F.a.async((function(f){for(;;)switch(f.prev=f.next){case 0:if(!e.selectedLPToken||!a){f.next=20;break}if(t=Object(H.parseBalance)(e.fromAmount,e.fromToken.decimals),n=Object(H.parseBalance)(e.toAmount,e.toToken.decimals),r=Object(H.parseBalance)(e.amount,e.selectedLPToken.decimals),!Object(H.isWrappedNativeToken)(e.fromToken)&&!Object(H.isWrappedNativeToken)(e.toToken)){f.next=15;break}return o=Object(H.isWrappedNativeToken)(e.fromToken)?e.toToken:e.fromToken,c=Object(H.isWrappedNativeToken)(e.fromToken)?n:t,l=Object(H.isWrappedNativeToken)(e.fromToken)?t:n,f.next=10,F.a.awrap(d(o,r,c,l,a));case 10:return u=f.sent,f.next=13,F.a.awrap(u.wait());case 13:f.next=20;break;case 15:return f.next=17,F.a.awrap(s(e.fromToken,e.toToken,r,t,n,a));case 17:return i=f.sent,f.next=20,F.a.awrap(i.wait());case 20:case"end":return f.stop()}}),null,null,null,Promise)},w=Object(o.useCallback)((function(){return F.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.fromAmount&&e.toAmount&&e.selectedLPToken&&e.amount&&n&&a)){t.next=13;break}return P(!0),t.prev=2,t.next=5,F.a.awrap(j());case 5:return t.next=7,F.a.awrap(l());case 7:return t.next=9,F.a.awrap(e.updateLPTokens());case 9:e.setSelectedLPToken(void 0);case 10:return t.prev=10,P(!1),t.finish(10);case 13:case"end":return t.stop()}}),null,null,[[2,,10,13]],Promise)}),[e.fromAmount,e.toAmount,e.selectedLPToken,e.amount,e.updateLPTokens,j,f,l,n,a]);return K(K({},e),{},{loading:e.loading||b,outputToken:y,setOutputToken:O,onRemove:w,removing:h})},X=n(70),Y=n(372),ee=function(){if(88!==Object(o.useContext)(W.EthersContext).chainId)return c.a.createElement(k.default,null);var e=Object(X.default)(),t=Q();return c.a.createElement(u.default,{style:{marginTop:U.Spacing.large}},c.a.createElement(x.default,{state:t,title:e("your-liquidity"),emptyText:e("you-dont-have-liquidity"),Item:x.LPTokenItem}),c.a.createElement(p.default,null),c.a.createElement(ne,{state:t}),c.a.createElement(ae,{state:t}))},te=function(e){return e.hidden?c.a.createElement(u.default,null):c.a.createElement(L.default,{selected:e.selected,onPress:e.onSelectToken,containerStyle:{marginBottom:w.ITEM_SEPARATOR_HEIGHT}},c.a.createElement(E.default,{style:{alignItems:"center"}},c.a.createElement(R.default,{token:e.token.tokenA,small:!0,replaceWETH:!0}),c.a.createElement(R.default,{token:e.token.tokenB,small:!0,replaceWETH:!0,style:{marginLeft:4}}),c.a.createElement(C.default,{medium:!0,caption:!0,style:{marginLeft:U.Spacing.tiny}},e.token.tokenA.symbol," + ",e.token.tokenB.symbol),c.a.createElement(u.default,{style:{flex:1}}),e.selected?c.a.createElement(v.default,null):c.a.createElement(A.default,null)))},ne=function(e){var t=e.state,n=Object(X.default)();return t.selectedLPToken?c.a.createElement(B.default,{title:n("amount-of-tokens"),token:t.selectedLPToken,amount:t.amount,onAmountChanged:t.setAmount}):c.a.createElement(h.default,{text:n("amount-of-tokens"),disabled:!0})},ae=function(e){var t,n=e.state,a=Object(X.default)(),r=!n.selectedLPToken||!n.fromToken||!n.toToken,l=Object(o.useMemo)((function(){if(n.fromToken&&n.outputToken===n.fromToken){var e=Object(H.parseBalance)(n.fromAmount,n.fromToken.decimals);return Object(H.formatBalance)(e.add(Object(H.deduct)(e,z.FEE)),n.fromToken.decimals)}if(n.toToken&&n.outputToken===n.toToken){var t=Object(H.parseBalance)(n.toAmount,n.toToken.decimals);return Object(H.formatBalance)(t.add(Object(H.deduct)(t,z.FEE)),n.toToken.decimals)}}),[n.outputToken,n.fromToken,n.toToken,n.fromAmount,n.toAmount]);return c.a.createElement(P.default,null,(n.outputToken===n.fromToken||n.outputToken===n.toToken)&&c.a.createElement(d.default,{amount:l,suffix:null==(t=n.outputToken)?void 0:t.symbol,disabled:r}),c.a.createElement(S.default,{label:n.fromToken?n.fromToken.symbol:a("1st-token"),text:n.fromAmount,disabled:r}),c.a.createElement(S.default,{label:n.toToken?n.toToken.symbol:a("2nd-token"),text:n.toAmount,disabled:r}),c.a.createElement(re,{state:n}))},re=function(e){var t=e.state,n=Object(o.useState)({}),a=r()(n,2),l=a[0],s=a[1];i()((function(){return s({})}),[t.fromSymbol,t.toSymbol,t.fromAmount]);var d=!t.selectedLPTokenAllowed,m=d||Object(H.isEmptyValue)(t.amount);return c.a.createElement(u.default,{style:{marginTop:U.Spacing.normal}},!t.selectedLPToken||Object(H.isEmptyValue)(t.amount)?c.a.createElement(oe,{state:t,onError:s,disabled:!0}):Object(H.parseBalance)(t.amount,t.selectedLPToken.decimals).gt(t.selectedLPToken.balance)?c.a.createElement(j.default,{symbol:t.selectedLPToken.symbol}):t.loading||!t.pair?c.a.createElement(g.default,null):c.a.createElement(c.a.Fragment,null,c.a.createElement(f.default,{token:t.selectedLPToken,spender:D.ROUTER,onSuccess:function(){return t.setSelectedLPTokenAllowed(!0)},onError:s,hidden:!d}),c.a.createElement(oe,{state:t,onError:s,disabled:m})),l.message&&4001!==l.code&&c.a.createElement(O.default,{error:l}))},oe=function(e){var t=e.state,n=e.onError,a=e.disabled,r=Object(X.default)(),l=Object(o.useCallback)((function(){n({}),t.onRemove().catch(n)}),[t.onRemove,n]);return c.a.createElement(b.default,{title:r("remove-liquidity"),disabled:a,loading:t.removing,onPress:l})};t.default=function(){var e=Object(X.default)();return c.a.createElement(Y.default,null,c.a.createElement(T.default,null,c.a.createElement(m.default,null),c.a.createElement(y.default,null,c.a.createElement(I.default,{text:e("remove-liquidity")}),c.a.createElement(C.default,{light:!0},e("remove-liquidity-desc")),c.a.createElement(ee,null)),"web"===l.default.OS&&c.a.createElement(_.default,null)),c.a.createElement(Z.LiquiditySubMenu,null))}}}]);
//# sourceMappingURL=11.fef2be40.chunk.js.map