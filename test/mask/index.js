import { makeTestSuite } from 'zoroaster'
import Context from '../context'
import test2 from '../../src'

const ts = makeTestSuite('test/result', {
  async getResults(input) {
    const res = await test2({
      text: input,
    })
    return res
  },
  context: Context,
})

export default ts