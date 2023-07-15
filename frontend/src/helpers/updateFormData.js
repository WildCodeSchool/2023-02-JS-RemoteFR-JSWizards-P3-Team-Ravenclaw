export function updateFromInput(event, formData) {
  const clonedFormData = { ...formData };
  const isCheckboxType = event.target.type === "checkbox";
  return {
    ...clonedFormData,
    [event.target.name]: isCheckboxType
      ? event.target.checked
      : event.target.value,
  };
}

export function updateFromDropdownRadio(event, formData) {
  const clonedFormData = { ...formData };
  const { id, value: name } = event.target;
  return {
    ...clonedFormData,
    [event.target.name]: { id, name },
  };
}

export function updateFromDropdownCheckbox(event, formData) {
  const clonedFormData = { ...formData };
  const { name: key, id, value: name } = event.target;
  const newObj = { id, name };
  const index = clonedFormData[key].findIndex((el) => el.id === id);
  if (index === -1) {
    clonedFormData[key].push(newObj);
  } else {
    clonedFormData[key][index] = newObj;
  }
  return clonedFormData;
}

export function updateFromFileInput(event, imageRef, videoRef, formData) {
  const clonedFormData = { ...formData };
  const isVideoType = event.target.name === "video";
  const ref = isVideoType ? videoRef : imageRef;
  const { name, type } = ref.current.files[0];
  return {
    ...clonedFormData,
    [event.target.name]: { name, type },
  };
}
