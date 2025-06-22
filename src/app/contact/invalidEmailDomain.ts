import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function createInvalidDomainValidator(hosts: string[]) : ValidatorFn {
  return (control: AbstractControl) : ValidationErrors | null => {
    const value = control.value?.toLowerCase();
    if (!value || typeof value !== 'string') {
      return null; // No validation error if value is empty or not a string
    }
  
    const matches = hosts.some(host => value.indexOf(`@${host}`) > -1);
  
    return matches ? { invalidEmailDomain : true } : null; // Return error if domain matches, otherwise return null
  }
}