import { ActivityLocation } from './ActivityLocation';
import { Status } from './Status';
import { Document } from './Document';

export class Activity {
    activityLocation: ActivityLocation;
    status: Status;
    date: string;
    time: string;
    document: Document;
    additionalProperties: any;
}