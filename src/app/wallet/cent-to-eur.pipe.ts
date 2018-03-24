import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'centToEur'})
export class CentToEurPipe implements PipeTransform {
  transform(cents: number): string {
    let eur = (cents/100).toFixed(2);
    return '€ '+eur.toString();
  }
}