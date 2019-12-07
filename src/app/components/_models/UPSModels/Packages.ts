import { PackageWeight } from './PackageWeight';
import { ReferenceNumber_ } from './ReferenceNumber_';
import { Activity } from './Activity';

export class Packages {
    trackingNumber: string;
    activity: Activity[];
    packageWeight: PackageWeight;
    referenceNumber: ReferenceNumber_;
    additionalProperties: any;
}