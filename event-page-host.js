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

function addMusician() {
    var joinName = document.getElementById('name').value
    var joinInstrument = document.getElementById('instrument').value
    var joinLevel = document.getElementsByName('expertiseLevel').value
    var num = 1;

    document.getElementById("join-div").innerHTML = (
        `<div id="musician`+num+`" class="card m-1 col col-sm-3">
            <div class="card-body">
                <img class="headshots" src="https://www.wasiofaces.com/wp-content/uploads/San-Diego-Orange-County-Irvine-Headshot-Photography-17-1.jpg" />
                <div class="card-title">`+joinName+`</div>
                <div class="card-text">`+joinInstrument+`, `+joinLevel+`</div>
            </div>
        </div>

        <div id = "join-div">
        </div>
        `
    );
}