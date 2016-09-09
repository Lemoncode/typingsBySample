

/*
declare module "ssn-validator" {
    export function isValid(value : string) : boolean;
    export function mask(value : string) : string;
}
*/

declare namespace SsnValidator {
  export interface SsnValidatorStatic {
    isValid(value : string) : boolean;
    mask(value : string) : string;
  }
}

declare var ssnValidator : SsnValidator.SsnValidatorStatic;

declare module "ssn-validator" {
  export = ssnValidator;
}
