// Basic implementation of "classnames" library
export function cx(...classNames) {
  return classNames
    .map((className) => {
      if (typeof className === "string") {
        return className;
      }
      if (typeof className === "object") {
        return Object.keys(className)
          .filter((key) => className[key])
          .join(" ");
      }
      return undefined;
    })
    .filter(Boolean)
    .join(" ");
}

export function hyphenate(text) {
  return text.toLowerCase().replaceAll(" ", "-");
}

export function scrollToPage(page) {
  document.getElementById(page).scrollIntoView({
    behavior: "smooth",
  });
}
