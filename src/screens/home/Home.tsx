import React from 'react';
import styles from './Home.module.css'

function Home() {
  return (
    <div>
      <h1>Super Rasist Company</h1>
      <div className={styles.postcard}>
        <h2>Username</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aut recusandae rem libero! Ut vero voluptatum odit exercitationem culpa saepe commodi temporibus fugit pariatur laboriosam! Adipisci, ratione! Sapiente a voluptatem, dolore quod soluta dolorum quasi deleniti quas accusamus quidem mollitia minima. A adipisci dignissimos quo minus reiciendis facere tempora eos quasi iure, saepe molestias, vitae debitis! Quam natus fuga culpa, deserunt quod est nisi reiciendis? Quis repudiandae esse earum eveniet? Recusandae blanditiis in nesciunt officiis assumenda beatae at laboriosam. Tempora voluptatem exercitationem distinctio illo sit repellendus dolorum in maxime beatae aliquid odio, ab, quisquam maiores labore repellat quod at? Aliquam.</p>
        <img className={styles.image} src="dogo.jpg" alt="postImage" />
        <div className={styles.icons}>
          <img src="comment-dots.png" alt="commentIcon" className={styles.icon} />
        </div>
      </div>
    </div>
  )
}

export default Home;