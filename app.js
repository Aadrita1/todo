window.onload = () => {
    const form1 = document.querySelector("#addForm");
    let items = document.getElementById("items");
    let submit = document.getElementById("submit");
    let editItem = null;

    form1.addEventListener("submit", addItem);
    items.addEventListener("click", removeItem);
};

function addItem(e) {
    e.preventDefault();

    if (submit.value !== "Submit") {
        editItem.target.parentNode.childNodes[0].data = document.getElementById("item").value;
        submit.value = "Submit";
        document.getElementById("item").value = "";
        showSuccessMessage("Task edited successfully");
        return false;
    }

    let newItem = document.getElementById("item").value.trim();
    if (newItem === "") return false;

    document.getElementById("item").value = "";

    let li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    li.appendChild(document.createTextNode(newItem));

    let buttonGroup = document.createElement("div");

    let editButton = document.createElement("button");
    editButton.className = "btn btn-sm btn-pink ml-2 edit";
    editButton.appendChild(document.createTextNode("Edit"));
    buttonGroup.appendChild(editButton);

    let deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-sm btn-danger ml-2 delete";
    deleteButton.appendChild(document.createTextNode("Delete"));
    buttonGroup.appendChild(deleteButton);

    li.appendChild(buttonGroup);

    items.appendChild(li);
    showSuccessMessage("Task added successfully");
}

function removeItem(e) {
    e.preventDefault();
    if (e.target.classList.contains("delete")) {
        if (confirm("Are you sure?")) {
            let li = e.target.closest("li");
            items.removeChild(li);
            showSuccessMessage("Task deleted successfully");
        }
    }
    if (e.target.classList.contains("edit")) {
        document.getElementById("item").value = e.target.closest("li").childNodes[0].data;
        submit.value = "EDIT";
        editItem = e;
    }
}

function toggleButton(ref, btnID) {
    document.getElementById(btnID).disabled = ref.value.trim() === "";
}

function showSuccessMessage(message) {
    const lblsuccess = document.getElementById("lblsuccess");
    lblsuccess.innerHTML = message;
    lblsuccess.style.display = "block";
    setTimeout(() => {
        lblsuccess.style.display = "none";
    }, 3000);
}
