// Guarda o hash de uma navegação "sintética" (provocada pelo
// LocalizedRouteSync ao corrigir o URL para o idioma atual), para que o
// HashScrollHandler saiba que não deve fazer scroll nesse ciclo.
//
// Comparamos por valor (em vez de "consumir" a flag na primeira leitura)
// para sobreviver ao StrictMode, que invoca os efeitos duas vezes em
// desenvolvimento: as duas invocações veem o mesmo hash e são ambas
// corretamente suprimidas. Só quando aparece um hash diferente é que a
// supressão é limpa, deixando esse novo hash seguir o fluxo normal.
let suppressedHash = null;

export function suppressNextHashScroll(hash) {
  suppressedHash = hash;
}

export function shouldSuppressHashScroll(hash) {
  if (suppressedHash === null) {
    return false;
  }

  if (hash !== suppressedHash) {
    suppressedHash = null;
    return false;
  }

  return true;
}
