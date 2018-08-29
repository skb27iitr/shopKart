import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../../product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Product } from '../../model/product';
import { DataTableResource } from 'angular5-data-table';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {

  products$;
  products: Product[];
  filteredProducts: Product[];
  subscription: Subscription

  tableResource: DataTableResource<Product>;
  items: Product[] = [];
  itemCount: number;

  constructor(private productService: ProductService,
    private route: ActivatedRoute) {
    this.subscription = productService.getAll()
      .subscribe(products => {
        this.filteredProducts = this.products = products;
        this.initializeTable(products);

      })
  }

  private initializeTable(products: Product[]) {
    this.tableResource = new DataTableResource(products);
    this.tableResource.query({ offset: 0 })
      .then(items => this.items = items);

    this.tableResource.count()
      .then(count => this.itemCount = count);
  }

  reloadItems(query){
    if(!this.tableResource) return false;
    this.tableResource.query(query)
      .then(items => this.items = items);
  }

  remove(productId) {
    console.log("productto remove" + productId)
    //this.productService.delete(productId);

  }

  filter(query: string) {

    this.filteredProducts = (query) ? this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase().trim())) : this.products;

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
  }

}
