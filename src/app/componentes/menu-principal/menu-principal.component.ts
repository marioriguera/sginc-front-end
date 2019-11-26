import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.scss']
})
export class MenuPrincipalComponent implements OnInit {

/*   @Output() public childEvent = new EventEmitter(); */
  @Output() public activacionEventEmitterIncidencias = new EventEmitter();
  @Output() public activacionEventEmitterEmpresas = new EventEmitter();
  @Output() public activacionEventEmitterServicios = new EventEmitter();

  @Input() public incidencias = false;
  @Input() public empresas = false;
  @Input() public servcios = false;


/*   fireEvent() {
     if (this.flag) {
      this.flag = false;
    } else {
      this.flag = true;
    }
    this.childEvent.emit(this.flag);
  } */

  private activarPaneles(variable: boolean) {
    console.log('Variable dentro de activar paneles es: ' + variable);
    if (variable) {
      variable = false;
      console.log('Variable dentro del if activar paneles es: ' + variable);
    } else {
      variable = true;
      console.log('Variable dentro del else activar paneles es: ' + variable);
    }
    console.log('Variable dentro de activar paneles retorna : ' + variable);
    return variable;
  }

  public activarPanelIncidenciasEvent() {
    this.activacionEventEmitterIncidencias.emit(this.activarPaneles(this.incidencias));

    /* para desactivar los paneles que estan activos */
    this.activacionEventEmitterEmpresas.emit(false);
    this.activacionEventEmitterServicios.emit(false);
  }
  public activarPanelEmpresasEvent() {
    this.activacionEventEmitterEmpresas.emit(this.activarPaneles(this.empresas));

    /* para desactivar los paneles que estan activos */
    this.activacionEventEmitterIncidencias.emit(false);
    this.activacionEventEmitterServicios.emit(false);
  }
  public activarPanelServiciosEvent() {
    this.activacionEventEmitterServicios.emit(this.activarPaneles(this.servcios));

    /* para desactivar los paneles que estan activos */
    this.activacionEventEmitterEmpresas.emit(false);
    this.activacionEventEmitterIncidencias.emit(false);
  }

  constructor() { }

  ngOnInit() {
  }

}
