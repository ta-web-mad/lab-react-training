import React from 'react';
import './App.css';
import IdCard from './IdCard';
import Greetings from './Greeting';
import Random from './Random';
import BoxColor from './BoxColor';
import CreditCard from './CreditCard';
import Rating from './Rating';
import DriverCard from './DriverCard';




function App() {
  return (
    <div className="App">

      <h3>IdCard</h3>
      <div className='row student'>
        <div className='col -2'>
          <img src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="iamge" width="150px" />
        </div>
        <div className='col-10 idcard-container'>
          <IdCard
            lastName='M'
            firstName='Victor'
            gender='male'
            height={[185]}
            birth={[new Date('1992-07-14')]}
          />
        </div>
      </div>

      <section>
        <h3>Greeting</h3>
        <div className='greeting'>
          <Greetings lang="de">Ludwig</Greetings>
        </div>
        <div className='greeting'>
          <Greetings lang="fr">François</Greetings>
        </div>

      </section>

      <section>
        <h3>Random</h3>
        <div className='greeting'>
          <Random min={1} max={6} />
          <Random min={1} max={100} />
        </div>
      </section>

      <section>
        <h3>BoxColor</h3>
        <div className='color'>
          <BoxColor r={255} g={100} b={100} />
        </div>
        <div className='colorTwo'>
          <BoxColor r={128} g={255} b={0} />
        </div>
      </section>

      <section>
        <h3>CreditCard</h3>
        <div className='container'>
          <div className="row align-items-start">
            <div className='col'>
              <CreditCard
                type="Visa"
                number="0123456789018845"
                expirationMonth={3}
                expirationYear={2021}
                bank="BNP"
                owner="Maxence Bouret"
                bgColor="#11aa99"
                color="white" />
            </div>
            <div className='col'>
              <CreditCard
                type="Master Card"
                number="0123456789010995"
                expirationMonth={3}
                expirationYear={2021}
                bank="N26"
                owner="Maxence Bouret"
                bgColor="#eeeeee"
                color="#222222" />
            </div>
            <div className='col'>
              <CreditCard
                type="Visa"
                number="0123456789016984"
                expirationMonth={12}
                expirationYear={2019}
                bank="Name of the Bank"
                owner="Firstname Lastname"
                bgColor="#ddbb55"
                color="white" />
            </div>
          </div>
        </div>
      </section>



      <section>

        <h3>Rating</h3>

        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>

      </section>

      <section>
      
        <div className='toyota'>
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: "Toyota Corolla Altis",
            licensePlate: "CO42DE"
          }} />

        </div>
        <div className='toyota'>
        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: "Audi A3",
            licensePlate: "BE33ER"
          }} />
        </div>

      </section>






    </div>
  );
}

export default App;
