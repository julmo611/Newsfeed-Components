// // Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

// class Article {
//   constructor(domElement) {
//     // assign this.domElement to the passed in domElement
//     this.domElement;
//     // create a reference to the ".expandButton" class. 
//     this.expandButton;
//     // Using your expandButton reference, update the text on your expandButton to say "expand"
    
//     // Set a click handler on the expandButton reference, calling the expandArticle method.
    
//   }

//   expandArticle() {
//     // Using our reference to the domElement, toggle a class to expand or hide the article.

//   }
// }

// /* START HERE: 

// - Select all classes named ".article" and assign that value to the articles variable.  

// - With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

// */
 
// // let articles;

// class Article {
//   // constructor
//   constructor(article) {
//     // panel is the individual DOM panel
//     this.panelButtons = article.querySelector('.panel-buttons');
//     this.panelBtnOpen = article.querySelector('.panel-btn-open');
//     this.panelBtnClose = article.querySelector('.panel-btn-close');
//     // this.panelContent = article.querySelector('.panel-content');
    
//     //this.panelButtons.addEventListener('click', this.togglePanel.bind(this));
//     this.panelButtons.addEventListener('click', () => this.togglePanel());
    
//   }
//   // methods
//   togglePanel() {
//     console.log(this.panelBtnOpen);
//     this.panelBtnOpen.classList.toggle('hide-btn');
//     this.panelBtnClose.classList.toggle('hide-btn');
//     this.panelContent.classList.toggle('toggle-on');
//   }
// }

// const articles = document.querySelectorAll('.article');
//   articles.forEach( article => new Article(article));