const devicesSizeMobile = ["md", "sm", "xs"];

export const thisIsAphone = (currentResolution) => {
  let thisIsAphone = devicesSizeMobile.indexOf(currentResolution) != -1;

  return thisIsAphone;
}

export const thisIsAphoneSm = (currentResolution) => {
  let thisIsAphone = ["sm", "xs"].indexOf(currentResolution) != -1;

  return thisIsAphone;
}

export const thisIsAphoneParameter = (currentResolution, parameter = []) => {
  let thisIsAphone = parameter.indexOf(currentResolution) != -1;

  return thisIsAphone;
}