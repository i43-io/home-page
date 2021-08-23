import axios from 'axios'
import { ref } from 'vue'

export const teslafi = ref()
export async function updateData() {
  const { data } = await axios.get('https://ph8xwdmyl4.execute-api.us-east-1.amazonaws.com/prod/teslafi')
  teslafi.value = data
}
