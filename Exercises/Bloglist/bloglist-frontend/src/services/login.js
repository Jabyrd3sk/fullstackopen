import axios from 'axios'
const baseUrl = '/api/login'
// const baseUrl = 'http://localhost:3003/api/login'

const login = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  return response.data    // { token, username, name }
}

export default { login }
