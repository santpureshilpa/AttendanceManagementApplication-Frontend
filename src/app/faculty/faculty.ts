export class Faculty {

    facultyId: number;
    firstName: string;
    lastName: string;
    emailId: string;
    userName: string;
    password: string;
    dateOfBirth: Date;
    gender: string;
    mobileNo: number;
    constructor(facultyId:number,firstName: string, lastName:string, emailId:string, userName:string, password: string, dateOfBirth: Date, gender: string, mobileNo: number)
    {
        this.facultyId=facultyId;
        this.firstName=firstName;
        this.lastName=lastName;
        this.emailId=emailId;
        this.userName=userName;
        this.password=password;
        this.dateOfBirth=dateOfBirth;
        this.gender=gender;
        this.mobileNo=mobileNo;
    }
}
