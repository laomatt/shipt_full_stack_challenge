import React from 'react'
import ReactDOM from 'react-dom'
import { FollowersList } from './follower_lists'
import Followers from './followers'
import MoreButton from './more_button'

export default class SearchForm extends React.Component {

  addToList () {
    var dataRaw = document.getElementById('follower_list').getAttribute('data');
    var data = JSON.parse(dataRaw);
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
          <MoreButton />,
          document.getElementById('follower_list').appendChild(document.createElement('div')),
        )
      }


  }


  handleSubmit(e) {
    document.getElementById('follower_list').innerHTML = 'Searching...';
    const input = document.getElementById('phrase').value;
    e.preventDefault();
    $.get('/github/get_followers', 
      {phrase: input})
    .done((data) => {
      document.getElementById('follower_list').innerHTML = "";
      document.getElementById('follower_list').setAttribute('data', JSON.stringify(data));
      this.addToList();
    })
  }


  render () {
    return (
      <div>
        <form className="form-group" onSubmit={(event) => this.handleSubmit(event)}>
        <h2>Search followers</h2>
          <div className="form-group">
            <label htmlFor="phrase">GitHub Name</label>
            <input name='phrase' className="form-control" id='phrase' />
          </div>

          <input type='submit' value='Search' className='submit-button btn btn-primary'  />
        </form>        
      </div>
    )
  }
}
