import React,{Suspense,lazy} from "react";
import { Menu } from 'antd';
import {Link,Switch,Route} from 'react-router-dom'

const Main = lazy(()=>import('./Main'))
const Login = lazy(()=>import('./Login'))
const Register = lazy(()=>import('./Register'))
function Navbar() {
        return (
            <>
            <Menu mode="horizontal">
                <Menu.Item key="home">
                    <Link to="/">Trello</Link>
                </Menu.Item>
                <Menu.Item key="login">
                    <Link to="/login">Login</Link>
                </Menu.Item>
                <Menu.Item key="register">
                    <Link to="/register">Register</Link>
                </Menu.Item>
            </Menu>
                <Suspense fallback={<></>}>
                    <Switch>
                        <Route exact path="/">
                            <Main />
                        </Route>
                        <Route  path="/login">
                            <Login />
                        </Route>
                        <Route  path="/register">
                            <Register />
                        </Route>
                    </Switch>
                </Suspense>
            </>
        );
    }

export default Navbar;
