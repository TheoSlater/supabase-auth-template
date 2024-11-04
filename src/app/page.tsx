import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h3>Welcome to the Simple Supabase Authentication Template</h3>
        <ol>
          <li>
            Get started by creating a database and then editing{" "}
            <code>src/lib/supabaseClient.ts</code> with your supabase{" "}
            <code>URL</code> and <code>ANON</code> key.
          </li>
          <li>Save and see your new login/signup page working.</li>
          <li>Enjoy creating your new project!</li>
        </ol>
      </main>
    </div>
  );
}
