var clearButtonElement = document.getElementById("clear-comment");
var submitButtonElement= document.getElementById("submit-comment");
var inputElement = document.getElementById("input-text");

clearButtonElement.addEventListener("click", function() {
    inputElement.value = "";
})

submitButtonElement.addEventListener("click", function() {
    var commentSection = document.getElementById("comment-section");
    var commentNode = document.createTextNode(inputElement.value);

    commentSection.appendChild(commentNode);
    commentSection.appendChild(document.createElement("br"));
    inputElement.value = "";
})

