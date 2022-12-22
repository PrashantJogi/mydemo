import React from 'react';

class Child extends React.Component {
    render(){
        
        return (
          <>
            <ul>
              {this.props.data &&
                this.props.data.map((e) => {

                      
                  return (
                    <>
                        <li>Employe Name = {e.name}</li>
                        <li>Employe Email = {e.email}</li>
                        <li>Employe Gender = {e.gender}</li>
                        <li>Employe Status = {e.status}</li>
                    </>
                  );
                })}
            </ul>
          </>
        );
    }

}

class EmployesClass extends React.Component {
    state = {  } 
    render() { 
        return (
          <Child
            data={[
              {
                id: 2477,
                name: "Aasa Khan",
                email: "aasa_khan@hand.name",
                gender: "male",
                status: "active",
              },
              {
                id: 2476,
                name: "Laxman Bandopadhyay V",
                email: "v_laxman_bandopadhyay@lockman.name",
                gender: "female",
                status: "active",
              },
              {
                id: 2475,
                name: "Dhanvin Khan",
                email: "dhanvin_khan@ondricka-marks.net",
                gender: "female",
                status: "active",
              },
              {
                id: 2474,
                name: "Bhaanumati Ahuja",
                email: "ahuja_bhaanumati@willms.com",
                gender: "female",
                status: "inactive",
              },
              {
                id: 2404,
                name: "Maheswar Guha",
                email: "guha_maheswar@kautzer.name",
                gender: "female",
                status: "inactive",
              },
              {
                id: 2365,
                name: "Dayaananda Kocchar",
                email: "dayaananda_kocchar@treutel-larkin.io",
                gender: "female",
                status: "inactive",
              },
              {
                id: 2364,
                name: "Mr. Dhanadeepa Dutta",
                email: "dhanadeepa_dutta_mr@borer-jones.org",
                gender: "male",
                status: "active",
              },
              {
                id: 2363,
                name: "Rev. Chandrabhan Chaturvedi",
                email: "chaturvedi_chandrabhan_rev@hamill.com",
                gender: "male",
                status: "active",
              },
              {
                id: 2362,
                name: "Abhaidev Agarwal",
                email: "agarwal_abhaidev@wisozk-mcdermott.info",
                gender: "female",
                status: "active",
              },
              {
                id: 2359,
                name: "Damayanti Patel",
                email: "damayanti_patel@rohan.org",
                gender: "female",
                status: "inactive",
              },
            ]}
          />
        );
    }
}
 
export default EmployesClass;