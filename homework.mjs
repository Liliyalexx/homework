const radius = 5;
const PI = 3.1215;
const area = PI * radius * radius;
const space = 0.8;
let plants = 80;
let week = 6;
if(space >= 0.8 && plants >= 20){
 if( week>=4){
    let fullArea = PI * radius * radius * 2;
    console.log(fullArea);
 
    if (fullArea > ((100 * 80)/100)){
        console.log("Pruned")
 } else if( fullArea > (( 100 * 50)/100 && (100 * 80)/100)){
    console.log("Monitoored");
 }else{
    console.log("Planted");
 }

}console.log(area);
 
}


