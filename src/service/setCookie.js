import Cookies from "js-cookie";

const setCookie = (cookiename, value) => {
    Cookies.set(cookiename, value, 1)
};

export default setCookie;