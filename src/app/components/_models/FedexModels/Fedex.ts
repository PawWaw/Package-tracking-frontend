import { CompletedTrackDetails} from './CompletedTrackDetails';

export class Fedex {
    id: string;
    code: string;
    userCode: string;
    size: number;
    completedTrackDetails: CompletedTrackDetails[];
}