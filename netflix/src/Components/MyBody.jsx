/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import FirstLine from "./FirstLine";
class MyBody extends Component {
  render() {
    return (
      <div className="container-fluid px-4">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h2 className="mb-4">TV Shows</h2>
            <Dropdown>
              <Dropdown.Toggle
                className="btn btn-secondary btn-sm dropdown-toggle rounded-0 m-2"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ backgroundColor: "#221f1f" }}
              >
                Geners
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ backgroundColor: "#221f1f" }}>
                <Dropdown.Item
                  className="dropdown-item text-white bg-dark"
                  href="#"
                >
                  Commedy
                </Dropdown.Item>
                <Dropdown.Item
                  className="dropdown-item text-white bg-dark"
                  href="#"
                >
                  Drama
                </Dropdown.Item>
                <Dropdown.Item
                  className="dropdown-item text-white bg-dark"
                  href="#"
                >
                  Thriller
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div>
            <i className="fa fa-th-large icons" />
            <i className="fa fa-th icons" />
          </div>
        </div>
        <div className="my-4 ">
          <h4 className="my-4 text-left">Trending Now</h4>
          <FirstLine title={"toy story"} />
        </div>
        <div className="my-4 ">
          <h4 className="my-4 text-left">Watch it Again</h4>
          <FirstLine title={"jurassic Park"} />
        </div>
        <div className="my-4 ">
          <h4 className="my-4 text-left">New Releases</h4>
          <FirstLine title={"marvel"} />
        </div>
      </div>
    );
  }
}
export default MyBody;
