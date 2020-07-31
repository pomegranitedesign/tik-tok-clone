import firebase from 'firebase'

const firebaseConfig = {
	apiKey: 'AIzaSyBnC0PupfDfL3AjldPGFYMMP4DVbTYtwvQ',
	authDomain: 'tiktok-clone-fe5f6.firebaseapp.com',
	databaseURL: 'https://tiktok-clone-fe5f6.firebaseio.com',
	projectId: 'tiktok-clone-fe5f6',
	storageBucket: 'tiktok-clone-fe5f6.appspot.com',
	messagingSenderId: '1035271075057',
	appId: '1:1035271075057:web:01ecd0e6e0885adb946550',
	measurementId: 'G-73XRY6RH1D'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

export default db
