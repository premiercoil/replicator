import m from 'mithril'

import UserList from './views/UserList'
import UserForm from './views/UserForm'
import Layout from './views/Layout'

var DB = new PouchDB('http://localhost:5984/test')

var root = document.getElementById('mainContent')


m.route(root, '/list', {
    "/list": {
        render: function() {
            return m(Layout, m(UserList))
        }
    }
    ,
    "/edit/:id": {
        render: function(vnode) {
            return m(Layout, m(UserForm, vnode.attrs))
        }
    }
})
