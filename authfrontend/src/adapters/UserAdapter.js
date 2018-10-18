const BASE_API = "http://localhost:3000/"

class UserAdapter{
  static login(data){
    return fetch(`${BASE_API}/login`,{
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({user: data})
    })
    .then(res => res.json())
  }

  static persist(token){
    return fetch(`${BASE_API}/persist`,{
      method: "GET",
      headers: {
        "Authorization" : token
      }
    })
    .then(res => res.json())
  }
}

export default UserAdapter
