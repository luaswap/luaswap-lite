(this.webpackJsonp=this.webpackJsonp||[]).push([[13],{1034:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(24),o=n(42),c=n(70),s=n(74);t.default=function(e){var t=Object(c.default)(),n=Object(o.default)(),a=n.textDark,u=n.textLight,i=n.placeholder;return l.a.createElement(s.default,{style:{fontSize:r.IS_DESKTOP?28:20,marginBottom:r.Spacing.normal,color:e.disabled?i:e.amount?a:u}},e.disabled?t("n/a"):e.amount?e.amount+" "+(e.suffix||""):t("fetching"))}},1036:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(70),o=n(298);t.default=function(e){var t=e.symbol,n=Object(r.default)();return l.a.createElement(o.default,{title:t?n("insufficient-",{symbol:t}):n("insufficient-balance"),disabled:!0,style:{borderRadius:15}})}},1042:function(e,t,n){"use strict";n.r(t);var a=n(18),l=n.n(a),r=n(4),o=n.n(r),c=n(0),s=n.n(c),u=n(5),i=n(24),d=n(62),f=n(70),m=n(298);t.default=function(e){var t,n=Object(f.default)(),a=Object(c.useContext)(d.EthersContext).approveToken,r=Object(c.useState)(!1),p=l()(r,2),b=p[0],k=p[1],E=Object(c.useCallback)((function(){var t;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.token){n.next=19;break}return e.onError({}),k(!0),n.prev=3,n.next=6,o.a.awrap(a(e.token.address,e.spender));case 6:if(!(t=n.sent)){n.next=11;break}return n.next=10,o.a.awrap(t.wait());case 10:e.onSuccess();case 11:n.next=16;break;case 13:n.prev=13,n.t0=n.catch(3),e.onError(n.t0);case 16:return n.prev=16,k(!1),n.finish(16);case 19:case"end":return n.stop()}}),null,null,[[3,13,16,19]],Promise)}),[e.token]);return e.hidden?s.a.createElement(u.default,null):s.a.createElement(m.default,{title:n("approve-",{symbol:(null==(t=e.token)?void 0:t.symbol)||""}),onPress:E,loading:b,containerStyle:{marginBottom:i.Spacing.tiny},style:{borderRadius:15}})}},1046:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(5),o=n(24),c=n(42),s=n(370),u=n(298),i=n(74);t.default=function(e){var t=Object(c.default)().textLight,n=(0,Object(s.default)().border)({color:e.color}),a=e.color||t;return l.a.createElement(r.default,{style:[e.clear?{}:n,e.style]},l.a.createElement(i.default,{note:!0,style:{color:a,fontSize:o.IS_DESKTOP?13:10}},e.text),e.buttonText&&e.onPressButton&&l.a.createElement(u.default,{title:e.buttonText,type:"clear",size:"small",fontWeight:"bold",onPress:e.onPressButton,titleStyle:{color:a},buttonStyle:{paddingHorizontal:0,paddingVertical:0},style:{alignSelf:"flex-end",marginTop:o.Spacing.tiny}}))}},1076:function(e,t,n){"use strict";n.r(t);var a=n(10),l=n.n(a),r=n(18),o=n.n(r),c=n(4),s=n.n(c),u=n(0),i=n(40),d=n(28),f=n(139),m=n.n(f),p=n(67),b=n(62),k=n(21),E=n(1066),T=n(100),P=function(){return{deposit:Object(u.useCallback)((function(e,t,n){var a,l,r;return s.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return a=Object(k.getContract)("MasterChef",p.MASTER_CHEF,n),o.next=3,s.a.awrap(a.estimateGas.deposit(e,t));case 3:return l=o.sent,o.next=6,s.a.awrap(a.deposit(e,t,{gasLimit:l.mul(120).div(100)}));case 6:return r=o.sent,o.abrupt("return",Object(T.logTransaction)(r,"MasterChef.deposit()",e,t.toString()));case 8:case"end":return o.stop()}}),null,null,null,Promise)}),[]),withdraw:Object(u.useCallback)((function(e,t,n){var a,l,r;return s.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return a=Object(k.getContract)("MasterChef",p.MASTER_CHEF,n),o.next=3,s.a.awrap(a.estimateGas.withdraw(e,t));case 3:return l=o.sent,o.next=6,s.a.awrap(a.withdraw(e,t,{gasLimit:l.mul(120).div(100)}));case 6:return r=o.sent,o.abrupt("return",Object(T.logTransaction)(r,"MasterChef.withdraw()",e,t.toString()));case 8:case"end":return o.stop()}}),null,null,null,Promise)}),[])}};function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e){var t=Object(E.default)(e?"my-pools":"pools"),n=Object(u.useContext)(b.EthersContext),a=n.signer,l=n.getTokenAllowance,r=P(),c=r.deposit,f=r.withdraw,T=Object(u.useState)(!1),O=o()(T,2),v=O[0],y=O[1],j=Object(u.useState)(!1),L=o()(j,2),x=L[0],w=L[1],S=Object(u.useState)(!1),h=o()(S,2),C=h[0],A=h[1];Object(u.useEffect)((function(){y(!1),w(!1),A(!1),t.setFromAmount(""),t.setToAmount("")}),[t.selectedLPToken]),m()((function(){var e,n;return s.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(!a||!t.selectedLPToken){r.next=12;break}return y(!0),t.setSelectedLPTokenAllowed(!1),r.prev=3,e=d.ethers.BigNumber.from(2).pow(96).sub(1),r.next=7,s.a.awrap(l(t.selectedLPToken.address,p.MASTER_CHEF));case 7:n=r.sent,t.setSelectedLPTokenAllowed(d.ethers.BigNumber.from(n).gte(e));case 9:return r.prev=9,y(!1),r.finish(9);case 12:case"end":return r.stop()}}),null,null,[[3,,9,12]],Promise)}),[a,t.selectedLPToken]),m()((function(){if(t.pair&&t.selectedLPToken&&t.selectedLPToken.totalSupply&&t.selectedLPToken.amountDeposited){var e=Object(k.convertToken)(t.selectedLPToken),n=Object(k.convertToken)(t.selectedLPToken.tokenA),a=Object(k.convertToken)(t.selectedLPToken.tokenB),l=new i.TokenAmount(e,t.selectedLPToken.totalSupply.toString()),r=new i.TokenAmount(e,t.selectedLPToken.amountDeposited.toString()),o=t.pair.involvesToken(n)?t.pair.getLiquidityValue(n,l,r):null;t.setFromAmount((null==o?void 0:o.toFixed())||"");var c=t.pair.involvesToken(n)?t.pair.getLiquidityValue(a,l,r):null;t.setToAmount((null==c?void 0:c.toFixed())||"")}}),[t.pair,t.selectedLPToken]);var B=Object(u.useCallback)((function(){var e,n,l;return s.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(null!=(e=t.selectedLPToken)&&e.id&&t.amount&&a)){r.next=15;break}return w(!0),r.prev=2,n=Object(k.parseBalance)(t.amount,t.selectedLPToken.decimals),r.next=6,s.a.awrap(c(t.selectedLPToken.id,n,a));case 6:return l=r.sent,r.next=9,s.a.awrap(l.wait());case 9:return t.setSelectedLPToken(void 0),r.next=12,s.a.awrap(t.updateLastTimeRefreshed());case 12:return r.prev=12,w(!1),r.finish(12);case 15:case"end":return r.stop()}}),null,null,[[2,,12,15]],Promise)}),[t.selectedLPToken,t.amount,a]),D=Object(u.useCallback)((function(){var e,n,l;return s.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(null!=(e=t.selectedLPToken)&&e.id&&t.amount&&a)){r.next=15;break}return A(!0),r.prev=2,n=Object(k.parseBalance)(t.amount,t.selectedLPToken.decimals),r.next=6,s.a.awrap(f(t.selectedLPToken.id,n,a));case 6:return l=r.sent,r.next=9,s.a.awrap(l.wait());case 9:return t.setSelectedLPToken(void 0),r.next=12,s.a.awrap(t.updateLastTimeRefreshed());case 12:return r.prev=12,A(!1),r.finish(12);case 15:case"end":return r.stop()}}),null,null,[[2,,12,15]],Promise)}),[t.selectedLPToken,t.amount,a]);return g(g({},t),{},{loading:t.loading||v,onDeposit:B,depositing:x,onWithdraw:D,withdrawing:C})}},1219:function(e,t,n){"use strict";n.r(t);var a=n(18),l=n.n(a),r=n(0),o=n.n(r),c=n(12),s=n(5),u=n(139),i=n.n(u),d=n(1034),f=n(1042),m=n(373),p=n(1035),b=n(298),k=n(1031),E=n(1057),T=n(371),P=n(375),O=n(1032),g=n(1037),v=n(123),y=n(1029),j=n(1033),L=n(1036),x=n(1038),w=n(1064),S=n(1040),h=n(1046),C=n(1043),A=n(1065),B=n(74),D=n(376),F=n(1041),R=n(1039),I=n(1044),M=n(374),_=n(67),H=n(24),V=n(62),q=n(42),z=n(1076),K=n(1030),W=n(70),G=n(21),Y=n(372),J=function(){if(88!==Object(r.useContext)(V.EthersContext).chainId)return o.a.createElement(k.default,null);var e=Object(W.default)(),t=Object(z.default)(!1);return o.a.createElement(s.default,{style:{marginTop:H.Spacing.large}},o.a.createElement(w.default,{state:t,title:e("active-farms"),emptyText:e("unable-to-load-farms"),Item:N}),o.a.createElement(p.default,null),o.a.createElement(U,{state:t}),o.a.createElement(Q,{state:t}),o.a.createElement(h.default,{text:e("sushi-vested-notice"),clear:!0,style:{marginTop:H.Spacing.normal}}))},N=function(e){var t=e.token.apy||0,n=e.token.multiplier||0,a=Object(r.useCallback)((function(){e.onSelectToken(e.token)}),[e.onSelectToken,e.token]);return o.a.createElement(C.default,{selected:e.selected,onPress:a,containerStyle:{marginBottom:x.ITEM_SEPARATOR_HEIGHT}},o.a.createElement(v.default,{style:{alignItems:"center"}},o.a.createElement(R.default,{token:e.token.tokenA,small:!0,replaceWETH:!0}),o.a.createElement(R.default,{token:e.token.tokenB,small:!0,replaceWETH:!0,style:{marginLeft:4}}),o.a.createElement(B.default,{medium:!0,caption:!0,style:{marginLeft:H.Spacing.tiny}},e.token.tokenA.symbol,"-",e.token.tokenB.symbol),o.a.createElement(s.default,{style:{flex:1,alignItems:"flex-end",marginRight:4}},o.a.createElement(B.default,{note:!0},n>1?"\u2728":"",n.toFixed(2)||"1.00","x APY"),o.a.createElement(B.default,{caption:H.IS_DESKTOP,medium:!0},Object(G.formatPercentage)(t),"%")),e.selected?o.a.createElement(E.default,null):o.a.createElement(A.default,null)))},U=function(e){var t=e.state,n=Object(W.default)();return t.selectedLPToken?o.a.createElement(s.default,null,o.a.createElement(y.default,{text:t.selectedLPToken.symbol+" "+n("amount")}),t.selectedLPToken.balance.isZero()?o.a.createElement(Z,{state:t}):o.a.createElement(F.default,{token:t.selectedLPToken,amount:t.amount,onAmountChanged:t.setAmount,autoFocus:H.IS_DESKTOP})):o.a.createElement(y.default,{text:n("amount"),disabled:!0})},Z=function(e){var t=e.state,n=Object(W.default)(),a=Object(q.default)().green,l=Object(K.default)("/liquidity","Liquidity");return o.a.createElement(o.a.Fragment,null,o.a.createElement(h.default,{color:a,text:n("tokens-needed-for-farming-notice",{symbol:t.selectedLPToken.symbol})}),o.a.createElement(b.default,{color:a,title:n("add-liquidity"),containerStyle:{marginTop:H.Spacing.normal},onPress:l}))},Q=function(e){var t,n,a,l,r=e.state,c=Object(W.default)(),s=Object(G.isEmptyValue)(r.amount)||!(null!=(t=r.selectedLPToken)&&t.sushiRewardedPerYear),u=s?0:Object(G.parseBalance)(r.amount).mul(r.selectedLPToken.sushiRewardedPerYear).div(Object(G.pow10)(18));return o.a.createElement(j.default,null,o.a.createElement(d.default,{amount:Object(G.formatBalance)(u,18,8),suffix:c("sushi-per-year"),disabled:s}),o.a.createElement(S.default,{label:c("my-balance"),text:Object(G.formatBalance)((null==(n=r.selectedLPToken)?void 0:n.balance)||0),disabled:!r.selectedLPToken}),o.a.createElement(S.default,{label:c("total-value-locked"),text:Object(G.formatUSD)((null==(a=r.selectedLPToken)?void 0:a.totalValueUSD)||0),disabled:!r.selectedLPToken}),o.a.createElement(S.default,{label:c("annual-percentage-yield"),text:Object(G.formatPercentage)((null==(l=r.selectedLPToken)?void 0:l.apy)||0),suffix:"%",disabled:!r.selectedLPToken}),o.a.createElement(X,{state:r}))},X=function(e){var t=e.state,n=Object(r.useState)({}),a=l()(n,2),c=a[0],u=a[1];i()((function(){return u({})}),[t.selectedLPToken]);var d=!t.selectedLPTokenAllowed,m=d||Object(G.isEmptyValue)(t.amount);return o.a.createElement(s.default,{style:{marginTop:H.Spacing.normal}},!t.selectedLPToken||t.selectedLPToken.balance.isZero()?o.a.createElement($,{state:t,onError:u,disabled:!0}):Object(G.parseBalance)(t.amount,t.selectedLPToken.decimals).gt(t.selectedLPToken.balance)?o.a.createElement(L.default,{symbol:t.selectedLPToken.symbol}):t.loading?o.a.createElement(g.default,null):o.a.createElement(o.a.Fragment,null,o.a.createElement(f.default,{token:t.selectedLPToken,spender:_.MASTER_CHEF,onSuccess:function(){return t.setSelectedLPTokenAllowed(!0)},onError:u,hidden:Object(G.isEmptyValue)(t.amount)||!d}),o.a.createElement($,{state:t,onError:u,disabled:m})),c.message&&4001!==c.code&&o.a.createElement(O.default,{error:c}))},$=function(e){var t=e.state,n=e.onError,a=e.disabled,l=Object(W.default)(),c=Object(r.useCallback)((function(){n({}),t.onDeposit().catch(n)}),[t.onDeposit,n]);return o.a.createElement(b.default,{title:l("deposit"),disabled:a,loading:t.depositing,onPress:c})};t.default=function(){var e=Object(W.default)();return o.a.createElement(Y.default,null,o.a.createElement(T.default,null,o.a.createElement(m.default,null),o.a.createElement(P.default,null,o.a.createElement(D.default,{text:e("plant-lp-tokens")}),o.a.createElement(B.default,{light:!0},e("plant-lp-tokens-desc")),o.a.createElement(J,null)),"web"===c.default.OS&&o.a.createElement(I.default,null)),o.a.createElement(M.FarmingSubMenu,null))}}}]);
//# sourceMappingURL=13.20288ab3.chunk.js.map