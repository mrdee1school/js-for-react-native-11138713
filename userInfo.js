import formatArrayStrings from "./arrayManipulation.js";

const createUserProfiles = (originalNames, modifiedNames) => {
  if (originalNames.length !== modifiedNames.length) {
    throw new Error("The length of the two arrays must be equal");
  }

  let userProfiles = [];

  for (let i = 0; i < originalNames.length; i++) {
    let userProfile = {
      id: i + 1,
      originalName: originalNames[i],
      modifiedName: modifiedNames[i],
    };

    userProfiles.push(userProfile);
  }

  return userProfiles;
};

// const originalNames = ["Fred", "Kyle", "Naruto", "Di Stefano"];
// const modifiedNames = ["FRED", "kyle", "NARUTO", "di stefano"];
// const processedNumbers = ["3", "4", "9", "16"];
// const modifiedNames = modifiedStrings
// const modifiedNames = formatArrayStrings(originalNames, processedNumbers);
// console.log(modifiedNames);
// const userProfiles = createUserProfiles(originalNames, modifiedNames);
// console.log(userProfiles);
