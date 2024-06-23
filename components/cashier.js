const studentInfo = [
    {
        id:1,
        name:'Ebere',
        grades:[20,30]
    },
    {
        id:2,
        name:'Chinaza',
        grades:[30,40]
    },
    {
        id:3,
        name:'Sunday',
        grades:[44,57]
    }
]


function calculateAverageGrade(studentArray){
   const studentAverage = studentArray.map(student => {
    const average = student.grades.reduce((a,b) => a + b, 0) / student.grades.length
    return {...student, average:average.toFixed(2)}
   })
  return studentAverage
    
}
calculateAverageGrade(studentInfo)

function topStudent(studentData){
    let studentInfoWithAverage = calculateAverageGrade(studentData)
    const studentWithHighMark = studentInfoWithAverage.reduce((a,b) => a.average > b.average ? a : b)
    return studentWithHighMark
}
topStudent(studentInfo)

function sortStudentByGrade(studentData){
    let studentInfoWithAverage = calculateAverageGrade(studentData) 
    const sortedStudent = studentInfoWithAverage.sort((a,b) => b.average - a.average)
    return sortedStudent
}

sortStudentByGrade(studentInfo)