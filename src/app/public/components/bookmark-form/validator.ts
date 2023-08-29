import { AbstractControl, ValidatorFn } from '@angular/forms';

// Custom validator function for valid URL format
export function validUrlFormat(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.value) {
      return null;  // No need to validate if the value is empty
    }

    // Regular expression to match URL format
    const urlPattern = /^(http(s)?:\/\/)?(www\.)?[a-zA-Z0-9\-\.]+\.[a-z]{2,}(\/.*)?$/;

    if (urlPattern.test(control.value)) {
      return null;  // Valid URL format
    } else {
      return { 'invalidUrlFormat': true };  // Invalid URL format
    }
  };
}