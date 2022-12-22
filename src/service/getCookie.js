import Cookies from "js-cookie";

const getCookie = (cookiename, value) => {
    return Cookies.get(cookiename, value, 1)
};

export default getCookie;