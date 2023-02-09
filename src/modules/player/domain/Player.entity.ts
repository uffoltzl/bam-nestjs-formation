export class PlayerEntity {
  constructor(params: { id: string; pseudo: string }) {
    this.id = params.id;
    this.pseudo = params.pseudo;
  }

  id: string;
  pseudo: string;
}
