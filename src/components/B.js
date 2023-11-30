import React from 'react'

const Message = React.memo(({message}) =>{
    return (<p>{message}</p>);
});

const ListItem = React.memo(({post})=>{
  console.log(post);
  return (
    <li key={ post.id }>
        <p>{ post.title }</p>
    </li>
  );  
});

const List = React.memo(({ posts }) =>{
    return (
        <ul>
            { posts.map( post => {                
                <ListItem post={ post } />
            })}
        </ul>
    );
});

export default function B({message, posts}) {

    return (
      <div>
        <h1>B components</h1>
        <Message  message={message}/>
        <List posts={posts}/>
      </div>
    );
  }
  