//how to differentiate referees von referers???
//refresh contact list from within app, do not let user control refresh
//add "seen" function that tracks what information the user has seen
//after time of push try to automatically register location every 15 Minutes even if app is in background
//send push notifications to users every 30 minutes if any contacts are in the vicinity of Mathäser

document.addEventListener("deviceready", onDeviceReady(), false);

function onDeviceReady(){
	localStorage.removeItem("user");
	//homescreen();
	//afterPush(pushvariable);
	setlocation();
	
	///////////////////////////////////////////////////// POST location every time app is opened
	document.addEventListener("resume", onResume, false);
	function onResume() {
   		setTimeout( function() {
   			//??? posts same location as last time???
          setlocation();
          // nach push jedes mal wenn app geöffnet wird addList rufen 
        }, 0);
	}
	

	///////////////////////////////////////////////////////////register new user
	//submit registration button
	$( "#submitreg" ).bind( "click",function(){
		if ($("#textinput-vorname").val().length===0 | $("#textinput-nachname").val().length===0 | 
			$("#textinput-regcode").val().length===0){
				alert("Bitte überprüfen Sie Ihre Eingabe!");
		}else{
			if (confirm("Haben Sie ihren richtigen Namen angegeben? Ist der "+ 
			"angegebene Registrierungscode identisch mit dem in ihrer E-Mail?")===true){
				var user={
					"vorname":$("#textinput-vorname").val(),
					"nachname":$("#textinput-nachname").val(),
					"regcode":$("#textinput-regcode").val(),
					//"deviceuuid":device.uuid,
					//"devicemodel":device.model, 
					//"deviceplatform":device.platform, 
					//"deviceversion":device.version 
					};
				// post user details to server
				postRequest(apiPostReg,user,afterReg);
			};
		}; 
	});

	//Anmeldungssicht anpassen nach erfolgreicher Anmeldung
	function afterReg(_status, _regReturn){
		if(_status === 201){
			localStorage.setItem("user",JSON.stringify(_regReturn));
			$.mobile.changePage( "#page-referral", { transition: "slide", changeHash: false });
			$("#textinput-vorname").attr("placeholder",_regReturn.vorname);
			$("#textinput-vorname").attr("disabled","disabled");
			$("#textinput-nachname").attr("placeholder",_regReturn.nachname);
			$("#textinput-nachname").attr("disabled","disabled");
			$("#textinput-regcode").attr("placeholder",_regReturn.regcode);
			$("#textinput-regcode").attr("disabled","disabled");
			$("#submitreg").attr("disabled","disabled");
			$(".ui-disabled").removeClass("ui-disabled");
			$("#page-reg").find("p").text("Erklärung zur App: Sie haben sich mit den" + 
				" unten angezeigten Daten bereits registriert. Eine zweite Registrierung" + 
				"ist nicht möglich. Für weitere Informationen clicken Sie bitte auf 'INFO'.");
			setlocation();
		}else{
			alert("Anmeldung fehlgeschlagen. Bitte überprüfen Sie Ihre Internetverbindung" + 
				"und versuchen Sie die Anmeldung zu einem späteren Zeitpunkt nochmal.")
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
	function regView(_regReturn){
				$.mobile.navigate("#page-referral");
				localStorage.setItem("user",JSON.stringify(_regReturn));
				$("#textinput-vorname").attr("placeholder",_regReturn.vorname);
				$("#textinput-vorname").attr("disabled","disabled");
				$("#textinput-nachname").attr("placeholder",_regReturn.nachname);
				$("#textinput-nachname").attr("disabled","disabled");
				$("#textinput-regcode").attr("placeholder",_regReturn.regcode);
				$("#textinput-regcode").attr("disabled","disabled");
				$(".ui-disabled").removeClass("ui-disabled");
				$("#submitreg").attr("disabled","disabled");
				$("#page-reg").find("p").text("Erklärung zur App: Sie haben sich mit den" + 
					" unten angezeigten Daten bereits registriert. Eine zweite Registrierung" + 
					"ist nicht möglich. Für weitere Informationen clicken Sie bitte auf 'INFO'.");
				setlocation();
	};

	///////////////////////////////////////////////////// simulate push notification
	function afterPush(_pushvariable){
		if(_pushvariable===1){
			getRequest(apiGetContacts, dataGetContacts, addList);
			$("#coupon-text").text("Beschreibung Angebot Mathäser.");
			$("#contact-overview").attr("style","");
		};
	};

};
