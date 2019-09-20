const all_checkbox_num1 = $('.checkbox_num1')
console.log($('.checkbox_num1'))
var check_limit = 3;
document.addEventListener("DOMContentLoaded", function() {
    if (document.cookie.includes("choise"))
    {
        var all_cookie_arr = document.cookie.split(";")
        var cookie_arr = all_cookie_arr.filter(cookie => cookie.includes("choise"));
        console.log('yjdsq vfcbd: ' + cookie_arr)
        console.log(cookie_arr, cookie_arr.length)
        for (var jj = 0; jj < cookie_arr.length; jj++) {
            var cookie_val = cookie_arr[jj].split("=")[1]
            //console.log($(`[value=${cookie_val}]`))
            //$(`[value=${cookie_val}]`)[0].setAttribute("checked", "true");
            document.getElementsByClassName(cookie_val)[0].setAttribute("checked", "true");
        }
        if (cookie_arr.length == 3)
        {
            console.log('delayu ecli est 3 cookie')
            for (var i = 0; i < all_checkbox_num1.length; i++) {
                console.log(all_checkbox_num1[i])
                all_checkbox_num1[i].setAttribute("disabled", "disabled");
        }
        }
    }
    // если нет куки снимает все галочки ГОТОВО
    else {
        console.log('delayu ecli net cookie')
        for (var i = 0; i < all_checkbox_num1.length; i++) {
            console.log(all_checkbox_num1[i].hasAttribute("checked"))
            if (all_checkbox_num1[i].hasAttribute('checked'))
            {
                all_checkbox_num1[i].removeAttribute('checked');
            }    

        }
    }
});




$('input.checkbox_num1').on('change', function(evt) {
    var num_of_checked = $(this).siblings(':checked').length
    console.log(num_of_checked)
    if (this.checked) { 
        var cookie_str = 'choise'+ num_of_checked + '=' + this.value + "; max-age=2678400‬";
        document.cookie = cookie_str;
    }
    if($(this).siblings(':checked').length >= check_limit) {
        this.checked = false;
        console.log('3')
    }
});

$('input.checkbox_num1').on('input', function(evtt) {
    if($(this).siblings(':checked').length == (check_limit-1)) {
        var num_of_checked = $(this).siblings(':checked').length
        var cookie_str = 'choise'+ num_of_checked + '=' + this.value + "; max-age=2678400‬";
        document.cookie = cookie_str;
        for (var i = 0; i < all_checkbox_num1.length; i++) {
            console.log(all_checkbox_num1[i])
            all_checkbox_num1[i].setAttribute("disabled", "disabled");
        }
    }
});
console.log(all_checkbox_num1)

reset_c.onclick = () => {
    document.cookie = "choise0=none; max-age=-1"
    document.cookie = "choise1=none; max-age=-1"
    document.cookie = "choise2=none; max-age=-1"
    window.location.reload();
}