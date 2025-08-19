/**
 * 将 glob 模式转换为非贪婪的正则表达式，以正确捕获 '**' 的内容。
 * @param glob - glob 模式字符串
 * @returns 用于匹配的 RegExp 对象
 */
function globToRegex(glob: string): RegExp {
  // 1. 转义正则表达式中的特殊字符
  let regexString = glob.replace(/([.$+?{}()|[\]\\])/g, '\\$1');

  // 2. 使用占位符安全地替换通配符，防止互相干扰
  //    - 首先处理最具体的 '**/*'
  //    - 然后处理 '**'
  //    - 最后处理 '*'
  //    我们希望捕获 '**' 匹配的内容，所以它将被替换为 `(.*?)` -- 非贪婪模式
  regexString = regexString
    .replace(/\*\*\/\*/g, '__GLOBSTAR_WITH_SLASH_STAR__') // 处理 '**/*' 模式
    .replace(/\*\*/g, '(.*?)')                            // 处理 '**' 模式，使用非贪婪捕获
    .replace(/\*/g, '[^/]*')                             // 处理 '*' 模式
    .replace(/__GLOBSTAR_WITH_SLASH_STAR__/g, '(.*?)[^/]*'); // 还原 '**/*'

  // 3. 添加开头和结尾的锚点
  return new RegExp(`^${regexString}$`);
}

/**
 * (修正版) 使用正则表达式从具体路径中提取与 '**' 匹配的部分。
 *
 * @param pattern - 包含 '**' 的 glob 模式
 * @param path - 匹配该模式的具体文件路径
 * @returns 匹配到的中间部分字符串，如果不匹配则返回 null
 */
export function extractGlobstarMatch(pattern: string, path: string): string | null {
  // 确保模式中确实有 '**' 需要提取
  if (!pattern.includes('**')) {
    console.error("模式中不包含 '**'.");
    return null;
  }
  
  const regex = globToRegex(pattern);
  const match = path.match(regex);
  // match[1] 是第一个捕获组的内容
  if (match && match[1] !== undefined) {
    return match[1];
  }

  return null;
}