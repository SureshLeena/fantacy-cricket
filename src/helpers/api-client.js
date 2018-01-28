export function getServerCall(url, callback){
    // url = 'https://devcricketdash.appspot.com/_ah/api/profileapi/v1/userProfile/getUserProfile?gmailId=suresh.apple.dev@gmail.com';
    fetch(url)
    .then((response) => {
        // alert("JSON : "+JSON.stringify(response));
        return response.json();
        throw new TypeError("Oops, we haven't got JSON!");
      })
    .then((responseJson) => {
        callback(false, responseJson);
    
    })
    .catch((error) => {
        // console.error("ERROR :" +error);
        callback(true, error);
    });
  
}

export function postServerCall(url, postBody, callback){
    console.log("REQUEST URL : "+url);
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(postBody)
    })
    .then((response) => {
        return response.json();
        throw new TypeError("Oops, we haven't got JSON!");
      })
    .then((responseJson) => {
        callback(false, responseJson);
    })
    .catch((error) => {
        console.error("ERROR :" +error);
        callback(true, error);
    });
}