function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {

      const bestRestOutput = document.querySelector('div#outputs div#bestRestaurant p');
      const bestRestaurantWorkers = document.querySelector('div#outputs div#workers p');
      const inputValue = document.querySelector('div#inputs textarea').value;
      if (inputValue === '') {
         return;
      }
      const restaurantsData = JSON.parse(inputValue);

      if (restaurantsData.length === 0) {
         return;
      }

      const restaurants = {};
      restaurantsData.forEach(rest => {
         const [restaurantName, workers] = rest.split(' - ');
         const workersAndSalaries = workers.split(', ');

         if (!restaurants[restaurantName]) {
            restaurants[restaurantName] = {};
         }
         workersAndSalaries.forEach(worker => {
            const [workerName, salary] = worker.split(' ');
            restaurants[restaurantName][workerName] = Number(salary);
         });
      });

      const [bestRestaurant, avgSalary, bestSalary] = checkForBestRestaurant(restaurants);
      bestRestOutput.textContent = `Name: ${bestRestaurant} Average Salary: ${avgSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;

      const workerOutput = generateWorkerOutput(restaurants[bestRestaurant]);
      bestRestaurantWorkers.textContent = workerOutput;

      function checkForBestRestaurant(restaurants) {
         let avgSalary = 0;
         let bestSalary = 0;
         let bestRestaurant = '';

         for (const restaurant of Object.keys(restaurants)) {
            const workersSalaries = Object.values(restaurants[restaurant]);
            let localSalarySum = 0
            let localBest = 0;
            for (const workerSalary of workersSalaries) {
               localSalarySum += workerSalary;
               if (localBest === 0 || localBest < workerSalary) {
                  localBest = workerSalary;
               }
            }
            let localAverage = localSalarySum / workersSalaries.length;
            if (avgSalary === 0 || avgSalary < localAverage) {
               avgSalary = localAverage;
               bestSalary = localBest;
               bestRestaurant = restaurant;
            }
         }
         return [bestRestaurant, avgSalary, bestSalary];
      }

      function generateWorkerOutput(workers) {
         let sortedWorkers = Object.entries(workers).sort((a, b) => b[1] - a[1]);
         let result = '';
         sortedWorkers.forEach(w => result += `Name: ${w[0]} With Salary: ${w[1]} `);
         return result;
      }
   }
}