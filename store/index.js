import gql from 'graphql-tag'

export const state = () => ({
  items: [],
})

export const mutations = {
  updateItems: (state, data) => {
    state.items = data
  },
}

export const actions = {
  async callApollo({ commit }) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: gql`
        query getItems {
          items {
            name
            id
            expire
          }
        }
      `,
    })

    await commit('updateItems', response.data.items)
  },
}
