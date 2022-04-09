import { collection, getDocs, getFirestore } from 'firebase/firestore'
import '../firebase/clientApp' // Initialize FirebaseApp

export type Game = {
  id: string
  name: string
}

export async function getGames(): Promise<Game[]> {
  const games = new Array<Game>()
  const db = getFirestore()
  const querySnapshot = await getDocs(collection(db, '/games'))

  querySnapshot.forEach((doc) => {
    const game = doc.data() as Game
    games.push({ ...game, id: doc.id })
  })

  return games
}