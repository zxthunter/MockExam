define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var Model = function(){
		this.callParent();
	};
var optionConstant = ["A","B","C","D"];
var isfinishLoad =false;
	Model.prototype.windowReceiver10Receive = function(event){
		var xhr = this.comp("windowReceiver2").getReceiveData();
		console.log(xhr);
		var totalData = this.comp("totalData");
		totalData.setValue("examName", xhr.title);
		totalData.setValue("score", xhr.studentExam.examScore);
		//解析问题
		var questions = xhr.questions;
		var data = this.comp("paperData");
		for (var i=0; i<questions.length; i++){
			var question = questions[i];
			var studentAnswer = question.studentAnswer;
			data.newData();
			data.setValue("_id", i);
			data.setValue("content", question.content);
			data.setValue("questionType", question.questionType);
			data.setValue("questionTypeName", question.questionTypeName);
			if (studentAnswer){
				if (question.questionType == 3){
					data.setValue("options", "A、正确&nbsp&nbsp&nbsp B、不正确");
					if (question.judgeCorrect){
						data.setValue("correctAnswer",0);
					}
					else {
						data.setValue("correctAnswer",1);
					}
					if (studentAnswer.answer == "true"){
						data.setValue("studentAnswer",0);
					}
					else if (studentAnswer.answer == "false"){
						data.setValue("studentAnswer",1);
					}
					data.setValue("isCorrect",studentAnswer.correct);
				} 
				else if (question.questionType == 1){
					data.setValue("isCorrect",studentAnswer.correct);
					var answerCode = studentAnswer.answer;
					var options = "";
					var optionsObj = question.options;
					for (var j = 0; j<optionsObj.length; j++){
						var optionObj = optionsObj[j];
						if (optionObj.correct) {
							data.setValue("correctAnswer",j);
						}
						if (answerCode == optionObj.optionId){
							data.setValue("studentAnswer",j);
						}
						options =  options + optionConstant[j]+ "、" + optionObj.content + "<br/>";
					}
					data.setValue("options",options);
				}
			}
			else {
				data.setValue("isCorrect",false);
				if (question.questionType == 3){
					data.setValue("options", "A、正确 &nbsp&nbsp&nbspB、不正确");
					if (question.judgeCorrect){
						data.setValue("correctAnswer",0);
					}
					else {
						data.setValue("correctAnswer",1);
					}
				} 
				else if (question.questionType == 1){
					var options = "";
					var optionsObj = question.options;
					for (var j = 0; j<optionsObj.length; j++){
						var optionObj = optionsObj[j];
						if (optionObj.correct) {
							data.setValue("correctAnswer",j);
						}
						options =  options + optionConstant[j]+ "、" + optionObj.content+ "<br/>";
					}
					data.setValue("options",options);
				}
			}	
		}
		isfinishLoad = true;
		
		if (true){
			var lis = this.getElementsByXid("li2");
			for (var z=0; z<data.count(); z++){
				var isCorrect = data.getValueByID("isCorrect", z);
				if (!isCorrect){
					$(lis[z]).removeClass("listInnerClass");
					$(lis[z]).addClass("_listInnerClass");
				}
			}
		}
	};
	
	Model.prototype.calAnswer = function(cAs,sAs){
		var cSt = optionConstant[cAs];
		var sSt;
		if (sAs){
			sSt = optionConstant[sAs];
		} 
		else {
			var sSt = "无";
		}
		return "正确答案:"+cSt+"&nbsp&nbsp&nbsp"+"考生答案:"+sSt;
	}
	
	Model.prototype.paperDataAfterRefresh = function(event){
		
	};
	
	Model.prototype.button1Click = function(event){
		this.comp("windowReceiver2").windowCancel();
		$(this.getElementByXid("div4")).show();
		this.comp("paperData").clear();
	};
	
	Model.prototype.button2Click = function(event){
		$(this.getElementByXid("div4")).show();
	};
	
	Model.prototype.button3Click = function(event){
		$(this.getElementByXid("div4")).hide()
	};
	
	return Model;
});