//Here is an array with all datas we need to create our function
const students = [ 
	{
		name: 'João Mateus',
		grade: 10,
		class: '1B',
	},
	{
		name: 'Sofia',
		grade: 9,
		class: '1B',
	},
	{
		name: 'Paulo',
		grade: 6,
		class: '2C',
	},
    {
		name: 'Mariazinha',
		grade: 7,
		class: '2C',
	},
    {
		name: 'Thiago',
		grade: 4,
		class: '2C',
	},
    {
		name: 'Mateus',
		grade: 4,
		class: '2C',
	},
];

function checkingApproved (students, average) {
//Here is an array that will receive our approved students
let approveds = [];
let disapproved = [];
//This is the loop that will run over our "Data Array" 
    for (let i = 0; i < students.length; i++) {
        //We created a object destruction to get acess into the array datas
        let {name, grade} = students[i];
        //Here is the condicional sentece that checks if the person was approved
        if (grade >= average) {
            //if its we add the name in our array that receives approved persons
            approveds.push(name);
         } else {
            disapproved.push(name)
         }

    }
//Here returns the array 
    return `Congrats to our approved students: ${approveds}
And good luck next time to the others: ${disapproved}`
}

console.log(checkingApproved(students, 7));




