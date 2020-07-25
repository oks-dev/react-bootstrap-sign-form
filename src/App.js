import React from 'react';

const list = [
  { id: 1, strong: 'Build better habits ', text: 'by surrounding yourself with productive makers.', icon: 'ship' },
  { id: 2, strong: 'Get advice & feedback ', text: 'from experienced bootstrappers.', icon: 'chat' },
  { id: 3, strong: 'Stay accountable ', text: 'by publicly sharing your progress.', icon: 'checked' },
]

function App() {
  return (
    <div className='container-md wrapper'>
      <div className='content shadow'>
        <div className='row'>
          <div className='col-12 col-md-6 col-lg-4 p-4 left-side'>
            <h1 className='title h3'>Join a community of makers shipping together.</h1>
            <div className='subtitle my-3'>From first-ti,e entrepreneurs to solo-founders bootstrapping $300,000/year companies.</div>
            <ul className='list m-2'>
              {list.map(item => (
                <li className='d-flex mb-2 pb-2' key={item.id}>
                  <span className='icon'><img src={`${item.icon}.png`} alt='' /></span>
                  <div className="pl-2">
                    <p className="font-size-md mb-0">
                      <strong>{item.strong}</strong>
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            {/* <small className='text-muted'>By signing up you agree to our <a href='#' className='text-muted'>terms.</a></small> */}
          </div>
          <div className='col-12 col-md-6 col-lg-8 p-4'>

            <form className="form-sign py-5 p-lg-5">
              <div className='form-toggle text-muted small'>Already a member? <a href='#'>Sign in</a></div>
              <div className="mb-4">
                <h1 className="h2 mb-3 font-weight-normal">Sign up</h1>
              </div>

              <div className="form-row text-center">
                <div className="col-8">
                  <a className="btn btn-lg btn-primary btn-image-wrap" href="#" role="button">
                    <img src='google.svg' className='btn-image' alt='Sign with Google' />
                    Sign up with Google
                  </a>
                  {/* <button class="btn btn-lg btn-primary btn-block" type="submit">Sign up with Google</button> */}
                </div>
                <div className="col d-flex justify-content-end">
                  <a className="btn btn-lg btn-light btn-social" href="#" role="button">
                    <img src='twitter.svg' alt='Sign with Twitter' />
                  </a>
                </div>
                <div className="col d-flex justify-content-end">
                  <a className="btn btn-lg btn-light btn-social" href="#" role="button">
                    <img src='fb.svg' alt='Sign with Facebook' />
                  </a>
                </div>
              </div>
              <div className=" divider my-4 text-muted">Or</div>

              <div className="form-row">
                <div className="col">
                  <label htmlFor="fullName">Full name</label>
                  <input type="text" id="fullName" className="form-control bg-light border-0" placeholder="" autoFocus />
                </div>
                <div className="col">
                  <label htmlFor="userName">Username</label>
                  <input type="text" id="userName" className="form-control bg-light border-0" placeholder="" />
                </div>
              </div>


              <div className="form-label-group mt-3">
                <label htmlFor="inputEmail">Email Address</label>
                <input type="email" id="inputEmail" className="form-control bg-light border-0" placeholder="" required="" />
              </div>

              <div className="form-label-group mt-3">
                <label htmlFor="inputPassword">Password</label>
                <input type="password" id="inputPassword" className="form-control bg-light border-0" placeholder="6+ characters" required="" />
              </div>

              <div className="form-group mt-3">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="gridCheck" />
                  <label className="form-check-label text-muted" htmlFor="gridCheck">
                    Creating an account means you're okay with our <a href='#'>Terms of Service</a>, <a href='#'>Privacy Policy</a>, and our default <a href='#'>Notification Settings</a>.
                  </label>
                </div>
              </div>

              <div className='col-12 col-md-6 pl-0'>
                <button className="btn btn-danger btn-block" type="submit">Create account</button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
