import React, { Component } from 'react';
import { Route, Link, HashRouter as Router } from 'react-router-dom';

// components
import { About, Home, Hello, Whether } from './components';

class App extends Component {
    render() {
        return (
            <div className="app-comp">
                <Router>
                    <ul>
                        <li>
                            <Link to="/">主页</Link>
                        </li>
                        <li>
                            <Link to="/Whether">天气</Link>
                        </li>
                        <li>
                            <Link to="/About">关于我们</Link>
                        </li>
                        <li>
                            <Link to="/Hello">问候页面</Link>
                        </li>
                    </ul>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/Whether" component={Whether}/>
                    <Route path="/About" component={About}/>
                    <Route path="/Hello" component={Hello}/>
                </Router>
            </div>
        )
    }
}

export default App