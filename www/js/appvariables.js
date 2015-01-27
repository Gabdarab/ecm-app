var pushvariable=1;

//Standort Mathäser (richtigen Koordinaten müssen noch ermittelt werden!)
var malat=44.723595;
var malon=-93.176812;

var clock = new Date();

//post user information on server upon registration
var apiPostReg = 'http://127.0.0.1:8000/postregistration';


//post location on server
var apiPostLocation = 'http://127.0.0.1:8000/postlocation';


//get contacts location from server
var apiGetContacts = 'http://127.0.0.1:8000/getcontacts';
var dataGetContacts = {
		api : "N/A"
	};

var apiGetUser = 'http://127.0.0.1:8000/getregistered';
var dataGetUser = {
		uuid : "N/A"
	};