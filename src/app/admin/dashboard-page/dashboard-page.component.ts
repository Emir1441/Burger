import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  products = []
  pSub: Subscription
  constructor(
    private productServ: ProductService
  ) { }

  ngOnInit() {}
  //  this.pSub = this.productServ.getAll().subscribe( product => {
  // //     this.products = products
  //   })
  // }

  // ngOnDesroy() {
  //   if(this.pSub) {
  //     this.pSub.unsubscribe()
  //   }
  // }

}
