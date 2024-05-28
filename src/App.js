import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CallToAction from './components/CallToAction';
import BannerSection from './components/BannerSection';
import BannerContainer from './components/BannerContainer';

function App() {
  return (
    <div className="App">
      <header>
      <a href='https://playtheorynh.myturn.com' target='_blank' id='logo-link'>
        <img src={`${process.env.PUBLIC_URL}/play-theory-logo-revised.png`} className='App-logo'/>
      </a>
      </header>
      <div>
        <Navbar/>
      </div>
      <div id='section-1'>
        <CallToAction
          title='This stuff is FUN!'
          bodyText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          buttonText='WANT TO KNOW MORE?'
          italicizeLastWord={true}
        />
      </div>
      <BannerContainer>
        <BannerSection
          title="SAVE MONEY"
          bodyText="The average American child receives more than $6,500 worth of toys in their lifetime, according to The Toy Industry Association. We believe there’s a more cost-effective way!"
          additionalContent={<a href="https://www.toyassociation.org">The Toy Industry Association</a>}
        />
        <BannerSection
          title="SAVE SPACE"
          bodyText="The average American child receives more than $6,500 worth of toys in their lifetime, according to The Toy Industry Association. We believe there’s a more cost-effective way!"
        />
        <BannerSection
          title="REDUCE CONSUMER WASTE"
          bodyText="The average American child receives more than $6,500 worth of toys in their lifetime, according to The Toy Industry Association. We believe there’s a more cost-effective way!"
        />
        <BannerSection
          title="INCREASE VARIETY"
          bodyText="The average American child receives more than $6,500 worth of toys in their lifetime, according to The Toy Industry Association. We believe there’s a more cost-effective way!"
        />
      </BannerContainer>
      <div id='section-2'>
        <CallToAction
          title='We offer Memberships'
          bodyText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          buttonText='SIGN UP NOW'
        />
      </div>
      <BannerContainer>
      <BannerSection
          title="SAVE YOUR MONEY"
          bodyText="The average American child receives more than $6,500 worth of toys in their lifetime, according to The Toy Industry Association. We believe there’s a more cost-effective way!"
        />
        <BannerSection
          title="SAVE YOUR MONEY"
          bodyText="The average American child receives more than $6,500 worth of toys in their lifetime, according to The Toy Industry Association. We believe there’s a more cost-effective way!"
        />
        <BannerSection
          title="SAVE YOUR MONEY"
          bodyText="The average American child receives more than $6,500 worth of toys in their lifetime, according to The Toy Industry Association. We believe there’s a more cost-effective way!"
          additionalContent={<a href="https://www.toyassociation.org">The Toy Industry Association</a>}
        />
      </BannerContainer>
      <div id='section-3'>
        <CallToAction
          title='Stay Informed'
          bodyText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          buttonText='JOIN OUR NEWSLETTER'
        />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
