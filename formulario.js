document.getElementById('admin-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const category = document.getElementById('category').value;
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    try {
        const docRef = doc(firestore, "items", title);

        await setDoc(docRef, {
            category: category,
            title: title,
            description: description,
            timestamp: new Date()
        });

        alert("Documento añadido con éxito");
    } catch (error) {
        console.error("Error al agregar datos", error);
        alert("Error al añadir documento");
    }
});
