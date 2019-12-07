import { ShipmentType } from './ShipmentType';
import { InquiryNumber } from './InquiryNumber';
import { Service } from './Service';
import { ReferenceNumber } from './ReferenceNumber';
import { Packages } from './Packages';

export class Shipment {
    inquiryNumber: InquiryNumber;
    shipmentType: ShipmentType;
    shipperNumber: string;
    service: Service;
    referenceNumber: ReferenceNumber;
    pickupDate: string;
    package: Packages;
    additionalProperties: any;
}