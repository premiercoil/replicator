import m from 'mithril'

var Layout = {
    view: (vnode)=>{
        return m("main.layout", [
            m("nav.nav-center", [
                m('.nav-left', 'Replica')
                ,
                m('.nav-center', [
                    m("a.nav-item[href='/']", {oncreate: m.route.link}, "Default")
                    ,
                    m("a.nav-item[href='/list']", {oncreate: m.route.link}, "Users")
                ])
                ,
                m('.nav-right', 'right')
            ])
            ,
            m('hr')
            ,
            m("section.container", vnode.children)
            ,
            m('hr')
            ,
            m('footer', 'Footer Content')
        ])
    }
}

export default Layout
