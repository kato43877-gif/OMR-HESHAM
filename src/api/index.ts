import { Hono } from 'hono'
import { auth } from './auth'
import { campaigns } from './campaigns'
import { donations } from './donations'
import { volunteers } from './volunteers'
import { contacts } from './contacts'
import { news } from './news'

const api = new Hono()

api.route('/auth', auth)
api.route('/campaigns', campaigns)
api.route('/donations', donations)
api.route('/volunteers', volunteers)
api.route('/contacts', contacts)
api.route('/news', news)

export { api }
