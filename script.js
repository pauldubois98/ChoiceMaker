//unordered list of choices
var choices_list = document.getElementById("choices");
//button for adding an option
var add_option_btn = document.getElementById("add_option");
//button to make the choice
var make_choice_btn = document.getElementById("make_choice");
//choice output
var choice_output_label = document.getElementById("choice_output");



function reload(event){
    var elements = document.getElementsByClassName("option");
    var update_list = "";
    for (var i = 0; i < elements.length; i++) {
        update_list += "<li class=\"option\"><input type=\"text\" value=\""+elements[i].childNodes[0].value+"\" placeholder=\"Type here...\"></li>";
    }
    choices_list.innerHTML = update_list;
}

add_option_btn.addEventListener("click", function(event) {
    reload();
    choices_list.innerHTML = choices_list.innerHTML + "<li class=\"option\"><input type=\"text\" value=\"\" placeholder=\"Type here...\"></li>";
});


make_choice_btn.addEventListener("click", function(event) {
    reload();
    var elements = document.getElementsByClassName("option");
    var options_list = [];
    var scores_list = [];
    var max_score = -2;
    var best_option = "";

    for (var i = 0; i < elements.length; i++) {
        var option = elements[i].childNodes[0].value;
        var option_std = option.replace(/[^a-z0-9]/gi,'').toLowerCase();
        options_list.push(option);
        var score = -2;
        if(option_std==""){
            score = -1
        }
        else{
            score = Math.abs(calcSHA1nb(option_std));
        }
        scores_list.push(score);
        if(score>max_score){
            max_score = score;
            best_option = option;
        }
    }
    choice_output_label.innerText = best_option;

});






choices_list.innerHTML = choices_list.innerHTML
