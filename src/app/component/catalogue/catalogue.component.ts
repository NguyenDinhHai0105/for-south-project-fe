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

  technologyId: string = this.route.snapshot.params['technologyId'];
  firstCatalogue!: Catalogue;
  htmlContent!: string;
  catalogueGotById!: Catalogue;
  cataloguesContainIdAndTitle: Catalogue[] = new Array;
  Editor = ClassicEditor;
  formVisible: boolean = false;
  catalogue: Catalogue = new Catalogue;


  constructor(private catalogueService: CatalogueService, private loginService: LoginService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getIdAndTitleOfCatalogues();
  }

  public getIdAndTitleOfCatalogues() {
    this.catalogueService.getTitleAndIdOfCataloguesOfATechnology(this.technologyId).subscribe(
      data => {
        this.cataloguesContainIdAndTitle = data;
        try {
          this.getCatalogueById(this.cataloguesContainIdAndTitle[0].id);
        } catch (error) {
          console.log(error);
        }        
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

  createForm() {
     // Khi nhấn vào nút, đặt giá trị formVisible thành true để hiển thị form
     this.formVisible = true;
  }

  public cancelFrom() {
    this.formVisible = false;
  }

  public addNewCatalogue() {
    this.catalogue.title = this.getTitle();
    this.catalogue.technologyId = this.technologyId;
    this.catalogueService.saveNewCatalougue(this.catalogue).subscribe(
      data => {
        this.reloadComponent();
      }
    )
    this.formVisible = false;
  }

  public getTitle() {
    var container = document.getElementById("ckediter") || new HTMLElement;
    var elements = container.querySelectorAll('h2, p');
    var contentArray = Array.from(elements).map(element => element.textContent);
    var title = contentArray[0] ? contentArray[0] : '';
    return title;
  }

  public updateForm() {
    this.catalogue.id = this.catalogueGotById.id;
    this.catalogue.technologyId = this.technologyId;
    this.catalogue.title = this.getTitle();
    this.catalogue.htmlContent = this.htmlContent;
    this.catalogueService.updateCatalogue(this.catalogue).subscribe(
      data => {
        console.log(this.catalogue);
        this.reloadComponent();
      }
    );
  }

  public reloadComponent() {
    this.ngOnInit();
  }

}
