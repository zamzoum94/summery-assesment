$("#create").click(function(){
    var check1 = $("#checkBox1").prop('checked');
    var check2 = $("#checkBox2").prop('checked');
    var check3 = $("#checkBox3").prop('checked');

    if(check1 && check2 && check3){
        $("ul").append("<li class = 'black'>Black</li>");
    } else if((check1 && check2) || (check1 && check3) || (check3 && check2)){
        $("ul").append("<li class ='purple'>blue + red</li>");
        $("ul").append("<li class ='green'>blue + yellow</li>");
        $("ul").append("<li class ='orange'>red + yellow</li>");
    } else if(check3 || check2 || check1){
        $("ul").append("<li class='yellow'>Yellow</li>");
    }

});

$("#remove").click(function(){
    var check1 = $("#checkBox1").prop('checked');
    var check2 = $("#checkBox2").prop('checked');
    var check3 = $("#checkBox3").prop('checked');

    if(check1 && check2 && check3){
        $(".black").remove();
    } else if((check1 && check2) || (check1 && check3) || (check3 && check2)){
        $(".purple").remove();
        $(".green").remove();
        $(".orange").remove();
    } else if(check3 || check2 || check1){
        $(".yellow").remove();
    }

});






    