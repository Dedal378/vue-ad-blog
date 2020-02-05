import * as fb from 'firebase';

class Ad {
  constructor (title, description, ownerId, imageSrc = '', promo = false, id = null) {
    this.title = title;
    this.description = description;
    this.ownerId = ownerId;
    this.imageSrc = imageSrc;
    this.promo = promo;
    this.id = id
  }
}

export default {
  state: {
    ads: [
      {
        title: 'First ad',
        description: 'Hello i am description',
        promo: false,
        imageSrc: 'https://picsum.photos/id/157/1200/800.webp',
        id: '1'
      },

      {
        title: 'Second ad',
        description: 'Hello i am description',
        promo: true,
        imageSrc: 'https://picsum.photos/id/1081/1200/800.webp',
        id: '2'
      },

      {
        title: 'Third ad',
        description: 'Hello i am description',
        promo: true,
        imageSrc: 'https://picsum.photos/id/1076/1200/800.webp',
        id: '3'
      },

      {
        title: 'Fourth ad',
        description: 'Hello i am description',
        promo: true,
        imageSrc: 'https://picsum.photos/id/357/1200/800.webp',
        id: '4'
      },
    ]
  },
  mutations: {
    createdAd (state, payload) {
      state.ads.push(payload)
    }
  },
  actions: {
    async createdAd ({commit, getters}, payload) {
      commit('clearErorr');
      commit('setLoading', true);

      try {
        const newAd = new Ad(
          payload.title,
          payload.description,
          getters.user.id,
          payload.imageSrc,
          payload.promo
        );

        const ad = await fb.database().ref('ads').push(newAd);

        commit('setLoading', false);
        commit('createAd',  {
          ...newAd,
          id: ad.key
        })

      } catch (error) {
        commit('setError', error.message);
        commit('setLoading', false);
        throw error
      }
    }
  },
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ad => {
        return ad.promo
      })
    },
    myAds (state) {
      return state.ads
    },
    adById (state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    }
  }
}

