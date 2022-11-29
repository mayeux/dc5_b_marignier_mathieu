var startValue=0;
var endValue=10;
var total='';
function printAllValues(startValue,endValue){
   for(var start=startValue;start < endValue ;start++){
      total=total+start+",";
   }
}
printAllValues(startValue,endValue)
var allSequences = total.slice(0, -1);
console.log(allSequences);