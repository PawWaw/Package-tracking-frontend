import { FedexDetails } from './FedexDetails';

export class Fedex {
    id: string;
    code: string;
    userCode: string;
    size: number;
    completedTrackDetails: FedexDetails[];
}