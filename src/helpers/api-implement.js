export const APIGET=(url)=>{
    // 'https://facebook.github.io/react-native/movies.json'
    return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
}

export const APIPOST=(url,data)=>{
    fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: data, 
    }).then((response) => response.json())
    .then((responseJson) => {
        // alert(responseJson);
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
}