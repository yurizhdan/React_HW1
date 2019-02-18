import React, { Component } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

class Page extends Component {
    render(){
        var pageContent;
        if(this.props.currentPage == 'home'){
            pageContent = 'This is the home page';
        } else if(this.props.currentPage == 'about'){
            pageContent = 'This is the about page';
        } else if(this.props.currentPage == 'contact'){
            pageContent = 'This is the contact page';
        } else if (this.props.currentPage == 'register'){
            pageContent = <RegisterForm />
        } else if (this.props.currentPage == 'loginForm'){
            pageContent = <LoginForm />
        }
        return(
            <div>
                <div className="container">
                    <h2>{this.props.currentPage.charAt(0).toUpperCase() + this.props.currentPage.slice(1)}</h2>
                    {pageContent}
                </div>
            </div>
        );
    }
}

export default Page;