import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);


async function cargarDetalleItem() {
    const urlParams = new URLSearchParams(window.location.search);
    const itemId = urlParams.get('itemId');
    const detalleItemContainer = document.getElementById('detalle-item');

    try {
        const docRef = doc(firestore, "items", itemId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data();
            detalleItemContainer.innerHTML = `
                <h2>${data.title}</h2>
                <p><strong>Descripción:</strong> ${data.description}</p>
            `;
        } 
        else{}
    } catch (error) {
        console.log("Error al cargar el detalle del item: ", error);
    }
}
