const MSG_ERRORS = Object.freeze({
  ACCOUNT_EXIST: "Account already exist.",
  COMPANY_EXIST: "Company already exist.",
  ACCOUNT_INVALID: "Invalid email or password",
  SUSPENDED: "Account is suspended!",
  INACTIVE: "Account is inactive!",
  NOT_FOUND: "Not Found",
  UPLOAD_IMAGE: "Image upload is required.",
  ACCESS_DENIED: "Access denied.",
  SESSION_EXPIRED: "Access denied. Your session has expired",
  DEACTIVATED: "Your account isn't activate",
  PERMISSION: "You don't have enough permission to perform this action",
  SERVER_ERROR: "Server Error!",
  FREEMIUM: "No Freemium pricing found.",
  PASSWORD_MISMATCH: "Password mismatch",
  TEAM_MEMBERS_PRESENT: "This team has team members",
  TEAM_EXIST: (teamName) => `A team already exist with ${teamName}`,
  TEAM_MEMBER_EXIST: (email) => `${email} already exist in a team`,
  SWAP_TEAM_EXIST: (name, teamName) => `${name} already exist in ${teamName} team`
});

const MSG_SUCCESS = Object.freeze({
  ACCOUNT_CREATED: "Account Successfully Created.",
  BUY_ORDER_CREATED: "Buy Order Successfully Created.",
  RESOURCES_CREATED: "Resources Successfully Created.",
  LOGGED_IN: "Successfully logged in",
  DELETED: "Resource Deleted Successfully",
  UPDATED: "Resource Updated Successfully",
  CREATED: "Resource Created Successfully",
  FETCHED: "Resource Fetched Successfully",
  ACCOUNT_VERIFIED: "Account Successfully Verified",
  WELCOME: "Welcome To Ecommerce Api",
  RESOUCES_FETCHED: "Resources fetched Successfully.",
  FETCHED_RESOURCE: (x) => `${x} fetched successfully`,
  TEAM_CREATED: "Team created successfully",
  TEAM_MEMBER_CREATED: "Team Members added successfully",
  FORGOT_PASSWORD: "Password request sent successfully",
  FORGOT_PASSWORD_SUCCESS: "Password reset successfully",
  HIRING_SETUP_CREATED: "Hiring Setup created Successfully",
  CHECKIN_CREATED: "Check-in Successful",
  SWAP_TEAM_SUCCESS: (name, teamName) => `${name} moved to ${teamName} team successfully`,
});

const MSG_TYPES = Object.freeze({
  ACCOUNT_EXIST: "ACCOUNT_EXIST",
  ACCOUNT_CREATED: "ACCOUNT_CREATED",
  RESOURCES_CREATED: "RESOURCES_CREATED",
  ACCOUNT_INVALID: "ACCOUNT_INVALID",
  NOT_FOUND: "NOT_FOUND",
  UPLOAD_IMAGE: "UPLOAD_IMAGE",
  LOGGED_IN: "LOGGED_IN",
  FORGOT_PASSWORD: "FORGOT_PASSWORD",
  ACCESS_DENIED: "ACCESS_DENIED",
  SESSION_EXPIRED: "SESSION_EXPIRED",
  DEACTIVATED: "DEACTIVATED",
  PERMISSION: "PERMISSION",
  DELETED: "DELETED",
  UPDATED: "UPDATED",
  SERVER_ERROR: "SERVER_ERROR",
  CREATED: "CREATED",
  FETCHED: "FETCHED",
  FREEMIUM: "FREEMIUM",
  ACCOUNT_VERIFIED: "ACCOUNT_VERIFIED",
  TEAM_CREATED: "TEAM_CREATED",
  PASSWORD_MISMATCH: "PASSWORD_MISMATCH",
  VALIDATION_ERROR: "VALIDATION ERROR (INVALID INPUT)",
  FORGOT_PASSWORD_SUCCESS: "FORGOT_PASSWORD_SUCCESS",
  FILE_UPLOADED: "FILE UPLOADED SUCCESSFULLY",
});
const SUPPORTED_INTEGRATIONS = [
  {
    name: "slack",
    type: "api"
  },
  {
    name: "github",
    type: "webhooks"
  },
  {
    name: "gitlab",
    type: "webhooks"
  },
  {
    name: "microsoft teams",
    type: "api"
  },
  {
    name: "jira",
    type: "webhooks"
  },
  {
    name: "bitbucket",
    type: "webhooks"
  },
];

module.exports = {
  MSG_ERRORS,
  MSG_SUCCESS,
  MSG_TYPES,
  SUPPORTED_INTEGRATIONS
};
