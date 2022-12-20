<template>
   <div class = "container">
            <div class="container-left">
                <img class="login-logo" src="../components/HinhAnh/Image/Logo.png" alt="logo">
                <img class="login-image-1"  src="../components/HinhAnh/Image/Background_Login.png" alt="man">
            </div>
            <div class="container-right">
        
                <form method="post" id="formDangKy">
                    <h1>Yankee Auction</h1>
                    <p class="welcome">Welcome back !!!</p>
                    <p class="sign-in" style="font-size: 30px">Create an account</p>
                    <div class="flex_txt_field">
                        <div class="txt_field"  >
                            <input v-model="firstName" type="text" required >
                            <span></span>
                            <label>First name</label>
                        </div>
                        <div class="txt_field" >
                            <input v-model="lastName" type="text" required>
                            <span></span>
                            <label>Last name</label>
                        </div>
                    </div>
        
                    <div class="txt_field" id="txtEmail">
                        <input v-model="email" type="text" required>
                        <span></span>
                        <label>Email</label>
                    </div>

                    <div class="txt_field" >
                        <input  type="text" required>
                        <span></span>
                        <label>Address</label>
                    </div>
        
                    <div class="flex_txt_field">

                        <div class="txt_field">
                            <input type="password" required>
                             <span></span>
                            <label>Password</label>
                        </div>
                        <div class="txt_field">
                            <input type="password" required>
                             <span></span>
                            <label>Confirm password</label>
                        </div>
                        
                    </div>
                    <div class="note">By Creating an account, you agree to our User
                        Agreement and acknowledge reading our User Privacy.</div>
                    <input type="submit" value="Create an account">
                    <div class="signup_link">
                        Already a member ? <router-link to="/DangNhap">Đăng nhập</router-link>
                    </div>
                </form>
            </div>
            <div class="clear"></div>
            <hr class="line-login">
        </div>
</template>

<script>
export default {
    name: 'DangKy'
}
</script>

<style>

*{
    padding: 0;
    margin: 0;
}

.container{
    height: 100vh;
}

.clear{
    clear: none;
}

.container-left{
    background-color: #FFEDE1;
    float: left;
    width: 40%;
    height: 100%;
    position:relative ;
}

.container-right{
    background-color: #FFFFFF;
    float: left;
    width: 60%;
    height: 100%;
}

.login-logo {
    left: 25%;
    width: 50%;
    top: -5%;
    display: block;
    position: absolute;
}

.login-image-1 {
    bottom: 7%;
    left:35%;
    width: 80%;
    position: absolute;
}

.line-login {
    width: 100%;
    height: 1px;
    border-width:0;
    color:#FFCEAE;
    background-color:#FFCEAE;
    position: absolute;
    top: 93%;
}

.container-right form {
    position: absolute;
    width: 400px;
    height: fit-content;
    top: 48%;
    left: 70%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 19px 40px rgba(0, 0, 0, 0.05);
    border-radius: 20px;

}
.container-right h1{
    text-align: center;
    color: #F47458;
    font-family: Poppins, sans-serif;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    padding: 20px 0;
    border-bottom: 0;
}

.container-right .sign-in{
    font-family: Poppins, sans-serif;
    font-size: 40px;
    font-weight: bold;
    color: black;
    margin-top: 15px;
    margin-bottom: 10px;
}

.container-right .welcome{
    font-family: Poppins, sans-serif;
    font-size: 11px;
    font-weight: bold;
    color: rgba(0,0,0,0.5);
}

.container-right form{
    padding: 0 40px;
    box-sizing: border-box;
}
form .txt_field{
    position: relative;
    border-bottom: 2px solid #adadad;
    margin: 20px 0;
}
.txt_field input{
    width: 100%;
    padding: 0 5px;
    height: 40px;
    font-size: 16px;
    border: none;
    background: none;
    outline: none;
}
.flex_txt_field {
    margin-top: -20px;

    display: flex;
    justify-content: space-between;
}

.passWord{
    margin-top: -20px;
    display: flex;
    justify-content: space-between;
}
#txtEmail{
    margin: 0 0;
}


.flex_txt_field .txt_field{
    width: 48%;
}
.txt_field label{
    position: absolute;
    top: 50%;
    left: 5px;
    color: #adadad;
    transform: translateY(-50%);
    font-size: 16px;
    pointer-events: none;
    transition: .5s;
}
.txt_field span::before{
    content: '';
    position: absolute;
    top: 40px;
    left: 0;
    width: 0%;
    height: 2px;
    background: #F47458;
    transition: .5s;
}
.txt_field input:focus ~ label,
.txt_field input:valid ~ label{
    top: -5px;
    color: #F47458;
}
.txt_field input:focus ~ span::before,
.txt_field input:valid ~ span::before{
    width: 100%;
}
.note{
    /*margin: -5px 0 20px 5px;*/
    color: #a6a6a6;
    /*cursor: pointer;*/
    font-size: 11px;
    /*margin: 10px 0;*/
    margin-bottom: 10px;
}
.pass:hover{
    text-decoration: underline;
}
input[type="submit"]{
    width: 100%;
    height: 50px;
    border: 1px solid;
    background: #F47458;
    border-radius: 25px;
    font-size: 18px;
    color: #e9f4fb;
    font-weight: 700;
    cursor: pointer;
    outline: none;
}
input[type="submit"]:hover{
    border-color: #2691d9;
    transition: .5s;
}
.signup_link{
    margin: 30px 0;
    text-align: center;
    font-family: Poppins, sans-serif;
    font-size: 11px;
    color: #666666;
    margin: 10px 0;
}
.signup_link a{
    color: #F47458;
    text-decoration: none;
}
.signup_link a:hover{
    text-decoration: underline;
}


</style>