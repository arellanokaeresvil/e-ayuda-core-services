
const Pagination = ( page: number,perPage: number,total: number) =>{
   
    return {

        current_page: page,
        per_page:perPage,
        total,
        last_page: Math.ceil(total / perPage)


    }

} 

export default Pagination