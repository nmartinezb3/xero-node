/**
 * Accounting API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.6
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { TaxRate } from './taxRate';

export class TaxRates {
    'taxRates'?: Array<TaxRate>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "taxRates",
            "baseName": "TaxRates",
            "type": "Array<TaxRate>"
        }    ];

    static getAttributeTypeMap() {
        return TaxRates.attributeTypeMap;
    }
}

