
function getRequest(apiUrl, passData, successF){
	$.ajax({
		type: "GET",
		url: apiUrl,
		contentType: "application/json; charset=utf-8",
		//xhrFields: {
		//	withCredentials: false
		//	},
		//headers: {
		//	},
		data : passData,
		  
		success: function(_data, _textstatus, _jqXHR) {
			console.log("_textstatus: " + _textstatus);
			console.log("_jqXHR: " + _jqXHR.responseText);
			successF(_data);
		},

		error: function(_jqXHR, _textstatus, _err) {
			console.log("_jqXHR: " + _jqXHR.responseText);
			console.log("_textstatus: " + _textstatus);
			console.log("_err: " + _err);
		}
	});
}

function postRequest(apiUrl, passData){
    $.ajax({
        type: "POST",
        url: apiUrl,
        contentType: "text/plain", //"application/json; charset=utf-8",
        //xhrFields: {
		//	withCredentials: false
		//	},
		//headers: {
		//	},
        data: JSON.stringify(passData),
        //dataType: "json",
        success: function(_data, _textstatus, _jqXHR){
        	console.log("_data: " + _data.message);
			console.log("success _textstatus: " + _textstatus);
			console.log("success _jqXHR: " + _jqXHR.status);
        },
        error: function(_jqXHR, _textstatus, _err){
        	console.log("error _jqXHR: " + _jqXHR.status);
			console.log("error _textstatus: " + _textstatus);
			console.log("error _err: " + _err);
        }
    });
}
