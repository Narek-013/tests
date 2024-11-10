export const UseEvent = (ev) => {
  const event = {};
  const inputNames = [];

  ev.target.childNodes.forEach((input, idx) => {
    if (input && input.type) {
      let inputName = input.type;

      if (inputNames.includes(inputName)) {
        inputName = `${inputName}_${idx}`;
      }
      inputNames.push(inputName);

      if (input.type === "text") {
        const regex = /^[a-zA-Z\s]*$/;
        event[inputName] = regex.test(input.value) ? input.value : "Invalid input";
      } else {
        event[inputName] = input.value;
      }
    }
  });

  return event;
};
