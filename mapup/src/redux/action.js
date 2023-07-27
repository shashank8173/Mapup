export const setRegion = (region) => {
 return {
   type: 'SET_REGION',
   payload: region,
 };
};

export const setRegionInfo = (regionInfo) => {
 return {
   type: 'SET_REGION_INFO',
   payload: regionInfo,
 };
};

// Bonus action for night mode
export const toggleNightMode = () => {
 return {
   type: 'TOGGLE_NIGHT_MODE',
 };
};
