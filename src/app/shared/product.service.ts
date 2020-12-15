import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { FbResponse, Product } from './interfaces';
import { identity } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  create(product) {
    return this.http.post(`${environment.fbDbUrl}/products.json`, product)
    .pipe(map( (res: FbResponse) => {
      return {
        ...product,
        id: res.name,
        date: new Date(product.date)
      }
    }))
  }

  remove(id) {
    return this.http.delete(`${environment.fbDbUrl}/products/${id}.json`)
  }

  update(product: Product) {
    return this.http.patch(`${environment.fbDbUrl}/products/${product.id}.json`, product)
  }
}
