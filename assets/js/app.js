            


    
    // Setup an event listener to make an API call once auth is complete
    function onLinkedInLoad() {
        IN.Event.on(IN, "auth", getProfileData);
        IN.User.authorize(callbackFunction, callbackScope);
        IN.API.Raw( https:'//api.linkedin.com/v1/people/~?format=json' ).method(methodType).body("<p id=\""+namber.id+"\">hello"+namber.firstName+"</p>").result(resultCallback);
    }


   /* function onLinkedInLoad(){
        IN.API.Profile("me"),result(displayProfiles);
    }
    */
    // Handle the successful return from the API call
    function onSuccess(data) {
        console.log(data);
    }

    // Handle an error response from the API call
    function onError(error) {
        console.log(error);
    }

    // Use the API call wrapper to request the member's basic profile data
    function getProfileData() {
        IN.API.Raw("/people/~").result(onSuccess).error(onError);
    }


/* function displayProfiles(profiles){
        namber = profiles.values[0];
        document.getElementById("profiles").innerHTML= "<p id=\""+namber.id+"\">hello"+namber.firstName+"</p>";

    }
    */