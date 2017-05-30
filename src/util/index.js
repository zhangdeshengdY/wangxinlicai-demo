import ajax from './ajax'

ajax.beforeEach((res, next) => {
  next()
})


export default {
  get (url, data = {}, success = () => {}, error = () => { }) {
    ajax({ url, data, success, error, type: 'GET' })
  },
  post (url, data = {}, success = () => { }, error = () => { }) {
    ajax({ url, data, success, error, type: 'POST' })
  },
 
}
