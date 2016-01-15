<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:mobile">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:133px;top:13px;"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="paperData" idColumn="_id" onAfterRefresh="paperDataAfterRefresh"><column label="ID" name="_id" type="Integer" xid="xid1"></column>
  <column label="问题类型" name="questionType" type="String" xid="xid2"></column>
  <column label="问题类型名称" name="questionTypeName" type="String" xid="xid3"></column>
  <column label="选项" name="options" type="String" xid="xid4"></column>
  <column label="学生回答" name="studentAnswer" type="Integer" xid="xid5"></column>
  <column label="正确答案" name="correctAnswer" type="Integer" xid="xid6"></column>
  <column label="是否回答正确" name="isCorrect" type="Boolean" xid="xid7"></column>
  <column label="题目内容" name="content" type="String" xid="xid8"></column>
  <column label="显示题目" name="viewContent" type="String" xid="xid9"></column>
  <column label="显示答案" name="viewAnswer" type="String" xid="xid10"></column>
  <rule xid="rule1">
   <col name="viewContent" xid="ruleCol1">
    <calculate xid="calculate1">
     <expr xid="default1">($row.val(&quot;_id&quot;)+1)+&quot;、(&quot;+ $row.val(&quot;questionTypeName&quot;)+&quot;)&quot;+ $row.val(&quot;content&quot;)</expr></calculate> </col> 
   <col name="_id" xid="ruleCol2">
    <calculate xid="calculate2">
     <expr xid="default2"></expr></calculate> </col> 
   <col name="viewAnswer" xid="ruleCol3">
    <calculate xid="calculate3">
     <expr xid="default3">$model.calAnswer( $row.val(&quot;correctAnswer&quot;), $row.val(&quot;studentAnswer&quot;))</expr></calculate> </col> </rule></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="totalData" idColumn="examName"><column label="考试名称" name="examName" type="String" xid="xid11"></column>
  <column label="分数" name="score" type="Integer" xid="xid12"></column>
  <data xid="default4">[{&quot;examName&quot;:&quot;打发士大夫似的&quot;,&quot;score&quot;:85}]</data>
  <column label="显示名称" name="viewName" type="String" xid="xid13"></column>
  <column label="显示分数" name="viewScore" type="String" xid="xid14"></column>
  <rule xid="rule2">
   <col name="viewName" xid="ruleCol4">
    <calculate xid="calculate4">
     <expr xid="default5">&quot;考试名称：&quot;+ $data.val(&quot;examName&quot;)</expr></calculate> </col> 
   <col name="viewScore" xid="ruleCol5">
    <calculate xid="calculate5">
     <expr xid="default6">&quot;考试分数：&quot;+  $data.val(&quot;score&quot;)</expr></calculate> </col> </rule></div></div> 
<span component="$UI/system/components/justep/windowReceiver/windowReceiver" xid="windowReceiver2" onReceive="windowReceiver10Receive" style="left:44px;top:56px;"></span>
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1"><div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar1">
   <div class="x-titlebar-left" xid="div1"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="button" xid="button2" icon="icon-calendar" onClick="button2Click">
   <i xid="i2" class="icon-calendar"></i>
   <span xid="span2"></span></a></div>
   <div class="x-titlebar-title" xid="div2"></div>
   <div class="x-titlebar-right reverse" xid="div3"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="button" xid="button1" icon="icon-arrow-right-c" onClick="button1Click">
   <i xid="i1" class="icon-arrow-right-c"></i>
   <span xid="span1"></span></a></div></div></div>
   <div class="x-panel-content" xid="content1"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list2" data="paperData" >
   <ul class="x-list-template" xid="listTemplateUl2" >
    <li xid="li2" class="listInnerClass">
  <div component="$UI/system/components/justep/output/output" class="x-output contentOutput" xid="output7" bind-ref="ref('viewContent')"></div><div component="$UI/system/components/justep/output/output" class="x-output optionOutput" xid="output8" bind-ref="ref('options')"></div><div component="$UI/system/components/justep/output/output" class="x-output answerOutput"  xid="output9" bind-ref="ref('viewAnswer')"></div></li></ul> </div>
  </div>
   <div xid="div4" class="showTitleClass">
   
    
  <div xid="div5" class="showTitleInnerClass"><div component="$UI/system/components/justep/output/output" class="x-output outputClass" xid="output1" bind-ref="totalData.ref('viewName')"></div><div component="$UI/system/components/justep/output/output" class="x-output outputClass" xid="output2" bind-ref="totalData.ref('viewScore')"></div><a component="$UI/system/components/justep/button/button" class="btn btn-default checkButton" label="查看试卷" xid="button3" onClick="button3Click">
    <i xid="i3"></i>
    <span xid="span3">查看试卷</span></a>
  </div></div></div></div>