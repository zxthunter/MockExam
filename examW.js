define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	
	var Model = function(){
		this.callParent();
	};

	Model.prototype.buttonPrev = function(event){
		this.comp("questionData").pre();
		this.comp("contents1").prev();
	};


	Model.prototype.buttonNext = function(event){
		this.comp("questionData").next();
		this.comp("contents1").next();
	};
	
var isFinishedLoad = false;
var isQuestionLoad = false;
var isTimerStart = false;
var timer ;
var questions;
var majorId;

	Model.prototype.contents1ActiveChange = function(event){
		if (isQuestionLoad){
			var selectionNum = this.comp("questionData").getValue("selectionNum");
			var selectionConst = ['A','B','C','D'];
			//json数据中key用"
			var selections = this.comp("questionData").getValue("selections");
			var selectionsArr = selections.split(",");
			var nowQuetionData = this.comp("nowSelectionData");
			nowQuetionData.clear();
			for (var i=0; i<selectionNum; i++){
				nowQuetionData.newData();
				nowQuetionData.setValue("_id",i);
				nowQuetionData.setValue("selection", selectionConst[i]);
				nowQuetionData.setValue("content", selectionsArr[i]);	
			};
			nowQuetionData.newData();
			nowQuetionData.remove();
		}
		
	};
	

//上拉数据栏
	Model.prototype.button1Click = function(event){
		var panelContent = $(".x-scroll-content", event.source.parentElement);
		var buttonObj = event.source;
		if(panelContent.is(":visible")){ 
			panelContent.hide();
			buttonObj.set({"icon" :"icon-chevron-up"});
		}
		else{
			panelContent.show();
			buttonObj.set({"icon" :"icon-chevron-down"});
		}	 
		
		
	};
	


	
	

//在第一次创建数据时候加载上弹栏中的东西
	Model.prototype.refreshUnderDiv = function(self){
		self.comp("contents1").to(2);
		var Button = require("$UI/system/components/justep/button/button");
		var parentNode = this.getElementByXid("div5"); 
		var questionNum = this.comp("questionData").count();
		if (parentNode) {
			for (var i=0; i<questionNum; i++){
				var flag = {
					"xid" : "showButton"+(i+1),
					"label" : i+1,
					"parentNode" : parentNode,
					"class" : "btn btn btn-warning addButton"
						};
				var button = new Button(flag);
				var buttonFunction = function(event){
					var toQuestionNum = event.source.get("label");
					var nowQuestionNum = self.comp("questionData").getValue("_id");
					if (toQuestionNum > nowQuestionNum){
						self.comp("questionData").to(self.comp("questionData").getRowByID(toQuestionNum));
						self.comp("contents1").next();
					}
					else if (toQuestionNum < nowQuestionNum){
						self.comp("questionData").to(self.comp("questionData").getRowByID(toQuestionNum));
						self.comp("contents1").prev();
					}
				};			
				
				
				button.on("onClick", buttonFunction);
				
			}
		}
		


	//改变已经做过的题的颜色
		var data = this.comp("questionData");
		for (var i=0; i<data.count(); i++){
			var answer = data.getValueByID("answer", i+1);
			if (answer=="0" || answer){
				var button = $(this.getElementByXid("showButton"+(i+1)));
				button.removeClass("btn-warning");
				button.addClass("btn-success");
			}
		}


		isFinishedLoad = true;
	};
	

//提交答案
	Model.prototype.submitQuestion = function(event){
		if (event.col == "answer"){
			var questionIndex = event.source.getCurrentRowID() - 1;
			var questionId = event.source.getValue("questionId");
			var examId = this.comp("totalData").getValue("examId");
		
			var optionIndex = event.value;
			var questionType = event.source.getValue("questionType");
			var answer;
			if (questionType == 3){
				if (optionIndex == 0) {
					answer = "true";
				}
				else if (optionIndex == 1){
					answer = "false";
				}
			} 
			else if(questionType == 1){
				var options = questions[questionIndex].options;
				answer = options[optionIndex].optionId;
			}
			var success = function(xhr){
				console.log(xhr);
			}
			$.ajax({
				"type" : "post",
				"async" : true,
				"dataType" : "json",
				"data":{"examId":examId,
						"questionId":questionId,
						"answer":answer },
				"url" : "http://220.163.82.253:8070/mock/api/exam/question/answer.json",
				"success" : success
				}
				);
			}
		
	}
	
	

	
//quetionData变更时，改变样式


	Model.prototype.questionDataValueChanged = function(event){
		if (isFinishedLoad){
			var num = event.row.val("_id");
			var button = $(this.getElementByXid("showButton"+num));
			button.removeClass("btn-warning");
			button.addClass("btn-success");
			this.submitQuestion(event);
		}
	};

	


	Model.prototype.button2Click = function(event){
		this.comp("wing1").showLeft();
		
	};

		


//计算时间函数
	Model.prototype.calTime = function(){
		var time = this.comp("totalData").getValue("remainTime");
		var second = time % 60;
		var minute = ((time - second) % 3600)/60;
		var hour = (time -minute*60-second)/3600;
		if (hour<10) hour = "0"+hour;
		if (minute<10) minute = "0"+minute;
		if (second<10) second = "0"+second;
		return " "+hour+":"+minute+":"+second;
		
	}



//开始考试按钮
	Model.prototype.button4Click = function(event){
		var self = this;
		var data = this.comp("questionData");
		
		//回掉函数
		var success = function(xhr){
			alert('a');
			$(self.getElementByXid("button9")).hide();
			$(self.getElementByXid("button8")).show();
			console.log(xhr);
			questions= xhr.questions;
			var studentExam = xhr.studentExam;
			self.comp("totalData").setValue("examId",studentExam.examId);
//			console.log(questions);
			for (var i=0; i<questions.length; i++){
				var question = questions[i];
//				console.log(question);
				data.newData();
				data.setValue("quetion",question.content);
				data.setValue("_id",i+1);
				var questionType = question.questionType
				data.setValue("questionType",questionType);
				data.setValue("questionTypeName", question.questionTypeName);
				data.setValue("score",question.score);
				data.setValue("questionId",question.questionId);
				var studentAnswer = question.studentAnswer;
				if (studentAnswer){
					var answer = studentAnswer.answer;
					if (questionType == 3){
						if (answer == "true") {
							data.setValue("answer",0);
						} else if (answer == "false"){
							data.setValue("answer",1);
						}
					}
					else if (questionType == 1){
						var options = question.options;
						for (var z=0; z<options.length; z++){
							if (options[z].optionId == answer){
								data.setValue("answer",z);
							}
						}
					}
					
				}
//				console.log(data.getValue("answer"));
				if (questionType == 3){
					var selections = ["正确","错误"];
					data.setValue("selectionNum",2);
					data.setValue("selections",selections.toString());
				} 
				else if (questionType == 1) {
					var options = question.options;
					data.setValue("selectionNum",options.length);
					var selections = [];
					for (var j=0; j<options.length; j++){
						var option = options[j];
						selections[j] = option.content;
						data.setValue("selections",selections.toString());
					}
				}
			}
			data.first();
			isQuestionLoad = true;
			//当数据加载完成后才能开始考试	
			self.comp("contents1").remove(2);
			if (!isTimerStart){
				var startTimer = function () {
					var time = self.comp("totalData").getValue("remainTime");
					time--;
					self.comp("totalData").setValue("remainTime",time);
					timer = setTimeout(startTimer,1000);
				}
				startTimer();
				isTimerStart = true;
			}
			
			
			self.refreshUnderDiv(self);
			
		}
		
		
		var paperId = this.comp("totalData").getValue("PaperId");
		var studentId = this.comp("totalData").getValue("studentId");
		
		$.ajax({
				"type" : "post",
				"async" : true,
				"dataType" : "json",
				"data":{"studentId":studentId,
						"paperId":paperId
				},
				"url" : "http://220.163.82.253:8070/mock/api/exam/start.json",
				"success" : success
				}
				);
			
		
	};





	Model.prototype.titleDataRefresh = function(){
		var title = this.comp("totalData").getValue("title");
		var titles = title.split(" ");
		var titleData = this.comp("titleData");
		titleData.newData();
		titleData.setValue("_1",titles[0]);
		titleData.setValue("_2",titles[1]);
		titleData.setValue("_3",titles[2]);
		titleData.setValue("_4",titles[3]);
	};
	


	Model.prototype.windowReceiver1Receive = function(event){
		var self = this;
		var obj = this.comp("windowReceiver1").getReceiveData();
		this.comp("contents1").to(2);
		console.log(obj);
		majorId = obj.majorId;
		var totalData = this.comp("totalData");
		var duration = (obj.duration)*60;
		totalData.setValue("PaperId",obj.paperId);
		totalData.setValue("title",obj.title);
		var studentExam = obj.studentExam;
		if (studentExam){
			var examDate = studentExam.examDate;
			var examStatus  = studentExam.examStatus;
			var beginDate = new Date(examDate);
			var nowDate = new Date();
			var interval = justep.Date.diff(beginDate, nowDate, 's');
			totalData.setValue("remainTime",duration-interval);
			
			if (!isTimerStart){
				var startTimer = function () {
					var time = self.comp("totalData").getValue("remainTime");
					time--;
					self.comp("totalData").setValue("remainTime",time);
					timer = setTimeout(startTimer,1000);
				}
				startTimer();
				isTimerStart = true;
			}

		} 
		else {
			totalData.setValue("remainTime",duration);
		}
		
		
		///此处需要添加studentId
		
		this.titleDataRefresh();
		
		if (obj.studentExam){
			var button = self.getElementByXid("button4");
			$(button).removeClass("x-green");
			$(button).addClass("btn-default");
			var span = button.getElementsByTagName("span")[0];
			span.innerHTML = "继续考试";
			self.getElementByXid("button9").hide();
			self.getElementByXid("button8").show();
		}
	};



	




	Model.prototype.button8Click = function(event){
		
		this.comp("messageDialog1").show();
		
	};



	




	Model.prototype.messageDialog1Yes = function(event){
		var self = this;
		var examId = this.comp("totalData").getValue("examId");
		var success = function(xhr){
			self.comp("windowReceiver1").windowCancel();
		}
		$.ajax({
				"type" : "post",
				"async" : true,
				"dataType" : "json",
				"data":{"examId":examId},
				"url" : "http://220.163.82.253:8070/mock/api/exam/commit.json",
				"success" : success
				}
				);
	};



	




	Model.prototype.totalDataValueChanged = function(event){
		if (timer){
			if(this.comp("totalData").getValue("remainTime") <= 0){
				clearTimeout(timer);
				this.comp("messageDialog2").show();
			}
		}
			
		
	};




	Model.prototype.messageDialog2OK = function(event){
		this.comp("windowReceiver1").windowCancel();
	};



	




	Model.prototype.button9Click = function(event){
		this.comp("messageDialog3").show();
	};



	




	Model.prototype.messageDialog3OK = function(event){
		this.comp("windowReceiver1").windowCancel();
	};



	




	Model.prototype.button10Click = function(event){
		this.comp("wing1").hideLeft();
	};



	




	return Model;
});