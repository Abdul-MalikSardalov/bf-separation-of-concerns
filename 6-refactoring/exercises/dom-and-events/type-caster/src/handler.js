import typeCaster from './util.js';
import dom from './data.js';

const castTheValue = (event) => {
    const form = event.target.form;
    const intendedType = form.type.value;
    const stringToCast = form.value.value;

    const typedCaster = typeCaster(intendedType, stringToCast);

    dom.output.innerHTML = typeof typedCaster + ': ' + typedCaster;
};

export default castTheValue;
