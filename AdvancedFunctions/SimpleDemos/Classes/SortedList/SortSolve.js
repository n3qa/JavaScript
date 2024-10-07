function sortSolve(arr, criteria){
    function splitLine(line){return line.split('|')};

    function convertToTicket(destination, price,status){
        return new Ticket(destination, Number(price),status)
    };

    return arr.map(splitLine).
                map(convertToTicket).
                map(sortMapper(criteria))
    }

    const sortMapper = {
        'destination':(a,b)=> a.destination.localCompare(b.destination),
        'price': (a,b)=> a.price - b.price;
        'status': (a,b)=> a.status.localCompare(b.status)
    } 

class Ticket {
    constructor(destination,price,status){
          this.destination = destination;
         this.price = price;
         this.status = status;
    }
}

console.log(sortSolve(
        [
            'Philadelphia|66|available',
            'New York|66.25|available',
            'Boston|187.36|sold'
        ]
    )
)