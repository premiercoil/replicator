
var count = 0

// var DB = new PouchDB('http://localhost:5984/test')

var root = document.getElementById('mainContent')

var Hello = {
    view: ()=>{
        return m("main", [
            m('h1', {class:'label'}, "Mithril App"),
            m('button', {onclick: increment}, count+' clicks')
        ])
    }
}

var Tiles = {
    view: ()=>{
        return m('div.tile.is-ancestor', [
            m('div.tile.is-vertical.is-8', [
                m('div.tile', [
                    m('div.tile.is-parent.is-vertical', [
                        m('article.tile.is-child', 'A BOX')
                        ,
                        m('article.tile.is-child', 'A BOX')
                    ])
                    ,
                    m('div.tile.is-parent', m('article.tile.is-child', 'A BOX'))
                ])
                ,
                m('div.tile.is-parent', m('article.tile.is-child', 'A BOX'))
            ])
            ,
            m('div.tile.is-parent', m('article.tile.is-child', 'A BOX'))
        ])
    }
}

var increment = ()=>{
    m.request({
        method: "PUT"
        ,
        url: "//rem-rest-api.heorkuapp.com/api/tutorial/1"
        ,
        data: {count: count + 1}
        ,
        withCredentials: true
    })
    .then((data)=>{
        count = parseInt(data.count)
    })
}

var Splash = {
    view: ()=>{
        return [
            m('a', {href:'#!/hello'}, 'Enter!')
            ,
            m('a', {href:'#!/tiles'}, 'Tiles!')
        ]
    }
}

m.route(root, '/splash', {
    '/splash': Splash
    ,
    '/hello': Hello
    ,
    '/tiles': Tiles
})
