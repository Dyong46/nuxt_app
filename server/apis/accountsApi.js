import { accountsCollection } from './api'

export const getAllAccounts = async () => {
  try {
    const docsRef = await accountsCollection.get()
    const data = docsRef.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    return data
  } catch (error) {
    return Promise.reject(error)
  }
}

export const getAccountById = async (id) => {
  // const docsRef = await accountsCollection.doc(id)
}
