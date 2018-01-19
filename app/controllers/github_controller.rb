class GithubController < ApplicationController
	layout 'application'

	def get_followers
  	github = Github.new basic_auth: "#{ENV['USER']}:#{ENV['PASS']}"
  	followers = github.users.followers.list params['phrase']
		list = followers.body
  	output = list.map{ |e| {:avatar_url => e.avatar_url} }
  	render :json => output
  end
end
