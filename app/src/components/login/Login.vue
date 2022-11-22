<template>
  <div class="login-box">
    <button @click="callApp">呼dsffsd叫</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { phone } from "../../phone/phone";

export default defineComponent({
  setup () {
    phone.answer('login',(data:object)=>{
      console.log(data);
      console.log(3213123);
      
    })
    const callApp=()=>{
      phone.call('loginToApp',{msg:"我是login"})
    }
    return {callApp}
  }
})
</script>

<style scoped>
.login-box{
    position: absolute;
    width: 20rem;
    height: 20rem;
    right: 0;
    top: 0;
}
</style>
