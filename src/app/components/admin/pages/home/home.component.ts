import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsList } from 'module/products-list';
import { catchError, EMPTY, empty, Observable, of, Subject } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { ProductsListService } from '../../products-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products$!: Observable<ProductsList>;

  public productList: ProductsList | any;

  error$ = new Subject<boolean>();

  constructor(
    private authService: AuthService,
    private service: ProductsListService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.products$ = this.service.productList()
    .pipe(
      catchError(error => {
        console.log(error);
        this.error$.next(true);
        return empty();
      })
    );

    this.service.productList()
    .pipe(
      catchError(error => empty())
    )
    .subscribe(
      dados => {
        console.log(dados);
      },
      error => console.error(error)
    )


    this.service.productList().subscribe(
      res => this.productList= res,
      error => error
    );

    this.service.emitEvent.subscribe(
      res => {alert(`Olá, você adicionou um item suuper secreto! O item foi : ${res.title}`);
              return this.productList.push(res)}
    );
  }

  public logout(){
    this.authService.logout();
  }

  public productListEdit(value: string, id: number){
    this.service.productListEdit(value,id).subscribe(
      res => {
        return console.log(res)
      },
      error => error
    )

  }

  public productListDelete(id: number){
    return this.service.productListDelete(id).subscribe(
      res => {
        this.productList = this.productList.filter(
          item => {
            return id !== item.id
          }
        )
      },
      error => error
    )
  }
}
