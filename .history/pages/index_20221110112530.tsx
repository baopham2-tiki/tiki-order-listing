import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../slices/counterSlice'
import { RootState } from '../store'
import styled from 'styled-components'
import axios from 'axios'

export default function Home() {
  return <div className={styles.container}></div>
}
