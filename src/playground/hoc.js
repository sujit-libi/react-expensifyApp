import React from 'react';
import ReactDOM from 'react-dom';

const Template = (props) => (
    <div>
        <h1>Info</h1>
        <p>This info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please do not share</p>}
            <WrappedComponent {...props} />
        </div>
    );
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAuthenticated ? (<WrappedComponent {...props}/>) : (
            <p>Please Login to view the info</p>
        )}
        </div>
    )
}

const AdminInfo = withAdminWarning(Template);
const AuthInfo = requireAuthentication(Template);
//ReactDOM.render(<Template info="This is private Message"/>,document.getElementById('app'));
//ReactDOM.render(<AdminInfo isAdmin={true} info="This is private Message"/>,document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="This is private Message"/>,document.getElementById('app'));
