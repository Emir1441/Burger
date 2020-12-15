import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit {

  form: FormGroup 
  submited = false
  constructor(
    private productServ: ProductService
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      type: new FormGroup(null, Validators.required),
      title: new FormGroup(null, Validators.required),
      photo: new FormGroup(null, Validators.required),
      info: new FormGroup(null, Validators.required),
      price: new FormGroup(null, Validators.required),
    })
  }

  submit() {
    if (this.form.invalid) {
      return
    }
    const product = {
      type: this.form.value.type,
      title: this.form.value.title,
      photo: this.form.value.photo,
      info: this.form.value.info,
      price: this.form.value.price,
      date: new Date()
    }
    console.log(this.form)
    this.productServ.create(product).subscribe(res => console.log(res))
  }

}
