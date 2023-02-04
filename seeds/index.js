import data from './data.json'
import { put } from 'axios'

for (datingProfile of data) {
  put(`https://shy-gray-donkey-slip.cyclic.app/datingprofile`)
}
