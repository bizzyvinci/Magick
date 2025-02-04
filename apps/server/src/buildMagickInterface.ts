import { runSpell } from './utils/runSpell'
import { API_ROOT_URL, APP_SEARCH_SERVER_URL } from '@magickml/engine'
import { app } from './app'

export const buildMagickInterface = (overrides: Record<string, Function> = {}) => {
  const env = {
    API_ROOT_URL,
    APP_SEARCH_SERVER_URL
  }

  return {
    env,
    runSpell: async ({spellName, inputs, projectId}) => {
      const { outputs } = await runSpell({
        spellName,
        inputs,
        projectId
      })
      return outputs
    },
    getSpell: async ({spellName, projectId}) => {
      const spell = await app.service('spells').find({ query: { projectId, name: spellName } })

      return spell
    }
  }
}
