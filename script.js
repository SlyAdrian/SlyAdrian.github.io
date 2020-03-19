function greet() {
    // DOM 1
    window.alert("Hello World & Everyone");
}

function init () {
    // DOM 2
    document.getElementById("first").src = "flower1.png";
}

function init2() {
    // DOM2
    /*document.getElementById("container").getElementsByTagName("img")[1].src="flower2.png";
    document.getElementById("container").getElementsByTagName("img")[3].src="flower2.png";*/
    let images = document.getElementById("container").getElementsByTagName("img");
    images[1].src="flower2.png";
    images[3].src="flower2.png";

    // DOM 3
    document.getElementById("uniqe").innerHTML = "<p>Your are great!</p>";

    // DOM 4
    let image = document.createElement("img");
    image.src="flower1.png";
    document.getElementById("new_element").appendChild(src =image);

    // DOM 5
    let spans = document.getElementById("rainbow").getElementsByTagName("span");
    let colors =["red", "orange", "yellow", "green", "blue", "purple", "grey"];

    for (var i = spans.length -1; i>=0; i--){
        spans[i].style.color = colors[i];
    }
    
    // DOM 6
    var changeSrc = function(event) {

        if(event.target.src){

            let filename = event.target.src.replace(/^.*[\\\/]/, '');

            if(filename == "flower1.png") {
                event.target.src = "flower2.png";
            }
            
            else{
                event.target.src = "flower1.png";
            }
        }
    };
    document.getElementById("event").addEventListener("mouseover", changeSrc);
}

// Adding interactive forms

// add Item

function addItem() {
    
    var item = document.getElementById("items").value;

    var itemH = document.createTextNode(item);
    var newLi = document.createElement("li");

    // Making Smart Form

    var important = document.getElementById("important").checked;
    var grocery = document.getElementById("grocery").checked;

    if(important == true) {
        newLi.style.color = "red";
    }
    if(grocery == true) {
        newLi.style["text-decoration"] = "underline";
    }

    //

    newLi.appendChild(itemH);



    document.getElementById("listItems").appendChild(newLi);
}

function rmItem() {

    var number = document.getElementById("number").value;
    let lis = document.getElementById("listItems").children;

    if(number < lis.length){
        lis[number].remove();
    }
    
    
}