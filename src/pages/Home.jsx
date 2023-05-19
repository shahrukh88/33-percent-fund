import React from 'react'
import '../components/Styles/home.css'
import dumy1 from '../assets/images/dumy1.jpg'
import dumy2 from '../assets/images/dumy3.png'
import dumy3 from '../assets/images/dumy2.png'

const Home = () => {
  return (
    <div>
        
        <section className='about__us' >
            <h3>33% Fund is a dividend-oriented hedge fund that aims to generate attractive absolute investment returns with moderate volatility and low beta to the S&P 500. Based in Houston, the fund's investment strategy seeks to identify dividend-paying companies undergoing transformative events or securities experiencing price dislocations, aligning with 33% Fund's multi-strategy approach.
</h3>
        </section>

        <section className='our__invest' id="about">
            <h1>01</h1>
            <h1>ABOUT US</h1>
        </section>

        <section className='about__below'>
        
          <div className='about__below__row' >
         
          <div className='about__below__col1' >
          Welcome to the 33% Fund website, where we offer our investors the opportunity to invest in dividend-oriented stocks with a proven track record of high annual returns. Our hedge fund provides a reliable and lucrative investment option for those seeking to grow their wealth over time.
          </div>
          
          <div className='about__below__col1' >
         1. The objective of 33% Fund is to provide investors with high annual returns through investing in dividend-oriented stocks.
          <br />
        2. 33% Fund aims to generate attractive absolute investment returns with moderate volatility and low beta to the S&P 500 by identifying companies going through transformative events and securities with price dislocations.

          </div>
         
          </div>
       
        </section>


        <section className='our__investb' id="stratgies">
            <h1>02</h1>
            <h1>OUR INVESTMENT</h1>
            <h1>STRATEGIES</h1>
        </section>

        <section className='about__below'>
        
          <div className='about__below__row' >
         
          <div className='about__below__col1' >
            <h2>Dividend-Oriented Strategy:</h2>
            <p>Invest in stocks with a history of paying dividends, aiming to generate income for investors while offering long-term growth potential.</p>
            <h2>Value Investing Strategy:</h2>
            <p>Identify undervalued stocks trading at a discount to their intrinsic value, with a focus on buying and holding for the long term.
</p>
            <h2>Growth Investing Strategy:</h2>
            <p>Invest in companies with high growth potential, typically with a focus on emerging markets or innovative industries.
</p>
          </div>
          
          <div className='about__below__col1' >
            <h2>Special Situations Strategy:</h2>
            <p> Identify companies undergoing transformative events such as mergers, acquisitions, spin-offs, or bankruptcies, and invest in securities that exhibit price dislocations due to these events.</p>
            <h2>Asset Allocation Strategy:</h2>
            <p>To reduce risk and generate steady returns over time, we diversify assets over a variety of asset classes, including equities, fixed income, and alternative investments.</p>

          </div>
         
          </div>
       
        </section>


        <section className='our__investc' id="leadership">
            <h1>03 </h1>
            <h1>OUR LEADERSHIP TEAM</h1>
        </section>

        <section className='our__invest_below'>
        <div className='our__invest_below__row' >
         <div className='our__invest_below__col1' >
         <img src={dumy1} alt='profile'/>
         </div>
         
         <div className='our__invest_below__col2' >
           <h1>Muhammad Ali</h1>
           <h2>Founding Partner</h2>
           <p>Mohammad Ali, the founder of 33% Fund, is a seasoned investor and experienced financial analyst with a successful career spanning several decades. With an innate knowledge of the financial markets and a talent for identifying investment opportunities, Mohammad has built a successful hedge fund and other businesses. He is passionate about educating people about financial literacy and believes it is the key to long-term success. When he is not strategizing new ways to break the market, Mohammad can be found kickboxing.</p>
           <hr className='line1'/>

         </div>
        
         </div>


         <div className='our__invest_below__row' >
         <div className='our__invest_below__col1' >
         <img src={dumy2} alt='profile'/>
         </div>
         
         <div className='our__invest_below__col2' >
         <h1>Veronica Kanaan</h1>
           <h2>VP Administration</h2>
           <p>Veronica Kanaan is the VP of Administration at 33 Percent Fund. With over a decade of experience in finance, she is known for her exceptional organizational skills and commitment to excellence. Kanaan oversees accounting, HR, and operations to ensure the firm runs smoothly. She is a strategic thinker who is dedicated to improving processes and staying ahead of the curve. In her free time, she enjoys reading, practicing yoga, and exploring new restaurants.</p>
           <hr className='line1'/>
         </div>
        
         </div>



         <div className='our__invest_below__row' >
         <div className='our__invest_below__col1' >
         <img src={dumy3} alt='profile'/>
         </div>
         
         <div className='our__invest_below__col2' >
         <h1>Shahzad Ashraf</h1>
           <h2>Marketing Director</h2>
           <p>Shahzad Ashraf is the Director of Marketing at 33 Percent Fund. With years of marketing experience, he is known for his strategic thinking and ability to build strong relationships. Ashraf oversees all aspects of the firm's marketing efforts, from branding to public relations. He is a creative problem solver committed to delivering exceptional service. In his free time, he enjoys hiking, traveling, and volunteering.
</p>
           <hr className='line1'/>
         </div>
        
         </div>  


        </section>
              
        <section className='our__investd' id="careers">
            <h1>04 </h1>
            <h1>CAREERS</h1>
        </section>
       
       <section className='carrer__below'>
          <p>
          Are you looking for a challenging career that combines your passion for finance with a dynamic, entrepreneurial spirit? Look no further than 33% Fund! Our hedge fund is seeking talented professionals who are dedicated to achieving exceptional investment returns and making an impact in the financial industry.
<br /><br />
At 33% Fund, we offer a fast-paced, collaborative work environment where you'll have the opportunity to work alongside experienced investors and analysts to identify and capitalize on investment opportunities. We value creativity, innovation, and a willingness to take risks, and we're committed to investing in our employees' professional development through ongoing training and mentorship.
<br /><br />
You will have the opportunity to work on a variety of investment strategies as a member of the 33% Fund team, including dividend-oriented equities, value investing, growth investing, special situations, and asset allocation. We need excellent expertise to assist us in achieving our objective of generating attractive absolute investment returns with the low beta to the S&P 500 and moderate volatility.
<br /><br />
We invite you to look into job opportunities at 33% Fund if you're a self-starter with a love of finance and a desire to work in a stimulating environment. Join us and contribute to our efforts to create a more prosperous future for our investors and the sector at large.

          </p>
       </section>
                                                 

    </div>
  )
}

export default Home