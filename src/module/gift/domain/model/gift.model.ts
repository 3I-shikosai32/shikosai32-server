export class Gift {
  readonly id: string;

  readonly name: string;

  readonly iconUrl: string;

  readonly price: number;

  readonly remaining: number;

  constructor(args: { id: string; name: string; iconUrl: string; price: number; remaining: number }) {
    this.id = args.id;
    this.name = args.name;
    this.iconUrl = args.iconUrl;
    this.price = args.price;
    this.remaining = args.remaining;
  }
}
