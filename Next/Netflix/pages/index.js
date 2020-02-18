import Layout from '../components/Layout'
import Header from '../components/Header'

import axios from 'axios'

const Index = (props) => (
  <Layout>
    <Header />
    <div className='space'>
    <ul>
      {props.data.map(({show}) => (
        <h1 key={show.id}>
          {show.name}
        </h1>
      ))}
    </ul>
    </div>
    <style jsx>
      {`
        .space{
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
      `}
    </style>
  </Layout>
);


Index.getInitialProps = async function () {
  const res = await axios.get('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.data

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    data: data
  }
};


export default Index;