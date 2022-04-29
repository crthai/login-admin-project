import { Component, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs';
import { ProductsListService } from '../../products-list.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-add',
  templateUrl: './home-add.component.html',
  styleUrls: ['./home-add.component.scss']
})
export class HomeAddComponent implements OnInit {

  form!: FormGroup;

  constructor(private service: ProductsListService,
              private fb: FormBuilder,
              private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.params
    .pipe(
      map((params:any) =>  params['id']),
      switchMap(id => this.service.loadByID(id))
    )
    .subscribe( product => this.updateForm(product));

    this.form = this.fb.group(
     {
       id: [null],
       title: [null, [Validators.required]]
     });
  }

  updateForm(product){
    this.form.patchValue({
      id: product.id,
      title: product.title
    })
  }

  public listAddItem(value: string) {
    return this.service.productListAdd(value).subscribe(
      res => this.service.productListAlert(res),
      error => error
    );
  }

}
