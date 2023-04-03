// This file is generated by codegen/index.ts
// Do not edit this file manually
import { Command, Option } from 'clipanion'

export abstract class BaseVersionCommand extends Command {
  static paths = [['version']]

  static usage = Command.Usage({
    description: 'Update version in created npm packages',
  })

  cwd = Option.String('--cwd', process.cwd(), {
    description:
      'The working directory of where napi command will be executed in, all other paths options are relative to this path',
  })

  packageJsonPath = Option.String('--package-json-path', 'package.json', {
    description: 'Path to `package.json`',
  })

  npmDir = Option.String('--npm-dir', 'npm', {
    description: 'Path to the folder where the npm packages put',
  })

  getOptions() {
    return {
      cwd: this.cwd,
      packageJsonPath: this.packageJsonPath,
      npmDir: this.npmDir,
    }
  }
}

/**
 * Update version in created npm packages
 */
export interface VersionOptions {
  /**
   * The working directory of where napi command will be executed in, all other paths options are relative to this path
   *
   * @default process.cwd()
   */
  cwd?: string
  /**
   * Path to `package.json`
   *
   * @default 'package.json'
   */
  packageJsonPath?: string
  /**
   * Path to the folder where the npm packages put
   *
   * @default 'npm'
   */
  npmDir?: string
}

export function applyDefaultVersionOptions(options: VersionOptions) {
  return {
    cwd: process.cwd(),
    packageJsonPath: 'package.json',
    npmDir: 'npm',
    ...options,
  }
}
