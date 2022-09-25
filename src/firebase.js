import firebase from 'firebase'
//import { ref, onUnmounted} from 'vue'

const config = { 
    apiKey: "AIzaSyCxyOk_h59oawPhRPlRL17lv-qwIc9Kslk",
    authDomain: "praktika-caballero.firebaseapp.com",
    projectId: "praktika-caballero",
    storageBucket: "praktika-caballero.appspot.com",
    messagingSenderId: "877051098312",
    appId: "1:877051098312:web:1edd864f6aeed1f30fe1fd",
    measurementId: "G-08L2768CM3" 
}

const firebaseApp = firebase.initializeApp(config)

export var newData = []
export const db = firebaseApp.firestore()
const usersCollection = db.collection('users')

export const createUser = user => {
  return usersCollection.add(user)
}

/*export const getUser = async id => {
  const user = await usersCollection.doc(id).get()
  return user.exists ? user.data() : null
}

export const updateUser = (id, user) => {
  return usersCollection.doc(id).update(user)
}

export const deleteUser = id => {
  return usersCollection.doc(id).delete()
}

export const useLoadUsers = () => {
  const users = ref([])
  const close = usersCollection.onSnapshot(snapshot => {
    users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return {users}
}*/


