
document.addEventListener("deviceready", onDeviceReady(), false);

function onDeviceReady(){
	localStorage.removeItem("user");
	homescreen();
	
	/*
	document.addEventListener("resume", onResume, false);
	function onResume() {
   		setTimeout( function() {
   			//??? posts same location as last time???
          setlocation();
          afterPush(); 
        }, 0);
	}
	*/

	///////////////////////////////////////////////////////////register new user
	//submit registration button
	$( "#btn-submitreg" ).bind( "click",function(){
		if ($("#textinput-vorname").val().length===0 | $("#textinput-nachname").val().length===0 | 
			$("#textinput-regcode").val().length===0){
				alert("Bitte überprüfen Sie Ihre Eingabe!");
		}else{
			if (confirm("Haben Sie ihren richtigen Namen angegeben? Ist der "+ 
			"angegebene Registrierungscode identisch mit dem in ihrer E-Mail?")===true){
				var clock = new Date();
				var user={
					//"deviceuuid":device.uuid,
					"vorname":$("#textinput-vorname").val(),
					"nachname":$("#textinput-nachname").val(),
					"regcode":$("#textinput-regcode").val(),
					//"devicemodel":device.model, 
					//"deviceplatform":device.platform, 
					//"deviceversion":device.version,
					"timestamp" : clock.getTime() 
					};
				// post user details to server
				postRequest(apiPostReg,user,afterReg);
			};
		}; 
	});

	$( "#btn-login" ).bind( "click",function(){
		homescreen();
	});

	$("#btn-angebote-0").bind("click", function(){
		contactsBeingViewed = true;

		if (contactsAreDislpayed){
			seenContacts();
		}

	});

	$("#btn-angebote-1").bind("click", function(){
		contactsBeingViewed = true;

		if (contactsAreDislpayed){
			seenContacts();
		}
		
	});

	$("#btn-regpage").bind("click", function(){
		contactsBeingViewed = false;
	});

	$("#btn-refpage").bind("click", function(){
		contactsBeingViewed = false;
	});


	//Anmeldungssicht anpassen nach erfolgreicher Anmeldung
	function afterReg(_status, _regReturn){
		if(_status === 201){

			afterPush(pushvariable);

			localStorage.setItem("user",JSON.stringify(_regReturn));
			$.mobile.changePage( "#page-referral", { transition: "slide", changeHash: false });
			$("#textinput-vorname").attr("placeholder",_regReturn.vorname);
			$("#textinput-vorname").attr("disabled","disabled");
			$("#textinput-nachname").attr("placeholder",_regReturn.nachname);
			$("#textinput-nachname").attr("disabled","disabled");
			$("#textinput-regcode").attr("placeholder",_regReturn.regcode);
			$("#textinput-regcode").attr("disabled","disabled");
			$("#reglink").attr("style","display:none;");
			$("#btn-submitreg").attr("disabled","disabled");
			$("#btn-login").attr("disabled","disabled");
			$(".ui-disabled").removeClass("ui-disabled");
			$("#app-text").text("Erklärung zur App: Sie haben sich mit den" + 
				" unten angezeigten Daten bereits registriert. Eine zweite Registrierung" + 
				"ist nicht möglich. Für weitere Informationen clicken Sie bitte auf 'INFO'.");
			setlocation();
		}else{
			alert("Anmeldung fehlgeschlagen. Bitte überprüfen Sie Ihre Internetverbindung " + 
				"und versuchen Sie die Anmeldung nochmal.")
		};
	};


	////////////////////////////////////////////////////// check if user is registered upon opening app
	function homescreen(){
		var registereduser=JSON.parse(localStorage.getItem("user"));
		if(registereduser!=null){
			regView(registereduser);
		}else{
			//pass uuid to server in order to query SQL database
			getRequest(apiGetUser,dataGetUser, regView);
		};
	};

	//function used to change registration view, if user has already been registered
	function regView(_status, _regReturn){ 
		
		if (_status === 200){
			if (_regReturn.length===0){
				//user not registered or reinstalled app or updated ios
				console.log("uuid not found.");
				
			}else{

				afterPush(pushvariable);
				
				$.mobile.navigate("#page-referral");
				localStorage.setItem("user",JSON.stringify(_regReturn[0]));
				$("#textinput-vorname").attr("placeholder",_regReturn[0].vorname);
				$("#textinput-vorname").attr("disabled","disabled");
				$("#textinput-nachname").attr("placeholder",_regReturn[0].nachname);
				$("#textinput-nachname").attr("disabled","disabled");
				$("#textinput-regcode").attr("placeholder",_regReturn[0].regcode);
				$("#textinput-regcode").attr("disabled","disabled");
				$(".ui-disabled").removeClass("ui-disabled");
				$("#reglink").attr("style","display:none;");
				$("#btn-submitreg").attr("disabled","disabled");
				$("#btn-login").attr("disabled","disabled");
				$("#app-text").text("Erklärung zur App: Sie haben sich mit den" + 
					" unten angezeigten Daten bereits registriert. Eine zweite Registrierung" + 
					"ist nicht möglich. Für weitere Informationen clicken Sie bitte auf 'INFO'.");
				setlocation();

			};
		}else{
			//decide how to handle 500 and 503 errors
		};
	};

	///////////////////////////////////////////////////// simulate push notification
	function afterPush(_pushvariable){
		if(_pushvariable===1){
			getRequest(apiGetContacts, dataGetContacts, addList);
		};
	};

};



