import { collection, getDocs, getFirestore } from 'firebase/firestore'
import '../firebase/clientApp' // Initialize FirebaseApp

export type Event = {
  id: string
  name: string
  data: string
}

export async function getEvents(): Promise<Event[]> {
  const events = new Array<Event>()
  const db = getFirestore()
  const querySnapshot = await getDocs(collection(db, '/events'))

  querySnapshot.forEach((doc) => {
    const event = doc.data() as Event
    events.push({ ...event, id: doc.id })
  })

  return events
}