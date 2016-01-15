<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window"
  design="device:mobile">  
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1"
    src="$UI/AppTest/examW.w" style="top:9px;left:96px;"/>
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog2" src="$UI/AppTest/checkW.w" style="left:137px;top:5px;"></span><div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;width:158px;left:306px;top:252px;"> 
    <div component="$UI/system/components/justep/data/data" autoLoad="true"
      xid="totalData" idColumn="studentId" onCustomRefresh="totalDataCustomRefresh">
      <column label="学生ID" name="studentId" type="String" xid="xid22"></column>
  <column label="手机号" name="mobile" type="String" xid="xid23"></column>
  <column label="名字" name="name" type="String" xid="xid24"></column>
  <column label="可用模考次数" name="availableMocks" type="String" xid="xid25"></column>
  <column label="已完成模考次数" name="completedMocks" type="String" xid="xid26"></column>
  <column label="总共模考次数" name="totalMocks" type="String" xid="xid27"></column></div>
    <div component="$UI/system/components/justep/data/data" autoLoad="true"
      xid="examData" idColumn="_id" confirmRefresh="true" onCustomRefresh="examDataCustomRefresh"> 
      <column isCalculate="true" label="ID" name="_id" type="String" xid="xid29"></column>
  <column isCalculate="true" label="考试ID" name="examId" type="String" xid="xid1"></column>
  <column isCalculate="true" label="考核对象" name="majorId" type="String" xid="xid31"></column>
  <column isCalculate="true" label="考试名称" name="examName" type="String" xid="xid2"></column>
  <column isCalculate="true" label="考试状态" name="examStatus" type="Integer" xid="xid3"></column>
  <column isCalculate="true" label="考试日期" name="examDate" type="Long" xid="xid4"></column>
  <column isCalculate="true" label="考试分数" name="examScore" type="Double" xid="xid5"></column>
  <column isCalculate="true" label="考试名称" name="calExamName" type="String" xid="xid9"></column>
  <column isCalculate="true" label="考试状态" name="calExamStatus" type="Double" xid="xid6"></column>
  <column isCalculate="true" label="考试日期" name="calExamDate" type="String" xid="xid7"></column>
  <column isCalculate="true" label="考试分数" name="calExamScore" type="String" xid="xid8"></column>
  <column isCalculate="true" label="剩余时间" name="remainTime" type="Long" xid="xid30"></column>
  <column isCalculate="true" label="考核类型" name="assessmentNature" type="Integer" xid="xid32"></column>
  <rule xid="rule1">
   <col name="calExamStatus" xid="ruleCol1">
    <calculate xid="calculate1">
     <expr xid="default2">&quot;状态：&quot;+($row.val('examStatus')==1?'考试中':'已完成')</expr></calculate> </col> 
   <col name="_id" xid="ruleCol2">
    <calculate xid="calculate2">
     <expr xid="default3"></expr></calculate> </col> 
   <col name="calExamDate" xid="ruleCol3">
    <calculate xid="calculate3">
     <expr xid="default4">&quot;时间：&quot;+ $model.changeLongToString( $row.val(&quot;examDate&quot;))</expr></calculate> </col> 
   <col name="calExamScore" xid="ruleCol4">
    <calculate xid="calculate4">
     <expr xid="default5">&quot;分数：&quot;+ (($row.val(&quot;examScore&quot;)!=-1)?$row.val(&quot;examScore&quot;):&quot;&quot;)</expr></calculate> </col> 
   <col name="calExamName" xid="ruleCol5">
    <calculate xid="calculate5">
     <expr xid="default6">&quot;名称：&quot;+ $row.val(&quot;examName&quot;)</expr></calculate> </col> 
   <col name="calRemainTime" xid="ruleCol6">
    <calculate xid="calculate6">
     <expr xid="default1">$model.calTime()</expr></calculate> </col> </rule>
  <data xid="default9">[]</data></div>  
    <div component="$UI/system/components/justep/data/data" autoLoad="true"
      xid="firstNode" onCreate="data1Create" idColumn="_id">
      <column label="ID" name="_id" type="Integer" xid="xid10"/>  
      <column label="名称" name="name" type="String" xid="xid11"/>
    </div>  
    <div component="$UI/system/components/justep/data/data" autoLoad="true"
      xid="secondNode" idColumn="_id">
      <column label="ID" name="_id" type="Integer" xid="xid18"/>  
      <column label="名称" name="name" type="String" xid="xid19"/>
    </div>  
    <div component="$UI/system/components/justep/data/data" autoLoad="true"
      xid="thirdNode" idColumn="_id">
      <column label="ID" name="_id" type="Integer" xid="xid20"/>  
      <column label="名称" name="name" type="String" xid="xid21"/>
    </div>  
    <div component="$UI/system/components/justep/data/data" autoLoad="true"
      xid="fourthData" idColumn="_id">
      <column label="ID" name="_id" type="Integer" xid="xid12"/>  
      <column label="名称" name="name" type="String" xid="xid17"/>  
      <data xid="default8">[{&quot;_id&quot;:0,&quot;name&quot;:&quot;换证&quot;},{&quot;_id&quot;:1,&quot;name&quot;:&quot;初审&quot;},{&quot;_id&quot;:2,&quot;name&quot;:&quot;复审&quot;}]</data></div>
    <div component="$UI/system/components/justep/data/data" autoLoad="true"
      xid="launchData" idColumn="first">
      <column label="1" name="first" type="String" xid="xid13"/>  
      <column label="2" name="second" type="String" xid="xid14"/>  
      <column label="3" name="third" type="String" xid="xid15"/>  
      <column label="4" name="fourth" type="String" xid="xid16"/>  
      <data xid="default7">[{}]</data>
    </div>
  </div>  
  <span component="$UI/system/components/justep/messageDialog/messageDialog" xid="messageDialog1" message="您已经没有考试资格！"></span>
  <span component="$UI/system/components/justep/windowReceiver/windowReceiver" xid="windowReceiver1" onReceive="windowReceiver1Receive"></span><div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="panel1"> 
    <div class="x-panel-top" xid="top1"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar"
        xid="titleBar1"> 
        <p xid="p1" class="titleP"><img src="$UI/AppTest/logo-yunnan.png" alt="" class="imageClass" xid="image1"></img>云南省安全培训模拟考试系统
  </p></div> 
    </div>  
    <div class="x-panel-content" xid="content1"> 
      <div component="$UI/system/components/justep/contents/contents" class="x-contents x-full"
        xid="contents1" swipe="false"> 
        <div class="x-contents-content" xid="content2"> 
          <div component="$UI/system/components/justep/list/list" class="x-list"
            xid="list2" data="examData"> 
            <ul class="x-list-template listClass" xid="listTemplateUl2"> 
              <li xid="li2" class="listInnerClass"> 
                <div component="$UI/system/components/justep/row/row" class="x-row"
                  xid="row4"> 
                  <div class="x-col" xid="col12"> 
                    <div component="$UI/system/components/justep/output/output"
                      class="x-output" xid="output8" bind-ref="ref('calExamName')"/> 
                  </div> 
                </div>  
                <div component="$UI/system/components/justep/row/row" class="x-row"
                  xid="row5"> 
                  <div class="x-col" xid="col14"> 
                    <div component="$UI/system/components/justep/output/output"
                      class="x-output" xid="output9" bind-ref="ref('calExamStatus')"/> 
                  </div>  
                  <div class="x-col" xid="col15"> 
                    <div component="$UI/system/components/justep/output/output"
                      class="x-output" xid="output10" bind-ref="ref('calExamDate')"/> 
                  </div> 
                </div>  
                <div component="$UI/system/components/justep/row/row" class="x-row"
                  xid="row6"> 
                  <div class="x-col" xid="col16"> 
                    <div component="$UI/system/components/justep/output/output"
                      class="x-output" xid="output11" bind-ref="ref('calExamScore')"/> 
                  </div>  
                  <div class="x-col" xid="col18"> 
                    <a component="$UI/system/components/justep/button/button"
                      class="btn btn-success btn-sm" xid="button4"> 
                      <span xid="span4" style="height:100% width:100%" class="glyphicon glyphicon-eye-open"/> 
                    </a> 
                  </div> 
                </div> 
              </li> 
            </ul> 
          </div> 
        </div>  
        <div class="x-contents-content" xid="content5"> 
          <div xid="div5" class="secondViewClass"> 
            <div xid="div6" class="secondViewInnerClass"> 
              <span xid="span9"><![CDATA[资格类型：]]></span>  
              <select component="$UI/system/components/justep/select/select" class="form-control selection"
                xid="select1" bind-options="firstNode" bind-optionsValue="_id" bind-optionsLabel="name"
                bind-ref="launchData.ref('first')" onChange="select1Change"/> 
            </div>  
            <div xid="div7" class="secondViewInnerClass"> 
              <span xid="span6"><![CDATA[作业类别：]]></span>  
              <select component="$UI/system/components/justep/select/select" class="form-control selection"
                xid="select2" bind-options="secondNode" bind-optionsValue="_id" bind-optionsLabel="name"
                bind-ref="launchData.ref('second')" onChange="select3Change"/> 
            </div>  
            <div xid="div8" class="secondViewInnerClass"> 
              <span xid="span7"><![CDATA[准操项目：]]></span>  
              <select component="$UI/system/components/justep/select/select" class="form-control selection"
                xid="select3" bind-ref="launchData.ref('third')" bind-options="thirdNode"
                bind-optionsValue="_id" bind-optionsLabel="name"/> 
            </div>  
            <div xid="div9" class="secondViewInnerClass"> 
              <span xid="span8"><![CDATA[考核性质：]]></span>  
              <select component="$UI/system/components/justep/select/select" class="form-control selection"
                xid="select4" bind-ref="launchData.ref('fourth')" bind-options="fourthData"
                bind-optionsValue="_id" bind-optionsLabel="name" style="width:100%;"/> 
            </div>  
            <div xid="div4" class="secondViewInnerClass"> 
              <a component="$UI/system/components/justep/button/button" class="btn btn-success launchButton"
                label="获取试卷" xid="button5" onClick="button5Click"> 
                <i xid="i4"/>  
                <span xid="span5">获取试卷</span> 
              </a> 
            </div> 
          </div> 
        </div>  
        <div class="x-contents-content" xid="content6"> 
          <div xid="div10" class="thirdViewClass">
            <div xid="div11" class="secondViewInnerClass">
              <div component="$UI/system/components/justep/labelEdit/labelEdit"
                class="x-label-edit" xid="labelOutput1"> 
                <label class="x-label" xid="label1"><![CDATA[学生姓名：]]></label>  
                <div component="$UI/system/components/justep/output/output"
                  class="x-output x-edit" xid="output1" bind-ref="totalData.ref('name')"/>
              </div>
            </div>  
            <div xid="div12" class="secondViewInnerClass">
              <div component="$UI/system/components/justep/labelEdit/labelEdit"
                class="x-label-edit" xid="labelOutput2"> 
                <label class="x-label" xid="label2"><![CDATA[首次访问：]]></label>  
                <div component="$UI/system/components/justep/output/output"
                  class="x-output x-edit" xid="output2"/>
              </div>
            </div>  
            <div xid="div13" class="secondViewInnerClass">
              <div component="$UI/system/components/justep/labelEdit/labelEdit"
                class="x-label-edit" xid="labelOutput3"> 
                <label class="x-label" xid="label3"><![CDATA[有效模考数：]]></label>  
                <div component="$UI/system/components/justep/output/output"
                  class="x-output x-edit" xid="output3" bind-ref="totalData.ref('availableMocks')"/>
              </div>
            </div>  
            <div xid="div14" class="secondViewInnerClass">
              <div component="$UI/system/components/justep/labelEdit/labelEdit"
                class="x-label-edit" xid="labelOutput4"> 
                <label class="x-label" xid="label4"><![CDATA[已完成模考数：]]></label>  
                <div component="$UI/system/components/justep/output/output"
                  class="x-output x-edit" xid="output4" bind-ref="totalData.ref('completedMocks')"/>
              </div>
            </div>
          </div> 
        </div> 
      </div> 
    </div>  
    <div class="x-panel-bottom" xid="bottom1"> 
      <div component="$UI/system/components/justep/button/buttonGroup" class="btn-group x-card btn-group-justified"
        tabbed="true" xid="buttonGroup1"> 
        <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-only-icon"
          label="button" xid="button1" onClick="button1Click" icon="icon-android-note"> 
          <i xid="i1" class="icon-android-note"/>  
          <span xid="span1"/> 
        </a>  
        <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-only-icon"
          label="button" xid="button2" onClick="button2Click" icon="icon-android-send"> 
          <i xid="i2" class="icon-android-send"/>  
          <span xid="span2"/> 
        </a>  
        <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-only-icon"
          label="button" xid="button3" onClick="button3Click" icon="icon-android-social-user"> 
          <i xid="i3" class="icon-android-social-user"/>  
          <span xid="span3"/> 
        </a> 
      </div> 
    </div> 
  <div xid="div2" class="_showTitleClass">
   <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-lg btn-only-icon" label="button" xid="button7" icon="icon-refreshing">
   <i xid="i6" class="icon-refreshing"></i>
   <span xid="span11"></span></a></div></div> 
</div>
