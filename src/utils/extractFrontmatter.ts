export function extractFrontmatter(content: string): Record<string, string> {
  const frontmatter: Record<string, string> = {};
  const match = content.match(/^---\s*([\s\S]*?)\s*---/);

  if (match && match[1]) {
    match[1].split("\n").forEach((line) => {
      const [key, ...valueParts] = line.split(":");
      if (key && valueParts.length > 0) {
        const value = valueParts.join(":").trim();
        frontmatter[key.trim()] = value;
      }
    });
  }

  return frontmatter;
}