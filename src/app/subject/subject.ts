export class Subject 
{
    subjectId:number;
    courseId:number;
    facultyId:number;
    subjectName:string;
    description:string;
    subjectSemester:string;

    constructor(subjectId:number,courseId:number,facultyId:number,subjectName:string,
        description:string,subjectSemester:string)
    {
        this.subjectId=subjectId;
        this.courseId=courseId;
        this.facultyId=facultyId;
        this.subjectName=subjectName;
        this.description=description;
        this.subjectSemester=subjectSemester;
    }
}
