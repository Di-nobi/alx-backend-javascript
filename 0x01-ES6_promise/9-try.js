export default function guardrail(mathFunction) {
    const data = [];
    try {
        data.push(mathFunction());
    } catch (err) {
        data.push(err);
    }
    data.push('Guardrail was processed');
    return data;
}