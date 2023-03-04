const loadAlUniverse = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    const hello = data.data.tools;
    console.log(hello);
    displayBlogs(data.data.tools);
}

const displayBlogs = blogs => {
    const blogContainer = document.getElementById('blogContainer');
    const featureContainer = document.getElementById('featureDetails');
    blogs.forEach(blog => {
        const blogDiv = document.createElement('div');
        blogDiv.classList.add('col')
        blogDiv.innerHTML = `
            <div class="card h-100">
                <img src="${blog.image}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">Features</h5>
                <p id="featureDetails" class="card-text"> 
                   ${blog.features}
                </p>
                <p style="float:right;">
                    <!-- Button trigger modal -->
                    <button type="button" class="btn btn-danger rounded-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <i class="fa-solid fa-arrow-right"></i>
                    </button> 
                </p>

                <!-- Modal -->
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Understood</button>
                    </div>
                    </div>
                </div>
                </div>


                <small class="text-muted">${blog.published_in}</small>
                </div>
            </div>
        `
        blogContainer.appendChild(blogDiv);
    })
}

const displayFeature = features => {
    const featureContainer = document.getElementById('')
}

loadAlUniverse();