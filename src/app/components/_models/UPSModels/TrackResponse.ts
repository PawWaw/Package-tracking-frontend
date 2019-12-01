import { Shipment } from './Shipment';
import { Response_ } from './Response_';

export class TrackResponse {
    response: Response_;
    shipment: Shipment[];
    disclaimer: string;
    additionalProperties: any;
}