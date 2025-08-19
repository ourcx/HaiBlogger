
export function cleanMarkdown(rawContent: string, maxLength: number = 100): string {
  // // 移除 Markdown 语法
  // let cleaned = rawContent
  //   // 移除图片
  //   .replace(/!\[.*?\]\(.*?\)/g, '')
  //   // 移除链接
  //   .replace(/\[(.*?)\]\(.*?\)/g, '$1')
  //   // 移除代码块
  //   .replace(/```[\s\S]*?```/g, '')
  //   // 移除内联代码
  //   .replace(/`[^`]+`/g, '')
  //   // 移除标题标记
  //   .replace(/#+\s*/g, '')
  //   // 移除粗体/斜体标记
  //   .replace(/\*\*([^*]+)\*\*/g, '$1')
  //   .replace(/\*([^*]+)\*/g, '$1')
  //   .replace(/__([^_]+)__/g, '$1')
  //   .replace(/_([^_]+)_/g, '$1')
  //   // 移除引用标记
  //   .replace(/^>\s+/gm, '')
  //   // 移除水平分割线
  //   .replace(/^---+/gm, '')
  //   // 移除 HTML 标签
  //   .replace(/<[^>]+>/g, '')
  //   // 移除多余的空格和换行
  //   .replace(/\s+/g, ' ')
  //   .trim();
  let cleaned = rawContent.replace(/<img\s+[^>]*src\s*=\s*["']([^"']*)["'][^>]*>/gi, '').replace(/!\[(.*?)\]\(.*?\)/g, '')
  if(maxLength === -1)return cleaned
  // 截断到最大长度
  if (cleaned.length > maxLength) {
    // 找到最近的空格处截断
    const lastSpace = cleaned.lastIndexOf(' ', maxLength);
    const truncateAt = lastSpace > maxLength * 0.8 ? lastSpace : maxLength;
    cleaned = cleaned.substring(0, truncateAt) + '...';
  }

  return cleaned;
}