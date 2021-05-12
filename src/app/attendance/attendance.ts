export class Attendance {
    public attendanceId :number;
    public currentDate : string;
    public status:string;

    studentId : number;
    subjectId : number;


    constructor(id:number,date:string,status:string,studentId:number,subjectId:number){
        this.studentId=studentId;
        this.subjectId=subjectId;
        this.attendanceId = id;
        this.currentDate = date;
        this.status = status;
    }

  
}
