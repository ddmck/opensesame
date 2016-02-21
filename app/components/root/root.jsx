import React from 'react'
import TopBar from '../topbar/topbar.jsx'
import Featured from '../featured/featured.jsx'
import Steps from '../steps/steps.jsx'

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
          <div className="row">
            <div className="col-md-6">
              <Featured />
            </div>
            <div className="col-md-6">
              <Steps />
            </div>

          </div>
        </div>
      </div>

    )
  }
})
