import Dexie from 'dexie';
import { getUniqueId } from '../common/utils';


const dbName = 'measure';
const dbVersion = 1;

const db = new Dexie(dbName);
db.version(dbVersion).stores({ clients: '&id' });

/* eslint-disable no-return-await */
const getClients = async () => await db.clients.toArray();

const getClient = async (id) => await db.clients.get(id);

const deleteClient = async (id) => await db.clients.delete(id);

const saveClient = async (client) => {
  if (!client.id) {
    client.id = getUniqueId();
    client.measurements = {};
  }

  return await db.clients.put(client);
};

export {
  getClient,
  getClients,
  deleteClient,
  saveClient
};
