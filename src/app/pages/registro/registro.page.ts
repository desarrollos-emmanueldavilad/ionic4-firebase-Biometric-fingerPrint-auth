import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormControl, AbstractControl} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import { PasswordValidator } from 'src/app/validators/password.validator';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { CompletarRegistroService } from 'src/app/services/completar-registro.service';
import { TouchIdService } from 'src/app/services/touch-id.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {


  validations_form: FormGroup;
  errorMessage = '';
  successMessage = '';
  image: any;

  validation_messages = {
    'email': [
      {type: 'required', message: 'Correo requerido.'},
      {type: 'pattern', message: 'Correo inválido.'}
    ],
    'password': [
      {type: 'required', message: 'Contraseña requerida.'},
      {type: 'minlength', message: 'Debe tener más de 5 dígitos.'}
    ],
    'confirmPassword': [
      {type: 'required', message: 'Contraseña requerida.'},
      {type: 'minlength', message: 'Debe tener más de 5 dígitos.'},
      {type: 'notMatch', message: 'Las contraseñas deben ser iguales.'}
    ]
  };
  addedData: any;
  datoGuardado: any;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private camera: Camera,
    private finger: TouchIdService
  ) {
  }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
        email: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])),
        password: new FormControl('', Validators.compose([
          Validators.minLength(5),
          Validators.required
        ])),
        confirmPassword: new FormControl('', Validators.compose([
          Validators.minLength(5),
          Validators.required,
          PasswordValidator.MatchPassword
        ])),
        check: new FormControl('', Validators.required),
      }
    );
  }


  saveData(form) {
    this.finger.available()
      .then(data => {
        this.validations_form = form;
        this.finger.add(form.value.name, form.value.data, true)
          .then(data => {
            console.log('data gu', data)
            this.addedData = data;
            alert('Tu información se ha guardado correctamente');
            this.validations_form.reset();
          })
          .catch(err => console.error('Se ha producido un error al guardar la información', err));
      })
      .catch(err => console.log(err));
  }

  get(key: string) {
    this.finger.verify(key)
      .then(datos => {
        this.datoGuardado = datos;
        console.log(`La información guardada es: ${this.datoGuardado}`);
      })
      .catch(err => {
        console.error(`Se ha producido un error al consultar la información guardada: ${err}`);
      });
  }

  clear(key: string) {
    this.finger.remove(key)
      .then(datos => {
        console.log('Datos eliminados:', datos);
        alert('Los datos se han eliminado');
      })
      .catch(err => console.error('Se ha producido un error al eliminar la información guardada', err));
  }

  tryRegister(value){
    this.authService.doRegister(value)
     .then(res => {
       if(this.finger.available()){
        this.finger.add(value.email, value.password, true)
        .then(data => {
          this.addedData = data;
          alert('Tu información se ha guardado correctamente');
          this.validations_form.reset();
        })
        .catch(err => console.error('Se ha producido un error al guardar la información', err));;
       }
       console.log(res);
       this.errorMessage = "Ocurrio un error al crear tu cuenta";
       this.successMessage = "Tu Cuenta fue creada..";
       this.validations_form.reset();
       this.router.navigate(['/completar-registro'])
     }, err => {
       console.log(err);
       this.errorMessage = err.message;
       this.successMessage = "La contraseña o el correo no son correctos";
     })
  }

  goLoginPage(){
    this.router.navigate(["/login"]);
  }

  getPicture(){
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100
    }
    this.camera.getPicture( options )
    .then(imageData => {
      this.image = `data:image/jpeg;base64,${imageData}`;
    })
    .catch(error =>{
      console.error( error );
    });
  }
}
