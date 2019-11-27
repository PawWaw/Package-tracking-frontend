import { DHLEvent } from './DHLEvent';

export class DHL {
    id: string;
    code: string;
    userCode: string;
    received_by: string;
    events: DHLEvent;
    status: string;
}