export async function loadLocacaoData() {
  const module = await import("@/data/locacao.json");

  if (typeof structuredClone === "function") {
    return structuredClone(module.default);
  }

  return JSON.parse(JSON.stringify(module.default));
}
