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
  const { value: name } = event.target;
  const id = event.target.getAttribute("data-key");
  return {
    ...clonedFormData,
    [event.target.name]: { id, name },
  };
}

export function updateFromDropdownCheckbox(event, formData) {
  const clonedFormData = { ...formData };

  const { value: name } = event.target;
  const key = event.target.getAttribute("data-attribute");
  const id = event.target.getAttribute("data-key");
  const index = clonedFormData[key].findIndex((el) => el.id === id);

  const clonedCategeories = [...clonedFormData[key]];

  if (index === -1) {
    clonedCategeories.push({ id, name });
    return { ...clonedFormData, [key]: clonedCategeories };
  }
  return {
    ...formData,
    [key]: clonedCategeories.filter((category) => category.id !== id),
  };
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
