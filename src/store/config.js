import { ref } from 'vue'

export default ref(localStorage['i43-config'] && JSON.parse(localStorage['i43-config']) || {
  okex: { apiKey: '', apiSecret: '', passphrase: '' },
  saved: false 
})
