const rootStyles = getComputedStyle(document.querySelector(':root'));
let inp_bg_color = rootStyles.getPropertyValue('--inp-bg-color');
let incorrect_inp_bg_color = rootStyles.getPropertyValue('--incorrect-inp-bg-color');

function ValidateFormData(data)
{
    if (_validateName(data.fullname) &&
        _validateVariant(data.variant) &&
        _validateGroup(data.groupname) &&
        _validatePhone(data.phone) &&
        _validateIdCard(data.IdCard))
    {
        PrintData(data);
        return true;
    }

    return false;
}

function _validateName(fullname)
{
    if (fullname.value != null && (/^[A-ZА-ЯІҐЄЇ][a-zа-яіґєї]+ [A-ZА-ЯІҐЄЇ]\.[A-ZА-ЯІҐЄЇ]\.$/.test(fullname.value)))
    {
        fullname.style.background = inp_bg_color;
        return true;
    }

    fullname.style.background = incorrect_inp_bg_color;
    alert("Некоректний формат ПІБ!")
    return false;
}

function _validateVariant(variant)
{
    if (variant.value != null && (/^\d{2}$/.test(variant.value)))
    {
        variant.style.background = inp_bg_color;
        return true;
    }

    variant.style.background = incorrect_inp_bg_color;
    alert("Некоректний формат варіанту!")
    return false;
}

function _validateGroup(group)
{
    if (group.value != null && (/^[A-ZА-ЯІҐЄЇ]{2}-\d{2}$/.test(group.value)))
    {
        group.style.background = inp_bg_color;
        return true;
    }

    group.style.background = incorrect_inp_bg_color;
    alert("Некоректний формат назви групи!")
    return false;
}

function _validatePhone(phone)
{
    if (phone.value != null && (/^\(\d{3}\)-\d{3}(?:-\d{2}){2}$/.test(phone.value)))
    {
        phone.style.background = inp_bg_color;
        return true;
    }

    phone.style.background = incorrect_inp_bg_color;
    alert("Некоректний формат телефону!")
    return false;
}

function _validateIdCard(IdCard)
{
    
    if (IdCard.value != null && (/^[А-ЯA-ZҐЄЇ]{2} №\d{6}$/.test(IdCard.value)))
    {
        IdCard.style.background = inp_bg_color;
        return true;
    }

    IdCard.style.background = incorrect_inp_bg_color;
    alert("Некоректний формат номеру ID-карти!")
    return false;
}

function PrintData(data){
    const classname = "data-out-container";
    if (document.body.getElementsByClassName(classname).length > 2){
        document.body.getElementsByClassName(classname)[0].remove();
    }
    let dataOutput = "<div class="+classname+"><h1>Input data:</h1>" +
        "<p><b>ПІБ:</b> " + data.fullname.value + "</p>" +
        "<p><b>Варіант:</b> " + data.variant.value + "</p>" +
        "<p><b>Група:</b> " + data.groupname.value + "</p>" +
        "<p><b>Телефон:</b> " + data.phone.value + "</p>" +
        "<p><b>ID-карта:</b> " + data.IdCard.value + "</p></div>";
    document.body.innerHTML += dataOutput;
}
