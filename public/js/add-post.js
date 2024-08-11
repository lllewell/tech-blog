async function newFormHandler(event) {
    event.preventDefault();
    const title = document.querySelector('#post_title').value;
    const content = document.querySelector('#post_content').value;
    const username = document.querySelector('#post_username').value;

    // ? Send fetch request to add a new dish
    const response = await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        content,
        username,
       
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    //if the dish is added, the 'all' template will be rerendered
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add post');
    }
  }
  
  document
    .querySelector('.new-post-form')
    .addEventListener('submit', newFormHandler);