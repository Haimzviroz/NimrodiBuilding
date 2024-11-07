import { useState, useEffect } from "react";

interface Floor {
  name: string;
  soldiers: number;
  purpose: string;
  description: string;
  activity: string;
}

const useBuildingData = () => {
  const [buildingData, setBuildingData] = useState<Floor[]>([]);

  //FILL HERE LOGIC TO SET THE BUILDING DATA
  useEffect(() => {
    const data = require("..data/building.json");
    setBuildingData(data);
  }, []);

  const getFloorByIndex = (floorIndex: number): Floor | undefined => {
    //FILL HERE
    if (floorIndex >= 0 && floorIndex < buildingData.length) {
      return buildingData[floorIndex];
    }

    return undefined;
  };
  const getListOfActivities = (): string[] => {
    //FILL HERE
    const activities: string[] = [];
    for (const floor of buildingData) {
      activities.push(floor.activity);
    }
    return activities;
  };
  return {
    buildingData,
    getFloorByIndex,
    getListOfActivities,
  };
};

export default useBuildingData;
