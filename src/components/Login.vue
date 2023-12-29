<template>
  <div class="login-div">
    <h1></h1>
    <div class="login-input">
      <form class="section-form" action="/login">
        <div class="input-div">
            <label for="u_name">用户名：</label>
             <input class="input-box"  type="text" name="u_name" placeholder="请输入用户名" />
            </div>
        <div class="input-div">
            <label for="u_pwd">密&nbsp;&nbsp;&nbsp;码：</label>
             <input class="input-box" type="password" name="u_pwd" placeholder="请输入密码" />
            </div>
        <div class="input-div">
            <input type="submit" value="登录" />
        </div>
      </form>
    </div>
    <div>今天是XX年</div>
  </div>
</template>
<style scoped>
.login-div {
  border: 1px;
  border-color: rgb(246, 246, 248);
  border-style: solid;
  height: 100vh;
  background-image: url('../assets/IMG_20170904_091320.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
.login-input {
  height: 75vh;
  opacity: 0.5;
}
.section-form {
  margin-right: 40px;
  margin-top: 6%;
  width: 40%;
  float: right;
  border-color: rgb(250, 248, 248);
  border-style: solid;
}
.input-div {
  height: 3rem;
  align-self: center;
  padding-top: 10px;
  padding-bottom: 0px;
}
label {
    width: 4rem;
    text-align: right;
}
.input-box {
    width: 8rem;
}
</style>
