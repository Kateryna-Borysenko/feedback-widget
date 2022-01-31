import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ categories, onClickBtn }) => (
  <div className={styles.wrap}>
    {categories.map(category => (
      <button
        key={category}
        className={styles.btn}
        type="button"
        onClick={() => onClickBtn(category)}
      >
        {category}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
