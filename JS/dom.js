const loadAlUniverse = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    const hello = data.data.tools;
    console.log(hello);
    displayBlogs(data.data.tools);
    displayFeature(data.data.tools);
    toggleSpinner(true);
}

const displayBlogs = blogs => {
    const blogContainer = document.getElementById('blogContainer');
    blogs = blogs.slice(0, 6);

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

                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                    aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
    
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modalBodyContainer">
                                <div class="leftModal">
                                    <h5>${blog.description}</h5>
                                    <div class="subscriptionContainer">
                                        <div class="months">$10/ <br />month Basic</div>
                                        <div class="months">$50/ <br />month Basic</div>
                                        <div class="months">Contact us Enterprise</div>
                                    </div>
                                </div>
                                <div class="rightModal">
                                    <div> <img src=${blog.image} class="img-fluid"> </img> </div>
                                    <h5 class="text-center m-2">Hi, how are you doing today?</h5>
                                    <div class="text-center m-2">I'm doing well, thank you for asking. How can I assist you
                                        today?</div>
                                </div>
                            </div>
    
                        </div>
                    </div>
                    </div>
                </p>
                <small class="text-muted">${blog.published_in}</small>
                </div>
            </div>
        `
        blogContainer.appendChild(blogDiv);

    })


}


loadAlUniverse();