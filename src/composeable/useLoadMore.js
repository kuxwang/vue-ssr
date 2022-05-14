import {ref} from 'vue';

export const useLoadMore = () =>{
  const list = ref([]);
  const loading = ref(false);
  const finished = ref(false);
  const page = ref({
    pageNum:1,
    pageSize: 10
  })

  const onLoad = async (promise) => {
    const result =  await promise
    // 加载状态结束
    if(result.list.length > 0){
      list.value = [...list.value, ...result.list]
      page.value.pageNum++
    }
    loading.value = false;
    // console.log(result)
    // console.log(list.value)
    // 数据全部加载完成
    if (list.value.length >= result.total || result.list.length === 0) {
      console.log('结束')
      finished.value = true;
    }
  };

  const reset = ()=> {
    list.value = []
    loading.value = false
    finished.value = false
    page.value = {
      pageNum:1,
      pageSize: 10
    }
  }

  
  return {
    page,
    list,
    loading,
    finished,
    onLoad,
    reset
  };
}




