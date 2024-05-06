const radius = 5;
const PI = 3.1215;
const area = PI * radius * radius;
const space = 0.8;
let plants = 20;
let plantsAfterWeek = 20 * 2;
// let fullArea = space * plants * plantsAfterWeek;
    if (plantsAfterWeek > 0.8 * area){
        console.log("Pruned")
 } else if( plantsAfterWeek >= 0.5 * area && plantsAfterWeek<=0.8 * area){
    console.log("Monitored");
 }else{
    console.log("Planted");
 }

 



