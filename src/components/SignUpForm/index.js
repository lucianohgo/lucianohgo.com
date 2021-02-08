import styles from './signup.module.css';

function SignUpForm() {
  return (
    <div id="revue-embed" className={styles.embed}>
      <div className={styles.leftColumn + ' ' + styles.column}>
        <h2> Subscribe to the Newsletter</h2>
        <p>Get my latest content and cool things I dig up 🤘🏾</p>
      </div>
      <form
        action="https://www.getrevue.co/profile/lucianohgo/add_subscriber"
        method="post"
        id="revue-form"
        name="revue-form"
        target="_blank"
        className={styles.column}
      >
        <div className={styles.formGroup}>
          <label htmlFor="member_email">Email address</label>
          <input
            className={styles.input}
            placeholder="guybrush.threepwood@gmail.com"
            type="email"
            name="member[email]"
            id="member_email"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="member_first_name">
            First name <span>(Optional)</span>
          </label>
          <input
            className={styles.input}
            placeholder="Guybrush"
            type="text"
            name="member[first_name]"
            id="member_first_name"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="member_last_name">
            Last name <span>(Optional)</span>
          </label>
          <input
            className={styles.input}
            placeholder="Threepwood"
            type="text"
            name="member[last_name]"
            id="member_last_name"
          />
        </div>
        <div>
          <input
            className={styles.submit}
            type="submit"
            value="Subscribe"
            name="member[subscribe]"
            id="member_submit"
          />
        </div>
        <div className={styles.footer}>
          By subscribing, you agree with Revue’s{' '}
          <a target="_blank" href="https://www.getrevue.co/terms">
            Terms
          </a>{' '}
          and{' '}
          <a target="_blank" href="https://www.getrevue.co/privacy">
            Privacy Policy
          </a>
          .
        </div>
      </form>
    </div>
  );
}

export { SignUpForm };
export default SignUpForm;
