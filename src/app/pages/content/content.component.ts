import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  @Input()
  photoCover:string="https://disneyplusbrasil.com.br/wp-content/uploads/2021/03/Tony-Stark-Cancelado.jpg"
  @Input()
  contentTitle:string=""
  @Input()
  contentDescription:string="Olá mundo!"

  private id:string | null ="0"

  constructor(private route:ActivatedRoute){
    
  }

  ngOnInit() {
    this.route.paramMap.subscribe( value =>
      this.id= value.get("id")
    )
    this.setValuesparaComponente(this.id)
  }

  setValuesparaComponente(id:string|null){
    const result = dataFake.filter(article=>article.id==id)[0]

    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photocover
  }
}


