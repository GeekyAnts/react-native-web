export default class CombinedStyles {
  static styleSheets = [];

  static getStyleSheets() {
    return CombinedStyles.styleSheets.join('\n');
  }
}
