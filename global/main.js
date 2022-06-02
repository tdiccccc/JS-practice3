let test = true;
if (test) {
  window.food = 'ケーキ';
  console.log('ローカルスコープ :', food);
  console.log('ローカルスコープ :', window.food);
}
console.log('グローバルスコープ :', food);
console.log('グローバルスコープ :', window.food);