export class Student{
    studentId : number;
    firstName : string;
    lastName : string;
    dateOfBirth : string;
    gender : string;
    mobileNumber : string;
    semester : string;
    emailId : string
    fatherEmailId : string;
    fatherMobileNumber : string;

    constructor(studentId:number, firstName:string, lastName:string, dateOfBirth:string,
        gender:string, mobileNumber:string, semester:string, emailId:string, 
        fatherEmailId:string, fatherMobileNumber:string)
        {
            this.studentId = studentId ;
            this.firstName = firstName;
            this.lastName  = lastName;
            this.dateOfBirth = dateOfBirth;
            this.gender = gender;
            this.mobileNumber = mobileNumber;
            this.semester = semester;
            this.emailId = emailId;
            this.fatherEmailId = fatherEmailId;
            this.fatherMobileNumber = fatherMobileNumber;

        }

}