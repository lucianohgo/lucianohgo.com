import Link from 'next/link';
import { PageHead } from '../shared/components/PageHead';
import Layout from '../shared/components/Layout';
import Picture from '../shared/components/Picture';
import styles from './home.module.css';
import React from 'react';
import SignUpForm from '../shared/components/SignUpForm';
import MetaTags from '../shared/components/MetaTags';
import { Profiles } from '../shared/components/Footer/Profiles';

const name = 'lucianohgo';
const description =
  "Hey, I'm Lu 👋🏾. I write at Lu's Newsletter, work on making living and finding a home awesome at QuintoAndar and try to help as many people as I can";

export default function Home() {
  return (
    <>
      <Layout>
        <PageHead />
        <MetaTags name={'lucianohgo'} description={description} />
        <section className={styles.container}>
          <div className={styles.about}>
            <div className={styles.avatar}>
              <Picture
                file="profile"
                imgProps={{
                  className: `${styles.thumb}`,
                  alt: name,
                }}
              />
            </div>
            <h1>
              Hey, I'm{' '}
              <Link href="/me">
                <a>Lu</a>
              </Link>{' '}
              😊
            </h1>
            <h2>
              I write at{' '}
              <a href="https://www.getrevue.co/profile/lucianohgo">
                this newsletter
              </a>
              , work on making living and finding a home awesome at{' '}
              <a href="https://quintoandar.com.br">QuintoAndar</a> and try to
              help as many people as I can.
            </h2>
            <Profiles />
          </div>
        </section>
        <SignUpForm className={styles.form} />
      </Layout>
    </>
  );
}
