
const cardContainer = document.querySelector(".reports__grid");

const deletePost = async (id) => {
    console.log("pri zapuske", id);    
    const resp = await fetch(`https://reportingapi20230313200655.azurewebsites.net/api/Report/${id}`,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(id)
      })
    const data = await resp.json();
    console.log(data);
}




// fetch(`${apiUrl}/${itemId}`, {
//   method: "DELETE",
// })




// Fetch data from the API
const renderData = async () => {
    cardContainer.innerHTML = ""
   const resp = await fetch("https://reportingapi20230313200655.azurewebsites.net/api/Report")
   const data = await resp.json()

    // // 

    // get => [{1},{2},{3}]
    // get => { reports: [1,2,3]}
    // reports = 
    // // 

   const reports = data.reports
    // Loop through each item in the response;
    reports.forEach(item => {
      // Create a new card element
      const card = document.createElement("div");
      card.classList.add("card");

      // Create the card content
      const cardTitle = document.createElement("h2");
      cardTitle.innerText = item.title;
    
      const cardDetails = document.createElement("p");
      cardDetails.innerText = item.details;
    
      const cardID = document.createElement("p");
      cardID.innerText = item.id;

      const deleteButton = document.createElement("button");
      deleteButton.innerText = "delete";
      deleteButton.classList.add("delete__btn")
      deleteButton.dataset.id = item.id

      deleteButton.addEventListener("click", async (e)=>{
        e.preventDefault()
        console.log(e.currentTarget.dataset.id)
        const id = e.currentTarget.dataset.id
        console.log(`const=${id}`);
        await deletePost()
        await renderData()
      })

      // Append the card content to the card element
      card.appendChild(cardTitle);
      card.appendChild(cardID);
      card.appendChild(cardDetails);
      card.appendChild(deleteButton);

      // Append the card element to the card container
      cardContainer.appendChild(card);
    });
}


renderData()