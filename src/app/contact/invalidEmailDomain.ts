import { AbstractControl, ValidationErrors } from "@angular/forms";

export function invalidEmailDomain(control: AbstractControl) : ValidationErrors | null {
  const value = control.value?.toLowerCase();
  const hosts = ['example.com', 'test.com', 'demo.com'];
  if (!value || typeof value !== 'string') {
    return null; // No validation error if value is empty or not a string
  }

  const matches = hosts.some(host => value.indexOf(`@${host}`) > -1);

  return matches ? { invalidEmailDomain : true } : null; // Return error if domain matches, otherwise return null
}