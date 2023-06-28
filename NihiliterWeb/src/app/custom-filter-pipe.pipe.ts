import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/models/user';

@Pipe({
  name: 'customFilterPipe'
})
export class CustomFilterPipePipe implements PipeTransform {

  transform(value: User[], filterString: string): User[] {
    if (!value || value.length === 0 || !filterString) {
      return [];
    }
    const normalizedFilter = filterString.toLowerCase();
    return value.filter((user: User) => {
      const firstName = user.firstName.toLowerCase();
      const lastName = user.lastName.toLowerCase();
      return firstName.includes(normalizedFilter) || lastName.includes(normalizedFilter);
    });
  }
}
