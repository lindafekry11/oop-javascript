class person{
constructor(fullName , money){
   this.fullName=fullName;
   this.money=money; }
   
   Sleep(hours){
           if(hours == 7)
               return this.sleepMood="Happy ;)";
            
            else if(hours < 7)
                return this.sleepMood="Tired !!";
            
            else if( hours > 7)
                return this.sleepMood="Lazy :'(( ";   
       }
   
       eat(meals){
           if(meals == 3)
          return this.healthRate=100;
           
           else if(meals == 2)
          return this.healthRate=75;
           
           else if(meals == 1)
           return this.healthRate=50;
           
           else
           return this.healthRate="The  health rate is undefined .. you are not a healthy person :(( ";
           }
   
       buy(items){
           return this.money-= items*10;
          }
          
   }

class Employee extends person{
    // id refers to the class employee only , not the object created
    static id =1;
    // Declares private variable
    #currentID
    #email
    #salary
constructor(name,email,isManager){
   super(name);
   this.#email=email;
   this.id++
   this.#currentID=this.id;
}
    work(hours){
        if(hours == 8)
        return this.workMood="Happy ;)";
 
        else if(hours < 8)
        return this.workMood="Lazy !!";
  
         else if( hours > 8)
         return this.workMood="Tired :'(( "; } 
     
     setSalary(salary){
        if(salary >= 1000)
        this.#salary=salary;
        else
        this.#salary=0; }  

    getID(){
      return this.#currentID;
        }
}

class Office {
    #emps
    constructor(){
     this.#emps=[];
    }
    getEmployee(empId){
        return this.#emps[Employee.getID()];
      }
    getAllEmployees(){
        return this.#emps;
    }
    hire(Employee){
      this.#emps[Employee.getID()]=Employee;
    }
    fire(empId){
      delete this.#emps[Employee.getID()];
    }
}

const off=new Office();

var addEmployee= ()=>{
    var employeeName=prompt("Enter the employee name: ");
    var employeeEmail=prompt("Enter the employee email: ");
    var employeeSalary=prompt("Enter the employee salary: ");
    var isMan=prompt("The employee is a manager? / (Y OR N)? ");
    if(isMan == "Y")
    return true;
    else
    return false;
    const emp=new Employee(employeeName, employeeEmail , isMan);
     emp.setSalary(employeeSalary);
     emp.getID();
     return emp;
}


    var op=prompt("please choose from ( add | mngr | nrml | q)");
    switch(op){
        case 'add':
          console.log(addEmployee());
          break;
        
        case 'mngr':
          var mangOp= prompt("YOU NEED TO : ( hire | fire | s: search for an emp | g: get all employees ? )");
           if(mangOp == "hire"){
              addEmployee();  }
         else if(mangOp =="fire"){
          var select=prompt("Entet employee ID: ");
          off.fire(select); }
          else if(mangOp == "s"){
           console.log(off.getEmployee(prompt("Entet employee ID: "))); }
           else{
            var nums=off.getAllEmployees();
            for( index of nums ){
                console.log("The employee ID:"+" "+index.getID());
                console.log(index);
            }
           }
           case "q":
            break;
            
    
    }
    

