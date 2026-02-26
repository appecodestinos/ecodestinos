const { initializeApp } = require("firebase/app");
const { getFirestore, collection, addDoc } = require("firebase/firestore");

require('dotenv').config({ path: '.env.local' });

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

console.log("Using API Key:", firebaseConfig.apiKey ? "LOADED" : "MISSING");

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function testLead() {
    console.log("Enviando lead de prueba a Firestore...");
    try {
        const docRef = await addDoc(collection(db, "leads"), {
            nombre: "Agente de Ecodestinos (Prueba Node)",
            correo: "prueba-consola@ecodestinos.com",
            destinos: ["Sierra", "Bogota"],
            fecha: new Date().toISOString(),
            esPrueba: true
        });
        console.log("=====================================");
        console.log("✅ ¡ÉXITO! Lead guardado en Firestore. ID del documento: ", docRef.id);
        console.log("=====================================");
        process.exit(0);
    } catch (e) {
        console.error("❌ Error añadiendo el lead: ", e);
        process.exit(1);
    }
}

testLead();
