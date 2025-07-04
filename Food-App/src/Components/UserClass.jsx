import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postCount: 25,
      impressions: 1000,
      userInfo: {
        name: "Dummy",
        location: "Dummy",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/utkarshdangarh");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { postCount, impressions } = this.state; //can also destrucutre props like this
    const { login, location, avatar_url } = this.state.userInfo;
    return (
      <div className="flex w-96 bg-neutral-100">
        <div className="flex flex-col  p-4 m-2 rounded-md w-72">
          <h1 className="font-bold">Name: {login}</h1>
          <h1 className="font-semibold">Location: {location}</h1>
          <h1 className="font-semibold">Contribution: {postCount}</h1>
          <h1 className="font-semibold">Impressions: {impressions}</h1>
          <button
            className="bg-orange-300 px-4 py-2 rounded-md"
            onClick={() => {
              this.setState({
                impressions: this.state.impressions + 1,
              });
            }}
          >
            Click
          </button>
        </div>
        <div className="m-2">
          <img
            src={avatar_url}
            className="w-full rounded-md"
            alt=""
            srcset=""
          />
        </div>
      </div>
    );
  }
}

export default UserClass;
