import getCv from './getCv'
import data from './default_data.json'

describe('getCv', () => {
  it('should return default data', async () => {
    const result = await getCv()
    expect(result).toEqual(data)
  })
})
