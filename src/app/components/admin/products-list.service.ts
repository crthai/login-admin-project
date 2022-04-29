import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { ProductsList } from 'module/products-list';
import { delay, Observable, Subject, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsListService {


//eventEmitter
  public emitEvent = new EventEmitter();

  private readonly url: string = "http://localhost:8000/"; //products

  constructor(private http: HttpClient) {
  }

//CRUD
//GET
  public productList(): Observable<ProductsList>{
    return this.http.get<ProductsList>(`${this.url}products`)
                    .pipe(
                      tap(console.log)
                    )
  }

  loadByID(id){
    return this.http.get(`${this.url}/${id}`).pipe(take(1));
  }
//POST

  public productListAdd(value: string): Observable<ProductsList> {
    return this.http.post<ProductsList>(`${this.url}products`, { title: value }).pipe(take(1));
  }

//PUT
  public productListEdit(value: string, id: number): Observable<ProductsList> {
    return this.http.put<ProductsList>(`${this.url}products/${id}`, { title: value }).pipe(
      res => res,
      error => error
    )
  }

//DELETE
  public productListDelete( id: number): Observable<ProductsList> {
    return this.http.delete<ProductsList>(`${this.url}products/${id}`).pipe(
      res => res,
      error => error
    )
  }

//ALERT
  public productListAlert(value: ProductsList) {
    return this.emitEvent.emit(value);
  }
}




//app
//  features
//          login
//              screens
//              component          admin
//                screens
//              components
