const grades: number[]=[60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60];
let accumulateGrade2:number =0;
let gradecounter1:number=0;
let ExceptionStudent1:boolean=false;

for (let i=0;i<grades.length;i++){
    const grade: number =grades[i];
   switch(grade){
    case -1:
        continue;
    case 1000:
        ExceptionStudent1=true;
        break;
    
    default:
        accumulateGrade2=accumulateGrade2+grade;

   }

if(ExceptionStudent1)
{
    console.log(`Exceptional student! Average is 100`)
}
else
{

console.log(`\Average score: ${accumulateGrade2/gradecounter1}`);
}
}
