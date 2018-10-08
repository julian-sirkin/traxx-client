import apiUrl from '../apiConfig'
import axios from 'axios'

export const index =  async ({token}) => {
  return await axios({
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${token}`
    },
    url: apiUrl + '/vinyls'
  })
}

export const create =  async (vinyl, {token}) => {
  return await axios({
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${token}`
    },
    url: `${apiUrl}/vinyls`,
    data: JSON.stringify({
      vinyl: {
        vinyl_id: vinyl.id,
        collection_type: vinyl.collection_type
      }
    })
  })
}

export const destroy =  async (id, {token}) => {
  return await axios({
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${token}`
    },
    url: `${apiUrl}/vinyls/${id}`
  })
}