import styles from './signup.module.css';

function SignUpForm({ className }) {
  return (
    <div id="revue-embed" className={[styles.embed, className].join(' ')}>
      <div className={styles.leftColumn + ' ' + styles.column}>
        <h2> Subscribe to the Newsletter</h2>
        <p>
          For ambitious leaders who want to build better products and grow
          faster 🤘🏾
        </p>
      </div>
      <div className={styles.column}>
        <form
          action="https://www.getrevue.co/profile/lucianohgo/add_subscriber"
          method="post"
          id="revue-form"
          name="revue-form"
          target="_blank"
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
            <label htmlFor="member_first_name">First name</label>
            <input
              className={styles.input}
              placeholder="Guybrush"
              type="text"
              name="member[first_name]"
              id="member_first_name"
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
    </div>
  );
}

export { SignUpForm };
export default SignUpForm;
