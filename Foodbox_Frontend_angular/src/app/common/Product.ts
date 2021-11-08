import { ProductCategory } from './product-category';
export class Product{
    id!: string;
    sku!: string;
    name!: string;
    description!: string;
    unitPrice!: string;
    imageUrl!: string;
    active!: boolean;
    unitInStock!: number;
    dateCreated!: Date;
    lastUpdated!: Date;
    category!:ProductCategory;
}