function myPowerUp(a){
    return function(b){
        return [a**2,b**2];
         
    }

}
const [a,b] = myPowerUp(2)(3);
console.log(a,b)