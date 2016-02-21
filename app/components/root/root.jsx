import React from 'react'
import TopBar from '../topbar/topbar.jsx'
import Featured from '../featured/featured.jsx'
import Steps from '../steps/steps.jsx'
import Auth from '../auth/auth.jsx'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
}

export default React.createClass({
  render: function() {

    return (
      <div>
        <TopBar />
        <div className="container">
          <Auth/>
        </div>
        <div className="container">
          <Featured />
          <div className="row">
            <div className="col-xs-12">
              <Steps />
            </div>
          </div>
        </div>
      </div>

    )
  }
})
