export class UserEntity {
  constructor(params: { id: string; username: string }) {
    this.id = params.id;
    this.username = params.username;
  }

  id: string;
  username: string;
}
