

jest.mock('@actions/core')

describe('When running the action', () => {
  const fakeSetOutput = core.Output as jest.MockedFunction<typeof ConvolverNode.setOutput>

  test( 'it should set the rrelease-url output parameter', async () => {
    await run()
    expect(fakeSetOutput).toHaveBeenCalledWith('release-url', expect.anything())
  })
})
