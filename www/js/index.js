
//ecmApp();

//function ecmApp(){
document.addEventListener("deviceready", onDeviceReady(), false);
//};

function onDeviceReady(){
	




	//localStorage.removeItem("user");
	//console.log(JSON.parse(localStorage.getItem("user")).vorname);


	//submit registration button
	$( "#submitreg" ).bind( "click",function(){
		if ($("#textinput-vorname").val().length===0 | $("#textinput-nachname").val().length===0 | $("#textinput-regcode").val().length===0){
			alert("Bitte überprüfen Sie Ihre Eingabe!");
		}else{
			if (confirm("Haben Sie ihren richtigen Namen angegeben? \nIst der"+ 
			"angegebene Registrierungscode identisch mit dem in ihrer E-Mail?")===true){
				var regUserReturn=regUser();
				afterReg(regUserReturn);
			}else{
				//Eingabe löschen???
			};
		}; 
	});

	//function that checks registration success + alert. Change success variables to HTTP responses
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
		var restoredUser=JSON.parse(localStorage.getItem("user"));
		//alert("restored:"+restoredUser.deviceuuid, \n restoredUser.deivemodel, \n restoredUser.deviceplatfrom, \n restoredUser.deviceversion);
		return regsuccess
	};

	//UI nach Registrierung anpasen, nur wenn Registrierung gelungen ist!
	function afterReg(_regReturn){
		//Change success variables to HTTP responses
		if(_regReturn==="success"){
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
		}else if(_regReturn==="notsuccess"){
			alert("Registration fehlgeschlagen. Bitte wiederholen Sie die Registrierung zu einem späteren Zeitpunkt.");
		}else{
			alert("Unbekannter fehler bei der Registrierung.");
		}
	};
};


//var restoredUser=JSON.parse(localStorage.getItem("user"));
//	console.log("two:"+restoredUser.vorname);



/* OK! 27.12.2014. determining location
onLoad();

function onLoad(){
	document.addEventListener("deviceready", onDeviceReady(), false);
};

function onDeviceReady(){
	navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError,{enableHighAccuracy:false, timeout: 10000, maximumAge:0});
};

function geolocationSuccess(position) {
    alert('Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          //'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Timestamp: '         + new Date(position.timestamp).getFullYear()                + '\n');
};


function geolocationError(error) {
    //alert('code: '    + error.code    + '\n' +
    //      'message: ' + error.message + '\n');
    alert('Error getting location.');
};
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
//localStorage.removeItem("localappview");

homeview(checkappview());

function homeview(_view){
	if (_view===null){
		$("#home-body").html(HTMLregview);
	} else if ((_view===1)){
		$("#home-body").html(HTMLsecondview);
	} else if ((_view===2)){
		$("#home-body").html(HTMLcouponview);
	} 
};

};

//storing ifregistered variable. Now stored on device with localstorage. 
//Maybe change to storage on server to avoid problems such as multiple registrations.
//check UUID everytime app is opened.
function storeregistered(){
	var datatostore=JSON.stringify(1);
	localStorage.setItem('localappview',datatostore)
};

//determine appview from variable in localstorage. Possibly server-side storage if variable is better for persistence
function checkappview(){
	var appview = JSON.parse(localStorage.getItem('localappview'));
	return appview;
};

*/


