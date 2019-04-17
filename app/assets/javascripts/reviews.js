//Review object
class Review {
    constructor(obj) {
      this.id = obj.id
      this.stars = obj.stars
      this.comments = obj.comments
      this.add_at = obj.add_at
      this.user = obj.user
      this.book = obj.book
    }

    render(){
      return ` <a class=" list-group-item list-group-item-action " href="/reviews/${this.id}">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">${this.user.full_name}</h5>
                <small>${this.add_at}</small>
              </div>
              <p class="mb-1">${this.comments}</p>
              <small>${showStars(this.stars)}</small>
              </a>`
    }

    showStars(rating){
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

}

Review.prototype.show = function() {
  let html = `<h1 class="text-center "> ${this.book.title} </h1> <hr class="my-4">`
  html += `<div class='row justify-content-center'>
            <div class="col-sm-4 col-md-3"><h4>Review by : </h4></div>
            <div class="col-sm-2 px-sm-1"><h4> ${this.user.full_name} </h4></div>
            <div class="col-sm-2 col-sm-offset-3"><h4>Stars: </h4></div>
            <div class="col-sm-3"><h4> ${this.showStars(this.stars)} </h4></div>
          </div>`
  html += `<div class="row justify-content-center pt-sm-4">
          <div class="col-sm-4  col-sm-offset-3"></div>
              <div class="col-sm pl-sm-2"><h4>Comments: </h4></div>
              <div class="col-sm"><p>${this.comments}</p></div>

          </div>`
  return html
}
