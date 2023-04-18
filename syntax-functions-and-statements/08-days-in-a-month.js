function daysInAMonth(month, year) {

    const localDate = new Date(year, month, 0);

    console.log(localDate.getDate());


}

daysInAMonth(1, 2012);
daysInAMonth(2, 2021);