// обработка при загрузке, выбирает показывать поле ввода или хранимый город
document.addEventListener("DOMContentLoaded", function() {
    if (document.cookie.includes('user_sity'))
    {
        sity_in_cookie = getCookie('user_sity');
        first_visit.style.cssText = `display: none;`;
        other_visit.style.cssText = `display: ;`;
        visited_sity.textContent = `Ваш город: ${sity_in_cookie}`
    }
    else {
        first_visit.style.cssText = `display: ;`;
    }
});
//Функция записывает в куки набираемое значение
function inputed_value (x) {
    // body...
    iv = x.value
    new_cookie_v = "user_sity= " + encodeURIComponent(iv) + "; max-age=2678400‬";
    console.log(new_cookie_v)
    document.cookie = new_cookie_v;
}

// функция полученя куки по имени
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

//сброс города по нажатию кнопки
change_sity.onclick = () => {
    document.cookie = "user_sity=none; max-age=-1"
    window.location.reload();
}
