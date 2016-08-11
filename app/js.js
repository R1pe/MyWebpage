var language = $("html").attr("lang");

function hideSelectedLanguage(){

	console.log(language)
	var button = (document).getElementById("eng");

	var flag;
	
	if (language == ("en")) {
		var flag = $("#eng");
	}
	else if (language == "fi"){
		var flag = $("#fin");
	} 
	else if (language == "sv") {
		var flag = $("#swe");
		
	}
	console.log("piilotetaan kieli: " + flag);
	console.log("button: " + button);
	/* flag.hide(); */
	/* flag.attr("disapled", true); */
	button.disable = true;
};
