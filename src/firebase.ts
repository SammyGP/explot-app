import * as Firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyCL53mo6ZAXjC9fHiJiAu5uWCkuYpWiV3U',
  authDomain: 'explot-ffce5.firebaseapp.com',
  databaseURL: 'https://explot-ffce5.firebaseio.com',
  projectId: 'explot-ffce5',
  storageBucket: 'explot-ffce5.appspot.com',
  messagingSenderId: '27610878727',
  appId: '1:27610878727:web:c3eda528ef0bbcfa746ba2',
  measurementId: 'G-9R6LY8RELH',
}

class firebase {
  auth: Firebase.auth.Auth
  db: Firebase.database.Database

  constructor() {
    Firebase.initializeApp(firebaseConfig)
    Firebase.analytics()

    this.auth = Firebase.auth()
    this.db = Firebase.database()
  }

  login(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  logout() {
    return this.auth.signOut()
  }

  async register(name: string, email: string, password: string) {
    await this.auth.createUserWithEmailAndPassword(email, password)
    await this.auth.currentUser?.updateProfile({
      displayName: name,
    })
  }

  isInitialized() {
    return new Promise((resolve) => {
      return this.auth.onAuthStateChanged(resolve)
    })
  }
  isLoggedIn() {
    if (this.auth.currentUser) {
      return true
    } else {
      return false
    }
  }
}

export default new firebase()
