import axios from 'axios';
import Transfer from '@/api/Transfer';

export const getTransfers = ({commit}) => {
  Transfer.fetchAll()
  .then((response) =>{
    commit('SET_TRANSFERS', response.data);
  })
}

export const getTransfer = ({commit}, transferId) => {
  Transfer.fetch(transferId)
  .then((response) =>{
    commit('SET_TRANSFER', response.data);
  })
}