import pb from '@/app/lib/pocketbase'

export default async function page() {
    console.log(pb.authStore)
  return (
    <div>
        <h1>email: {pb.authStore.model?.email}</h1>
    </div>
  )
}
