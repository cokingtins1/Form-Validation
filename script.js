
// let myLibrary = []

// const addBook = document.getElementById("newBook")
// const submit = document.getElementById("submit")

// var popUp = document.getElementById('myModal')
// var span = document.getElementsByClassName("close")[0];

// const titleInput = document.getElementById('title')
// const authorInput = document.getElementById('author')
// const pagesInput = document.getElementById('pages')

// // constructor for Book
// class Book{
//     constructor(title, author, pages){
//         this.title = title
//         this.author = author
//         this.pages = pages
//     }
// }

// // display pop-up for input fields, clear previous inputs from localstorage

// let newBook
// function addBookToLibrary(){
//     newBook = new Book(titleInput.value, authorInput.value, pagesInput.value)
//     myLibrary.push(newBook)
//     popUp.style.display = "none"
//     restore()
// }

// function render(){
//     const display = document.getElementById('Library-container')
//     const books = document.querySelectorAll('.book')
//     books.forEach(book => display.removeChild(book))

//     for(let i =0; i<myLibrary.length; i++){
//         createBook(myLibrary[i]);
//     }

// }

// // DOM manipulation
// function createBook(item){
//     const libcontainer = document.getElementById('Library-container');
//     const bookDiv = document.createElement('div')
//     const titleDiv = document.createElement('div')
//     const authorDiv = document.createElement('div')
//     const pagesDiv = document.createElement('div')

//     bookDiv.classList.add('book')
//     libcontainer.append(bookDiv)
    
//     titleDiv.classList.add('title')
//     titleDiv.innerText = "Title: " + item.title
//     bookDiv.append(titleDiv)

//     authorDiv.classList.add('author')
//     authorDiv.innerText = "Author: " + item.author
//     bookDiv.append(authorDiv)

//     pagesDiv.classList.add('pages')
//     pagesDiv.innerText = "Pages: " + item.pages
//     bookDiv.append(pagesDiv)
// }

// // stores myLibrary to local storage
// function storeData(){
//     localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary))
// }


// // checks is local storage contains data, gets data if true, renders data if false
// function restore(){
//     if(!localStorage.myLibrary){
//         render()
//     }else{
//         let objects = localStorage.getItem('myLibrary')
//         objects.JSON.parse(objects)
//         myLibrary = objects
//         render()
//         console.log(myLibrary)
//     }
// }

// // "submit" button functionality
// submit.addEventListener('click', addBookToLibrary)


// const myArray = [1,2,3,4,5]

// const doubledArray = myArray.map((number) => {
//     return number *2
// })


// console.log(doubledArray)

const nums = [3,3]
const target = 6


function twoSum(nums, target){
    
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i] + nums[j] === target){
                console.log([i,j])
            }
        }
    }
};

twoSum(nums,target)

