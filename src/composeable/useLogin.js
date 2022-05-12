import {ref,computed} from 'vue';

export const useUser = () =>{
  const loginModel = ref({
    username:"",
    password:"",
  })

  const login = async ()=>{

  }

  const register = async ()=>{

  }

  const loginOut =  async ()=>{

  }

  const getCode = async ()=>{

  }

  // 用户是否登陆
  const isLogin = computed(() => true)
  

  return {
    loginModel,
    login,
    register,
    loginOut,
    getCode,
    isLogin

  }
 }