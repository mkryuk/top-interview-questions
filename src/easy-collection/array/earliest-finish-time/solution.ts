export function earliestFinishTime(
  landStartTime: number[],
  landDuration: number[],
  waterStartTime: number[],
  waterDuration: number[],
): number {
  let result = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < landStartTime.length; i++) {
    for (let j = 0; j < waterStartTime.length; j++) {
      // option 1: land ride first, then water ride
      const landFinishTime = landStartTime[i] + landDuration[i];
      const waterStartAfterLand = Math.max(landFinishTime, waterStartTime[j]);
      const finishLandThenWater = waterStartAfterLand + waterDuration[j];

      // option 2: water ride first, then land ride
      const waterFinishTime = waterStartTime[j] + waterDuration[j];
      const landStartAfterWater = Math.max(waterFinishTime, landStartTime[i]);
      const finishWaterThenLand = landStartAfterWater + landDuration[i];
      result = Math.min(result, finishLandThenWater, finishWaterThenLand);
    }
  }

  return result;
}
