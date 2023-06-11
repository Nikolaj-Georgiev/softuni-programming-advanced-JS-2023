function ticketCreator(input, sortingCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let result = [];

    const sorter = {
        destination(arr) {
            arr.sort((a, b) => a.destination.localeCompare(b.destination));
            return arr;
        },
        price(arr) {
            arr.sort((a, b) => a.price - b.price);
            return arr;
        },
        status(arr) {
            arr.sort((a, b) => a.status.localeCompare(b.status));
            return arr;
        }
    }

    input.forEach(element => {
        const ticket = new Ticket(...element.split('|'));
        result.push(ticket);
    });

    result = sorter[sortingCriteria](result);
    console.log(result);
}

ticketCreator(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
);