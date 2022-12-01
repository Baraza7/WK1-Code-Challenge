//Challenge 1: Student Grade Generator (Toy Problem)
/*Write that prompts the user to input student marks. The input should be between 0 and 100. 
Then output the correct grade: 
A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.*/




    
let a = window.prompt ("Input your marks");

let studentMark = parseInt(a);


switch(true)
    {
         case studentMark < 40:
            document.write("Grade E");
            break;
            
        case studentMark < 49 && studentMark >= 59:
            document.write("Grade D");
            break;   
        
        case studentMark < 79 && studentMark >= 60:
            document.write("Grade C");
            break;
            
        case grade < 100 && grade >= 79:
            document.write("Grade A");
            break;
            
            
         default:
            document.write("Mark Not Valid"); 
    }

    