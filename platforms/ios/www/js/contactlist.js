//Standort Mathäser (richtigen Koordinaten müssen noch ermittelt werden!)
var malat=44.723595;
var malon=-93.176812;

function addList(contacts){
	//testarray beinhaltet position und distanz der personen
	var testarray=[];
	for(item in contacts.person){
		testarray[item]={position:item,distance:getDistanceInKm(malat,malon,contacts.person[item].longitude,contacts.person[item].latitude)};
	};
	//sortedarray ist nach der distanz der personen sortoiert udn enhält die ursprüngliche position der personen im übermitteltem JSON
	var sortedarray=_.sortBy(testarray,'distance');
	//die position der personen im JSON wird aus sortedarray ausgelesen. die personen werden mit aufsteigender distanz in die liste eingetragen
	for(item in sortedarray){
		var wholename=contacts.person[sortedarray[item].position].vorname+" "+contacts.person[sortedarray[item].position].nachname;
		var HTMLlistitem='<li id="%id%"><h1 class="ui-gmap-marker-title wrap" style="text-align:left">%name%</h1><div class="ui-li-count"><span>%distance% km</span></div></li>';
		var HTMLformattedlistitem=HTMLlistitem.replace("%id%","entry"+sortedarray[item].position).replace("%name%",wholename).replace("%distance%",Math.round(sortedarray[item].distance*10)/10);
		$("#contactlist").append(HTMLformattedlistitem);
	};
};

function getDistanceInKm(lat1,lon1,lat2,lon2){
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

function deg2rad(deg){
	return deg * (Math.PI/180)
};
