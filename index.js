//question 3
function subjectList (studentClass){
    let scienceSubjects = 'Physics, Chemistry, Biology, Technical Drawing' 
    let socialScienceSubjects = 'Accounting, Commerce, Marketing, Geography'
    let artsSubjects = 'Government, Economics, Literature, History'
    let generalSubjects = 'English, Mathematics'

    let subject;
    if (studentClass === 'science'){
        return subject= scienceSubjects + ' , ' + generalSubjects
    } else if (studentClass==='art'){
        return subject=artsSubjects + ' , ' + generalSubjects
    }else if (studentClass==='social science'){
        return subject=socialScienceSubjects + ' , ' + generalSubjects
    }else {
        return subject=generalSubjects
    }

    //console.log(subject)

}

console.log(subjectList('art'))


//question 5
function power(num){
    const logBaseTwo = Math.log2(num);
    const roundedLog = Math.round(logBaseTwo);
    const pwr = Math.pow(2, roundedLog);

    console.log(`The number ${pwr} is the power of 2 nearest to ${num}.`);
}
power(40)
