var clearComment = document.getElementById("clear-comment");
clearComment.addEventListener("click", function() {
    document.getElementById("input-text").value = ""
})

var submitComment = document.getElementById("submit-comment");
submitComment.addEventListener("click", function() {

    var inputText = document.getElementById("input-text").value
    var commentSection = document.getElementById("comment-section")
    var commentNode = document.createTextNode(inputText)

    commentSection.appendChild(commentNode)
    commentSection.appendChild(document.createElement('br'));
    document.getElementById("input-text").value = ""
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