import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import moment from 'moment/moment'

const birthday = "05/14/2003"
const age = moment().diff(birthday, 'years');

const inter = Inter({ subsets: ['latin'] })

async function apiRequest(){
  return fetch("https://www.pronoundb.org/api/v2/users/63c2d94d94606f1e365f05cf")
  .then((response) => response.json())
  .then((responseJson) => {return responseJson})
}

async function apiResponse(){
  response = await apiRequest()
}

function replaceWithBrHeader() {
  return Header.replace(/\n/g, "<br />")
}
function replaceWithBr() {
  return AboutMe.replace(/\n/g, "<br />")
}
apiResponse()
const AboutMe = "Name: Skye \n Age : " + age + " \n Pronouns: She/They"
const Header = "About me"

export default function Home() {
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div id="main">
          <div class="inner">
            <div id="container01" class="container">
              <div class="wrapper">
              <p class="centeredHead" dangerouslySetInnerHTML={{__html: replaceWithBrHeader()}} />
              <p class="centered" dangerouslySetInnerHTML={{__html: replaceWithBr()}} />
              </div>
            </div>
          </div>
        </div> 
      </main>
    </>
  )
}
