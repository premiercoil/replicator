import m from 'mithril'
import User from '../models/User'

var UserList = {
    oninit: User.loadList,
    view: function() {
        return m(".user-list", User.list.map(function(user) {
            return [
                m("a.user-list-item", {href: "/edit/" + user.id, oncreate: m.route.link}, user.firstName + " " + user.lastName)
                ,
                m('br')
            ]
        }))
    }
}

export default UserList
