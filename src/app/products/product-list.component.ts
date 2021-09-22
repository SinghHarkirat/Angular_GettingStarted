import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']

})
export class ProductListComponent implements OnInit, OnDestroy {
  errorMessage: any;
  sub!: Subscription;
  constructor(private _productService: ProductService) {
  }

  products: IProduct[] = [];
  ngOnInit(): void {

    this.sub=this._productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: (err) => this.errorMessage = err
    });


  }
  filteredProducts: IProduct[] = [];
  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In setter:', value);
    this.filteredProducts = this.performFilter(value);

  }
  pageTitle: string = "Product List";
  imgWidth = 50;
  imgMargin = 2;
  filterText = 'cart';
  showImage: boolean = false;



  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLowerCase().includes(filterBy));

  }
  onRatingClicked(message: string) {
    console.log(message);
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
