const getReports = async () =>{
    const resp = await fetch("https://reportingapi20230313200655.azurewebsites.net/api/Report")
    const data = await resp.json()
    console.log(data);
}

getReports()

const addReport = async () => {
    const resp = await fetch("https://reportingapi20230313200655.azurewebsites.net/api/Report",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "title": "Test",
          "details": "DetailsTest"  
        })
    })
   const data = await resp.json()
   console.log(data);
}

const postBtn = document.getElementById('postBtn');
postBtn.addEventListener('click', addReport);

addReport()
getReports()
