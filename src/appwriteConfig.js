import { Client, Databases, Account } from 'appwrite'

export const PROJECT_ID = '64a94a813aee0b66e9ff'
export const DATABASE_ID = '64a94c6991818d1e0f84'
export const COLLECTION_ID_MESSAGES = '64a94c73512afc9a7761'

const client = new Client()

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('64a94a813aee0b66e9ff')

export const databases = new Databases(client)
export const account = new Account(client)

export default client
