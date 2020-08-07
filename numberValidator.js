// Srapped from: https://en.wikipedia.org/wiki/List_of_mobile_telephone_prefixes_by_country#cite_note-5
var data = require('./csvjson.json')
//128 ---> India
console.log(data[128]); 

const validator = (code, phone)=>{

    length = phone.toString().length
    for (i =0; i< data.length;i++){
        if(data[i]["CodeString"] === code){
            if(data[i]["Length"] == 0 || data[i]["Length"] == length){
                return true
            }
        }
    }
    return false
}
const res = validator('+1', 8130291250)
console.log("Result: ",res); 

// A small gotcha ---> 
// Citizens of country which share their code with 
// other countries whose phone len is not available
// can give any phone number. 
//FIX ---> Use Country Name along with phone code