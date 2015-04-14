var pushvariable=1;

var malat=48.13913;
var malon=11.56379;

//post user information on server upon registration
var apiPostReg = 'http://141.84.44.89:86/postregistration';


//post location on server
var apiPostLocation = 'http://141.84.44.89:86/postlocation';


//get contacts location from server
var apiGetContacts = 'http://141.84.44.89:86/getcontacts';
var dataGetContacts = {
		regcode : JSON.parse(localStorage.getItem("user")).regcode
	};

var apiGetUser = 'http://141.84.44.89:86/getregistered';
var dataGetUser = {
		uuid : JSON.parse(localStorage.getItem("user")).uuid
	};

var apiPostSeenContacts = 'http://141.84.44.89:86/postseencontacts';

var contactsAreDislpayed = false;
var contactsBeingViewed = false;