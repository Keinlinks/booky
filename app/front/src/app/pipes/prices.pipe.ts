import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appPrices',
  standalone: true,
})
export class PricesPipe implements PipeTransform {

  transform(value: number): string {
    return value.toLocaleString('es-ES');;
  }

}
