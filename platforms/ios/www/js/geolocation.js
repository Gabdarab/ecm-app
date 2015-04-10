 
function setlocation(){
	navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError,{enableHighAccuracy:true, timeout: 90000, maximumAge:0});
};

function geolocationSuccess(position) {
 	var user = JSON.parse(localStorage.getItem("user"));
    var date = new Date()
 	//add uuid for smartphones 
 	var currentLocation = {
 		//'uuid' : user.uuid,
 		'latitude' : position.coords.latitude,
        'longitude' : position.coords.longitude,
        'accuracy' : position.coords.accuracy,
        'timestamp' : date.getTime()
    };
    postRequest(apiPostLocation, currentLocation, geolocationCallback);     
};


function geolocationError(error) {
	//on error call setlocation function again later, e.g. 10 minutes later 3 times and then give up
    //var message="geolocationError"
    console.log('geolocationError code: '    + error.code    + '\n' +
                'geolocationError message: ' + error.message + '\n');
    //return message;
};

function geolocationCallback(jqXHR, data){
	if(jqXHR===201){

	}else{
		console.log("jqXHR: "+ jqXHR);
        console.log("data: "+ data);
	};
};