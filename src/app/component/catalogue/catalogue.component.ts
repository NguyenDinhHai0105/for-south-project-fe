import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Catalogue } from 'src/app/model/catalogue';
import { CatalogueService } from 'src/app/service/catalogue.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  technologyId!: string;
  catalogues!: Catalogue[];
  catalogues2!: Catalogue[];

  constructor(private catalogueService: CatalogueService, private loginService: LoginService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.technologyId = this.route.snapshot.params['technologyId'];
    this.getIdAndTitleOfCatalogues();
    this.getCatalogues();
  }

  public getIdAndTitleOfCatalogues() {
    this.catalogueService.getTitleAndIdOfCataloguesOfATechnology(this.technologyId).subscribe(
      data => {
        this.catalogues = data;
        // console.log(this.catalogues);
      }
    )
  }

  public getCatalogues() {
    this.catalogueService.getCataloguesOfATechnology(this.technologyId).subscribe(
      data => {
        this.catalogues2 = data;
        // console.log(this.catalogues2);
      }
    )
  }

}
