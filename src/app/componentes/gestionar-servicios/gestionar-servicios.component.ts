import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { MdbTableDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'app-gestionar-servicios',
  templateUrl: './gestionar-servicios.component.html',
  styleUrls: ['./gestionar-servicios.component.scss']
})
export class GestionarServiciosComponent  implements OnInit {

  constructor() { }

  @ViewChild(MdbTableDirective, {static: true}) mdbTable: MdbTableDirective;
  elements: any = [];
  headElements = ['Nombre de la Persona'	, 'Edad' ,	'Compañía' , 'Nombre de la Ciudad'	, 'Ciudad' , 'Eliminar'];
  searchText = '';
  previous: string;

  // tslint:disable-next-line:member-ordering
  editField: string;
    // tslint:disable-next-line:member-ordering
    personList: Array<any> = [
      { id: 1, name: 'Aurelia Vega', age: 30, companyName: 'Deepends', country: 'Spain', city: 'Madrid' },
      { id: 2, name: 'Guerra Cortez', age: 45, companyName: 'Insectus', country: 'USA', city: 'San Francisco' },
      { id: 3, name: 'Guadalupe House', age: 26, companyName: 'Isotronic', country: 'Germany', city: 'Frankfurt am Main' },
      { id: 4, name: 'Aurelia Vega', age: 30, companyName: 'Deepends', country: 'Spain', city: 'Madrid' },
      { id: 5, name: 'Elisa Gallagher', age: 31, companyName: 'Portica', country: 'United Kingdom', city: 'London' },
    ];

    awaitingPersonList: Array<any> = [
      { id: 6, name: 'George Vega', age: 28, companyName: 'Classical', country: 'Russia', city: 'Moscow' },
      { id: 7, name: 'Mike Low', age: 22, companyName: 'Lou', country: 'USA', city: 'Los Angeles' },
      { id: 8, name: 'John Derp', age: 36, companyName: 'Derping', country: 'USA', city: 'Chicago' },
      { id: 9, name: 'Anastasia John', age: 21, companyName: 'Ajo', country: 'Brazil', city: 'Rio' },
      { id: 10, name: 'John Maklowicz', age: 36, companyName: 'Mako', country: 'Poland', city: 'Bialystok' },
    ];

  @HostListener('input') oninput() {
    this.searchItems();
  }

  ngOnInit() {
/*     for (let i = 1; i <= 10; i++) {
		  this.elements.push({ id:i.toString(), first: 'Wpis' + (Math.floor(Math.random() * i * 10)).toString(), last: 'Last' + (Math.floor(Math.random() * i *10)).toString(), handle: 'Handle' + (Math.floor(Math.random() * i *10)).toString() });
		}
		  this.mdbTable.setDataSource(this.elements);
		  this.previous = this.mdbTable.getDataSource(); */
  }

  searchItems() {
/* 		const prev = this.mdbTable.getDataSource(); if (!this.searchText) {
		this.mdbTable.setDataSource(this.previous); this.elements = this.mdbTable.getDataSource(); }
		if (this.searchText) {
		this.elements =this.mdbTable.searchLocalDataByMultipleFields(this.searchText, ['first','last']);
		this.mdbTable.setDataSource(prev);
		} */
	}

    updateList(id: number, property: string, event: any) {
      const editField = event.target.textContent;
      this.personList[id][property] = editField;
    }

    remove(id: any) {
      this.awaitingPersonList.push(this.personList[id]);
      this.personList.splice(id, 1);
    }

    add() {
      if (this.awaitingPersonList.length > 0) {
        const person = this.awaitingPersonList[0];
        this.personList.push(person);
        this.awaitingPersonList.splice(0, 1);
      }
    }

    changeValue(id: number, property: string, event: any) {
      this.editField = event.target.textContent;
    }

}


