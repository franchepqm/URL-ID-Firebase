document.getElementById('admin-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    try {
        const docRef = doc(firestore, "items", title);

        await setDoc(docRef, {
            title: title,
            description: description,
        });

        alert("Documento añadido con éxito");
    } catch (error) {
        console.error("Error al agregar datos", error);
    }
});
