import { InPostDetails } from './InPostDetails';

export class InPost {
    id: string;
    code: string;
    updated_at: string;
    service: string;
    expected_flow: any;
    tracking_number: string;
    created_at: string;
    tracking_details: InPostDetails[];
    type: string;
    status: string;
    custom_attributes: string;
}