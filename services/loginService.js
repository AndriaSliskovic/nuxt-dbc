import axiosClient from './service-clients/base-client'

const url="http://dev-admin.deluxebrand.com/"

const client = axiosClient(url)

export default {
  login(dataObject){
      const routeUrl="auth/login"
      client.post(routeUrl, dataObject)
  },
}