function basketballEqup (input){
    let yearTraining = Number(input[0]);
    let snikers = yearTraining - (yearTraining*0.40);
    let outfit = snikers -(snikers*0.20);
    let ball = outfit/4;
    let acess = ball/5;
let sum = yearTraining+snikers+outfit+ball+acess;
console.log(sum);
}

basketballEqup(["550 "])