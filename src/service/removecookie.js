import Cookies from "js-cookie";

const removeCookie = (cookiename, value) => {
    Cookies.remove(cookiename)
};

export default removeCookie;