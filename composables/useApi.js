export default async function useApi(url){
      
  const isLoading = ref(false) ;
  
  
 
  try {
    isLoading.value = true ;
    const {data ,error} = await useFetch(url)
   
    if(!data){
      isLoading.value = false ;
      return { data , isLoading , error}
    }
    else {
      isLoading.value = false ;
      return {data, isLoading , error}
    }
  } 
  catch (error) {
    isLoading.value = false ;
    return { data , isLoading , error}
  }

}