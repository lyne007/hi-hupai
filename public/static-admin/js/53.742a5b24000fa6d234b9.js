(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"5GN5":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=p(a("QbLZ"));a("lpfh");var i=p(a("s9FF"));function p(t){return t&&t.__esModule?t:{default:t}}e.default=(0,r.default)({name:"worth-mentioning-config-view"},i.default)},SnC3:function(t,e,a){"use strict";a.r(e);var r=a("5GN5"),i=a.n(r);for(var p in r)["default"].indexOf(p)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(p);e.default=i.a},dY5s:function(t,e,a){"use strict";a.r(e);var r=a("mh4A"),i=a("SnC3");for(var p in i)["default"].indexOf(p)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(p);var o=a("KHd+"),s=Object(o.a)(i.default,r.a,r.b,!1,null,null,null);e.default=s.exports},mh4A:function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return i}));var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"worth-mentioning-config-h5-box"},[a("Card",{attrs:{header:t.typeCopywriting[t.type].title}}),t._v(" "),a("Card",{attrs:{header:"APPID："}},[a("CardRow",{attrs:{description:t.typeCopywriting[t.type].appIdDescription},scopedSlots:t._u([{key:"tail",fn:function(){return[a("a",{staticStyle:{"margin-left":"15px"},attrs:{href:t.typeCopywriting[t.type].url,target:"_blank"}},[t._v("未申请？点此申请")])]},proxy:!0}])},[a("el-input",{model:{value:t.appId,callback:function(e){t.appId=e},expression:"appId"}})],1)],1),t._v(" "),a("Card",{attrs:{header:"App secret："}},[a("CardRow",{attrs:{description:t.typeCopywriting[t.type].appSecretDescription}},[a("el-input",{model:{value:t.appSecret,callback:function(e){t.appSecret=e},expression:"appSecret"}})],1)],1),t._v(" "),"wx_miniprogram"===t.type?a("Card",{attrs:{header:"开启小程序视频功能："}},[a("CardRow",{attrs:{description:"开启后，在小程序前台将展示视频内容，并且可进行视频内容的发布。开启前，请务必确保您的小程序已有相应的视频播放类目的权限。具体类目权限请"},scopedSlots:t._u([{key:"tail",fn:function(){return[a("a",{attrs:{href:t.typeCopywriting[t.type].url,target:"_blank"}},[t._v("点此查看")])]},proxy:!0}],null,!1,961249041)},[a("el-switch",{attrs:{"active-color":"#336699","inactive-color":"#bbbbbb"},model:{value:t.closeVideo,callback:function(e){t.closeVideo=e},expression:"closeVideo"}})],1)],1):t._e(),t._v(" "),a("Card",{staticClass:"footer-btn"},[a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:t.submitConfiguration}},[t._v("提交")])],1)],1)},i=[]},s9FF:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=p(a("4gYi")),i=p(a("pNQN"));function p(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{loginStatus:"default",appId:"",appSecret:"",type:"",prefix:"",closeVideo:!1,typeCopywriting:{wx_offiaccount:{title:"公众号配置",appIdDescription:"填写申请公众号后，你获得的APPID ",appSecretDescription:"填写申请公众号后，你获得的App secret",serverUrl:"服务器地址URL",appToken:"填写长度为3-32字符，必须为英文或数字的字符。或",encodingAESKey:"消息加密密钥由43位字符组成，可随机修改，字符范围为A-Z，a-z，0-9。或",url:"https://mp.weixin.qq.com/"},wx_miniprogram:{title:"小程序配置",appIdDescription:"填写申请小程序后，你获得的APPID ",appSecretDescription:"填写申请小程序后，你获得的App secret",closeVideo:"开启后，在小程序前台将展示视频内容，并且可进行视频内容的发布。开启前，请务必确保您的小程序已有相应的视频播放类目的权限。具体类目权限请 点此查看",url:"https://developers.weixin.qq.com/miniprogram/product/material/"},wx_oplatform:{title:"PC端微信扫码登录",appIdDescription:"填写申请PC端微信扫码后，你获得的APPID ",appSecretDescription:"填写申请PC端微信扫码后，你获得的App secret",url:"https://open.weixin.qq.com/"}},serverUrl:"",appToken:"",encodingAESKey:""}},created:function(){var t=this.$route.query.type;this.type=t,this.loadStatus()},methods:{loadStatus:function(){var t=this;this.appFetch({url:"forum",method:"get",data:{}}).then((function(e){e.errors?t.$message.error(e.errors[0].code):t.getPrefix(t.type,e)})).catch((function(t){}))},submitConfiguration:function(){var t=this,e=[];e=[{attributes:{key:this.prefix+"app_id",value:this.appId,tag:this.type}},{attributes:{key:this.prefix+"app_secret",value:this.appSecret,tag:this.type}},{attributes:{key:this.prefix+"video",value:this.closeVideo,tag:"wx_miniprogram"}}],"wx_offiaccount"===this.type&&e.push({attributes:{key:"oplatform_url",value:this.serverUrl,tag:"wx_oplatform"}},{attributes:{key:"oplatform_app_token",value:this.appToken,tag:"wx_oplatform"}},{attributes:{key:"oplatform_app_aes_key",value:this.encodingAESKey,tag:"wx_oplatform"}}),this.appFetch({url:"settings",method:"post",data:{data:e}}).then((function(e){e.errors?t.$message.error(e.errors[0].code):t.$message({message:"提交成功",type:"success"})}))},getPrefix:function(t,e){switch(t){case"wx_offiaccount":this.prefix="offiaccount_",this.appId=e.readdata._data.passport.offiaccount_app_id,this.appSecret=e.readdata._data.passport.offiaccount_app_secret,this.serverUrl=e.readdata._data.passport.oplatform_url,this.appToken=e.readdata._data.passport.oplatform_app_token,this.encodingAESKey=e.readdata._data.passport.oplatform_app_aes_key;break;case"wx_miniprogram":this.prefix="miniprogram_",this.appId=e.readdata._data.passport.miniprogram_app_id,this.appSecret=e.readdata._data.passport.miniprogram_app_secret,this.closeVideo=e.readdata._data.set_site.miniprogram_video;break;case"wx_oplatform":this.prefix="oplatform_",this.appId=e.readdata._data.passport.oplatform_app_id,this.appSecret=e.readdata._data.passport.oplatform_app_secret}},randomClick:function(t){if("token"===t)this.appToken=Math.random(Date.parse(new Date)).toString(35).substr(2);else if("aes"===t){for(var e="",a=0;a<5;a++)e+=Math.random(Date.parse(new Date)).toString(35).substr(2);this.encodingAESKey=e.slice(0,43)}}},components:{Card:r.default,CardRow:i.default}}}}]);