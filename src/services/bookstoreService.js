export default class BookstoreService {

    data = [
        {id: 1, title: 'Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming', author: 'Marijn Haverbeke', publicationDate: ' December 4, 2018', price: 35, 
        coverImg: 'https://eloquentjavascript.net/img/cover.jpg'},
        {id: 2, title: 'Learning React: Functional Web Development with React and Redux', author: 'Alex Banks & Eve Porcello', publicationDate: ' May 18, 2017', price: 47, 
        coverImg: 'https://images-na.ssl-images-amazon.com/images/I/51FHuacxYjL._SX379_BO1,204,203,200_.jpg'},
    ]

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                if(0.1 < Math.random()) {
                    resolve(this.data)
                } else {
                    reject(new Error('Ops something went wrong'))
                }
            }, 1000)
        })
    }
}