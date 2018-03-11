import React, { Component } from "react";

import { connect } from 'react-redux';

class UserDetail extends Component{
  renderdata(details){

    return(
      <tr>
        <td>
          {details.login}
        </td>
        <td>
          {details.public_repos}
        </td>
        <td>
          {details.followers}
        </td>
        <td>
          {details.followers_url}
        </td>

        <td>
          {details.following}
        </td>
        <td>
          {details.html_url}
        </td>
        <td>
          {details.public_gists}
        </td>
        <td>
          {details.updated_at}
        </td>
        <td>
          {details.email}
        </td>
        <td>
          {details.company}
        </td>
        <td>
          {details.organizations_url}
        </td>
      </tr>
    )
  }

  render(){
      debugger
    if (!this.props.UserDetailData) {
      return <div>Select a book to get started.</div>;
    }
    
    return (
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Public Repo</th>
            <th>Followers</th>
            <th>followers_urlr</th>
            <th>following</th>
            <th>html_url</th>
            <th>public_gists</th>
            <th>updated_at</th>
            <th>email</th>
            <th>company</th>
            <th>organizations_url</th>

          </tr>
        </thead>
        <tbody>
          { this.props.UserDetailData.map(this.renderdata) }
        </tbody>

      </table>
    );
  };
}

function mapStateToProps({UserDetailData}){
  return { UserDetailData }
}

export default connect(mapStateToProps)(UserDetail);