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
    // Local Storage Test
    // localStorage.setItem('test', 'Hello World')
    // console.log(localStorage.getItem('test'))
    // localStorage.removeItem('test')
    // console.log(localStorage.getItem('test'))
    
    e.preventDefault();
}