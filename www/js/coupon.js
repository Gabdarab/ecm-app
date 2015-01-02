/*
var listitem="<li data-theme='a'>%data%</li>"

function displayContact(){
	for (item in work.jobs){
	
		$("#workExperience").append(HTMLworkStart)

		var formattedEmployerTitle;
		formattedEmployerTitle=HTMLworkEmployer.replace("%data%",work.jobs[item].employer)+HTMLworkTitle.replace("%data%",work.jobs[item].position);
		$(".work-entry:last").append(formattedEmployerTitle);
	};
};

displayContact();


//Standort Mathäser (nur Beispiel Koordinaten  nicht richtig)
var malat1=44.723595;
var malon1=-93.176812;
*/
/*
var contacts={
	"person":[
		{
			"vorname":"Peter",
			"nachname":"Klein",
			"longitude":"44.811805",
			"latitude":"-93.176352",
			"time":
		},
		{
			"vorname":"Thomas",
			"nachname":"Gross",
			"longitude":"44.788673",
			"latitude":"-93.205671",
			"time":
		},{
			"vorname":"Anne",
			"nachname":"Weiss",
			"longitude":"44.750453",
			"latitude":"-93.204766",
			"time":
		},{
			"vorname":"Petra",
			"nachname":"Schwarz",
			"longitude":"44.736285",
			"latitude":"-93.207487",
			"time":
		};
	]
};
*/

function getDistanceInKm(lat1,lon1,lat2,lon2) {
	var R = 6371; // Radius of the earth in km
	var dLat = deg2rad(lat2-lat1);  // deg2rad below
	var dLon = deg2rad(lon2-lon1); 
	var a = 
	  Math.sin(dLat/2) * Math.sin(dLat/2) +
	  Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
	  Math.sin(dLon/2) * Math.sin(dLon/2); 
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	var d = R * c; // Distance in km
	return d;
};

function deg2rad(deg) {
	return deg * (Math.PI/180)
};