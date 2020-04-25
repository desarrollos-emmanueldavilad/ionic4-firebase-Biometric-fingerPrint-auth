import { DBConfig} from 'ngx-indexed-db';


/**
 * Initialize all service configurations for Ngx-indexed-db
 * @param DBconfig
 * @param default config for the client.
 */

export const dbConfig: DBConfig = {
  name: 'AUTHSTORAGE',
  version: 1,
  objectStoresMeta : [
    {
      store: 'datos',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'email', keypath: 'email', options: { unique: false } }
      ]
    },
  ]

};
