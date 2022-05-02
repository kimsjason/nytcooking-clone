import StyledManageAccount from "../styles/ManageAccount.styled";

const ManageAccount = ({ user }) => {
  console.log(user);
  return (
    <StyledManageAccount>
      <div className="account">
        <div className="container">
          <div className="header">
            <div className="greeting">
              Hello, {user.displayName.split(" ")[0]}.
            </div>
            You've supported independent journalism since 2022.
          </div>

          <div className="profile">
            <h2>Your Profile</h2>
            <div className="account-number">
              Account number <span>{user.uid}</span>
            </div>
            <div className="email">
              Email address <span>{user.email}</span>
            </div>
            <div className="div">
              Password<span>************</span>
            </div>
            <div className="connected-accounts"></div>
          </div>
          <div className="subscriptions">
            <h2>Your Subscriptions</h2>
            <div className="nyt-cooking">
              New York Times Cooking
              <div className="description">
                Unlimited access to thousands of recipes and step-by-step
                guides.
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledManageAccount>
  );
};

export default ManageAccount;
