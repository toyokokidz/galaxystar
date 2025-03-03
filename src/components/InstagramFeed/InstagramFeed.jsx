import styles from './InstagramFeed.module.scss'

const posts = [
  {
    id: 1,
    image: "/images/insta-1.jpg",
    likes: "1.2K",
    comments: "124"
  },
  {
    id: 2,
    image: "/images/insta-2.jpg",
    likes: "2.5K",
    comments: "230"
  },
  {
    id: 3,
    image: "/images/insta-3.jpg",
    likes: "3.1K",
    comments: "180"
  },
  {
    id: 4,
    image: "/images/insta-4.jpg",
    likes: "1.8K",
    comments: "156"
  }
]

const InstagramFeed = () => {
  return (
    <section className={styles.instagram}>
      <div className={styles.container}>
        <h2>FOLLOW US ON INSTAGRAM</h2>
        <p>@gravastar_official</p>
        <div className={styles.grid}>
          {posts.map(post => (
            <div key={post.id} className={styles.post}>
              <img src={post.image} alt="Instagram post" />
              <div className={styles.overlay}>
                <div className={styles.stats}>
                  <span>♥ {post.likes}</span>
                  <span>💬 {post.comments}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InstagramFeed 