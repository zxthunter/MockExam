window.__justep.__ResourceEngine.loadCss([{url: '/$v1d039f0f010f44ab9a2a8c6a10cb3f70$lzh_CN$sdesktop$d/UI2/system/components/comp.min.css', include: '$model/UI2/system/components/justep/row/css/row,$model/UI2/system/components/justep/attachment/css/attachment,$model/UI2/system/components/justep/barcode/css/barcodeImage,$model/UI2/system/components/bootstrap/form/css/form,$model/UI2/system/components/justep/panel/css/panel,$model/UI2/system/components/bootstrap/accordion/css/accordion,$model/UI2/system/components/justep/common/css/scrollable,$model/UI2/system/components/bootstrap/pager/css/pager,$model/UI2/system/components/justep/scrollView/css/scrollView,$model/UI2/system/components/justep/input/css/datePickerPC,$model/UI2/system/components/bootstrap/navs/css/navs,$model/UI2/system/components/justep/contents/css/contents,$model/UI2/system/components/justep/popMenu/css/popMenu,$model/UI2/system/components/justep/lib/css/icons,$model/UI2/system/components/justep/titleBar/css/titleBar,$model/UI2/system/components/justep/dataTables/css/dataTables,$model/UI2/system/components/justep/dialog/css/dialog,$model/UI2/system/components/justep/messageDialog/css/messageDialog,$model/UI2/system/components/bootstrap/navbar/css/navbar,$model/UI2/system/components/justep/toolBar/css/toolBar,$model/UI2/system/components/justep/popOver/css/popOver,$model/UI2/system/components/justep/loadingBar/loadingBar,$model/UI2/system/components/justep/input/css/datePicker,$model/UI2/system/components/justep/dataTables/css/dataTables,$model/UI2/system/components/bootstrap/dialog/css/dialog,$model/UI2/system/components/justep/wing/css/wing,$model/UI2/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/UI2/system/components/justep/menu/css/menu,$model/UI2/system/components/justep/numberSelect/css/numberList,$model/UI2/system/components/justep/list/css/list,$model/UI2/system/components/bootstrap/carousel/css/carousel,$model/UI2/system/components/bootstrap/dropdown/css/dropdown,$model/UI2/system/components/justep/common/css/forms,$model/UI2/system/components/justep/bar/css/bar,$model/UI2/system/components/bootstrap/tabs/css/tabs,$model/UI2/system/components/bootstrap/pagination/css/pagination'},{url: '/$vfff490292c17480d9680d6e33347b7c3$lzh_CN$sdesktop$d/UI2/system/components/bootstrap.min.css', include: '$model/UI2/system/components/bootstrap/lib/css/bootstrap,$model/UI2/system/components/bootstrap/lib/css/bootstrap-theme'}]);window.__justep.__ResourceEngine.loadJs(['/$vf874d52104e742089bfe85d66fbce24b$lzh_CN$sdesktop$d/UI2/system/components/comp.min.js','/$vd8cba24e9a1a4ee3b76c9a627c8ffe6b$lzh_CN$sdesktop$d/UI2/system/common.min.js','/$v56d1a0dca28c4239aa9668d4de2b7c34$lzh_CN$sdesktop$d/UI2/system/core.min.js']);define(function(require){
require('$model/UI2/system/components/justep/labelEdit/labelEdit');
require('$model/UI2/system/components/justep/windowReceiver/windowReceiver');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/button/buttonGroup');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/justep/messageDialog/messageDialog');
require('$model/UI2/system/components/justep/select/select');
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/output/output');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/AppTest/mainW'); 
require('css!$model/UI2/AppTest/mainW').load();
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='__baseID__';
	this._flag_='6feb4959f394de1614898485db37b8b0';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"availableMocks":{"define":"availableMocks","label":"可用模考次数","name":"availableMocks","relation":"availableMocks","type":"String"},"completedMocks":{"define":"completedMocks","label":"已完成模考次数","name":"completedMocks","relation":"completedMocks","type":"String"},"mobile":{"define":"mobile","label":"手机号","name":"mobile","relation":"mobile","type":"String"},"name":{"define":"name","label":"名字","name":"name","relation":"name","type":"String"},"studentId":{"define":"studentId","label":"学生ID","name":"studentId","relation":"studentId","type":"String"},"totalMocks":{"define":"totalMocks","label":"总共模考次数","name":"totalMocks","relation":"totalMocks","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"totalDataCustomRefresh"},"idColumn":"studentId","limit":20,"xid":"totalData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"_id":{"define":"EXPRESS","label":"ID","name":"_id","relation":"EXPRESS","type":"String"},"assessmentNature":{"define":"EXPRESS","label":"考核类型","name":"assessmentNature","relation":"EXPRESS","rules":{"integer":true},"type":"Integer"},"calExamDate":{"define":"EXPRESS","label":"考试日期","name":"calExamDate","relation":"EXPRESS","rules":{"calculate":"\"时间：\"+ $model.changeLongToString( $row.val(\"examDate\"))"},"type":"String"},"calExamName":{"define":"EXPRESS","label":"考试名称","name":"calExamName","relation":"EXPRESS","rules":{"calculate":"\"名称：\"+ $row.val(\"examName\")"},"type":"String"},"calExamScore":{"define":"EXPRESS","label":"考试分数","name":"calExamScore","relation":"EXPRESS","rules":{"calculate":"\"分数：\"+ (($row.val(\"examScore\")!=-1)?$row.val(\"examScore\"):\"\")"},"type":"String"},"calExamStatus":{"define":"EXPRESS","label":"考试状态","name":"calExamStatus","relation":"EXPRESS","rules":{"calculate":"\"状态：\"+($row.val('examStatus')==1?'考试中':'已完成')","number":true},"type":"Double"},"examDate":{"define":"EXPRESS","label":"考试日期","name":"examDate","relation":"EXPRESS","rules":{"integer":true},"type":"Long"},"examId":{"define":"EXPRESS","label":"考试ID","name":"examId","relation":"EXPRESS","type":"String"},"examName":{"define":"EXPRESS","label":"考试名称","name":"examName","relation":"EXPRESS","type":"String"},"examScore":{"define":"EXPRESS","label":"考试分数","name":"examScore","relation":"EXPRESS","rules":{"number":true},"type":"Double"},"examStatus":{"define":"EXPRESS","label":"考试状态","name":"examStatus","relation":"EXPRESS","rules":{"integer":true},"type":"Integer"},"majorId":{"define":"EXPRESS","label":"考核对象","name":"majorId","relation":"EXPRESS","type":"String"},"remainTime":{"define":"EXPRESS","label":"剩余时间","name":"remainTime","relation":"EXPRESS","rules":{"integer":true},"type":"Long"}},"directDelete":false,"events":{"onCustomRefresh":"examDataCustomRefresh"},"idColumn":"_id","initData":"[]","limit":20,"xid":"examData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"_id":{"define":"_id","label":"ID","name":"_id","relation":"_id","rules":{"integer":true},"type":"Integer"},"name":{"define":"name","label":"名称","name":"name","relation":"name","type":"String"}},"directDelete":false,"events":{"onCreate":"data1Create"},"idColumn":"_id","limit":20,"xid":"firstNode"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"_id":{"define":"_id","label":"ID","name":"_id","relation":"_id","rules":{"integer":true},"type":"Integer"},"name":{"define":"name","label":"名称","name":"name","relation":"name","type":"String"}},"directDelete":false,"events":{},"idColumn":"_id","limit":20,"xid":"secondNode"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"_id":{"define":"_id","label":"ID","name":"_id","relation":"_id","rules":{"integer":true},"type":"Integer"},"name":{"define":"name","label":"名称","name":"name","relation":"name","type":"String"}},"directDelete":false,"events":{},"idColumn":"_id","limit":20,"xid":"thirdNode"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"_id":{"define":"_id","label":"ID","name":"_id","relation":"_id","rules":{"integer":true},"type":"Integer"},"name":{"define":"name","label":"名称","name":"name","relation":"name","type":"String"}},"directDelete":false,"events":{},"idColumn":"_id","initData":"[{\"_id\":0,\"name\":\"换证\"},{\"_id\":1,\"name\":\"初审\"},{\"_id\":2,\"name\":\"复审\"}]","limit":20,"xid":"fourthData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"first":{"define":"first","label":"1","name":"first","relation":"first","type":"String"},"fourth":{"define":"fourth","label":"4","name":"fourth","relation":"fourth","type":"String"},"second":{"define":"second","label":"2","name":"second","relation":"second","type":"String"},"third":{"define":"third","label":"3","name":"third","relation":"third","type":"String"}},"directDelete":false,"events":{},"idColumn":"first","initData":"[{}]","limit":20,"xid":"launchData"});
 var justep = require('$UI/system/lib/justep');if(!this['__justep__']) this['__justep__'] = {};if(!this['__justep__'].selectOptionsAfterRender)	this['__justep__'].selectOptionsAfterRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._addDefaultOption();	};
 var justep = require('$UI/system/lib/justep');if(!this['__justep__']) this['__justep__'] = {};if(!this['__justep__'].selectOptionsAfterRender)	this['__justep__'].selectOptionsAfterRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._addDefaultOption();	};
 var justep = require('$UI/system/lib/justep');if(!this['__justep__']) this['__justep__'] = {};if(!this['__justep__'].selectOptionsAfterRender)	this['__justep__'].selectOptionsAfterRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._addDefaultOption();	};
 var justep = require('$UI/system/lib/justep');if(!this['__justep__']) this['__justep__'] = {};if(!this['__justep__'].selectOptionsAfterRender)	this['__justep__'].selectOptionsAfterRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._addDefaultOption();	};
}}); 
return __result;});
