import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import test2 from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof test2, 'function')
  },
  async 'calls package without error'() {
    await test2()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await test2({
      text: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T