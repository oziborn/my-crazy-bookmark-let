// ブラウザの開発者コンソールのコンソールに貼り付ける
function main() {
  const uniqueId = 'A'
  const sex = 'セックス'
  const style = 'margin: 20px; min-width: 300px; max-width: 1000px; z-index: 999; background-color: #E7F1ED'
  const input = `<input type="text" id="${uniqueId}" style="${style}" placeholder="セックスが含まれる単語を入力してください　ex: エセックス、ユニセックス"/>`
  const body = document.getElementsByTagName('body')[0]
  body.insertAdjacentHTML('afterbegin', input)
  const eventTargetTag = document.getElementById(uniqueId)
  const checkContainSex = (event) => String(event.target.value).match(/セックス/)?.[0] === sex
  eventTargetTag.addEventListener('change', (event) => {
    const result = checkContainSex(event)
    window.alert(result? `${sex}が含まれていますね！ よくできました。`: `${sex}が含まれていません`)
    eventTargetTag.remove()
    eventTargetTag.removeEventListener('change', checkContainSex, false)
  })
  window.scrollTo(0,0)
}
main()

// ブックマークレット版
javascript:var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.createTemplateTagFirstArg=function(a){return a.raw=a};$jscomp.createTemplateTagFirstArgWithRaw=function(a,c){a.raw=c;return a};
function main(){document.getElementsByTagName("body")[0].insertAdjacentHTML("afterbegin",'<input type="text" id="A" style="margin: 20px; min-width: 300px; max-width: 1000px; z-index: 999; background-color: #E7F1ED" placeholder="\u30bb\u30c3\u30af\u30b9\u304c\u542b\u307e\u308c\u308b\u5358\u8a9e\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3000ex: \u30a8\u30bb\u30c3\u30af\u30b9\u3001\u30e6\u30cb\u30bb\u30c3\u30af\u30b9"/>');var a=document.getElementById("A"),c=function(b){var d;return"\u30bb\u30c3\u30af\u30b9"===
(null==(d=String(b.target.value).match(/\u30bb\u30c3\u30af\u30b9/))?void 0:d[0])};a.addEventListener("change",function(b){b=c(b);window.alert(b?"\u30bb\u30c3\u30af\u30b9\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u306d\uff01 \u3088\u304f\u3067\u304d\u307e\u3057\u305f\u3002":"\u30bb\u30c3\u30af\u30b9\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u305b\u3093");a.remove();a.removeEventListener("change",c,!1)});window.scrollTo(0,0)}main();
