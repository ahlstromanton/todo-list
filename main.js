function addNewItem() {
    const existingCard = document.getElementById("card");
    const newItemText = document.getElementById("new-item").value;

    if (newItemText.trim() === "") {
        alert("Please enter a new item.");
        return;
    }

    // Clone the existing card
    const newCard = existingCard.cloneNode(true);

    // Update the content of the new card
    const newCheckbox = newCard.querySelector("input[type='checkbox']");
    const newLabel = newCard.querySelector("label");

    // Generate a unique ID for the new checkbox and label
    const uniqueId = `complete-box-${document.querySelectorAll('.card').length + 1}`;
    newCheckbox.id = uniqueId;
    newLabel.htmlFor = uniqueId;
    newLabel.textContent = newItemText;

    // Insert the new card before the input field
    const todoContainer = document.getElementById("todo-container");
    todoContainer.insertBefore(newCard, document.getElementById("input-field"));

    // Clear the input field
    document.getElementById("new-item").value = "";
}
