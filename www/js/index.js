//push notification simulieren
var pushvariable=1;


document.addEventListener("deviceready", onDeviceReady(), false);

function onDeviceReady(){
	addList();
	afterPush(pushvariable);


	//localStorage.removeItem("user");
	//var restoredUser=JSON.parse(localStorage.getItem("user"));
	if(JSON.parse(localStorage.getItem("user")).vorname===null){
		console.log("no local storage.");
	}else{
		console.log(JSON.parse(localStorage.getItem("user")).vorname);
	};


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
					afterReg();
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
		localStorage.setItem("user",JSON.stringify(user));
		return regsuccess
	};

	//UI nach Registrierung anpasen, nur wenn Registrierung gelungen ist!
	//function stays as is, not affected by web service
	function afterReg(_regReturn){
			$.mobile.changePage( "#page-referral", { transition: "slide", changeHash: false });
			$("#textinput-vorname").attr("placeholder",$("#textinput-vorname").val());
			$("#textinput-vorname").attr("disabled","disabled");
			$("#textinput-nachname").attr("placeholder",$("#textinput-nachname").val());
			$("#textinput-nachname").attr("disabled","disabled");
			$("#textinput-regcode").attr("placeholder",$("#textinput-regcode").val());
			$("#textinput-regcode").attr("disabled","disabled");
			$("#submitreg").button("disable");
			$("#submitreg").button("refresh");
			$(".ui-disabled").removeClass("ui-disabled");
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
};
