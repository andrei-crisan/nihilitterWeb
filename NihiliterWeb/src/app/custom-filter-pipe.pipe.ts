import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFilterPipe'
})
export class CustomFilterPipePipe implements PipeTransform {

  transform(value: any, filterString: string) {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const users = [];
    for (const user of value) {
      if (user['firstName'] === filterString || user['lastName'] === filterString) {
        users.push(user)
      }
    }
    return users;
  }
}
