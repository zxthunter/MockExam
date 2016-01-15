define(function(require){
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/select/radioGroup');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/button/radio');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/output/output');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/AppTest/examW_1'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='__baseID__';
	this._flag_='b9442d7e0fa7897b2a4f3d0cac26b159';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"_id":{"define":"_id","label":"ID","name":"_id","relation":"_id","rules":{"integer":true},"type":"Integer"},"answer":{"define":"answer","label":"答案","name":"answer","relation":"answer","type":"String"},"isFinished":{"define":"isFinished","label":"是否回答","name":"isFinished","relation":"isFinished","rules":{"calculate":"js: ($row.val(\"answer\")!=\"\")"},"type":"Boolean"},"quetion":{"define":"quetion","label":"问题","name":"quetion","relation":"quetion","type":"String"},"selectionNum":{"define":"selectionNum","label":"选项数量","name":"selectionNum","relation":"selectionNum","rules":{"integer":true},"type":"Integer"},"selections":{"define":"selections","label":"选项","name":"selections","relation":"selections","type":"String"},"viewQuestion":{"define":"viewQuestion","label":"显示问题","name":"viewQuestion","relation":"viewQuestion","rules":{"calculate":"$row.val(\"_id\")+ \"、\"+$row.val(\"quetion\")"},"type":"String"}},"directDelete":false,"events":{"onAfterRefresh":"questionDataAfterRefresh","onValueChanged":"questionDataValueChanged"},"idColumn":"_id","initData":"[{\"_id\":1,\"selectionNum\":2,\"quetion\":\"今天天气如何？\",\"selections\":\"{\\\"A\\\":\\\"好\\\",\\\"B\\\":\\\"不好\\\"}\",\"answer\":\"\"},{\"_id\":2,\"selectionNum\":3,\"quetion\":\"你今天心情好吗？\",\"selections\":\"{\\\"A\\\":\\\"好\\\",\\\"B\\\":\\\"不好\\\",\\\"C\\\":\\\"一般般\\\"}\",\"answer\":\"\"},{\"_id\":3,\"selectionNum\":2,\"quetion\":\"你好吗？\",\"selections\":\"{\\\"A\\\":\\\"好\\\",\\\"B\\\":\\\"坏\\\"}\"},{\"_id\":4,\"selectionNum\":4,\"quetion\":\"天上会掉馅饼吗?\",\"selections\":\"{\\\"A\\\":\\\"会\\\",\\\"B\\\":\\\"不会\\\",\\\"C\\\":\\\"会掉青蛙\\\",\\\"D\\\":\\\"会掉金鱼\\\"}\",\"answer\":\"\"},{\"_id\":5,\"selectionNum\":3,\"quetion\":\"我的学校在哪里？\",\"selections\":\"{\\\"A\\\":\\\"清华\\\",\\\"B\\\":\\\"北大\\\",\\\"C\\\":\\\"北师大\\\"}\"},{\"_id\":6,\"selectionNum\":4,\"quetion\":\"我的宿舍在哪里？\",\"selections\":\"{\\\"A\\\":\\\"302\\\",\\\"B\\\":\\\"532\\\",\\\"C\\\":\\\"343\\\",\\\"D\\\":\\\"356\\\"}\"},{\"_id\":7,\"selectionNum\":1,\"quetion\":\"你好吗？\",\"selections\":\"{\\\"A\\\":\\\"好\\\"}\"}]","limit":20,"xid":"questionData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"answer":{"define":"answer","label":"显示选项","name":"answer","relation":"answer","rules":{"calculate":"$row.val(\"selection\")+\" 、\" +$row.val(\"content\")"},"type":"String"},"content":{"define":"content","label":"选项内容","name":"content","relation":"content","type":"String"},"selection":{"define":"selection","label":"选项","name":"selection","relation":"selection","type":"String"}},"directDelete":false,"events":{},"idColumn":"selection","initData":"[]","limit":20,"xid":"nowSelectionData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"answer":{"define":"answer","label":"答案","name":"answer","relation":"answer","type":"String"},"finishedQuestionNum":{"define":"finishedQuestionNum","label":"完成题数","name":"finishedQuestionNum","relation":"finishedQuestionNum","rules":{"integer":true},"type":"Integer"},"totalQuestionNum":{"define":"totalQuestionNum","label":"总题数","name":"totalQuestionNum","relation":"totalQuestionNum","rules":{"calculate":"$model.questionData.count();","integer":true},"type":"Integer"}},"directDelete":false,"events":{},"idColumn":"totalQuestionNum","initData":"[{\"isFinishedLoad\":\"false\"}]","limit":20,"xid":"totalData"});
}}); 
return __result;});