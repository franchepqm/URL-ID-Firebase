async function cargarDetalleItem() {
    const urlParams = new URLSearchParams(window.location.search);
    const itemId = urlParams.get('itemId');
    const detalleItemContainer = document.getElementById('detalle-item');

    if (!itemId) {
        detalleItemContainer.innerHTML = "<p>Error: No se proporcionó un ID de item válido.</p>";
        return;
    }

    try {
        const docRef = doc(firestore, "items", itemId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data();
            detalleItemContainer.innerHTML = `
                <h2>${data.title}</h2>
                <p><strong>Categoría:</strong> ${data.category}</p>
                <p><strong>Descripción:</strong> ${data.description}</p>
                <p><strong>Fecha y hora:</strong> ${data.timestamp.toDate().toLocaleString()}</p>
            `;
        } else {
            detalleItemContainer.innerHTML = "<p>No se encontró el documento.</p>";
        }
    } catch (error) {
        console.log("Error al cargar el detalle del item: ", error);
        detalleItemContainer.innerHTML = "<p>Error al cargar los detalles del item.</p>";
    }
}
