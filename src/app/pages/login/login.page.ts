import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { TouchIdService } from 'src/app/services/touch-id.service';
import { StorageService } from '../storage/storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  validations_form: FormGroup;
  errorMessage: string = '';
  passReset: boolean = false;
correo: string ;
  validation_messages = {
    'email': [
      {type: 'required', message: 'Correo requerido.'},
      {type: 'pattern', message: 'Por favor ingresar un correo valido.'}
    ],
    'password': [
      {type: 'required', message: 'Contraseña requerida.'},
      {type: 'minlength', message: 'La contraseña debe tener mas de 5 digitos.'}
    ]
  };
  datoGuardado: any;
  items: any;
  getIndexItems: any;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private faio: FingerprintAIO ,
    private finger: TouchIdService,
    private sService: StorageService
  ) {
    this.loadItems();
  }

showFingerprintAuthDlg(){
   this.faio.show({
    title: 'Biometric Authentication', // (Android Only) | optional | Default: "<APP_NAME> Biometric Sign On"
      subtitle: 'Coolest Plugin ever', // (Android Only) | optional | Default: null
      description: 'Please authenticate', // optional | Default: null
      fallbackButtonTitle: 'Use Backup', // optional | When disableBackup is false defaults to "Use Pin".
                                         // When disableBackup is true defaults to "Cancel"
      disableBackup:true,  // optional | default: fal
       })
     .then((result: any) => console.log(result))
     .catch((error: any) => console.log(error));
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
    });
  }

  loadItems() {
    this.sService.getAll('datos').then(items => {
      this.items = items;
      console.log(items[0].email)
    });
  }


  getIndexId() {
    this.sService.getIndexID('AUTHSTORAGE', 1).then(index => {
      this.getIndexItems = index;
      console.log(this.getIndexItems);
      alert(`Datos del id seleccionado, ${JSON.stringify(this.getIndexItems)}`);
    });
  }


  get(key: string) {
    this.getIndexId();
    key = this.items[0].email;
    this.finger.verify(key)
      .then(datos => {
        this.datoGuardado = datos;
        console.log(`La información guardada es: ${this.datoGuardado}`);
      })
      .catch(err => {
        console.error(`Se ha producido un error al consultar la información guardada: ${err}`);
      });
  }

  tryLoginTouch() {
    this.finger.verify(this.items[0].email)
      .then(datos => {
        alert('dato guardado' + datos)
        let pass = datos;
        this.authService.doLoginTo(this.items[0].email, pass)
        .then(res => {
          this.router.navigate(['/tabs/tab1']);
        }, err => {
          this.errorMessage = err.message;
          console.log(err);
        });
      })
      .catch(err => {
        console.error(`Se ha producido un error al consultar la información guardada: ${err}`);
      });
  
  }

  tryLogin(value) {
    this.authService.doLogin(value)
      .then(res => {
        this.router.navigate(['/tabs/tab1']);
      }, err => {
        this.errorMessage = err.message;
        console.log(err);
      });
  }

  goRegisterPage() {
    this.router.navigate(['/registro']);
  }

  resetPassword() {
    this.authService.resetPassword(this.validations_form.value['email'])
    .then(() => this.passReset = true)
  }

}
