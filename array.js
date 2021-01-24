
var arr = new Array(5);

//let arr1= [8,8,0,0,0,8,8,0,0]; //1,2,0,-1,0,0,-1,1,1,0,0,1

function fillArray(arr) {
    for (let i = 0; i<arr.length;i++){
        arr[i]=Math.floor(Math.random() * (100 - (-100)) + (-100));
        }

}

function replaceFromArray(arr) {
    for (let i = 0; i<arr.length;i++){
        if (arr[i]<0){
            arr[i]=0;
        }

    }

}



function addToArray(arr) {
    let clone = arr.slice(0);
    let j=0;
    
    for (let i = 0; i<clone.length;i++){

        if (i%2==0){
            if (clone[i]==0){
                arr.splice((i+j+1),0,-1);
                j++;
            }
        }
    }

}

console.log(arr);
fillArray(arr);
console.log(arr);
replaceFromArray(arr);
console.log(arr);
addToArray(arr);
console.log(arr);


