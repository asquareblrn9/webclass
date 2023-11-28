import React from 'react'
import MainNav from './MainNav'
import Content from './Content'
import Footer from './Footer'
import Layout from './Layout'

const Home = () => {
   
  return (
    <>
   <Layout>
    <Content name="Book1 name" img="images/book1.jpg" price="$13">
        <h3>asjdlkjaslkd asjlkdjlas dja asd l;asjkd a sdl; kasd asldk ;sd ;asld ;lsak ;asd l;</h3>
        </Content>
    <Content name="Book2 name" img="images/book2.jpg" price="$33" />
    <Content name="Book3 name" img="images/book3.jpg" price="$93" />
    <Content />
    </Layout>
    </>
  )
}

export default Home