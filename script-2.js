const all_checkbox_num1 = $('.checkbox_num1') //выбираем все чекбоксы
var check_limit = 3; //Задаю количество выборов

// Функция по загрузке проверяет есть ли нужные куки, если есть ставит нужные галочки
document.addEventListener("DOMContentLoaded", function() {
    if (document.cookie.includes("choise"))
    {
        var all_cookie_arr = document.cookie.split(";") //масив всех куки
        //Иасив нужных куки
        var cookie_arr = all_cookie_arr.filter(cookie => cookie.includes("choise"));
        // перебераю все куки и расставляю чекбоксы
        for (var jj = 0; jj < cookie_arr.length; jj++) {
            var cookie_val = cookie_arr[jj].split("=")[1]
            document.getElementsByClassName(cookie_val)[0].setAttribute("checked", "true");
        }
        //Если куки 3 то деактивирую все чекбоксы
        if (cookie_arr.length == 3)
        {
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

// в данном блоке отрабатываются выборы 1го и 2го чекбоксов
// а также утановки куки
$('input.checkbox_num1').on('change', function(evt) {
    var num_of_checked = $(this).siblings(':checked').length
    if (this.checked) { 
        var cookie_str = 'choise'+ num_of_checked + '=' + this.value + "; max-age=2678400‬";
        document.cookie = cookie_str;
    }
    else {
        var cookie_str = 'choise'+ num_of_checked + '=' + this.value + "; max-age=-1";
        document.cookie = cookie_str;
    }
    if($(this).siblings(':checked').length >= check_limit) {
        this.checked = false;
    }
});
// действия при выборе 3го чекбокса
$('input.checkbox_num1').on('input', function(evtt) {
    if($(this).siblings(':checked').length == (check_limit-1)) {
        var num_of_checked = $(this).siblings(':checked').length
        var cookie_str = 'choise'+ num_of_checked + '=' + this.value + "; max-age=2678400‬";
        document.cookie = cookie_str;
        for (var i = 0; i < all_checkbox_num1.length; i++) {
            all_checkbox_num1[i].setAttribute("disabled", "disabled");
        }
    }
});

// кнопка сброса куки этой страницы и перезагрузки страницы
reset_c.onclick = () => {
    document.cookie = "choise0=none; max-age=-1"
    document.cookie = "choise1=none; max-age=-1"
    document.cookie = "choise2=none; max-age=-1"
    window.location.reload();
}
