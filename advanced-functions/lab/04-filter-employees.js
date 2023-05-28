function filter(data, criteria) {
    let counter = 0;
    let inputDataArr = JSON.parse(data);
    let criteriaArr = criteria.split('-');

    let checker = (criteriaArr, obj) => {
        if (obj[criteriaArr[0]] === criteriaArr[1]) {
            return obj;
        }
    }

    let print = (obj) => console.log(`${counter}. ${obj.first_name} ${obj.last_name} - ${obj.email}`);

    inputDataArr.forEach(element => {
        if(checker(criteriaArr, element)) {
            print(element);
            counter++;
        }
    });
}

filter(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female'
);