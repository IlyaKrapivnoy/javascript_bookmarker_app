// Listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

// Save Bookmark
function saveBookmark(e) {
    // Get form values
    let siteName = document.getElementById('siteName').value;
    let siteUrl = document.getElementById('siteUrl').value;

    if(!siteName || !siteUrl) {
        alert('Please fill in the form')
        return false;
    }

    let expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    let regex = new RegExp(expression);

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

// Delete bookmark
function deleteBookmark(url){
    // Get bookmarks from localStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    // Loop through the bookmarks
    for(var i =0;i < bookmarks.length;i++){
      if(bookmarks[i].url == url){
        // Remove from array
        bookmarks.splice(i, 1);
      }
    }
    // Re-set back to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  
    // Re-fetch bookmarks
    fetchBookmarks();
  }

// Fecth bookmarks
function fetchBookmarks() {
    // Get bookmarks from local storage
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'))

    // Get output id
    let bookmarksResults = document.getElementById('bookmarksResults')

    // Build output
    bookmarksResults.innerHTML = '';
    for(let i = 0; i < bookmarks.length; i++) {
        let name = bookmarks[i].name;
        let url = bookmarks[i]. url;

        bookmarksResults.innerHTML += '<div class="well">'+
                                    '<h3 class="name">'+name+
                                    ' <a class="btn btn-secondary" style="margin-left: 30px" target="_blank" href="'+url+'">Visit</a> '+
                                    ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" style="margin-left: 10px" href="#">Delete</a> '+
                                    '</h3>'+
                                    '</div>';
    }   
}