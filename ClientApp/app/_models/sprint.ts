export class Sprint {
    Id: number;
    codeSprint:string;
    idProject: number;
    nameSprint:string;
    startDate: Date;
    endDate: Date;
    timeExtension?: Date;
    statusSprint?: number;
    note?: string;
}