import { Ramda } from "../common/util";
export default {
  name: 'reverse',
  fn: function () {
    return function (input) {
      return Ramda.reverse(input);
    };
  }
}
