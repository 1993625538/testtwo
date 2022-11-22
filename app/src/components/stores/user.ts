import {defineStore} from "pinia";
const useMainStore =  defineStore('main',{
  state:()=>{return{
      username:'严峰',
      userage:24
  }},
})

export default useMainStore