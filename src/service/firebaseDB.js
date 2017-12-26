import Firebase from 'firebase'

let config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID
}

let app = Firebase.initializeApp(config)
let db = app.database()
let frontEndRef = db.ref('front-end')

export default frontEndRef
