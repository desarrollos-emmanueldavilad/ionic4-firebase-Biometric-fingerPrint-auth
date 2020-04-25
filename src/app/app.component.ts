import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {AuthService} from "./services/auth.service";
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
    public userUid: string = null;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService:AuthService,
    private faio: FingerprintAIO,
    private router: Router
  ) {
    this.initializeApp();
  }

  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      console.log(auth.uid);
      if (auth) {
        this.userUid = auth.uid;
        this.authService.isUserAdmin(this.userUid).subscribe(userRole => {
          console.log(userRole);
        });
        this.faio.show({
          title: 'Biometric Authentication', // (Android Only) | optional | Default: "<APP_NAME> Biometric Sign On"
               subtitle: 'Coolest Plugin ever', // (Android Only) | optional | Default: null
               description: 'Please authenticate', // optional | Default: null
               fallbackButtonTitle: 'Use Backup', // optional | When disableBackup is false defaults to "Use Pin".
               disableBackup:true,  // optional | default: fal
        })
          .then((result: any) => {
            alert(result);
            this.router.navigate(['/tabs/tab1']);
          })
          .catch((error: any) => {
            console.log('err: ', error);
          });
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
