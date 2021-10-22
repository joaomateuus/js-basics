# Functions
This topic will test our knowledge in functions and their respective co-related topics in js.

# Exercise 1: Approved Students
<li>Create a function that will receive the array "students" and a number that will represent the average grade.</li>
<li>Go through each array index checking the persons that were approved, after it populate a new array with all the approved students.</li>
<li>Use "Object Destructing" to acess/manipulate datas that you want from the array.</li> <br>

# Exercise 2
With this function <strong>CalculateAge</strong>, use the call and apply methods to change the "this" value,  manipulating it with the way that you want. <br>

<code>

    function calculateAge(years) {
        return `In ${years} years, ${this.name} will be ${
            this.age + years
        } years old.`;
    }

</code>