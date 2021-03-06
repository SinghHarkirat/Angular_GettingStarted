import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { StarRatingComponent } from '../shared/star.component';
import { ProductDetailComponent } from './product-detail.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe,
    ProductDetailComponent
  ],
  imports: [
 
    HttpClientModule,
    RouterModule.forChild([
      {path:'products',component:ProductListComponent},
      {
        path:'products/:id',
        component:ProductDetailComponent,
        canActivate:[ProductDetailGuard]
      },
    ]),
    SharedModule
  ]
})
export class ProductModule { }
