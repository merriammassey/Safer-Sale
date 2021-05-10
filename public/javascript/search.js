





const search = document.querySelector('#searchBar')

//need to get all posts
  // return response.body();


async function searchFormHandler (){
const response =  await fetch("/api/posts");
const posts = response.json()
console.log(posts)
     const filteredPosts = posts.filter( post => {
    post.title.includes(searchInput) || post.description.includes(searchInput);
     })
     console.log(filteredPosts)
}

//display data

search.addEventListener('keyup', searchFormHandler)