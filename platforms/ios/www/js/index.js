//push notification simulieren
var pushvariable=1;



document.addEventListener("deviceready", onDeviceReady(), false);

function onDeviceReady(){
	localStorage.removeItem("user");
	console.log(checkReg());
	//addList();
	afterPush(pushvariable);
    homescreen(checkReg());

	//submit registration button
	$( "#submitreg" ).bind( "click",function(){
		if ($("#textinput-vorname").val().length===0 | $("#textinput-nachname").val().length===0 | $("#textinput-regcode").val().length===0){
			alert("Bitte überprüfen Sie Ihre Eingabe!");
		}else{
			if (confirm("Haben Sie ihren richtigen Namen angegeben? \nIst der"+ 
			"angegebene Registrierungscode identisch mit dem in ihrer E-Mail?")===true){
				var regUserReturn=regUser();
				//registrierungsansicht nach reg. anpassen
				if(regUserReturn==="success"){
					var reguser=JSON.parse(localStorage.getItem("user"));
					afterReg(reguser);
				}else if(_regReturn==="notsuccess"){
					alert("Registration fehlgeschlagen. Bitte wiederholen Sie die Registrierung zu einem späteren Zeitpunkt.");
				}else{
					alert("Unbekannter fehler bei der Registrierung.");
				};
			}else{
				//Eingabe löschen???
			};
		}; 
	});

	//function that checks registration success + alert
	//function needs  to additionally send HTTP PUT request to server with registration data
	//server needs to send back confirmation that registration worked, only then may JSON be saved in localstorage
	function regUser(){
		regsuccess="success"
		regnotsuccess="notsuccess"
		//JSON speichern
		var user={
		"vorname":$("#textinput-vorname").val(),
		"nachname":$("#textinput-nachname").val(),
		"regcode":$("#textinput-regcode").val(),
		//"deviceuuid":device.uuid,
		//"devicemodel":device.model, 
		//"deviceplatform":device.platform, 
		//"deviceversion":device.version 
		};
		//localStorage.setItem("registered",JSON.stringify(true));
		localStorage.setItem("user",JSON.stringify(user));
		return regsuccess
	};

	//UI nach Registrierung anpasen, nur wenn Registrierung gelungen ist!
	//function stays as is, not affected by web service
	function afterReg(_regReturn){
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
	};

	function regView(_regReturn){
			$.mobile.navigate("#page-referral");
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
	};


	function afterPush(_pushvariable){
		if(_pushvariable===1){
			$("#coupon-text").text("Beschreibung Angebot Mathäser.");
			$("#contact-overview").attr("style","");
		};
	};

	function checkReg(){
		var registereduser=JSON.parse(localStorage.getItem("user"));
		return registereduser;
	};

	function homescreen(_registereduser){
		if(_registereduser!=null){
			regView(_registereduser);
		}else{};
	};
};

/*
if(isregistered){
			var registereduser=JSON.parse(localStorage.getItem("user").vorname);
		};
*/