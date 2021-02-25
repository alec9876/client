import { User } from './user';

export class UserParams {
  minAge = 18;
  maxAge = 99;
  pageNumber = 1;
  pageSize = 5;
  orderBy = 'lastActive';

  constructor(user: User) {
    this.minAge = 18;
    this.maxAge = 99;
    this.pageNumber = 1;
    this.pageSize = 5;
    this.orderBy = 'lastActive';
  }
}
