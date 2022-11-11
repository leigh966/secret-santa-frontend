import React from "react";
import Dropdown from "react-dropdown";
import { BACKEND_URL } from "../webconfig";
import "react-dropdown/style.css";

export default class GroupDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.sendRequest();
    this.state = {
      groups: [],
    };
  }

  onResponse(json) {
    this.setState({
      groups: json,
    });
  }

  sendRequest() {
    fetch(BACKEND_URL + "groups/" + this.props.gameId)
      .then((response) => response.json())
      .then((json) => {
        this.onResponse(json.groups);
      })
      .catch((e) => alert(e));
  }

  getOptions() {
    let options = [];
    this.state.groups.forEach((group) => {
      options.push({ value: group.group_id, label: group.name });
    });
    return options;
  }

  render() {
    if (!this.state.groups) return <h4>Loading...</h4>;

    const options = this.getOptions();
    return (
      <Dropdown
        options={options}
        onChange={(option) => {
          this.props.handler(option);
        }}
        value={this.props.current}
        placeholder="Select a group"
      />
    );
  }
}
