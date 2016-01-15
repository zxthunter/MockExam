window.__justep.__ResourceEngine.loadCss([{url: '/$v944eda50f13f461a98194d47e76c4ae6$lzh_CN$sdesktop$d/UI2/system/components/comp.min.css', include: '$model/UI2/system/components/justep/row/css/row,$model/UI2/system/components/justep/attachment/css/attachment,$model/UI2/system/components/justep/barcode/css/barcodeImage,$model/UI2/system/components/bootstrap/form/css/form,$model/UI2/system/components/justep/panel/css/panel,$model/UI2/system/components/bootstrap/accordion/css/accordion,$model/UI2/system/components/justep/common/css/scrollable,$model/UI2/system/components/bootstrap/pager/css/pager,$model/UI2/system/components/justep/scrollView/css/scrollView,$model/UI2/system/components/justep/input/css/datePickerPC,$model/UI2/system/components/bootstrap/navs/css/navs,$model/UI2/system/components/justep/contents/css/contents,$model/UI2/system/components/justep/popMenu/css/popMenu,$model/UI2/system/components/justep/lib/css/icons,$model/UI2/system/components/justep/titleBar/css/titleBar,$model/UI2/system/components/justep/dataTables/css/dataTables,$model/UI2/system/components/justep/dialog/css/dialog,$model/UI2/system/components/justep/messageDialog/css/messageDialog,$model/UI2/system/components/bootstrap/navbar/css/navbar,$model/UI2/system/components/justep/toolBar/css/toolBar,$model/UI2/system/components/justep/popOver/css/popOver,$model/UI2/system/components/justep/loadingBar/loadingBar,$model/UI2/system/components/justep/input/css/datePicker,$model/UI2/system/components/justep/dataTables/css/dataTables,$model/UI2/system/components/bootstrap/dialog/css/dialog,$model/UI2/system/components/justep/wing/css/wing,$model/UI2/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/UI2/system/components/justep/menu/css/menu,$model/UI2/system/components/justep/numberSelect/css/numberList,$model/UI2/system/components/justep/list/css/list,$model/UI2/system/components/bootstrap/carousel/css/carousel,$model/UI2/system/components/bootstrap/dropdown/css/dropdown,$model/UI2/system/components/justep/common/css/forms,$model/UI2/system/components/justep/bar/css/bar,$model/UI2/system/components/bootstrap/tabs/css/tabs,$model/UI2/system/components/bootstrap/pagination/css/pagination'},{url: '/$v945addc580af4e2ea0361a59dd133b50$lzh_CN$sdesktop$d/UI2/system/components/bootstrap.min.css', include: '$model/UI2/system/components/bootstrap/lib/css/bootstrap,$model/UI2/system/components/bootstrap/lib/css/bootstrap-theme'}]);window.__justep.__ResourceEngine.loadJs(['/$v9131f4a72d4942c8aa8ae20d5fd0a1cf$lzh_CN$sdesktop$d/UI2/system/components/comp.min.js','/$ve79cece69c314e31a6e5521a9c818bc6$lzh_CN$sdesktop$d/UI2/system/common.min.js','/$v23ffdf4ae91b4f7cbc45b0fda58a9bca$lzh_CN$sdesktop$d/UI2/system/core.min.js']);define(function(require){
require('$model/UI2/system/components/justep/labelEdit/labelEdit');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/input/password');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/input/input');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/AppTest/loginW'); 
require('css!$model/UI2/AppTest/loginW').load();
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='__baseID__';
	this._flag_='c64c189af3f11296742211234a52108a';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"mobile":{"define":"mobile","label":"手机号码","name":"mobile","relation":"mobile","type":"String"},"password":{"define":"password","label":"密码 ","name":"password","relation":"password","type":"String"}},"directDelete":false,"events":{},"idColumn":"mobile","initData":"[{}]","limit":20,"xid":"loginData"});
}}); 
return __result;});
