function displayFridgeLocations (){
    var tag = document.createElement("p");
    var text = document.createTextNode("Fridge 3");
    tag.appendChild(text);
    var element = document.getElementById("fridges");
    element.appendChild(tag);
    var divTag = document.createElement("div");
    var text2 = document.createTextNode("Fridge1");
    divTag.appendChild(text2);
    element.appendChild(divTag);
    

}