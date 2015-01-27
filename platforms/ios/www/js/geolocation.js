 
function setlocation(){
	navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError,{enableHighAccuracy:true, timeout: 90000, maximumAge:0});
};

function geolocationSuccess(position) {
 	var user = JSON.parse(localStorage.getItem("user"));
 	//add uuid, e-mail, name to location JSON for identification
 	var currentLocation = {
 		//'uuid' : user.uuid,
 		'latitude' : position.coords.latitude,
        'longitude' : position.coords.longitude,
        'accuracy' : position.coords.accuracy,
        'timestamp' : position.timestamp 
    };
    postRequest(apiPostLocation, currentLocation, geolocationCallback); 

    alert('latitude :' + position.coords.latitude + "\n" +
        'longitude :' + position.coords.longitude + "\n" +
        'accuracy :' + position.coords.accuracy + "\n" +
        'timestamp :' + position.timestamp )
};


function geolocationError(error) {
	//on error call setlocation function again later, e.g. 10 minutes later 3 times and then give up
    var message="geolocationError"
    console.log('code: '    + error.code    + '\n' +
                'message: ' + error.message + '\n');
    return message;
};

function geolocationCallback(jqXHR, data){
	if(jqXHR===200){

	}else{
		console.log("geolocationCallback when location post unsuccessful. \n geolocation.js:33");
	};
};