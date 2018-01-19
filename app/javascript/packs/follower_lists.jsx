import React from 'react'
import Follower from './follower'

export const FollowersList = ({followers}) => 
  <div id='follwers_data'>
    {followers.map(function(follower) {
      return (
        <Follower follower={follower} />
      )
    })}		
  </div>
