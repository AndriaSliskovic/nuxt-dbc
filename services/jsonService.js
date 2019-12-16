import axiosClient from './service-clients/base-client'

const url="http://localhost:3000/"

const client = axiosClient(url)

export default {
  getAlllogs(){
    console.log("servis json")
      const routeUrl="logs"
      return client.get(routeUrl)
  },
}