export default function pluralize(
    n: number,
    singularForm: string,
    pluralForm: string
) {
    if (n % 10 === 1 && n % 100 !== 11) {
        return singularForm;
    }
    return pluralForm;
}
