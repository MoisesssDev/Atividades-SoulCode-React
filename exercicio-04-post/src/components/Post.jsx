import styles from './Post.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Post({ post }) {
  const { title, body } = post;
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);
  let likeText = liked ? 'Descurtir' : 'Curtir';

  function handleLikePost() {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  }

  return (
    <div className={styles.post}>
      <h2>{title}</h2>
      <p>{body}</p>

      <div className={styles.actions}>
        <button onClick={handleLikePost} className={`${styles.like} ${liked ? styles.liked : ''}`}>
          {likeText}
        </button>
        <span>{likes} curtidas</span>
      </div>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};