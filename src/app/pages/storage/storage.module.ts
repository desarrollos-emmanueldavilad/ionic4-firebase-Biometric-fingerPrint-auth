import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxIndexedDBModule, DBConfig, NgxIndexedDBService, CONFIG_TOKEN } from 'ngx-indexed-db';
import { ModuleWithProviders } from '@angular/compiler/src/core';

import { StorageService } from './storage.service';
import { dbConfig } from '../models/config.db';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxIndexedDBModule.forRoot(dbConfig),
  ],
  providers: [StorageService]
})
export class StorageModule {
  static forRoot(configuration: DBConfig = dbConfig): ModuleWithProviders {
    return {
      ngModule: StorageModule,
      providers: [
        StorageService,
        NgxIndexedDBService,
        { provide: CONFIG_TOKEN, useValue: configuration }
      ]
    };
  }
}
