
function getRequest(apiUrl, passData, callbackF){
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
			console.log("GET_textstatus: " + _textstatus);
			console.log("GET_success_jqXHR: " + _jqXHR.status);
			callbackF(_jqXHR.status, _data);
		},

		error: function(_jqXHR, _textstatus, _err) {
			console.log("GET_error_jqXHR: " + _jqXHR.status);
			console.log("GET_textstatus: " + _textstatus);
			console.log("GET_error_err: " + _err);
			callbackF(_jqXHR.status, _data);
			//handle connection errors here
		}
	});
}

function postRequest(apiUrl, passData, callbackF){
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
        	callbackF(_jqXHR.status,passData);
        	console.log("POST_data: " + _data.message);
			console.log("POST_textstatus: " + _textstatus);
			console.log("POST_jqXHR: " + _jqXHR.status);
        },
        error: function(_jqXHR, _textstatus, _err){
        	callbackF(_jqXHR.status,passData);
        	console.log("POST_jqXHR: " + _jqXHR.status);
			console.log("POST_textstatus: " + _textstatus);
			console.log("POST_error_err: " + _err);
			//handle connection errors here
        }
    });
}