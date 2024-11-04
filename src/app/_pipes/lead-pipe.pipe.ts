import { Pipe, PipeTransform } from '@angular/core';
import { Lead } from '../_models/lead';

@Pipe({
  name: 'leadPipe',
  standalone: true,
  pure: false,
})
export class LeadPipePipe implements PipeTransform {
  transform(items: Lead[], accepted: boolean): Lead[] {
    if (!items) {
      return items;
    }
    return items.filter((item) => item.accepted === accepted);
  }
}
