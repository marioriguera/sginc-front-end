import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-incidencias',
  templateUrl: './mis-incidencias.component.html',
  styleUrls: ['./mis-incidencias.component.scss']
})
export class MisIncidenciasComponent implements OnInit {

  elementsPendientes: any = [
    {
      id: 1, heading1: 'Cell',
      heading2: 'Cell',
      heading3: 'Cell',
      heading4: 'Cell',
      heading5: 'Cell'
    },
    {
      id: 2, heading1: 'Cell',
      heading2: 'Cell',
      heading3: 'Cell',
      heading4: 'Cell',
      heading5: 'Cell'
    },
    {
      id: 3, heading1: 'Cell',
      heading2: 'Cell',
      heading3: 'Cell',
      heading4: 'Cell',
      heading5: 'Cell'
    },
  ];
  headElementsPendientes = ['#', 'Estado', 'Usuario', 'Usuario Asignado', 'Fecha', 'Nota'];

  elementsAsignadas: any = [
    {
      id: 1, heading1: 'Cell',
      heading2: 'Cell',
      heading3: 'Cell',
      heading4: 'Cell',
      heading5: 'Cell'
    },
    {
      id: 2, heading1: 'Cell',
      heading2: 'Cell',
      heading3: 'Cell',
      heading4: 'Cell',
      heading5: 'Cell'
    },
    {
      id: 3, heading1: 'Cell',
      heading2: 'Cell',
      heading3: 'Cell',
      heading4: 'Cell',
      heading5: 'Cell'
    },
  ];
  headElementsAsignadas = ['#', 'Estado', 'Usuario', 'Usuario Asignado', 'Fecha', 'Nota'];

  elementsCerrada: any = [
    {
      id: 1, heading1: 'Cell',
      heading2: 'Cell',
      heading3: 'Cell',
      heading4: 'Cell',
      heading5: 'Cell'
    },
    {
      id: 2, heading1: 'Cell',
      heading2: 'Cell',
      heading3: 'Cell',
      heading4: 'Cell',
      heading5: 'Cell'
    },
    {
      id: 3, heading1: 'Cell',
      heading2: 'Cell',
      heading3: 'Cell',
      heading4: 'Cell',
      heading5: 'Cell'
    },
  ];
  headElementsCerrada = ['#', 'Estado', 'Usuario', 'Usuario Asignado', 'Fecha', 'Nota'];

  elements: any = [
    {id: 1, first: 'Mark', last: 'Otto', handle: '@mdo'},
    {id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat'},
    {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
  ];

  headElements = ['ID', 'First', 'Last', 'Handle'];


  constructor() { }

  optionsSelect: Array<any>;
  ngOnInit() {
    this.optionsSelect = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
      ];
    }

}
