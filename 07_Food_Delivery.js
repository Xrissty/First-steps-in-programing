function foodDelivery (input){
    let chikenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let veganMenu = Number(input[2]);
    let chiken= 10.35;
    let fish = 12.40;
    let vegan = 8.15;

    let chikenPrice = chikenMenu*chiken;
    let fishPrice = fishMenu*fish;
    let veganPrice = veganMenu*vegan;
    let sum = chikenPrice+fishPrice+veganPrice;
    let desert = sum*0.2;
    let finalSum = sum+desert+2.50;
    console.log(finalSum);
}
foodDelivery(["9 ",
"2 ",
"6 "]
)








