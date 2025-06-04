// JS: Add Grocery Item to List
function addItem() {
  const input = document.getElementById("itemInput");
  const item = input.value.trim();
  const list = document.getElementById("grocery-list");
  const errorMsg = document.getElementById("errorMsg");

  try {
    if (item === "") {
      throw new Error("Item cannot be empty");
    }

    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
    console.log("Item added:", item);
  } catch (e) {
    console.log(e);
  } finally {
    if (item === "") {
      errorMsg.textContent = "Please enter an item before adding.";
    } else {
      errorMsg.textContent = "";
      input.value = ""; // ✅ Extra credit: clear input after adding
    }
  }
}
