fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json()) // Parse response as JSON
    .then(data => {
        console.log('Data:', data); // Handle the JSON data
    })
    .catch(error => {
        console.error('Error fetching data:', error); // Handle errors
    });

//Making a POST Request

const postData = {
    title: 'My New Post',
    body: 'This is the content of the post.',
    userId: 1
};

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST', // Specify the request method
    headers: {
        'Content-Type': 'application/json' // Inform the server about the data type
    },
    body: JSON.stringify(postData) // Convert data to JSON string
})
    .then(response => response.json()) // Parse the response as JSON
    .then(data => {
        console.log('Post created:', data); // Handle the response data
    })
    .catch(error => {
        console.error('Error creating post:', error);
    });