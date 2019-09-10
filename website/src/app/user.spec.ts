import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let user = new User({
      firstName: 'Miao',
      lastName: 'Shan'
    });
    expect(user.firstName).toEqual('Miao');
    expect(user.lastName).toEqual('Shan');
  });
});
