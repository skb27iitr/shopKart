import { Product } from './../../model/product';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;
  //product : {title: string, price: number,imageUrl: string, category: string};
  //product = {};
  product = { "title": '', "price": '', "category": '', "imageUrl": ''}; 
  productId;
  constructor(
    private categories: CategoryService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) {
    this.categories$ = categories.getCategories();
    //this.product = '';

     this.productId = this.route.snapshot.paramMap.get('id');
    if (this.productId)
      productService.get(this.productId).take(1).subscribe(p => this.product = p);
    //get the url for current product
  }

  Save(product) {
    console.log("Ready to dadada itemd" + this.productId);
    if (this.productId) this.productService.update(this.productId, product);
    else this.productService.createProduct(product);
    
    this.router.navigate(['/admin/products/']);
    //console.log(product);
  }

  delete(){
    console.log("Ready to delete itemd" + this.productId);
    if(!confirm('Are you sure you want to delete this product?')) return;

    this.productService.delete(this.productId);
    this.router.navigate(['/admin/products/'])
    
    
  }

  ngOnInit() {
  }

}
