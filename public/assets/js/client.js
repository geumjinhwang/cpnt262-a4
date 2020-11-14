fetch (`${window.location.origin}/api/v0/gallery`)
  .then(function(response){
    // json returned from server
    return response.json();
})
  .then(function(bongs){
  // data Javascript object 
  console.log(bongs);

  let output = '';

  bongs.forEach(function(bongs) {
    output += `<figure class="card">
                  <img src="/images/gallery/${bongs.id}.jpg" alt="${bongs.title}"
                  <figcaption>
                    <h5>${bongs.description}</h5>
                  </figcaption>
                </figure>`;
  });

  // container for images
  document.querySelector('.gallery').innerHTML = output;
})

.catch(function(error){
  if (error) {
    console.log ('Error');
  }
});