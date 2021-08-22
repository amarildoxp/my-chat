import firebase from 'firebase'

// Add the Firebase products that you want to use
import 'firebase/auth'
import 'firebase/firestore'

firebase.initializeApp({
  apiKey: 'AIzaSyBKj6PSFSMWHWQohp3GgoPU6XH4Bh_k7VA',
  authDomain: 'my-chat-e7e9d.firebaseapp.com',
  projectId: 'my-chat-e7e9d',
  storageBucket: 'my-chat-e7e9d.appspot.com',
  messagingSenderId: '752792336089',
  appId: '1:752792336089:web:37771a245795b4a17c70c8'
})

export { firebase }

export const auth = firebase.auth
export const db = firebase.firestore()
