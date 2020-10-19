document.getElementById("download_link_id").onclick = function() {
	//alert('The client has not been released yet.');
	
	download_url = "https://www.dropbox.com/s/ixyo2l5bodc5bwg/placeholder.txt?dl=0";
	window.open(
		download_url, "Azure Client Download", "height=400, width=600, modal=yes, alwaysRaised=yes"
	);
};
document.getElementById("suggestion_link_id").onclick = function() {
	var suggestion = window.prompt("What would you like to suggest?");
	if (suggestion != '') {
		//Dvez doesn't want people thinking it's an IP logger
    	//alert('Suggestion submited. Your IP has been logged. This is to prevent suggestion spam.');
    	//ok
		alert('Suggestion submited. Your device ID has been logged. This is only to prevent potential spam. In the event of a spammer, they will be blocked from using Glacier Client');
		var deviceID = MediaDeviceInfo.deviceId;
		if (!deviceID) {
			console.log("Device ID not supported");
		}
		else {
			console.log(deviceID);
			console.log(suggestion);
		};
	}; 
};







