import React from 'react'
import ReactDOM from 'react-dom'
import { FollowersList } from './follower_lists'
import Followers from './followers'

export default class MoreButton extends React.Component {

  addToList () {
    var dataRaw = document.getElementById('follower_list').getAttribute('data');
    var data = JSON.parse(dataRaw);
    document.getElementsByClassName('more_button')[document.getElementsByClassName('more_button').length - 1].style.display = 'none'
    ReactDOM.render(
        <FollowersList followers={data.slice(0,8)} />,
        document.getElementById('follower_list').appendChild(document.createElement('div'))
      )
      // take out the first 8 from the data list
      data.splice(0,8)
      // reset the attribute
      document.getElementById('follower_list').setAttribute('data', JSON.stringify(data));

      if (data.length > 9) {
        ReactDOM.render(
          <MoreButton followers={data} />,
          document.getElementById('follower_list').appendChild(document.createElement('div')),
        )
      }


  }



  render () {
    return (
        <a class="more_button btn btn-md btn-primary" onClick={(event) => this.addToList()}>
        	more...
        </a>   
    )
  }
}
