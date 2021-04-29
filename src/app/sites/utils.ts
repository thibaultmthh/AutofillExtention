import * as $ from "jquery"

export function fillField(selector: string, value: string) {
    $(selector).trigger("focus").val(value)
}

export function click(selector: string) {
    $(selector).trigger("click")
    // @ts-ignore
    document.querySelector(selector).click()
}

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


export function makeid(length) {
    var result = [];
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result.push(characters.charAt(Math.floor(Math.random() *
            charactersLength)));
    }
    return result.join('');
}
