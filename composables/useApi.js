export default async function useApi(url){
       
  try {

    const {data ,error} = await useFetch(url)
  
    return {data , error}
    
  } 
  catch (error) {
   
    return { data , error}
  }

}