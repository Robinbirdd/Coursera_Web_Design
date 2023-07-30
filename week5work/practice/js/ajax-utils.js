(function (global) {
    //Set up a namespace for our utility
    var ajaxUtils = {};

    function getRequestObject() {
        if(window.XMLHttpRequest) {
            return (new XMLHttpRequest());
        }
        else {
            global.alert("Ajax is not supported");
            return(null);
        }
    }



    ajaxUtils.sendGetRequest = 
    function(requestUrl, responseHandler, isJdonResponse) {

        var request = getRequestObject();
        request.onreadystatechange = 
            function() {
                handleResponse(request, responseHandler, isJdonResponse);
            };
        request.open("GET", requestUrl, true);
        request.send(null); //for POST only;
    }

    function handleResponse(request, responseHandler, isJdonResponse) {
        if((request.readyState == 4) && (request.status == 200)) {
            if(isJdonResponse == undefined) {
                isJdonResponse = true;
            }
            if(isJdonResponse) {
                responseHandler(JSON.parse(request.responseText));
            }
            else {
                responseHandler(request.responseText);
            }
        }
    }

    global.$ajaxUtils = ajaxUtils;

})(window);