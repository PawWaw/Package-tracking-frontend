import { ShipmentType } from './ShipmentType';
import { InquiryNumber } from './InquiryNumber';
import { Service } from './Service';
import { ReferenceNumber } from './ReferenceNumber';
import { _Package } from './_Package';

export class Shipment {
    inquiryNumber: InquiryNumber;
    shipmentType: ShipmentType;
    shipperNumber: string;
    service: Service;
    referenceNumber: ReferenceNumber;
    pickupDate: string;
    _package: _Package;
    additionalProperties: any;
    
}