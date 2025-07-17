export const getTreatmentPath = (name: string) =>
  name.toLowerCase().replaceAll(" ", "-");
