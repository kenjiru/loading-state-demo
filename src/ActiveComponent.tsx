import * as React from "react";
import { connect } from "react-redux";
import {FluxStandardAction} from "flux-standard-action";

import {getData, GET_DATA} from "./model/actions";
import {getLoadingState} from "redux-promise-track";

class ActiveComponent extends React.Component<IActiveComponentProps, any> {
    componentDidMount() {
        this.props.dispatch(getData());
    }

    componentWillReceiveProps(nextProps: IActiveComponentProps) {
        console.log(nextProps.loadingState);
    }

    render() {
        return (
            <div className="active-component">
                <h1>App title</h1>
                {this.renderLoading()}
                {this.renderSuccess()}
            </div>
        );
    }

    renderLoading() {
        if (this.props.loadingState.isLoading) {
            return <div>Loading..</div>;
        }
    }

    renderSuccess() {
        if (this.props.loadingState.isSuccess) {
            return <div>Success!</div>;
        }
    }
}

interface IActiveComponentProps {
    dispatch: (FluxStandardAction) => void;
    loadingState: any;
}

export default connect((store) => {
    return {
        loadingState: getLoadingState(store, GET_DATA)
    };
})(ActiveComponent);

