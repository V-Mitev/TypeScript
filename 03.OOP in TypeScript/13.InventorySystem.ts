class Product {
    private static productCount: number = 0;
    readonly id: number;
    private _name!: string;
    private _price!: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
        this.id = ++Product.productCount;
    }

    public get name(): string {
        return this._name;
    }

    private set name(name: string) {
        if (name.length === 0) {
            throw new Error('Name cannot be empty!');
        }

        this._name = name;
    }

    public get price(): number {
        return this._price;
    }

    private set price(price: number) {
        if (price <= 0) {
            throw new Error('Price must be greater than 0!');
        }

        this._price = price;
    }

    getDetails(): string {
        return `ID: ${this.id}, Name: ${this._name}, Price: $${this._price}`;
    }
}

class Inventory {
    private products: Product[];

    constructor() {
        this.products = [];
    }

    addProduct(product: Product): void {
        this.products.push(product);
    }

    listProducts(): string {
        this.products.forEach(p => console.log(p.getDetails()));
        return `Total products created: ${this.products.length}`;
    }
}

const inventory = new Inventory();
const product1 = new Product("Laptop", 1200);
const product2 = new Product("Phone", 800);

inventory.addProduct(product1);
inventory.addProduct(product2);

console.log(inventory.listProducts());

//Product.productCount = 10;
//const product3 = new Product("", 800);
//const product4 = new Product("Phone", 0);
//product3.id = 5;