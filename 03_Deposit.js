function deposit (input){
    let depositSum = Number(input[0]);
    let depositQarter = Number(input[1]);
    let yearPersent = Number(input[2]);
    let persentage = depositSum*(yearPersent/100);
    let persentagePerMont = persentage/12;
    let finalSum = depositSum+depositQarter*persentagePerMont;
    console.log(finalSum);
}

deposit (["200 ", "3 ", "5.7 "])
