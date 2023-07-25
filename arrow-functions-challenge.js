let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'maths','english', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon'},
        results: {science: 93, maths: 95, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 79, art: 95},
    }
];


const averagePoints = (arr,subject) => {
    let averageMarks = 0;
    let subjCount = 0;
    for (let i = 0; i < arr.length; i+=1){
        for(let x = 0; x < arr[i].subjects.length; x+=1){
            if(arr[i].subjects[x] === subject){
                averageMarks += arr[i].results[subject];
                subjCount +=1;
            }
        }
    };
    return averageMarks /= subjCount;
}

let points = averagePoints(students,'science');

console.log(points);