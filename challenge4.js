function isPrime(num) {
    var isPrime = true;
   for(var i = 2;  i<num; i++){

    if(num % i == 0){
        isPrime = false;
        break;
        
    }

    



   }
   return isPrime;

  
  }
  
  console.log(isPrime(17));