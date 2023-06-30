import pb from '../lib/pocketbase'
import Login from './Login'

export default function page() {
  return (
    <div>
      <Login check={pb.authStore.isValid}/>
    </div>
  )
}
