import { FedexDates } from './FedexDates';
import { FedexAddress } from './FedexAddress';

export class FedexDetails {
    trackingNumber: string;
    trackingNumberUniqueIdentifier: string;
    carrierCode: string;
    operatingCompanyOrCarrierDescription: string;
    packageSequenceNumber: string;
    packageCount: string;
    datesOrTimes: FedexDates[];
    destinationAddress: FedexAddress;
    deliveryAttempts: string;
    totalUniqueAddressCountInConsolidation: string;
}