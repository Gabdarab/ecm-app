//OK! 27.12.2014. determining location
//für app 'alert' ersetzen durch HTTP PUT request an server  
function setlocation(){
	navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError,{enableHighAccuracy:false, timeout: 90000, maximumAge:0});
};

function geolocationSuccess(position) {
    alert('Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Timestamp: '         + new Date(position.timestamp)                + '\n');
};


function geolocationError(error) {
    var message="geolocationError"
    console.log('code: '    + error.code    + '\n' +
                'message: ' + error.message + '\n');
    return message;
};
