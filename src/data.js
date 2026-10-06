export const API_KEY = 'AIzaSyCz8R0b2lu5zgtUaeVssn_9R0cZEP3aas4';

export const value_converter = (value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";

    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K";
    }
    else{
        return value
    }
}