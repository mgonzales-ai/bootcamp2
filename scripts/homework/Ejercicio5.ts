const grades1 : number[]=[60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60];
let countergrades:number=0;
let accumulateGrade1:number=0;
let ExceptionalStudent1:boolean=false;

for (let i=0;i<grades1.length;i++){
 const grade :number=grades1[i];
 switch(grade){
  case -1:
   continue;
  case 1000:
    ExceptionalStudent1=true;
    break;
  default:
  accumulateGrade1=accumulateGrade1+grade;

}
countergrades++;
}

if (ExceptionalStudent1){
    console.log(`Exceptional student! Average is 100`)
}
else
{

    console.log(`\Average score: ${accumulateGrade1/countergrades}`);
}
