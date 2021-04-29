import * as $ from "jquery"
import IUser from "../storage/user"
import { click, fillField, sleep } from "./utils";




console.log("Hello world supreme")

const user: IUser = {
    firstName: "Thibault",
    lastName: "Mathian",
    email: "titanmath.t@gmail.com",
    tel: "+33769933717",
    adresse1: "88 le sauzey",
    adresse2: "",
    country: "France",
    countryCode: "FR",
    citie: "LAVAL",
    region: "Isère",
    postcode: "38190",
    cardNumber: "333222233344445",
    cardMonth: "05",
    cardYear: "2025",
    cardCCV: "222",
}





setTimeout(async () => {
    //document.getElementById("name").value = "titanmath.t@gmail.com"
    // document.getElementById("name").value = "thibault mathian"

    const url = window.location.href

    if (url.includes("shop/cart")) {
        console.log("in the cart");
        click(".out_of_stock > td.cart-remove > form > button")
        click("#cart-footer > a.button.checkout")

    }


    else if (url.includes("https://www.supremenewyork.com/checkout")) {
        console.log("in info page");

        fillField("#order_billing_name", `${user.firstName} ${user.lastName}`)
        fillField("#order_email", user.email)
        fillField("#order_tel", user.tel)

        fillField("#bo", user.adresse1)
        fillField("#oba3", user.adresse2)
        fillField("#order_billing_city", user.citie)
        fillField("#order_billing_zip", user.postcode)
        fillField("#order_billing_country", user.countryCode)


        fillField("#cnb", user.cardNumber)
        fillField("#credit_card_month", user.cardMonth)
        fillField("#credit_card_year", user.cardYear)
        fillField("#vval", user.cardCCV)
        $("#order_terms").prop('checked', true);

        await sleep(50)
        click("input[name*=commit]")
    }
    else {
        console.log("in product page");

        $("input[name*=commit]").trigger("click")

        await sleep(50)

        click("#cart > a.button.checkout")

        // "#cart > a.button.checkout"

        // $("#cart > a.button.checkout").text("Hello world")
    }






    //#item_74823 > td.cart-remove > form > button

    // $("#email").val("titanmath.t@gmail.com")
    // $("#name").trigger("focus").val("thibault mathian")

    // //$("#purchase").trigger("click")
    // console.log("try to fill");

}, 100)