import * as _ from "lodash";
import * as React from "react";
import { connect } from "react-redux";
import {FluxStandardAction} from "flux-standard-action";

import {getData, setItem, GET_DATA, SET_ITEM} from "./model/actions";
import {getLoadingState, getItemLoadingState} from "redux-promise-track";

class ActiveComponent extends React.Component<IActiveComponentProps, any> {
    componentDidMount() {
        this.getData();
    }

    componentWillReceiveProps(nextProps: IActiveComponentProps) {
        console.log(nextProps.list);
    }

    render() {
        return (
            <div className="active-component">
                <h1>App title</h1>
                {this.renderLoading()}
                {this.renderError()}
                {this.renderChildren()}
            </div>
        );
    }

    renderLoading() {
        if (this.props.loadingState.isLoading) {
            return <div>Loading..</div>;
        }
    }

    renderError() {
        if (this.props.loadingState.error) {
            return (
                <div>
                    Error loading the list!
                    <input type="button" onClick={this.getData.bind(this)} value="Retry"/>
                </div>
            );
        }
    }

    renderChildren() {
        if (this.props.loadingState.isSuccess === false) {
            return;
        }

        return _.map(this.props.list, (item) => (
            <div key={item} className="item">
                Item {item}
                {this.renderItemLoading(item)}
                {this.renderItemSuccess(item)}
                {this.renderItemFailed(item)}
                <input type="button" onClick={this.setItem.bind(this, item)} value="Set"/>
            </div>
        ));
    }

    renderItemLoading(itemId: number) {
        let itemState = this.getItemState(itemId);

        if (itemState.isLoading) {
            return <span>Loading...</span>;
        }
    }

    renderItemSuccess(itemId: number) {
        let itemState = this.getItemState(itemId);

        if (itemState.isSuccess) {
            return (
                <span>Successfully set</span>
            );
        }
    }

    renderItemFailed(itemId: number) {
        let itemState = this.getItemState(itemId);

        if (itemState.error) {
            return (
                <span>
                    Failed to set item!
                    <input type="button" onClick={this.setItem.bind(this, itemId)}value="Retry"/>
                </span>
            );
        }
    }

    getItemState(itemId: number) {
        return getItemLoadingState(this.props.itemsLoadingState, itemId.toString());
    }

    getData() {
        this.props.dispatch(getData());
    }

    setItem(itemId: number) {
        this.props.dispatch(setItem(itemId));
    }
}

interface IActiveComponentProps {
    dispatch: (FluxStandardAction) => void;
    list: any[];
    loadingState: any;
    itemsLoadingState: any;
}

export default connect((store) => {
    return {
        loadingState: getLoadingState(store, GET_DATA),
        itemsLoadingState: getLoadingState(store, SET_ITEM),
        list: store.appData.list
    };
})(ActiveComponent);
