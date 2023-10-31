import {Command, ux} from '@oclif/core'

import {sleep} from '../lib/util'

export default class Scc extends Command {
  static description = 'Starts the SCC CLI'

  async run(): Promise<void> {
    ux.action.start('Work in progress')

    await sleep(10_000)

    ux.action.stop()
  }
}
