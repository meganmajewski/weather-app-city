export default function kToF(k: string | undefined): string | void {
  if (k !== undefined) {
    const kNum = parseInt(k);
    const kbase = kNum - 273.15;
    return (kbase * (9 / 5) + 32).toString();
  }
}
