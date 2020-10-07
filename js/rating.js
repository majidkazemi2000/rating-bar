$(document).ready(function () {

    var point;
    $("#input-rate").val("0");
    $(".root-rate").html("<div class=\"rating-container\">\n" +
        "        <div class=\"rating-item\">\n" +
        "            <img src=\"image/star1.png\" alt=\"NOT FOUND\" class=\"item-img rate-img1\" name=\"1\">\n" +
        "        </div>\n" +
        "        <div class=\"rating-item\">\n" +
        "            <img src=\"image/star1.png\" alt=\"NOT FOUND\" class=\"item-img rate-img2\" name=\"2\">\n" +
        "        </div>\n" +
        "        <div class=\"rating-item\">\n" +
        "            <img src=\"image/star1.png\" alt=\"NOT FOUND\" class=\"item-img rate-img3\" name=\"3\">\n" +
        "        </div>\n" +
        "        <div class=\"rating-item\">\n" +
        "            <img src=\"image/star1.png\" alt=\"NOT FOUND\" class=\"item-img rate-img4\" name=\"4\">\n" +
        "        </div>\n" +
        "        <div class=\"rating-item\">\n" +
        "            <img src=\"image/star1.png\" alt=\"NOT FOUND\" class=\"item-img rate-img5\" name=\"5\">\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <div class=\"text-container\">\n" +
        "        <div class=\"text-container-item\">\n" +
        "            <p id=\"text-rating\"></p>\n" +
        "        </div>\n" +
        "        <div class=\"text-container-item\">\n" +
        "            <p>نظر شما</p>\n" +
        "        </div>\n" +
        "    </div>");


    var container_width = $(".rating-container").css("width");
    $(".text-container").css({
        'width':container_width
    })
    var w = parseInt(container_width)/5;
    var is_hover = true;
    var active = true;
    $(".rating-item").css({
        'width':w
    });
    var x;
    $(".item-img").hover(function () {
        if (active){
            if (!is_hover){
                for (var i = 1; i <= 5; i++) {
                    $(".rate-img"+i).attr("src","image/star1.png");
                }
            }
            x = $(this).attr("name");
            for (var i = 1; i <= x; i++) {
                $(".rate-img"+i).attr("src","image/star2.png");
            }
        }
    },function () {
        if (active){
            if (is_hover){
                for (var i = x; i >= 1; i--) {
                    $(".rate-img"+i).attr("src","image/star1.png");
                }
            }
        }
    })

    $(".item-img").click(function () {
        if (active){
            var point = $(this).attr("name");
            for (var i = 1; i <= point; i++) {
                $(".rate-img"+i).attr("src","image/star3.png");
            }
            switch (parseInt(point)) {
                case 1:
                    $("#text-rating").text("خیلی بد");
                    $("#input-rate").val("1");
                    break;
                case 2:
                    $("#text-rating").text("بد");
                    $("#input-rate").val("2");
                    break;
                case 3:
                    $("#text-rating").text("متوسط");
                    $("#input-rate").val("3");
                    break;
                case 4:
                    $("#text-rating").text("خوب");
                    $("#input-rate").val("4");
                    break;
                case 5:
                    $("#text-rating").text("عالی");
                    $("#input-rate").val("5");
                    break;
            }
            is_hover = false;
        }
        active = false;
    });


});

/////////////////////////////////////////////
// Create By Majid kazemi 2020
// Git Hub ==> www.github.com/majidkazemi2000
/////////////////////////////////////////////


