import { Type } from './Type';
import { Format } from './Format';

export class Document {
    type: Type;
    content: string;
    format: Format;
    additionalProperties: any;
}