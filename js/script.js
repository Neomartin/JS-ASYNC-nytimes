const apiKey = 'rhkbpJMzrXvWCvqJ5PDeFGUR8Lf3nFdl';
const secretKey = 'tUJhP7bjRMHnXiH5';

const archiveURL = `https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=rhkbpJMzrXvWCvqJ5PDeFGUR8Lf3nFdl`;

const searchURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${apiKey}`;
const bookURL = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${apiKey}`;
const topStoriesURL = `https://api.nytimes.com/svc/topstories/v2/science.json?api-key=${apiKey}`;

async function articleRequest() {
    try {
        let response = await axios.get(topStoriesURL);
        console.log(response);
        renderCards(response.data.results);
    } catch (error) {
        console.log(error)
    }
}

function renderCards(stories) {
    console.log(stories)
    stories.forEach(story => {
        const card = document.createElement('div');
        card.classList.add('col-12', 'col-md-6', 'col-lg-4');
        
        card.innerHTML = `  <div class="card">
                                <img src="${story.multimedia?.length ? story.multimedia[1].url : '/assets/images/default.jpg'}" class="card-img-top" alt="${story.title}" lazy="loading">
                                <div class="card-body">
                                    <h5 class="card-title">${story.title}</h5>
                                    <p class="card-text">
                                        ${story.abstract}
                                    </p>
                                    <a href="${story.uri}" class="btn btn-primary">Ver historia</a>
                                </div>
                            </div>`;

        document.getElementById('card-container').appendChild(card);
    });
    
}

const articles = articleRequest()