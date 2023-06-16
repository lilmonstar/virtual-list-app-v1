
const fetchProducts = (DATA_URL:string) => {

   return fetch(DATA_URL).then((response)=>{
    return response.json()
  })

}

export default fetchProducts