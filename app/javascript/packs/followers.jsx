import React from 'react'
import ReactDOM from 'react-dom'
import SearchForm from './search_box'
import { FollowersList } from './follower_lists'
// import update from 'immutability-helper'

export default class Followers extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      followers: this.props.followers,
      title: 'fdsda',
      input: this.props.inputs
    }
  }

  render () {
    return (
      <div>
        <SearchForm input_title={this.state.title} />
        <FollowersList followers={this.state.followers} />
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('follower_list')
  const data = JSON.parse(node.getAttribute('data'))

  ReactDOM.render(
    <Followers followers={data} />,
    document.getElementById('search_container').appendChild(document.createElement('div')),
  )
})
