export class Gift {
  readonly id: string;

  readonly name: string;

  readonly iconUrl: string;

  readonly price: number;

  readonly remaining: number;

  readonly createdAt: Date;

  constructor(args: { id: string; name: string; iconUrl: string; price: number; remaining: number; createdAt: Date }) {
    this.id = args.id;
    this.name = args.name;
    this.iconUrl = args.iconUrl;
    this.price = args.price;
    this.remaining = args.remaining;
    this.createdAt = args.createdAt;
  }
}
