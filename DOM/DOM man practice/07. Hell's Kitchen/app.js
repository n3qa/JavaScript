function solve() {
   document.querySelector('#btnSend').
   addEventListener('click', onClick);

   let input = document.querySelector('#inputs> textarea');

   function onClick () {
      const arr = JSON.parse(input.value);

      let restaurants = {};

     arr.forEach((line) => {
         const tokens = line.split(' - ');
         const name = tokens[0];
         const workersArr = token[1].split(', ');

         let workerrs = [];
         let averageSalary = 0;
         let bestSalary = 0;
        
         for (const worker of workersArr) {
            let workerTokens = worker.split(' ');
            const salary = Number(workerTokens[1]);
            workersArr.push({
               name: workerTokens[0];
               salary;
            })
         } 

       } 
      );

      restaurants[name] = {
         workers,
         avarageSalary,

      }
      
   }
}