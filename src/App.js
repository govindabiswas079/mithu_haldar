import React, { useState } from 'react'
import { Fragment } from 'react'
import data from './MaharashtraDistrictsTahasilEnglish.json'

const App = () => {
  const [district, setDistrict] = useState("");

  return (
    <Fragment>
      <div style={{ margin: '0 auto', maxWidth: 700 }} >{/* style="display: flex; align-items: center; justify-content: center; height: 100vh;" */}
        <div className="container form mt-5 mb-5 pt-4 pb-4">
          <h2 className="vision text-center">Reserve Your Seat</h2>
          <form action="" method="post" className="student-form" id="registration_form">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6 text-right mr-2">
                <input type="text" name="name" placeholder="Enter your Full Name" value="" required="" />
              </div>

              <div className="col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6 text-right ml-2">
                <input type="email" name="email" placeholder="Enter your Email" value="" required="" />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6 text-right mr-2">
                <input type="tel" name="mobile" maxLength="10" placeholder="Enter your Mobile No" value=""
                  required="" />
              </div>

              <div className="col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6 text-right ml-2">
                <input type="text" id="aadhaarNumber" name="adharno" maxLength="12"
                  placeholder="Enter your Aadhaar Number" />
                <div id="aadhaarError" style={{ color: "red" }}></div>

              </div>
            </div>

            <div className="row">
              <div className="col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6 text-right mr-3">
                <select required="" name="education" style={{ background: "#fff" }}>
                  <option className="text-primary" value="">--Select the Education--</option>
                  <option value="12th">12th</option>
                  <option value="graduate">Graduate</option>
                  <option value="underGraduate">Post-Graduate</option>
                </select>
              </div>

              <div className="col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6 text-right -3">
                <select required="" name="occupation" style={{ background: "#fff" }}>
                  <option className="text-primary" value="">--Select the Occupation--</option>
                  <option value="student">Student</option>
                  <option value="employed">Employed</option>
                  <option value="unemplyed">Unemployed</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <select onChange={(Text) => setDistrict(Text?.target?.value)} required="" name="district" style={{ background: "#fff" }}>
                  <option className="text-primary" value="">--Select District--</option>
                  {data?.map((value, index) => (
                    <option key={index} value={value?.name}>{value?.name}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-4">
                <select required="" name="division" style={{ background: "#fff" }}>
                  <option className="text-primary" value="">--Select Sub Division--</option>
                  {!data?.filter((value) => value?.name === district)?.length ?
                    <option>District not select</option>
                    :
                    data?.filter((value) => value?.name === district)[0]?.tahasil?.map((value, index) => (
                      <option key={index} value={value}>{value}</option>
                    ))}
                </select>
              </div>
              <div className="col-md-4">
                <select required="" name="city" style={{ background: "#fff" }}>
                  <option className="text-primary" value="">--Select City--</option>
                  {!data?.filter((value) => value?.name === district)?.length ?
                    <option>District not select</option>
                    :
                    data?.filter((value) => value?.name === district)[0]?.tahasil?.map((value, index) => (
                      <option key={index} value={value}>{value}</option>
                    ))}
                </select>
              </div>

            </div>
            <div className="text-center">
              <button className="subBtn mt-5 mb-4" name="submit" type="submit" value="Insert">submit</button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  )
}

export default App