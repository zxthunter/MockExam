define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/wing/child');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/wing/wing');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/AppTest/test'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='__baseID__';
	this._flag_='3af55ed2b6370b71b447f93e473c8017';
	this.callParent(contextUrl);
}}); 
return __result;});