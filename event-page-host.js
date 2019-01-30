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

