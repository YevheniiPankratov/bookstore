export default class BookstoreService {

    data = [
        {id: 1, title: 'Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming', author: 'Marijn Haverbeke', publicationDate: ' December 4, 2018', price: 35, 
        coverImg: 'https://eloquentjavascript.net/img/cover.jpg'},
        {id: 2, title: 'Learning React: Functional Web Development with React and Redux', author: 'Alex Banks & Eve Porcello', publicationDate: ' May 18, 2017', price: 47, 
        coverImg: 'https://images-na.ssl-images-amazon.com/images/I/51FHuacxYjL._SX379_BO1,204,203,200_.jpg'},
        {id: 3, title: 'HTML and CSS: Design and Build Websites 1st Edition', author: 'Jon Duckett', publicationDate: ' November 1, 2011', price: 33, 
        coverImg: 'https://images-na.ssl-images-amazon.com/images/I/31u+YxJiNmL._SX397_BO1,204,203,200_.jpg'},
        {id: 4, title: 'HTML, CSS, and JavaScript All in One', author: 'Julie Meloni & Jennifer Kyrnin', publicationDate: 'March 29, 2019', price: 50, 
        coverImg: 'https://images-na.ssl-images-amazon.com/images/I/41mmeFbDTKL._SX380_BO1,204,203,200_.jpg'},
    ]

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                if(Math.random() > 0.1) {
                    resolve(this.data)
                } else {
                    reject(new Error('Ops something went wrong'))
                }
            }, 1000)
        })
    }
}