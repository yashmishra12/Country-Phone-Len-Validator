var data = require('./csvjson.json')
//124 ---> India
console.log(data[5]); 

const validator = (code, phone)=>{

    length = phone.toString().length
    for (i =0; i< data.length;i++){
        if(data[i]["Code"] === code){
            if(data[i]["Length"] == 0 || data[i]["Length"] == length){
                return true
            }
        }
        
    }
    return false
}
const res = validator(376, 8130291250)

console.log("Result: ",res); 