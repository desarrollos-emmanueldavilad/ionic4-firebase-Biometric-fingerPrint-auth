import { Injectable } from '@angular/core';
import { KeychainTouchId } from '@ionic-native/keychain-touch-id/ngx';

@Injectable({
  providedIn: 'root'
})
export class TouchIdService {

  constructor(private keychainTouchId: KeychainTouchId) {}

  /**
   * Check if is available.
   * @example
   * this.keychainTouchId.isAvailable()
   *   .then((res: any) => console.log(res))
   **/

  public available(): Promise<any> {
    return new Promise(resolve => {
      this.keychainTouchId
        .isAvailable()
        .then(res => {
          console.log('available:', res)
          resolve(res)
        })
        .catch(err =>
          console.error('Se ha producido un error en Available: ', err),
        )
    })
  }

  /**
   * Add Method
   *  @example
   *  saveData(form) {
   *     this.keychainTouchId.add(form.value.name, form.value.data)
   *      .then(data => {
   *        console.log(data)
   *       })
   *}
   **/

  public add(key: string, data: string): Promise<any> {
    return new Promise(resolve => {
      this.keychainTouchId
        .save(key, data, true)
        .then(res => resolve(res))
        .catch(err => console.error('Se ha producido un error en Add', err))
    })
  }

  /**
   * Verify Method, for get the saved data
   *  @example
   *   get(key: string) {
   *   this.keychainTouchId
   *    .verify(key)
   *    .then(datos => {
   *      console.log(datos)
   *    })
   *}
   *}
   **/

  public verify(key: string): Promise<any> {
    return new Promise<any>(resolve => {
      this.keychainTouchId
        .verify(key, 'Todo funcionando')
        .then(res => {
          console.log('respuesta:', res)
          resolve(res)
        })
        .catch(err =>
          console.error('Se ha producido un error en Verify: ', err),
        )
    })
  }

  /**
   * Has Method, for check if we have saved data
   *  @example
   *   this.keychainTouchId
   *    .has(key)
   *    .then(datos => {
   *      console.log(datos)
   *    })
   **/

  public has(key: string): Promise<any> {
    return new Promise(resolve => {
      this.keychainTouchId
        .has(key)
        .then(res => resolve(res))
        .catch(err => console.error('Se ha producido un error en Has: ', err))
    })
  }

  /**
   * Remove Method, for delete the data
   *  @example
   *   clear(key: string) {
   *   this.keychainTouchId.remove(key)
   *     .then(datos => {
   *       console.log(datos)
   *     })
   * }
   **/
  remove(key: string): Promise<any> {
    return new Promise(resolve => {
      this.keychainTouchId
        .delete(key)
        .then(res => {
          console.log(res)
          resolve(res)
        })
        .catch(err =>
          console.error('Se ha producido un error en Delete: ', err),
        )
    })
  }
}
