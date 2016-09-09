import * as ssnValidator from "ssn-validator"

const result : boolean = ssnValidator.isValid('011-23-4567')
const message : string = ` - Validate 011-23-4567 success: ${result}`

document.write(message);
