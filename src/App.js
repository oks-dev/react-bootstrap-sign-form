import React from 'react';

const list = [
  { id: 1, strong: 'Build better habits ', text: 'by surrounding yourself with productive makers.', icon: 'ship' },
  { id: 2, strong: 'Get advice & feedback ', text: 'from experienced bootstrappers.', icon: 'chat' },
  { id: 3, strong: 'Stay accountable ', text: 'by publicly sharing your progress.', icon: 'checked' },
]

function App() {
  return (
    <div className='container-sm wrapper'>
      <div className='content p-4 shadow'>
        <div className='row'>
          <div className='col-4'>
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
            <small className='text-muted'>By signing up you agree to our <a href='#' className='text-muted'>terms.</a></small>
          </div>
          <div className='col-8'>

            <form class="form-signin p-5">
              <div class="text-center mb-4">
                <h1 class="h3 mb-3 font-weight-normal">Sign up</h1>
              </div>

              <div class="form-row">
                <div class="col">
                  <label for="fullName">Full name</label>
                  <input type="text" id="fullName" class="form-control" placeholder="" autoFocus />
                </div>
                <div class="col">
                  <label for="userName">User name</label>
                  <input type="text" id="userName" class="form-control" placeholder="" />
                </div>
              </div>


              <div class="form-label-group">
                <label for="inputEmail">Email address</label>
                <input type="email" id="inputEmail" class="form-control" placeholder="" required="" />
              </div>

              <div class="form-label-group">
                <label for="inputPassword">Password</label>
                <input type="password" id="inputPassword" class="form-control" placeholder="6+ characters" required="" />
              </div>

              <div class="checkbox mb-3">
                <label className='text-muted my-2 small'>
                  <input type="checkbox" value="remember-me" />
                  Creating an account means you're okay with our <a href='#'>Terms of Service</a>, <a href='#'>Privacy Policy</a>, and our default <a href='#'>Notification Settings</a>.
                </label>
              </div>
              <button class="btn btn-lg btn-primary btn-block" type="submit">Create account</button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
