export default class StyleSheets {
  static styleSheets = [];

  static getStyleSheets() {
    return StyleSheets.styleSheets.join('\n');
  }
}
