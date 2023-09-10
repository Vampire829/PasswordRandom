const  randomEasy = (element, number) => {
    let i=0
    let resultArray =[]
    if(number){
       while(i<number){
           let elementArray = element.split('')
           let a = Math.floor(Math.random() * elementArray.length);
             resultArray.push(elementArray[a])
           i++;
       }
       
    }else if(!number){
       let a = Math.floor(Math.random() * element.length);
       return element[a];
   }
    return resultArray
 };
 
 const randomMediym=(element1,element2,number)=>{
   let resultArray=[]
   let i =0
   if(number){
       while(i<number){
       let a =Math.floor(Math.random() * element1.length);
       let b=Math.floor(Math.random() * element2.length);
       let result = Math.round(Math.random())
       if(result === 0){
            resultArray.push(element1[a])
       }else {
            resultArray.push(element2[b])
       }
       i++
       
   }
   }
   else if(!number){
       let a =Math.floor(Math.random() * element1.length);
       let b=Math.floor(Math.random() * element2.length);
       let result = Math.round(Math.random())
       if(result === 0){
           return element1[a]
       }else {
           return element2[b]
       }
   }
   return resultArray
 }


     const randomHard =(element1,element2, element3,number)=>{
        let resultArray=[]
        let i=1
        if(number){
            while(i<number){
            let a=Math.floor(Math.random() * element1.length);
            let b=Math.floor(Math.random() * element2.length);
            let c=Math.floor(Math.random() * element3.length);
            let result =Math.ceil(Math.random() *3);
            if(result === 1){
                resultArray.push(element1[a])
            }else if(result === 2){
                resultArray.push(element2[b])
            }else if(result === 3){
                resultArray.push(element3[c])
            }
            i++
        }

     }
        else if(!number){
       let a=Math.floor(Math.random() * element1.length);
       let b=Math.floor(Math.random() * element2.length);
       let c=Math.floor(Math.random() * element3.length);
       let result =Math.ceil(Math.random() *3);
       if(result === 1){
           return element1[a]
       }else if(result === 2){
           return element2[b]
       }else if(result === 3){
           return element3[c]
       }
    }
    return resultArray
   }

function generatePassword(length,parametr,number){
const digits = '0123456789';
const symbols = '!#$%&()*+,-./:;<=>?@[]^_{|}~';
const pas = 'AEIOUYBCDFGHJKLMNPQRSTVWXYZ';
let resultPassword ='';
let resultArray=[]
let i =0;
 while(i<length){
   if(parametr === 'easy'){
       let easy=randomEasy(pas,number);
        resultPassword+=easy || resultArray.push(easy);
       i++;
}else if(parametr === 'medium'){
        let medium =randomMediym(pas,digits,number);
        resultPassword+=medium || resultArray.push(medium);
        i++;
}else if(parametr === 'hard'){
    let hard =randomHard(pas,digits,symbols,number)
    resultPassword+=hard || resultArray.push(hard);
    i++;
}
}
return resultPassword || resultArray
}


console.log(generatePassword(5,'hard',4))