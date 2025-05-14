$("h1").addClass("big-title")
$("h1").click(function(){
    $("h1").css("color", "blue");
})

$(document).ready(function(){
    $('#googleBtn').on('click', function() {
        window.open('https://www.google.com', '_blank');
    });

    $('#youtubeBtn').on('click', function() {
    window.open('https://www.youtube.com', '_blank');
    });

        $('#supajbroBtn').on('click', function() {
        window.open('https://github.com/supajbro?tab=overview&from=2025-05-01&to=2025-05-14', '_blank');
    });
});

$(".btn").click(function(){
    $("h1").css("color", "purple");
});