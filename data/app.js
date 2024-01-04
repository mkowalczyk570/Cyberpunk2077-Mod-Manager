import { getModInfo } from "./modVersionControl.js";

try{
    const res = await getModInfo(12065)
    const body = await res.json()
    console.log(body)
}catch(e){
    console.log(e)
}