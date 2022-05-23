import { useState } from 'react';
import './App.css';



function App() {

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    // 👇️ toggle
    setIsActive(current => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };


  return (
    <div className="App">
      <div className="nav-bar">
  <nav className="navbar navbar-content">
  <div className="container-fluid">
    <div className="nav-bar-left">
    <div className="navbar-header">
      <a className="navbar-brand navbar-img" href="#"><img src={require('./attachments/logo 1.svg').default} alt='' className="navbar-img" /></a>
    </div>
    <ul className="nav navbar-nav">
      {/* <li className=""><a href="#" className="dashboard">Dashboard</a></li> */}
      <li className='active'>
      <div className='dashboard'><a href='#' className="dashboarde">Dashboard</a></div>
      </li>
    </ul>
    {/* <div className="active"><a href="#" className="dashboard">Dashboard</a></div> */}
    </div>
    <ul className="nav navbar-nav navbar-right">
    <li className='active profile'>
      <div className='refer'> <a href="#" className="refere">Refer & Earn</a></div>
      </li>

      <li className='active profile'>
      <div className='refer'> <img src={require('./attachments/Vector.svg').default} /></div>
      </li>

      <li className='active profile'>
      <div className='refer'> <img src={require('./attachments/twemoji_flag-for-flag-us-outlying-islands.svg').default} /></div>
      </li>

      <li className='active'>
      <div className='refer'> <img src={require('./attachments/Group 3859.svg').default} /></div>
      </li>

      <li className='active profile'>
      <div className='refer'> <img src={require('./attachments/ep_arrow-down-bold.svg').default} /></div>
      </li>
      {/* <li><a href="#"><span className=""></span> Refer & earn</a></li>
      <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li> */}
    </ul>
  </div>
</nav>
    </div>

    <div className='container'>
      <div className='total-content'>
        <div className='title-header'>
             <div className='title-text'>Hey John, you’re almost there</div> 
        </div>
        
        <div className='middle-content'>
        <div className='row'>
          <div className='col col-md-4 col-sm-12 col-xl-4 col-lg-4'>
          <div className='content-1'>
            <div className='content-image'>
            <img src={require('./attachments/General info.svg').default} />
            </div>
            <div className='content-middle-text'>
              <div className='content-middle-text-1'>
              General Information
              </div>
              <div className='content-middle-text-2'>
              Completed
              </div>
            </div>
            <div>
              <img src={require('./attachments/pencil-create.svg').default} />
            </div>
          </div>

          <div className='content-1'>
            <div className='content-image'>
            <img src={require('./attachments/Family info.svg').default} />
            </div>
            <div className='content-middle-text'>
              <div className='content-middle-text-1'>
              Family Information
              </div>
              <div className='content-middle-text-2'>
              Completed
              </div>
            </div>
            <div>
              <img src={require('./attachments/pencil-create.svg').default} />
            </div>
          </div>

          <div className='content-1 background'>
            <div className='content-image'>
            <img src={require('./attachments/Representatives.svg').default} />
            </div>
            <div className='content-middle-text'>
              <div className='content-middle-text-3-w'>
              Specific Distribution
              </div>
              <div className='content-middle-text-4-w'>
              In Progress [4/12]
              </div>
            </div>
    
          </div>

          <div className='content-1'>
            <div className='content-image'>
            <img src={require('./attachments/Residual Estate  Distribution.svg').default} />
            </div>
            <div className='content-middle-text'>
              <div className='content-middle-text-3'>
              Residual Estate <br></br>Distribution
              </div>
              {/* <div className='content-middle-text-4'>
              In Progress [4/12]
              </div> */}
            </div>
    
          </div>

          <div className='content-1'>
            <div className='content-image'>
            <img src={require('./attachments/Representatives.svg').default} />
            </div>
            <div className='content-middle-text'>
              <div className='content-middle-text-5'>
              Representatives
              </div>
              {/* <div className='content-middle-text-4'>
              In Progress [4/12]
              </div> */}
            </div>
    
          </div>

          </div>
          <div className='col col-md-8 col-sm-12 col-xl-8 col-lg-8'>
            <div className='content-middle-content-right'>
              <div className='text-heading'>Specific Distribution</div>
              <div className='span-content'><span className='middle-img'><img src={require('./attachments/Group.svg').default} /></span> <span className='span-text'><span className='middle-text-1'>Lorem ipsum dolor</span> <span className= 'middle-text-2'>Specify gifts to the ones you wish</span></span></div>
              <div><button className='btn-content'><span className='button-text'>Continue</span><span className='span-img'><img src={require('./attachments/akar-icons_arrow-left.svg').default} /></span></button></div>

            </div>
          </div>

        </div>
        </div>

      </div>
    </div>
    </div>
  );
}

export default App;
