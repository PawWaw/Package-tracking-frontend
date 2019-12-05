import { datesOrTimes } from './datesOrTimes';
import { FedexAddress } from './FedexAddress';

export class CompletedTrackDetails {
    trackingNumber: string;
    trackingNumberUniqueIdentifier: string;
    carrierCode: string;
    operatingCompanyOrCarrierDescription: string;
    packageSequenceNumber: string;
    packageCount: string;
    datesOrTimes: datesOrTimes[];
    destinationAddress: FedexAddress;
    deliveryAttempts: string;
    totalUniqueAddressCountInConsolidation: string;
}