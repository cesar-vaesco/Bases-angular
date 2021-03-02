# Bases

## Despliegue de aplicación

App desplegada en netlify -> [link](https://elegant-visvesvaraya-63d82a.netlify.app/)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

Ejecute `ng build` para construir el proyecto. Los artefactos de construcción se almacenarán en el directorio `dist /`. Utilice la marca `--prod` para una compilación de producción.

Para subir el proyecto de producción, se tomo la carpeta bases que se encuentra dentro de la carpeta `dist` (creada al construir el proyecto)

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

### Creando un componente de forma automática

* Para crear un componente de forma autómatica se utiliza el comando **ng generate componente nombre_componente**
* Para `crear` un componente de forma autómatica con atajo de comando **ng g c nombre_componente**
* `Crear` un componente sin el archivo de test: `ng g c directorio/nombreComponente --skip-tests`
* Para crear un componente de forma autómatica en un directorio especifico **ng g c nombre_directorio/nombre_componente**
* **Debemos de asegurarnos estar en la raíz del proyecto en la línea de comando al momento de generar nuestros componentes**


### Módulos

* Detalle sobre [módulos](https://academia-binaria.com/base-aplicacion-angular/)

#### Creando un módulo de forma automática

* Para `crear` un módulo de forma autómatica se utiliza el comando **ng generate module nombre_modulo**
* Para `crear` un módulo de forma autómatica con atajo de comando **ng g m nombre_modulo**
**En caso de que no exista un directorio o no se especifique al `crear` el módulo angular va crearlo con su respectiva carpeta/fichero**
* **Debemos de asegurarnos estar en la raíz del proyecto en la línea de comando al momento de generar nuestros módulos**

#### ngSubmit

Controla el envío de un formulario


#### Two-way binding

Two-way binding (enlace bidireccional) proporciona a los componentes de la aplicación una forma de compartir datos. Se utiliza el enlace bidireccional para escuchar eventos y actualizar los valores simultáneamente entre los componentes principal y secundario.


#### ngModel

Sirve para enlazar datos definidos en un componente (archivo.component.ts) con un campo de un formulario que se quieren mostrar en la vista (template - html) del componente


### Compatir datos entre componentes padres e hijos [ver detalle documentación...](https://angular.io/guide/inputs-outputs)

Un patrón común en Angular es compartir datos entre un componente principal y uno o más componentes secundarios. Puede implementar este patrón mediante las directivas @Input()y @Output().

#### @Input

@Input() permite que un componente principal actualice los datos del componente secundario.
El @Input()decorador en un componente secundario o directiva significa que la propiedad puede recibir su valor de su componente principal.


#### @Output

@Output() permite al componente hijo comunicarse con el componente padre a través de eventos y para eso angular utiliza la clase EventEmitter


### Servicios

Un servicio es un proveedor de datos, que mantiene lógica de acceso a ellos y operativa relacionada con el negocio y las cosas que se hacen con los datos dentro de una aplicación. Los servicios serán consumidos por los componentes, que delegarán en ellos la responsabilidad de acceder a la información y la realización de operaciones con los datos.

Al crear un servicio se requiere:

    - Agregarlo a un módulo y así los componentes de ese módulo podran hacer usos del servicio. El registro del service se realiza en providers del módulo

    - El servicio creado debe de contar con el decorador @Injectable para que angular pueda inyectarlo (inyección de depenedencias)

    - El servicio debe de contar con la palabra reservada export
