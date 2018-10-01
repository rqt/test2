/* yarn example/ */
import test2 from '../src'

(async () => {
  const res = await test2({
    text: 'example',
  })
  console.log(res)
})()