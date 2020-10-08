module.exports = {
  // 换行列数 <int>
  printWidth: 120,
  // 取代 tab 的空格数 <int>
  tabWidth: 4,
  // 使用 tab 而不是空格 <bool>
  useTabs: false,
  // 每行末尾是否添加分号 <bool>
  semi: false,
  // 单引号还是双引号 <bool>
  singleQuote: true,
  // object key 是否带括号 <as-needed|consistent|preserve>
  // "as-needed" - 仅在需要时在对象属性周围添加引号。
  // "consistent" - 如果对象中至少有一个属性需要引号，则引用所有属性。
  // "preserve" - 尊重对象属性中引号的输入用法。
  quoteProps: 'as-needed',
  // jsx 的属性用单引号还是双 <bool>
  jsxSingleQuote: false,
  // 多行时是否打印尾随逗号 <"none" - 没有尾随逗号, "es5" - 在ES5中有效的尾随逗号（对象，数组等）, "all" - 尽可能使用尾随逗号（包括函数参数）>
  trailingComma: 'es5',
  // Object 文字是否填充空格 {'1e2': 1} -> { '1e2': 1 } <bool>
  bracketSpacing: true,
  //  多行 JSX 末尾结束符位置  (...\n>)  -> (...>) <bool>
  jsxBracketSameLine: true,
  // 单参数的箭头函数参数是否加上括号 <always|avoid>
  arrowParens: 'always',
  // 换行符用啥 <lf|crlf|cr|auto>
  endOfLine: 'lf'
}