import React, { Component } from 'react';
import axios from 'axios';
import logo from './react.svg';
import './Home.css';

interface State {
  hello: string
}

class Home extends Component<{}, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      hello: '',
    };
  }

  componentDidMount() {
    axios('http://localhost:1337/api/hello')
      .then((response) => {
        this.setState({
          hello: response.data,
        });
      })
      .catch((err) => { throw new Error(err); });
  }

  render() {
    const { hello } = this.state;

    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>
            { hello }
            {' '}
            Welcome to Razzle
          </h2>
        </div>
        <p className="Home-intro">
          To get started, edit
          {' '}
          <code>src/App.tsx</code>
          {' '}
          or
          {' '}
          <code>src/Home.tsx</code>
          {' '}
          and save to reload.
        </p>
        <ul className="Home-resources">
          <li>
            <a href="https://github.com/jaredpalmer/razzle">Docs</a>
          </li>
          <li>
            <a href="https://github.com/jaredpalmer/razzle/issues">Issues</a>
          </li>
          <li>
            <a href="https://palmer.chat">Community Slack</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
