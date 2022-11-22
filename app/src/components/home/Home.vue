
<template>
  <div class="home-box">
      <button @click="callApp">呼叫apprewrwereaa</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { phone } from "../../phone/phone";

export default defineComponent({
    setup () {
        phone.answer('home',(data:object)=>{
    console.log(data);
    })
    const callApp=()=>{
        phone.call('homeToApp',{msg:"我是home"})
    }

    return {callApp}
    }
})
</script>

<style scoped>
.home-box{
    position: absolute;
    width: 20rem;
    height: 20rem;
    left: 0;
    top: 0;
}
</style>