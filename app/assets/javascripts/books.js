//set up a document ready in order to detect when our HTML page has loaded, and the document is ready to be manipulated:
$(document).ready(function() {
    // list all event listener functions
    if (document.getElementById('ajax-content') ) {
      listenAllRecipesClick();
      listenMyRecipesClick();
      listenForNewRecipeClick();
    }
});

// Shorthand for $( document ).ready()
$(
    
)

//Book object
class Book {
    constructor(obj) {
      this.id = obj.id
      this.title = obj.title
      this.isbn = obj.isbn
      this.nbr_page = obj.nbr_page
      this.summary = obj.summary
      this.publication_year = obj.publication_year
      this.created_at = obj.created_at
      this.author = obj.author
      this.reviewers = obj.reviewers
      this.reviews = obj.reviews
    }
}

  //User object
class User {
    constructor(obj) {
      this.id = obj.id
      this.email = obj.email
      this.full_name = obj.full_name
      this.books = obj.books
      this.reviews = obj.reviews
      this.reviewed_books = obj.reviewed_books
    }
}

function showStars(rating){
  switch(rating){
    case 5:
      return "⭐️ ⭐️ ⭐️ ⭐️ ⭐️"
    case 4:
      return "⭐️ ⭐️ ⭐️ ⭐️"
    case 3:
      return "⭐️ ⭐️ ⭐️"
    case 2:
      return "⭐️ ⭐️"
    case 1:
      return "⭐️"
    default:
     return"No ratings yet. Be the first?"
  }
}