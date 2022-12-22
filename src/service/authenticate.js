import api from "./api";

export default {
    signin(credentials) {
        return api().post('signin', credentials);
    },
    signup(credentials) {
        return api().post('signup', credentials);
    },
    // getproduct(credentials){
    //     return api().get('show', credentials)
    // }
}

