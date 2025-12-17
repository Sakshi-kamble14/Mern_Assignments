// Step 4 
let fruitArray = [
        { name: "Apple", color: "red", price: 100 },
        { name: "Banana", color: "yellow", price: 10 },
        { name: "Mango", color: "yellow", price: 50 },
        { name: "Stawberry", color: "red", price: 5 },
        { name: "Orange", color: "orange", price: 20 },
        { name: "Kiwi", color: "brown", price: 200 },
      ];

// Step 5
      let btnDisplay = document.getElementById("btnDisplay");
      let tbody = document.getElementById("tbody");

// Step 7
      function displayFruits() {
        console.log("display fruits");

        // clear previous contents
        tbody.innerHTML = "";

        fruitArray.map((fruit, index) => {
          tbody.innerHTML += `
          <tr>
            <td>${fruit.name}</td>
            <td>${fruit.color}</td>
            <td>${fruit.price}</td>
            <td><button class="btn btn-danger btn-sm" onclick="removeItem(${index})">Remove</button></td>
          </tr>
          `;
        });
      }

// Step 8      
      // remove item function
      function removeItem(index) {
        console.log("remove item clicked and index: ", index);
        fruitArray.splice(index, 1);
        displayFruits();
      }

// Step 6
      // display fruits
      btnDisplay.addEventListener("click", displayFruits);