import { PocztaPolskaDetails } from './PocztaPolskaDetails';

export class PocztaPolska {
    id: string;
    code: string;
    sendCountry: string;
    arrivalCountry: string;
    sendDate: string;
    packageType: string;
    sendPostOffice: string;
    arrivalPostOffice: string;
    deliveredFlag: string;
    events: PocztaPolskaDetails[];
    userCode: string;
}
