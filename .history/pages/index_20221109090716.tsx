import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../slices/counterSlice';
import { RootState } from '../store';

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Value 0{count}</h1>
        <button onClick={() => dispatch(increment())}>Increament</button>
        <button>Decreament</button>
      </main>
    </div>
  );
}
