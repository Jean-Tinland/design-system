export const triggerInputChange = (node, value) => {
  const inputTypes = [
    window.HTMLInputElement,
    window.HTMLSelectElement,
    window.HTMLTextAreaElement,
  ];

  if (inputTypes.indexOf(node.__proto__.constructor) > -1) {
    const setValue = Object.getOwnPropertyDescriptor(
      node.__proto__,
      "value"
    ).set;
    const event = new Event("input", { bubbles: true });

    setValue.call(node, value);
    node.dispatchEvent(event);
  }
};
