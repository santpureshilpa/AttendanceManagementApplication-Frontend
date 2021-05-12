export class Subject{
    subjectId : number;
    subjectName : string;
    subjectSemester : string;
    description : string;

    constructor(subjectId:number, subjectName:string, subjectSemester:string, description:string)
    {
        this.subjectId=subjectId;
        this.subjectName=subjectName;
        this.subjectSemester=subjectSemester;
        this.description=description;
    }

}