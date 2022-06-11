import type { NextPage } from 'next'
import CardImage from '../components/common/card/card-img'
import Layout from '../components/layout'
import { cardSettingsDashboard } from '../settings/dashboard/card-settings'

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <div className="m-3">
          <div className="row" >
            {cardSettingsDashboard?.map((item) => (<CardImage {...item} />))}
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Home
