// Listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

// Save Bookmark
function saveBookmark(e) {
    // Get form values
    let siteName = document.getElementById('siteName').value;
    let siteUrl = document.getElementById('siteUrl').value;

    let bookmark = {
        name: siteName,
        url: siteUrl
    }
    console.log(bookmark)
    // Local Storage Test
    // localStorage.setItem('test', 'Hello World')
    // console.log(localStorage.getItem('test'))
    // localStorage.removeItem('test')
    // console.log(localStorage.getItem('test'))

    if(localStorage.getItem('bookmarks') === null) {
        // Init array
        let bookmarks = [];
        // Add to array
        bookmarks.push(bookmark);
        // Set to LocalStorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
    } else {
        // Get bookmarks from local storage
        let bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
        // Add bookmark to array
        bookmarks.push(bookmark)
        // Re-set back to Local Storage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
    }
    
    e.preventDefault();
}

// Fecth bookmarks
function fetchBookmarks() {
    // Get bookmarks from local storage
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'))

    // Get output id
    let bookmarksResults = document.getElementById('bookmarksResults')

    // Build output
    bookmarksResults.innerHTML = 'HELLO'
}