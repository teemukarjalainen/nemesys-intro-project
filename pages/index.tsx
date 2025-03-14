import type { NextPage } from 'next';
import Head from 'next/head';
import useSWR from 'swr';

import styles from '../styles/Home.module.css';
import { useState } from 'react';
import ListItem from '../components/ListItem';

const MAX_RESULTS_PER_PAGE = 50; // This is defined by the open API at: https://avoindata.prh.fi/fi/krek/swagger-ui

/** Get data from API (used as a fetcher for SWR) */
const get = (...args: Parameters<typeof fetch>) => fetch(...args).then(res => res.json());

const Home: NextPage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  // Fetcher for the open API using page number as a query parameter so we can implement pagination
  const { data, error, isLoading } = useSWR(`/api/fetch?page=${pageNumber}`, get);
  // Fetch the "subtitle" which has information regarding the open API used for this project, this was mostly for learning purposes in using Diploi's environment variables
  const { data: subtitle } = useSWR<string>('/api/subtitle', get);

  // Handle next and previous page actions
  const nextPage = () => {
    if (data?.data?.companies?.length === 50) {
      setPageNumber(pageNumber + 1);
    }
  };

  const previousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  return (
    <>
      <Head>
        <title>Nemesys intro project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Finland&apos;s company registry
          <small>Using open API data from: <a className={styles.outsideLink} href={subtitle}>PRH Avoin Data</a></small>
        </h1>

        {isLoading && <div style={{ padding: 50 }}>Loading…</div>}
        {error || data?.error && <div style={{ padding: 50 }}> Error: { error?.message || data?.error} </div>}
        {!isLoading && !error && (
          <>
            <br/>
            <div className={styles.totalResults}>Total results: {data?.data?.totalResults}</div>
            <ol className={styles.list}>
              {data?.data?.companies?.map((item: any, index: number) => (
                <ListItem
                  key={index}
                  businessId={item.businessId?.value}
                  names={item.names}
                  mainBusinessLine={item.mainBusinessLine}
                  companyForms={item.companyForms}
                  registeredEntries={item.registeredEntries}
                ></ListItem>
              ))}
            </ol>
          </>
        )}
        {!error && (
          <div className={styles.pagination}>
            <button
              disabled={pageNumber <= 1 || isLoading}
              onClick={previousPage}
              className={styles.pageButton}
            >
              Previous
            </button>
            <span className={styles.pageNumber}>Page {pageNumber}</span>
            <button
              disabled={data?.data?.companies?.length < MAX_RESULTS_PER_PAGE || isLoading}
              onClick={nextPage}
              className={styles.pageButton}
            >
              Next
            </button>
          </div>
        )}

        <footer className={styles.footer}>
          <p>
            © Copyright 2024 <a href="https://www.linkedin.com/in/teekarjalainen/">Teemu Karjalainen</a>
          </p>
        </footer>
      </main>
    </>
  );
};

export default Home;
