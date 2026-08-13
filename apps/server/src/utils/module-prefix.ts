import { sep } from 'node:path'

const MODULES_DIR = 'modules'

/** From `.../modules/v1/status` → `/v1/status` */
export function modulePrefixFromDir(dir: string): string {
  const parts = dir.split(sep)
  const index = parts.lastIndexOf(MODULES_DIR)

  if (index === -1 || index === parts.length - 1) {
    throw new Error(`Expected a path under "${MODULES_DIR}/", got: ${dir}`)
  }

  return `/${parts.slice(index + 1).join('/')}`
}
