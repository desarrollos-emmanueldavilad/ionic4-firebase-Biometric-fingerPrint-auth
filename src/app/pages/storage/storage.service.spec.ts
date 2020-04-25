import { TestBed } from '@angular/core/testing';
import { StorageService } from './storage.service';
import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';

describe('StorageService', () => {
  let storageService: StorageService;
  const configMock: DBConfig = {
    name: 'ARGOSTORAGE',
    version: 1,
    objectStoresMeta: [
      {
        store: 'SEGURCAIXA',
        storeConfig: { keyPath: 'id', autoIncrement: true },
        storeSchema: [
          { name: 'nombre', keypath: 'nombre', options: { unique: false } }
        ]
      }
    ]
  };

  const totalMock = {
    total: 2
  };

  const userMockAdd = {
    dbName: 'SEGURCAIXA',
    data: {
      nombre: 'emmanuel'
    },
    id: 1
  };

  const mockINDEX = {
    dbName: 'SEGURCAIXA',
    schemakey: 'nombre',
    nombre: 'emmanuel'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxIndexedDBModule.forRoot(configMock)],
      providers: [StorageService]
    });
    storageService = TestBed.get(StorageService);
  });

  it('should be created', () => {
    expect(storageService).toBeTruthy();
  });

  it('should be add', async () => {
    const val = await storageService.addItem(userMockAdd.dbName, userMockAdd);
    expect(val).toEqual(userMockAdd.id);
  });

  it('should be getAll', async () => {
    const val = await storageService.getAll(userMockAdd.dbName);
    console.log('es un valor Getall: ', val);

    expect(val).toEqual([userMockAdd]);
  });

  it('should be GetIndexId', async () => {
    const val = await storageService.getIndexID(
      userMockAdd.dbName,
      userMockAdd.id
    );
    console.log('es un valor de getIndex: ', val);
    expect(val).toEqual(userMockAdd);
  });




  it('should GetIndex', async () => {
    const mockINDEX = {
      dbName: 'SEGURCAIXA',
      key : 'nombre',
      nombre: 'pepito',
      id: 2
    };
    ///////////////////////////////////////////////////////////////////////////
    const valor = await storageService.addItem(mockINDEX.dbName, mockINDEX);
    expect(valor).toEqual(mockINDEX.id);
    console.log('es un valor de ADDED: ', valor);
    ///////////////////// 77
    const valt = await storageService.getIndexID(
      mockINDEX.dbName,
      mockINDEX.id
    );
    console.log('es un valor de getIndexXXXx: ', valt);
    ///////////////////////////////////////////////////////////////////////////
     const val2 = await storageService.getIndex(
      'SEGURCAIXA',
      mockINDEX.key,
      mockINDEX.nombre
     );
    ///////////////////////////////////////////////////////////////////////////
     console.log(
       'es un valor GetIndexxxx: ',
       val2
     );
    ///////////////////////////////////////////////////////////////////////////
     expect(val2).toEqual(
      mockINDEX
     );
  });


  it('should be update', async () => {
    const val = await storageService.update(userMockAdd.dbName, userMockAdd.id);
    console.log('es un valor: ', val);

    expect(JSON.stringify(val)).toEqual('{"isTrusted":true}');
  });




  it('should be count', async () => {
    const val = await storageService.count(userMockAdd.dbName);
    console.log('es un valor: ', val);
    expect(val).toBe(totalMock.total);
  });

  it('should be delete', async () => {
    const val = await storageService.delete(userMockAdd.dbName, userMockAdd.id);
    expect(val).toEqual(undefined);
  });


  it('should be clearDb', async () => {
    const val = await storageService.clearDB(userMockAdd.dbName);
    expect(val).toEqual(undefined);
  });
});
