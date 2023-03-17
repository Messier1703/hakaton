const form = document.getElementById('postForm');
const titleInput = document.getElementById('title');
const detailsInput = document.getElementById('content');
const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const formData = {
        title: titleInput.value,
        details: detailsInput.value
    };

    console.log(formData);
    fetch('https://reportingapi20230313200655.azurewebsites.net/api/Report', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(response => response.json())
        .then(data => console.log('Success:', data))
        .catch(error => console.error('Error:', error));
});
