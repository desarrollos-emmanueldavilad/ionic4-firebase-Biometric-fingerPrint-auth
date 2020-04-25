import { Injectable } from '@angular/core'
import { NgxIndexedDBService } from 'ngx-indexed-db'
import { Platform } from '@ionic/angular'

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(
    public platform: Platform,
    private dbService: NgxIndexedDBService,
  ) {}

  /**
   * Add Method
   *  @example
   *   this.Service.addItem('SEGURCAIXA', form.value).then(item => {
   *  console.log(item);
   *});
   **/
  public addItem(item: any): Promise<any> {
    return new Promise<any>(resolve => {
      this.dbService
        .add('datos', item)
        .then(res => resolve(res))
        .catch(err => console.error('Se ha producido un error en Add: ', err))
    })
  }

  /**
   * Update Method
   *  @example
   *  this.Service.update('SEGURCAIXA', item).then(item => {
   *   console.log(item)
   * });
   **/
  public update(dbName: string, id: any): Promise<any> {
    return new Promise<any>(resolve => {
      this.dbService
        .update(dbName, id)
        .then(res => resolve(res))
        .catch(err =>
          console.error('Se ha producido un error en Update: ', err),
        )
    })
  }

  /**
   * GetAll Method
   *  @example
   *   this.Service.getAll('SEGURCAIXA').then(items => {
   *   this.items = items;
   * console.log(this.items)
   * });
   **/

  public getAll(dbName: string): Promise<any> {
    return new Promise<any>(resolve => {
      this.dbService
        .getAll(dbName)
        .then(res => {
          console.log(res)
          resolve(res)
        })
        .catch(err =>
          console.error('Se ha producido un error en getAll: ', err),
        )
    })
  }

  /**
   * getIndexID Method
   *  @example
   *this.Service.getIndexID('SEGURCAIXA', key).then(index => {
   *     this.getIndexItems = index;
   *    console.log(this.getIndexItems);
   *     console.log(${JSON.stringify(this.getIndexItems)});
   *   });*
   **/
  public getIndexID(dbName: string, key: any): Promise<any> {
    return new Promise<any>(resolve => {
      this.dbService
        .getByID(dbName, key)
        .then(res => resolve(res))
        .catch(err => console.log(err))
    })
  }

  /**
   * getIndex Method
   *  @example
   *this.Service.getIndex('SEGURCAIXA', key, value).then(data => {
   *    this.infoKey = data;
   *    console.log(this.infoKey);
   *  });
   **/
  public getIndex(dbName: string, key: string, value: any): Promise<any> {
    return new Promise<any>(resolve => {
      this.dbService
        .getByIndex(dbName, key, value)
        .then(res => resolve(res))
        .catch(err =>
          console.error('Se ha producido un error en getIndex: ', err),
        )
    })
  }

  /**
   * Delete Method
   *  @example
   * this.Service.delete('SEGURCAIXA', id).then(item => {
   *     console.log('Registro eliminado');
   *   });
   **/
  public delete(dbName: string, id): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.dbService
        .delete(dbName, id)
        .then(res => resolve(res))
        .catch(err => {
          console.error('Se ha producido un error en getIndexKey: ', err)
          reject(err)
        })
    })
  }

  /**
   * Count Method
   *  @example
   *this.Service.count('SEGURCAIXA').then(count => {
   *      console.log(count);
   *    });
   **/
  public count(dbName: string): Promise<any> {
    return new Promise<any>(resolve => {
      this.dbService
        .count(dbName)
        .then(res => resolve(res))
        .catch(err => console.error('Se ha producido un error en Count', err))
    })
  }

  /**
   * clearDB Method
   *  @example
    *this.Service.clearDB('SEGURCAIXA').then(data => {
    *      console.log(data);
    });
   **/
  public clearDB(dbName: string): Promise<any> {
    return new Promise<any>(resolve => {
      this.dbService
        .clear(dbName)
        .then(res => resolve(res))
        .catch(err => console.error('Se ha producido un error en clear', err))
    })
  }
}
