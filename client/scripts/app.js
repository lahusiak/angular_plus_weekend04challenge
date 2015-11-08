$(document).ready(function(){
    $("#entryForm").submit(function(event){
        //unclear why this works properly here and not when I call it as a function
        event.preventDefault();
        var values = {};

        $.each($(this).serializeArray(), function(i, field){
            values[field.name] = field.value;
        });

        $.ajax({
            type: "POST",
            url: "/data",
            data: values,
            success: function(data){
                console.log("DB got the data");
                getData();
            }
        });
        //$("#input").empty(); This is not working
    });
});

function sendData(){
    event.preventDefault();
    var values = {};

    $.each($(this).serializeArray(), function(i, field){
        values[field.name] = field.value;
    });

    $.ajax({
        type: "POST",
        url: "/data",
        data: values,
        success: function(data){
            console.log("DB got the data");
            getData();
        }
    });
}

function getData(){
    $.ajax({
        type: "GET",
        url: "/data",
        success: function(data){
            updateDom(data);
        }
    });
}


function updateDom(data) {
    $("#messageContainer").empty();

    for (var i = 0; i < data.length; i++) {
        var el = "<div class='well col-md-6'>" +
            "<p>" + data[i].name + "<p>" +
            "<p>" + data[i].message + "<p>" +
            "</div>";

        $("#messageContainer").append(el);
    }
}





