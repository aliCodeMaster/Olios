import {getCookie} from "../../../global/functions";

let cookieValue = getCookie("cart");
cookieValue = cookieValue === "" ? [] : JSON.parse(cookieValue);
export const Cart = (data = cookieValue, action) => {
    if(action.type === "ADDTOCART")
        data = action.value;
    return data;
};