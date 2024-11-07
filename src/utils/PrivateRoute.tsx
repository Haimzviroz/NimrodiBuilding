import { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { RootState } from "../store/store";
import Forbidden from "../pages/Forbidden/Forbidden";

interface IPrivateRoute {
    component: ReactNode;
}

const PrivateRoute = ({ component }: IPrivateRoute) => {
  const [hasAccess, setHasAccess] = useState<boolean | null>(null);
  const AccessFlors = useSelector((state: RootState) => state.floorreducer.floors);
  const navigate = useNavigate();
  const { index } = useParams<{ index: string }>();

  useEffect(() => {
    if (index) {
      const floorIndex = Number(index);
      if (AccessFlors[floorIndex] === false) {
        setHasAccess(false);
        navigate("/forbidden");
      } else {
        setHasAccess(true);
      }
    }
  }, [index, AccessFlors, navigate]);

  if (hasAccess === null) {
    return null; 
  }

  if (!hasAccess) {
    return <Forbidden />;
  }

  return <>{component}</>;
};

export default PrivateRoute;
