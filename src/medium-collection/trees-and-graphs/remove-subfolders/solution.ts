export function removeSubfolders(folder: string[]): string[] {
  folder.sort();
  let prev = "#";
  let result: string[] = [];
  for (const path of folder) {
    if (path.startsWith(prev)) {
      continue;
    }
    result.push(path);
    prev = path + "/";
  }
  return result;
}
