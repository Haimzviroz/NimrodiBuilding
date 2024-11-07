import roles from "../data/roles.json";

interface IuseActivityParams {
  activity: string;
  role: string;
  activities: string[];
}

const useIsVerified = ({ activity, role, activities }: IuseActivityParams) => {
  //FILL HERE 3.7
  if (!activities.includes(activity)) {
    return false;
  }

  const roleLevel = roles.indexOf(role);
  const requiredRoleLevel = roles.indexOf(activity);

  return roleLevel >= requiredRoleLevel;
};

export default useIsVerified;
