import Header from './components/header.js';
import SectionOne from './components/section_one.js';
import SectionTwo from './components/section_two.js';
import SectionThree from './components/section_three.js';
import SectionFour from './components/section_four.js';
import SectionFive from './components/section_five.js';
import SectionSix from './components/section_six.js';
import SectionSeven from './components/section_seven.js';
import SectionEight from './components/section_eight.js';
import Footer from './components/footer.js';
import './App.css';

function App() {
  return (
    <div className="main_div">
      <div className="sub_main_div">
        {/* header section */}
        
          <Header />

        {/* body section one */}

          <SectionOne />

        { /* body section two */}
        
          <SectionTwo />

        { /* body section three */}
        
          <SectionThree />

        { /* body section four */}
        
          <SectionFour />

        { /* body section five */}
        
          <SectionFive />

        { /* body section six */}
        
          <SectionSix />

        { /* body section seven */}
        
          <SectionSeven />

        { /* body section eight */}
        
          <SectionEight />

        { /* footer */}

          <Footer />

      </div>
    </div>
  )
}

export default App;