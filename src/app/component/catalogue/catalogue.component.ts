import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
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
  firstCatalogue!: Catalogue;
  htmlContent!: string;
  catalogueGotById!: Catalogue;
  cataloguesContainIdAndTitle!: Catalogue[];
  Editor = ClassicEditor;


  constructor(private catalogueService: CatalogueService, private loginService: LoginService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.technologyId = this.route.snapshot.params['technologyId'];
    this.getIdAndTitleOfCatalogues();
  }

  public getIdAndTitleOfCatalogues() {
    this.catalogueService.getTitleAndIdOfCataloguesOfATechnology(this.technologyId).subscribe(
      data => {
        this.cataloguesContainIdAndTitle = data;
        this.getCatalogueById(this.cataloguesContainIdAndTitle[0].id);
      }
    )
  }

  get isAdmin() {
    return this.loginService.checkRoles;
  }

  public getCatalogueById(catalogueId: string) {
    this.catalogueService.getCatalogueById(catalogueId).subscribe(
      data => {
        this.catalogueGotById = data;
        this.htmlContent = this.catalogueGotById.htmlContent;
      }
    )
  }

}
