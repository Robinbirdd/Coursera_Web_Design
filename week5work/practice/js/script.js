document.addEventListener("DOMContentLoaded", 
    function(event) {
        document.querySelector("button")
            .addEventListener("click", function () {

                $ajaxUtils
                    .sendGetRequest("data/name.json", 
                        function(res) {
                            var message = res.firstName + " " + res.lastName
                            document.querySelector("#content")
                                    .innerHTML = "<h2>Hello " + message + "!</h2>";
                        });
            });
    }
);