function stripTags(original) {
  return original.replace(/(<([^>]+)>)/gi, "");
}

export const Tools = { stripTags };

// const ele = document.createElement("div");
// ele.innerHTML = original.replace(/(<([^>]+)>)/gi, ""); //.replace(/(<([^>]+)>)/gi, "")
// return ele.innerHTML;
