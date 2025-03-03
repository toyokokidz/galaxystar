import styles from './Reviews.module.scss'

const reviews = [
  {
    id: 1,
    name: "John D.",
    rating: 5,
    text: "The sound quality is incredible, and the design is out of this world!",
    image: "/images/review-1.jpg"
  },
  {
    id: 2,
    name: "Sarah M.",
    rating: 5,
    text: "Best speaker I've ever owned. The RGB lighting effects are amazing.",
    image: "/images/review-2.jpg"
  },
  {
    id: 3,
    name: "Mike R.",
    rating: 5,
    text: "Perfect for gaming. The sound positioning is incredibly accurate.",
    image: "/images/review-3.jpg"
  }
]

const Reviews = () => {
  return (
    <section className={styles.reviews}>
      <div className={styles.container}>
        <h2>WHAT USERS SAY</h2>
        <div className={styles.grid}>
          {reviews.map(review => (
            <div key={review.id} className={styles.review}>
              <div className={styles.avatar}>
                <img src={review.image} alt={review.name} />
              </div>
              <div className={styles.stars}>
                {"★".repeat(review.rating)}
              </div>
              <p className={styles.text}>{review.text}</p>
              <p className={styles.name}>{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews 