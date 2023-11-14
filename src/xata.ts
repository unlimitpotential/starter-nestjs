// Generated by Xata Codegen 0.23.5. Please do not edit.
import { buildClient } from '@xata.io/client';
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from '@xata.io/client';

const tables = [
  {
    name: 'items',
    columns: [
      {
        name: 'isCompleted',
        type: 'bool',
        notNull: true,
        defaultValue: 'false',
      },
      {
        name: 'createdAt',
        type: 'datetime',
        notNull: true,
        defaultValue: 'now',
      },
      { name: 'userId', type: 'string', notNull: true, defaultValue: '' },
      { name: 'title', type: 'string', notNull: true, defaultValue: '' },
      { name: 'api_key', type: 'string', notNull: true, defaultValue: '' },
      { name: 'domain_id', type: 'string', notNull: true, defaultValue: '' },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Items = InferredTypes['items'];
export type ItemsRecord = Items & XataRecord;

export type DatabaseSchema = {
  items: ItemsRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL: 'https://unlimit-potential-lho3ne.eu-west-1.xata.sh/db/now',
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
