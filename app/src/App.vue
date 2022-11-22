<template>
  <div class="app-box">
    <button @click="userLogin">登录</button>
    <button @click="callHome">呼叫home</button>
    <button @click="callLogin">呼叫login</button>
    <Home></Home>
    <Login></Login>
    {{name}}
    用户名{{username}},年龄:{{userage}}
  </div>
</template>


<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue'
import Login from './components/login/Login.vue'
import Home from './components/home/Home.vue'
import useMainStore from './components/stores/user'
import {phone} from './phone/phone'
// import { reactive, ref } from 'vue'
import {loginApi} from './api/auth.js'
export default defineComponent({
    components:{
      Login,
      Home
    },
    setup () {
        const {username , userage}=toRefs(useMainStore())
        const name=ref("lx")
        const pwd=ref('123')
        let loginUser=reactive({'user':name.value,'pwd':pwd.value})
        const userLogin=()=>{
            console.log(loginUser);
            loginApi(loginUser).then((result) => {
            if(result.status==undefined || result.status!=0){
                console.log("登录失败");
                return 
            }
            console.log(result);

        }).catch((err) => {
            console.log("登录失败");
        });
        }
        const callHome=()=>{
          phone.call('home',{'msg':"我是app"})
        }
        const callLogin=()=>{
          phone.call('login',{'msg':"我是app"})
        }
        phone.answer('homeToApp',(data:object)=>{
          console.log(data);
        })
        phone.answer('loginToApp',(data:object)=>{
          console.log(data);
        })
        return {
          username,userage,name,pwd,loginUser,callHome,callLogin,userLogin
        }
    }
})
</script>



<style scoped lang="less">

.app-box{
  // 盒子模型
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 1px solid gray;
  // 位置类型
  position: relative;
  left: 0;
  top: 0;
  
  // 修饰
  // background-color: @name-color;
  background-color: transparent;
}
</style>
