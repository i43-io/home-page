(function(e){function t(t){for(var r,u,o=t[0],i=t[1],s=t[2],b=0,d=[];b<o.length;b++)u=o[b],Object.prototype.hasOwnProperty.call(c,u)&&c[u]&&d.push(c[u][0]),c[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==c[i]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},c={app:0},a=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var l=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},"1bb3":function(e,t,n){},2:function(e,t){},2485:function(e,t,n){},3:function(e,t){},4:function(e,t){},"45b9":function(e,t,n){"use strict";n("53e4")},4710:function(e,t,n){},5:function(e,t){},"53e4":function(e,t,n){},6:function(e,t){},7:function(e,t){},8:function(e,t){},"811a":function(e,t,n){"use strict";n("4710")},"8d96":function(e,t,n){"use strict";n("2485")},9:function(e,t){},b66e:function(e,t,n){"use strict";n("1bb3")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c=Object(r["l"])("首页"),a=Object(r["l"])("持仓"),u=Object(r["l"])("设置");function o(e,t){var n=Object(r["M"])("el-menu-item"),o=Object(r["M"])("el-menu"),i=Object(r["M"])("router-view");return Object(r["D"])(),Object(r["i"])(r["b"],null,[Object(r["m"])(o,{mode:"horizontal","default-active":e.$route.matched.length>0&&e.$route.matched[0].path,router:!0},{default:Object(r["bb"])((function(){return[Object(r["m"])(n,{index:"/"},{default:Object(r["bb"])((function(){return[c]})),_:1}),Object(r["m"])(n,{index:"/positions"},{default:Object(r["bb"])((function(){return[a]})),_:1}),Object(r["m"])(n,{index:"/settings"},{default:Object(r["bb"])((function(){return[u]})),_:1})]})),_:1},8,["default-active"]),Object(r["m"])(i)],64)}n("811a");const i={};i.render=o;var s=i,l=n("6c02"),b=Object(r["m"])("br",null,null,-1),d={class:"el-dropdown-link"},f=Object(r["m"])("i",{class:"el-icon-arrow-down el-icon--right"},null,-1),O={class:"el-dropdown-link"},p=Object(r["m"])("i",{class:"el-icon-arrow-down el-icon--right"},null,-1);function j(e,t,n,c,a,u){var o=Object(r["M"])("trade-dialog"),i=Object(r["M"])("el-dropdown-item"),s=Object(r["M"])("el-dropdown-menu"),l=Object(r["M"])("el-dropdown"),j=Object(r["M"])("el-col"),m=Object(r["M"])("el-row"),x=Object(r["M"])("tickers-table");return Object(r["D"])(),Object(r["i"])(r["b"],null,[Object(r["m"])(o),b,Object(r["m"])(m,null,{default:Object(r["bb"])((function(){return[Object(r["m"])(j,{xs:6,sm:3},{default:Object(r["bb"])((function(){return[Object(r["m"])(l,null,{dropdown:Object(r["bb"])((function(){return[Object(r["m"])(s,null,{default:Object(r["bb"])((function(){return[(Object(r["D"])(!0),Object(r["i"])(r["b"],null,Object(r["K"])(e.typeItems,(function(t,n){return Object(r["D"])(),Object(r["i"])(i,{key:t,onClick:function(t){return e.type=n}},{default:Object(r["bb"])((function(){return[Object(r["l"])(Object(r["Q"])(t),1)]})),_:2},1032,["onClick"])})),128))]})),_:1})]})),default:Object(r["bb"])((function(){return[Object(r["m"])("span",d,[Object(r["l"])(Object(r["Q"])(e.typeItems[e.type])+"：",1),f])]})),_:1})]})),_:1}),Object(r["m"])(j,{xs:6,sm:3},{default:Object(r["bb"])((function(){return[Object(r["m"])(l,null,{dropdown:Object(r["bb"])((function(){return[Object(r["m"])(s,null,{default:Object(r["bb"])((function(){return[(Object(r["D"])(!0),Object(r["i"])(r["b"],null,Object(r["K"])(e.sortByItems,(function(t,n){return Object(r["D"])(),Object(r["i"])(i,{key:t.text,onClick:function(t){return e.sortBy=n}},{default:Object(r["bb"])((function(){return[Object(r["l"])(Object(r["Q"])(t.text),1)]})),_:2},1032,["onClick"])})),128))]})),_:1})]})),default:Object(r["bb"])((function(){return[Object(r["m"])("span",O,[Object(r["l"])(Object(r["Q"])(e.sortByItems[e.sortBy].text)+"排序：",1),p])]})),_:1})]})),_:1})]})),_:1}),Object(r["m"])(m,{gutter:16},{default:Object(r["bb"])((function(){return[(Object(r["D"])(!0),Object(r["i"])(r["b"],null,Object(r["K"])(e.getTickers(),(function(e,t){return Object(r["D"])(),Object(r["i"])(j,{xs:24,sm:12,lg:8,key:t},{default:Object(r["bb"])((function(){return[Object(r["m"])(x,{data:e},null,8,["data"])]})),_:2},1024)})),128))]})),_:1})],64)}var m=n("5530"),x=(n("4de4"),n("07ac"),n("6062"),n("d3b7"),n("3ca3"),n("ddb0"),n("5502")),v=(n("b680"),Object(r["fb"])("data-v-59ef8030"));Object(r["G"])("data-v-59ef8030");var h={key:0},k={key:0};Object(r["E"])();var w=v((function(e,t,n,c,a,u){var o=Object(r["M"])("el-table-column"),i=Object(r["M"])("el-table");return Object(r["D"])(),Object(r["i"])(i,{style:{"margin-top":"10px"},class:"ticker-table",data:e.data,"row-class-name":function(e){var t=e.rowIndex;return{futures:t>0}},onRowClick:t[1]||(t[1]=function(t){return e.setCurrentInstId(t.instId)})},{default:v((function(){return[Object(r["m"])(o,{prop:"dd",label:e.data[0].coin},null,8,["label"]),Object(r["m"])(o,{label:"ASK"},{default:v((function(t){return[Object(r["m"])("div",{class:{red:1*t.row.askPx<e.data[0].bidPx,green:1*t.row.askPx>e.data[0].bidPx}},Object(r["Q"])(t.row.askPx),3),e.positions["long:"+t.row.instId]?(Object(r["D"])(),Object(r["i"])("div",h,Object(r["Q"])(e.positions["long:"+t.row.instId].availPos),1)):Object(r["j"])("",!0)]})),_:1}),Object(r["m"])(o,{label:"BID"},{default:v((function(t){return[Object(r["m"])("div",{class:{red:1*t.row.bidPx>e.data[0].askPx,green:1*t.row.bidPx<e.data[0].askPx}},Object(r["Q"])(t.row.bidPx),3),e.positions["short:"+t.row.instId]?(Object(r["D"])(),Object(r["i"])("div",k,Object(r["Q"])(e.positions["short:"+t.row.instId].availPos),1)):Object(r["j"])("",!0)]})),_:1}),Object(r["m"])(o,{label:"%"},{default:v((function(e){return[Object(r["m"])("i",{class:{red:e.row.diff>0,green:e.row.diff<0}},Object(r["Q"])(e.row.diffRate&&(100*e.row.diffRate).toFixed(2)+"%"),3)]})),_:1})]})),_:1},8,["data","row-class-name"])})),g=Object(r["n"])({props:{data:Object},computed:Object(m["a"])({},Object(x["e"])("okex",["positions"])),methods:Object(m["a"])({},Object(x["d"])(["setCurrentInstId"]))});n("45b9");g.render=w,g.__scopeId="data-v-59ef8030";var y=g,I=(n("99af"),Object(r["fb"])("data-v-6f087d65"));Object(r["G"])("data-v-6f087d65");var P={key:0},T={key:0},_={key:1,class:"red"},S={key:0,class:"red"},A=Object(r["m"])("br",null,null,-1),D=Object(r["l"])("开仓"),M=Object(r["m"])("br",null,null,-1),R=Object(r["m"])("br",null,null,-1),C={key:0},U={key:1},F=Object(r["m"])("br",null,null,-1),Q=Object(r["l"])("平仓"),V=Object(r["m"])("br",null,null,-1);Object(r["E"])();var E=I((function(e,t,n,c,a,u){var o=Object(r["M"])("el-table-column"),i=Object(r["M"])("el-table"),s=Object(r["M"])("el-input"),l=Object(r["M"])("el-col"),b=Object(r["M"])("el-button"),d=Object(r["M"])("el-row"),f=Object(r["M"])("el-dialog");return Object(r["D"])(),Object(r["i"])(f,{title:"交易 ".concat(e.currentTickers&&e.currentTickers[0]&&e.currentTickers[0].instId.indexOf("USDT")>0?"USDT":""," ").concat(e.currentTickers&&e.currentTickers[0]&&e.currentTickers[0].coin),modelValue:e.show,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.show=t}),"before-close":e.handleClose},{default:I((function(){return[2===e.currentTickers.length&&e.currentTickers[1].bidPx-e.currentTickers[0].askPx>0?(Object(r["D"])(),Object(r["i"])("div",P,[Object(r["m"])(i,{data:e.currentTickers},{default:I((function(){return[Object(r["m"])(o,{label:"#",prop:"dd"}),Object(r["m"])(o,{label:"价格"},{default:I((function(e){return[0===e.$index?(Object(r["D"])(),Object(r["i"])("span",T,Object(r["Q"])(e.row.askPx),1)):Object(r["j"])("",!0),1===e.$index?(Object(r["D"])(),Object(r["i"])("span",_,Object(r["Q"])(e.row.bidPx),1)):Object(r["j"])("",!0)]})),_:1}),Object(r["m"])(o,{label:"%"},{default:I((function(t){return[1===t.$index?(Object(r["D"])(),Object(r["i"])("i",S,Object(r["Q"])((100*(e.currentTickers[0].diffRate||e.currentTickers[1].diffRate)).toFixed(2))+"%",1)):Object(r["j"])("",!0)]})),_:1})]})),_:1},8,["data"]),A,Object(r["m"])(d,{gutter:16},{default:I((function(){return[Object(r["m"])(l,{span:12},{default:I((function(){return[Object(r["m"])(s,{type:"number",modelValue:e.openAmt,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.openAmt=t}),placeholder:"开仓量"},null,8,["modelValue"])]})),_:1}),Object(r["m"])(l,{span:12},{default:I((function(){return[Object(r["m"])(b,{onClick:t[2]||(t[2]=function(t){return e.open(e.openAmt)}),disabled:e.opening},{default:I((function(){return[D]})),_:1},8,["disabled"])]})),_:1})]})),_:1}),M])):Object(r["j"])("",!0),(Object(r["D"])(!0),Object(r["i"])(r["b"],null,Object(r["K"])(e.currentPositionPairs,(function(n){return Object(r["D"])(),Object(r["i"])("div",{key:n[0].instId+n[1].instId},[Object(r["m"])("span",null,"预估强平价: "+Object(r["Q"])((1*n[0].liqPx).toFixed(3))+" 保证金率: "+Object(r["Q"])((1*n[0].mgnRatio).toFixed(1))+"%",1),R,Object(r["m"])(i,{data:n,"show-summary":!0,"summary-method":function(e){var t=e.data;return["",(t[0].askPx/t[1].bidPx*100-100).toFixed(2)+"%",(t[0].avgPx/t[1].avgPx*100-100).toFixed(2)+"%","",(1*t[0].upl+1*t[1].upl).toFixed(3)]}},{default:I((function(){return[Object(r["m"])(o,{label:"#",prop:"dd"}),Object(r["m"])(o,{label:"价格"},{default:I((function(e){return[0===e.$index?(Object(r["D"])(),Object(r["i"])("span",C,Object(r["Q"])(e.row.askPx),1)):Object(r["j"])("",!0),1===e.$index?(Object(r["D"])(),Object(r["i"])("span",U,Object(r["Q"])(e.row.bidPx),1)):Object(r["j"])("",!0)]})),_:1}),Object(r["m"])(o,{label:"开仓均价"},{default:I((function(e){return[Object(r["m"])("span",null,Object(r["Q"])((1*e.row.avgPx).toFixed(3)),1)]})),_:1}),Object(r["m"])(o,{label:"持仓",prop:"availPos"}),Object(r["m"])(o,{label:"收益"},{default:I((function(e){return[Object(r["m"])("span",{class:{red:e.row.upl>0,green:e.row.upl<0}},Object(r["Q"])((1*e.row.upl).toFixed(3)),3)]})),_:1})]})),_:2},1032,["data","summary-method"]),F,Object(r["m"])(d,{gutter:16},{default:I((function(){return[Object(r["m"])(l,{span:12},{default:I((function(){return[Object(r["m"])(s,{type:"number",modelValue:e.closeAmt,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.closeAmt=t}),placeholder:"平仓量"},null,8,["modelValue"])]})),_:1}),Object(r["m"])(l,{span:12},{default:I((function(){return[Object(r["m"])(b,{onClick:function(t){return e.close(n[0],n[1],e.closeAmt)},disabled:e.closing},{default:I((function(){return[Q]})),_:2},1032,["onClick","disabled"])]})),_:2},1024)]})),_:2},1024),V])})),128))]})),_:1},8,["title","modelValue","before-close"])})),K=n("1da1"),q=(n("96cf"),Object(r["n"])({computed:Object(m["a"])(Object(m["a"])({},Object(x["e"])("okex",["positisions","accounts"])),Object(x["c"])("okex",["currentTickers","currentPositionPairs"])),methods:Object(m["a"])(Object(m["a"])({},Object(x["b"])("okex",["batchOpen","batchClose"])),{},{open:function(e){var t=this;return Object(K["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.opening=!0,n.prev=1,n.next=4,t.batchOpen({long:t.currentTickers[0].instId,short:t.currentTickers[1].instId,amount:e});case 4:n.next=9;break;case 6:n.prev=6,n.t0=n["catch"](1),window.alert(n.t0);case 9:t.opening=!1;case 10:case"end":return n.stop()}}),n,null,[[1,6]])})))()},close:function(e,t,n){var r=this;return Object(K["a"])(regeneratorRuntime.mark((function c(){return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return r.closing=!0,c.prev=1,c.next=4,r.batchClose({short:e,long:t,amount:n});case 4:c.next=9;break;case 6:c.prev=6,c.t0=c["catch"](1),window.alert(c.t0);case 9:r.closing=!1;case 10:case"end":return c.stop()}}),c,null,[[1,6]])})))()}}),setup:function(){var e=Object(x["f"])(),t=Object(r["I"])(!!e.state.currentInstId);return Object(r["Z"])((function(){return e.state.currentInstId}),(function(e){return t.value=!!e})),{openAmt:Object(r["I"])(0),opening:Object(r["I"])(!1),closeAmt:Object(r["I"])(0),closing:Object(r["I"])(!1),show:t}}}));n("8d96");q.render=E,q.__scopeId="data-v-6f087d65";var B=q,W=Object(r["n"])({name:"Home",components:{TickersTable:y,TradeDialog:B},computed:Object(m["a"])({},Object(x["e"])("okex",["usdTickers","usdtTickers"])),methods:{getTickers:function(){var e=this,t=0===this.type?this.usdTickers:this.usdtTickers,n=this.sortByItems[this.sortBy].idx;return Object.values(t).filter((function(t){return!e.filters[e.typeItems[e.type]]||e.filters[e.typeItems[e.type]].has(t[0].coin)})).sort((function(e,t){return n<3?t[n].diffRate-e[n].diffRate:e[n].instId.charCodeAt(0)-t[n].instId.charCodeAt(0)}))}},data:function(){return{type:0,typeItems:["USD","USDT"],sortBy:1,filters:{USD:new Set(["BTC","ETH","EOS"])},sortByItems:[{idx:1,text:"当周"},{idx:2,text:"次周"},{idx:3,text:"名字"}]}}});W.render=j;var $=W,H=n("2909"),J=(n("5319"),n("ac1f"),Object(r["fb"])("data-v-111782ac"));Object(r["G"])("data-v-111782ac");var G=Object(r["l"])("更新");Object(r["E"])();var N=J((function(e,t,n,c,a,u){var o=Object(r["M"])("el-button"),i=Object(r["M"])("el-table-column"),s=Object(r["M"])("el-table");return Object(r["D"])(),Object(r["i"])(r["b"],null,[Object(r["m"])(o,{style:{"margin-top":"10px"},loading:e.loading,onClick:e.updateAccount},{default:J((function(){return[G]})),_:1},8,["loading","onClick"]),Object(r["m"])(s,{style:{"margin-top":"10px"},data:[].concat(Object(H["a"])(Object.values(e.accounts.details||{})),[{ccy:"总计",disEq:e.accounts.totalEq}])},{default:J((function(){return[Object(r["m"])(i,{prop:"ccy",label:"$"}),Object(r["m"])(i,{prop:"eq",formatter:function(e,t,n){return n&&(1*n).toFixed(4)},label:"权益"},null,8,["formatter"]),Object(r["m"])(i,{prop:"upl",formatter:function(e,t,n){return n&&(1*n).toFixed(4)},label:"收益"},null,8,["formatter"]),Object(r["m"])(i,{prop:"availEq",formatter:function(e,t,n){return n&&(1*n).toFixed(4)},label:"可用"},null,8,["formatter"]),Object(r["m"])(i,{formatter:function(e){return e.availEq&&(100-e.availEq/e.eq*100).toFixed(2)+"%"},label:"使用率"},null,8,["formatter"]),Object(r["m"])(i,{prop:"disEq",formatter:function(e,t,n){return n&&(1*n).toFixed(4)},label:"$"},null,8,["formatter"])]})),_:1},8,["data"]),(Object(r["D"])(!0),Object(r["i"])(r["b"],null,Object(r["K"])(e.positions,(function(e,t){return Object(r["D"])(),Object(r["i"])(s,{style:{"margin-top":"10px"},key:t,data:e,"cell-class-name":function(e){var t=e.row,n=e.column;return n.className&&(t.upl>0?"red":t.upl<0?"green":"")}},{default:J((function(){return[Object(r["m"])(i,{prop:"instId",label:t,formatter:function(e){return e.instId.replace(t+"-","")}},null,8,["label","formatter"]),Object(r["m"])(i,{prop:"posSide",label:"方向"}),Object(r["m"])(i,{prop:"availPos",label:"持仓量"}),Object(r["m"])(i,{prop:"lever",label:"杠杆"}),Object(r["m"])(i,{prop:"avgPx",label:"开仓均价",formatter:function(e){return(1*e.avgPx).toFixed(4)}},null,8,["formatter"]),Object(r["m"])(i,{prop:"upl","class-name":"upl",label:"盈亏",formatter:function(e){return(1*e.upl).toFixed(4)}},null,8,["formatter"]),Object(r["m"])(i,{prop:"liqPx",label:"强平价"})]})),_:2},1032,["data","cell-class-name"])})),128))],64)})),z=n("3835"),L=(n("1276"),n("13d5"),n("159b"),n("b64b"),n("fb6a"),n("a15b"),n("d81d"),n("7db0"),n("5db7"),n("73d9"),n("86c7")),Z=n.n(L),X=n("73ac"),Y="APIOPT",ee=JSON.parse(window.localStorage.getItem(Y)||"{}"),te=new X["v5"].HttpApi({baseURL:"https://ph8xwdmyl4.execute-api.us-east-1.amazonaws.com/prod"}),ne=null;function re(e){var t=e.instId.split("-"),n=Object(z["a"])(t,3),r=n[0],c=n[2];return Object.assign(e,{coin:r,dd:c}),e}function ce(e,t){var n=e.bidPx-t.askPx,r=t.bidPx-e.askPx;n>r?(e.diff=n,e.diffRate=n/t.askPx):(e.diff=r,e.diffRate=r/e.askPx)}function ae(e,t,n){var r=t.filter((function(t){return t.instId.indexOf(e)>0})).reduce((function(e,t){var n=t.coin;return e[n]||(e[n]=[]),e[n].push(t),e}),{});n.filter((function(t){return t.instId.indexOf(e)>0})).forEach((function(e){r[e.coin]&&r[e.coin].push(e)}));for(var c=0,a=Object.keys(r);c<a.length;c++){var u=a[c];r[u].sort((function(e,t){return"SWAP"===e.dd?-1:"SWAP"===t.dd?1:e.dd<t.dd?-1:e.dd>t.dd?1:0})),"SWAP"===r[u][0].dd&&function(){var e=r[u][0];r[u].slice(1).forEach((function(t){return ce(t,e)}))}()}return r}var ue={namespaced:!0,state:{usdTickers:{},usdtTickers:{},accounts:{},positions:{},api:ee},getters:{positions:function(e){var t=e.positions;return Object.values(t).reduce((function(e,t){var n=t.instId.split("-").slice(0,2).join("-");return e[n]||(e[n]=[]),t.instId.indexOf("SWAP")<0?e[n].push(t):e[n].unshift(t),e}),{})},currentTickers:function(e,t,n){var r=e.usdTickers,c=e.usdtTickers,a=n.currentInstId,u=a.split("-"),o=Object(z["a"])(u,2),i=o[0],s=o[1],l=("USD"===s?r:c)[i],b=l&&l.filter((function(e){return"SWAP"===e.dd||e.instId===a})).sort((function(e,t){return e.last-t.last}));return b||[]},currentPositionPairs:function(e,t){var n=e.positions,r=t.currentTickers;if(2!==r.length)return[];var c=["short:","long:"];return[[0,1],[1,0]].map((function(e){return e=e.map((function(e,t){var a=r[e],u=n[c[t]+a.instId];return u&&Object(m["a"])(Object(m["a"])({},a),u)})),e.every((function(e){return e}))&&e})).filter((function(e){return e}))}},mutations:{setTickers:function(e,t){var n=t.usdTickers,r=t.usdtTickers;e.usdTickers=n,e.usdtTickers=r},setApiOpt:function(e,t){e.api=t},setAccounts:function(e,t){t.details=t.details.reduce((function(e,t){return e[t.ccy]=t,e}),{}),e.accounts=t},setPositions:function(e,t){e.positions=t.reduce((function(e,t){return e[t.posSide+":"+t.instId]=t,e}),{})},updateTicker:function(e,t){var n=t.instId.indexOf("-USD-")>0?e.usdTickers:e.usdtTickers,r=n[t.coin],c=r[0],a=r.find((function(e){return e.instId===t.instId}));Object.assign(a,t),"SWAP"===t.dd?r.slice(1).forEach((function(e){return ce(e,c)})):ce(a,c)}},actions:{init:function(e){return Object(K["a"])(regeneratorRuntime.mark((function t(){var n,r,c,a,u,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,r=e.dispatch,t.next=3,te.getTickers("FUTURES");case 3:return c=t.sent.map(re),t.next=6,te.getTickers("SWAP");case 6:return a=t.sent.map(re),u=ae("-USD-",c,a),o=ae("-USDT-",c,a),n("setTickers",{usdTickers:u,usdtTickers:o}),t.next=12,r("updateApiOpt",ee);case 12:return ne=new X["v5"].WsApi,ne.on("tickers",(function(e){var t=Object(z["a"])(e,1),r=t[0];return n("updateTicker",re(r))})),t.next=16,ne.subscribePublic(Z.a.flatMap(u,(function(e){return e.map((function(e){var t=e.instId;return{channel:"tickers",instId:t}}))})),!0);case 16:return t.next=18,ne.subscribePublic(Z.a.flatMap(o,(function(e){return e.map((function(e){var t=e.instId;return{channel:"tickers",instId:t}}))})),!0);case 18:case"end":return t.stop()}}),t)})))()},updateAccount:function(e){return Object(K["a"])(regeneratorRuntime.mark((function t(){var n,r,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,r=e.state,c=Object.keys(r.usdTickers).join(",")+",USDT",t.t0=n,t.t1=Z.a,t.next=6,Promise.all([te.getPositions("FUTURES"),te.getPositions("SWAP")]);case 6:return t.t2=t.sent,t.t3=t.t1.flatten.call(t.t1,t.t2),(0,t.t0)("setPositions",t.t3),t.t4=n,t.next=12,te.getAccounts(c);case 12:t.t5=t.sent,(0,t.t4)("setAccounts",t.t5);case 14:case"end":return t.stop()}}),t)})))()},updateApiOpt:function(e,t){return Object(K["a"])(regeneratorRuntime.mark((function n(){var r,c,a,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.dispatch,c=t.apiKey,a=t.apiSecret,u=t.passphrase,!(c&&a&&u)){n.next=7;break}return window.localStorage.setItem(Y,JSON.stringify({apiKey:c,apiSecret:a,passphrase:u})),te.update(c,a,u),n.next=7,r("updateAccount");case 7:case"end":return n.stop()}}),n)})))()},batchOpen:function(e,t){return Object(K["a"])(regeneratorRuntime.mark((function n(){var r,c,a,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,c=t.long,a=t.short,u=t.amount,n.next=4,te.batchOrder([te.toOrder(c,"buy","long","market",u),te.toOrder(a,"sell","short","market",u)]);case 4:return n.next=6,Z.a.sleep(1e3);case 6:return n.next=8,r("updateAccount");case 8:case"end":return n.stop()}}),n)})))()},batchClose:function(e,t){return Object(K["a"])(regeneratorRuntime.mark((function n(){var r,c,a,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,c=t.long,a=t.short,u=t.amount,n.next=4,te.batchOrder([te.toOrder(a.instId,"buy","short","market",u),te.toOrder(c.instId,"sell","long","market",u)]);case 4:return n.next=6,Z.a.sleep(1e3);case 6:return n.next=8,r("updateAccount");case 8:case"end":return n.stop()}}),n)})))()}}},oe=Object(x["a"])({state:{currentInstId:""},mutations:{setCurrentInstId:function(e,t){e.currentInstId=t}},actions:{},modules:{okex:ue}}),ie=Object(r["n"])({computed:Object(m["a"])(Object(m["a"])({},Object(x["c"])("okex",["positions"])),Object(x["e"])("okex",["accounts"])),setup:function(){var e=Object(r["I"])(!1),t=function(){var t=Object(K["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.value=!0,t.next=3,oe.dispatch("okex/updateAccount").catch(console.error);case 3:e.value=!1;case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return{loading:e,updateAccount:t}}});n("b66e");ie.render=N,ie.__scopeId="data-v-111782ac";var se=ie,le=Object(r["m"])("br",null,null,-1),be=Object(r["l"])("保存");function de(e,t,n,c,a,u){var o=Object(r["M"])("el-input"),i=Object(r["M"])("el-col"),s=Object(r["M"])("el-button"),l=Object(r["M"])("el-row");return Object(r["D"])(),Object(r["i"])(r["b"],null,[le,Object(r["m"])(l,{gutter:16},{default:Object(r["bb"])((function(){return[Object(r["m"])(i,{xs:24,md:6},{default:Object(r["bb"])((function(){return[Object(r["m"])(o,{modelValue:e.apiKey,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.apiKey=t}),placeholder:"apiKey"},null,8,["modelValue"])]})),_:1}),Object(r["m"])(i,{xs:24,md:6},{default:Object(r["bb"])((function(){return[Object(r["m"])(o,{modelValue:e.apiSecret,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.apiSecret=t}),placeholder:"apiSecret"},null,8,["modelValue"])]})),_:1}),Object(r["m"])(i,{xs:24,md:6},{default:Object(r["bb"])((function(){return[Object(r["m"])(o,{modelValue:e.passphrase,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.passphrase=t}),placeholder:"passphrase","show-password":""},null,8,["modelValue"])]})),_:1}),Object(r["m"])(i,{xs:24,md:6},{default:Object(r["bb"])((function(){return[Object(r["m"])(s,{onClick:t[4]||(t[4]=function(t){return e.save()})},{default:Object(r["bb"])((function(){return[be]})),_:1})]})),_:1})]})),_:1})],64)}var fe=Object(r["n"])({setup:function(){var e=Object(x["f"])(),t=e.state.okex.api,n=t.apiKey,c=t.apiSecret,a=t.passphrase;return Object(r["H"])({apiKey:n,apiSecret:c,passphrase:a,save:function(){var t=this;return Object(K["a"])(regeneratorRuntime.mark((function n(){var r,c,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=t.apiKey,c=t.apiSecret,a=t.passphrase,!(r&&c&&a)){n.next=4;break}return n.next=4,e.dispatch("okex/updateApiOpt",{apiKey:r,apiSecret:c,passphrase:a});case 4:case"end":return n.stop()}}),n)})))()}})}});fe.render=de;var Oe=fe,pe=[{path:"/",name:"Home",component:$},{path:"/positions",name:"Positions",component:se},{path:"/settings",name:"Settings",component:Oe}],je=Object(l["a"])({history:Object(l["b"])(),routes:pe}),me=je,xe=n("3fd4"),ve=(n("7dd6"),n("3ef0")),he=n.n(ve),ke=function(e){e.use(xe["a"],{locale:he.a})};oe.dispatch("okex/init");var we=Object(r["h"])(s);ke(we),we.use(oe).use(me).mount("#app")}});
//# sourceMappingURL=app.711a7721.js.map