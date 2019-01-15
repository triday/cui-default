import * as React from "react";
import { IButton, IButtonProps, IButtonStates } from "../core/button"
export class Button extends React.Component<IButtonProps, IButtonStates> implements IButton {
    render() {
        return <button>
            {this.props.text}
        </button>
    }
}
