import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

//  Service 
import { EmpleadoService } from '../../../services/empleado.service';
// Class
import { Empleado } from '../../../models/empleado';
// toastr
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  constructor(
    public empleadoService: EmpleadoService,
    public toastr: ToastrService
  ) { }

// Cuando se levanta la aplicacion, llama al metodo del servicio firebase para traer los productos
  ngOnInit() {
    this.empleadoService.getEmpleados();
    this.resetForm();
  }

  // Recibe un formulario del tipo NgForm, lo envia a guardar o actualizar , invocando el servicio Firebase
  // lo termina limpiando resetForm
  onSubmit(empleadoForm: NgForm) {
    if (empleadoForm.value.$key == null)    
      this.empleadoService.insertEmpleados(empleadoForm.value);
    else

      this.empleadoService.updateEmpleados(empleadoForm.value);

    this.resetForm(empleadoForm);
    this.toastr.success('Sucessful Operation', 'Product Registered');
  }

  // Para limpiar el formulario
  resetForm(empleadoForm?: NgForm) {
    if (empleadoForm != null)
    empleadoForm.reset();
    this.empleadoService.selectedEmpleado = new Empleado();
  }
}
