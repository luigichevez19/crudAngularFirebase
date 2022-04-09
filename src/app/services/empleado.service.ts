import { Injectable } from '@angular/core';

// Firebase
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

// Model
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

    // Traer los datos de firebase
    empleadoList: AngularFireList<any>;

    // Una variable temporal, para guardar los datos seleccionados, del tipo Product
    selectedEmpleado: Empleado = new Empleado();
  
    constructor(private firebase: AngularFireDatabase) { }
  
    // Traer todos los productos desde firebase 
    getEmpleados() { // guarda los elementos en la varible 'products'
      return this.empleadoList = this.firebase.list('empleados');
    }
  
    // crear un nuevo producto  , recibiendo un parametro de tipo Product
    insertEmpleados(empleado: Empleado) {
      // agregar un dato al final de la lista, como recibe un objeto del tipo Product , puede acceder a sus propiedades
      this.empleadoList.push({
        name: empleado.name,
        area: empleado.area
      });
    }
  
    // Actualiza un producto, recibiendo un parametro de tipo Product
    updateEmpleados(empleado: Empleado) {
      // Utilizando el metodo update de firebase , se envia clave y los parametros que va actualizar 
      this.empleadoList.update(empleado.$key, {
        name: empleado.name,
        area: empleado.area
      });
    }
  
    // Elimina un producto, recibiendo como parametro la clave , utilizando el metodo remove de firebase
    deleteEmpleado($key: string) {
      this.empleadoList.remove($key);
    }
}
