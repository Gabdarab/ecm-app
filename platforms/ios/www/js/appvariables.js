var pushvariable=1;

//Standort Mathäser (richtigen Koordinaten müssen noch ermittelt werden!)
var malat=48.13913;
var malon=11.56379;

//post user information on server upon registration
var apiPostReg = 'http://127.0.0.1:8000/postregistration';


//post location on server
var apiPostLocation = 'http://127.0.0.1:8000/postlocation';


//get contacts location from server
var apiGetContacts = 'http://127.0.0.1:8000/getcontacts';
var dataGetContacts = {
		regcode : "codeSQL" //JSON.parse(localStorage.getItem("user")).regcode
	};

var apiGetUser = 'http://127.0.0.1:8000/getregistered';
var dataGetUser = {
		uuid : "uuidTEST" //JSON.parse(localStorage.getItem("user")).uuid
	};

var apiPostSeenContacts = 'http://127.0.0.1:8000/postseencontacts';

var contactsAreDislpayed = false;
var contactsBeingViewed = false;