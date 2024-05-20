"use strict";function MyRegistrySDK(n){this._giftparam=n;this._events={};this._eventTypes=["popup_showing","popup_showed","popup_closed","gift_added","gift_value_changed","url_genrated"];this._siteKey="4o2rsQ6xzpfLqlGq2rJP6w2";this._priceEnums=["Reg","Sale","Clearance"];this._version="1.0.0";this._panelVersion="2.1";this._lang=null;this._lp=null;this._domain="//www.myregistry.com";this._isMobile="false";this._isResponsive="false";this._useIframeView="true";this._mobileWidgetScript="/ScriptSet/MrMobileWidget.js";this._iframeinfo={_iframeId:"myregistry_embed_view",_iframTitle:"Myregistry Panel",_iframeElement:null,_originalOverflow:null};this.__proto__={constructor:MyRegistrySDK,get useIframeView(){return this._useIframeView},set useIframeView(n){this._useIframeView=n},getGift:function(){if(!this._gift){this._gift=new MyRegistrySDK.Gift(this);this._gift.on("gift_value_changed",this.giftValueChanged);this._gift.on("gift_added",this.giftAdded);this._giftparam&&this._gift.setGift(this._giftparam)}return this._gift.getGift()},setGift:function(n){if(this._giftparam=n,this._gift)this._gift.setGift(this._giftparam);else{this._gift=new MyRegistrySDK.Gift(this);this._gift.on("gift_value_changed",this.giftValueChanged);this._gift.on("gift_added",this.giftAdded);this._gift&&this._gift.setGift(this._giftparam)}},setLang:function(n){this._lang=n},setLp:function(n){this._lp=n},on:function(n,t){typeof this._events[n]=="undefined"&&(this._events[n]=[]);this._events[n].push(t)},trigger:function(n,t){var r,i,u;if(typeof n=="string"&&(n={type:n,data:null}),n.target||(n.target=this),!n.type)throw new Error("Event object missing 'type' property.");if(this._events[n.type]&&this._events[n.type]instanceof Array)for(r=this._events[n.type],i=0,u=r.length;i<u;i++)r[i].call(this,t)},off:function(n,t){var r,i,u;if(this._events[n]instanceof Array)for(r=this._events[n],i=0,u=r.length;i<u;i++)if(r[i]===t){r.splice(i,1);break}},showPopup:function(){var f,e,r,n,u,t,o;if(this._gift){this._gift.setGift(this._giftparam);f=2.1;try{f=parseFloat(this._panelVersion)}catch(c){}if(this._isResponsive=="false"&&this._isMobile=="true")e=this._gift,this.setMobileScript(function(){e&&e.setMobilePanel()});else{r=this._domain+this._gift.generateUrl();n=this;function c(t){var u=f==2?558:638,i={title:"AddToMr",width:720,height:u},e=window.screenLeft!=undefined?window.screenLeft:screen.left,o=window.screenTop!=undefined?window.screenTop:screen.top,s=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width,h=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height,c=s/2-i.width/2+e,l=h/2-i.height/2+o,a=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),r;a&&(i.height+=22);r=window.open(t,i.title,"personalbar=no,directories=no,location=no,toolbar=no,menubar=no,resizable=no,scrollbars=yes, width="+i.width+", height="+i.height+", top="+l+", left="+c);try{r.onbeforeunload=function(){n.trigger("popup_closed",{gift:n._gift})}}catch(v){}this.checkPopupStatus(r);window.focus&&r.focus();this.trigger("popup_showed",{gift:this._gift})}function l(n){n&&(n=n+"&IsIframeView=true");this.createIframe(n)}this.trigger("popup_showing",{gift:this._gift});function e(){if(n._useIframeView=="true")try{l.call(n,r)}catch(t){console&&console.log("error: "+t.ToString());c.call(n,r)}else c.call(n,r)}if(u="MrSoftwareSettings",t=MyRegistrySDK.Behaviors.getCookie(u),t){try{t=decodeURIComponent(t);o=JSON.parse(t);o&&(this._useIframeView=o.useIframeView)}catch(a){}e.call(this)}else{var s=this._domain,h=document.getElementsByTagName("body")[0],i=document.createElement("script");i.id="MyRegistrySoftwareSettingsScript";i.type="text/javascript";i.onload=function(){};i.src=s+"/ScriptPlatform/Common/SoftwareSettings.js?sitekey="+this._siteKey;h.appendChild(i);typeof myregistrySoftwareSettings!="undefined"?(MyRegistrySDK.Behaviors.setCookie(u,JSON.stringify(window.myregistrySoftwareSettings),1),n._useIframeView=window.myregistrySoftwareSettings.useIframeView,e.call(n)):setTimeout(function(){typeof myregistrySoftwareSettings!="undefined"&&(MyRegistrySDK.Behaviors.setCookie(u,JSON.stringify(window.myregistrySoftwareSettings),1),n._useIframeView=window.myregistrySoftwareSettings.useIframeView);e.call(n)},500)}}}else throw new Error("Gift instance does not exist");},validateSecurity:function(n){var r="MrSoftwareSettings",u=this._domain,f=document.getElementsByTagName("body")[0],t=document.createElement("script"),i;t.id="MyRegistrySoftwareSettingsScript";t.type="text/javascript";i=this;t.onload=function(){typeof myregistrySoftwareSettings!="undefined"&&(MyRegistrySDK.Behaviors.setCookie(r,JSON.stringify(window.myregistrySoftwareSettings),1),i._useIframeView=window.myregistrySoftwareSettings.useIframeView);n&&n.call(i)};t.src=u+"/ScriptPlatform/Common/SoftwareSettings.js?sitekey="+this._siteKey;f.appendChild(t)},createIframe:function(n){if(!this._iframeinfo._iframeElement){this._iframeinfo._originalOverflow=getComputedStyle(document.body).getPropertyValue("overflow");this._iframeinfo._focusBackElement=document.activeElement;this._iframeinfo._iframeElement=document.createElement("iframe");this.helpers.setAttributes(this._iframeinfo._iframeElement,{id:this._iframeinfo._iframeId,title:this._iframeinfo._iframTitle,src:n,frameBorder:"0",style:{display:"block",position:"fixed",height:"100%",width:"100%",top:"0",left:"0",bottom:"0",right:"0",margin:"0",clip:"auto",zIndex:"2147483647"}});var t=this,r=this._gift?this.helpers.getJsonStringify(this._gift.getGift()):null,i=function(n){if(n&&n.data=="close"){if(t._gift&&t._gift.trackEvent&&t._gift.trackEvent!="")try{eval(t._gift.trackEvent)}catch(r){console&&console.log("error: "+r.ToString())}var u=t._iframeinfo._iframeElement;document.body.style.overflow=t._iframeinfo._originalOverflow?t._iframeinfo._originalOverflow:"";t._iframeinfo._focusBackElement&&t._iframeinfo._focusBackElement.focus();t.helpers.removeElemId(t._iframeinfo._iframeId);t._iframeinfo._iframeElement=null;t.helpers.removeWinEvent("message",i);t.trigger("popup_closed",{gift:t._gift})}};this._iframeinfo._iframeElement.onload=function(){var n=t._iframeinfo._iframeElement;n.contentWindow.postMessage(r,n.src);t.helpers.addWinEvent("message",i)};document.body.style.overflow="hidden";document.body.appendChild(this._iframeinfo._iframeElement);this._iframeinfo._iframeElement.style.display="block !important"}},setMobileScript:function(n){var t,i;window._mrAddGift||(window._mrAddGift=window._mrAddGift||[],t=document.createElement("script"),t.type="text/javascript",t.async=!0,t.id="myregistryMobileWidgetScript",t.src=this._domain+this._mobileWidgetScript,i=document.getElementsByTagName("script")[0],i.parentNode.insertBefore(t,i),t.onload=function(){n&&n.call(this)})},checkPopupStatus:function(n){setTimeout(function(){if(n){window.mrTrackedWindows=!1;var t=0,i=setInterval(function(){if(window.mrTrackedWindows||t>3)clearInterval(i);else{try{n.postMessage("ping","*")}catch(r){clearInterval(i)}t++}},1e3)}},1e3)},helpers:{removeWinEvent:function(n,t){window.removeEventListener?removeEventListener(n,t,!1):detachEvent("on"+n,t)},addWinEvent:function(n,t){window.addEventListener?addEventListener(n,t,!1):attachEvent("on"+n,t)},removeElemId:function(n){var t=document.getElementById(n);t&&t.parentNode.removeChild(t)},setAttributes:function(n,t){var i,r;for(i in t)if((i==="styles"||i==="style")&&typeof t[i]=="object")for(r in t[i])n.style[r]=t[i][r];else i==="html"?n.innerHTML=t[i]:n.setAttribute(i,t[i])},getJsonStringify:function(n){var t,i;return typeof Array.prototype.toJSON!="undefined"?(t=Array.prototype.toJSON,delete Array.prototype.toJSON,i=JSON.stringify(n),Array.prototype.toJSON=t,i):JSON.stringify(n)}}};var t=this;this.__proto__.giftValueChanged=function(n){t.trigger("gift_value_changed",n)};this.__proto__.urlGenerated=function(n){t.trigger("url_genrated",n)};this._gift=new MyRegistrySDK.Gift(this);this._gift.on("gift_value_changed",this.giftValueChanged);this._gift.on("url_genrated",this.urlGenerated);this._gift.setGift(this._giftparam)}MyRegistrySDK.Gift=function(n){this._sdk=n;this._siteKey=this._sdk._siteKey;this._events={};this._gift={SiteKey:this._siteKey,Title:null,ImageUrl:null,PictureUrl:null,URL:null,Price:null,Quantity:1,Color:null,Size:null,Options:null,SKU:null,HideColor:!1,HideSize:!1,DefaultRegistryType:null,ReadOnlyPrice:!1,CanonicalURL:null,CreatedFrom:"",OptionalPrices:"",Notes:"",Availability:"",IsShowWishListFlow:!1,ShowSignupRegistryType:!1,CurrencyCode:null,ShowSignupIfNotLogin:!1};this._eventTypes=["gift_value_changed","url_genrated"];this._urlTemplate="/Merchants/AddToMrButton/v";this.__proto__={getGift:function(){return this._gift},setGift:function(n){var t,i;if(n)for(t in this._gift)if(n.hasOwnProperty(t)){i=n[t];try{this.validate[t.toLowerCase()]&&(i=this.validate[t.toLowerCase()].call(this,n[t]));this._gift[t]!=i&&(this.trigger("gift_value_changed",{previous:this._gift[t],propertyName:t,newValue:i}),this._gift[t]=i)}catch(r){console&&console.log(r)}}},removeSpecialCharacters:function(n){let t=new RegExp(/&#..;/,"g");return n.replace(t,"")},validate:{title:function(n){if(n){var t=100;if(typeof n!="string"&&(n=n+""),n.length>t&&(n=n.substring(0,t)),n){function t(n){var t=document.createElement("textarea");return t.innerHTML=n,t.value}n.indexOf("&amp;")>-1&&(n=t(n));n=t(n);n=this.removeSpecialCharacters(n)}}else throw new Error("Title is not defined");return n},pictureurl:function(n){if(n){if(typeof n!="string"&&(n=n+""),n.indexOf("http://")==-1&&n.indexOf("https://")==-1)try{n.indexOf("//")>-1?n=document.location.protocol+n:(n.charAt(0)!="/"&&(n="/"+n),n=document.location.protocol+"//"+document.location.host+n)}catch(t){console&&console.log(t)}}else throw new Error("Image url is not defined");return n},imageurl:function(n){if(n&&(typeof n!="string"&&(n=n+""),n.indexOf("http://")==-1&&n.indexOf("https://")==-1))try{n.indexOf("//")>-1?n=document.location.protocol+n:(n.charAt(0)!="/"&&(n="/"+n),n=document.location.protocol+"//"+document.location.host+n)}catch(t){console&&console.log(t)}return n},url:function(n){if(n){if(typeof n!="string"&&(n=n+""),n||(n=document.querySelector("link[rel='canonical']")?document.querySelector("link[rel='canonical']").getAttribute("href"):document.location.href),n.indexOf("http:")==-1&&n.indexOf("https:")==-1)try{n.indexOf("//")>-1?n=document.location.protocol+n:(n.charAt(0)!="/"&&(n="/"+n),n=document.location.protocol+"//"+document.location.host+n)}catch(t){console&&console.log(t)}}else throw new Error("Url is not defined");return n},canonicalurl:function(n){if(n&&(typeof n!="string"&&(n=n+""),n!="null"&&n.indexOf("http:")==-1&&n.indexOf("https:")==-1))try{n.indexOf("//")>-1?n=document.location.protocol+n:(n.charAt(0)!="/"&&(n="/"+n),n=document.location.protocol+"//"+document.location.host+n)}catch(t){console&&console.log(t)}return n},price:function(n){if(n){if(typeof n=="number")n=n+"";else if(typeof n=="string")try{n.trim&&(n=n.trim());var t=n.replace(/,/g,"").match(/\d+(?:\.\d{1,2})/);t&&(n=t[0])}catch(i){console&&console.log(i)}}else throw new Error("Price is not defined");return n},quantity:function(n){if(n){if(typeof n=="number")n=n+"";else if(typeof n=="string")try{n.trim&&(n=n.trim());var t=n.match(/\d+/);t&&(n=t[0])}catch(i){console&&console.log(i)}}else n="1";return n},color:function(n){return n?typeof n!="string"&&(n=n+""):n="",this.removeSpecialCharacters(n)},size:function(n){return n?typeof n!="string"&&(n=n+""):n="",this.removeSpecialCharacters(n)},sku:function(n){return n?typeof n!="string"&&(n=n+""):n="",n},options:function(n){if(n){if(typeof n!="string")try{n=JSON.stringify(n)}catch(t){n=""}}else n="";return n=this.removeSpecialCharacters(n)},optionalprices:function(n){var u=this._sdk._priceEnums,t,i,r;if(n){if(typeof n=="string")try{n=JSON.parse(n)}catch(e){return console&&console.log("value is not JSON object type."),""}function f(n){if(!n)return!1;for(var t=0;t<u.length;t++)if(u[t].toLowerCase()==n.toLowerCase())return!0;return!1}for(t=0;t<n.length;t++)if(i=n[t],i)for(r in i)try{if(r.toLowerCase()=="name"&&!f(i[r]))return console&&console.log('Object property name is not matched reserved key words. Name property needs to be in ["Reg", "Sale", "Clearance"]. OptionalPrices value will be empty for this gift.'),""}catch(e){return console&&console.log("Object property is not defined."),""}if(typeof n=="object")try{n=JSON.stringify(n)}catch(e){return console&&console.log("value is not JSON object type."),""}}else n="";return n},createdfrom:function(n){return n?typeof n!="string"&&(n=n+""):n="",n},availability:function(n){if(n)if(typeof n!="string"){if(typeof n=="number")if(parseInt(n)<0&&parseInt(n)>5)throw new Error("[Error] Availability is not in pre-defined: "+n);else n=n+""}else if(/^\d+$/.test(n)){if(parseInt(n)<0&&parseInt(n)>5)throw new Error("[Error] Availability is not in pre-defined: "+n);}else switch(n.toLowerCase()){case"available":n="Available";break;case"onlineonly":n="OnlineOnly";break;case"instoreonly":n="InStoreOnly";break;case"outofstock":n="OutOfStock";break;case"limitedavailability":n="LimitedAvailability";break;case"memberonlyavailable":n="MemberOnlyAvailable";break;default:n=""}else n="";return n}},generateUrl:function(){var n=this._urlTemplate+this._sdk._panelVersion,t;if(this._sdk._panelVersion=="2.1"&&(this._sdk._lp&&(n+="/"+this._sdk._lp),this._sdk._lp&&this._sdk._lang?n=n+"."+this._sdk._lang:this._sdk._lang&&(n=n+"/"+this._sdk._lang)),t=n+"/?"+this.convertParam(this._gift),this.trigger("url_genrated",{generateUrl:t}),!t)throw new Error("Gift object is not defined");return t},setMobilePanel:function(){var n=this._gift,t,i;window._mrAddGift=[];window._mrAddGift.push(["url",n.URL]);window._mrAddGift.push(["canonicalurl",n.URL]);window._mrAddGift.push(["sitekey",n.SiteKey]);window._mrAddGift.push(["sku",n.SKU]);window._mrAddGift.push(["title",n.Title]);window._mrAddGift.push(["price",n.Price]);window._mrAddGift.push(["imagesrc",n.PictureUrl]);window._mrAddGift.push(["qty",n.Quantity]);window._mrAddGift.push(["color",n.Color]);window._mrAddGift.push(["notes",n.Notes]);window._mrAddGift.push(["options",n.Options]);window._mrAddGift.push(["size",n.Size]);typeof AddToMrMobile!="undefined"&&(t=function(){var n="?"+AddToMrMobile.Serialize(AddToMrMobile.GiftParam);window.location=AddToMrMobile.AppRoot+AddToMrMobile.ActionPage+n;console&&console.log(n)},AddToMrMobile.StopButtonClickEvent||(i=document.createElement("div"),AddToMrMobile.LoadGiftParam(i,t)))},convertParam:function(n){var r=[],t,i;for(t in n)n.hasOwnProperty(t)&&(i=t,n[t]&&(t=="ImageUrl"&&(i="PictureUrl"),t=="CurrencyCode"&&(i="ReadCurrency"),r.push(encodeURIComponent(i)+"="+encodeURIComponent(n[t]))));return r.join("&")},on:function(n,t){typeof this._events[n]=="undefined"&&(this._events[n]=[]);this._events[n].push(t)},trigger:function(n,t){var r,i,u;if(typeof n=="string"&&(n={type:n,data:t}),n.target||(n.target=this),!n.type)throw new Error("Event object missing 'type' property.");if(this._events[n.type]&&this._events[n.type]instanceof Array)for(r=this._events[n.type],i=0,u=r.length;i<u;i++)r[i].call(this,n)},off:function(n,t){var r,i,u;if(this._events[n]instanceof Array)for(r=this._events[n],i=0,u=r.length;i<u;i++)if(r[i]===t){r.splice(i,1);break}}}};MyRegistrySDK.Behaviors={_eventTypes:[{registry_info_bound:"bindRegistryInfo"},{gift_option_bound:"bindGiftOptions"},{on_initialized:"onInitialized"}],_events:{},_siteKey:"4o2rsQ6xzpfLqlGq2rJP6w2",_domain:"//www.myregistry.com",registryId:null,registryType:null,giftId:null,giftOptions:null,mrTID:null,onInitialized:function(n){var t=this;t.bindRegistryInfo(function(){var i={caller:this};n&&n.call(this,i);t.trigger("on_initialized",i)})},setCookie:function(n,t,i){var u=new Date,r=new Date;(i==null||i==0)&&(i=1);r.setTime(u.getTime()+36e5*i);document.cookie=n+"="+escape(t)+";expires="+r.toGMTString()+";path=/"},getCookie:function(n){for(var t,r=n+"=",u=document.cookie.split(";"),i=0;i<u.length;i++){for(t=u[i];t.charAt(0)==" ";)t=t.substring(1);if(t.indexOf(r)==0)return t.substring(r.length,t.length)}return null},getURLParameterByName:function(n){n=n.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var i=new RegExp("[\\?&]"+n+"=([^&#]*)"),t=i.exec(location.search);return t===null?"":decodeURIComponent(t[1].replace(/\+/g," "))},bindRegistryInfo:function(n){this.registryId||(this.registryId=this.getURLParameterByName("mrRID"),this.registryType=this.getURLParameterByName("mrRType"),this.registryId!==""&&this.setCookie("mrRID",this.registryId,24),this.registryType!==""&&this.setCookie("mrRType",this.registryType,24));this.mrTID||(this.mrTID=this.getURLParameterByName("mrTID"),this.mrTID!==""&&this.setCookie("mrTID",this.mrTID,24));var t={myRegistryId:this.registryId,myRegistryType:this.registryType};n&&n.call(this,t);this.trigger("registry_info_bound",t)},bindGiftOptions:function(n){var i;if(this.giftId=this.getURLParameterByName("mrGID"),i=this,this.giftId){var r=this._domain,u=document.getElementsByTagName("body")[0],t=document.createElement("script");t.id="MyRegistryWidgetGiftOptionInfoSDK";t.type="text/javascript";t.async=!0;t.onload=function(){var t={};typeof myregistryGift!="undefined"&&(t=myregistryGift,t&&(this.giftOptions=t));n&&n.call(this,{giftOptions:this.giftOptions});i.trigger("gift_option_bound",{giftOptions:this.giftOptions})};t.src=r+"/ScriptPlatform/SDK/GiftVariable.js?sitekey="+this._siteKey+"&giftid="+this.giftId;u.appendChild(t)}},on:function(n,t){var i,r,u;if(typeof this._events[n]=="undefined"&&(this._events[n]=[]),this._events[n].push(t),n)for(i=0;i<this._eventTypes.length;i++)this._eventTypes[i]&&this._eventTypes[i][n]&&(r=this._eventTypes[i][n],this[r]&&(u=function(){},this[r].call(this,u)))},trigger:function(n,t){var r,i,u;if(typeof n=="string"&&(n={type:n,data:t}),n.target||(n.target=this),!n.type)throw new Error("Event object missing 'type' property.");if(this._events[n.type]&&this._events[n.type]instanceof Array)for(r=this._events[n.type],i=0,u=r.length;i<u;i++)r[i].call(this,t)},off:function(n,t){var r,i,u;if(this._events[n]instanceof Array)for(r=this._events[n],i=0,u=r.length;i<u;i++)if(r[i]===t){r.splice(i,1);break}}};MyRegistrySDK.Behaviors.onInitialized();