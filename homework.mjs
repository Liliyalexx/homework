const radius = 5;
const PI = 3.1215;
const area = PI * radius * radius;
const space = 0.8;
let plants = 20;
let plantsAfterWeek = 20 * 2;
const fullArea = space * plantsAfterWeek;
//one week
    if (plantsAfterWeek > 0.8 * area){
        console.log("Pruned")
 } else if( plantsAfterWeek >= 0.5 * area && plantsAfterWeek<=0.8 * area){
    console.log("Monitored");
 }else{
    console.log("Planted");
 }

 //two weeks 
 const plantsAfterTwoWeeks = plants * Math.pow(2,2);
//  const fullAreaTwoWeeks = plantsAfterTwoWeeks * space;

 if(plantsAfterTwoWeeks > 0.8 * area ){
    console.log("Pruned");
 } else if(plantsAfterTwoWeeks >= 0.5 * area && plantsAfterTwoWeeks <= 0.8 * area){
    console.log("Monitored");
 } else {
    console.log("Planted");
 }

//three weeks

const plantsAfterThreeWeeks = plants * Math.pow(2,3);

if(plantsAfterThreeWeeks > 0.8 * area){
    console.log("Pruned");
     
}else if(plantsAfterThreeWeeks >= 0.5 * area && plantsAfterThreeWeeks<= 0.8 * area ){
    console.log("Monitored"); 

} else{
    console.log("Planted")
}
 /////////////////////////////////////////////////////////////////


 const plant = 100
 const weeks = 10
 const areaAfter10Days = area * 10;

 



