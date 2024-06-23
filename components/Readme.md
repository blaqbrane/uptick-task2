1. I First created a the studentInfo which is an array of objects

2. I created calculateAverageGrade function which takes in the array of studentInfo,
   maps through it and for each of the students grades, a reduce method is called which gets all the item in the array and divide their sum by the length of the array.
   Finally a new array with average grade to 2 decimal places for each student is returned

3. The topStudent function takes in an array of studentInfo. inside the function,
   the calculateAverageGrade function is called to get student information that contains the average grade, a reduce method is called on studentInfoWithAverage to get the student with the highest average. Finally an object with the highest average is returned.

4. The sortStudentByGrade takes in an array of studentInfo. the student data is sorted using sort method form the student with highest average to the student with lowest average