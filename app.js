// Given an array of numbers: [23, 45, 67, 89, 12, 90, 44],
// find and log the second largest number without sorting
// the array.

let arr=[23, 45, 67, 89, 12, 90, 44];
let max=0;
let secondmax=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        secondmax=max;
        max=arr[i];
    }
    if(max>arr[i] && arr[i]>secondmax){
        secondmax=arr[i];
    }
    
}
console.log(secondmax);


// Write a function that takes two arrays and returns a new
// array with only the unique elements from both.
let arr1 = [1,2,3,4]
let arr2 = [3,4,5]

function uniqueElements(arr1, arr2){
    let result = [];

    let combined = arr1.concat(arr2);

    for(let i=0;i<combined.length;i++){
        if(!result.includes(combined[i])){
            result.push(combined[i]);
        }
    }

    return result;
}
console.log(uniqueElements(arr1,arr2));

// • Write a function that:
// - Calculates the average score of each student.
// - Finds the student with the highest average score.
// - Logs: “Top Student: [Name] with an average score of
// [score]”.

let students = [
{ name: 'Alice', age: 22, scores: [78, 85, 92] },
{ name: 'Bob', age: 20, scores: [88, 90, 76] },
{ name: 'Charlie', age: 21, scores: [95, 80, 85] }
];

function findTopStudent(arr){
    let topStudent = "";
    let highestAvg = 0;

    arr.forEach((student) => {

        let total = student.scores.reduce((sum, score) => sum + score, 0);
        let avg = total / student.scores.length;

        if(avg > highestAvg){
            highestAvg = avg;
            topStudent = student.name;
        }
    });

    console.log(`Top Student: ${topStudent} with an average score of ${highestAvg}`);
}

findTopStudent(students);

//for countdowm timer
let time = 3600; // 1 hour = 3600 seconds
let interval = null;

function updateDisplay(){
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if(seconds < 10){
        seconds = "0" + seconds;
    }

    document.getElementById("timer").innerText =
        minutes + ":" + seconds;
}

function startTimer(){
    if(interval !== null) return;

    interval = setInterval(function(){

        if(time > 0){
            time--;
            updateDisplay();
        }else{
            clearInterval(interval);
            interval = null;
            document.getElementById("message").innerText =
                "Time is up!";
        }

    },1000);
}

function pauseTimer(){
    clearInterval(interval);
    interval = null;
}

function resetTimer(){
    clearInterval(interval);
    interval = null;
    time = 3600;
    document.getElementById("message").innerText = "";
    updateDisplay();
}

updateDisplay();
