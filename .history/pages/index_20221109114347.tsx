import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../slices/counterSlice';
import { RootState } from '../store';
import axios from 'axios';

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  //dùng axios để gọi api 'https://api.tala.xyz/v2/orders?page=2&limit=10'
  ex;
  return <div className={styles.container}></div>;
}
