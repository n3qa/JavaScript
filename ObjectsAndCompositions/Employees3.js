function employes (arr){
    let employees = [];

    class Person{
        constructor(name) {
            this.name = name,
            this.number = name.length
        }

        print(){
            return `Name ${this.name} -- Personal number: ${this.number}`
        }
    }

    arr = arr.map( x =>  new Person(x))
             .forEach(obj => {
              console.log(obj.print());
    });
 
   
    console.log('The end')
}



employes(
    [
        'Silas Butler',
        'Adnaan Buckley',
        'Juan Peterson',
        'Brendan Villarreal'
    ]
        
)