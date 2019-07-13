let testData = "https://serpapi.com/search?q=Coffee&location=Austin%2C+Texas%2C+United+States&hl=en&gl=us&google_domain=google.com&api_key=70bee092e3de91f193be024f57f4b84e671770f4a6d3daf2e86cfb18a820949e";
let request = new XMLHttpRequest();

request.open('GET', testData);
request.responseType = "json";
request.send();
request.onload = function (){
    let beverage = request.response; //contains the JSON object
    displayData(beverage);
}

function displayData(jsonObj){
    console.log(jsonObj["pagination"] + jsonObj["next"]); 
}