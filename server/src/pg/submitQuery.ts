
import pool from './pool'

export const submitQuery = async (query:string)=>{
    console.log(query)
    try{
        const queryResult = await pool.query(query);
        console.log('SUBMIT QUERY ::->');
        console.log(queryResult);
        return {success: true, data: queryResult};
    }
    catch(e){
        console.log(e);
        return {success: false, data:e};
    }
}