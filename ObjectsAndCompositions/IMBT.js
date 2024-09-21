function IMBT(inpt){

    let movies = [];
 

    for (const inptLine of inpt) {
        let currentMovie = {};
        if( inptLine.includes('addMovie')) {
            let name = inptLine.substring(9)
            currentMovie.name = name;
            movies.push(currentMovie);
        } else if (inptLine.includes(' directedBy ')){
            let [movie, director] = inptLine.split(' directedBy ');
            let myMovie = movies.find (x => x.name == movie);
        }
    }

    console.log('The End')
}
2.06
IMBT(
    [
        'addMovie Fast and Furious',
        'addMovie Godfather',
        'Inception directedBy Christopher Nolan',
        'Godfather directedBy Francis Ford Coppola',
        'Godfather onDate 29.07.2018',
        'Fast and Furious onDate 30.07.2018',
        'Batman onDate 01.08.2018',
        'Fast and Furious directedBy Rob Cohen'
        ]     
)