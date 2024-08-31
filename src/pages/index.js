import Head from "next/head";
import {Header} from "../components/Header";
import {DealsFeed} from "../components/DealsFeed";
import {Banner} from "../components/Banner";
import axios from "axios";
import {API_HEADERS, DEALS_URL, PRODUCTS_URL} from "../constants";

export default function Home({deals}) {
  return (
    <div>
        <Head>
            <title>Compare.ai</title>
        </Head>
        <Header />
        <main className='max-w-screen-2xl mx-auto'>
            <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto'>
                <DealsFeed deals={deals}/>
            </div>
        </main>
    </div>
  );
}

export async function getServerSideProps(context) {
    const response = await axios.get(DEALS_URL, {headers: API_HEADERS});
    return { props: { deals: response.data.products } };
}

