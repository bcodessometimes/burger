console.log("working");

$(document).on("click", ".eatBurger", function(event){
    event.preventDefault()
    console.log("burger button click");
});

$(document).on("click", "#addBurger", function(event){
    event.preventDefault()
    console.log("add button click");
    console.log($("#addABurger").val().trim());
    $.ajax({
        url: "/api/burgers",
        method: "post",
        data: {
            burger: $("#addABurger").val().trim()
        } 
    }).then(function(err ,serverResponse){
        console.log(serverResponse);
    })
});