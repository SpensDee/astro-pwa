export function sliceText(text, maxLength) {
  text = text.replace(/[\n\r]/g, " ");
  if (text.length <= maxLength) {
    return text;
  }
  let trimmedText = text.slice(0, maxLength - 3);
  if (text[maxLength - 3] !== " " && text[maxLength - 3] !== undefined) {
    trimmedText = trimmedText.slice(0, trimmedText.lastIndexOf(" "));
  }

  return trimmedText + "...";
}
