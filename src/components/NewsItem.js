import React from 'react';

const NewsItem = ({ article }) => (
  <article >
    <div className="article-wrapper">
      <h2 className="text-center">{article.title}</h2>
      <img src={article.urlToImage} alt="" />
      <p className="text-center">{article.description}</p>
      <a href={article.url} target="_blank"> read more </a>
    </div>
  </article>
);

export default NewsItem ;


