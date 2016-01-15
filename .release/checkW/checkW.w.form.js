define(function(require){
require('$model/UI2/system/components/justep/windowReceiver/windowReceiver');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/output/output');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/AppTest/checkW'); 
require('css!$model/UI2/AppTest/checkW').load();
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='__baseID__';
	this._flag_='819c5d2564680a608be879a81851d76a';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"_id":{"define":"_id","label":"ID","name":"_id","relation":"_id","rules":{"integer":true},"type":"Integer"},"content":{"define":"content","label":"题目内容","name":"content","relation":"content","type":"String"},"correctAnswer":{"define":"correctAnswer","label":"正确答案","name":"correctAnswer","relation":"correctAnswer","rules":{"integer":true},"type":"Integer"},"isCorrect":{"define":"isCorrect","label":"是否回答正确","name":"isCorrect","relation":"isCorrect","type":"Boolean"},"options":{"define":"options","label":"选项","name":"options","relation":"options","type":"String"},"questionType":{"define":"questionType","label":"问题类型","name":"questionType","relation":"questionType","type":"String"},"questionTypeName":{"define":"questionTypeName","label":"问题类型名称","name":"questionTypeName","relation":"questionTypeName","type":"String"},"studentAnswer":{"define":"studentAnswer","label":"学生回答","name":"studentAnswer","relation":"studentAnswer","rules":{"integer":true},"type":"Integer"},"viewAnswer":{"define":"viewAnswer","label":"显示答案","name":"viewAnswer","relation":"viewAnswer","rules":{"calculate":"$model.calAnswer( $row.val(\"correctAnswer\"), $row.val(\"studentAnswer\"))"},"type":"String"},"viewContent":{"define":"viewContent","label":"显示题目","name":"viewContent","relation":"viewContent","rules":{"calculate":"($row.val(\"_id\")+1)+\"、(\"+ $row.val(\"questionTypeName\")+\")\"+ $row.val(\"content\")"},"type":"String"}},"directDelete":false,"events":{"onAfterRefresh":"paperDataAfterRefresh"},"idColumn":"_id","limit":20,"xid":"paperData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"examName":{"define":"examName","label":"考试名称","name":"examName","relation":"examName","type":"String"},"score":{"define":"score","label":"分数","name":"score","relation":"score","rules":{"integer":true},"type":"Integer"},"viewName":{"define":"viewName","label":"显示名称","name":"viewName","relation":"viewName","rules":{"calculate":"\"考试名称：\"+ $data.val(\"examName\")"},"type":"String"},"viewScore":{"define":"viewScore","label":"显示分数","name":"viewScore","relation":"viewScore","rules":{"calculate":"\"考试分数：\"+ $data.val(\"score\")"},"type":"String"}},"directDelete":false,"events":{},"idColumn":"examName","initData":"[{\"examName\":\"打发士大夫似的\",\"score\":85}]","limit":20,"xid":"totalData"});
}}); 
return __result;});