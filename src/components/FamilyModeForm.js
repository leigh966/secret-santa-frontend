import React from "react";
import InputList from "./InputList";

const GROUP_MODE_MORE_INFO =
  "In this mode each user will have a group and, when the names are drawn, users will not be chosen as secret santa for anybody in their group. Perfect for big families!";

class FamilyModeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { enabled: false };

    this.onClickCheckbox = this.onClickCheckbox.bind(this);
  }

  onClickCheckbox() {
    this.setState({ enabled: !this.state.enabled });
    this.props.setNames(new Set());
  }

  render() {
    return (
      <div>
        <input
          type="checkbox"
          onChange={this.onClickCheckbox}
          checked={this.state.enabled}
        />{" "}
        <label title={GROUP_MODE_MORE_INFO}>Group Mode</label>
        <div style={{ display: this.state.enabled ? "block" : "none" }}>
          <InputList names={this.props.names} setNames={this.props.setNames} />
        </div>
      </div>
    );
  }
}

export default FamilyModeForm;
