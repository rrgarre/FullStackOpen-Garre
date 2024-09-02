import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  return axios
    .get(baseUrl)
    .then(response => response.data)
}

const create = newPerson => {
  return axios
    .post(baseUrl, newPerson)
    .then(response => response.data)
}

const remove = id => {
  return axios
    .delete(`${baseUrl}/${id}`)
    .then(response => response.data)
}

const update = (id, changedPerson) => {
  console.log('desde update person: id: ', id)
  return axios
    .put(`${baseUrl}/${id}`, changedPerson)
    .then(response => response.data)
}

export default { getAll, create, remove, update }