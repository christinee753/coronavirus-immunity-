function replaceText(element) {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceText);
  } else if (element.nodeType === Node.TEXT_NODE) {
    if (/coronavirus/i.test(element.textContent)) {
      const newElement = document.createElement('span');
      newElement.innerHTML = element.textContent.replace(
        /(coronavirus)/gi,
        '<span class="rainbow">$1</span>'
      );
      element.replaceWith(newElement);
    }
  }
}

replaceText(document.body);
