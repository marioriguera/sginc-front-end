import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-trabajo',
  templateUrl: './area-trabajo.component.html',
  styleUrls: ['./area-trabajo.component.scss']
})
export class AreaTrabajoComponent implements OnInit {

/*   flag = false;
  mensaje: string;

  menuIncidencias(confirmation: boolean) {
    this.flag = confirmation;

    if (this.flag) {
      this.mensaje = 'Area de trabajo funciona';
    }

    console.log(this.flag);
    console.log(this.mensaje);

  } */

  public flag_incidencias = false;
  public flag_servicios = false;
  public flag_empresas = false;
  constructor() { }

  ngOnInit() {
  }

}
