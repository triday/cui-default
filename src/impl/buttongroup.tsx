import * as React from "react";
import { IButtonGroup, IButtonGroupProps, IButtonGroupStates } from "../core/ButtonGroup"
export class ButtonGroup extends React.Component<IButtonGroupProps, IButtonGroupStates> implements IButtonGroup {
    render() {
        return <div className="btn-group">
            {this.props.children}
        </div>;
    }
}
