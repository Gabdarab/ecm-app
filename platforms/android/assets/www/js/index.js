
function onLoad(){
	document.addEventListener("deviceready", onDeviceReady(), false);
};

function onDeviceReady(){
	navigator.geolocation.getCurrentPosition(geolocationSuccess,geolocationError,{enableHighAccuracy:false, timeout: 10000, maximumAge:0});
};

function geolocationSuccess(position) {
    alert('Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          //'Altitude: '          + position.coords.altitude          + '\n' +
          //'Accuracy: '          + position.coords.accuracy          + '\n' +
          //'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          //'Heading: '           + position.coords.heading           + '\n' +
          //'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '\n');
};


function geolocationError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
    //alert('Error getting location.');
};

/*

localStorage.removeItem("localappview");

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

//take input name and registration code & after registration switch homeview to referral page
function submitreg(){
	if (confirm("Haben Sie ihren richtigen Namen angegeben? \nIst der angegebene Registrierungscode identisch mit dem in ihrer E-Mail?")===true){
		var regx = document.getElementsByName("reg")[0].value;
		var regy = document.getElementsByName("reg")[1].value;
		var regz = document.getElementsByName("reg")[2].value;
		console.log(regx+" "+regy+" "+regz);
		storeregistered();
		homeview(checkappview());
	}else{
		//Eingabe löschen???
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






































/*
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();
*/