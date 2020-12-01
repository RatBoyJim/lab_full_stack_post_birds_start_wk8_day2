const baseURL = 'http://localhost:3001/api/sightings/'

export default {
  getSightings(){
    return fetch(baseURL)
    .then(res => res.json())
  },

  postSighting(payload){
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  },

  deleteSighting(id){
    return fetch(baseURL + id, {
      method: 'DELETE'
    })
  }
}
