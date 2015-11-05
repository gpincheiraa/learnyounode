var sum = process.argv
            .splice(2)
            .reduce(function(a , b){
              return Number(a) + Number(b);
            });

console.log(sum);