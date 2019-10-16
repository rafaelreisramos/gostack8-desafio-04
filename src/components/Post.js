import React from 'react';

function Post({ post }) {
  return (
    <div className="post">
      <div className="post-header">
        <img src={post.author.avatar} />
        <div className="post-author">
          <span>{post.author.name}</span>
          <small>{post.date}</small>
        </div>
      </div>
      <div className="post-content">
        {post.content}
      </div>
      {post.comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  )
}

function Comment({ comment }) {
  return (                
    <div className="comment" key={comment.id}>
      <div>
        <img src={comment.author.avatar} />     
        <p>
          <span>{comment.author.name} </span>
          {comment.content}
        </p>
      </div>          
    </div>
  );
}

export default Post;
