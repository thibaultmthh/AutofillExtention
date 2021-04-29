import * as $ from "jquery"
import IUser from "../storage/user"
import { click, fillField, makeid, sleep } from "./utils"
import * as superagent from "superagent"
console.log("HElloworld metalabs")

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
    //$("#purchase").trigger("click")
    console.log("try to fill");
    const data = JSON.parse($('#__NEXT_DATA__').html())
    console.log(data);

    const account_id = data.props.pageProps.release.plan.account
    const release = data.props.pageProps.release.id
    const metalabsID = data.props.pageProps.id
    const id = makeid(21)


    const requestData = {
        "release": release,
        "license": null,
        "billing_details": {
            "email": makeid(4) + "@thibcoms.com",
            "name": user.firstName + " " + user.lastName,
            "address": {
                "city": null,
                "country": null,
                "line1": null,
                "line2": null,
                "postal_code": null,
                "state": null
            }
        },
        "payment_method": null,
        "payment_intent_client_secret": null,
        "status": "processing",
        "created": Date.now() - 1000,
        "account": account_id,
        "user": null,
        "id": id
    }


    console.log(requestData, "blabla");


    const rep = await superagent.post("https://portal-api.metalabs.io/v1/checkouts").set("Meta-Labs-Account", metalabsID).send(requestData)
    console.log(rep);






}, 500)

