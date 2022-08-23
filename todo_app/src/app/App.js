import React, {Component} from 'react';
import Header from '../components/header/header';
import MakePost from '../components/makePost/makePost';
import PostList from '../components/postList/postList';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
          this.state = {
            data: [
                {label: "Buy some flowers!", important: true, id: 1, check: false},
                {label: "Read a new book", important: false, id: 2, check: false},
                {label: "Watch a new TV show", important: false, id: 3, check: false}
            ],

            filter: "all",

            term: ""
        }

        this.maxId = 3;

        this.addItem = (body) => {
          const newItem = {
            label: body, 
            active: false,
            id:  ++this.maxId
          }

          this.setState(({data}) => {

            const newArr = [...data, newItem];
            return({
              data: newArr
            })
          })

        }

        this.onToggleImportant = (id) => {
            this.setState(({data}) => {
              const index = data.findIndex(item => item.id === id);
              const oldItem = data[index];
              const newItem = {...oldItem, important: !oldItem.important};
              const newData = [...data.slice(0, index), newItem, ...data.slice(index +1)];
              return {
                data: newData
              }
            })
        }

        this.onChecked = (id) => {
          this.setState(({data})=> {
            const index = data.findIndex(item => item.id === id)
            const oldItem = data[index];
            const newItem = {...oldItem, check: !oldItem.check};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
              data: newArr
            }
          })
        }

        this.onFilter = (filter) => {
          this.setState(() => {
            return {
              filter: filter
            }
          })
        }

        this.filterPost = (items, filter) => {

          if (filter === "important") {
              return items.filter(item => item.important);
          } else {
              return items;
          }
        }

        this.onSearch = (word) => {
          this.setState(() => {

            return {
              term: word
            }

          })
        }

        this.searchPost = (posts, word) => {
          if (word.length === 0) {
            return posts
          }
            return posts.filter(post => {
              const postLabel = post.label.toLowerCase();
              return postLabel.indexOf(word) > -1;
            })
        }



}
    render() {

      const {data, term, filter} = this.state;

      const filterdPosts = this.filterPost(this.searchPost(data, term), filter);

      this.searchPost(data, term);

      let total = this.state.data.length; 

      data.forEach(post => {
        if (post.check) {
          total = total -1;
        }
      })

    return (
        <>
          <Header onSearch={this.onSearch}/>
          <MakePost ref={this.myRef} onAdd={this.addItem}/>
          <PostList onToggleImportant={this.onToggleImportant} filterState={this.state.filter} onFilter={this.onFilter} onAll={this.onAll} total={total} onChecked={this.onChecked} posts={filterdPosts}/>;
        </>
    );

}


}

export default App;
