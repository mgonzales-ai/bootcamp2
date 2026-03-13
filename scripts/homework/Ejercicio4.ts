const notes: number[]=[100,45,89,-1,80];
let accumulateGrade:number =0;
let gradecounter:number=0;
let ExceptionStudent:boolean=false;

for (let i=0;i<notes.length;i++){
    const note: number =notes[i];
    if(note==-1){
        continue;
    }else if( note==1000){
        break;
        ExceptionStudent = true;

    }
    else{
        accumulateGrade=accumulateGrade+note;
    }

    if (ExceptionStudent) break;
    gradecounter++;
}
if (ExceptionStudent){
console.log(`Exceptional student! Average is 100!`);
}else{
console.log(`\Average score: ${accumulateGrade/gradecounter}`);
}

