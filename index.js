 //Initializing an empty array
 let shoppingList=[];

 //DOM elements
 const form=document.getElementById("shoppinglist-form");
 const button=document.getElementById("actions");
 const purchase=document.getElementById("markPurchased");

 //Adding a new item using DOM and EventListener
 function renderItems() {
    itemList.innerHTML = ''; // Clear existing list

    // Loop through the array and create a list item for each element
    itemsArray.forEach(item => {
      const listItem = document.createElement('li');
      listItem.classList.add('item');
      listItem.textContent = item;
      itemList.appendChild(listItem);
    });
  }

  // Event listener for the "Add Item" button
  button.addEventListener('click', () => {
    const newItem = itemInput.value.trim(); // Get the value from the input

    if (newItem) {
      // Add the new item to the array
      itemsArray.push(newItem);

      // Clear the input field
      itemInput.value = '';

      // Re-render the list to show the updated array
      renderItems();
    } else {
      alert('Please enter an item!');
    }
  });
