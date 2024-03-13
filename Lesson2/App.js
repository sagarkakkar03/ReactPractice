
const Heading2 = () => (<div id = "heading" key = "2">Hello</div>)
const root = ReactDOM.createRoot(document.getElementById('root'))

const HeaderComponents = () =>  (
<div>
    <Heading2 />
    <h1>
        Namaste React Functional Compnent
    </h1>
    <h2>
        This is h2 tag
    </h2>
</div>
)
// any compnent starts wit capital letter
// functional compone
root.render(<HeaderComponents />)

// React.createELement => Object => HTMl(DOM)
