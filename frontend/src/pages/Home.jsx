import React from 'react'
import '../styles/home.css';
import { Container,Row, col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-Video.mp4';
import worldImg from '../assets/images/world.png';
import Subtitle from '../shared/Subtitle';






const Home = () => {
  return <>
  {/* =========hero section starts here ============ */}
  <section>
    <Container>
      <Row>
        <Col lg="6">
          <div className="hero__content">
            <div className="hero_subtitle d-flex align items center ">
              <Subtitle subtitle={'know before you Go'}/>
              <img src={worldImg} alt="" />
            </div>
            <h1>Traveling opens the the door to <span className="highligh">
              memories</span></h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic animi nulla dicta deserunt accusantium quae iusto sint suscipit, tempore id repellendus consectetur distinctio illo cum fuga? Ipsum quod in voluptates.</p>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  
  </>
  
}

export default Home