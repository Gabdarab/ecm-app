var pushvariable=1;

//post user information on server upon registration
var apiPostReg = 'http://127.0.0.1:8000/postregistration';


//post location on server
var apiPostLocation = 'http://127.0.0.1:8000/postlocation';
var dataPostLocation = {
	"person":[
		{
			"vorname":"Peter",
			"nachname":"Klein",
			"longitude":"44.811805",
			"latitude":"-93.176352"//,
		//	"time":""
		},
		{
			"vorname":"Anne",
			"nachname":"Weiss",
			"longitude":"44.750453",
			"latitude":"-93.204766"//,
		//	"time":""
		},
		{
			"vorname":"Thomas",
			"nachname":"Gross",
			"longitude":"44.788673",
			"latitude":"-93.205671"//,
		//	"time":""
		},
		{
			"vorname":"Petra",
			"nachname":"Schwarz",
			"longitude":"44.736285",
			"latitude":"-93.207487"//,
		//	"time":""
		}
		
	]
};

//get contacts location from server
var apiGetContacts = 'http://127.0.0.1:8000/getcontacts';
var dataGetContacts = {
		api : "no use atm..."
	};

var apiGetUser = 'http://127.0.0.1:8000/getregistered';
var dataGetUser = {
		uuid : "N/A"
	};

//Standort Mathäser (richtigen Koordinaten müssen noch ermittelt werden!)
var malat=44.723595;
var malon=-93.176812;