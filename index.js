function generatepassword (length,includelowecase,includeuppercase,includenumbers,includesymbols){
       

    const lowercasechars="abcdefghijklmnopqrstuvwxyz"
    const uppercasechars="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numberchars="0123456789"
    const symbolchars="@#$%^@^&*_+"


    let allowedchars=""
   let password="";

   allowedchars+=includelowecase ?lowercasechars: ""
      allowedchars+=includeuppercase ?uppercasechars: ""
         allowedchars+=includesymbols ?symbolchars: ""
            allowedchars+=includenumbers ?numberchars: ""
if(length<0){
    return `(password length must be atleast 1)`

}
if(allowedchars.length===0){
    return`(tleast 1 set of characters needs to be selected) `

}
for(i=0; i<length; i++){
    const randomindex=Math.floor(Math.random() * allowedchars.length);
    password+=allowedchars[randomindex];
}

    return password;
}


const length=12;
const includelowecase=true;
const includeuppercase=true;
const includenumbers=true;
const includesymbols=true;

const password=generatepassword(length,
    includelowecase,
    includeuppercase,
    includenumbers,
    includesymbols)

    console.log(`generated password is :${password}`)