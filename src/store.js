import { createStore, combineReducers, compose } from 'redux';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
import firebase from 'firebase/app';
import 'firebase/firestore';

// Configurar Firestore 
const firebaseConfig = {
  apiKey: "AIzaSyDErA4m5gWPASF_Cq5cnvMJR0mm8Fl_9IU",
  authDomain: "bibliostore-889e9.firebaseapp.com",
  databaseURL: "https://bibliostore-889e9.firebaseio.com",
  projectId: "bibliostore-889e9",
  storageBucket: "bibliostore-889e9.appspot.com",
  messagingSenderId: "1054699607739",
  appId: "1:1054699607739:web:c88e669588fa74bc"
}

// Inicializar Firebase 
firebase.initializeApp(firebaseConfig);

// Configuración de React-Redux
const rrfConfig = {
  userProfile : 'users',
  useFirestoreForProfile: true
}

// Crear el enhacer con compose de Redux y Firestore
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
)(createStore);

// Reducers
const rootReducers = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
})

// State inicial 
const initialState = {};

// Crear el store
const store = createStoreWithFirebase(rootReducers, initialState, compose(
  reactReduxFirebase(firebase), 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;