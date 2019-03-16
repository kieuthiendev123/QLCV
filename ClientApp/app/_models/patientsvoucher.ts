export class PatientsVoucher {
    id?: number;
    code?: string;
    fullName?: string;
    birthday?: Date;
    idno?: string;
    dayOfExamination?: Date;
    address?: string;
    gender?: number;
    patientCode?: string;
    voucherCode?: string;
    serviceName?: string;
    dateCreated?: Date;
    services?: [{
        id: number;
        name: string;
        price: number;
        quantity: number;
    }];
    totalPrice?: number;
    money?: number;
}