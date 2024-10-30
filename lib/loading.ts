export async function wait(ms: any) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
